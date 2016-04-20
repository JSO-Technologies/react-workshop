import React, {PropTypes} from 'react'; // eslint-disable-line
import Regions from './regions';
import WineList from './wine-list';
import Wine from './wine';

const WineApp = React.createClass({
    getInitialState() {
        return {
            regions: [],
            region: null,
            wines: [],
            wine: null,
            details: null
        }
    },

    componentDidMount() {
        fetch(`/api/regions`)
            .then((response) => response.json())
            .then((regions) => {
                this.setState({
                    regions: regions
                });
                return regions;
            })
            .then((regions) => this.onRegionChange(regions[0]));
    },

    onRegionChange(region) {
        if(!region) {
            this.setState({
                region: region,
                wines: null,
                wine: null,
                details: null
            });
            return;
        }

        fetch(`/api/wines?region=${region}`)
            .then((response) => response.json())
            .then((wines) => {
                this.setState({
                    region: region,
                    wines: wines
                });
                return wines;
            })
            .then((wines) => this.onWineChange(wines[0]));
    },

    onWineChange(wine) {
        if(!wine) {
            this.setState({
                wine: wine,
                details: null
            });
            return;
        }

        fetch(`/api/wines/${wine.id}`)
            .then((response) => response.json())
            .then((details) => {
                this.setState({
                    wine: wine,
                    details: details
                });
            });
    },

    render () {
        const wineElement = this.state.details ? <Wine wine={this.state.details}/> : null;
        return (
            <div className="grid">
                <div className="1/4 grid__cell">
                    <h2>Regions</h2>
                    <Regions regions={this.state.regions}
                             selected={this.state.region}
                             onRegionChange={(region) => this.onRegionChange(region)}/>
                </div>
                <div className="1/3 grid__cell">
                    <h2>Wine List</h2>
                    <WineList wines={this.state.wines}
                              selected={this.state.wine}
                              onWineChange={(wine) => this.onWineChange(wine)}/>
                </div>
                <div className="5/12 grid__cell">
                    <h2>Wine Description</h2>
                    {wineElement}
                </div>
            </div>
        )
    }
});

export default WineApp

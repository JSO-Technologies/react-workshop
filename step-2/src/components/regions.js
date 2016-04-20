import React, {PropTypes} from 'react'; // eslint-disable-line

// vous devriez utiliser cette fonction pour le style de chaque région
function computeRegionStyle(region, selected) { // eslint-disable-line
    let style = {
        padding: 16
    };
    if (region === selected) {
        style['fontWeight'] = 'bold';
        style['backgroundColor'] = 'lightGrey';
    }
    return style;
}

const Regions = React.createClass({
    propTypes: {
        regions: React.PropTypes.array.isRequired,
        selected: React.PropTypes.string,
        onRegionChange: React.PropTypes.func
    },

    render () {
        return (
            <div>
                {this.props.regions.map(
                    (region) => 
                        <div key={region}
                             style={computeRegionStyle(region, this.props.selected)}
                             onClick={() => this.props.onRegionChange(region)}>
                            {region}
                        </div>
                )}
            </div>
        )
    }
});

export default Regions

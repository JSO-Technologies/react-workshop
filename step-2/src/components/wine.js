import React from 'react';

const WineStyle = {
    padding: 8,
    boxShadow: '0 1px 6px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.12)'
};

const Styles = { // eslint-disable-line
    Card: {
        padding: 8,
        boxSizing: 'border-box',
        boxShadow: '0 1px 6px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.12)',
        minHeight: 280
    },
    Title: {
        fontWeight: 'bold',
        fontSize: '1.2em'
    },
    Info: {
        marginTop: 16,
        marginBottom: 16
    },
    Label: {
        color: 'white',
        marginRight: 8,
        padding: 4,
        background: 'grey',
        borderRadius: '4px'
    },
    Image: {
        float: 'left'
    }
};

const Wine = React.createClass({
    propTypes: {
        wine: React.PropTypes.object.isRequired
    },

    render() {
        return (
            <div style={WineStyle.Card}>
                <img style={Styles.Image} src={`/api/wines/${this.props.wine.id}/image`}/>
                <div style={Styles.Title}>{this.props.wine.name}</div>
                <div style={Styles.Info}>
                    <span style={Styles.Label}>Type</span>
                    {this.props.wine.type}
                </div>
                <div style={Styles.Info}>
                    <span style={Styles.Label}>Région</span>
                    {this.props.wine.appellation.region}
                </div>
                <div style={Styles.Info}>
                    <span style={Styles.Label}>Appellation</span>
                    {this.props.wine.appellation.name}
                </div>
                <div style={Styles.Info}>
                    <span style={Styles.Label}>Cépages</span>
                    {this.props.wine.grapes.join(', ')}
                </div>
            </div>
        );
    }
});

export default Wine;

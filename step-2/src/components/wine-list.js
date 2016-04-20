import React, {PropTypes} from 'react'; // eslint-disable-line

// vous devriez utiliser cette fonction pour le style de chaque région
function computeWineStyle(region, selected) { // eslint-disable-line
    let style = {
        padding: 16
    };
    if (region === selected) {
        style['fontWeight'] = 'bold';
        style['backgroundColor'] = 'lightGrey';
    }
    return style;
}

const WineList = React.createClass({
    propTypes: {
        wines: React.PropTypes.array.isRequired,
        selected: React.PropTypes.object,
        onWineChange: React.PropTypes.func
    },

    render () {
        return (
            <div>
                {this.props.wines.map((wine) => 
                    <div key={wine.id}
                         style={computeWineStyle(wine, this.props.selected)}
                         onClick={() => this.props.onWineChange(wine)}>
                        {wine.name}
                    </div>
                )}
            </div>
        )
    }
})

export default WineList

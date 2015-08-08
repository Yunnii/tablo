var b = require('b_').with('grid');

var GridRow = require('./grid__row/grid__row');
require('./grid__cell-inner/grid__cell-inner.css');
require('./grid__cell/grid__cell');

var GridHead = require('./grid__head/grid__head');

var Grid = React.createClass({

    render: function () {
        var flights =this.props.data.map(function(flight, i) {
            return (
                <GridRow flight={flight} order={this.props.order}
                    onClick={this.props.showPopup} key={'row-' + i}></GridRow>
            );
        }.bind(this));

        return (
            <div className={b()}>
                <GridHead order={this.props.order} propertyNames={this.props.propertyNames}>
                </GridHead>
                <div className={b('body')}>
                {flights}
                </div>
            </div>
        );
    }
});

module.exports = Grid;

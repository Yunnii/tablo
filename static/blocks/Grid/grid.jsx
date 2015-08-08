var b = require('b_').with('grid');
require('./__row/grid__row');
require('./__cell-inner/grid__cell-inner.css');
require('./__cell/grid__cell');

var GridHead = require('./__head/grid__head');
var Logo = require('../Logo/logo');

var Grid = React.createClass({
    render: function () {
        var flights =this.props.data.map(function(flight) {
            var fields = this.props.order.map(function(field){
                var fieldInfo = flight[field];

                if(field === 'airLogo') {
                    fieldInfo = <Logo name={flight[field]}/>;
                }

                return (
                    <div className={b('cell', {name: field})}>
                        <div className={b('cell-inner')}>
                        {fieldInfo}
                        </div>
                    </div>
                );
            });

            return (
                <div className={b('row')}>
                {fields}
                </div>
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

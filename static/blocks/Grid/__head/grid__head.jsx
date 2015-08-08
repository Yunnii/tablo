var b = require('b_').with('grid');
require('./grid__head.css');

var GridHead = React.createClass({
    render: function () {
        var header = this.props.order.map(function(field){
            return (
                <div className={b('cell', {name: field})}>
                    <div className={b('cell-inner')}>
                    {this.props.propertyNames[field]}
                    </div>
                </div>
            )
        }.bind(this));

        return (
            <div className={b('head')}>
                {header}
            </div>
        );
    }
});

module.exports = GridHead;
var b = require('b_').with('grid');
var Logo = require('../../Logo/logo');

var GridHead = React.createClass({
    render: function () {
        var header = this.props.order.map(function(field, i){
            return (
                <div className={b('cell', {name: field})} key={'head-' + i}>
                    <div className={b('cell-inner', {head: 'yes'})}>
                    {this.props.propertyNames[field]}
                    </div>
                    <div>
                        {
                            (field === 'departureTime' || field === 'arriveTime')
                                ? <Logo name={field} type='air'></Logo>
                                : ''
                            }
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

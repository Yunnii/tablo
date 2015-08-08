var b = require('b_').with('grid');
var Logo = require('../../Logo/logo');

var GridRow = React.createClass({
    onClick: function() {
        this.props.onClick(this.props.flight);
    },

    render: function () {
        var flight = this.props.flight;

        var fields = this.props.order.map(function(field, i){
            var fieldInfo = flight[field];

            if(field === 'airLogo') {
                fieldInfo = <Logo name={flight[field]}/>;
            }

            return (
                <div className={b('cell', {name: field})} key={'cell-' + i}>
                    <div className={b('cell-inner')}>
                        {fieldInfo}
                    </div>
                </div>
            );
        });

        return (
            <div className={b('row')} onClick={this.onClick}>
                {fields}
            </div>
        );
    }
});

module.exports = GridRow;

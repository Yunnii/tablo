var b = require('b_').with('popup');
var paranja = require('b_').with('paranja');

var Popup = React.createClass({
    hide: function() {
        this.popup = this.popup || document.getElementsByClassName('popup')[0];
        this.popup.className = "popup";
    },

    render: function () {
        var flightInfo = this.props.order.map(function(field, i) {

            return (
                <span className={b('text')} key={'popup-i-' + i}>
                {this.props.info[field]}
                </span>
            )
        }.bind(this));

        return (
            <div className={b()}>
                <div className={paranja({state: 'open'})} onClick={this.hide}></div>
                <div className={b('section')}>
                    <div className={b("content")}>
                    {flightInfo}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Popup;

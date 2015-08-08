var b = require('b_').with('promo-page');
var Grid = require('../Grid/grid');
var Popup = require('../Popup/popup');

var PromoPage = React.createClass({
    getInitialState: function() {
        return {
            info: {}
        };
    },

    showPopup: function(info) {
        this.setState({
            info: info
        });

        this.popup = this.popup || document.getElementsByClassName('popup')[0];
        this.popup.className = this.popup.className + " popup_show_yes";
    },

    render: function () {
        return (
            <div className={b()}>
                <Grid data={this.props.flights.flights}
                      order={this.props.flights.order}
                      propertyNames={this.props.flights.propertyNames}
                      showPopup={this.showPopup}
                >
                </Grid>
                <Popup info={this.state.info}
                       order={this.props.flights.order}></Popup>
            </div>
        );
    }
});

module.exports = PromoPage;

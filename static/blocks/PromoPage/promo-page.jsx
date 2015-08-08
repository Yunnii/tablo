var b = require('b_').with('promo-page');
var Grid = require('../Grid/grid');

var PromoPage = React.createClass({

    render: function () {
        return (
            <div className={b()}>
                <Grid data={this.props.flights.flights}
                      order={this.props.flights.order}
                      propertyNames={this.props.flights.propertyNames}
                >
                </Grid>
            </div>
        );
    }
});

module.exports = PromoPage;

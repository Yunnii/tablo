var PromoPage = require('../blocks/PromoPage/promo-page.jsx');
var flights = require('data/flights.json');

React.render(
    <PromoPage flights={flights}/>,
    document.getElementById('content')
);

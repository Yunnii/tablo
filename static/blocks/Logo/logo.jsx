var b = require('b_').with('logo');

var Logo = React.createClass({
    render: function () {
        return (
            <img src={'/tablo/static/deploy//i/' + this.props.name + '.png'}
                alt={this.props.name} className={b({type: this.props.type})}/>
        );
    }
});

module.exports = Logo;

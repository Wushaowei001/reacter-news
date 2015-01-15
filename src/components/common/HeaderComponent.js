var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var HeaderComponent = React.createClass({
  render: function() {
    if(this.props.name === "shownew") {
      var liStyle = {
        display: "inline-block"
      };
    }
    else {
      var liStyle = {
        display: "none"
      }
    }
    return (
      <header>
        <ul>
          <li>
            <div className="logo">
              <span><a href="#">R</a></span>
            </div>
          </li>
          <li>
            <div className="heading">
              <Link to="news">Reacter News</Link>
            </div>
          </li>
          <li>
            <ul className="nested-list">
              <li><Link to="newest">new</Link></li>
              <li>|</li>
              <li><Link to="newcomments">comments</Link></li>
              <li>|</li>
              <li><Link to="show">show</Link></li>
              <li>|</li>
              <li><Link to="ask">ask</Link></li>
              <li>|</li>
              <li><Link to="jobs">jobs</Link></li>
              <li style={liStyle}>|</li>
              <li style={liStyle}><Link to="shownew">shownew</Link></li>
            </ul>
          </li>
        </ul>
      </header>
    )
  }
});

module.exports = HeaderComponent;
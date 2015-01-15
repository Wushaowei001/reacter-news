require('console-polyfill');
require('es5-shim');
require("6to5/register");
var React = require('react');
var ReacterNewsApp = require('./components/ReacterNewsApp');
var StoriesComponent = require('./components/stories/StoriesComponent');
var UserComponent = require('./components/users/UserComponent');
var ItemComponent = require('./components/items/ItemComponent');
var JobsComponent = require('./components/stories/JobsComponent');
var NewestStoriesComponent = require('./components/stories/NewestStoriesComponent');
var AskHNStoriesComponent = require('./components/stories/AskHNStoriesComponent');
var ShowHNStoriesComponent = require('./components/stories/ShowHNStoriesComponent');
var NewestShowHNStoriesComponent = require('./components/stories/NewestShowHNStoriesComponent');
require('../scss/styles.scss');
require('../node_modules/font-awesome/scss/font-awesome.scss');



var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var HistoryLocation = Router.HistoryLocation;

var routes = (
  <Route name="app" path="/" handler={ReacterNewsApp}>
    <Route name="news" handler={StoriesComponent} />
    <Route name="newest" handler={NewestStoriesComponent} />
    <Route name="newcomments" handler={StoriesComponent} />
    <Route name="show" handler={ShowHNStoriesComponent} />
    <Route name="shownew" handler={NewestShowHNStoriesComponent} />
    <Route name="ask" handler={AskHNStoriesComponent} />
    <Route name="user" handler={UserComponent} />
    <Route name="item" handler={ItemComponent} />
    <Route name="jobs" handler={JobsComponent} />
    <DefaultRoute handler={StoriesComponent} />
  </Route>
);

Router.run(routes, HistoryLocation, function(Handler) {
  React.render(<Handler />, document.getElementById('container'));
});

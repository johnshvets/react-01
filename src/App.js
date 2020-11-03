import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Loader from "./components/common/loader";
import store from "./redux/redux-store";
import { compose } from "redux";
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />

        <Navbar />

        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />

          <Route path="/users" render={withSuspense(UsersContainer)} />

          <Route path="/news" render={withSuspense(News)} />

          <Route path="/music" render={withSuspense(Music)} />

          <Route path="/settings" render={withSuspense(Settings)} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ initialized: state.app.initialized });

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const AppProvider = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default AppProvider;

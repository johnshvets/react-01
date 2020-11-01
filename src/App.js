import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Loader from "./components/common/loader";
import store from "./redux/redux-store";
import { compose } from "redux";

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

          <Route path="/dialogs" render={() => <DialogsContainer />} />

          <Route path="/users" render={() => <UsersContainer />} />

          <Route path="/news" render={() => <News />} />

          <Route path="/music" render={() => <Music />} />

          <Route path="/settings" render={() => <Settings />} />
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

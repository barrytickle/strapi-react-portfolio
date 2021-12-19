import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { connect } from "react-redux";
import getPages from "./api/getPages";
import getAllPages from "./actions/pages";
import PageContent from "./layouts/PageContent";
import { buildSchema } from "graphql";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("APP PROPS", this.props);
    if (this.props.page === 404) {
      return <h1>Error: Page not found</h1>;
    } else {
      return <PageContent />;
    }
  }
}

function mapStateToProps(state) {
  const { pages } = state;
  return { page: pages };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllPages: (response) => dispatch(getAllPages(response)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

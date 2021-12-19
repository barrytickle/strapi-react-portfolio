import React from "react";
import getPages from "./getPages";
import { connect } from "react-redux";
import getAllPages from "../actions/pages";
import App from "../App";
import parseNavigation from "./parseNavigation";

class BuildSchema extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: window.location.pathname,
      page: 200,
      navigation: [],
      pageData: [],
    };
  }
  pageData() {
    getPages(this.state.pathname).then((response) => {
      const data = response.data.data.pages.data[0];
      if (!data) {
        this.setState({ page: 404 });
      } else {
        this.setState({ pageData: data });
        this.props.getAllPages(data);
      }
    });
  }
  navigationData() {
    console.log("is this firing?");
    parseNavigation().then((response) => {
      console.log("Parse Navigation", response);
      const data = response.data.data.navigation.data;
      if (!data) {
        this.setState({ page: 404 });
      } else {
        this.setState({ pageData: data });
        this.props.getAllPages(data);
      }
    });
  }

  componentDidMount() {
    this.pageData();
    this.navigationData();
  }

  render() {
    return <App pathname={this.state.pathname} page={this.state.page} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(BuildSchema);

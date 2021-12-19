import React from "react";
import { connect } from "react-redux";
import Components from "../page_components";

class PageContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.page) {
      const layout = this.props.page.attributes.PageContent;
      if (layout) {
        return layout.map((row) => {
          const Component = Components[row.type];
          if (Component) {
            return <Component attributes={row} />;
          } else {
            return <p>file is missing {row.type}</p>;
          }
        });
      } else {
        return <p>No content found</p>;
      }
    } else {
      return <p>Loading page...</p>;
    }
  }
}

function mapStateToProps(state) {
  console.log("STATE", state);
  const { pages } = state;
  return { page: pages[0] };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, null)(PageContent);

// export default PageContent;

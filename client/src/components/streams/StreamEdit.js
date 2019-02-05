import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";

import StreamForm from "./streamForm";

class StreamEdit extends Component {
  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    console.log(this.props.stream);
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={
            this.props.stream
              ? _.pick(this.props.stream, "title", "description")
              : null
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
    console.log(this.props.streams);
  }

  renderList() {
    return this.props.streams.map(stream => (
      <div className="item" key={stream.id}>
        {this.props.currentUserId === stream.userId ? (
          <div className="right floated content">
            <Link
              to={`/streams/edit/${stream.id}`}
              className="ui primary button"
            >
              Edit
            </Link>
            <Link
              to={`/streams/delete/${stream.id}`}
              className="ui negative button"
            >
              Delete
            </Link>
          </div>
        ) : null}
        <i className="large middle aligned icon camera" />
        <div className="content">
          <Link to={`/streams/${stream.id}`} className="header">
            {stream.title}
          </Link>
          <div className="description">{stream.description}</div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.props.isSignedIn ? (
          <div style={{ textAlign: "right" }}>
            <Link to="/streams/new" className="ui primary button">
              Create Stream
            </Link>
          </div>
        ) : (
          <div>Hello</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  streams: Object.values(state.streams),
  currentUserId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn
  // Object.values is a built in function that takes the values inside an object and stores it in a array
});

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);

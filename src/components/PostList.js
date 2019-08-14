import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    //call the action
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <div className="content">
            <div className="header">Title:</div>
            <div className="header">{post.title}</div>
            <br />
            <div className="description">Post Content: </div>
            <div className="description"> {post.body}</div>
          </div>
          <div>
            <UserHeader userId={post.userId} />
          </div>
          <br />
          <br />
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.posts);
    return (
      <div className="ui middle aligned animated list">{this.renderList()}</div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts: fetchPosts }
)(PostList);

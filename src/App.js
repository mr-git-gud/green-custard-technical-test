import React from 'react';
import Search from './components/Search/Search';
import PostList from './components/Post/PostList';
import './App.css';
import { connect } from 'react-redux';
import { setSearchedUser, requestPosts, requestUsers, setUserId } from './actions';

const mapStateToProps = (state) => {
  return {
    searchedUser: state.searchUser.searchedUser,
    posts: state.requestPosts.posts,
    isPending: state.requestPosts.isPending,
    error: state.requestPosts.error,
    users: state.requestUsers.users,
    isPendingUsers: state.requestUsers.isPendingUsers,
    errorUsers: state.requestUsers.errorUsers,
    userID: state.setUserID.userID
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchedUser(event.target.value)),
    onRequestPosts: (userId) => dispatch(requestPosts(userId)),
    onRequestUsers: () => dispatch(requestUsers()),
    setUserID: (text) => dispatch(setUserId(text))
  }
}

class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="row search-bar-row">
          <Search {...this.props}/>
        </div>
        <div className="row post-list-row">
          <PostList {...this.props}/>
        </div>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

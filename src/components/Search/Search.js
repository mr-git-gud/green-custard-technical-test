import React from 'react';
import './search.css';

class Search extends React.Component {
  findUserId = () => {
    const { searchedUser, users, setUserID } = this.props;
    const findUser = users.filter((user) => {
      return user.name === searchedUser || user.username === searchedUser;
    })
    if(findUser[0] !== undefined && findUser[0].id){
      setUserID(findUser[0].id);
      this.props.onRequestPosts(findUser[0].id);
    } else {
      alert("User not found, search again");
    }
  }

  render(){
    return (
      <div id="searchBarContainer">
        <input id="searchBar" type="search" placeholder="<User>" onChange={this.props.onSearchChange}/>
        <button className="btn btn-warning search-users" onClick={this.findUserId}>Select</button>
      </div>
    )
  }
}

export default Search;

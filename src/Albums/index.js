import React, { Component, useState, useEffect } from 'react';

const renderAlbums = (albums) => {
  return albums.map(album => {
    return (
      <div key={ album.id } className="album-container">
        <span>Title: {album.title}</span>
        <span>Description: {album.body}</span>
      </div>
    );
  })
};

// Using class based component as there is an ongoing issue with testing state and functional components
class Albums extends Component {
  state = {
    albums: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
      return res.json();
    }).then((response) => {
      this.setState({albums: response});
    })
  }

  render() {
    const { albums } = this.state;
    return (
      <div className='albums-container'>
        {renderAlbums(albums)}
      </div>
    )
  }
}

export default Albums;
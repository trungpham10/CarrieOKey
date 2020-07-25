import React, { Component } from 'react'

export default class ApiRender extends Component {
    render() {
        return (
            <div>
              {
                  this.props.songs.error ? (
                  <h3>Results not found</h3> 
                  ) : (
              
                   <ul> 
                         <h5>SONG</h5>
                          <li>{this.props.songs.result.track.name}</li>
                        <h5>ARTIST</h5>
                          <li>{this.props.songs.result.artist.name}</li>
                        <h5>LYRICS</h5>
                         <li>{this.props.songs.result.track.text}</li>
                   </ul> 
                   
                  )
    }
                     
            
            </div>
        )
    }
}

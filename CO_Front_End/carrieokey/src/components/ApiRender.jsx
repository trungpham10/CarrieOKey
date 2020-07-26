import React, { Component } from 'react'

export default class ApiRender extends Component {
    render() {
        return (
            <div>
              {
                  this.props.songs.error ? (
                  <h3>Results not found</h3> 
                  ) : (
              
                   <ul style={{ 'list-style-type': 'none'}}> 
                         <h5 style={{'textDecoration': 'underline'}}>SONG</h5>
                          <li>{this.props.songs.result.track.name}</li>
                        <h5 style={{'textDecoration': 'underline'}}>ARTIST</h5>
                          <li>{this.props.songs.result.artist.name}</li>
                        <h5 style={{'textDecoration': 'underline'}}>LYRICS</h5>
                         <li>{this.props.songs.result.track.text}</li>
                   </ul> 
                   
                  )
    }
                     
            
            </div>
        )
    }
}

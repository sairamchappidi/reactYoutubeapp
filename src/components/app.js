import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
const API_KEY ='AIzaSyDYj_9CAEc9MBdBBbSxDJznH2qbU9oa7OY';
//components
import SearchBar from './search-bar';
import VideoDetails from './video-details';
import VideoList from './video-list';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state={videos:[],
                selectedVideo:null
              };
    this.videoSearch('oneplus3');
  }
  videoSearch = (term) => {
    YTSearch({key:API_KEY,term:term},(videos)=>{
      console.log(videos)
      this.setState({videos:videos,
                    selectedVideo:videos[0]
                  });
    })

  }
  onVideoSelect = (video)=>{
    this.setState({
      selectedVideo:video
    })
  }
  render() {
    let video=this.state.video;
      if(this.state.videos.length>0){
        return (
            <div clas>
            <SearchBar onChangeHandler={term =>{this.videoSearch(term)}}/>
            <VideoDetails video = {this.state.selectedVideo} />
            <VideoList videos = {this.state.videos} onVideoSelect = {this.onVideoSelect}/>
            </div>
            )
          }
      else{
        return(<div>Loading..</div>);


      }
  }
}

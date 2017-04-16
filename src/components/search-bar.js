import React,{Component} from 'react';

export default class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state={term:''};
  }
  handleInputChange(event){
    
    this.setState({term:event.target.value});
    this.props.onChangeHandler(event.target.value);
  }
  render(){
    return (
      <input className = 'search-bar' onChange={this.handleInputChange.bind(this)} />
    )
  }
}

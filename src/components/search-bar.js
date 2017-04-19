import React,{Component} from 'react';
import debounce from 'lodash.debounce';
export default class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state={term:''};
    this.searchInputTitle = null;
    this.handleInputChange = debounce(this.handleInputChange,500);
  }
  handleInputChange = (event) => {
    
    this.setState({term:this.searchInputTitle.value});
    this.props.onChangeHandler(this.searchInputTitle.value);
  }
  render(){
    return (
      <input className = 'search-bar' placeholder = 'Search...' onChange={this.handleInputChange} ref={(el) => {this.searchInputTitle = el;}}/>
    )
  }
}

import React from 'react';
import { connect } from 'react-redux';
import { fetchItem } from './store';


class Item extends React.Component{
  
  componentDidMount(){
    this.props.load(this.props.match.params.id);
  }
  
  render(){
    const { item } = this.props;
    return (
      <div>
        <h1>{ item.name }</h1>
        <p>{ item.description }</p>
        <img src={`${item.image}`}/>
      </div>
    );
  }
}


export default connect(
  ({ item })=> {
    return {
      item
    };
  },
  (dispatch)=> {
    return {
      load: (id)=> dispatch(fetchItem(id))
    };
  }
)(Item);
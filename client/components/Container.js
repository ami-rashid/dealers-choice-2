import React from 'react'
import { connect } from 'react-redux'
import { fetchContainers, fetchItems } from './store'


class Container extends React.Component{
  
  render(){
    const { specificContainer } = this.props;
    
    return (
      <div>
        <h1>{ specificContainer && specificContainer.name } </h1>
        <button>Delete</button>
      </div>
    )
  }
}


export default connect(({ container }, props)=> {
    const id = props.match.params.id * 1;
    const specificContainer = container.find(container => container.id = id);

    return { specificContainer }}, (dispatch)=> {
    return {
      load: ()=> dispatch(fetchContainers())
    }
  })(Container)
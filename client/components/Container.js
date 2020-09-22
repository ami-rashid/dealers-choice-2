import React from 'react'
import { connect } from 'react-redux'
import { fetchContainers, fetchItems } from './store'


class Container extends React.Component{
  
//   componentDidMount(){
//     this.props.load()
//   }
  
  render(){
    const { specificContainer } = this.props;
    console.log(specificContainer);
    
    return (
      <div>
        <h1>{ specificContainer && specificContainer.name } </h1>
      </div>
    )
  }
}


export default connect(({ container }, props)=> {
    const id = props.match.params.id * 1;
    const specificContainer = container.find(c => c.id = id);

    return { specificContainer }}, (dispatch)=> {
    return {
      load: ()=> dispatch(fetchContainers())
    }
  })(Container)
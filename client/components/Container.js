import React from 'react'
import { connect } from 'react-redux'
import { fetchContainers, fetchItems } from './store'


class Container extends React.Component{
  
//   componentDidMount(){
//     this.props.load()
//   }
  
  render(){
    console.log(this.props)
    const { container } = this.props;
    return (
      <div>
        <h1>{ container.name }</h1>
      </div>
    )
  }
}


export default connect(({ container })=> {
    return { container }}, (dispatch)=> {
    return {
      load: ()=> dispatch(fetchContainers())
    }
  })(Container)
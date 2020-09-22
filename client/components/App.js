import React from 'react'
import { connect } from 'react-redux'
import { fetchContainers, fetchBoxes, fetchItems } from './store'
import { HashRouter as Router, Route} from 'react-router-dom'
import ItemList from './ItemList'
import Item from './Item'
import ContainerList from './ContainerList'
import Container from './Container'

class App extends React.Component{
    constructor(){
      super();
    }
    componentDidMount(){
      this.props.load();
    }
    render(){
      return (
        <div>
        <button>Create</button>
        <h2>Inventory</h2>
        <Router>
          <div className='container'>
            <Route path='/' component={ ContainerList } />
            <Route path='/containers'  component={ ContainerList } />
            <Route path='/containers/:id'  component={ Container } />
			      <Route path='/items'  component={ ItemList } />
          </div>
        </Router>
        </div>
      );
    }
  }
  
  export default connect(
	  (state)=> {
      return {
        state
      };
    },
    (dispatch)=> {
      return {
        load: ()=> {
		  dispatch(fetchContainers());
		  dispatch(fetchBoxes());
		  dispatch(fetchItems())
        }
      };
    },
  )(App);
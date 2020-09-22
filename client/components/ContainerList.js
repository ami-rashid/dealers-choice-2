import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ContainerList = (props)=> {
  const containers = props.container;

    return (
      <ul className='containerList'>
        {
          containers && containers.map( container => {
            return (
              <li key={ container.id }>
                <Link className='link' to={`/items`}>
                  { container.name }
                </Link>
                <button>Delete</button>
              </li>
            )
          })
        }
      </ul>
    )
  }
  
  export default connect(({ container })=> {
    return { container }
  })(ContainerList)
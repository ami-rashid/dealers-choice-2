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
                <Link className='link' to={`/containers/${container.id}`}>
                  { container.name }
                </Link>
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
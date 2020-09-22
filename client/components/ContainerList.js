import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ContainerList = ( containers )=> {
    console.log(containers)
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
  
  export default connect((props)=> {
    console.log(props)
    console.log('hello')
    return { containers: [] }
  })(ContainerList)
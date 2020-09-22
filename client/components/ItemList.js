import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ItemList = ({items})=> {
    console.log('hello')
    return (
      <ul className='itemList'>
        {
          items.map( item => {
            return (
              <li key={ item.id }>
                <h1>Hello</h1>
              </li>
            )
          })
        }
      </ul>
    )
  }
  
  export default connect(({ items })=> {
    return { items }
  })(ItemList)
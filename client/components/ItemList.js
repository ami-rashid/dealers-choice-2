import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Items = ({ items })=> {
    return (
      <ul>
        {
          items.map( item => {
            return (
              <li key={ item.id }>
                <Link className='link' to={`/items/${item.id}`}>
                  { item.name }
                </Link>
              </li>
            );
          })
        }
      </ul>
    );
  };
  
  export default connect(({ items})=> {
    return {
      items
    };
  })(Items);
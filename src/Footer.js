import React from 'react'

const Footer = ({items}) => {

    const today = new Date()
  return <footer style={{textAlign:"center"}}> {items} {items > 0 && items !== 1? "ListItems": "ListItem"} <br/>
    copyright &copy;{today.getFullYear()}
  </footer>;
}

export default Footer
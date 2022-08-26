import React from 'react'

const PlacesCard = ({item}) => {
  return (
    <div id={`${item.id}`}>
                    <img height="300px" width="400" src={item.imageUrl} alt="" />
                              <p style={{ fontSize: "20px" }}>{item.title}</p>
                              <p style={{fontSize:"14px"}}>{item.price}</p>
                              <p></p>
                    </div>
  )
}

export default PlacesCard
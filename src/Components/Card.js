import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Card = ({ data }) => {
  let navigate=useNavigate();
  return (
    <>
      {
        (data) ? (
          data.map(item => {
            return (
              <div className="card" key={item.id} 
              onClick={()=>navigate(`/${item.id}`)}>
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                <div className="title">
                  <h3>{item.name}</h3>
                </div>
              </div>
            )
          })
        ):""
      }

    </>
  )
}


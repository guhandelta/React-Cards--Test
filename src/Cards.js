import React from 'react'
import './App.css'

const Cards = props => {

    console.log(props.data.id);

  return (
    <>
        <div key={props.data.id} className="card">
            <img className="card-image" src={props.data.image} alt="test" />
            <div className="card-bottom">
                <h3 className="card-heading">{props.data.heading}</h3>
                <div className="card-desc">{props.data.description}</div>
            </div>
        </div>
    </>
  )
}

export default Cards
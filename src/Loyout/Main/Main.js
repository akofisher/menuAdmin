import React from 'react'
import Loyout from '../Loyout'
import './Main.css'

export default function Main() {
  return (
    <Loyout>
      <div className="main-container">
        <div className="first">
          <div className="first_promo">Banner N1</div>
          <div className="second_promo">Banner N2</div>
          <div className="third_promo">Banner N3</div>
        </div>
        <div className="second">
          <div className="for_promo">Banner N4</div>
          <div className="five_promo">Banner N5</div>
          <div className="six_promo">Banner N6</div>
        </div>
        <div className="third">
          <div className="seven_promo">Banner N7</div>
          <div className="ate_promo">Banner N8</div>
          <div className="nine_promo">Banner N9</div>
        </div>
      </div>
    </Loyout>
  )
}

import React, { Component } from 'react';
import Zoom from 'react-medium-image-zoom'
import './how-to-buy.css'
import 'react-medium-image-zoom/dist/styles.css'

class HowToBuy extends Component {
    render() {
        return (
          <div className="container-main">
          <div className="main-title-container">
            <h3 className="main-title">ขั้นตอนการสั่งซื้อ</h3>
          </div>
          <div className="step-content">
          <div className="step-header">
              <div className="label-step"> 01 </div>
              <div className="step-description"> <span className="header-title">เลือกรูปแบบที่ชอบ</span> <br></br>หรือแคปหน้าเทมเพลต </div>
          </div>

           <div className="image-step"><img src="/images/banner.png" alt="image-step" /></div>
          </div>
          </div>
      )
  }
}

export default HowToBuy;

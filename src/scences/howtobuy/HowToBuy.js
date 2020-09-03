import React, { Component } from 'react';
import Zoom from 'react-medium-image-zoom'
import './how-to-buy.css'
import 'react-medium-image-zoom/dist/styles.css'

import { setCurrentPage } from '../../actions/PageManagement'
import { connect } from 'react-redux'

class HowToBuy extends Component {

    componentDidMount() {
        this.props.setCurrentPage(3);
    }
    
    render() {
        return (
            <div className="container-main">
                <div className="main-title-container">
                    <h3 className="main-title">ขั้นตอนการสั่งซื้อ</h3>
                </div>
                <div className="step-content">
                    <div className="step-header">
                        <div className="label-step"> 01 </div>
                        <div className="step-description">
                            <span className="header-title">เลือกรูปแบบที่ชอบ</span>
                            <br></br>
                            แคปหน้าเทมเพลตหรือว่าแจ้งไอดีของเทมเพลตในไลน์ร้าน @rkn3441i และชำระค่าเทมเพลต
                         </div>
                    </div>
                    <div className="image-detail">
                        <img className="images-detail-src" src="/images/step1.png" alt="step1" />
                    </div>

                    <div className="step-header">
                        <div className="label-step"> 02 </div>
                        <div className="step-description">
                            <span className="header-title">รับงานผ่านอีเมล</span>
                            <br></br>
                            แจ้งอีเมลสำหรับรับเทมเพลตแก่ทางร้าน หลังจากนั้นทางร้านจะส่งไฟล์งานทั้งหมด พร้อมวิดีโอสอนผ่านอีเมล
                         </div>
                    </div>
                    <div className="image-detail">
                        <img className="images-detail-src" src="/images/step2.png" alt="step1" />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
  return {
    userEnviroment: state.userEnviroment,
    pageManagement: state.PageManagement
  }
}
const AppWithConnect = connect(mapStateToProps, { setCurrentPage })(HowToBuy)
export default AppWithConnect

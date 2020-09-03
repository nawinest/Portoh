import React, { Component } from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { setCurrentPage } from '../../actions/PageManagement'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import QuestionItem from './QuestionItem'
import './question.css'

class QuestionAnswerPage extends Component {

    componentDidMount() {
        this.props.setCurrentPage(2);
    }

    render() {
        let TITLE = "คำถามที่พบบ่อย | Poroh"
        const questions = [
            {
                question: "คำถาม : เทมเพลตที่ได้มีหน้าอะไรบ้างคะ ?",
                ans:"ในเทมเพลตจะไฟล์ให้ทั้งหมด 8 หน้าขั้นต่ำครับ ประกอบไปด้วยหน้าหลัก 6 หน้า(หน้าปกหน้าและหลัง, คำนำ, สารบัญ, ประวัติส่วนตัว, ประวัติการศึกษา) และเทมเพลตหน้าเปล่าที่ไม่มีหัวข้อสำหรับหน้ากิจกรรม, เกียรติบัตร หรือหน้าอื่น ๆ ที่ต้องการครับ"
            },
            {
                question: "คำถาม : ทำยากไหมคะ ? หนูไม่เคยใช้ Photoshop มาก่อน",
                ans:"ทางร้านมีคลิปสอนทั้งในรูปแบบ Photoshop / Microsoft word และทำบนมือถือด้วยแอปพลิเคชันได้ด้วยทำได้แน่นอนครับ"
            },
            {
                question: "ให้ร้านใส่ข้อมูลให้ได้ไหมคะ ?",
                ans:"ได้ครับ ราคาหน้าละ 20 บาทครับ"
            }
        ]
        return (
            <div className="container-main">
            <Helmet>
              <title>{ TITLE }</title>
            </Helmet>
                <div className="main-title-container">
                    <h3 className="main-title">คำถามที่พบบ่อย ?</h3>
                </div>
                <div className="content-questionans">
                    {questions.map((item, index) => {
                        return <QuestionItem content={item}/>
                    })}
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
const AppWithConnect = connect(mapStateToProps, { setCurrentPage })(QuestionAnswerPage)
export default AppWithConnect

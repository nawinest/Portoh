import React, { Component } from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { setCurrentPage } from '../../actions/PageManagement'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

class QuestionAnswerPage extends Component {

    componentDidMount() {
        this.props.setCurrentPage(2);
    }

    render() {
        const TITLE = 'คำถามที่พบบ่อย | Portoh'
        return (
            <div className="container-main">
            <Helmet>
              <title>{ TITLE }</title>
            </Helmet>
                <div className="main-title-container">
                    <h3 className="main-title">คำถามที่พบบ่อย ?</h3>
                </div>
                <div className="content-questionans">
                    <div className="question-component">
                        <div className="question-title">
                            คำถาม : เทมเพลตที่ได้หน้าอะไรบ้างคะ ?
                        </div>
                        <div className="question-ans">
                            <span className="title-question-answer">คำตอบ</span> <br></br>
                            ในเทมเพลตจะไฟล์ให้ทั้งหมด 8 หน้าขั้นต่ำครับ ประกอบไปด้วยหน้าหลัก 6 หน้า
                            (หน้าปกหน้าและหลัง, คำนำ, สารบัญ, ประวัติส่วนตัว, ประวัติการศึกษา) และเทมเพลตหน้าเปล่าที่ไม่มีหัวข้อสำหรับหน้ากิจกรรม, เกียรติบัตร หรือหน้าอื่น ๆ ที่ต้องการครับ
                        </div>
                    </div>
                    <div className="question-component">
                        <div className="question-title">
                            คำถาม : ทำยากไหมคะ ? หนูไม่เคยใช้ Photoshop มาก่อน
                        </div>
                        <div className="question-ans">
                            <span className="title-question-answer">คำตอบ</span> <br></br>
                            ทางร้านมีคลิปสอนทั้งในรูปแบบ Photoshop / Microsoft word และทำบนมือถือด้วยแอปพลิเคชันได้ด้วย
                            ทำได้แน่นอนครับ
                        </div>
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
const AppWithConnect = connect(mapStateToProps, { setCurrentPage })(QuestionAnswerPage)
export default AppWithConnect

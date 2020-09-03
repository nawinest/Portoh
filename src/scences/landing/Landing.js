import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import TemplateContainer from './TemplateContainer'
import 'react-dropdown/style.css';
import { disableFirstMeetMessage } from '../../actions/userEnviroment'
import { setCurrentPage } from '../../actions/PageManagement'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
const optionsColor = [
                  { value: 'all', label: 'ไม่จำกัดสี' },
                  { value: 'black', label: 'สีดำ' },
                  { value: 'gray', label: 'สีเทา' },
                  { value: 'pink', label: 'ชมพู' },
                ];

class Landing extends Component {

    state = {
        color: 'all',
        colorSelected: 'all',
        defaultOptionColor: optionsColor[0],
        mockLoading: false
    }

    _onSelect = (element) => {
        this.setState({
            defaultOptionColor: element,
            color: element.value
        })
    }

    _onSelectFac = (element) => {
        this.setState({
            defaultOptionColor: element,
            color: element.value
        })
    }


    componentDidMount() {
        this.props.setCurrentPage(0);
    }

    onClickSearch = () => {
        this.setState({ mockLoading: true })
        let time = Math.floor(Math.random() * 500) + 1200
        console.log(time)
        setTimeout(()=>{this.setState({mockLoading: false})}, time)
        this.setState({
            colorSelected: this.state.color
        })
    }

    render() {
        const options = ['ทุกคณะ'];
        const defaultOption = options[0];
        const TITLE = 'หน้าหลัก | Portoh'
        return (
          <>
          <div className="container-main">
          <Helmet>
            <title>{ TITLE }</title>
          </Helmet>
              <div className="landing-banner-component">
                  <div className="base-image-banner">
                    <img className="image-banner" src="/images/banner3.png" alt="banner" />
                   </div>
                   <div className="banner-wrapper">
                       <div className="base-title-banner">
                           <h3 className="main-title">เทมเพลตแกลลอรี่ <br></br> BY PORTOH DESIGN</h3>
                           <p className="description">จัดจำหน่ายเทมเพลตพอร์ตฟอลิโอ เพื่อการใช้สอบเข้าและสัมภาษณ์ </p>
                           <div className="garuntee-component"><img className="tick-icon" src="/images/tick.svg" alt="tick-garuntee" /> การันตีได้รับงาน 100 % </div>
                           <img className="contact-img" src="/images/portoh-contact.09.09.png" alt="contact" />
                           <div className="line-it-button" data-lang="en" data-type="friend" data-lineid="@rkn3441i" data-count="true" data-home="true" style={{display: 'none'}}></div>
                           </div>
                   </div>
              </div>
              <div className="search-list-container">
                  <div className="selection-option-search">
                      <div className="item-selection faculty-selection">
                        <p>ค้นหาจากคณะ</p>
                        <Dropdown options={options} onChange={this._onSelectFac} value={defaultOption} placeholder="Select an option" />
                      </div>
                      <div className="item-selection faculty-selection">
                        <p>ค้นหาจากโทนสี</p>
                        <Dropdown options={optionsColor} onChange={this._onSelect} value={this.state.defaultOptionColor} placeholder="Select an option" />
                      </div>
                      <div className="item-selection">
                        <button onClick={this.onClickSearch} className="search-button">ค้นหา</button>
                      </div>
                  </div>
                  <p className="search-title">ผลการค้นหา</p>
                  {
                      this.state.mockLoading ? <div className="loading-container"><div className="arc"></div></div> : <TemplateContainer color={this.state.colorSelected}/>
                  }
              </div>
          </div>
          </>
      )
  }
}

const mapStateToProps = function (state) {
  return {
    userEnviroment: state.userEnviroment,
    pageManagement: state.PageManagement
  }
}
const AppWithConnect = connect(mapStateToProps, { disableFirstMeetMessage, setCurrentPage })(Landing)
export default AppWithConnect

import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import TemplateContainer from './TemplateContainer'
import 'react-dropdown/style.css';

class Landing extends Component {

    _onSelect = (element) => {
        console.log(element)
    }

    render() {
        const options = [
                          'ทุกคณะ'
                        ];
        const optionsColor = [
                          'ไม่จำกัดสี'
                        ];
        const defaultOption = options[0];
        const defaultOptionColor = optionsColor[0];
        return (
          <>
          <div className="container-main">
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
                        </div>
                   </div>
              </div>
              <div className="search-list-container">
                  <div className="selection-option-search">
                      <div className="item-selection faculty-selection">
                        <p>ค้นหาจากคณะ</p>
                        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                      </div>
                      <div className="item-selection faculty-selection">
                        <p>ค้นหาจากโทนสี</p>
                        <Dropdown options={optionsColor} onChange={this._onSelect} value={defaultOptionColor} placeholder="Select an option" />
                      </div>
                      <div className="item-selection">
                        <button className="search-button">ค้นหา</button>
                      </div>
                  </div>
                  <p className="search-title">ผลการค้นหา</p>
                  <TemplateContainer />
              </div>
          </div>
          <div className="bottom-height"></div>
          </>
      )
  }
}

export default Landing;

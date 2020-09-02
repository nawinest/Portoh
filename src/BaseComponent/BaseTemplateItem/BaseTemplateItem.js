import React, { Component } from 'react';
import './base-template-item.css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

class BaseTemplateItem extends Component {
    render() {
        return (
          <div className="template-container-item">
            <div className="image-cover-container">
                <div className="image-cover-container-inner">
                    <Zoom>
                    <img className="image-template-cover" src={this.props.data.images_cover} alt="template-cover" />
                    </Zoom>
                </div>
            </div>
            <div className="template-detail">
                <p className="template-title">
                    เทลเพลต หมายเลข {this.props.data.id}
                </p>
                <p className="price-label"> ราคา {this.props.data.price} บาท </p>
                <p className="description-label"> <img className="description-label-icon" src="/images/png.svg"/> ได้รับไฟล์เป็น .PNG </p>
                <p className="description-label"> <img className="description-label-icon" src="/images/analysis.svg"/> มีไฟล์วิดีโอสอนการทำโดย Photoshop, word และ
บนสมาร์ทโฟน </p>
            </div>
          </div>
      )
  }
}

export default BaseTemplateItem;

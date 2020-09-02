import React, { Component } from 'react';
import BaseTemplateItem from '../../BaseComponent/BaseTemplateItem/BaseTemplateItem'
import data from './data/templates';

class TemplateContainer extends Component {
  render() {
      let contents = data.contents ? data.contents : []
      return (
          <div className="container-list">
                {
                    contents && contents.map((item, idx) => {
                        return <BaseTemplateItem data={item}/>
                    })
                }
          </div>
      )
  }
}

export default TemplateContainer;

import React, { Component } from 'react';
import BaseTemplateItem from '../../BaseComponent/BaseTemplateItem/BaseTemplateItem'
import data from './data/templates';

class TemplateContainer extends Component {
  render() {
      let contents = data.contents ? data.contents : []
      let filter = contents
      if (this.props.color != "all") {
          filter = contents.filter((item) => item.colors.includes(this.props.color))
      }
      return (
          <div className="container-list">
                {
                    filter && filter.map((item, idx) => {
                        return <BaseTemplateItem key={idx} data={item}/>
                    })
                }
          </div>
      )
  }
}

export default TemplateContainer;

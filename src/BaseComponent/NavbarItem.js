import React, { Component } from 'react';

class NavbarItem extends Component {
    onClickItem = () => {
        window.location.href = this.props.hrefLink
    }

    render() {
        let isActive = this.props.isActive ? " item--active" : "";
        return (
          <>
          <div className={`base-navbar-item ${isActive}`} onClick={this.onClickItem}>
                <img className="image-icon-nav" src={this.props.icon} alt="test" />
                <p className="navbar-item-title">{this.props.title}</p>
          </div>
          </>
      )
  }
}

export default NavbarItem;

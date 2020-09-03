import React, { Component } from 'react';
import './base-navbar.css'
import NavbarItem from './NavbarItem'

class BaseNavbar extends Component {
  render() {
      return (
          <div className="base-navbar-component">
          <div className="base-navbar-component-height"></div>
            <div className="navbar-fixed-component">
                <div className="container-main">
                    <div className="navbar-content">
                        <ul className="nav-item-list">
                            <li className="list-item-li"> <NavbarItem isActive={this.props.currentPage===0} icon={"/images/home.svg"} title={"หน้าแรก"} hrefLink={"/"}/> </li>
                            <li className="list-item-li"> <NavbarItem isActive={this.props.currentPage===1} icon={"/images/review.svg"} title={"รีวิว"} hrefLink={"/"}/> </li>
                            <li className="list-item-li"> <NavbarItem isActive={this.props.currentPage===2} icon={"/images/question.svg"} title={"คำถามที่พบบ่อย"} hrefLink={"/question"}/> </li>
                            <li className="list-item-li"> <NavbarItem isActive={this.props.currentPage===3} icon={"/images/shopping-cart.svg"} title={"วิธีการสั่งซื้อ"} hrefLink={"/howto"}/> </li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
      )
  }
}

export default BaseNavbar;

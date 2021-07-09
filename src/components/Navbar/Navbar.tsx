import React, { useState } from "react";
//css
import "./Navbar.css";

//icon and images
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoChatboxOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../../assets/logo.svg";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="" className="logo">
            {" "}
            <img src={Logo} alt="Arezzo" />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option">
            <a href="#">NOVA COLEÇÃO</a>
          </li>
          <li className="option">
            <a href="#">SAPATOS</a>
          </li>
          <li className="option">
            <a href="#">TÊNIS</a>
          </li>
          <li className="option">
            <a href="#">BOLSAS</a>
          </li>
          <li className="option">
            <a href="#">AREZZO HOME</a>
          </li>
          <li className="option">
            <a href="#" style={{ color: "red" }}>
              PROMOÇÃO
            </a>
          </li>
        </ul>
      </div>
      <ul className="nav-right">
        <li>
          <a href="#" className="icon-chat">
            <IoChatboxOutline />
          </a>
        </li>
        <div className="dropdown">
          <li>
            <a href="#" className="icon-user">
              <AiOutlineUser />
            </a>
            <div className="dropdown-content">
              <form action="/action_page.php">
                <div className="fb">
                  <FaFacebookF className="icon-fb" /> Entre com o Facebook
                </div>
                <div className="separator">
                  <hr className="hr1" />
                  <p>OU</p>
                  <hr className="hr1" />
                </div>
                <div className="login">
                  <div className="hide-md-lg"></div>
                  <label className="label-input">EMAIL</label>
                  <input type="email" name="email" required />
                  <label className="label-input">SENHA</label>
                  <input type="password" name="password" required />
                  <a href="" className="recuperar-senha">
                    Esqueci minha senha
                  </a>
                  <button className="btn-login">ENTRAR</button>
                </div>
                <div className="separator">
                  <hr className="hr1" />
                </div>

                <div className="cadastro-login">
                  <h6>NÃO POSSUI CADASTRO?</h6>
                  <button className="btn-login">CADASTRAR</button>
                </div>
              </form>
            </div>
          </li>
        </div>
        <li>
          <a href="#" className="icon-shop">
            <HiOutlineShoppingBag />
          </a>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

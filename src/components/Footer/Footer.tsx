import React from "react";

//css
import "./Footer.css";

//icons and images
import { FaPinterestP, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "../../assets/logo-branco.svg";

export const Footer = () => {
  return (
      <div className="footer">
       
          <div className="mapa">
            <section className="footer_navigation">
              <ul className="coluna1">
                <li className="label-title">
                  <label>Institucional</label>
                </li>

                <li className="label-link">
                  <a href="http://www.arezzo.com.br/" title="Sobre a marca">
                    Sobre a marca
                  </a>
                </li>

                <li className="label-link">
                  <a href="http://www.arezzo.com.br/" title="RI Arezzo&amp;Co">
                    RI Arezzo&amp;Co
                  </a>
                </li>

                <li className="label-link">
                  <a
                    href="http://www.arezzo.com.br/"
                    title="Relatório Anual Arezzo&amp;Co"
                  >
                    Relatório Anual Arezzo&amp;Co
                  </a>
                </li>

                <li className="label-link">
                  <a href="http://www.arezzo.com.br/" title="Trabalhe conosco">
                    Trabalhe conosco
                  </a>
                </li>

                <li className="label-link">
                  <a href="http://www.arezzo.com.br/" title="Venda Corporativa">
                    Venda Corporativa
                  </a>
                </li>
                <li className="label-link">
                  <a href="http://www.arezzo.com.br/" title="Cartão Presente">
                    Cartão Presente
                  </a>
                </li>
              </ul>
              <ul className="coluna2">
                <li className="label-title">
                  <label>Franquias</label>
                </li>

                <li className="label-link">
                  <a href="http://www.arezzo.com.br/o" title="Franquias">
                    Franquias
                  </a>
                </li>

                <li className="label-link">
                  <a href="http://www.arezzo.com.br/" title="Multimarcas">
                    Multimarcas
                  </a>
                </li>

                <li className="label-link">
                  <a href="http://www.arezzo.com.br/" title="Plano de negócio">
                    Plano de negócio
                  </a>
                </li>
              </ul>
              <ul className="coluna3">
                <li className="label-title">
                  <label>Ajuda e suporte</label>
                </li>

                <li className="label-link">
                  <a
                    href="http://www.arezzo.com.br/o"
                    title="Central de atendimento"
                  >
                    Central de atendimento
                  </a>
                </li>

                <li className="label-link">
                  <a href="http://www.arezzo.com.br/" title="Cadastro">
                    Cadastro
                  </a>
                </li>
                <li className="label-link">
                  <a href="http://www.arezzo.com.br/" title="Entrega">
                    Entrega
                  </a>
                </li>

                <li className="label-link">
                  <a href="http://www.arezzo.com.br/" title="Meus Pedidos">
                    Meus Pedidos
                  </a>
                </li>
                <li className="label-link">
                  <a href="http://www.arezzo.com.br/" title="Meus Pedidos">
                    Troca e Devoluções
                  </a>
                </li>
              </ul>
              <ul className="coluna4">
                <li className="label-title">
                  <label>Privacidade e Termos</label>
                </li>

                <li className="label-link">
                  <a
                    href="http://www.arezzo.com.br/o"
                    title="Política de privacidade"
                  >
                    Política de privacidade
                  </a>
                </li>

                <li className="label-link">
                  <a href="http://www.arezzo.com.br/" title=" Termos de uso">
                    Termos de uso
                  </a>
                </li>
              </ul>
              <ul className="coluna5">
                <li className="label-title">
                  <label>Cartão Presente</label>
                </li>
              </ul>
            </section>
          </div>
          <div className="social">
            <div className="footer-logo">
              <img src={Logo} alt="Arezzo" />
            </div>
              <h5>AREZZO NAS REDES SOCIAIS</h5>
            
            <div className="rede-social">
              <a href="#"><FaFacebookF style={{color: "white"}}/></a>
              <a href="#"><FaTwitter style={{color: "white"}}/></a>
              <a href="#"><FaInstagram style={{color: "white"}}/></a>
              <a href="#"><FaPinterestP style={{color: "white"}}/></a>
            </div>
          </div>
        </div>
  );
};

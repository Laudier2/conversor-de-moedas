import React from 'react';
import './styles.css'

const Footer = () => {

    const nova = "_blank"

    return ( 
        <>
            <div className="container">
                <ul>
                <li>
                    O cálculo efetuado tem caráter informativo e não substitui as disposições da norma cambial brasileira para casos específicos de conversão.
                    Conversões disponíveis para datas informadas a partir de 01/02/1999.
                    Para dias não úteis, assume-se a cotação do dia útil imediatamente anterior.
                    O Banco Central não assume qualquer responsabilidade pela não simultaneidade ou falta das informações prestadas, assim como por eventuais erros de paridades das moedas, ou qualquer outro, salvo a paridade relativa ao dólar dos Estados Unidos da América em relação ao Real, o mesmo se aplica a outra moéda monetaria estrageira. Igualmente, não se responsabiliza pelos atrasos ou indisponibilidade de serviços de telecomunicação, interrupção, falha ou pelas imprecisões no fornecimento dos serviços ou informações. Não assume, também, responsabilidade por qualquer perda ou dano oriundo de tais interrupções, atrasos, falhas ou imperfeições, bem como pelo uso inadequado das informações contidas na transação.
                </li>
                </ul>
                <br />
                <br />
                <div className="mrg">&copy; Desenvolvido em 2021 - José Santana de Jesus - Social:       
                <a href="https://www.linkedin.com/in/jos%C3%A9-santana-de-jesus-8949b3124/" target={nova}>
                    <img src="linkedin.png" alt="img" className="icon"/>    
                </a>
                <a href="https://www.youtube.com/channel/UCk8HdZCe8RFMkZqVIQ0mL3g" target={nova}>
                    <img src="youtube.png" alt="img" className="icon"/>
                </a>
                <a href="https://github.com/Laudier2?tab=repositories" target={nova}>
                    <img src="github.png" alt="img" className="icon"/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100008967008790" target={nova}>
                    <img src="facebook.png" alt="img" className="icon"/>
                </a>
                </div>
                <br />
            </div>
        </>
     );
}
 
export default Footer;
import React, { useState, useEffect, useContext } from 'react';
import MaskNumber from 'react-number-format';
import './styles.css';
import Marquee from 'react-fast-marquee'
import RecebeValoresContext from '../context/ConsumeContextData'

export default function Converso(cov) {

  const { data } = useContext(RecebeValoresContext)
  const [values, setValues] = useState(1)
  const [cad, setCad] = useState([])

  useEffect(() => {
    (async () => {
      const res = await data.CAD.ask
      setCad(res)
    })()
  }, [data])

  return (
    <div className="container col-md-6">
      <div className="container">
        <img src="/img1.png" alt="img" className="img2" />
      </div>
      <br />
      <h5><Marquee gradientColor gradientWidth className="text-dark"><div className="ml-5"></div> Dólar Canadense/Real Brasileiro Atualizado a cada 30 segundos</Marquee> </h5>

      <br />
      <form>
        <div className="form-row">
          <div className="form-group col-md-6 text-primary h1">
            <label htmlFor="inputEmail4 h1-m">
              <img src="https://img.freepik.com/free-photo/american-canadian-flags-together_93675-23304.jpg?size=626&ext=jpg" alt="img" className="img" />
            </label>
            <div className="form-group input-group">
              <div className="input-grou-prepend align-self-center">
                <div className="input-group-text">
                  <i className="far fa-dollar-sign text-primary h6" />
                </div>
              </div>
              <input
                type="number"
                className="form-control h1-m mrg col-md-8"
                placeholder='1,00'
                onChange={(e) => setValues(e.target.value)}
                autoFocus={true}
              />
            </div>
          </div>
          <div className="form-group col-md-6 text-primary h1">
            <label htmlFor="inputPassword4 h1 h1-m">
              <img src="https://img.freepik.com/vetores-gratis/ilustracao-de-bandeira-brasil_53876-27017.jpg?size=626&ext=jpg" alt="img" className="img mt-3" />
            </label>
            <div className="form-group input-group">
              <div className="input-grou-prepend align-self-center">
                <div className="input-group-text">
                  <i className="far fa-dollar-sign text-primary h6" />
                </div>
              </div>
              <MaskNumber
                type="text"
                thousandsGroupStyle="thousand"
                decimalSeparator="."
                displayType="input"
                thousandSeparator={true}
                allowNegative={true}
                decimalScale={2}
                placeholder="0,00"
                className="form-control h1-m mrg col-md-8"
                value={values > 0 ? cad * values : values}
              />
            </div>
          </div>
        </div>
      </form>
      <br />
      <br />
    </div>
  );
}

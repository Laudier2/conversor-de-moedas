import React, { useContext, useEffect, useState } from 'react';
import MaskNumber from 'react-number-format';
import './styles.css';
import RecebeValoresContext from '../context/ConsumeContextData'
import Marquee from 'react-fast-marquee'

export default function Converso() {

  const { data } = useContext(RecebeValoresContext)
  const [values, setValues] = useState(1)
  const [dolar, setDolar] = useState([])

  useEffect(() => {
    (async () => {
      const res = await data.USD.ask
      setDolar(res)
    })()
  }, [data])

  return (
    <div className="container col-md-6">
      <div className="container">
        <img src="/img1.png" alt="img" className="img2" />
      </div>
      <br />
      <h5><Marquee gradientColor gradientWidth className="text-dark"><div className="ml-5"></div> Dólar Americano/Real Brasileiro</Marquee> </h5>
      <br />
      <form>
        <div className="form-row">
          <div className="form-group col-md-6 text-primary h1">
            <label htmlFor="inputEmail4 h1-m">
              <img src="https://cdn.pixabay.com/photo/2017/01/07/16/55/usa-1960922_960_720.jpg" alt="img" className="img" />
            </label>
            <div className="form-group input-group">
              <div className="input-grou-prepend align-self-center">
                <div className="input-group-text">
                  <i className="far fa-dollar-sign text-primary h6" />
                </div>
              </div>
              <input
                type="text"
                className="form-control h1-m mrg col-md-8"
                placeholder='1,00'
                onChange={(e) => setValues(e.target.value)}
                autoFocus={true}
              />
            </div>
          </div>

          <div className="form-group col-md-6 text-primary h1">
            <label htmlFor="inputEmail4 h1-m">
              <img src="https://img.freepik.com/vetores-gratis/ilustracao-de-bandeira-brasil_53876-27017.jpg?size=626&ext=jpg" alt="img" className="img mt-1" />
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
                placeholder="0,00"
                decimalScale={2}
                className="form-control h1-m mrg col-md-8"
                value={values > 0 ? dolar * values : values}
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

import React, { FunctionComponent, useState } from 'react';
import { Helmet } from 'react-helmet';
import validator from 'validator';
import Swal from 'sweetalert2';
import './css/style.css';

interface ButtonInterface {
  parameters: {
    isProduction?: boolean
    amount: number
    fullName: string
    email: string
    receiveEmail: string
    receiveName: string
    successRedirect: string
    errorRedirect: string
    disabled?: boolean,
    paymentGateway?: string;
  }
}

const Button: FunctionComponent<ButtonInterface> = ({ parameters }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const customFunction = `
      parameters = {
         isProduction: ${parameters.isProduction ? parameters.isProduction : false},
         amount: ${parameters.amount},
         fullName: "${parameters.fullName}",
         email: "${parameters.email}",
         receiveEmail: "${parameters.receiveEmail}",
         receiveName: "${parameters.receiveName}",
         successRedirect: "${parameters.successRedirect}",
         errorRedirect: "${parameters.errorRedirect}",
      },
      setTimeout(function () {
         iframe.contentWindow.postMessage(parameters, '*');
      }, 5000);
  `;

  const Alerts = (title: string, text: string) => {
    Swal.fire({
      icon: 'error',
      title,
      text,
    })
  }

  const validations = (params: ButtonInterface) => {
    if (Object.keys(params.parameters).length === 0) {
      Alerts('Parametros Vacios', 'No pueden estar vacios los parametros')
      return setModalVisible(false);
    }
    if (!validator.isURL(params.parameters.successRedirect)) {
      Alerts('Datos Erróneos', 'La Url ingresada no es válida')
      return setModalVisible(false);
    }
    if (!validator.isURL(params.parameters.errorRedirect)) {
      Alerts('Datos Erróneos', 'La Url ingresada no es válida')
      return setModalVisible(false);
    }
    if (!validator.isEmail(params.parameters.email)) {
      Alerts('Datos Erróneos', 'El email no es valido')
      return setModalVisible(false);
    }
    if (!validator.isEmail(params.parameters.receiveEmail)) {
      Alerts('Datos Erróneos', 'El email no es valido')
      return setModalVisible(false);
    }
    return setModalVisible(true)
  }

  return (
    <div>
      <button
        className="QuiklyButton"
        disabled={parameters.disabled ? parameters.disabled : false}
        onClick={() => validations({ parameters })}
      />
      {
        isModalVisible ?
          <div hidden={!isModalVisible}>
            <div className="modal-background" onClick={() => setModalVisible(false)}>
              {
                parameters.paymentGateway === 'Square' ?
                <iframe className="modal-card"
                src="https://paybox.quikly.app/cdn/reactjs/square.html"
                width="100%"
                height="100%"
                scrolling="no"
                id="iframe"
              />
              :
              <iframe className="modal-card"
                src="https://paybox.quikly.app/cdn/reactjs/paybox.html"
                width="100%"
                height="100%"
                scrolling="no"
                id="iframe"
              />
              }
              <Helmet>
                <script src="https://code.jquery.com/jquery-2.2.4.js"></script>
                <script type="text/javascript">{customFunction}</script>
              </Helmet>
            </div>
          </div>
          :
          <></>
      }
    </div>
  )
}

export default Button;
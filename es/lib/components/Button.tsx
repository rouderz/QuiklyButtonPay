import React, {FunctionComponent, useState} from 'react';
import {Helmet} from 'react-helmet';
import validator from 'validator';
import Swal from 'sweetalert2';
import './css/style.css';

interface buttonInterface {
   parameters: {
     isProduction: boolean
     amount: number
     fullName: string
     email: string
     receiveEmail: string
     receiveName: string
     successRedirect: string
     errorRedirect: string
     disabled: boolean
   }
 }

const Button:FunctionComponent<buttonInterface> = ({parameters}) => { 
   const [isModalVisible, setModalVisible] = useState<Boolean>(false);

   if(!validator.isEmail(parameters.email)){}

   const customFunction = `
      parameters = {
         isProduction: ${parameters.isProduction},
         amount: "${parameters.amount}",
         fullName: "${parameters.fullName}",
         email: "${parameters.email}",
         receiveEmail: "${parameters.receiveEmail}",
         receiveName: "${parameters.receiveName}",
         successRedirect: "${parameters.successRedirect}",
         errorRedirect: "${parameters.errorRedirect}"              
      },
      setTimeout(function () {
         iframe.contentWindow.postMessage(parameters, '*');
      }, 5000);
  `;

  const validations = (params: buttonInterface) => {
   if(Object.keys(params.parameters).length === 0){
     Swal.fire({
       icon: 'error',
       title: 'Parametros Vacios',
       text: 'No pueden estar vacios los parametros',
     })
     return setModalVisible(false);
   }
   if(!validator.isURL(params.parameters.successRedirect)){
     Swal.fire({
       icon: 'error',
       title: 'Datos Erroneos',
       text: 'La Url ingresada no es valida',
     })
     return setModalVisible(false);
   }
   if(!validator.isURL(params.parameters.errorRedirect)){
     Swal.fire({
       icon: 'error',
       title: 'Datos Erroneos',
       text: 'La Url ingresada no es valida',
     })
     return setModalVisible(false);
   }
   if(!validator.isEmail(params.parameters.email)){
     Swal.fire({
       icon: 'error',
       title: 'Datos Erroneos',
       text: 'El email no es valido',
     })
     return setModalVisible(false);
   }
   if(!validator.isEmail(params.parameters.receiveEmail)){
     Swal.fire({
       icon: 'error',
       title: 'Datos Erroneos',
       text: 'El email no es valido',
     })
     return setModalVisible(false);
   }
   return setModalVisible(true)
 }

   return (
      <div>
      <button
      className="QuiklyButton"
        disabled = {parameters.disabled}
        onClick={() => validations({parameters})}
        /> 
      {
         isModalVisible ? 
         <div hidden={!isModalVisible}>
            <div className="modal-background" onClick={() => setModalVisible(false)}>
               <iframe className="modal-card"
                     src="https://paybox.quikly.app/cdn/reactjs/paybox.html" 
                     width="100%" 
                     height="100%" 
                     scrolling="no"
                     id="iframe"
                  />
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
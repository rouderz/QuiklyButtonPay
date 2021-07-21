import React, {FunctionComponent, useState} from 'react';
import './css/style.css';

interface ButtonInterface {
   receiveEmail: string,
   receiveName: string,
   amount: string,
   description?: string,
   production: string,
   disabled: boolean,
}

const Button:FunctionComponent<ButtonInterface> = ({receiveEmail, receiveName, amount, production, description, disabled}) => { 
   const [isModalVisible, setModalVisible] = useState<Boolean>(false);
   
   return (
      <div>
      <button
      className="QuiklyButton"
        disabled = {disabled}
        onClick={() => setModalVisible(true)}
        /> 
      {
         isModalVisible ? 
         <div hidden={!isModalVisible}>
            <div className="modal-background" onClick={() => setModalVisible(false)}>
            <iframe className="modal-card"
                     src="https://paybox.quikly.app/paybox/paybox.html" 
                     width="100%" 
                     height="100%" 
                     scrolling="no"
                  />
            </div>
         </div>
         :
         <></>
      }
      </div>
      
   )
}

export default Button;
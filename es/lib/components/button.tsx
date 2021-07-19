import React, {FunctionComponent, useState} from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

interface ButtonInterface {
   receiveEmail: string,
   receiveName: string,
   amount: string,
   description?: string,
   production: string,
   disabled: boolean,
}

const Index:FunctionComponent<ButtonInterface> = ({receiveEmail, receiveName, amount, production, description, disabled}) => { 
   const [isModalVisible, setModalVisible] = useState(false);
   
   return (
      <div>
      <Button
        type="primary"
        size="large"
        disabled = {disabled}
        onClick={() => setModalVisible(true)}
        > 
      {"Pagar Ahora"} 
      </Button> 
      {
         isModalVisible ? 
         <iframe src="https://www.youtube.com/embed/cWDJoK8zw58"></iframe>
         :
         <></>
      }
      </div>
      
   )
}

export default Index;
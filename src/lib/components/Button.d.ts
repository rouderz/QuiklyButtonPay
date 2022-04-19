import { FunctionComponent } from 'react';
import './css/style.css';
import './Button';
interface ButtonInterface {
    parameters: {
        isProduction?: boolean;
        amount: string;
        fullName: string;
        email: string;
        receiveEmail: string;
        receiveName: string;
        successRedirect: string;
        errorRedirect: string;
        disabled?: boolean;
        paymentGateway?: string;
    };
}
declare const ButtonQuikly: FunctionComponent<ButtonInterface>;
export default ButtonQuikly;

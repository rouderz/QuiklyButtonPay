import { FunctionComponent } from 'react';
import './css/style.css';
import './Button';
interface buttonInterface {
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
    };
}
declare const ButtonQuikly: FunctionComponent<buttonInterface>;
export default ButtonQuikly;

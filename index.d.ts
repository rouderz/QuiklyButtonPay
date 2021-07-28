import { FunctionComponent } from 'react';
import './css/style.css';
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
declare const Button: FunctionComponent<buttonInterface>;
export default Button;

import { FunctionComponent } from 'react';
import './css/style.css';
interface ButtonInterface {
    parameters: {
        isProduction?: boolean;
        amount: number;
        fullName: string;
        email: string;
        receiveEmail: string;
        receiveName: string;
        successRedirect: string;
        errorRedirect: string;
        disabled?: boolean;
    };
}
declare const Button: FunctionComponent<ButtonInterface>;
export default Button;

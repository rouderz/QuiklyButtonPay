# Quikly Pay <h1> How to use

Use the command npm or yarn for the button installation

[![NPM version](https://badge.fury.io/js/quiklypay.svg)](https://www.npmjs.com/package/quiklypay)

[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://github.com/rouderz/QuiklyButtonPay)


```npm
npm install --save quiklypay
```
Or

```yarn 
yarn add quiklypay
```

## Usage

```jsx
import {ButtonQuikly} from 'quiklypay';

const Component = () => {
   const data = {
     isProduction: boolean
     amount: number
     fullName: string
     email: string
     receiveEmail: string
     receiveName: string
     successRedirect: string
     errorRedirect: string
     disabled: boolean
     paymentGateway: string
    }

    return (
        <>
        <ButtonQuikly parameters={data}>
        </>
    )
}

export default Component;
```

or

```jsx
import {ButtonQuikly} from 'quiklypay';

const Component = () => {

    return (
        <>
            <ButtonQuikly parameters={{
                isProduction: boolean
                amount: number
                fullName: string
                email: string
                receiveEmail: string
                receiveName: string
                successRedirect: string
                errorRedirect: string
                disabled: boolean
                paymentGateway: string
            }}>
        </>
    )
}

export default Component;
```

# Mandatory Parameters

```ts

    isProduction: boolean(default is false to development) -> (optional)
    amount: number -> (required)
    fullName: string -> (required)
    email: string -> (required)
    receiveEmail: string -> (required)
    receiveName: string -> (required)
    successRedirect: string -> (required)
    errorRedirect: string -> (required)
    disabled: boolean -> (optional)
    paymentGateway: string -> (optional)
```
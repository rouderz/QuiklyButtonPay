import React, {FunctionComponent} from 'react';
import {Button} from 'antd';

export interface IndexInterface {
    color: string;
}

const Index:FunctionComponent<IndexInterface> = () => {
    return (
        <> 
        <Button>Hola?</Button>
        </>
    )
}

export default Index;
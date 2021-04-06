import React from 'react';

type PropsType = {
    history: Array<string>
}

const Error : React.FC<PropsType> = ({history}) => {
    return (
        <div style={{textAlign: "center"}}>
            <button onClick={() => history.push('/')}>GO TO MAIN PAGE</button>
            ERROR
        </div>
    );
};

export default Error;
import React from 'react';
import useAuth from '../Hooks/useAuth';

const Demo = () => {
    const {signInWithGoogle}= useAuth();
    return (
        <div>
            <button onClick={signInWithGoogle}>goo</button>
        </div>
    );
};

export default Demo;
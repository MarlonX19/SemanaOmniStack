import React from 'react';

export default function Main({ match }){
    return (
        <h1>Ola {match.params.id} </h1>
    )
}
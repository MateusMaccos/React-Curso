import React, { Fragment } from "react";

export default props =>
    [
        <h1>Bom dia {props.nome}! Ele tem {props.idade} anos</h1>,
        <h2>Até Breve!</h2>
    ]

/* export default props =>
    <Fragment>
        <h1>Bom dia {props.nome}! Ele tem {props.idade} anos</h1>
        <h2>Até Breve!</h2>
    </Fragment> */
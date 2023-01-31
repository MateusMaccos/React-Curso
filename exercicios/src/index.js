import React from 'react'
import ReactDOM from 'react-dom'
//import Saudacao from './components/saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Mateus" sobrenome="Machado">
            <Filho nome="Mateus" />
            <Filho nome="José" />
            <Filho nome="Maria" />
        </Pai>
    </div>
    , document.getElementById('root'))

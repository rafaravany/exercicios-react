import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import { CompA, CompB } from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos'
//import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'
//import ComponenteComFuncao from './componentes/ComponenteComFuncao'
import Pai from './componentes/Pai'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Pai />
        {/*<ComponenteComFuncao />
        {/*<Familia sobrenome="Ferreira">
            <Membro nome="Andre"/>
            <Membro nome="Mariana"/>
        </Familia>
        <FamiliaSilva />
        {/* <MultiElementos />
        <CompA valor="Olá eu sou A!" />
        <CompB valor="B na área!" />
        <PrimeiroComponente valor="Bom dia!" AbCd="123"/> */}
    </div>
, elemento)
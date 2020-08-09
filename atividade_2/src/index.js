import React from 'react';
import ReactDOM from 'react-dom';
//Questão 1
//import Arena from './components/questao1/Arena'
//Questão 2
//import Arena from './components/questao2/Arena'
//Questão 3
/*
import World from './components/questao3/World'
import Arena from './components/questao3/Arena'
*/
//Questão 4
/*
import {Arena, Hero, Enemy} from './components/questao4/Arena'
import World from './components/questao4/World'
import {IMG_HERO, IMG_ENEMY} from './components/questao4/constants'
*/
//Questão 5
import {Arena, Hero, Enemy} from './components/questao5/Arena'
import World from './components/questao5/World'
import {IMG_HERO, IMG_ENEMY} from './components/questao5/constants'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
/*
Questão 1 e 2
//<Arena/>
*/
//Questão 3
/*
<World>
    <Arena />
    <Arena/>
    <Arena/>
</World>
*/
//Questão 4 e 5
<World>
  <Arena arena = 'Varjota'>
    <Hero name = 'Lulu' img = {IMG_HERO}/>
    <Enemy name = 'Vinci' img = {IMG_ENEMY}/>
  </Arena>
</World>

,
  document.getElementById('root')
);

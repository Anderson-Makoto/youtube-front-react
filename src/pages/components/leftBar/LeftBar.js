import React, { Component } from 'react'
import { styles } from './style'

export default class LeftBar extends Component {
    render() {
        return (
            <styles.content>
                <div id='inicio'>
                    <styles.icone selectedIcon={1}></styles.icone>    
                    <div className='texto'>Início</div>
                </div>
                
                <div id='em-alta'>
                    <styles.icone selectedIcon={2}></styles.icone>    
                    <div className='texto'>Em Alta</div>
                </div>
                
                <div id='inscricoes'>
                    <styles.icone selectedIcon={3}></styles.icone>    
                    <div className='texto'>Inscrições</div>
                </div>
                
                <div id='bibliotecas'>
                    <styles.icone selectedIcon={4}></styles.icone>    
                    <div className='texto'>Bibliotecas</div>
                </div>
                
            </styles.content>
        )
    }
}
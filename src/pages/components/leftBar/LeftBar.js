import React, { Component } from 'react'
import { styles } from './style'

export default class LeftBar extends Component {
    render() {
        return (
            <styles.content>
                <div id='inicio'>
                    <styles.icone cor={'red'}></styles.icone>    
                    <div className='texto'>Início</div>
                </div>
                
                <div id='em-alta'>
                    <styles.icone cor={'black'}></styles.icone>    
                    <div className='texto'>Em Alta</div>
                </div>
                
                <div id='inscricoes'>
                    <styles.icone cor={'pink'}></styles.icone>    
                    <div className='texto'>Inscrições</div>
                </div>
                
                <div id='bibliotecas'>
                    <styles.icone cor={'green'}></styles.icone>    
                    <div className='texto'>Bibliotecas</div>
                </div>
                
            </styles.content>
        )
    }
}
import React, { Component } from 'react'
import { styles } from './style'

export default class Inicio extends React.Component {
    render() {
        return (
            <styles.container>
                <h1>
                    Recomendados
                </h1>
                <styles.item>
                    <div className = 'thumb'>

                    </div>
                </styles.item>
            </styles.container>
        )
    }
}
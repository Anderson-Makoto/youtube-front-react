import React from 'react'
// import Inicio from './Inicio.js'

export default InicioComponent = () => {
    let videos = []
    function fetchVideos () {
        videos.concat(
            {
                nome: "Video 1",
                thumb: `${__dirname}/../../../../midia/thumbs/thumb1.jpg`,
                channel: "Canal 1",
                channelIcon: `${__dirname}/../../../../midia/channel/canal1.png`,
                views: "201 mil visualizações",
                postDate: "há 1 ano"
            },
            {
                nome: "Video 1",
                thumb: `${__dirname}/../../../../midia/thumbs/thumb1.jpg`,
                channel: "Canal 1",
                channelIcon: `${__dirname}/../../../../midia/channel/canal1.png`,
                views: "201 mil visualizações",
                postDate: "há 1 ano"
            },
            {
                nome: "Video 1",
                thumb: `${__dirname}/../../../../midia/thumbs/thumb1.jpg`,
                channel: "Canal 1",
                channelIcon: `${__dirname}/../../../../midia/channel/canal1.png`,
                views: "201 mil visualizações",
                postDate: "há 1 ano"
            },
            {
                nome: "Video 1",
                thumb: `${__dirname}/../../../../midia/thumbs/thumb1.jpg`,
                channel: "Canal 1",
                channelIcon: `${__dirname}/../../../../midia/channel/canal1.png`,
                views: "201 mil visualizações",
                postDate: "há 1 ano"
            }
        )
    };

    
}
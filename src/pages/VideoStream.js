import React, { useEffect, useState, useRef, Component } from 'react'
import Socketio from 'socket.io-client'

const socket = Socketio('http://localhost:8080')

const useInterval = (callback, delay, ...args) => {
	const savedCallback = useRef();

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		function tick() {
			savedCallback.current(...args);
		}
		if (delay !== null && delay !== undefined) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

const getNavigator = () => {
	return (window.navigator.getUserMedia
	|| window.navigator.webkitGetUserMedia
	|| window.navigator.mozGetUserMedia
	|| window.navigator.msgGetUserMedia)
}

const VideoStream = () => {
	let video = useRef()
	let canvas = useRef()
	let image = useRef()
	// const [image, setImage] = useState('')
	useEffect(() => {
		window.navigator.getUserMedia = getNavigator()
		if (window.navigator.getUserMedia) {
			window.navigator.getUserMedia(
				{video: true, audio: false},
				loadCamera,
				loadFail
			)
		}
		 socket.on('responseStream', src => {
		 	image.current.src = src
    });
	}, [])
	const loadCamera = stream => {
		try {
      video.current.srcObject = stream;
      video.current.addEventListener('loadedmetadata', () => {
			  canvas.current.width = video.current.videoWidth;
			  canvas.current.height = video.current.videoHeight;
			})
    } 
    
    catch (error) {
     	// video.src = window.URL.createObjectURL(stream);
    }
	}
	const loadFail = () => {

	}
	const draw = (video, canvas) => {
		if (video && canvas) {
			const ctx = canvas.current.getContext('2d')
			ctx.drawImage(video.current,0,0)
			socket.emit('stream',canvas.current.toDataURL('image/webp'))
		}
	}
	// useInterval(draw, 1000 / 60, video, canvas)
	console.log('render')
	return (
		<div className="h-100 container-fluid pt-3">
			<div className="row">
				<div className="col-6">
					<video ref={ref => video.current = ref} id="video" style={{width: '100%', height: '100%'}} autoPlay={true}></video>
					<canvas style={{display: 'none'}} ref={ref => canvas.current = ref} id="preview"></canvas>
				</div>
				<div className="col-6">
					<img src="" ref={ref => image.current = ref} />
				</div>
			</div>
		</div>
	)
}

export default VideoStream

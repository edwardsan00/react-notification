import React from 'react'
import { render } from 'react-dom'
// import { createUseStyles } from 'react-jss'

const stlyeNotification = {
	color: 'white',
	fontSize: '13px',
	width: '100%',
	height: '100%',
	padding: '8px',
	textAlign: 'center',
	position: 'relative',
	marginBotton: '10px'
}

const types = (type) => {
	const colors = {
		success: {
			backgroundColor: '#07bc0c'
		},
		warning: {
			backgroundColor: 'orange'
		}
	}
	return colors[type]
}

class viewNotification {
	constructor() {
		this._init()
	}
	styleContainer(node) {
		const defaultStyles = {
			zindex: 9999,
			'-webkit-transform': 'translate3d(0, 0, 9999px)',
			position: 'fixed',
			width: '250px',
			borderRadius: '3px',
			boxSizing: 'border-box',
			color: '#fff',
			left: '1rem',
			top: '1rem',
			display: 'flex',
			justifyContent: 'center',
			alingItems: 'center',
			boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
		}
		const newNode = Object.keys(defaultStyles).map(val => node.style[val] = defaultStyles[val])
		return newNode
	}
	_init() {
		const hasDivNotification = document.getElementById('divNotification')
		if (hasDivNotification) return false
		const divNotification = document.createElement('div')
		this.styleContainer(divNotification)
		divNotification.id = 'divNotification'
		document.body.appendChild(divNotification)
	}
	renderNotification(message, type) {
		const divNotification = document.getElementById('divNotification')
		render(React.createElement('div', {
			style: { ...stlyeNotification, ...types(type) },
		}, message), divNotification)
	}
}



class message {
	// static view() {
	// 	const view = new viewNotification()
	// 	view._init()
	// 	return view
	// }
	static susscess(msg) {
		return new viewNotification().renderNotification('Este es mi mensaje de success', 'success')
	}
	static warning(msg) {
		return new viewNotification().renderNotification('Este es mi mensaje de warning', 'warning')
	}
}

export default message
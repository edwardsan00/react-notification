import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
// import { createUseStyles } from 'react-jss'

const e = React.createElement
const stlyeNotification = {
	color: 'white',
	fontSize: '13px',
	padding: '8px',
	textAlign: 'center',
	position: 'relative',
	marginBottom: '10px',
	boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
}
const defaultStyles = {
	zindex: 9999,
	'-webkit-transform': 'translate3d(0, 0, 9999px)',
	position: 'fixed',
	width: '250px',
	top: '1rem',
	left: '1rem',
	borderRadius: '3px',
	boxSizing: 'border-box',
	color: '#fff',

}
const types = (type) => {
	const colors = {
		success: {
			backgroundColor: '#07bc0c'
		},
		warning: {
			backgroundColor: 'orange'
		},
		error: {
			backgroundColor: 'tomato'
		}
	}
	return colors[type]
}

const getPosition = (position) => {
	const ps = {
		'top-center': {
			top: '1rem',
			left: '50%',
			transform: 'translateY(-50%)'
		},
		'top-left': {
			top: '1rem',
			left: '1rem'
		},
		'top-right': {
			top: '1rem',
			right: '1rem'
		},
		default: {
			left: '1rem',
			top: '1rem',
		}
	}
	return ps[position] || ps.default
}

function Notifycation(props) {
	return React.createElement("div", {
		style: { ...stlyeNotification, ...types(props.type) },
	}, props.message);
}

class viewNotification {
	constructor() {
		this._init()
		this.divNotification = document.getElementById('divNotification')
		this.arr = []
	}
	setNotify(noty) {
		this.arr.push(noty)
		this.renderNotification()
	}
	getNotify() {
		return this.arr
	}

	_init() {
		const hasDivNotification = document.getElementById('divNotification')
		if (hasDivNotification) return
		const divNotification = document.createElement('div')
		// this.styleContainer(divNotification)
		divNotification.id = 'divNotification'
		document.body.appendChild(divNotification)
	}

	timerUnmound() {
		return setTimeout(() => {
			unmountComponentAtNode(this.divNotification)
			this.arr = []
		}, 2000)
	}

	renderNotification() {
		console.log(this.arr)
		render(e('div', { style: { ...defaultStyles } }, [
			this.arr.map((item) => {
				return e(Notifycation, { message: item.message, type: item.type })
			})
		]), this.divNotification)
		this.timerUnmound()
	}
}

class Message {
	constructor() {
		this.nt = new viewNotification()
	}
	susscess(message) {
		this.nt.setNotify({ message, type: 'success' })
	}
	warning(message) {
		this.nt.setNotify({ message, type: 'warning' })
	}
	error(message) {
		this.nt.setNotify({ message, type: 'error' })
	}
}

export default new Message()
import React from 'react'
import defaultAvatar from '../assets/images/default-avatar.png'

const Avatar = ({src}) => {
	return (
		<div className="avatar" style={{backgroundImage: `url(${src || defaultAvatar})`}}></div>
	)
}

export default Avatar

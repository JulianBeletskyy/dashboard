import React, { useEffect, useState, useRef } from 'react'
import cn from 'classnames'

const randomId = () => {
	return '_' + Math.random().toString(36).substr(2, 9)
}

const RuningString = ({text, classId = randomId(), running}) => {
	let runString = useRef(null)
	let wrapper = useRef(null)
	const [offset, setOffset] = useState(1)
	const [parentWidth, setParentWidth] = useState(0)
	useEffect(() => {
		setParentWidth(wrapper.current.offsetWidth)
		setOffset(runString.current.offsetWidth)
	}, [])
	return (
		<div className="run-string-wrapper" ref={ref => wrapper.current = ref}>
			<div className={cn('run-string', {running}, classId)} ref={ref => runString.current = ref}>
				{ text }
			</div>
			<style jsx="true">{`
				.run-string-wrapper {
					overflow: hidden;
					height: 24px;
					position: relative;
				}
				.run-string.${classId} {
					display: inline-block;
					position: absolute;
					white-space: nowrap;
					right: calc(${parentWidth}px - ${offset}px);
					font-weight: bold;
					font-size: 16px;
				}
				.run-string.${classId}.running {
					animation-name: runString${classId};
					animation-timing-function: linear;
					animation-duration: ${(parentWidth + offset) / 140}s;
					animation-delay: ${(parentWidth + offset) / 2000}s;
					animation-iteration-count: infinite;
					transition: ${!parentWidth ? 'none' : `right linear ${(parentWidth + offset) / 2000}s`};
				}
				@-webkit-keyframes runString${classId} {
			    0%   {
			    	right: -${offset}px;
			    }
			    100% {
			    	right: ${parentWidth};
			    }
				}
			`}</style>
		</div>
	)
}

export default RuningString

import React, { useEffect, useRef, useState, Fragment } from 'react'
import moment from 'moment'

const Timer = ({endTime, children}) => {
	const [sec, setSeconds] = useState(0)
	const startTime = useRef(moment()).current
 	useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setSeconds(sec => sec + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [sec])
	const getHumanTime = () => {
		const duration = moment.duration(startTime.diff() * -1)
		const days = parseInt(duration.asDays())
		const hours = parseInt(duration.asHours())%24
		const minutes = parseInt(duration.asMinutes())%60
		const seconds = parseInt(duration.asSeconds())%60
		return {
			days,
			hours,
			minutes,
			seconds,
		}
	}
	return (
		<Fragment>
			{ children(getHumanTime()) }
		</Fragment>
	)
}

export default Timer
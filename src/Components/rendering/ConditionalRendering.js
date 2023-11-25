import React from 'react'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'

const ConditionalRendering = ({isLoggedIn}) => {
  return (
    <div>
        { isLoggedIn? <LoggedIn />: <LoggedOut />}
    </div>
  )
}

export default ConditionalRendering
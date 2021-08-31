import React from 'react'
import { Link } from 'react-router-dom'
import Comment from './Comment'

export default ({match}) => (
  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
    <div><Link to="/">Back to dashboard</Link>
    <h3>Item {match.params.itemId}</h3>
    </div>
    <Comment itemID={match.params.itemId} currentUserID={match.params.currentUserId} currentUserName={match.params.currentUserName}/>
  </div>
)

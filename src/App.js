import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import ReviewItem from './components/ReviewItem'
import ReviewItems from './components/ReviewItems'

// hard-coded list of available users in lieu of actually having
// authentication or pulling users from a database
const availableUsers = [
  {
    id: 'c98f52d2-d521-4ecc-bba1-d63ce7591bfb',
    name: 'User A'
  },
  {
    id: 'e2d648f2-476e-4833-acec-9f7559544dd8',
    name: 'User B'
  }
]

const App = () => {
  const [currentUser, setCurrentUser] = useState(availableUsers[0])

  const setUser = user => setCurrentUser(user)

  return (
    <div className="app">
      <Header users={availableUsers} currentUser={currentUser} setUser={setUser} />
      <div className="app__content-container">
        <Router>
          <div className="app__content">
            <Route
              exact
              path="/"
              render={() => <ReviewItems currentUser={currentUser} /> }
            />
            <Route path="/items/:itemId/:currentUserId" component={ReviewItem} />
          </div>
        </Router>
      </div>
    </div>
  )
}

export default App

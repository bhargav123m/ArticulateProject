import React from 'react'
import classNames from 'classnames'

import logo from '../logo.svg'
import './Header.css'

const Header = ({users, currentUser, setUser}) => {

  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Review" />
      <h2 className="header__title">Articulate Developer Challenge</h2>
      <div className="header__user">
        { users.map(user =>
          <button
            key={user.id}
            className={classNames('header__user-button', { 'user--active': currentUser.id === user.id })}
            title="Click to set active user"
            onClick={() => setUser(user)}
          >
            { user.name }
          </button>
        ) }
      </div>
    </header>
  )
}

export default Header

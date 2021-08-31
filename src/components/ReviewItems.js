import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import toMaterialStyle from 'material-color-hash'
import 'whatwg-fetch'

import './ReviewItems.css'

const fetchItemsForUser = async userId => {
  const response = await fetch(`/api/items?userId=${userId}`)

  if (response.status !== 200) {
    const text = await response.text()
    throw new Error(text)
  } 

  return await response.json()
}

const ReviewItems = ({currentUser}) => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])

  useEffect(() => { fetchItems() }, [currentUser.id])

  const fetchItems = async () => {
    setLoading(true)

    try {
      const fetchedItems = await fetchItemsForUser(currentUser.id)
      setLoading(false)
      setItems(fetchedItems)
    } catch (err) { 
      setLoading(false)
      setItems([])
      console.error(err)
    }
  }

  return (
    <div className="review-items">
      <h3>Review items for {currentUser.name}:</h3>
      <div className="grid grid--columns-3">
        { loading && <div className="review-items__loading">Loading...</div>}
        { !loading && items.map(item =>
          <Link to={`/items/${item.id}/${currentUser.id}`} key={item.id} className="grid__item" style={toMaterialStyle(item.id, 100)}>
            { item.title }
          </Link>
        ) }
      </div>
    </div>
  )
}

export default ReviewItems

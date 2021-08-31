const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

// for the sake of this exercise, we'll just load the "database"
// on server start-up from static json files
let items = require('../data/items.json')

function server() {
  const app = express()
  const port = process.env.PORT || 5000

  app.use(morgan('dev'))
  app.use(express.json())
  app.use(cors()) 
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.get('/api/items', (req, res) => {
    res.send(items.filter(item => item.userId === req.query.userId))
  })

  app.get('/api/item', (req, res) => {
    res.send(items.find(item => item.id === req.query.itemID))
  })

  app.post('/api/comments', (req,res) => {
    console.log(items)
    // let parseItems = JSON.parse(items);
    items = items.map(val => {
      if(val.id === req.body.itemID){
        if(!val.hasOwnProperty("comments")){
          val['comments'] = [req.body]
        } else {
          val['comments'] =  val['comments'].concat(req.body)
        }
      }
      return val
    })
    // items=json.stringfy(parseItems)
    res.send(items)
  })

  app.start = app.listen.bind(app, port, () => console.log(`Listening on port ${port}`))

  return app
}

if (require.main === module) server().start()

module.exports = server

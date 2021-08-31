import React, {useState, useEffect} from 'react'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const updateCommentsForUser = async reqObj => {
  const response = await axios.post(`http://localhost:5000/api/comments`,reqObj)

  if (response.status !== 200) {
    const text = await response.text()
    throw new Error(text)
  } 

  return await response
}


const Comment = ({currentUserID, itemID}) => {
    const useStyles = makeStyles((theme) => ({
        margin: {
          margin: theme.spacing(1),
        },
      }));
      const classes = useStyles();

    const [commentVal, setCommentVal] = useState("")

    const [commentArr, setcommentArr] = useState([])

    useEffect( async () => {
      const response = itemID && await axios.get(`http://localhost:5000/api/item?itemID=${itemID}`)
      if(response){
        setcommentArr(response.data.comments || [])
      }
    }, [])

    const submithandler = async () => {
        const newCommentArr = [...commentArr]
        newCommentArr.push({
            comment: commentVal,
            timeStamp: new Date(),
            itemID: itemID,
            currentUserID: currentUserID
        })
        const fetchedItems = await updateCommentsForUser({
          comment: commentVal,
          timeStamp: new Date(),
          itemID: itemID,
          currentUserID: currentUserID
      })
      console.log("fetchedItems",fetchedItems)
      if(fetchedItems){
        setcommentArr(newCommentArr)
        setCommentVal("")
      }
    }


    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            {console.log(commentVal)}
            <div>Comments</div>
            <TextField
        className={classes.margin}
        value={commentVal}
        onChange={(e) => setCommentVal(e.target.value)}
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" color="primary" href="#contained-buttons" onClick={submithandler}>
       Submit
     </Button>
     <div>
         {commentArr.map((val, i) => (
             <div key={i}>
                 {val.comment}
             </div>
         ))}
     </div>
        </div>
    )
}

export default Comment
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';



const Comment = ({commentDetails, currentUserName}) => {
    const useStyles = makeStyles((theme) => ({
        commentStyles: {
        display: "flex",
        flexDirection: "row",
          border: "1px solid black",
          padding: 6,
          margin: 10
        },
        columnStyles: {
            display: "flex",
        flexDirection: "column",
        }
      }));
      const classes = useStyles();

    return (
        <div>
            <div className={classes.commentStyles}>
            <span style={{flexBasis: "15%"}}><PersonIcon /></span>
            <div style={{display: "flex", flexDirection: "column"}}>
            <span style={{marginBottom: 4}}>{currentUserName}</span>
            <span>{commentDetails.comment}</span>
        </div>
            </div>
        </div>
    )
}

export default Comment
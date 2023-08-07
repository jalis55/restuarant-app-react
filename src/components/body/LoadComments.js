import React from 'react'

import dateFormat from 'dateformat';

const LoadComments = ({comments}) => {
  const previewComments=comments.map((comment)=>{
    return(<div key={comment.id}>
      <h5 style={{display:"inline"}}>{comment.author}</h5>
      <p>{comment.comment}</p>
      <p>Rating:{comment.rating}/5</p>
      <p>{dateFormat(comment.date, "dddd, mmmm d, yyyy, h:MM TT")}</p>

    </div>)

  })
  return (
    <div>{previewComments}</div>
  )
}

export default LoadComments;
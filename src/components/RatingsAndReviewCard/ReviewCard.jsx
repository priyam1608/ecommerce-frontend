import { Avatar, Box, Rating } from '@mui/material'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex space-x-3'>
        <Box>
            <Avatar sx={{width:56,height:56, bgcolor:"#9155fd"}}>R</Avatar>
        </Box>
        <div className='flex flex-col mb-3'>
            <h3>Raam</h3>
            <p>April 5,2024</p>
            <Rating readOnly value={4} precision={0.5} />
            <p>That was a really Nice Product</p>
        </div>
    </div>
  )
}

export default ReviewCard
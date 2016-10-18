import React from 'react'
import { Link } from 'react-router'
import User from './User'

const SelectedUser = ({slug}) => {
  return (
    <div>
      <Link to="/pantry">change user</Link>
      <User slug={slug} wrapperClassName="title" />
    </div>
  )
}


export default SelectedUser

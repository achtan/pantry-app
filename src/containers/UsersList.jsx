import React from 'react'
import { Link } from 'react-router'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'

const UsersList = ({data}) => {
  if (data.loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="title">Select user</div>
      {data.users.map(user => {
        return <div key={user.id} >
          <Link to={`/pantry/${user.slug}`} >{user.name}</Link>
        </div>
      })}
    </div>
  )
}




const UsersListQuery = gql`
  query UsersList {
    users {
      id
      name
      slug
    }
  }
`


export default compose(
  graphql(UsersListQuery),
)(UsersList)

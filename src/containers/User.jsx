import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'

const User = ({data, slug, wrapperClassName}) => {
  if (data.loading) return <div>Loading...</div>;
  const {user} = data;

  return (
    <div className={wrapperClassName}>
      {user.name}
    </div>
  )
}




const UserQuery = gql`
  query User($slug: String!) {
    user(slug: $slug) {
      id
      name
    }
  }
`


export default compose(
  graphql(UserQuery),
)(User)

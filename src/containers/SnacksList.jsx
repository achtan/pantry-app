import React from 'react'
import { Link } from 'react-router'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import SelectedUser from './SelectedUser'
import UserStats from './UserStats'


const styles = {
  snacksWrapper: {
    marginTop: '2rem'
  }
};

const SnacksList = ({data, params: {user}, takeSnack}) => {
  if (data.loading) return <div>Loading...</div>;

  return (
    <div>
      <SelectedUser slug={user}/>
      <div className="columns is-multiline" style={styles.snacksWrapper}>
        {data.snacks.map(snack => {
          return <div key={snack.id} className="column is-one-third">
            <div className="button is-outlined is-primary" onClick={takeSnack.bind(null, user, snack.id)}>{snack.name}</div>
          </div>
        })}
      </div>
      <UserStats slug={user} />
    </div>
  )
}



const query = gql`
  query SnacksList {
    snacks {
      id
      name
    }
  }
`

const TakeSnack = gql`
  mutation TakeSnack($user: String!, $snack: String!) {
    takeSnack(user: $user, snack: $snack) {
      id
      eatenSnacks {
        snack
      }
    }
  }
`


export default compose(
  graphql(query),
  graphql(TakeSnack, {
    props: ({ mutate }) => ({
      takeSnack: (user, snack) => mutate({ variables: { user, snack } })
    })
  })
)(SnacksList)

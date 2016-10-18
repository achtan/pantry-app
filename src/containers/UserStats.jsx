import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'

const styles = {
  wrapper: {
    marginTop: '2rem'
  },
  lastSnacksWrapper: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    textAlign: 'left'
  }
};

const UserStats = ({data, slug}) => {
  if (data.loading) return <div>Loading...</div>;

  const {user} = data;

  // count snacks
  const snacksCount = {};
  user.eatenSnacks.map(log => {
    if(!snacksCount[log.snack]) snacksCount[log.snack] = 0;
    snacksCount[log.snack] = snacksCount[log.snack] + 1;
  });

  const topSnacks = [];
  for (var property in snacksCount) {
    if (snacksCount.hasOwnProperty(property)) {
      topSnacks.push({name: property, count: snacksCount[property]});
    }
  }

  // sort by count
  topSnacks.sort((a, b) => b.count - a.count);

  // get last snacks
  const lastSnacks = user
    .eatenSnacks
    .reverse()
    .map(log => log.snack)
    .join(', ');

  return (
    <div style={styles.wrapper}>
      <h3 className="subtitle has-text-left">Favorite snacks</h3>
      <nav className="level">
        {topSnacks.slice(0, 4).map((snack) => {
          return <div className="level-item has-text-centered" key={snack.name}>
            <p className="heading">{snack.name}</p>
            <p className="title">{snack.count}</p>
          </div>
        })}
      </nav>

      <div style={styles.lastSnacksWrapper}>
        <strong>Last snacks: </strong>{lastSnacks}
      </div>
    </div>
  )
}




const UserQuery = gql`
  query User($slug: String!) {
    user(slug: $slug) {
      id
      name
      eatenSnacks {
        snack
      }
    }
  }
`


export default compose(
  graphql(UserQuery),
)(UserStats)

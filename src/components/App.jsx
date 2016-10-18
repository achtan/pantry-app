import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = {
  background: {
    backgroundColor: 'rgb(0, 156, 133)',
  }
}

export default function App({ children }) {
  return (
    <div className="hero is-fullheight" style={styles.background}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.object
}

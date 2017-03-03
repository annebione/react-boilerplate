import React from 'react'
import Home from './Home'
import { Link, IndexLink } from 'react-router'
import NavLink from '../components/NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Boilerplate</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}> Index</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>

        {this.props.children || <Home/>}

      </div>
    )
  }
})

import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import store from '../store'
import connect from 'react-redux'
import  { fetchUser } from '../User/userActions'

const home = document.getElementById('home');

//install transpiler for decorator
@connect((store) => {
    user: store.user.user,
    userFetched: false,
    products: store.products.products
}) 
export default React.createClass({

  this.propTypes = {
    user.name: React.PropTypes.string
  };
    
    componentWillMount() {
        this.props.dispatch(fetchUser(25)) 
    };
    
	render() {
      const user = {this.props.user};
                                 
      if (!user.length) {
        return <button onClick={this.props.fetchUser.bind(this)}>Load user</button>
      }                              
         
      const mappedUserInfo user.map(userInfo => <li>{user.description}</li>)

	  return (
        <div>
          <h1> Home </h1>
          <h2>this.props.user.name</h2>
          <ul>{mappedUserInfo}</h2>                            
        </div>
	  )
	}
})

ReactDOM.render(<Home/>, home})
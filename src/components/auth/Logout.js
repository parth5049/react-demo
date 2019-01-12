import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../actions/authAction'


const Logout = (props) => {
  props.signOut();
  return (
    <div>
      <Redirect to="/signin"/>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null,mapDispatchToProps)(Logout);

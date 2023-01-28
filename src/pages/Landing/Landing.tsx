import React from 'react'
import { connect } from 'react-redux'

const Landing: React.FC<any> = ({ user })  => {
  console.log(user)
  return (
    <div style={{ color: 'red'}}>asdasdasdasdasdsad</div>
  )
}

const mapStateToProps = (state: any) => ({ user : state.auth})
export default connect(mapStateToProps)(Landing)
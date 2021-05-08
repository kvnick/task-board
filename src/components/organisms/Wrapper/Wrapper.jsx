import React from 'react'

import HeaderContainer from '../../../containers/HeaderContainer'
import FooterContainer from '../../../containers/FooterContainer'
import useStyles from './styles'

const Wrapper = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <HeaderContainer />
      {props.children}
      <FooterContainer />
    </div>
  )
}

export default Wrapper

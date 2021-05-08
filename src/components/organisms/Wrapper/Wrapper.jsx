import React from 'react'

import HeaderContainer from '../../../containers/HeaderContainer'
import FooterContainer from '../../../containers/FooterContainer'

const Wrapper = (props) => {
  return (
    <>
      <HeaderContainer />
      {props.children}
      <FooterContainer />
    </>
  )
}

export default Wrapper

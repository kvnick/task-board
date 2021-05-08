import React from 'react'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      elevation={0}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box pt={3}>{children}</Box>
    </Typography>
  )
}

export default TabPanel

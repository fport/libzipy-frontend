import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import { libzipy } from '../../assets'

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image src={libzipy} alt="libzipy logo" />
    </Box>
  )
}

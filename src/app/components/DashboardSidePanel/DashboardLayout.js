import { Flex } from '@chakra-ui/react'
import DasboardSidePanel from './DasboardSidePanel'
import Category from '../Category'
import Library from '../Library'

export default function DashboardLayout(props) {
  console.log(window.location.pathname)
  let url = window.location.pathname
  return (
    <Flex direction="row" align="center" h="100vh" w="100vh" m="0" {...props}>
      <DasboardSidePanel />
      {url === '/dashboard/category' ? (
        <Category />
      ) : url === '/dashboard/library' ? (
        <Library />
      ) : null}
    </Flex>
  )
}

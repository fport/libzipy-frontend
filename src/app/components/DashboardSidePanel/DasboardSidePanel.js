/*import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux' */
import { Flex, Spacer, Box, Avatar, Text } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'

const DasboardSidePanel = () => {
  /*const [panel, setPanel] = useState('/borrow-book')

    const dispatch = useDispatch()
    const appleOnTree = useSelector((state) => state.projects.appleOnTree)

    const changePanel = () => {
        dispatch({ type: 'DROP_APPLE', payload: panel })
    }
    */

  return (
    <>
      <Flex direction="column">
        <Box h="100vh" w="260px" p="4" bg="#233b58">
          <Box mb="10" align="spaceBetween">
            <Flex p="2">
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Spacer />
              <Flex direction="column" ml="1rem">
                <Text textAlign="left" color="gray.200" fontSize="lg">
                  Osman Abi
                </Text>
                <Text textAlign="left" color="gray.400" fontSize="md">
                  osmanabi@gmail.com
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Text fontSize="sm" color="gray.500" mb="1">
            🧩 Detaylar ulaşmak için
          </Text>
          <Box color="white" align="space-around">
            <CopyIcon mr="1" />
            <a href="http://localhost:3000/dashboard/category">Kategoriler</a>
          </Box>
          <Box mt="3" color="white" align="space-around">
            <CopyIcon mr="1" />
            <a href="http://localhost:3000/dashboard/library">Kütüphaneler</a>
          </Box>
          <Text fontSize="sm" color="gray.500" mb="1" mt="10">
            🧵 Hayatımızı güzelleştiren
          </Text>
          <Box mt="3" color="white" align="space-around">
            <CopyIcon mr="1" />
            <a href="http://localhost:3000/dashboard/books">Kitaplar</a>
          </Box>
          <Text fontSize="sm" color="gray.500" mb="1" mt="10">
            💁 Bişi bişi{' '}
          </Text>
          <Box mt="3" color="white" align="space-around">
            <CopyIcon mr="1" />
            <a href="http://localhost:3000/dashboard/member">Üyeler</a>
          </Box>
          <Box mt="3" color="white" align="space-around">
            <CopyIcon mr="1" />
            <a href="http://localhost:3000/dashboard/author">Yazarlar</a>
          </Box>
        </Box>
      </Flex>
    </>
  )
}
export default DasboardSidePanel

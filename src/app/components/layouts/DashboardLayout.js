import { Flex } from "@chakra-ui/react";
import DasboardSidePanel from "../sections/DasboardSidePanel";

export default function DashboardLayout(props) {
  return (
    <Flex
      direction="row"
      align="center"
      h="100vh"
      w="100vh"
      m="0"
      {...props}
    >
      <DasboardSidePanel/>
        {props.children}
    </Flex>
  );
}
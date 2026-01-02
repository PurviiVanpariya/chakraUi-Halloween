import { Box, Container, Flex, Grid, Image, Text } from "@chakra-ui/react"
import { FaBehance, FaFacebookF, FaLinkedinIn, FaPinterest, FaTwitter } from "react-icons/fa"

import OutlinedInput from "../components/input"
import Button from "../components/button"

const Footer = () => {
  return (
    <Box id="contact" className="relative overflow-hidden!">
      <Image src="/src/assets/images/contactLeftSide.png" alt="Spider" className="absolute -left-[242px] top-4 z-20" />
      <Box bg="#411B58" className="py-[60px]! relative overflow-hidden!">
        <Image src="/src/assets/images/spider.png" alt="Spider" className="absolute -top-52 left-1/2 transform -translate-x-1/2" />
        <Container maxW={1200} px={3.5} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Text className="text-primary text-[32px]!" >Invite someone special</Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" my={7}>
            <OutlinedInput className="px-5!" placeholder="Dasda" width="100%" height="30px" />
            <OutlinedInput className="px-5!" placeholder="Guest Email Address" width="100%" height="30px" />
            <OutlinedInput className="px-5!" placeholder="Guest Mobile Number" width="100%" height="30px" />
            <OutlinedInput className="px-5!" placeholder="Combine Entry" width="100%" height="30px" />
          </Grid>
          <Button className="h-12! w-[155px]! text-xl!">Send Invitation</Button>
        </Container>
      </Box>
      <Box bg="#2c0047" className="pt-[60px]! relative">
        <Image src="/src/assets/images/spider.png" alt="Spider" className="absolute -top-52 left-1/2 transform -translate-x-1/2" />
        <Container maxW={1200} px={3.5} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Text className="text-primary text-[32px]!" mb={10}>Signup For Newsletter</Text>
          <Box className="relative mb-2.5!">
            <OutlinedInput className="px-5!" placeholder="Your E-mail Address Here" width="600px" height="40px" borderRadius="50px" />
            <Button className="absolute top-0 right-0 text-base! px-[22px]! h-10! rounded-l-none!">Subscribe</Button>
          </Box>
          <Text className="text-[#CCCCCC] text-xl!" py={5}>Get Update</Text>
          <Flex className="mb-[50px]!" gap={2}>
            <Button variant="icon" className="text-base!"><FaFacebookF /></Button>
            <Button variant="icon" className="text-base!"><FaTwitter /></Button>
            <Button variant="icon" className="text-base!"><FaPinterest /></Button>
            <Button variant="icon" className="text-base!"><FaBehance /></Button>
            <Button variant="icon" className="text-base!"><FaLinkedinIn /></Button>
          </Flex>
        </Container>
        <Box borderTop="1px solid #6c4d7f" className="h-[65px]!" display="flex" alignItems="center" justifyContent="center">
          <Text className="text-primary text-sm!" display="flex" justifyContent="center" alignItems="center" fontFamily="system-ui">
            Copyright © 2018. All rights reserved by Designer
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer

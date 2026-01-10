import { Box, Container, Text } from "@chakra-ui/react"

const Ticket = () => {
  return (
    <Box className="bg-[url('/ticket-bg.png')] pt-[60px]!">
      <Container maxW={1150} px={3.5} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Text className="text-primary text-[32px]! mb-10!">Get the Ticket</Text>
      </Container>
    </Box>
  )
}

export default Ticket 
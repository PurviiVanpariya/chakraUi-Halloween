import { Box, Container, Flex, Grid, Image, Text } from '@chakra-ui/react'

import Button from '../components/button'
import skullPng from '../assets/images/skull.png'
import aboutLeftSidePng from '../assets/images/aboutLeftSide.png'
import { FaBehance, FaDribbble, FaFacebookF, FaTwitter } from 'react-icons/fa'

const About = () => {
    return (
        <Box id="about" className='py-[60px]! bg-[#411B58] w-full relative overflow-hidden!'>
            <Image src={aboutLeftSidePng} alt="skull" className='h-[530px]! w-[530px]! absolute! -top-3 -left-12! object-center!' />
            <Image src={skullPng} alt="skull" className='h-[1400px]! absolute! -top-100! -right-20! object-center!' />
            <Container maxW="1200px" className='text-center! relative'>
                <Image src="/src/assets/images/spider.png" alt="Spider" className="absolute pointer-events-none -top-68 left-1/2 transform -translate-x-1/2" />
                <Text className='text-[32px]! text-center! text-primary! font-medium! mb-8!'>About The Party</Text>
                <Text className='text-sm! text-center! max-w-2xl! mx-auto! font-sans! leading-6! mb-4!'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</Text>
                <Text className='text-sm! text-center! max-w-2xl! mx-auto! font-sans! leading-6! mb-8!'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</Text>
                <Button className='w-[155px]! text-xl! mt-6!'>Know More</Button>
            </Container>
            <Container maxW="1200px" className='text-center! relative pt-[60px]!'>
                <Image src="/src/assets/images/spider.png" alt="Spider" className="absolute pointer-events-none -top-52 left-1/2 transform -translate-x-1/2" />
                <Text className='text-[32px]! text-center! text-primary! font-medium! mb-8!'>Our Halloween's Artist</Text>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <Flex align="center">
                        <Image src="/src/assets/images/artist.png" alt="Artist" className="size-[285px]" />
                        <Box>
                            <Text className='text-left! text-2xl!'>DJ Remerson Huke</Text>
                            <Text className='text-left!'>Lead DJ On Deadpoll</Text>
                            <Text className='text-left! text-sm! my-4! font-sans!'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</Text>
                            <Flex align="center" gap={2}>
                                <Button variant="icon" className="text-base!"><FaFacebookF /></Button>
                                <Button variant="icon" className="text-base!"><FaTwitter /></Button>
                                <Button variant="icon" className="text-base!"><FaDribbble /></Button>
                                <Button variant="icon" className="text-base!"><FaBehance /></Button>
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex align="center">
                        <Image src="/src/assets/images/artist.png" alt="Artist" className="size-[285px]" />
                        <Box>
                            <Text className='text-left! text-2xl!'>DJ Remerson Huke</Text>
                            <Text className='text-left!'>Lead DJ On Deadpoll</Text>
                            <Text className='text-left! text-sm! my-4! font-sans!'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</Text>
                            <Flex align="center" gap={2}>
                                <Button variant="icon"><FaFacebookF /></Button>
                                <Button variant="icon"><FaTwitter /></Button>
                                <Button variant="icon"><FaDribbble /></Button>
                                <Button variant="icon"><FaBehance /></Button>
                            </Flex>
                        </Box>
                    </Flex>
                </Grid>
            </Container>
        </Box>
    )
}

export default About

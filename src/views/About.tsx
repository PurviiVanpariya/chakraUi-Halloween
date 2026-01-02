import { Box, Container, Image, Text } from '@chakra-ui/react'

import Button from '../components/button'
import skullPng from '../assets/images/skull.png'

const About = () => {
    return (
        <Box id="about" className='py-[60px]! bg-[#431D5A] w-full relative overflow-hidden!'>
            <Image src={skullPng} alt="skull" className='h-[1200px]! absolute! -top-90! right-0!' />
            <Container maxW="1200px" className='px-3.5! mx-auto! text-center!'>
                <Text className='text-[32px]! text-center! text-primary! font-medium! mb-10!'>About The Party</Text>
                <Text className='text-sm! text-center! max-w-2xl! mx-auto! font-sans! leading-6! mb-4!'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</Text>
                <Text className='text-sm! text-center! max-w-2xl! mx-auto! font-sans! leading-6! mb-8!'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</Text>
                <Button className='w-[155px]! text-xl!'>Know More</Button>
            </Container>
        </Box>
    )
}

export default About

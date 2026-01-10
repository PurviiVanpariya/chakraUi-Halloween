import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'

import BannerImg from '../assets/images/hauntedHouse.png'
import Button from '../components/button'

const Banner = () => {
    return (
        <Box id="home" className='bg-[#2c0047] -mt-[71px]!'>
            <Container maxW="1280px" className='pr-32! pt-[71px]!'>
                <Flex>
                    <Image
                        src={BannerImg}
                        alt="bannerimg"
                        className='w-[634px]! h-[571px]!'
                    />
                    <Box textAlign={'center'} className='flex flex-col justify-center items-center'>
                        <Text className='text-xl!'>31th octobar 2018</Text>
                        <Text className='text-primary text-6xl! font-bold mt-2! pb-9!'>Halloween Party</Text>
                        <Text className='pb-9! font-sans! text-sm!'>Halloween or Hallowe'en (a contraction of All Hallows' Evening) also known as Allhalloween, All Hallows' Eve or All Saints' Eve is a celebration observed in a number of countries on 31 October.</Text>
                        <Button className='w-[155px] text-xl!'>Explore More</Button>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Banner

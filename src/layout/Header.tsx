import { useEffect, useState } from 'react';
import { Box, Container, Flex, Icon, Image, Link } from '@chakra-ui/react'

import Button from '../components/button'
import LogoPng from '../assets/images/logo.png'

const navSections: { id: string; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Party" },
  { id: "artist", label: "Artist" },
  { id: "gallery", label: "Gallery" },
  { id: "testimonial", label: "Testimonial" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let currentSection = navSections[0].label;
      for (const section of navSections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        const top = element.getBoundingClientRect().top;
        if (top - 80 <= 0) {
          currentSection = section.label;
          continue;
        }
        break;
      }
      setActiveMenu((prev) => (prev === currentSection ? prev : currentSection));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box className={`pt-3! pb-[11px]! px-4! sticky h-[73px]! top-0 left-0 bg-[#2C0147]! z-50`} color="white">
      <Container maxW="1200px" className='px-3.5'>
        <Flex align="center" justify="space-between">
          <Flex align="center">
            <Icon boxSize={8} viewBox="0 0 20 20" fill="currentColor" color="purple.500">
              <Image src={LogoPng} alt="logo" className='w-[55px]! h-[50px]!' />
            </Icon>
          </Flex>

          <Flex align="center" className='gap-5'>
            {
              navSections.map((section) => (
                <Link key={section.label} fontSize="md" className={`text-white! px-2.5! menu-link outline-none! hover:no-underline! ${section.label === activeMenu ? "menu-link-active" : ""}`} onClick={() => { scrollToSection(section.id); setActiveMenu(section.label) }}>{section.label}</Link>
              ))
            }
          </Flex>
          <Button className='h-[50px]! w-[145px]! text-xl!'>
            Get a Ticket
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header

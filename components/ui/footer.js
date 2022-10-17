import { Flex, Text } from "@chakra-ui/react"
import { AiTwotoneMail, AiFillFacebook, AiFillPhone } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
const Footer = () => {
    return (
        <Flex height='6rem' alignItems='center' justifyContent='space-around' bgColor='facebook.400' >
            <Flex><Text display='flex' gap='2'><AiTwotoneMail size={25} /> example@mail.com</Text></Flex>
            <Flex gap='2' alignItems='center'>
                <Text cursor='pointer' display='flex' gap='2'><FaLinkedin size={25} /></Text>
                <Text cursor='pointer' display='flex' gap='2'><BsGithub size={25} /></Text>
                <Text cursor='pointer' display='flex' gap='2'><AiFillFacebook size={30} /></Text>
            </Flex>
            <Flex>
                <Text display='flex' gap='2' alignItems='center' fontWeight='bold' fontSize='lg' ><AiFillPhone size={25} />+98-00-00</Text>
            </Flex>
        </Flex>
    )
}

export default Footer
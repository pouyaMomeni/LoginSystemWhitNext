import { Button, Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
const Locale = ({ children }) => {
    let router = useRouter()
    return (
        <>
            <Box direction='col' position='fixed' right='0' top='0' mt='10rem' padding='1'>
                {router.locales.map((locale) => {
                    return (
                        <Button key={locale} display='flex' flexdire='column' width='1rem' padding='2' my='0.5' colorScheme='teal' variant='outline'><Link href={router.asPath} locale={locale} ><a >{locale}</a></Link></Button>
                    )
                })}
            </Box>
            {children}
        </>
    )
}

export default Locale
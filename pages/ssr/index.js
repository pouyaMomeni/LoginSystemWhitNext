import { Flex, Text } from '@chakra-ui/react'
const index = ({users}) => {
    return (
        <>
            <Flex flexDirection='column' justifyContent='center' alignItems='center'>
                <Text fontSize='3xl' fontWeight='bold' mt='6' >SSR test</Text>
                <Flex justifyContent='center' alignItems='center' mt='8'>
                    <ul >
                        {users?.map((values) => {
                            return (
                                <li key={values.id}>{values.name}</li>
                            )
                        })}
                    </ul>
                </Flex>
            </Flex>
        </>
    )
}

export default index
export async function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
    return {
        props: {
            users: data
        },
    }
}


import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useSignIn } from '../../hook'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Box,
    Text,
    Flex,
    useColorMode
} from '@chakra-ui/react'
import { GoSignIn } from 'react-icons/go'
import { useTranslation } from 'next-i18next';






export default function Sign() {
    const addUser = useSignIn()
    const { t } = useTranslation();
    const { toggleColorMode } = useColorMode()
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    async function onSubmit(values) {
        // return new Promise((resolve) => {
        //     setTimeout(() => {
        //         alert(JSON.stringify(values, null, 2))
        //         resolve()
        //     }, 1000)
        // })
        await addUser.mutate(values)
        setTimeout(() => {
            alert(JSON.stringify('You got signed in', null, 2))
        }, 1000)

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Box height='100vh' display='flex' justifyContent='center' alignItems='center'>
                <FormControl isInvalid={errors.name} display='flex' flexDirection='column' justifyContent='center' width='20rem' p='5' border='1px' gap='5' rounded='lg'>
                    <Flex direction='column'>
                        <Text cursor='pointer' color='facebook.700' display='flex' alignItems='center' gap='2' fontWeight='bold' fontSize='3xl'><GoSignIn size={25} />{t("common:sign-massge")}</Text>
                        <Box color='red.500'><Link href="/"><a>{t("common:sign-warn")}</a></Link></Box>
                    </Flex>
                    <Flex direction='column' gap='2'>
                        <Flex direction='column'>
                            <FormLabel color='facebook.700' htmlFor='email'>{t("common:name")}</FormLabel>
                            <Input
                                type='text'
                                id='name'
                                placeholder={t("common:name")}
                                {...register('name', {
                                    required: t("common:required"),
                                    minLength: { value: 4, message: t("common:minLength") },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </Flex>
                        <Flex direction='column'>
                            <FormLabel color='facebook.700' htmlFor='email'>{t("common:email")}</FormLabel>
                            <Input
                                type='email'
                                id='name'
                                placeholder={t("common:email")}
                                {...register('email', {
                                    required: t("common:required"),
                                    minLength: { value: 4, message: t("common:minLength") },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </Flex>
                        <Flex direction='column'>
                            <FormLabel color='facebook.700' htmlFor='name'>{t("common:password")}</FormLabel>
                            <Input
                                id='password'
                                type='password'
                                placeholder={t("common:password")}
                                {...register('password', {
                                    required: t("common:required"),
                                    minLength: { value: 4, message: t("common:minLength") },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </Flex>
                    </Flex>
                    <Flex direction='column'>
                        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                            {t("common:submit")}
                        </Button>
                        <Button mt={4} colorScheme='teal' variant='outline' onClick={toggleColorMode}>
                            {t("common:ColorMode")}
                        </Button>
                    </Flex>
                </FormControl>
            </Box>
        </form >
    )
}
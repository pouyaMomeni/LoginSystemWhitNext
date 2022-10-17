import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Cookies from 'js-cookie'
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
import { AiOutlineLogin } from 'react-icons/ai'
import { useTranslation } from 'next-i18next';
import { useLogin } from '../../hook';
export default function Login() {
    const logUser = useLogin();
    const router = useRouter()
    const { t } = useTranslation();
    const { toggleColorMode } = useColorMode()
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    async function onSubmit(values) {
        await logUser.mutate(values)
        Cookies.set('user', true)
        router.push('main')
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Box height='100vh' display='flex' justifyContent='center' alignItems='center'>
                    <FormControl isInvalid={errors.name} display='flex' flexDirection='column' justifyContent='center' width='20rem' p='5' border='1px' gap='5' rounded='xl'>

                        <Flex direction='column'>
                            <Text display='flex' color='facebook.700' alignItems='center' gap='2' fontWeight='bold' fontSize='3xl'><AiOutlineLogin size={25} />{t("common:login-massge")}</Text>
                            <Box color='red.500'> <Link href="/signUp"><a>{t("common:login-warn")}</a></Link></Box>
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
                                    minLength: { value: 4, message: t("common:required") },
                                })}
                            />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
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
        </>
    )
}
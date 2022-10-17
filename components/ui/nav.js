import { Button, Flex, Text, useColorMode } from '@chakra-ui/react'
import {
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux'
import { exite } from '../../store/reducers/users';
import { useRouter } from 'next/router';

const Nav = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { toggleColorMode } = useColorMode()
    const { t } = useTranslation();
    const exiteFunc = () => {
        dispatch(exite())
        router.push('/')
    }
    return (
        <Flex height='3rem' alignItems='center' bgColor='facebook.400' justifyContent='space-around' >
            <Text fontWeight='bold' fontSize='2xl' cursor='pointer'>{t("common:logo")}</Text>
            <UnorderedList display='flex' gap='8' listStyleType='none'   >
                <ListItem textDecor='none'  ><Button variant='outline' onClick={toggleColorMode}  >{t("common:ColorMode")}</Button></ListItem>
                <ListItem textDecor='none'  ><Button variant='outline' onClick={() => exiteFunc()} >{t("common:exite")}</Button></ListItem>
            </UnorderedList>
        </Flex>
    )
}

export default Nav
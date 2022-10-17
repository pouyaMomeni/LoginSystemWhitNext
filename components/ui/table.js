import { useAllProducts } from "../../hook"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next';





const TableList = () => {
    const { data } = useAllProducts()
    const { t } = useTranslation();
    return (
        <Flex justifyContent='center' alignContent='center' my='4rem'>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>{t('info-list')}</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>{t('id-list')}</Th>
                            <Th>{t('name-list')}</Th>
                            <Th >{t('userName-list')}</Th>
                            <Th >{t('email-list')}</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.map((value, index) => {
                            return (
                                <Tr key={index}>
                                    <Td scope="row">{index + 1}</Td>
                                    <Td display='flex' alignItems='center' > {value.name}</Td>
                                    <Td>{value.username} $</Td>
                                    <Td >{value.email}</Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    )
}

export default TableList
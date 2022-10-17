import { Box } from "@chakra-ui/react"
import Sign from "../../components/forms/signUp"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    }
}
const signUp = () => {
    return (
        <Box>
            <Sign />
        </Box>
    )
}

export default signUp
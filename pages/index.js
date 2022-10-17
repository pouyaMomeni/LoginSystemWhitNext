import Login from '../components/forms/login'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    }
}

const index = () => {
    return (
        <>

            <Login />
        </>
    )
}

export default index
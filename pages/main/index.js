import Nav from "../../components/ui/nav"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import TableList from "../../components/ui/table";
import Footer from "../../components/ui/footer";
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    }
}
const Main = () => {

    return (
        <>
            <Nav />
            <TableList />
            <Footer />
        </>

    )
}

export default Main
import Banner from 'components/Banner'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <main>
            <Banner />
            <Outlet/>
        </main>
    )
}

export default Layout;


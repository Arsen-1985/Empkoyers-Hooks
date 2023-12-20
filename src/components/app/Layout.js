import { Link, Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <>
            <header>
                <Link to="/">Home</Link>
                <Link to="/news">News</Link>
            </header>
            <Outlet />
        </>
    );
};

export { Layout };

import './AppInfo.css';

const AppInfo = ({ increased, employers }) => {
    return (
        <div className="appInfo">
            <h1>Employee accounting in company N</h1>
            <h2>Total number of employees: {employers}</h2>
            <h2>Will receive an award: {increased}</h2>
        </div>
    );
};

export default AppInfo;

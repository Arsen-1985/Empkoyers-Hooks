import './appInfo.css';

const AppInfo = ({ increased, employers }) => {
    return (
        <div className="appInfo">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employers}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    );
};

export default AppInfo;

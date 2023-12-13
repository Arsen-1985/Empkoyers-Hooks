import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppInfo from '../appInfo/AppInfo';
import SearchPanel from '../searchPanel/SearchPanel';
import AppFilter from '../appFilter/AppFilter';
import EmployersList from '../employersList/EmployersList';
import EmployersAddForm from '../employersAddForm/EmployersAddForm';
import './App.css';

const App = () => {
    const saveData = (data) => {
        localStorage.setItem('localStorage', JSON.stringify(data));
    };

    useEffect(() => {
        if (localStorage.getItem('localStorage')) {
            setData(JSON.parse(localStorage.getItem('localStorage')));
        }
    }, []);

    const generateId = () => {
        return uuidv4();
    };

    const [data, setData] = useState([
        {
            name: 'Arsen Muradyan',
            salary: 800,
            increase: false,
            rise: true,
            id: generateId(),
        },
        {
            name: 'Gohar Taroyan',
            salary: 2000,
            increase: true,
            rise: false,
            id: generateId(),
        },
        {
            name: 'Ashot Muradyan',
            salary: 700,
            increase: false,
            rise: false,
            id: generateId(),
        },
        {
            name: 'Izabella Muradyan',
            salary: 4000,
            increase: false,
            rise: false,
            id: generateId(),
        },
    ]);

    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const deleteItem = (id) => {
        setData(data.filter((item) => item.id !== id));
        saveData(data.filter((item) => item.id !== id));
    };

    const addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: generateId(),
        };
        saveData([...data, newItem]);

        setData((data) => {
            return [...data, newItem];
        });
    };

    const onToggleProp = (id, prop) => {
        setData((data) =>
            data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            }),
        );
    };
    const searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.indexOf(term) > -1;
        });
    };

    const onUpdateSearch = (term) => {
        setTerm(term);
    };

    const filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter((item) => item.rise);
            case 'moreThen1000':
                return items.filter((item) => item.salary > 1000);
            default:
                return items;
        }
    };
    const onFilterSelect = (filter) => {
        setFilter(filter);
    };
    const employers = data.length;

    const increased = data.filter((item) => item.increase).length;
    const visibleData = filterPost(searchEmp(data, term), filter);

    return (
        <div className="app">
            <AppInfo employers={employers} increased={increased} />

            <div className="searchPanel">
                <SearchPanel onUpdateSearch={onUpdateSearch} />
                <AppFilter filter={filter} onFilterSelect={onFilterSelect} />
            </div>

            <EmployersList
                data={visibleData}
                onDelete={deleteItem}
                onToggleProp={onToggleProp}
            />
            <EmployersAddForm onAdd={addItem} />
        </div>
    );
};

export default App;

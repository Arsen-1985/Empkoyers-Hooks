import { useState } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

const App = () => {
        const [data, setData] = useState([
            {name: 'Arsen Muradyan', salary: 800, increase: false, rise: true, id: 1},
            {name: 'Gohar Taroyan', salary: 2000, increase: true, rise: false, id: 2},
            {name: 'Ashot Muradyan', salary: 700, increase: false, rise: false, id: 3},
            {name: 'Izabella Muradyan', salary: 4000, increase: false, rise: false, id: 4}
        ]);
        const [term, setTerm] = useState('');
        const [filter, setFilter] = useState('all');
       // let maxId=data[3].id++;
       // const maxId = () => ({
        //    id:data.id++          
        //})//????????????????????  let todoCounter = 1;
  
    const deleteItem = (id) => {
        setData(data.filter(item => item.id !== id));
    }
    const addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id:data[3].id++ // id:data[3].id++ ????????????????
        };
        setData((data) => {  
            return [...data ,newItem];          
        })
    }
    
    const onToggleProp = (id, prop) => {
        setData((data) => data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;  
            })
        )
    }
    const searchEmp = (items, term) => {
        if (term.length === 0) {
            return items; 
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1; 
        })
    }

    const onUpdateSearch = (term) => {
        setTerm(term); // 2
    }

    const filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items 
        }
    }
    const onFilterSelect = (filter) => {
        setFilter(filter);  // 3
    }
    const employers = data.length;
/*
        try
        {
        const aaa = data.filter(item => item.increase).length;
        }
        catch(e)
        {
         console.log(data);
        }
    */
        const increased = data.filter(item => item.increase).length;
        const visibleData = filterPost(searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo employers={employers} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={onFilterSelect}/>
                </div>
                
                <EmployersList 
                    data={visibleData}
                    onDelete={deleteItem}
                    onToggleProp={onToggleProp}/>
                <EmployersAddForm onAdd={addItem}/>
            </div>
        );
    }

export default App;
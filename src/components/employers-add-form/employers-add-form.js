
import { useState } from 'react';

import './employers-add-form.css';

const EmployersAddForm = (props) => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');

    const onValueChange = (e) => {
        setName(e.target.value)
    }

    const onSalaryChange = (e) => {
        setSalary(e.target.value)
      }

    const onSubmit = (e) => {

        e.preventDefault();

        if (name.length < 3 || !salary) return;
        props.onAdd(name, salary);

    }
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name} 
                        onChange={onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Зарплата в $?"
                        name="salary"
                        value={salary} 
                        onChange={onSalaryChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
}

export default EmployersAddForm;
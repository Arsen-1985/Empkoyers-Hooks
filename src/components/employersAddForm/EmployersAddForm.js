import { useState } from 'react';

import './employersAddForm.css';

const EmployersAddForm = (props) => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');

    const onValueChange = (e) => {
        setName(e.target.value);
    };

    const onSalaryChange = (e) => {
        setSalary(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (name.length < 3 || !salary) return;
        props.onAdd(name, salary);
    };
    return (
        <div className="appAddForm">
            <h3>Add a new employee</h3>
            <form className="addForm d-flex" onSubmit={onSubmit}>
                <input
                    type="text"
                    className="form-control new-post-label"
                    placeholder="What's his name?"
                    name="name"
                    value={name}
                    onChange={onValueChange}
                />
                <input
                    type="number"
                    className="form-control new-post-label"
                    placeholder="Salary in $?"
                    name="salary"
                    value={salary} // gorc ka
                    onChange={onSalaryChange}
                />

                <button type="submit" className="btn btn-outline-light">
                    Add
                </button>
            </form>
        </div>
    );
};

export default EmployersAddForm;

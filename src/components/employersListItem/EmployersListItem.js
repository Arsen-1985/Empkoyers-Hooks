import React from 'react';
import './employersListItem.css';

const EmployersListItem = (props) => {
    const { name, salary, onDelete, onToggleProp, increase, rise } = props;

    let classNames = 'd-flex justify-content-between';
    if (increase) {
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like';
    }

    return (
        <tr className={classNames}>
            <td
                className="list-group-item-label"
                onClick={onToggleProp}
                data-toggle="rise"
            >
                {name}
            </td>
            <td>
                <input
                    type="text"
                    className="list-group-item-input"
                    defaultValue={salary + '$'}
                />
            </td>
            <td className="d-flex align-items-center">
                <button
                    type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle="increase"
                >
                    <i className="fas fa-cookie"></i>
                </button>
                <button
                    type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}
                >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </td>
        </tr>
    );
};

export default EmployersListItem;

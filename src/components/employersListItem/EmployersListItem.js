import React from 'react';
import './employersListItem.css';
import './Style.css';

const EmployersListItem = (props) => {
    const { name, salary, onDelete, onToggleProp, increase, rise } = props;

    let classNames = 'your-custom-class-name';
    if (increase) {
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like';
    }

    return (
        <tr className={classNames}>
            <td
                className="list-group-item-label style3"
                onClick={onToggleProp}
                data-toggle="rise"
            >
                {name}
            </td>
            <td className="style1">
                <input
                    type="text"
                    className="list-group-item-input"
                    defaultValue={salary + '$'}
                />
            </td>
            <td className="style2">
                <button
                    type="button"
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp}
                    data-toggle="increase"
                >
                    <i className="fas fa-cookie"></i>
                </button>
                <button
                    type="button"
                    className="btn-trash btn-sm"
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

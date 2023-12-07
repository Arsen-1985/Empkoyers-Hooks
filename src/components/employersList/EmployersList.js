import React from 'react';
import EmployersListItem from '../employersListItem/EmployersListItem';
import './employersList.css';

const EmployersList = ({ data, onDelete, onToggleProp }) => {
    const elements = data.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <EmployersListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) =>
                    onToggleProp(
                        id,
                        e.currentTarget.getAttribute('data-toggle'),
                    )
                }
            />
        );
    });

    return (
        <table className="appList table">
            <tbody>{elements}</tbody>
        </table>
    );
};

export default EmployersList;

import React, { useState } from 'react';
import EmployersListItem from '../employersListItem/EmployersListItem';
import './employersList.css';

const EmployersList = ({ data, onDelete, onToggleProp }) => {
    const [confirmDelete, setConfirmDelete] = useState(null);

    const handleDelete = (id) => {
        setConfirmDelete(id);
    };

    const confirmDeleteAction = (confirmed) => {
        if (confirmed) {
            onDelete(confirmDelete);
        }
        setConfirmDelete(null);
    };

    const elements = data.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <EmployersListItem
                key={id}
                {...itemProps}
                onDelete={() => handleDelete(id)}
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
        <div>
            <table className="appList table">
                <tbody>{elements}</tbody>
            </table>
            {confirmDelete !== null && (
                <div className="confirm-delete">
                    <p>Are you sure you want to delete the item?</p>
                    <button onClick={() => confirmDeleteAction(true)}>
                        Yes
                    </button>
                    <button onClick={() => confirmDeleteAction(false)}>
                        No
                    </button>
                </div>
            )}
        </div>
    );
};

export default EmployersList;

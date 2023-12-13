import { useState } from 'react';
import './SearchPanel.css';

const SearchPanel = (props) => {
    const [term, setTerm] = useState('');

    const onUpdateSearch = (e) => {
        const term = e.target.value;
        setTerm(term);
        props.onUpdateSearch(term);
    };

    return (
        <input
            type="text"
            className="form-control search-input"
            placeholder="Find an employee"
            value={term}
            onChange={onUpdateSearch}
        />
    );
};

export default SearchPanel;

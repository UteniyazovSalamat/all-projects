import React, { useState } from 'react';

const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
    const [search, setSearch] = useState(postQuery);
    const [checked, setChecked] = useState(latest);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const query = form.search.value;
        const isLatest = form.latest.checked;

        const params = {};
        if (query.length) params.post = query;
        if (isLatest) params.latest = true;
        setSearchParams(params);
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit} className="blogFilter__form">
            <input type="search" name="search" className="search__input" value={search} onChange={(e) => setSearch(e.target.value)} />
            <label className="blogFilter__label">
                <input type="checkbox" name="latest" value={checked} onChange={(e) => setChecked(e.target.value)} /> New only
            </label>
            <input type="submit" value="Search" className="submit__input" />
        </form>
    );
};

export default BlogFilter;

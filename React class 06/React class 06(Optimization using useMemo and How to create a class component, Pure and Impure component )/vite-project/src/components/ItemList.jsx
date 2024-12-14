import React, { useMemo, useState } from 'react';

function ItemList({ items = [] }) { // Default value for items
  const [filterText, setFilterText] = useState('');
  const [sortKey, setSortKey] = useState('name');

  const filteredAndSortedItems = useMemo(() => {
    console.log('Filtering and sorting items...');
    return items
      .filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()))
      .sort((a, b) => {
        if (sortKey === 'date') {
          return new Date(a.date) - new Date(b.date);
        }
        return a[sortKey].localeCompare(b[sortKey]);
      });
  }, [items, filterText, sortKey]);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter items"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
        <option value="name">Name</option>
        <option value="date">Date</option>
      </select>
      <ul>
        {filteredAndSortedItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;

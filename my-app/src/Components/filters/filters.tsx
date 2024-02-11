import React from 'react';

interface FiltersProps {
  array: string[];
  category: string;
  selectedFilter: string | null;
  onFilterChange: (filter: string) => void;
  filterCounts: { [key: string]: number }; 
}

const Filters: React.FC<FiltersProps> = ({ array, selectedFilter, onFilterChange, filterCounts }) => {
  const handleFilterClick = (filter: string) => {
    onFilterChange(filter === selectedFilter ? '' : filter);
  };

  return (
    <>
      {array.map((el: string) => (
        <p
          key={el}
          className={`d-flex justify-content-between filter-p filter-button ${
            el.toLowerCase() === selectedFilter?.toLowerCase() ? 'bold' : ''
          }`}
          onClick={() => handleFilterClick(el)}
        >
          <span className="filterSpan">{el}</span>
          <span
            className={`number ${
              el.toLowerCase() === selectedFilter?.toLowerCase() ? 'bg-orange' : ''
            }`}
          >
            {filterCounts[el]}
          </span>
        </p>
      ))}
    </>
  );
};

export default Filters;

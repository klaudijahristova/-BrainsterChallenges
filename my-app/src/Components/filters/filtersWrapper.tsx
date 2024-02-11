import React, { useState } from 'react';
import Filters from './filters'; 

interface FiltersWrapperProps {
  onFilterChange: (filter: string | null) => void;
  filterCounts: { [key: string]: number }; 
}

const FiltersWrapper: React.FC<FiltersWrapperProps> = ({ onFilterChange, filterCounts }) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>('Show all');

  const handleFilterChange = (filter: string) => {
    setSelectedFilter((prev) => (prev === filter ? null : filter));
    onFilterChange(filter === selectedFilter ? '' : filter);
  };

  const filters = [
    { category: 'Show all', options: ['Show all'] },
    { category: 'Gender', options: ['Male', 'Female'] },
    {
      category: 'Brand',
      options: [
        'LE GRAND BIKES',
        'KROSS',
        'EXPLORER',
        'VISITOR',
        'PONY',
        'FORCE',
        'E-BIKES',
        'IDEAL',
      ],
    },
  ];

  return (
    <div className="filter-wrapper h-100">
      {filters.map((filterGroup) => (
        <div key={filterGroup.category}>
          <h4>{filterGroup.category}:</h4>
          <Filters
            array={filterGroup.options}
            category={filterGroup.category}
            selectedFilter={selectedFilter}
            onFilterChange={handleFilterChange}
            filterCounts={filterCounts} 
          />
        </div>
      ))}
    </div>
  );
};

export default FiltersWrapper;

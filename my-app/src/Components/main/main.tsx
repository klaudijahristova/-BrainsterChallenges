import React, { useState, useEffect } from "react";
import FiltersWrapper from "../filters/filtersWrapper";
import Card from "../Card/card";

interface Product {
  name: string;
  price: number;
  image: string;
  gender: string;
  brand: string;
}

const Main: React.FC = () => {
  const [originalData, setOriginalData] = useState<Product[]>([]);
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [filterCounts, setFilterCounts] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    fetch("https://challenges.brainster.tech/ajax_data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setOriginalData(data.products);
        setFilteredData(data.products);

        const initialFilterCounts: { [key: string]: number } = {};

        const maleFilterCount = data.products.filter(
          (product: Product) => product.gender === "MALE"
        ).length;
        initialFilterCounts["Male"] = maleFilterCount;

        const femaleFilterCount = data.products.filter(
          (product: Product) => product.gender === "FEMALE"
        ).length;
        initialFilterCounts["Female"] = femaleFilterCount;

        const brandsToCount: string[] = [
          "LE GRAND BIKES",
          "KROSS",
          "EXPLORER",
          "VISITOR",
          "PONY",
          "FORCE",
          "E-BIKES",
          "IDEAL",
        ];
        brandsToCount.forEach((brand) => {
          const brandFilterCount = data.products.filter(
            (product: Product) => product.brand === brand
          ).length;
          initialFilterCounts[brand] = brandFilterCount;
        });
        const showAllFilterCount = data.products.length;
        initialFilterCounts["Show all"] = showAllFilterCount;
        setFilterCounts(initialFilterCounts);
      });
  }, []);

  const handleFilterChange = (filter: string | null) => {
    setFilteredData((prevData) => filterData(filter, originalData));
  };

  const filterData = (filter: string | null, prevData: Product[]) => {
    const filtered = originalData.filter((product: Product) => {
      if (!filter) {
        return true;
      }

      switch (filter.toLowerCase()) {
        case "male":
        case "female":
          return (
            product.gender &&
            product.gender.toLowerCase() === filter.toLowerCase()
          );
        case "show all":
          return true;
        default:
          return product.brand === filter;
      }
    });
    return filtered;
  };

  return (
    <div className="container-fluid p-0 main d-flex w-100 h-100 mt-5 w-100">
      <FiltersWrapper
        onFilterChange={handleFilterChange}
        filterCounts={filterCounts}
      />
      <div className="cards-wrapper row justify-content-end h-100">
        <div className="col-12">
          <div className="row justify-content-start rowForCards">
            {filteredData.map((product, index) => (
              <Card
                key={index}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

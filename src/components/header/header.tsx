import React from 'react';

interface HeaderProps {
  filterOptions: string[];
  activeOption: TFilterOptions;
  setActive: React.Dispatch<React.SetStateAction<TFilterOptions>>;
}
const Header: React.FC<HeaderProps> = ({
  activeOption,
  filterOptions,
  setActive,
}) => {
  return (
    <header className="header d-flex justify-content-between">
      <h3>Countries</h3>
      <ul className="d-flex gap-4 align-items-center">
        {filterOptions.map((option: string, index: number) => (
          <li
            key={index}
            className={`li ${activeOption === option && 'li_active'}`}
            //@ts-ignore
            onClick={() => setActive(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;

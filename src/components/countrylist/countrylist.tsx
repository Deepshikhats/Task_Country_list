import { useAppSelector } from '@/hooks/index';
import React, { useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';

const Countrylist: React.FC<{
  loadMore: boolean;
  activeOption: TFilterOptions;
}> = ({ loadMore, activeOption }) => {
  const { countryList, asiaList, europeList } = useAppSelector(
    (state) => state.countryListSlice
  );
  const iterator = () => {
    if (activeOption === 'All') return countryList;
    else if (activeOption === 'Asia') return asiaList;
    else return europeList;
  };

  return (
    <Row className="country_container g-4">
      {iterator()
        .filter((item, _index) => (loadMore ? item : _index < 10))
        .map((country: TCountryList, index: number) => (
          <Col
            key={index}
            xs={12}
            md={6}
            className="country_Box d-flex align-items-center"
          >
            <img src={country.flag} alt={country.name} />
            <div className="country_Box_details">
              <h5>{country.name}</h5>
              <span>{country.region}</span>
            </div>
          </Col>
        ))}
    </Row>
  );
};

export default Countrylist;

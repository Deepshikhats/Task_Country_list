import Button from '@/components/button';
import Carousal from '@/components/carousal';
import Countrylist from '@/components/countrylist';
import Header from '@/components/header';
import SocialIcons from '@/components/social';
import { useAppDispatch } from '@/hooks/index';
import { setCountryList } from '@/store/slices/countriesSlice';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import getCountries from 'service';

const Home = () => {
  const dispatch = useAppDispatch();

  /*****************************HOOKS**************************************** */
  const [activeOption, setActiveOption] = useState<TFilterOptions>('All');
  const [loadMore, setLoadMore] = useState<boolean>(false);

  useEffect(() => {
    fetchCountries();
  }, []);

  /***************************FUNCTIONS****************************************** */

  const fetchCountries = () => {
    getCountries().then((resp: TCountryList[]) =>
      dispatch(setCountryList(resp))
    );
  };

  return (
    <Container className="home">
      <Header
        filterOptions={['All', 'Asia', 'Europe']}
        activeOption={activeOption}
        setActive={setActiveOption}
      />

      <div className="d-flex flex-column flex-lg-row welcomeBanner">
        <div className="mb-auto" />
        <h1 className="text-center">Welcome</h1>
        <div className="mt-auto" />
      </div>

      <Carousal />

      <Countrylist loadMore={loadMore} activeOption={activeOption} />
      <div className="btn_wrapper">
        <Button onClick={() => setLoadMore((cv) => !cv)} className="m-auto">
          {loadMore ? 'Load Less' : 'Load More'}
        </Button>
      </div>
      <footer className="">
        <SocialIcons />
        <div className="footer_info">
          <a href="mailto:example@example.com">example@example.com</a>
          <small>Copyright © 2020 Name. All rights reserved.</small>
        </div>
      </footer>
    </Container>
  );
};

export default Home;

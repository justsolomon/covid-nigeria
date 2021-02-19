import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header/Header';
import InfoCardList from '../components/InfoCard/InfoCardList';
import InfoTable from '../components/InfoTable/InfoTable';
import { fetchCovidData } from '../redux/covidData/covidDataActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovidData());
  }, []);

  return (
    <div className='container-lg'>
      <Header />
      <InfoCardList />
      <InfoTable />
    </div>
  );
}

export default App;

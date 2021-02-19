import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Header from '../components/Header/Header';
import InfoCardList from '../components/InfoCard/InfoCardList';
import InfoTable from '../components/InfoTable/InfoTable';
import { fetchCovidData } from '../redux/covidData/covidDataActions';

function App() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.covidData);

  useEffect(() => {
    dispatch(fetchCovidData());
  }, []);

  return (
    <div className='container-lg'>
      <Header />
      {error ? (
        <ErrorMessage />
      ) : (
        <>
          <InfoCardList />
          <InfoTable />
        </>
      )}
    </div>
  );
}

export default App;

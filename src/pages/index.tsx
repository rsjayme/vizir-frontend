import Header from '../components/Header';
import Overview from '../components/Overview';
import CalcSection from '../components/CalcSection';
import Plans from '../components/Plans';
import Footer from '../components/Footer';
import { useRef } from 'react';

export default function Home() {
  const overviewRef = useRef(null);
  const calcSectionRef = useRef(null);

  return (
    <>
      <Header calcSectionRef={calcSectionRef} overviewRef={overviewRef} />
      <Overview overviewRef={overviewRef} />
      <CalcSection calcSectionRef={calcSectionRef} />
      <Plans />
      <Footer />
    </>
  );
}

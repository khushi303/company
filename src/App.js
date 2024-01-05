import Header from './components/Header';
import HelpSec from './components/HelpSec';
import Process from './components/Process';
import Brands from './components/Brands';
import Start from './components/Start';
import Footer from './components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { Loader } from './components/Iconimg';
import { useState, useEffect } from 'react';
import Backtotop from './assets/images/png/backtotop.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  // -----------------aos----------------//
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1700,
      }
    );
    Aos.refresh()
  });
  // --------------back-to-top---------------//
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // -----------Preloader----------------//
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3500);
  }, []);
  return (
    <div className='overflow-x-hidden'>
      {screenLoading ? (
        <Loader />
      ) : (
        <div className=' overflow-hidden bg_whitef9'>
          <Header />
          <HelpSec />
          <Process />
          <Brands />
          <Start />
          <Footer />
          <div className=''>
            <div className={backToTop ? 'back_to_top' : 'hidden'} onClick={() => top()}>
              <img src={Backtotop} alt="Backtotop" className=' w-100 mw_35' />
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
}

export default App

import React from 'react';
import logo from './logo.svg';
import Hello from './Component/Hello';
import CountButtExam from './Component/CountButtExam';
import Header from './Component/Header';
import Footer from './Component/Footer';


function App() {
  return (
    <div>
      <Header/> 
      
      <Hello name ="Ras"/>
      <CountButtExam/>
      <Footer/>
    </div>
  );
}

export default App;

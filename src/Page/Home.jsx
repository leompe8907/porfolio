import React from 'react';
import Navbar from '../Components/Navbar';
import Centro from '../Components/Centro';
import '../Static/Style/Home.scss';

export default function Home() {
  return (
    <main className="home">
      <Navbar />
      <Centro />
    </main>
  );
}
import React from 'react';
import './App.css';
import { Navbar } from './Layouts/NavandFooter/Navbar';
import { Footer } from './Layouts/HomePage/components/footer';
import { HomePage } from './Layouts/HomePage/HomePage';
import { SearchBooksPage } from './Layouts/SearchBooksPage/SearchBookPage';


export const App = () => {
  return (
    <div>
      <Navbar />
      {/* <HomePage /> */}
      <SearchBooksPage />
      <Footer />

    </div>

  );
}


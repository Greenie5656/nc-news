import { useState } from 'react'
import { Routes, Route } from "react-router-dom"


import './App.css'
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import Topics from "./components/Topics"
import Footer from "./components/Footer"


function App() {


  return (
    <div className="app">
    <Header />
    <Topics />
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/topics/:topic" element={<ArticleList />} />
    </Routes>
    <Footer />
  </div>

  )
}

export default App

import { useState } from 'react'
import { Routes, Route } from "react-router-dom"


import './App.css'
import Header from './components/Header'
import ArticleList from './components/ArticleList'
import Topics from "./components/Topics"
import Footer from "./components/Footer"
import SingleArticle from './components/SingleArticle'


function App() {


  return (
    <div className="app">
    <Header />
    <Topics />
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/topics/:topic" element={<ArticleList />} />
      <Route path="/articles/:article_id" element={<SingleArticle />} />
    </Routes>
    <Footer />
  </div>

  )
}

export default App

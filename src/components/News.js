import React, { Component } from 'react';
import NewsIteam from './NewsIteam';



export class News extends Component {
  
  constructor(){
    super();
    this.state={
      articles:[],
      loading: true,
      page:1
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8bc46913f8e44cafbb2ce0ebd32845ad&page=1&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles: parseData.articles, totalResults: parseData.totalResults})
  }
   handlePrevclick = async ()=>{
     console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8bc46913f8e44cafbb2ce0ebd32845ad&page=${this.state.page - 1};&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
   this.setState({
     page: this.state.page-1
   })
  }
   handleNextclick = async ()=>{
     console.log("next");
     if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

     }
     else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8bc46913f8e44cafbb2ce0ebd32845ad&page=${this.state.page + 1};&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
   this.setState({
     page: this.state.page+1
   })}
  }
  render() {
    return (
      <div className="container my-3">
          <h1>NewsMonkey - Top Headlines</h1>
          
          <div className="row">
          {this.state.articles.map((element)=>{
           return <div key={element.url} className="col-md-4">
            <NewsIteam  title ={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
           
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevclick}>&larr; Previous</button>
          <button  type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
          </div>
      </div>
    )
  }
}

export default News
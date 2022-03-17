import React, { Component } from 'react'

export class NewsIteam extends Component {
    
  render() {
     let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
         <div className="card" style={{width: "18rem"}}>
                <img src={!imageUrl?"https://english.cdn.zeenews.com/sites/default/files/2022/03/17/1023443-lgearbuds.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read more</a>
                </div>
         </div>
      </div>
    )
  }
}

export default NewsIteam
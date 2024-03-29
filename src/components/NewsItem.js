import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

    return (
      <div>
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>{source} </span>
          <img src={!imageUrl ? "https://www.geo.tv/assets/uploads/updates/2023-12-29/l_525013_072808_updates.jpg" : imageUrl}  className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}....</p>
            <p className="card-text"> <small className="text-success">By {author ? author: "Unknown"} on {new Date(date).toGMTString()} </small></p>
            <a className="btn btn-sm btn-primary" href={newsUrl} target="_blank" rel="noreferrer" >Read More </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

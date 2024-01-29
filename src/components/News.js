import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country:'in',
    pageSize: 6 ,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `News Quasar - ${this.capitalizeFirstLetterOfWords(this.props.category)}`;
  }

  //Function to Capitalize First Letter of Word Passed
  capitalizeFirstLetterOfWords = (string) => {
    return string.replace(/\b\w/g, (match) => match.toUpperCase());
  };

  //Function to fetch the data from NewsAPI
  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b8f4fb3bb8842a48bde8b12e49aeff6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  //Function to Mount the Component
  async componentDidMount() {
    this.updateNews();
  }

  //Funtion to handle Previous Click Button
  handlePreviousClick = async () => {
    this.setState({ page: this.state.page - 1});
    this.updateNews();
  };

  //Funtion to handle Next Click Button
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1});
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">News Quasar - Top {this.capitalizeFirstLetterOfWords(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 60) : ""}
                  description={element.description ? element.description.slice(0, 75) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handlePreviousClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;

import React from "react";
import { fetchMovies } from "./../actions";
import { connect } from "react-redux";

class App extends React.Component {
  state = { len: 10, page: 1, frompage: 1 };
  componentDidMount() {
    this.props.fetchMovies(this.state.len, this.state.page);
    //  console.log(this.props.posts)
  }

  clickHnadler = () => {
    const len2 = this.state.len + 10;
    // console.log(len2);
    if (len2 === 30) {
      // console.log("in if");
      this.setState({ len: 10, page: this.state.page + 1 }, () => {
        //console.log(this.state.page, "XYZ Uper");
        this.props.fetchMovies(this.state.len, this.state.page);
      });
    } else {
      this.setState({ len: len2 }, () => {
        /// console.log(this.state.page, "XYZ");
        this.props.fetchMovies(this.state.len, this.state.page);
      });
    }

    // this.setState(
    //   { len: len2 },

    //   () => {
    //     this.props.fetchMovies(len2, this.state.page);
    //   }
    // );
  };

  rederList() {
    const append = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
    return this.props.posts.map((m, i) => {
      return (
        <div>
          <div className="item" key={i}>
            <div className="content">
              <div className="description">
                <h2>Title: {m.title}</h2>
                <p>Overview: {m.overview}</p>
                <img src={append + m.poster_path} />
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.rederList()}
        <button onClick={this.clickHnadler}>
          Click me to get next 10 from page {this.state.frompage}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.movies };
};
export default connect(
  mapStateToProps,
  { fetchMovies }
)(App);

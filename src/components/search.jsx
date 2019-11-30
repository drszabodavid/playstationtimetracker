import React, { Component } from "react";
import {saveGame} from '../services/fakeGameService'
import "./css/search.css";
import "./css/searchbar.css";

class Search extends Component {
  state = { searchedGame: null, searchData: [] };

  onChange = e => {
    e.preventDefault();
    e.stopPropagation();
    const name = e.target.value;
    this.setState({ searchedGame: name });
  };

  onSubmit = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      let hltb = require("howlongtobeat");
      let hltbService = new hltb.HowLongToBeatService();
      hltbService.search(this.state.searchedGame, ).then(result => {
        console.log(result);
        this.setState({ searchData: result });
      })

    }
  };

  componentDidMount() {
    let hltb = require("howlongtobeat");
    let hltbService = new hltb.HowLongToBeatService();
    hltbService.search("").then(result => {
      console.log(result);
      this.setState({ searchData: result });
    });
  }

  handleAddition = game => {
    saveGame(game)
  };

  renderList = game => {
    return (
      <div>
        <div className="clear" />
        <div className="clear" />
        <li
          onClick={() => {
            if (window.confirm("Add this game to your collection?"))
              this.handleAddition(game);
          }}
          className="back_darkish back_darkishown"
          style={{
            margin: "10px",
            marginTop: "10px",
            marginRight: "30px",
            width: "450px",
            height: "180px",
            backgroundImage: `linear-gradient(rgb(29, 50, 84), rgba(31, 31, 31, 0.9)), url(${game.imageUrl})`
          }}
        >
          {" "}
          <div className="search_list_image">
            <a aria-label={game.name} title={game.name}>
              <img alt="Box Art" src={game.imageUrl} />
            </a>
          </div>{" "}
          <div className="search_list_details">
            {" "}
            <h3 className="shadow_text text_white">
              <a className="text_white" title={game.name}>
                {game.name}
              </a>
            </h3>{" "}
            <div className="search_list_details_block">
              {" "}
              <div>
                <div className="search_list_tidbit text_white shadow_text">
                  Main Story
                </div>
                <div className={this.getColor(game.gameplayMain)}>
                  {game.gameplayMain} Hours{" "}
                </div>
                <div className="search_list_tidbit text_white shadow_text">
                  Main + Extra
                </div>
                <div className="search_list_tidbit center time_50">
                  {game.gameplayMainExtra} Hours{" "}
                </div>
                <div className="search_list_tidbit text_white shadow_text">
                  Completionist
                </div>
                <div className="search_list_tidbit center time_40">
                  {game.gameplayCompletionist} Hours{" "}
                </div>
              </div>{" "}
            </div>
          </div>{" "}
        </li>{" "}
        <div className="clear" />
      </div>
    );
  };

  getColor = time => {
    return "search_list_tidbit center time_" + time.toString()[0] + "0";
  };

  render() {
    return (
      <div>
        <div style={{ paddingBottom: "10px" }}>
          <form id="content" onKeyDown={this.onSubmit}>
            <input
              className="search form-control"
              onChange={this.onChange}
              type="search"
              placeholder="search your new game"
              name="searchedGame"
              value={this.state.searchedGame}
            />{" "}
          </form>
        </div>
        <div id="global_search_content" className="search_list">
          <div className="flex-container" style={{ width: "fit-content" }}>
            {this.state.searchData.map(game => this.renderList(game))}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;

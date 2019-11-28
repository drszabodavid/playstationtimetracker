import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import GamesTable from "./gamesTable";
import _ from "lodash";
import "./css/games.css";
import { getGames } from "../services/fakeGameService";

class Games extends Component {
  state = {
    games: [],
    types: ["Completed", "Starred", "All Games"],
    pageSize: 4,
    currentPage: 1,
    selectedType: "",
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    this.setState({
      games: getGames()
    });
  }

  handleDelete = game => {
    const games = this.state.games.filter(g => g.id !== game.id);
    this.setState({ games: games });
  };

  handleComplete = game => {
    const games = [...this.state.games];
    const index = games.indexOf(game);
    games[index] = { ...games[index] };
    games[index].completed = !games[index].completed;
    games[index].liked = !games[index].liked;
    this.setState({ games });
  };

  handleLike = game => {
    const games = [...this.state.games];
    const index = games.indexOf(game);
    games[index] = { ...games[index] };
    games[index].liked = !games[index].liked;
    this.setState({ games });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = type => {
    this.setState({ selectedType: type, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  filterGames = selectedType => {
    if (selectedType === "Completed") {
      return this.state.games.filter(game => game.completed === true);
    }
    if (selectedType === "Starred") {
      return this.state.games.filter(game => game.liked === true);
    }
    return this.state.games;
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      games: allgames,
      selectedType,
      sortColumn
    } = this.state;

    //filter data
    const filtered = this.filterGames(selectedType);

    // sort data
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    // paginate data
    const games = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: games };
  };

  handleRecord = () => {
    this.setState({
      games: getGames()
    });
  };

  render() {
    const { length: count } = this.state.games;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0)
      return (
        <p className="under-header-text">There are no games in the database</p>
      );

    const { totalCount, data: games } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            onItemSelect={this.handleGenreSelect}
            items={this.state.types}
            selectedItem={this.state.selectedType}
          />
        </div>
        <div className="col">
          <p className="under-header-text">
            Showing {totalCount} games in the database.
          </p>

          <GamesTable
            handleRecord={this.handleRecord}
            sortColumn={sortColumn}
            games={games}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            onComplete={this.handleComplete}
          />

          <Pagination
            onPageChange={this.handlePageChange}
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Games;

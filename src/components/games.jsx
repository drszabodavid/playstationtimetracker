import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import GamesTable from "./gamesTable";
import _ from "lodash";
import "./css/games.css";

import {
  deleteGame,
  getGames,
  completeGame,
  starGame,
  updatePlayTime
} from "../services/GameService";

class Games extends Component {
  state = {
    games: [],
    types: ["Completed", "Starred", "All Games"],
    pageSize: 4,
    currentPage: 1,
    selectedType: "",
    sortColumn: { path: "title", order: "asc" },
    currentUser: localStorage.getItem("userId")
  };

  async componentDidMount() {
    const response = await getGames(this.state.currentUser);
    this.setState({ games: response.data });
  }

  reloadPageData = async () => {
    const response = await getGames(this.state.currentUser);
    this.setState({ games: response.data });
    this.forceUpdate();
  };

  handleDelete = async game => {
    const originalGames = this.state.games;
    const games = originalGames.filter(g => g.id !== game.id);
    this.setState({ games });

    await deleteGame(game);
  };

  handleComplete = async game => {
    const games = [...this.state.games];
    const index = games.indexOf(game);
    games[index] = { ...games[index] };
    games[index].completed = !games[index].completed;
    this.setState({ games });

    await completeGame(game);
  };

  handleLike = async game => {
    const games = [...this.state.games];
    const index = games.indexOf(game);
    games[index] = { ...games[index] };
    games[index].liked = !games[index].liked;
    this.setState({ games });

    await starGame(game);

  };

  handleRecord = async (game, time) => {

    await updatePlayTime(game, time);
    this.reloadPageData();
    this.forceUpdate();
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

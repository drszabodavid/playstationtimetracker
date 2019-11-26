import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import GamesTable from "./gamesTable";
import _ from "lodash";
import "./css/games.css"
import { getGames } from "../services/fakeMovieService";

class Games extends Component {
  state = {
    games: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Games" }, ...getGenres()];
  
    this.setState({
      genres: genres,
      games: getGames()
    });
  }

  handleDelete = game => {
    const games = this.state.games.filter(g => g.id !== game.id);
    this.setState({ games: games });
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

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      games: allgames,
      selectedGenre,
      sortColumn
    } = this.state;

    //filter data
    const filtered =
      selectedGenre && selectedGenre._id
        ? allgames.filter(m => m.genre._id === selectedGenre._id)
        : allgames;

    // sort data
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    // paginate data
    const games = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: games };
  };

  render() {
    const { length: count } = this.state.games;
    const { pageSize, currentPage, sortColumn } = this.state;

    //table.table>thead>tr>th*4 => zen coding legenerálja a táblát
    if (count === 0) return <p className="under-header-text">There are no games in the database</p>;

    const { totalCount, data: games } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            onItemSelect={this.handleGenreSelect}
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p className="under-header-text">Showing {totalCount} games in the database.</p>

          <GamesTable
            sortColumn={sortColumn}
            games={games}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
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

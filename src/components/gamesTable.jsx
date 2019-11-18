import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    { path: "name", label: "Title" },
    { path: "timeSpent", label: "My time" },
    { path: "gameplayMain", label: "Main Story" },
    { path: "gameplayMainExtra", label: "Main + Extra" },
    { path: "gameplayCompletionist", label: "Completionist" },
    { path: "remainingTime", label: "Required time to finish" },
    { path: "genre.name", label: "Genre" },
    {
      key: "like",
      content: game => (
        <Like liked={game.liked} onClick={() => this.props.onLike(game)} />
      )
    },
    {
      key: "delete",
      content: game => (
        <button
          onClick={() => this.props.onDelete(game)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { games, sortColumn, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        data={games}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;

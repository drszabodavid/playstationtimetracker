import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import Timer from "./timer";
import "./css/games.css";

class MoviesTable extends Component {
  getCompletedButton = game => {
    const buttonStyle = game.completed
      ? "btn btn-disabled btn-sm disabled"
      : "btn btn-success btn-sm";

    if (!game.completed) {
      return (
        <button
          onClick={() =>{
            if (window.confirm("Mark this game as completed?"))
              this.props.onComplete(game)}}
          className={buttonStyle}
        >
          Completed
        </button>
      );
    }
    return (
      <button
        onClick={() =>{
          if (window.confirm("Do you want to reopen this game?"))
            this.props.onComplete(game)}}
        className={buttonStyle}
      >
        Reopen
      </button>
    );
  };

  columns = [
    {
      key: "record",
      content: game => <Timer handleRecord={this.props.handleRecord} game={game}>timer</Timer>
    },
    { path: "name", label: "Title" },
    { path: "timeSpent", label: "My time" },
    { path: "gameplayMain", label: "Main Story" },
    { path: "gameplayMainExtra", label: "Main + Extra" },
    { path: "gameplayCompletionist", label: "Completionist" },
    { path: "remainingTime", label: "Required time to finish" },
    {
      key: "like",
      content: game => (
        <Like
          liked={game.liked}
          completed={game.completed}
          onClick={() => this.props.onLike(game)}
        />
      )
    },
    {
      key: "completed",
      content: game => this.getCompletedButton(game)
    },
    {
      key: "delete",
      content: game => (
        <button
          onClick={() => {
            if (window.confirm("Do you want to delete this game?"))
              this.props.onDelete(game)}}
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

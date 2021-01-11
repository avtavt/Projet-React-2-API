import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Link to="/">
          <Menu.Item
            name="Home"
            active={activeItem === "Home"}
            onClick={this.handleItemClick}
          >
          Accueil
        </Menu.Item>
        </Link>

        <Link to="/TheMealDb">
          <Menu.Item
            name="TheMealDb"
            active={activeItem === "TheMealDb"}
            onClick={this.handleItemClick}
          >
          TheMealDb
        </Menu.Item>
        </Link>

        <Link to="/the-cocktail-db">
          <Menu.Item
            name="tcdb"
            active={activeItem === "the_cocktail_db"}
            onClick={this.handleItemClick}
          >
          TheCocktailDB
        </Menu.Item>
        </Link>

        <Link to="/exemple">
          <Menu.Item
            name="exemple"
            active={activeItem === "exemple"}
            onClick={this.handleItemClick}
          >
          Exemple
        </Menu.Item>
        </Link>
      </Menu>
    );
  }
}

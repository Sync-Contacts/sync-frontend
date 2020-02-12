import React, { Component } from "react";
import "./Search.scss";

export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: ''
        }
    }

    updateSearchTerm = event => {
        this.setState({ searchTerm: event.target.value });
    }

    //need to add a method for passing search to app state

    render() {
        return (
            <section className="search">
                <input 
                    type="text"
                    name="search"
                    placeholder="Search for contacts..."
                    value={this.state.searchTerm}
                    onChange={this.updateSearchTerm}
                />
                <button>Search</button>
            </section>
        )
    }
};


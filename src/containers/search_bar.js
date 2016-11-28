import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleInputChange(eventObject) {
        this.setState({ term: eventObject.target.value });
    }

    onFormSubmit(eventObject) {
        eventObject.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    className="form-control"
                    placeholder="Enter city"
                    value={this.state.term}
                    onChange={this.handleInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);
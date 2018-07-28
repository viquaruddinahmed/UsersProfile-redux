import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestavatars } from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchavatars.searchField,
    avatars: state.requestavatars.avatars,
    isPending: state.requestavatars.isPending
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestavatars: () => dispatch(requestavatars())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestavatars();
  }

  render() {
    const { avatars, searchField, onSearchChange, isPending } = this.props;
    const filteredavatars = avatars.filter(avatar => {
      return avatar.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='f1'>User Profiles</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList avatars={filteredavatars} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)

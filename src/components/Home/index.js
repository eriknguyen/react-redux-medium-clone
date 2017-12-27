import React, { Component } from 'react';
import { connect } from 'react-redux';

import Banner from './Banner';
import MainView from './MainView';

const mapStateToProps = state => ({
  appName: state.appName
});

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Banner appName={this.props.appName} />

        <div className="container page">
          <div className="row">
            <MainView />

            <div className="row-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(Home);

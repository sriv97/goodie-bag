import React from 'react';
import { fetchCandies } from '../reducers/index';
import { connect } from 'react-redux';

class CandyList extends React.Component {
  componentDidMount() {
    this.props.fetchCandies();
  }
  render() {
    const { candies } = this.props;
      return (
        <div>
          {candies.map(candy => {
            return (
              <div key={candy.id}>
                <img src={candy.imageUrl} />
                <h2>{candy.name}</h2>
              </div>
            );
          })}
        </div>
      );
    }
  }


const mapStateToProps = state => ({
  candies: state.candies,
});

const mapDispatchToProps = dispatch => ({
  fetchCandies: () => dispatch(fetchCandies()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandyList);

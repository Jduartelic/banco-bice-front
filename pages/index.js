import Layout from '@components/Layout';
import HomeLanding from '@components/Home';
import { connect } from 'react-redux';
import { commoditysGet } from '@modules/commodity/commodity.state.js';

class Home extends React.Component {
  componentDidMount() {
    this.props.commoditysGet();
  }

  render() {
    const { commoditys, commoditysGetError, commoditysGetFetching, commoditysGetFetched } = this.props;
    const propsHomeLanding = { commoditys };
    const isFetching = Object.keys(commoditys).length > 0 && !commoditysGetFetching;
    return <Layout>{isFetching && <HomeLanding {...propsHomeLanding} />}</Layout>;
  }
}

const mapStateToProps = (state) => ({
  commoditys: state.commodity.get('commoditys').toJS(),
  commoditysGetError: state.commodity.get('commoditysGetError'),
  commoditysGetFetching: state.commodity.get('commoditysGetFetching'),
  commoditysGetFetched: state.commodity.get('commoditysGetFetched'),
});

const mapDispatchToProps = { commoditysGet };

export default connect(mapStateToProps, mapDispatchToProps)(Home);

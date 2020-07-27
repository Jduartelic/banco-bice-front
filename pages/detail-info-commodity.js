import React from 'react';
import Layout from '@components/Layout';
import DetailInfoCommodityLanding from '@components/DetailInfoCommodity';
import { connect } from 'react-redux';
import { detailnfoCommoditysGet } from '@modules/commodity/commodity.state.js';

class DetailInfoCommodity extends React.Component {
  static async getInitialProps({ query }) {
    return {
      keyCommodity: query.key,
    };
  }

  componentDidMount() {
    const { keyCommodity, detailnfoCommoditysGet } = this.props;
    detailnfoCommoditysGet(keyCommodity);
  }

  render() {
    const {
      detailnfoCommodity,
      detailnfoCommoditysGetError,
      detailnfoCommoditysGetFetching,
      detailnfoCommoditysGetFetched,
      keyCommodity,
      commoditys,
    } = this.props;
    const selectedCommodity = commoditys[keyCommodity];
    const propsDetailInfoCommodityLanding = { detailnfoCommodity, selectedCommodity };
    const isFetching = Object.keys(detailnfoCommodity).length > 0 && !detailnfoCommoditysGetFetching;

    return <Layout>{isFetching && <DetailInfoCommodityLanding {...propsDetailInfoCommodityLanding} />}</Layout>;
  }
}

const mapStateToProps = state => ({
  commoditys: state.commodity.get('commoditys').toJS(),
  detailnfoCommodity: state.commodity.get('detailnfoCommodity').toJS(),
  detailnfoCommoditysGetError: state.commodity.get('detailnfoCommoditysGetError'),
  detailnfoCommoditysGetFetching: state.commodity.get('detailnfoCommoditysGetFetching'),
  detailnfoCommoditysGetFetched: state.commodity.get('detailnfoCommoditysGetFetched'),
});

const mapDispatchToProps = { detailnfoCommoditysGet };

export default connect(mapStateToProps, mapDispatchToProps)(DetailInfoCommodity);

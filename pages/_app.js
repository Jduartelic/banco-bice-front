import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import initStore from '../redux';
import { PersistGate as PersistGateClient } from 'redux-persist/integration/react';
import BeatLoader from 'react-spinners/BeatLoader';

class PersistGateServer extends React.Component {
  render() {
    return this.props.children;
  }
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
  }

  renderLoading = () => {
    const isClient = typeof window !== 'undefined';

    if (isClient) {
      return '<Loading />';
    } else {
      return null;
    }
  };

  render() {
    const { Component, pageProps, store } = this.props;
    let isClient = typeof window !== 'undefined';
    let PersistGate = PersistGateServer;

    if (isClient) {
      PersistGate = PersistGateClient;
    }

    return (
      <React.Fragment>
        <Container>
          <Provider store={store}>
            <PersistGate loading={this.renderLoading()} persistor={store.__persistor}>
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
        </Container>

        <style global jsx>{`
          body {
            margin: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withRedux(initStore)(MyApp);

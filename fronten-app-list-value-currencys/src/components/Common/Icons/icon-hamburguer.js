import React from 'react';
import PropTypes from 'prop-types';

class IconHamburguer extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg
        style={{ ...this.props.style }}
        width={this.props.width}
        height={this.props.height}
        viewBox="0 0 28 28"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25 6.60039H3V5.40039H25V6.60039ZM25 14.6004H3V13.4004H25V14.6004ZM3 22.6004H25V21.4004H3V22.6004Z"
          fill={this.props.color}
        />
      </svg>
    );
  }
}

IconHamburguer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.string,
};

IconHamburguer.defaultProps = {
  width: '12',
  height: '13',
  color: '#326295',
  style: {},
};

export default IconHamburguer;

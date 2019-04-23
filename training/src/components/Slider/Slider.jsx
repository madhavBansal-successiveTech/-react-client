import React, { Component } from 'react';
import propTypes from 'prop-types';
import style from './style'
import { getNextRoundRobin, getRandomNumber } from '../../lib/utils/math'
import { DEFAULT_BANNER_IMAGE, PUBLIC_IMAGE_FOLDER } from '../../configs/constant'

export class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePath: DEFAULT_BANNER_IMAGE,
    }
  }


  componentWillMount() {
    if (this.timerId) clearInterval(this.timerId)
    if (this.currIndex) this.currIndex = -1;
  }

  componentDidMount() {
    const { banners, duration } = this.props
    if (banners && banners.length) {
      this.currIndex = -1;
      this.timerId = setInterval(() => {
        this.changeImage();
      }, duration)
    }
  }

  changeImage = () => {
    let imageIndex;
    const { random, banners } = this.props
    if (random) {
      imageIndex = getRandomNumber(banners.length);
    } else {
      this.currIndex = getNextRoundRobin(banners.length, this.currIndex);
      imageIndex = this.currIndex;
    }
    this.setState({
      imagePath: PUBLIC_IMAGE_FOLDER + banners[imageIndex],
    })
  }

  render() {
    const { altText, height } = this.props;
    const { imagePath } = this.state
    return <img style={style.imageStyle} src={imagePath} alt={altText} height={height} />
  }
}
Slider.defaultProps = {
  altText: "Default Banner",
  defaultBanner: "default.png",
  duration: 2000,
  height: 200,
  random: false,
}
Slider.propTypes = {
  altText: propTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  defaultBanner: propTypes.string,
  duration: propTypes.number,
  height: propTypes.number,
  random: propTypes.bool,
  // eslint-disable-next-line react/require-default-props
  banners: propTypes.arrayOf(propTypes.string),
}
export default Slider;

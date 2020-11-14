'use strict'

import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker, TwitterPicker} from 'react-color'

class ThemeColor extends React.Component {
  state = {
    displayColorPicker: false,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  render() {
    const styles = reactCSS({
      'default': {
        color: {
          width: '14px',
          height: '14px',
          borderRadius: '0px',
          background: this.props.color,
        },
        swatch: {
          margin:"5px 5px 0px 0px",
          padding: '2px',
          background: '#fff',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          backgroundColor:"white",
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <TwitterPicker color={ this.props.color } onChange={ (color)=>this.props.changeGroupColor(color.hex) } />
        </div> : null }

      </div>
    )
  }
}

export default ThemeColor

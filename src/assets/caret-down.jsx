import React from 'react'

export const CaretDownIcon = (props) => {
  const setStyle = () => {
    let style
    switch (props.point) {
      case 'up':
        style = {
          position: 'absolute',
          color: '#696969',
          right: '20px',
          transition: 'all 0.3s',
          transform: 'rotate(180deg)',
          height: '16px'
        }
        break

      case 'down':
        style = {
          position: 'absolute',
          right: '20px',
          color: '#696969',
          transition: 'all 0.3s',
          height: '16px'
        }
        break

      case 'up_white':
        style = {
          position: 'absolute',
          left: '10px',
          top: '-10px',
          transform: 'rotate(180deg)',
          color: '#fff',
          height: '16px'
        }
        break
    }
    return style
  }
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fas'
      data-icon='caret-down'
      className='svg-inline--fa fa-caret-down fa-w-10'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 320 512'
      height='18px'
      color={props.color}
      style={setStyle()}
    >
      <path
        fill='currentColor'
        d='M31.3 192h257.3c17.8 0 26.7 
            21.5 14.1 34.1L174.1 354.8c-7.8 
            7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 
            213.5 13.5 192 31.3 192z'
      ></path>
    </svg>
  )
}

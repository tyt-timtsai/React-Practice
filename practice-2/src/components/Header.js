const Header = ({color, hexValue, isDarkText}) => {
  return (
    <header 
        // className="square"
        style={{
            backgroundColor:color,
            color: isDarkText ? '#000' : '#FFF'
        }}
    >
        <p>{color ? color : 'Empty Value'}</p>
        <p>{hexValue ? hexValue : null}</p>
       {/* <p> Empty Value</p> */}
    </header>
  )
}

Header.defaultPrpos = {
    color: 'Empty Color Value'
}

export default Header
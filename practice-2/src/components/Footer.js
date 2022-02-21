import colorNames from 'colornames'

const Footer = ({
      color, setColor, setHexValue, isDarkText, setIsDarkText
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add Color Name:</label>
        <input 
            id='color'
            type='text'
            placeholder='Add color name'
            value={color}
            onChange={(e) => {
            setColor(e.target.value);
            setHexValue(colorNames(e.target.value));
          }}
        />
        <button
          type='button'
          onClick={() => setIsDarkText(!isDarkText)}
        >
          Toggle Text Color
        </button>
    </form>
        // <form onSubmit={(e) => e.preventDefalut()}>
          //<label>Add Color Name:</label>
          //<input
            /* autoFocus
               type='text'
               placeholder='Add color name'
               required
               value={color}
               onChange={(e) => setColor(e.target.value)}
            />
            */
        // </form>
  )
}

export default Footer
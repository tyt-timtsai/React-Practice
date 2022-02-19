const Footer = ({length}) => {

  return (
    <footer>
        {/* {}中可以寫出要描述的規則 */}
        <p>{length} List {length <= 1 ? 'Item' : 'Items'}</p>
    </footer>
  )
}

export default Footer
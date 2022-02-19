const Header = ({ title }) => {
    // const headerStyle = {
    //  backgroundColor: 'royalblue',
    // color: '#fff'
    // };
    //可以在這裡寫inline css ， 不過還是寫在另一個css file 再引進來比較好管理

    return (
    // <header style={headerStyle}>
    <header>
        <h1>{title}</h1>
    </header>
  )
}

//設定初始title，在還沒有抓到新的title值的時候有東西可以顯示
Header.defaultProps = {
  title: 'Default Title'
}

export default Header
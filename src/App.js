import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <Header title='Grocery List' />
      <Content 
        item={item}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={item.length} />

        {/* <p> { {object} {2===4} } </p>  object跟boolean 不能放，會顯示錯誤 */ }
    </div>
  );
}

export default App;

const ErrorPage = () => {
  return (
    <div className='container error-page'>
      <div>
        <h1>404 Not Found</h1>
      </div>
      <div>
        <a
          style={{fontWeight:'bold', fontSize:'1.5rem'}}
          href="/Github-Viewer/"
          className="page-link"
        >
          &#8592;
        </a>
      </div>
    </div>
  )
}

export default ErrorPage
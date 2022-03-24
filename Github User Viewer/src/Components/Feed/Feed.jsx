import './Feed.css'

const Feed = ({repoData}) => {
  const showRepoCard = repoData.map((item) => (
    <div key= {item.name} className='cards'>
        <div className="repo-name">{item.name}</div>
        <div className="stargazer">Stargazers : {item.stargazers_count}</div>
        {item.language==null ? (
          <div className='no-lang'>no specific language</div>
          ) : (
          <div className="repo-lang">{item.language}</div>
        )}
        <a
            href={item.svn_url} 
            target='_blank' 
            rel='noreferrer noopener' 
            className="repo-url">
            Repos Page
        </a>
    </div>
  ))    

  return (
    <div className='repos-container'>{showRepoCard}</div>
  )
}

export default Feed
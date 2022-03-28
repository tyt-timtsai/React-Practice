import Feed from '../Components/Feed/Feed'

const ReposList = ({reposData, hasMore, userName, page}) => {

return (
    <div className="card-container">
        <Feed
          reposData={reposData}
          userName={userName}
          page={page}
        />
        { !hasMore&&reposData ?(<div>No more repostory</div>):(<div></div>) }
    </div>
  )
}

export default ReposList
import React ,{useEffect,useState} from 'react'
import { useParams } from "react-router-dom";


const ReposPage = ({userInput}) => {
  const {id} = useParams();
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    fetchRepo()
    console.log(repo);
  },[id])

  const fetchRepo = () => {
    fetch(`https://api.github.com/users/${userInput}/repos/${id}`)
    .then(res => res.json())
    .then((data) => {
      setRepo(data)
    })
  }

  const singleRepos = repo.map((item) => (
    <div className=''>
      <div>{item.name}</div>
      <div className="stargazer">Stargazers : {item.stargazers_count}</div>
      {item.language==null ? (
            <div className='no-lang'>no specific language</div>
            ) : (
            <div className="repo-lang">{item.language}</div>
          )}
      <div>{item.desc}</div>
      <a
        href={item.svn_url} 
        target='_blank' 
        rel='noreferrer noopener' 
        className="repo-url">
        Github
      </a>
    </div>
  ))

  return (
    <div>{singleRepos}</div>
  )
}

export default ReposPage
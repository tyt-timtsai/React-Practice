import './Pagestyle.css'
import {useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEye } from '@fortawesome/free-solid-svg-icons'


const ReposPage = ({userName}) => {
  const {id} = useParams();
  const [reposName, setReposName] = useState('')
  const [reposDesc, setReposDesc] = useState('')
  const [reposLanguage, setReposLanguage] = useState('')
  const [reposStargazers, setReposStargazers] = useState('')
  const [reposUrl, setReposUrl] = useState('')
  const [reposWatchers, setReposWatchers] = useState('')
  const [reposUpdated, setReposUpdated] = useState('')

  const setData = ({name, description, language, stargazers_count, svn_url, watchers, updated_at}) => {
    setReposName(name);
    setReposDesc(description);
    setReposLanguage(language);
    setReposStargazers(stargazers_count);
    setReposUrl(svn_url);
    setReposWatchers(watchers);
    setReposUpdated(updated_at);
  }

  useEffect(() => {
    fetchRepo()
  },[id])

  const fetchRepo = () => {
    fetch(`https://api.github.com/repos/${userName}/${id}`)
    .then(res => res.json())
    .then((data) => {
      setData(data)
    })
  }

  return (
    <div className='container page-container'>
      <div className='single-reponame'>{reposName}</div>
      <div className='single-page'>
        <div className='data-container'>
          {reposLanguage==null ? (
            <div className='repo-lang'>no specific language</div>
            ) : (
            <div className='lang'>{reposLanguage}</div>
          )}
          <div className="datas">
            <span className='stargazer'>
              <FontAwesomeIcon className='star-icon' icon={faStar} />
              {reposStargazers}
              <span>Stargazers</span>
            </span>
            <span className='watcher'>
              <FontAwesomeIcon className='watcher-icon' icon={faEye} />
              {reposWatchers}
              <span>Watchers</span>
            </span>
          </div>
        </div>

        <div className='repos-desc'>
            {reposDesc==null ? (
              <div className='repo-lang'>no description</div>
              ) : (
              <div className='repo-lang'>{reposDesc}</div>
            )}
        </div>
        <div className='no-lang'>
          <span>Last Updated at | </span>
          {reposUpdated}
        </div>
      </div>
        <a
          href={reposUrl} 
          target='_blank' 
          rel='noreferrer noopener' 
          className="page-link"
        >
          Github Repos
        </a>
    </div>
  )
}

export default ReposPage
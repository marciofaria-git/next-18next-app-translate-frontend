import { useTranslate } from "../../hooks/useTranslante"

function Navigation(){
  const {navigationTranslations} = useTranslate()
  return(
    <nav className='navbar navbar-dark bg-dark container-fluid'>
      <ul>
        <li >
          <button className="btn btn-primary">{navigationTranslations('buttonLanguage')}</button>
        </li>
        
      </ul>
    </nav>
  )
}

export {Navigation}
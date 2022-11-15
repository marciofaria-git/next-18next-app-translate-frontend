import { useTranslate } from "../../hooks/useTranslante"

function Navigation(){
  const {commonTranslations} = useTranslate()
  return(
    <nav className='navbar navbar-dark bg-dark container-fluid'>
      <ul>
        <li >
          <button className="btn btn-primary">{commonTranslations('navigation.buttonLanguage')}</button>
        </li>
        
      </ul>
    </nav>
  )
}

export {Navigation}
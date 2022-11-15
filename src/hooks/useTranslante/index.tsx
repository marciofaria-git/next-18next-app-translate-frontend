import {useTranslation} from 'next-i18next'

export function useTranslate(){
  const { t: commonTranslations } = useTranslation('common')

  return {commonTranslations}
}
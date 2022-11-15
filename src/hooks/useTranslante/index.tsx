import { useTranslation } from "next-i18next";

export function useTranslate() {
  const { t: commonTranslations } = useTranslation("common");
  const { t: navigationTranslations } = useTranslation("navigation");
  const { t: fruitsTableTranslations } = useTranslation("fruitsTable");

  return {
    commonTranslations,
    fruitsTableTranslations,
    navigationTranslations,
  };
}

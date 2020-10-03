import React, { useState } from "react"
import tw from "twin.macro"
import SEO from "../components/seo"
import iconArrowBlack from "../images/icons/arrow-forward.svg"

import { PageContainer, BigText } from "../common/elements"
import { useTranslation } from "react-i18next"

const HoldPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t("hold.title")} />
      <PageContainer>
        <div tw="mt-16 mb-24 sm:mt-20 sm:mb-56 px-6 sm:px-0">
          <BigText tw="mb-8">{t("hold.title")}</BigText>
          <img src={iconArrowBlack} alt=">" tw="transform rotate-90" />
        </div>
      </PageContainer>
    </>
  )
}

export default HoldPage

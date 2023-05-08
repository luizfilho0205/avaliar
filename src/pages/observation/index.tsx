import React from 'react'
import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Section from '../../components/Section'
import Heading from '../../components/Heading'

const Observation: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Section>
      <Heading>{t('common:observation')}</Heading>
    </Section>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common']))
    }
  }
}

export default Observation

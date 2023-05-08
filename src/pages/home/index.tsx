import React from 'react'
import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Section from '../../components/Section'
import Heading from '../../components/Heading'

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Section>
      <Heading>{t('common:title')}</Heading>
      <Section>
        <Heading>{t('common:description')}</Heading>
        <Section>
          <Heading>{t('common:details')}</Heading>
          <p>{t('common:details')}</p>
        </Section>
      </Section>
      <Section>
        <Heading>{t('common:description')}</Heading>
        <Section>
          <Heading>{t('common:description')}</Heading>
          <Section>
            <Heading>{t('common:description')}</Heading>
            <Section>
              <Heading>{t('common:description')}</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
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

export default Home

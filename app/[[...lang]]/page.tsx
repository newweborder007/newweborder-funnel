import React from 'react';
import { getDictionary } from './dictionaries';
import WelcomeBanner from '@/components/sections/WelcomeBanner';
import FeaturesOverview from '@/components/sections/FeaturesOverview';
import DataAnalysis from '@/components/sections/DataAnalysis';
import BenefitsShowcase from '@/components/sections/BenefitsShowcase';
import PriceBreakdown from '@/components/sections/PriceBreakdown';
import ServiceWalkthrough from '@/components/sections/ServiceWalkthrough';
import OnBoardingProcess from '@/components/sections/OnBoardingProcess';
import ClientReviews from '@/components/sections/ClientReviews';

const HomePage = async ({ params: { lang } }: { params: { lang: 'en' } }) => {
  const dict = await getDictionary(lang || 'en');
  return (
    <>
      <WelcomeBanner data={dict} />
      <FeaturesOverview data={dict} />
      <DataAnalysis data={dict} />
      <BenefitsShowcase data={dict} />
      <PriceBreakdown data={dict}/>
      <ServiceWalkthrough data={dict} />
      <OnBoardingProcess data={dict} />
      <ClientReviews data={dict} />
    </>
  );
};

export default HomePage;
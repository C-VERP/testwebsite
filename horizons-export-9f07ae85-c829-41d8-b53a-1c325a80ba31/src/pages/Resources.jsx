import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';
import HeroSection from '@/components/resources/HeroSection';
import ResourceCategories from '@/components/resources/ResourceCategories';
import BlogPostsSection from '@/components/resources/BlogPostsSection';
import WhitepapersSection from '@/components/resources/WhitepapersSection';
import WebinarsSection from '@/components/resources/WebinarsSection';
import CaseStudiesSection from '@/components/resources/CaseStudiesSection';
import NewsletterCta from '@/components/resources/NewsletterCta';

const Resources = () => {
  const handleResourceClick = (type) => {
    toast({
      title: `🚧 ${type}`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Resources - InnoCraft.be | Insights, Guides & Industry Knowledge</title>
        <meta name="description" content="Access InnoCraft.be's comprehensive resource library: blog posts, whitepapers, webinars, case studies, and industry insights on software development and digital transformation." />
        <meta property="og:title" content="Resources - InnoCraft.be | Insights, Guides & Industry Knowledge" />
        <meta property="og:description" content="Access InnoCraft.be's comprehensive resource library: blog posts, whitepapers, webinars, case studies, and industry insights on software development and digital transformation." />
      </Helmet>

      <HeroSection />
      <ResourceCategories onResourceClick={handleResourceClick} />
      <BlogPostsSection onResourceClick={handleResourceClick} />
      <WhitepapersSection onResourceClick={handleResourceClick} />
      <WebinarsSection onResourceClick={handleResourceClick} />
      <CaseStudiesSection onResourceClick={handleResourceClick} />
      <NewsletterCta onResourceClick={handleResourceClick} />
    </>
  );
};

export default Resources;
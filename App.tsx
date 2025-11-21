
import React from 'react';
import Layout from './components/Layout';
import PermitFinderUI from './components/PermitFinderUI';
import SeoArticle from './utils/SeoArticle';

const App: React.FC = () => {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-8 md:py-12 text-white">
        <PermitFinderUI />
        <div id="article" className="mt-20 md:mt-28">
           <SeoArticle />
        </div>
      </main>
    </Layout>
  );
};

export default App;
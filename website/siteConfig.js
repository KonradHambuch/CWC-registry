/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hljsDefineSolidity = require('highlightjs-solidity');

const siteConfig = {
  title: 'Overview',
  tagline: 'Chaincode Weakness Classification and Test Cases',
  url: 'https://konradhambuch.github.io/CWC-registry',
  baseUrl: '/',
  projectName: 'CWC-registry',
  organizationName: 'SmartContractSecurity',
  customDocsPath: 'website/docs',
  headerLinks: [
    { doc: 'CWC-100', label: 'Registry' },
    { href: 'https://github.com/SmartContractSecurity/CWC-registry', label: 'Github' },
  ],
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#4d504e',
    secondaryColor: '#205C3B',
  },
  headerIcon: '',
  copyright: `Copyright © ${new Date().getFullYear()} SmartContractSecurity`,
  highlight: {
    theme: 'default',
    defaultLang: 'javascript',
    hljs: function(hljs) {
      return hljsDefineSolidity(hljs);
    }
  },
  cname: 'cwcregistry.io',
  algolia: {
    apiKey: '7ec828205c574bfce925d3ce488b57c9',
    indexName: 'hkoni',
  },
  scripts: [],
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',
  repoUrl: 'https://github.com/KonradHambuch/CWC-registry'  
};

module.exports = siteConfig;

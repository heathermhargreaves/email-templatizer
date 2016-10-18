angular.module('app')
  .service('emailcreatorSrvc', function($http) {

    this.companyData = [
      {
        industry: 'tech',
        territory: 'west',
        company: 'Salesforce',
        customerSnippet: 'Salesforce streamlined their app development and increased developer productivity by 90%'
      },
      {
        industry: 'healthcare',
        territory: 'east',
        company: 'Johns Hopkins',
        customerSnippet: 'Johns Hopkins has reduced their patient readmission rate'
      },
      {
        industry: 'retail',
        territory: 'north',
        company: 'Buffalo Wild Wings',
        customerSnippet: 'Buffalo Wild Wings increased sales through online ordering by 50% by using APIs to streamline their legacy systems'
      },
      {
        industry: 'banking',
        territory: 'north',
        company: 'QuickenLoans',
        customerSnippet: 'QuickenLoans is gaining $4mil this year from their app for mortgage loans on demand. They built it with a microservices-first approach with MuleSoft as the backbone.'
      },
      {
        industry: 'insurance',
        territory: 'south',
        company: 'Southern Insurance',
        customerSnippet: 'Southern Insurance loves us!'
      }
    ];

    this.industryData = [
      {
        industry: 'tech',
        industrySnippet: 'Others in the tech industry use us to streamline onboarding and app development'
      },
      {
        industry: 'healthcare',
        industrySnippet: 'folks in the healthcare space are using us to reduce patient readmission'
      },
      {
        industry: 'insurance',
        industrySnippet: 'Insurance companies are using us digitize their paper processes'
      },
      {
        industry: 'retail',
        industrySnippet: 'Retailers use us to get a 360 degree view of their customers'
      }
    ];

  }); //end service

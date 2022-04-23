export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62642de63dfcf059cab518ed',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-s98ifmse',
                  apiId: 'e898baa2-0e47-4d1b-9b24-3c7100cc3bdb'
                },
                {
                  buildHookId: '62642de72fa9645a63fd892a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-squbej5w',
                  apiId: '5558aefb-b3c0-4a32-b071-37e9343ca0e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joseporiolayats/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-squbej5w.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

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
                  buildHookId: '6140e834b0f48b1c1b3e4fa2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-t37t2dgs',
                  apiId: '6ea49c66-9a12-4eae-8ce7-f9f375f73dcd'
                },
                {
                  buildHookId: '6140e834d1c7d21c2c596807',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jsewhi5i',
                  apiId: '3e9fc502-f564-4a0c-9864-33089b384afa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/annemms/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jsewhi5i.netlify.app',
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

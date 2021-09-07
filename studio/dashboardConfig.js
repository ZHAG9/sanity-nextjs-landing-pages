export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6136bb9857b42acb050ab483',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fr2cwsbn',
                  apiId: 'ba4f9291-6ea7-4169-9df6-203aaaed1169'
                },
                {
                  buildHookId: '6136bb98ddbf34b1ec7d062c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pzvsyork',
                  apiId: 'f6b15631-f5bb-45c2-8b1c-f30c6d625b72'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ZHAG9/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pzvsyork.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

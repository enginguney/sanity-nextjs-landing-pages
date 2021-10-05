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
                  buildHookId: '615c15516b69c1bbd4a95923',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-r9qnvs3v',
                  apiId: '8b4b3c61-d1b4-469a-ae0b-0b1494bb1a2a'
                },
                {
                  buildHookId: '615c1551d88f5ddbd34fbdb0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xup8hkxn',
                  apiId: '2e15dd0c-8947-4c0e-966a-4497823d888c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/enginguney/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xup8hkxn.netlify.app', category: 'apps'}
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

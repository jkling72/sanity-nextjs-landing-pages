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
                  buildHookId: '61392fd34cc96600b4ae91c7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-987pvt8w',
                  apiId: '7cdda669-aa91-451b-9b28-da35f7d38e2b'
                },
                {
                  buildHookId: '61392fd4d397c5009a901ad5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-d4owvrfq',
                  apiId: '13fcd512-9eb6-4e2d-b6e0-5c9c4b7a2b36'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jkling72/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-d4owvrfq.netlify.app', category: 'apps'}
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

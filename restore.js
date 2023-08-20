const { exec } = require('child_process');

const ignoredArtifacts= [
  '.firebaserc',
  'content/file-not-found.md',
  'content/errors/NG0100.md',
  'content/errors/NG0200.md',
  'content/errors/NG0201.md',
  'content/errors/NG0300.md',
  'content/guide/component-overview.md',
  'content/guide/inputs-outputs.md',
  'content/guide/localized-documentation.md',
  'content/guide/reviewing-content.md',
  'content/guide/setup-local.md',
  'content/guide/understanding-angular-overview.md',
  'content/guide/what-is-angular.md',
  'content/marketing/docs.md',
  'content/marketing/index.html',
  'content/start',
  'content/tutorial/tour-of-heroes',
  'content/navigation.json',
  'src/app/app.component.html',
  'src/app/custom-elements/live-example/live-example.component.ts',
  'src/app/custom-elements/live-example/live-example.component.html',
  'src/app/custom-elements/search/file-not-found-search.component.ts',
  'src/app/layout/footer/footer.component.html',
  'src/app/search/search-box/search-box.component.ts',
  'src/app/shared/search-results/search-results.component.html',
  'src/app/shared/theme-picker/theme-toggle.component.ts',
  'tools/transforms/templates/error/error.template.html'
];
let restoreCmd = 'git restore';

for(artifact of ignoredArtifacts) {
  restoreCmd += ` aio/${artifact} `;
}

exec(restoreCmd);

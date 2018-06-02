
# Site Oficial - CADES

Após clonar, execute `npm install` e então rode `gulp dev` o qual abrirá o site no seu browser padrão, atualizando automáticamente após mudanças nos arquivos centrais serem salvas. Você pode dar uma olhada no arquivo `gulpfile.js` para ver quais tarefas estão inclusivas no ambiente de desenvolvimento.

### Gulp Tasks

- `gulp` the default task that builds everything
- `gulp dev` browserSync opens the project in your default browser and live reloads when changes are made
- `gulp sass` compiles SCSS files into CSS
- `gulp minify-css` minifies the compiled CSS file
- `gulp minify-js` minifies the themes JS file
- `gulp copy` copies dependencies from node_modules to the vendor directory

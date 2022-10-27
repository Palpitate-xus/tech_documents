#!/usr/bin/env bash
set -e
npm run build
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Pola-ris/blog.git master:gh-pages

cd -


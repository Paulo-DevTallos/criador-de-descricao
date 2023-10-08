#!/bin/bash

# crie variáveis que irão armazenar as suas necessidades
# verificar a versão atual do NPM
current_npm_version=$(npm -v)

# verificar a versão do npm mais recente disponível
latest_npm_version=$(npm show npm version)

# aplique uma condicional que verifica as duas variáveis
if [ "$current_npm_version" != "$latest_npm_version" ];
then
  echo "Nova versão disponível $latest_npm_version, atualizando..."
  npm install -g npm@latest
  npm install
else
  npm install
fi

# #npm run prepare:husky

npm run start:dev
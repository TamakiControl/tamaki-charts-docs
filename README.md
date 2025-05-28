# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Prerequesites for Local Development

[Install node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Then with npm, [install yarn](https://yarnpkg.com/getting-started/install) (note: instructions are different to earlier versions of yarn).

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

If you want to run the docsearch crawler, this command will work if the .env files contains the correct information
```
docker pull typesense/docsearch-scraper:latest
docker run -it --env-file=./.env -e "CONFIG=$(cat typesense-config.json | jq -r tostring)" typesense/docsearch-scraper
```
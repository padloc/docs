# docs

This is the code for the new docs website at https://docs.padloc.app

## Development

Start 11ty in watch mode with `npm start`.

Update the downloads.json file with `npm run update-downloads-urls [VERSION]` with `[VERSION]` being semver, like `4.1.0`.

## Deployment

Just push/merge to the `main` branch and the CI workflow will build and push the latest commit to `gh-pages`.

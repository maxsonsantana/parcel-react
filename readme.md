This is a basic boilerplate for a react-app that uses `parcel-bundler` behinde the scenes for create and use the app.

#### What is comes?

- [x] React App
- [x] Yarn friendly
- [x] Parcel-bundler
- [x] React Context
- [x] Now with tests using `@testing-library/react`
- [x] And jsDoc for intelissense
- [x] Husky with `jest` before each commit
- [x] Silent test before each commit
- [x] esLint for the most common uses
- [x] dev environment with _https_ as default
- [x] With routes and `react-router-dom`
- [x] Enviromental variables
- [x] `service-worker` integrated
- [x] Commitlint as default
- [x] Standard Versioning in the box (_check the package.json on the startdard version_)
- [x] Prettier before every commit with `pretty-quick`

#### Service worker and domains

Service worker doesn't have access to enviroment variables, in this case need to be set manually. Still working on a automated way of doing this.

#### Custom certificates and key

Place the certificate and key on the `.certs` folder on the root of the application. You can create this certificates and key with the `mkcert`, otherwise just use the `yarn dev:http` for the basic (without https) server.

#### Clone it!

This is a small script that will clone into a new folder named **unnamed-project**, remove the old .git and create a new one for you and start the http server.

_The initial load time for the server is around 2~3 seconds_

```sh
git clone https://github.com/shinspiegel/parcel-react.git unnamed-project;
cd unnamed-project;
rm -rf .git; git init;
git add -A;
git commit -m "Initial files";
yarn;
yarn dev:http;
```

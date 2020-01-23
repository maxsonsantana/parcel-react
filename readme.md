This is a basic boilerplate for a react-app that uses `parcel-bundler` behinde the scenes for create and use the app.

#### What is comes?

- [x] React App
- [x] Yarn friendly
- [x] Parcel-bundler
- [x] React Context
- [x] Now with tests using `@testing-library/react`
- [x] And jsDoc for intelissense
- [x] Husrky with `jest` before each commit
- [x] esLint for the most common uses
- [x] dev environment with _https_ as default
- [x] With routes and `react-router-dom`

#### Custom certificates and key

Place the certificate and key on the `.certs` folder on the root of the application. You can create this certificates and key with the `mkcert`, otherwise just use the `yarn dev:http` for the basic (without https) server.

#### Clone it!

This is a small script that will clone into a new folder named **my-project**, remove the old .git and create a new one for you.

```sh
git clone https://github.com/shinspiegel/parcel-react.git my-project;
cd my-project;
rm -rf .git; git init;
git add -A;
git commit -m "Initial files";
yarn;
yarn dev;
```

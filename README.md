## Build Setup

``` bash
# install dependencies
npm install / yarn

# serve with hot reload at localhost:8866
npm run dev / yarn dev

# build for production with minification
npm run build / yarn build
```

## Project Structure

```
.
├── build/                      # webpack config files
│   └── ...
├── config/
│   ├── index.js                # main project config
│   └── ...
├── src/
│   ├── assets/                 # other static files
│   │   └── ...
│   ├── components/             # component files
│   │   └── ...
│   ├── config/                 # Router modules files
│   │   ├── api.js              # api config
│   │   ├── routes.js           # routes config
│   │   └── ...
│   ├── frame/                  # frame entry
│   │   └──  Index.vue          # index file
│   ├── pages/                  # other page files
│   │   ├── dashboard/          # home dashboard files
│   │   ├── error/              # error page files
│   │   ├── home/               # home page files
│   │   ├── login/              # login page files
│   │   ├── public/             # public page files
│   │   ├── scheduler/          # scheduler page files
│   │   ├── set/                # set page files
│   │   └── user/               # user page files
│   ├── plugin/                 # plugin files
│   │   ├── bus.js
│   │   ├── hpc.js
│   │   └── publicFn.js
│   ├── App.vue                 # app main component
│   ├── main.js                 # app entry file
│   └── ...
├── static/                     # pure static assets (directly copied)
├── test/
│   └── unit/                   # unit tests
│   │   ├── specs/              # test spec files
│   │   ├── index.js            # test build entry file
│   │   └── karma.conf.js       # test runner config file
│   └── e2e/                    # e2e tests
│   │   ├── specs/              # test spec files
│   │   ├── custom-assertions/  # custom assertions for e2e tests
│   │   ├── runner.js           # test runner script
│   │   └── nightwatch.conf.js  # test runner config file
├── .babelrc                    # babel config
├── .editorconfig.js            # editor config
├── .eslintrc.js                # eslint config
├── index.html                  # index.html template
└── package.json                # build scripts and dependencies

```



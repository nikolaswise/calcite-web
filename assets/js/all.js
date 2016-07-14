console.error("SyntaxError: {\n  \"name\": \"calcite-web\",\n  \"version\": \"1.0.0-beta.24\",\n  \"description\": \"SASS & CSS Framework for Esri websites\",\n  \"private\": true,\n  \"homepage\": \"https://github.com/esri/calcite-web\",\n  \"scripts\": {\n    \"test\": \"semistandard | snazzy\",\n    \"cssStat\": \"cssstats dist/css/calcite-web.css dist/css/stats.json\",\n    \"deploy\": \"gh-pages -d docs/build -o upstream\"\n    \"a11y\": \"a11y local.arcgis.com:8888\",\n    \"gh-release\": \"gh-release -a calcite-web.zip\",\n    \"acetate\": \"acetate build -i docs/source -o docs/build -c docs/acetate.conf.js\",\n    \"rollup:core:docs\": \"rollup lib/js/calcite-web.js -f umd -o docs/build/assets/js/libs/calcite-web.js -n calcite -m\",\n    \"rollup:marketing:docs\": \"rollup lib/js/calcite-web-marketing.js -f umd -o docs/build/assets/js/libs/calcite-web-marketing.js -n calciteMarketing -m\",\n    \"rollup:core:dist\": \"rollup lib/js/calcite-web.js -f umd -o dist/js/calcite-web.js -n calcite -m\",\n    \"rollup:marketing:dist\": \"rollup lib/js/calcite-web-marketing.js -f umd -o dist/js/calcite-web-marketing.js -n calciteMarketing -m\",\n    \"prerollup\": \"npm run test\",\n    \"rollup\": \"npm-run-series rollup:core:dist rollup:core:docs rollup:marketing:dist rollup:marketing:docs\",\n    \"imagemin:lib\": \"imagemin-newer lib/img/ docs/build/assets/img/\",\n    \"imagemin:docs\": \"imagemin-newer docs/source/assets/img/ docs/build/assets/img/\",\n    \"imagemin:dist\": \"imagemin-newer lib/img/ dist/img/\",\n    \"imagemin\": \"npm-run-series imagemin:docs imagemin:lib imagemin:dist\",\n    \"serve\": \"http-server docs/build -p 8888\",\n    \"sass:dist\": \"node-sass lib/sass/ -o dist/css/\",\n    \"sass:docs\": \"node-sass docs/source/assets/css/ -o docs/build/assets/css/ --include-path lib/sass\",\n    \"presass\": \"mkdirp docs/source/assets/css\",\n    \"sass\": \"npm-run-series sass:dist sass:docs\",\n    \"prefont\": \"ncp lib/fonts docs/build/assets/fonts\",\n    \"font\": \"ncp lib/fonts dist/fonts\",\n    \"prestart\": \"npm-run-series acetate sass rollup imagemin font\",\n    \"s3\": \"node bin/s3.js\",\n    \"start\": \"parallelshell 'rerun-script' 'npm run serve' 'watchify docs/source/assets/js/all.js -o docs/build/assets/js/all.js'\"\n  },\n  \"watches\": {\n    \"rollup\": [\n      \"lib/js/**/*.js\"\n    ],\n    \"imagemin\": [\n      \"lib/img/**/*\",\n      \"docs/source/assets/img/**/*\"\n    ],\n    \"sass\": [\n      \"lib/sass/**/*\",\n      \"docs/source/assets/css/**/*\"\n    ],\n    \"acetate\": [\n      \"docs/source/**\"\n    ]\n  },\n  \"semistandard\": {\n    \"ignore\": [\n      \"bin/\",\n      \"docs/\"\n    ]\n  },\n  \"main\": \"dist/js/calcite-web.js\",\n  \"js-next:main\": \"dist/js/source/calcite-web.js\",\n  \"repository\": {\n    \"type\": \"git\",\n    \"url\": \"git://github.com/esri/calcite-web.git\"\n  },\n  \"author\": {\n    \"name\": \"Esri Portland R&D Center\",\n    \"email\": \"<portland@esri.com>\",\n    \"url\": \"http://pdx.esri.com/\"\n  },\n  \"contributors\": [\n    {\n      \"name\": \"Paul C. Pederson\",\n      \"email\": \"ppederson@esri.com\"\n    },\n    {\n      \"name\": \"Nikolas Wise\",\n      \"email\": \"nwise@esri.com\"\n    }\n  ],\n  \"files\": [\n    \"dist/\"\n  ],\n  \"license\": \"Apache 2.0\",\n  \"bugs\": {\n    \"url\": \"https://github.com/esri/calcite-web/issues\"\n  },\n  \"devDependencies\": {\n    \"a11y\": \"^0.3.0\",\n    \"acetate\": \"^0.2.2\",\n    \"acetate-cli\": \"0.0.3\",\n    \"babel-preset-es2015-rollup\": \"^1.1.1\",\n    \"cssstats-cli\": \"^1.0.0-beta.2\",\n    \"gh-pages\": \"^0.11.0\",\n    \"gh-release\": \"^2.0.1\",\n    \"imagemin-newer\": \"^1.0.1\",\n    \"mkdirp\": \"^0.5.1\",\n    \"ncp\": \"^2.0.0\",\n    \"node-sass\": \"^3.8.0\",\n    \"npm-run-series\": \"^1.0.0\",\n    \"parallelshell\": \"^2.0.0\",\n    \"rerun-script\": \"^0.6.0\",\n    \"rollup\": \"^0.34.1\",\n    \"s3\": \"^4.4.0\",\n    \"semistandard\": \"*\",\n    \"snazzy\": \"^3.0.0\",\n    \"watchify\": \"^3.7.0\",\n    \"webfonts-generator\": \"^0.3.1\"\n  },\n  \"dependencies\": {\n    \"clipboard\": \"^1.5.12\",\n    \"guid\": \"0.0.12\",\n    \"tiny-emitter\": \"^1.0.2\"\n  }\n}\n : Unexpected string");
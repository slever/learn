# Tooling

## Dev
* browser sync
```
// mode server
browser-sync start -s -f "**/*"

// mode proxy
browser-sync start -p "localhost:2304" -f "**/*"
```
* [polymer](https://www.polymer-project.org/1.0/)
   * components
* [deployd](http://deployd.com/)
   * Design, build, and scale APIs for web and mobile apps in minutes instead of days.
   ```
   dpd -d
   ```

## integration tests
   * selenium
   * browserstack
   * [protractor](http://www.protractortest.org/)
     * tests selenium avec support angular
   * [Nightwatch](http://nightwatchjs.org/)
      * tests selenium avec support JS

   * sans navigateur
      * [phantomjs](http://phantomjs.org/)
      * [casper](http://casperjs.org/)
         * [resurrectio](https://github.com/ebrehault/resurrectio) CasperJS test recorder Chrome extension

## unit tests
   * jasmine
   * karma
   ```
   npm install karma --save-dev
   npm install jasmine-core karma-jasmine karma-chrome-launcher --save-dev
   ```

## Build
   * Gulp
      ```
      npm install gulp gulp-uglify --save-dev
      ```
      * bien car utilisation de stream pour enchainer les taches
   * Grunt
      * taskRunner
      * pas bien car genere beaucoup de fichiers
      ```
      npm install grunt gruntcli --save-dev
      ```
      * industrialisation du build de l'application angular

## Other
* REquireJS / ou SYstemJS)
   * importation dynamique de dépendances JS en ANgular 1 (pas très conseillé: assez lourd)
* JSHint
   * test de surface du code JS

# Documentation
## Closure
[MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Closures)

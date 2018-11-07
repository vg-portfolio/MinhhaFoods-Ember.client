
## Updating Dependencies

## Dependencies

Install build dependencies with `npm install`. Install runtime dependencies with
`bower install`.
If you have not installed phantomjs, you will need to install it globally:
`npm install --global phantomjs-prebuil`

-   [ember.js](http://emberjs.com/)
-   [ember-cli](http://www.ember-cli.com/)
-   [Materialize]

At the beginning of each cohort, update this template by upgrading `ember-cli`
and generating a new Ember application in another location. Copy files over a
handful at a time and check diffs. You should preserve the pods structure and
other customizations, including Bootstrap.

## Structure

Build dependencies are stored in [`package.json`](package.json). Client
dependencies are stored in [`bower.json`](bower.json).

Do not configure `grunt` packages directly in the
[`Gruntfile.js`](Gruntfile.js). Instead, store configurations in the
[`grunt`](grunt) directory. You won't need a top-level key, since that's
generated by the `Gruntfile.js` based on the filename of the configuration
object stored in the `grunt` directory.

Developers should store source code following Ember conventions. This template
uses the "pods" layout for organizing code. For an introduction, see [Organize
Your Ember App with Pods](http://cball.me/organize-your-ember-app-with-pods/).

## Tasks

Developers should run these often!

-   `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
-   `grunt reformat`: reformats all your code in a standard style
-   `ember server`: generates bundles, watches, and livereloads (use the
    `--proxy` flag when developing locally)
-   `ember test`: runs any automated tests
-   `ember build`: prepare a distribution for deployment (use the
    `--environment` flag if you've customized builds)
-   `ember generate`: make use of the many generators for code (try `ember help
    generate` for more details)

## Additional Resources

-   [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
-   [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.

'use strict';

define("ember-js/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/edit.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/song.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/song.js should pass ESLint\n\n6:7 - \'searchValue\' is assigned a value but never used. (no-unused-vars)\n30:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n31:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n32:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });
  QUnit.test('models/song.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/song.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/about.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint\n\n');
  });
  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
  QUnit.test('routes/search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/search.js should pass ESLint\n\n');
  });
  QUnit.test('routes/song.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/song.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/song.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/song.js should pass ESLint\n\n');
  });
});
define("ember-js/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('ember-js/templates/about.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-js/templates/about.hbs should pass TemplateLint.\n\nember-js/templates/about.hbs\n  7:5  error  Incorrect indentation for `<p>` beginning at L7:C5. Expected `<p>` to be at an indentation of 8 but was found at 5.  block-indentation\n  14:6  error  Incorrect indentation for `p` beginning at L7:C5. Expected `</p>` ending at L14:C6 to be at an indentation of 5 but was found at 2.  block-indentation\n  8:8  error  Incorrect indentation for `<b>` beginning at L8:C8. Expected `<b>` to be at an indentation of 7 but was found at 8.  block-indentation\n  9:54  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('ember-js/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-js/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-js/templates/edit.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-js/templates/edit.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-js/templates/new.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-js/templates/new.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-js/templates/search.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-js/templates/search.hbs should pass TemplateLint.\n\nember-js/templates/search.hbs\n  4:1  error  Incorrect indentation for `<p>` beginning at L4:C1. Expected `<p>` to be at an indentation of 6 but was found at 1.  block-indentation\n  5:6  error  Incorrect indentation for `<b>` beginning at L5:C6. Expected `<b>` to be at an indentation of 3 but was found at 6.  block-indentation\n');
  });
  QUnit.test('ember-js/templates/song.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-js/templates/song.hbs should pass TemplateLint.\n\n');
  });
});
define("ember-js/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/song/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/song/edit-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/song/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/song/new-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/note-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/note-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/song-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/song-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/all-songs-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/all-songs-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/song-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/song-test.js should pass ESLint\n\n');
  });
});
define("ember-js/tests/test-helper", ["ember-js/app", "ember-js/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("ember-js/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("ember-js/tests/unit/controllers/song/edit-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | song/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:song/edit');
      assert.ok(controller);
    });
  });
});
define("ember-js/tests/unit/controllers/song/new-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | song/new', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:song/new');
      assert.ok(controller);
    });
  });
});
define("ember-js/tests/unit/models/note-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | note', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('note', {});
      assert.ok(model);
    });
  });
});
define("ember-js/tests/unit/models/song-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | song', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('song', {});
      assert.ok(model);
    });
  });
});
define("ember-js/tests/unit/routes/all-songs-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | all_songs', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:all-songs');
      assert.ok(route);
    });
  });
});
define("ember-js/tests/unit/routes/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define("ember-js/tests/unit/serializers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('application');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('application', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("ember-js/tests/unit/serializers/song-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | song', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('song');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('song', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define('ember-js/config/environment', [], function() {
  var prefix = 'ember-js';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-js/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map

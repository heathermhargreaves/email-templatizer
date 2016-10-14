'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

// import session from 'express-session'

var app = module.exports = express();
// var app = express();

app.use(function (req, res, next) {
  next();
});

//displaying static files
app.use(express.static(__dirname + './../public'));

app.use(bodyParser.json());
app.use(cors());

//listening on localserver
var port = 3000;
app.listen(port, function () {
  console.log("Started server on port", port);
});
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _massive = require('massive');

var _massive2 = _interopRequireDefault(_massive);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import session from 'express-session'

var app = module.exports = (0, _express2.default)();
// var app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

var hello = function hello() {
  console.log('hello, running');
};

//listening on localserver
var port = 8080;
app.listen(port, function () {
  console.log("Started server on port", port);
});
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _massive = require('massive');

var _massive2 = _interopRequireDefault(_massive);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import session from 'express-session'

var app = module.exports = (0, _express2.default)();
// var app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

var hello = function hello() {
  console.log('hello, running');
};

//listening on localserver
var port = 8080;
app.listen(port, function () {
  console.log("Started server on port", port);
});
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _massive = require('massive');

var _massive2 = _interopRequireDefault(_massive);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import session from 'express-session'

var app = module.exports = (0, _express2.default)();
// var app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

var hello = function hello() {
  console.log('hello, running');
};

//listening on localserver
var port = 8080;
app.listen(port, function () {
  console.log("Started server on port", port);
});
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _massive = require('massive');

var _massive2 = _interopRequireDefault(_massive);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import session from 'express-session'

var app = module.exports = (0, _express2.default)();
// var app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

var hello = function hello() {
  console.log('hello, running');
};

//listening on localserver
var port = 8080;
app.listen(port, function () {
  console.log("Started server on port", port);
});
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _massive = require('massive');

var _massive2 = _interopRequireDefault(_massive);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import session from 'express-session'

var app = module.exports = (0, _express2.default)();
// var app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

var hello = function hello() {
  console.log('hello, running');
};

//listening on localserver
var port = 8080;
app.listen(port, function () {
  console.log("Started server on port", port);
});
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _massive = require('massive');

var _massive2 = _interopRequireDefault(_massive);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import session from 'express-session'

var app = module.exports = (0, _express2.default)();
// var app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

var hello = function hello() {
  console.log('hello, running');
};

//listening on localserver
var port = 8080;
app.listen(port, function () {
  console.log("Started server on port", port);
});
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _massive = require('massive');

var _massive2 = _interopRequireDefault(_massive);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import session from 'express-session'

var app = module.exports = (0, _express2.default)();
// var app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

var hello = function hello() {
  console.log('hello, running');
};

//listening on localserver
var port = 8080;
app.listen(port, function () {
  console.log("Started server on port", port);
});
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _massive = require('massive');

var _massive2 = _interopRequireDefault(_massive);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import session from 'express-session'

var app = module.exports = (0, _express2.default)();
// var app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

var hello = function hello() {
  console.log('hello, running');
};

//listening on localserver
var port = 8080;
app.listen(port, function () {
  console.log("Started server on port", port);
});
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _massive = require('massive');

var _massive2 = _interopRequireDefault(_massive);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import session from 'express-session'

var app = module.exports = (0, _express2.default)();
// var app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

var hello = function hello() {
  console.log('hello, running');
};

//listening on localserver
var port = 8080;
app.listen(port, function () {
  console.log("Started server on port", port);
});
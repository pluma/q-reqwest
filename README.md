# Synopsis

A thin Q wrapper around ded's reqwest AJAX library.

# Install

## Node

```sh
npm install q-reqwest
```

## Browser

Get the [latest minified release](https://raw.github.com/pluma/q-reqwest/master/lib/q-reqwest.min.js) and download it to your project.

You can load the `q-reqwest` module with an AMD or CommonJS module loader or use it via the `reqwest` property of the `Q` global with a script tag:

```html
<script src="/your/js/path/q.min.js"></script>
<script src="/your/js/path/q-reqwest.min.js"></script>
<script>/* You can use Q.reqwest here. */</script>
```

## From Github

```sh
git clone https://github.com/pluma/q-reqwest.git
cd q-reqwest
npm install
make && make min
```

# API

## ajax(config:Object):Q

Passes the given `config` object to `reqwest` and returns a `Q` promise that is resolved or rejected when the request terminates.

If `config` is a string, it will be passed as the `url` option. For a full list of options see the [reqwest API documentation](https://github.com/ded/reqwest).

## get(config:Object):Q

Shorthand for `ajax({method: 'get'})`.

## post(config:Object):Q

Shorthand for `ajax({method: 'post'})`.

## del(config:Object):Q

Shorthand for `ajax({method: 'delete'})`.

## patch(config:Object):Q

Shorthand for `ajax({method: 'patch'})`.

## defaults

Contains the default options that will be used by `ajax`.

# License

The MIT/Expat license.

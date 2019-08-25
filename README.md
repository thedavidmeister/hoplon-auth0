# Hoplon Auth0

Auth0 integration for Hoplon.

## Installation

[![Clojars Project](https://img.shields.io/clojars/v/thedavidmeister/hoplon-auth0.svg)](https://clojars.org/thedavidmeister/hoplon-auth0)

Uses `v9.11.3` of `auth0-js` from npm.

Provides a `default.nix` file for nix shell based development.

## Auth0 config

SPA style login works by redirecting the user to a login provider, then back to
the app with access credentials in the return URL.

This library handles preserving any existing hash in the URL across redirects
(uses session storage) but needs some configuration to handle the outbound
redirect.

Both `hoplon-auth0.data/client-id` and `hoplon-auth0.data/domain` need to be set
with `:closure-defines` in the compiler options for CLJS.

## Usage

`hoplon-auth0.hoplon` implements `do!` and `on!` multimethods from hoplon so it
must be included.

This exposes `:login!` and `:logout!` attributes for elements.

### Logging in

`:login!` takes a map of params that will be passed to the `authorize` method of
`auth0`. Sensible defaults will be merged in (e.g. retrieve a basic JWT token).

```clojure
(h/button :login! {:connection "google-oauth2"} "Login with Google")
(h/button :login! {:connection "facebook"} "Login with Facebook")
```

This will redirect the user through the neccessary endpoints for whatever
connection you configure. Once the user returns there will be access information
in the URL.

Call `hoplon-auth0.api/login-from-url` to redeem the access credentials in the
URL for validated login state in `hoplon-auth0.state`. The access credentials
hash will be replaced with whatever the hash was before the user was originally
redirected away from the SPA.

The state cells available after redeeming access credentials are:

- `hoplon-auth0.state/access-token`: Opaque Auth0 access token used by the SDK
- `hoplon-auth0.state/user-profile`: The user profile parsed from the JWT
- `hoplon-auth0.state/state`: Auth0 internal auth state
- `hoplon-auth0.state/nonce`: Auth0 internal auth nonce
- `hoplon-auth0.state/token`: Complete JWT token

### Logging out

`:logout!` takes a callback or any truthy value and logs the user out. The user
will be redirected through an Auth0 endpoint, so the page will appear to reload.

```clojure
(h/button :logout! true "Logout!")
```

# seneca-mesh-dns-discovery

A custom function for [Seneca Mesh](https://github.com/senecajs/seneca-mesh) to discover base nodes using DNS resolver. Can be used when your services are running under a Docker or Kubernetes network that base services are determined by containers name.

## Install

```sh
npm install seneca-mesh-dns-discovery
```

## How to use

```sh
require('seneca')()
  .use('mesh', {
    pin: 'role:*',
    host: HOST || require('ip').address(),
    sneeze: {
      swim: { interval: 5000 },
    },
    bases: BASES,
    discover: {
      defined: {
        active: false,
      },
      registry: {
        active: false,
      },
      multicast: {
        active: false,
      },
      guess: {
        active: false,
      },
      custom: {
        active: true,
        find: require('seneca-mesh-dns-discovery'),
      },
    },
  })
```

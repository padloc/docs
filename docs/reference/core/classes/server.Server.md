---
title: "Class: Server"
linkTitle: "Server"
slug: "server.Server"
---

[server](../../modules/server).Server

The Padloc server acts as a central repository for
[Account](../account.Account.md)s, [Org](org.Org)s and
[Vault](../vault.Vault.md)s. [Server](server.Server) handles authentication,
enforces user privileges and acts as a mediator for key exchange between
clients.

The server component acts on a strict zero-trust, zero-knowledge principle when
it comes to sensitive data, meaning no sensitive data is ever exposed to the
server at any point, nor should the server (or the person controlling it) ever
be able to temper with critical data or trick users into granting them access to
encrypted information.

## Constructors

### constructor

• **new Server**(`config`, `storage`, `messenger`, `logger?`, `authServers?`,
`attachmentStorage`, `provisioner?`, `legacyServer?`)

#### Parameters

| Name                | Type                                                                 | Default value |
| :------------------ | :------------------------------------------------------------------- | :------------ |
| `config`            | [`ServerConfig`](../server.ServerConfig)                             | `undefined`   |
| `storage`           | [`Storage`](../../interfaces/storage.Storage)                        | `undefined`   |
| `messenger`         | [`Messenger`](../../interfaces/messenger.Messenger)                  | `undefined`   |
| `logger`            | [`Logger`](../../interfaces/logging.Logger)                          | `undefined`   |
| `authServers`       | [`AuthServer`](../../interfaces/auth.AuthServer)[]                   | `[]`          |
| `attachmentStorage` | [`AttachmentStorage`](../../interfaces/attachment.AttachmentStorage) | `undefined`   |
| `provisioner`       | [`Provisioner`](../../interfaces/provisioning.Provisioner)           | `undefined`   |
| `legacyServer?`     | [`LegacyServer`](../../interfaces/server.LegacyServer)               | `undefined`   |

#### Defined in

[core/src/server.ts:1902](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1902)

## Properties

### \_requestQueue

• `Private` **\_requestQueue**: `Map`<`string`, `Promise`<`void`\>\>

#### Defined in

[core/src/server.ts:1915](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1915)

---

### attachmentStorage

• **attachmentStorage**:
[`AttachmentStorage`](../../interfaces/attachment.AttachmentStorage)

---

### authServers

• **authServers**: [`AuthServer`](../../interfaces/auth.AuthServer)[] = `[]`

---

### config

• **config**: [`ServerConfig`](../server.ServerConfig)

---

### legacyServer

• `Optional` **legacyServer**:
[`LegacyServer`](../../interfaces/server.LegacyServer)

---

### logger

• **logger**: [`Logger`](../../interfaces/logging.Logger)

---

### messenger

• **messenger**: [`Messenger`](../../interfaces/messenger.Messenger)

---

### provisioner

• **provisioner**: [`Provisioner`](../../interfaces/provisioning.Provisioner)

---

### storage

• **storage**: [`Storage`](../../interfaces/storage.Storage)

## Methods

### \_addToQueue

▸ `Private` **\_addToQueue**(`context`): `Promise`<() => `void`\>

#### Parameters

| Name      | Type                                         |
| :-------- | :------------------------------------------- |
| `context` | [`Context`](../../interfaces/server.Context) |

#### Returns

`Promise`<() => `void`\>

#### Defined in

[core/src/server.ts:2057](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L2057)

---

### \_handleError

▸ `Private` **\_handleError**(`error`, `req`, `res`, `context`):
`Promise`<`void`\>

#### Parameters

| Name      | Type                                         |
| :-------- | :------------------------------------------- |
| `error`   | `Error`                                      |
| `req`     | [`Request`](../transport.Request)            |
| `res`     | [`Response`](../transport.Response)          |
| `context` | [`Context`](../../interfaces/server.Context) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/server.ts:2079](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L2079)

---

### handle

▸ **handle**(`req`): `Promise`<[`Response`](../transport.Response)\>

Handles an incoming [Request](../transport.Request), processing it and
constructing a [[Reponse]]

#### Parameters

| Name  | Type                              |
| :---- | :-------------------------------- |
| `req` | [`Request`](../transport.Request) |

#### Returns

`Promise`<[`Response`](../transport.Response)\>

#### Defined in

[core/src/server.ts:1943](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1943)

---

### log

▸ **log**(`type`, `context`, `data?`): [`LogEvent`](../logging.LogEvent)

#### Parameters

| Name      | Type                                         |
| :-------- | :------------------------------------------- |
| `type`    | `string`                                     |
| `context` | [`Context`](../../interfaces/server.Context) |
| `data`    | `any`                                        |

#### Returns

[`LogEvent`](../logging.LogEvent)

#### Defined in

[core/src/server.ts:1921](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1921)

---

### makeController

▸ **makeController**(`ctx`): `C`

#### Parameters

| Name  | Type                                         |
| :---- | :------------------------------------------- |
| `ctx` | [`Context`](../../interfaces/server.Context) |

#### Returns

`C`

#### Defined in

[core/src/server.ts:1917](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1917)

---

### updateMetaData

▸ **updateMetaData**(`org`): `Promise`<`void`\>

#### Parameters

| Name  | Type                |
| :---- | :------------------ |
| `org` | [`Org`](../org.Org) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/server.ts:1986](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1986)

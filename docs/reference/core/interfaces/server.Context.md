---
title: "Interface: Context"
linkTitle: "Context"
slug: "server.Context"
---

[server](../../modules/server).Context

Request context

## Properties

### account

• `Optional` **account**: [`Account`](../../classes/account.Account)

[Account](../../classes/account.Account) associated with current session

#### Defined in

[core/src/server.ts:103](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L103)

---

### auth

• `Optional` **auth**: [`Auth`](../../classes/auth.Auth)

[Auth](../../classes/auth.Auth) associated with current session

#### Defined in

[core/src/server.ts:106](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L106)

---

### device

• `Optional` **device**: [`DeviceInfo`](../../classes/platform.DeviceInfo)

Information about the device the request is coming from

#### Defined in

[core/src/server.ts:112](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L112)

---

### location

• `Optional` **location**: `Object`

#### Type declaration

| Name       | Type     |
| :--------- | :------- |
| `city?`    | `string` |
| `country?` | `string` |

#### Defined in

[core/src/server.ts:114](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L114)

---

### provisioning

• `Optional` **provisioning**:
[`Provisioning`](../../classes/provisioning.Provisioning)

[Auth](../../classes/auth.Auth) associated with current session

#### Defined in

[core/src/server.ts:109](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L109)

---

### session

• `Optional` **session**: [`Session`](../../classes/session.Session)

Current [Session](../../classes/session.Session)

#### Defined in

[core/src/server.ts:100](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L100)

---
title: "Interface: ClientState"
linkTitle: "ClientState"
slug: "client.ClientState"
---

[client](../../modules/client).ClientState

Client state, keeping track of [session](client.ClientState.md#session),
[account](client.ClientState.md#account) and
[device](client.ClientState.md#device) info

## Properties

### account

• **account**: `null` \| [`Account`](../../classes/account.Account)

Currently logged in account

#### Defined in

[core/src/client.ts:16](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/client.ts#L16)

---

### device

• **device**: [`DeviceInfo`](../../classes/platform.DeviceInfo)

info about current device

#### Defined in

[core/src/client.ts:18](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/client.ts#L18)

---

### session

• **session**: `null` \| [`Session`](../../classes/session.Session)

Current session

#### Defined in

[core/src/client.ts:14](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/client.ts#L14)

---
title: "Interface: LegacyServer"
linkTitle: "LegacyServer"
slug: "server.LegacyServer"
---

[server](../../modules/server).LegacyServer

## Methods

### deleteAccount

▸ **deleteAccount**(`email`): `Promise`<`void`\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `email` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/server.ts:122](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L122)

---

### getStore

▸ **getStore**(`email`): `Promise`<`null` \|
[`PBES2Container`](../../classes/container.PBES2Container)\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `email` | `string` |

#### Returns

`Promise`<`null` \| [`PBES2Container`](../../classes/container.PBES2Container)\>

#### Defined in

[core/src/server.ts:121](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L121)

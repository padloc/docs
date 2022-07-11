---
title: "Module: base64"
linkTitle: "base64"
slug: "base64"
---

## Functions

### byteLength

▸ **byteLength**(`b64`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b64` | `string` |

#### Returns

`number`

#### Defined in

[core/src/base64.ts:28](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/base64.ts#L28)

___

### fromByteArray

▸ **fromByteArray**(`uint8`, `urlSafe?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `uint8` | `Uint8Array` | `undefined` |
| `urlSafe` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

[core/src/base64.ts:103](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/base64.ts#L103)

___

### isBase64

▸ **isBase64**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/base64.ts:37](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/base64.ts#L37)

___

### toByteArray

▸ **toByteArray**(`b64`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b64` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[core/src/base64.ts:46](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/base64.ts#L46)

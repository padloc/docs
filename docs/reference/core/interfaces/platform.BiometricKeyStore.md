---
title: "Interface: BiometricKeyStore"
linkTitle: "BiometricKeyStore"
slug: "platform.BiometricKeyStore"
---

[platform](../../modules/platform).BiometricKeyStore

## Methods

### getKey

▸ **getKey**(`id`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/platform.ts:58](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L58)

---

### isSupported

▸ **isSupported**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/platform.ts:57](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L57)

---

### storeKey

▸ **storeKey**(`id`, `key`): `Promise`<`void`\>

#### Parameters

| Name  | Type         |
| :---- | :----------- |
| `id`  | `string`     |
| `key` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/platform.ts:59](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L59)

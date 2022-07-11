---
title: "Class: StubBiometricKeyStore"
linkTitle: "StubBiometricKeyStore"
slug: "platform.StubBiometricKeyStore"
---

[platform](../../modules/platform).StubBiometricKeyStore

## Constructors

### constructor

• **new StubBiometricKeyStore**()

## Methods

### getKey

▸ **getKey**(`_id`): `Promise`<`Uint8Array`\>

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `_id` | `string` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/platform.ts:66](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L66)

---

### isSupported

▸ **isSupported**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/platform.ts:63](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L63)

---

### storeKey

▸ **storeKey**(`_id`, `_key`): `Promise`<`void`\>

#### Parameters

| Name   | Type         |
| :----- | :----------- |
| `_id`  | `string`     |
| `_key` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/platform.ts:69](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L69)

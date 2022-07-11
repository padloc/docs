---
title: "Module: encoding"
linkTitle: "encoding"
slug: "encoding"
---

## Classes

-   [Serializable](../../classes/encoding.Serializable)

## Interfaces

-   [SerializationOptions](../../interfaces/encoding.SerializationOptions)

## References

### base32ToBytes

Re-exports [base32ToBytes](base32.md#base32tobytes)

---

### bytesToBase32

Re-exports [bytesToBase32](base32.md#bytestobase32)

---

### isBase64

Re-exports [isBase64](base64.md#isbase64)

## Type Aliases

### SerializableConstructor

Ƭ **SerializableConstructor**: (...`args`: `any`[]) =>
[`Serializable`](../../classes/encoding.Serializable)

#### Type declaration

• (...`args`)

Generic type representing the constructor of a class extending
[Serializable](../../classes/encoding.Serializable)

##### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Defined in

[core/src/encoding.ts:317](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L317)

## Functions

### AsBigInteger

▸ **AsBigInteger**(`toProperty?`): (`proto`:
[`Serializable`](../../classes/encoding.Serializable), `prop`: `string`) =>
`void`

Decorator for defining request handler methods

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `toProperty?` | `string` |

#### Returns

`fn`

▸ (`proto`, `prop`): `void`

##### Parameters

| Name    | Type                                                  |
| :------ | :---------------------------------------------------- |
| `proto` | [`Serializable`](../../classes/encoding.Serializable) |
| `prop`  | `string`                                              |

##### Returns

`void`

#### Defined in

[core/src/encoding.ts:43](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L43)

---

### AsBytes

▸ **AsBytes**(`toProperty?`): (`proto`:
[`Serializable`](../../classes/encoding.Serializable), `prop`: `string`) =>
`void`

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `toProperty?` | `string` |

#### Returns

`fn`

▸ (`proto`, `prop`): `void`

##### Parameters

| Name    | Type                                                  |
| :------ | :---------------------------------------------------- |
| `proto` | [`Serializable`](../../classes/encoding.Serializable) |
| `prop`  | `string`                                              |

##### Returns

`void`

#### Defined in

[core/src/encoding.ts:64](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L64)

---

### AsDate

▸ **AsDate**(`toProperty?`): (`proto`:
[`Serializable`](../../classes/encoding.Serializable), `prop`: `string`) =>
`void`

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `toProperty?` | `string` |

#### Returns

`fn`

▸ (`proto`, `prop`): `void`

##### Parameters

| Name    | Type                                                  |
| :------ | :---------------------------------------------------- |
| `proto` | [`Serializable`](../../classes/encoding.Serializable) |
| `prop`  | `string`                                              |

##### Returns

`void`

#### Defined in

[core/src/encoding.ts:83](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L83)

---

### AsSerializable

▸ **AsSerializable**(`cls`, `toProperty?`): (`proto`:
[`Serializable`](../../classes/encoding.Serializable), `prop`: `string`) =>
`void`

Decorator for defining request handler methods

#### Parameters

| Name          | Type                                                             |
| :------------ | :--------------------------------------------------------------- |
| `cls`         | [`SerializableConstructor`](encoding.md#serializableconstructor) |
| `toProperty?` | `string`                                                         |

#### Returns

`fn`

▸ (`proto`, `prop`): `void`

##### Parameters

| Name    | Type                                                  |
| :------ | :---------------------------------------------------- |
| `proto` | [`Serializable`](../../classes/encoding.Serializable) |
| `prop`  | `string`                                              |

##### Returns

`void`

#### Defined in

[core/src/encoding.ts:55](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L55)

---

### AsSet

▸ **AsSet**(`toProperty?`): (`proto`:
[`Serializable`](../../classes/encoding.Serializable), `prop`: `string`) =>
`void`

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `toProperty?` | `string` |

#### Returns

`fn`

▸ (`proto`, `prop`): `void`

##### Parameters

| Name    | Type                                                  |
| :------ | :---------------------------------------------------- |
| `proto` | [`Serializable`](../../classes/encoding.Serializable) |
| `prop`  | `string`                                              |

##### Returns

`void`

#### Defined in

[core/src/encoding.ts:73](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L73)

---

### Exclude

▸ **Exclude**(): (`proto`:
[`Serializable`](../../classes/encoding.Serializable), `prop`: `string`) =>
`void`

#### Returns

`fn`

▸ (`proto`, `prop`): `void`

##### Parameters

| Name    | Type                                                  |
| :------ | :---------------------------------------------------- |
| `proto` | [`Serializable`](../../classes/encoding.Serializable) |
| `prop`  | `string`                                              |

##### Returns

`void`

#### Defined in

[core/src/encoding.ts:98](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L98)

---

### Serialize

▸ **Serialize**(`opts`): (`proto`:
[`Serializable`](../../classes/encoding.Serializable), `prop`: `string`) =>
`void`

#### Parameters

| Name   | Type                                                                                 |
| :----- | :----------------------------------------------------------------------------------- |
| `opts` | `Partial`<[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)\> |

#### Returns

`fn`

▸ (`proto`, `prop`): `void`

##### Parameters

| Name    | Type                                                  |
| :------ | :---------------------------------------------------- |
| `proto` | [`Serializable`](../../classes/encoding.Serializable) |
| `prop`  | `string`                                              |

##### Returns

`void`

#### Defined in

[core/src/encoding.ts:105](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L105)

---

### base64ByteLength

▸ **base64ByteLength**(`inp`): `number`

Returns the byte length of a base64 string

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `inp` | `string` |

#### Returns

`number`

#### Defined in

[core/src/encoding.ts:406](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L406)

---

### base64ToBytes

▸ **base64ToBytes**(`inp`): `Uint8Array`

Converts a base64 string to a byte array

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `inp` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[core/src/encoding.ts:357](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L357)

---

### base64ToHex

▸ **base64ToHex**(`b64`): `string`

Converts a base64 string to its hexadecimal representation

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `b64` | `string` |

#### Returns

`string`

#### Defined in

[core/src/encoding.ts:444](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L444)

---

### base64ToString

▸ **base64ToString**(`inp`): `string`

Converts the base64 representation of a utf-a string to it's original
representation

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `inp` | `string` |

#### Returns

`string`

#### Defined in

[core/src/encoding.ts:398](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L398)

---

### bytesToBase64

▸ **bytesToBase64**(`inp`, `urlSafe?`): `string`

Converts a byte array to a base64 string

#### Parameters

| Name      | Type         | Default value |
| :-------- | :----------- | :------------ |
| `inp`     | `Uint8Array` | `undefined`   |
| `urlSafe` | `boolean`    | `true`        |

#### Returns

`string`

#### Defined in

[core/src/encoding.ts:346](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L346)

---

### bytesToHex

▸ **bytesToHex**(`bytes`): `string`

Converts a byte array to its hexadecimal representation

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[core/src/encoding.ts:428](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L428)

---

### bytesToNum

▸ **bytesToNum**(`bytes`): `number`

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

`number`

#### Defined in

[core/src/encoding.ts:459](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L459)

---

### bytesToString

▸ **bytesToString**(`bytes`, `encoding?`): `string`

Converts a byte array to an utf-8 string

#### Parameters

| Name       | Type         | Default value |
| :--------- | :----------- | :------------ |
| `bytes`    | `Uint8Array` | `undefined`   |
| `encoding` | `string`     | `"utf-8"`     |

#### Returns

`string`

#### Defined in

[core/src/encoding.ts:379](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L379)

---

### concatBytes

▸ **concatBytes**(`arrs`, `delimiter?`): `Uint8Array`

Concatenates a number of Uint8Arrays to a single array

#### Parameters

| Name         | Type           |
| :----------- | :------------- |
| `arrs`       | `Uint8Array`[] |
| `delimiter?` | `number`       |

#### Returns

`Uint8Array`

#### Defined in

[core/src/encoding.ts:466](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L466)

---

### equalBytes

▸ **equalBytes**(`a`, `b`): `boolean`

Checks two byte arrays for equality

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `a`  | `Uint8Array` |
| `b`  | `Uint8Array` |

#### Returns

`boolean`

#### Defined in

[core/src/encoding.ts:489](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L489)

---

### hexToBase64

▸ **hexToBase64**(`hex`): `string`

Converts a hex string to its base64 representation

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `hex` | `string` |

#### Returns

`string`

#### Defined in

[core/src/encoding.ts:451](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L451)

---

### hexToBytes

▸ **hexToBytes**(`str`): `Uint8Array`

Converts a hex string to a byte array

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `str` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[core/src/encoding.ts:413](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L413)

---

### marshal

▸ **marshal**(`obj`): `string`

Creates a string from a raw javascript object

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `obj` | `object` |

#### Returns

`string`

#### Defined in

[core/src/encoding.ts:322](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L322)

---

### numToBytes

▸ **numToBytes**(`num`): `Uint8Array`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `num` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[core/src/encoding.ts:455](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L455)

---

### stringToBase64

▸ **stringToBase64**(`str`, `urlSafe?`): `string`

Converts a utf-8 string to its base64 representation

#### Parameters

| Name      | Type      | Default value |
| :-------- | :-------- | :------------ |
| `str`     | `string`  | `undefined`   |
| `urlSafe` | `boolean` | `true`        |

#### Returns

`string`

#### Defined in

[core/src/encoding.ts:390](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L390)

---

### stringToBytes

▸ **stringToBytes**(`str`): `Uint8Array`

Converts a utf-8 string to a byte array

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `str` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[core/src/encoding.ts:368](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L368)

---

### unmarshal

▸ **unmarshal**(`str`): `any`

Creates a raw javascript object from a string

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `str` | `string` |

#### Returns

`any`

#### Defined in

[core/src/encoding.ts:333](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L333)

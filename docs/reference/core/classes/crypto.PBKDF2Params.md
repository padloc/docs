---
title: "Class: PBKDF2Params"
linkTitle: "PBKDF2Params"
slug: "crypto.PBKDF2Params"
---

[crypto](../../modules/crypto).PBKDF2Params

## Hierarchy

-   [`Serializable`](../encoding.Serializable)

    ↳ **`PBKDF2Params`**

## Constructors

### constructor

• **new PBKDF2Params**(`props?`)

#### Parameters

| Name     | Type                                                 |
| :------- | :--------------------------------------------------- |
| `props?` | `Partial`<[`PBKDF2Params`](../crypto.PBKDF2Params)\> |

#### Overrides

[Serializable](../encoding.Serializable).[constructor](../encoding.Serializable#constructor)

#### Defined in

[core/src/crypto.ts:79](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L79)

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Serializable](../encoding.Serializable).[\_propertySerializationOptions](../encoding.Serializable#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### algorithm

• **algorithm**: `"PBKDF2"`

#### Defined in

[core/src/crypto.ts:71](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L71)

---

### hash

• **hash**: `"SHA-256"`

#### Defined in

[core/src/crypto.ts:72](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L72)

---

### iterations

• **iterations**: `number` = `PBKDF2_ITER_DEFAULT`

#### Defined in

[core/src/crypto.ts:74](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L74)

---

### keySize

• **keySize**: `256`

#### Defined in

[core/src/crypto.ts:73](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L73)

---

### salt

• **salt**: `Uint8Array`

#### Defined in

[core/src/crypto.ts:77](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L77)

## Accessors

### kind

• `get` **kind**(): `string`

A string representing the objects "type", useful for segmenting storage, among
other things. Defaults to the lowercase class name, but can be overwritten by
subclasses

#### Returns

`string`

#### Inherited from

Serializable.kind

#### Defined in

[core/src/encoding.ts:159](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L159)

## Methods

### \_fromRaw

▸ `Protected` **\_fromRaw**(`raw`): `void`

Restore values from a raw object. The default implementation simply copies over
all iterable properties from the base object. Overwrite this method for
properties that require special treatment

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

`void`

#### Inherited from

[Serializable](../encoding.Serializable).[\_fromRaw](../encoding.Serializable#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](../crypto.PBKDF2Params#toraw) on any
properties that are themselfes instances of
[Serializable](../encoding.Serializable). This method should be overwritten by
subclasses if certain properties require special treatment.

#### Parameters

| Name      | Type                    |
| :-------- | :---------------------- |
| `version` | `undefined` \| `string` |

#### Returns

`any`

#### Inherited from

[Serializable](../encoding.Serializable).[\_toRaw](../encoding.Serializable#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`PBKDF2Params`](../crypto.PBKDF2Params)

Creates a deep clone of the object

#### Returns

[`PBKDF2Params`](../crypto.PBKDF2Params)

#### Inherited from

[Serializable](../encoding.Serializable).[clone](../encoding.Serializable#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`PBKDF2Params`](../crypto.PBKDF2Params)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`PBKDF2Params`](../crypto.PBKDF2Params)

#### Inherited from

[Serializable](../encoding.Serializable).[fromBytes](../encoding.Serializable#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`PBKDF2Params`](../crypto.PBKDF2Params)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`PBKDF2Params`](../crypto.PBKDF2Params)

#### Inherited from

[Serializable](../encoding.Serializable).[fromJSON](../encoding.Serializable#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`PBKDF2Params`](../crypto.PBKDF2Params)

Restores propertiers from a raw object of the same form generated by
[toRaw](../crypto.PBKDF2Params#toraw). The base implementation blindly copies
over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../crypto.PBKDF2Params#_fromraw) method
to implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`PBKDF2Params`](../crypto.PBKDF2Params)

#### Inherited from

[Serializable](../encoding.Serializable).[fromRaw](../encoding.Serializable#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Inherited from

[Serializable](../encoding.Serializable).[toBytes](../encoding.Serializable#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Inherited from

[Serializable](../encoding.Serializable).[toJSON](../encoding.Serializable#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](../crypto.PBKDF2Params#_toraw) for subclass-specific
behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Inherited from

[Serializable](../encoding.Serializable).[toRaw](../encoding.Serializable#toraw)

#### Defined in

[core/src/encoding.ts:179](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L179)

---

### validate

▸ **validate**(): `boolean`

This is called during deserialization and should verify that all properties have
been populated with values of the correct type. Subclasses should implement this
method based on their class structure.

#### Returns

`boolean`

#### Overrides

[Serializable](../encoding.Serializable).[validate](../encoding.Serializable#validate)

#### Defined in

[core/src/crypto.ts:84](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L84)

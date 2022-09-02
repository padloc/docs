---
title: "Class: SRPSession"
linkTitle: "SRPSession"
slug: "srp.SRPSession"
---

[srp](../../modules/srp).SRPSession

## Hierarchy

-   [`Serializable`](../encoding.Serializable)

    ↳ **`SRPSession`**

## Constructors

### constructor

• **new SRPSession**()

#### Inherited from

[Serializable](../encoding.Serializable).[constructor](../encoding.Serializable#constructor)

## Properties

### A

• `Optional` **A**: `BigInteger`

#### Defined in

[core/src/srp.ts:149](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L149)

---

### B

• `Optional` **B**: `BigInteger`

#### Defined in

[core/src/srp.ts:153](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L153)

---

### K

• `Optional` **K**: `BigInteger`

#### Defined in

[core/src/srp.ts:155](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L155)

---

### M1

• `Optional` **M1**: `BigInteger`

#### Defined in

[core/src/srp.ts:157](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L157)

---

### M2

• `Optional` **M2**: `BigInteger`

#### Defined in

[core/src/srp.ts:159](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L159)

---

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Serializable](../encoding.Serializable).[\_propertySerializationOptions](../encoding.Serializable#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### a

• `Optional` **a**: `BigInteger`

#### Defined in

[core/src/srp.ts:147](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L147)

---

### b

• `Optional` **b**: `BigInteger`

#### Defined in

[core/src/srp.ts:151](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L151)

---

### created

• **created**: `Date`

#### Defined in

[core/src/srp.ts:136](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L136)

---

### id

• **id**: `string` = `""`

#### Defined in

[core/src/srp.ts:133](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L133)

---

### v

• `Optional` **v**: `BigInteger`

#### Defined in

[core/src/srp.ts:145](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L145)

---

### x

• `Optional` **x**: `BigInteger`

#### Defined in

[core/src/srp.ts:143](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L143)

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
[[exlude]] array and calls [toRaw](../srp.SRPSession#toraw) on any properties
that are themselfes instances of [Serializable](../encoding.Serializable). This
method should be overwritten by subclasses if certain properties require special
treatment.

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

▸ **clone**(): [`SRPSession`](../srp.SRPSession)

Creates a deep clone of the object

#### Returns

[`SRPSession`](../srp.SRPSession)

#### Inherited from

[Serializable](../encoding.Serializable).[clone](../encoding.Serializable#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`SRPSession`](../srp.SRPSession)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`SRPSession`](../srp.SRPSession)

#### Inherited from

[Serializable](../encoding.Serializable).[fromBytes](../encoding.Serializable#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`SRPSession`](../srp.SRPSession)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`SRPSession`](../srp.SRPSession)

#### Inherited from

[Serializable](../encoding.Serializable).[fromJSON](../encoding.Serializable#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`SRPSession`](../srp.SRPSession)

Restores propertiers from a raw object of the same form generated by
[toRaw](../srp.SRPSession#toraw). The base implementation blindly copies over
values from the raw object via `Object.assign` so subclasses should explictly
process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../srp.SRPSession#_fromraw) method to
implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`SRPSession`](../srp.SRPSession)

#### Inherited from

[Serializable](../encoding.Serializable).[fromRaw](../encoding.Serializable#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/srp.ts:138](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L138)

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
versions. Use [\_toRaw](../srp.SRPSession#_toraw) for subclass-specific
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

#### Inherited from

[Serializable](../encoding.Serializable).[validate](../encoding.Serializable#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

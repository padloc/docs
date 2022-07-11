---
title: "Class: CreateSessionParams"
linkTitle: "CreateSessionParams"
slug: "v3_compat.CreateSessionParams"
---

[v3-compat](../../modules/v3_compat).CreateSessionParams

Parameters for creating a new [Session](../session.Session) through
[[API.createSession]]

## Hierarchy

-   [`Serializable`](../encoding.Serializable)

    ↳ **`CreateSessionParams`**

## Constructors

### constructor

• **new CreateSessionParams**(`props?`)

#### Parameters

| Name     | Type                                                                  |
| :------- | :-------------------------------------------------------------------- |
| `props?` | `Partial`<[`CreateSessionParams`](../v3_compat.CreateSessionParams)\> |

#### Overrides

[Serializable](../encoding.Serializable).[constructor](encoding.Serializable.md#constructor)

#### Defined in

[core/src/v3-compat.ts:155](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/v3-compat.ts#L155)

## Properties

### A

• **A**: `Uint8Array`

Random value used form SRP session negotiation

#### Defined in

[core/src/v3-compat.ts:153](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/v3-compat.ts#L153)

---

### M

• **M**: `Uint8Array`

Verification value used for SRP session negotiation

#### Defined in

[core/src/v3-compat.ts:149](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/v3-compat.ts#L149)

---

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Serializable](../encoding.Serializable).[\_propertySerializationOptions](encoding.Serializable.md#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### account

• **account**: `string` = `""`

The id of the [Account](../account.Account) to create the session for

#### Defined in

[core/src/v3-compat.ts:145](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/v3-compat.ts#L145)

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

[Serializable](../encoding.Serializable).[\_fromRaw](encoding.Serializable.md#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](v3_compat.CreateSessionParams.md#toraw) on
any properties that are themselfes instances of
[Serializable](../encoding.Serializable). This method should be overwritten by
subclasses if certain properties require special treatment.

#### Parameters

| Name      | Type                    |
| :-------- | :---------------------- |
| `version` | `undefined` \| `string` |

#### Returns

`any`

#### Inherited from

[Serializable](../encoding.Serializable).[\_toRaw](encoding.Serializable.md#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`CreateSessionParams`](../v3_compat.CreateSessionParams)

Creates a deep clone of the object

#### Returns

[`CreateSessionParams`](../v3_compat.CreateSessionParams)

#### Inherited from

[Serializable](../encoding.Serializable).[clone](encoding.Serializable.md#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`):
[`CreateSessionParams`](../v3_compat.CreateSessionParams)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`CreateSessionParams`](../v3_compat.CreateSessionParams)

#### Inherited from

[Serializable](../encoding.Serializable).[fromBytes](encoding.Serializable.md#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`):
[`CreateSessionParams`](../v3_compat.CreateSessionParams)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`CreateSessionParams`](../v3_compat.CreateSessionParams)

#### Inherited from

[Serializable](../encoding.Serializable).[fromJSON](encoding.Serializable.md#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`CreateSessionParams`](../v3_compat.CreateSessionParams)

Restores propertiers from a raw object of the same form generated by
[toRaw](v3_compat.CreateSessionParams.md#toraw). The base implementation blindly
copies over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected
[\_fromRaw](v3_compat.CreateSessionParams.md#_fromraw) method to implement
subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`CreateSessionParams`](../v3_compat.CreateSessionParams)

#### Inherited from

[Serializable](../encoding.Serializable).[fromRaw](encoding.Serializable.md#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Inherited from

[Serializable](../encoding.Serializable).[toBytes](encoding.Serializable.md#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Inherited from

[Serializable](../encoding.Serializable).[toJSON](encoding.Serializable.md#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](v3_compat.CreateSessionParams.md#_toraw) for
subclass-specific behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Inherited from

[Serializable](../encoding.Serializable).[toRaw](encoding.Serializable.md#toraw)

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

[Serializable](../encoding.Serializable).[validate](encoding.Serializable.md#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

---
title: "Class: Response"
linkTitle: "Response"
slug: "transport.Response"
---

[transport](../../modules/transport).Response

RPC response object

## Hierarchy

-   [`Serializable`](../encoding.Serializable)

    ↳ **`Response`**

## Constructors

### constructor

• **new Response**()

#### Inherited from

[Serializable](../encoding.Serializable).[constructor](../encoding.Serializable#constructor)

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Serializable](../encoding.Serializable).[\_propertySerializationOptions](../encoding.Serializable#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### auth

• `Optional` **auth**:
[`RequestAuthentication`](../transport.RequestAuthentication)

Data used to authenticate the response

#### Defined in

[core/src/transport.ts:60](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L60)

---

### error

• `Optional` **error**: [`Error`](../../interfaces/transport.Error) =
`undefined`

Error info, if an error occurred while processing the request

#### Defined in

[core/src/transport.ts:56](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L56)

---

### result

• **result**: `any` = `null`

The result of the RPC call

#### Defined in

[core/src/transport.ts:53](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L53)

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
[[exlude]] array and calls [toRaw](../transport.Response#toraw) on any
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

▸ **clone**(): [`Response`](../transport.Response)

Creates a deep clone of the object

#### Returns

[`Response`](../transport.Response)

#### Inherited from

[Serializable](../encoding.Serializable).[clone](../encoding.Serializable#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`Response`](../transport.Response)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`Response`](../transport.Response)

#### Inherited from

[Serializable](../encoding.Serializable).[fromBytes](../encoding.Serializable#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`Response`](../transport.Response)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`Response`](../transport.Response)

#### Inherited from

[Serializable](../encoding.Serializable).[fromJSON](../encoding.Serializable#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`Response`](../transport.Response)

Restores propertiers from a raw object of the same form generated by
[toRaw](../transport.Response#toraw). The base implementation blindly copies
over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../transport.Response#_fromraw) method to
implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`Response`](../transport.Response)

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
versions. Use [\_toRaw](../transport.Response#_toraw) for subclass-specific
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

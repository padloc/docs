---
title: "Class: LogEvent"
linkTitle: "LogEvent"
slug: "logging.LogEvent"
---

[logging](../../modules/logging).LogEvent

## Hierarchy

-   [`Storable`](../storage.Storable)

    ↳ **`LogEvent`**

## Constructors

### constructor

• **new LogEvent**(`type?`, `data?`)

#### Parameters

| Name    | Type     | Default value |
| :------ | :------- | :------------ |
| `type`  | `string` | `""`          |
| `data?` | `any`    | `undefined`   |

#### Overrides

[Storable](../storage.Storable).[constructor](../storage.Storable#constructor)

#### Defined in

[core/src/logging.ts:21](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/logging.ts#L21)

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Storable](../storage.Storable).[\_propertySerializationOptions](../storage.Storable#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### data

• `Optional` **data**: `any`

---

### id

• **id**: `string` = `""`

#### Overrides

[Storable](../storage.Storable).[id](../storage.Storable#id)

#### Defined in

[core/src/logging.ts:17](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/logging.ts#L17)

---

### time

• **time**: `Date`

#### Defined in

[core/src/logging.ts:19](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/logging.ts#L19)

---

### type

• **type**: `string` = `""`

## Accessors

### kind

• `get` **kind**(): `string`

A string representing the objects "type", useful for segmenting storage, among
other things. Defaults to the lowercase class name, but can be overwritten by
subclasses

#### Returns

`string`

#### Inherited from

Storable.kind

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

[Storable](../storage.Storable).[\_fromRaw](../storage.Storable#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](../logging.LogEvent#toraw) on any properties
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

[Storable](../storage.Storable).[\_toRaw](../storage.Storable#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`LogEvent`](../logging.LogEvent)

Creates a deep clone of the object

#### Returns

[`LogEvent`](../logging.LogEvent)

#### Inherited from

[Storable](../storage.Storable).[clone](../storage.Storable#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`LogEvent`](../logging.LogEvent)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`LogEvent`](../logging.LogEvent)

#### Inherited from

[Storable](../storage.Storable).[fromBytes](../storage.Storable#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`LogEvent`](../logging.LogEvent)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`LogEvent`](../logging.LogEvent)

#### Inherited from

[Storable](../storage.Storable).[fromJSON](../storage.Storable#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`LogEvent`](../logging.LogEvent)

Restores propertiers from a raw object of the same form generated by
[toRaw](../logging.LogEvent#toraw). The base implementation blindly copies over
values from the raw object via `Object.assign` so subclasses should explictly
process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../logging.LogEvent#_fromraw) method to
implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`LogEvent`](../logging.LogEvent)

#### Inherited from

[Storable](../storage.Storable).[fromRaw](../storage.Storable#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Inherited from

[Storable](../storage.Storable).[toBytes](../storage.Storable#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Inherited from

[Storable](../storage.Storable).[toJSON](../storage.Storable#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](../logging.LogEvent#_toraw) for subclass-specific
behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Inherited from

[Storable](../storage.Storable).[toRaw](../storage.Storable#toraw)

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

[Storable](../storage.Storable).[validate](../storage.Storable#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

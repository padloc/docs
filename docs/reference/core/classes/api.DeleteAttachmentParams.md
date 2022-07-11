---
title: "Class: DeleteAttachmentParams"
linkTitle: "DeleteAttachmentParams"
slug: "api.DeleteAttachmentParams"
---

[api](../../modules/api).DeleteAttachmentParams

## Hierarchy

-   [`GetAttachmentParams`](../api.GetAttachmentParams)

    ↳ **`DeleteAttachmentParams`**

## Constructors

### constructor

• **new DeleteAttachmentParams**(`props?`)

#### Parameters

| Name     | Type                                                            |
| :------- | :-------------------------------------------------------------- |
| `props?` | `Partial`<[`GetAttachmentParams`](../api.GetAttachmentParams)\> |

#### Inherited from

[GetAttachmentParams](../api.GetAttachmentParams).[constructor](api.GetAttachmentParams.md#constructor)

#### Defined in

[core/src/api.ts:305](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L305)

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[GetAttachmentParams](../api.GetAttachmentParams).[\_propertySerializationOptions](api.GetAttachmentParams.md#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### id

• **id**: `string` = `""`

The attachment id

#### Inherited from

[GetAttachmentParams](../api.GetAttachmentParams).[id](api.GetAttachmentParams.md#id)

#### Defined in

[core/src/api.ts:303](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L303)

---

### vault

• **vault**: `string` = `""`

The vault id

#### Inherited from

[GetAttachmentParams](../api.GetAttachmentParams).[vault](api.GetAttachmentParams.md#vault)

#### Defined in

[core/src/api.ts:300](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L300)

## Accessors

### kind

• `get` **kind**(): `string`

A string representing the objects "type", useful for segmenting storage, among
other things. Defaults to the lowercase class name, but can be overwritten by
subclasses

#### Returns

`string`

#### Inherited from

GetAttachmentParams.kind

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

[GetAttachmentParams](../api.GetAttachmentParams).[\_fromRaw](api.GetAttachmentParams.md#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](api.DeleteAttachmentParams.md#toraw) on any
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

[GetAttachmentParams](../api.GetAttachmentParams).[\_toRaw](api.GetAttachmentParams.md#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`DeleteAttachmentParams`](../api.DeleteAttachmentParams)

Creates a deep clone of the object

#### Returns

[`DeleteAttachmentParams`](../api.DeleteAttachmentParams)

#### Inherited from

[GetAttachmentParams](../api.GetAttachmentParams).[clone](api.GetAttachmentParams.md#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`):
[`DeleteAttachmentParams`](../api.DeleteAttachmentParams)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`DeleteAttachmentParams`](../api.DeleteAttachmentParams)

#### Inherited from

[GetAttachmentParams](../api.GetAttachmentParams).[fromBytes](api.GetAttachmentParams.md#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`):
[`DeleteAttachmentParams`](../api.DeleteAttachmentParams)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`DeleteAttachmentParams`](../api.DeleteAttachmentParams)

#### Inherited from

[GetAttachmentParams](../api.GetAttachmentParams).[fromJSON](api.GetAttachmentParams.md#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`DeleteAttachmentParams`](../api.DeleteAttachmentParams)

Restores propertiers from a raw object of the same form generated by
[toRaw](api.DeleteAttachmentParams.md#toraw). The base implementation blindly
copies over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](api.DeleteAttachmentParams.md#_fromraw)
method to implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`DeleteAttachmentParams`](../api.DeleteAttachmentParams)

#### Inherited from

[GetAttachmentParams](../api.GetAttachmentParams).[fromRaw](api.GetAttachmentParams.md#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Inherited from

[GetAttachmentParams](../api.GetAttachmentParams).[toBytes](api.GetAttachmentParams.md#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Inherited from

[GetAttachmentParams](../api.GetAttachmentParams).[toJSON](api.GetAttachmentParams.md#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](api.DeleteAttachmentParams.md#_toraw) for
subclass-specific behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Inherited from

[GetAttachmentParams](../api.GetAttachmentParams).[toRaw](api.GetAttachmentParams.md#toraw)

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

[GetAttachmentParams](../api.GetAttachmentParams).[validate](api.GetAttachmentParams.md#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

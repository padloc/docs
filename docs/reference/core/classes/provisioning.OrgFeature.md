---
title: "Class: OrgFeature"
linkTitle: "OrgFeature"
slug: "provisioning.OrgFeature"
---

[provisioning](../../modules/provisioning).OrgFeature

## Hierarchy

-   [`Feature`](../provisioning.Feature)

    ↳ **`OrgFeature`**

## Constructors

### constructor

• **new OrgFeature**(`vals?`)

#### Parameters

| Name   | Type                                             |
| :----- | :----------------------------------------------- |
| `vals` | `Partial`<[`Feature`](../provisioning.Feature)\> |

#### Inherited from

[Feature](../provisioning.Feature).[constructor](provisioning.Feature.md#constructor)

#### Defined in

[core/src/provisioning.ts:45](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L45)

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Feature](../provisioning.Feature).[\_propertySerializationOptions](provisioning.Feature.md#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### actionLabel

• `Optional` **actionLabel**: `string` = `undefined`

#### Inherited from

[Feature](../provisioning.Feature).[actionLabel](provisioning.Feature.md#actionlabel)

#### Defined in

[core/src/provisioning.ts:54](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L54)

---

### actionUrl

• `Optional` **actionUrl**: `string` = `undefined`

#### Inherited from

[Feature](../provisioning.Feature).[actionUrl](provisioning.Feature.md#actionurl)

#### Defined in

[core/src/provisioning.ts:53](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L53)

---

### disabled

• **disabled**: `boolean` = `false`

#### Inherited from

[Feature](../provisioning.Feature).[disabled](provisioning.Feature.md#disabled)

#### Defined in

[core/src/provisioning.ts:50](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L50)

---

### hidden

• **hidden**: `boolean` = `false`

#### Inherited from

[Feature](../provisioning.Feature).[hidden](provisioning.Feature.md#hidden)

#### Defined in

[core/src/provisioning.ts:51](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L51)

---

### message

• `Optional` **message**:
[`RichContent`](../modules/provisioning.md#richcontent) = `undefined`

#### Inherited from

[Feature](../provisioning.Feature).[message](provisioning.Feature.md#message)

#### Defined in

[core/src/provisioning.ts:52](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L52)

---

### messageOwner

• `Optional` **messageOwner**:
[`RichContent`](../modules/provisioning.md#richcontent) = `undefined`

#### Defined in

[core/src/provisioning.ts:58](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L58)

## Accessors

### kind

• `get` **kind**(): `string`

A string representing the objects "type", useful for segmenting storage, among
other things. Defaults to the lowercase class name, but can be overwritten by
subclasses

#### Returns

`string`

#### Inherited from

Feature.kind

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

[Feature](../provisioning.Feature).[\_fromRaw](provisioning.Feature.md#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](provisioning.OrgFeature.md#toraw) on any
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

[Feature](../provisioning.Feature).[\_toRaw](provisioning.Feature.md#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`OrgFeature`](../provisioning.OrgFeature)

Creates a deep clone of the object

#### Returns

[`OrgFeature`](../provisioning.OrgFeature)

#### Inherited from

[Feature](../provisioning.Feature).[clone](provisioning.Feature.md#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`OrgFeature`](../provisioning.OrgFeature)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`OrgFeature`](../provisioning.OrgFeature)

#### Inherited from

[Feature](../provisioning.Feature).[fromBytes](provisioning.Feature.md#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`OrgFeature`](../provisioning.OrgFeature)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`OrgFeature`](../provisioning.OrgFeature)

#### Inherited from

[Feature](../provisioning.Feature).[fromJSON](provisioning.Feature.md#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`OrgFeature`](../provisioning.OrgFeature)

Restores propertiers from a raw object of the same form generated by
[toRaw](provisioning.OrgFeature.md#toraw). The base implementation blindly
copies over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](provisioning.OrgFeature.md#_fromraw)
method to implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`OrgFeature`](../provisioning.OrgFeature)

#### Inherited from

[Feature](../provisioning.Feature).[fromRaw](provisioning.Feature.md#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Inherited from

[Feature](../provisioning.Feature).[toBytes](provisioning.Feature.md#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Inherited from

[Feature](../provisioning.Feature).[toJSON](provisioning.Feature.md#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](provisioning.OrgFeature.md#_toraw) for subclass-specific
behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Inherited from

[Feature](../provisioning.Feature).[toRaw](provisioning.Feature.md#toraw)

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

[Feature](../provisioning.Feature).[validate](provisioning.Feature.md#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

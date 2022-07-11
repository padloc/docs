---
title: "Class: OrgProvisioning"
linkTitle: "OrgProvisioning"
slug: "provisioning.OrgProvisioning"
---

[provisioning](../../modules/provisioning).OrgProvisioning

## Hierarchy

-   [`Storable`](../storage.Storable)

    ↳ **`OrgProvisioning`**

## Constructors

### constructor

• **new OrgProvisioning**(`vals?`)

#### Parameters

| Name   | Type                                                             |
| :----- | :--------------------------------------------------------------- |
| `vals` | `Partial`<[`OrgProvisioning`](../provisioning.OrgProvisioning)\> |

#### Overrides

[Storable](../storage.Storable).[constructor](storage.Storable.md#constructor)

#### Defined in

[core/src/provisioning.ts:153](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L153)

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Storable](../storage.Storable).[\_propertySerializationOptions](storage.Storable.md#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### actionLabel

• `Optional` **actionLabel**: `string` = `undefined`

#### Defined in

[core/src/provisioning.ts:179](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L179)

---

### actionUrl

• `Optional` **actionUrl**: `string` = `undefined`

#### Defined in

[core/src/provisioning.ts:177](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L177)

---

### autoCreate

• **autoCreate**: `boolean` = `false`

#### Defined in

[core/src/provisioning.ts:183](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L183)

---

### features

• **features**: [`OrgFeatures`](../provisioning.OrgFeatures)

#### Defined in

[core/src/provisioning.ts:189](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L189)

---

### metaData

• `Optional` **metaData**: `any` = `undefined`

#### Defined in

[core/src/provisioning.ts:181](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L181)

---

### orgId

• **orgId**: `string` = `""`

#### Defined in

[core/src/provisioning.ts:162](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L162)

---

### orgName

• **orgName**: `string` = `""`

#### Defined in

[core/src/provisioning.ts:164](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L164)

---

### owner

• **owner**: `Object`

#### Type declaration

| Name         | Type     |
| :----------- | :------- |
| `accountId?` | `string` |
| `email`      | `string` |

#### Defined in

[core/src/provisioning.ts:166](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L166)

---

### quota

• **quota**: [`OrgQuota`](../provisioning.OrgQuota)

#### Defined in

[core/src/provisioning.ts:186](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L186)

---

### status

• **status**:
[`ProvisioningStatus`](../../enums/provisioning.ProvisioningStatus) =
`ProvisioningStatus.Active`

#### Defined in

[core/src/provisioning.ts:171](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L171)

---

### statusLabel

• **statusLabel**: `string` = `""`

#### Defined in

[core/src/provisioning.ts:173](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L173)

---

### statusMessage

• **statusMessage**: `string` = `""`

#### Defined in

[core/src/provisioning.ts:175](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L175)

## Accessors

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Overrides

Storable.id

#### Defined in

[core/src/provisioning.ts:158](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L158)

---

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

[Storable](../storage.Storable).[\_fromRaw](storage.Storable.md#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](provisioning.OrgProvisioning.md#toraw) on any
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

[Storable](../storage.Storable).[\_toRaw](storage.Storable.md#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`OrgProvisioning`](../provisioning.OrgProvisioning)

Creates a deep clone of the object

#### Returns

[`OrgProvisioning`](../provisioning.OrgProvisioning)

#### Inherited from

[Storable](../storage.Storable).[clone](storage.Storable.md#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`OrgProvisioning`](../provisioning.OrgProvisioning)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`OrgProvisioning`](../provisioning.OrgProvisioning)

#### Inherited from

[Storable](../storage.Storable).[fromBytes](storage.Storable.md#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`OrgProvisioning`](../provisioning.OrgProvisioning)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`OrgProvisioning`](../provisioning.OrgProvisioning)

#### Inherited from

[Storable](../storage.Storable).[fromJSON](storage.Storable.md#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`OrgProvisioning`](../provisioning.OrgProvisioning)

Restores propertiers from a raw object of the same form generated by
[toRaw](provisioning.OrgProvisioning.md#toraw). The base implementation blindly
copies over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](provisioning.OrgProvisioning.md#_fromraw)
method to implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`OrgProvisioning`](../provisioning.OrgProvisioning)

#### Inherited from

[Storable](../storage.Storable).[fromRaw](storage.Storable.md#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Inherited from

[Storable](../storage.Storable).[toBytes](storage.Storable.md#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Inherited from

[Storable](../storage.Storable).[toJSON](storage.Storable.md#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](provisioning.OrgProvisioning.md#_toraw) for
subclass-specific behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Inherited from

[Storable](../storage.Storable).[toRaw](storage.Storable.md#toraw)

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

[Storable](../storage.Storable).[validate](storage.Storable.md#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

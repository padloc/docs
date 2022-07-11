---
title: "Class: AccountProvisioning"
linkTitle: "AccountProvisioning"
slug: "provisioning.AccountProvisioning"
---

[provisioning](../../modules/provisioning).AccountProvisioning

## Hierarchy

-   [`Storable`](../storage.Storable)

    ↳ **`AccountProvisioning`**

## Constructors

### constructor

• **new AccountProvisioning**(`vals?`)

#### Parameters

| Name   | Type                                                                     |
| :----- | :----------------------------------------------------------------------- |
| `vals` | `Partial`<[`AccountProvisioning`](../provisioning.AccountProvisioning)\> |

#### Overrides

[Storable](../storage.Storable).[constructor](storage.Storable.md#constructor)

#### Defined in

[core/src/provisioning.ts:118](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L118)

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Storable](../storage.Storable).[\_propertySerializationOptions](storage.Storable.md#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### accountId

• `Optional` **accountId**: `string` = `undefined`

#### Defined in

[core/src/provisioning.ts:127](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L127)

---

### actionLabel

• `Optional` **actionLabel**: `string` = `undefined`

#### Defined in

[core/src/provisioning.ts:137](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L137)

---

### actionUrl

• `Optional` **actionUrl**: `string` = `undefined`

#### Defined in

[core/src/provisioning.ts:135](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L135)

---

### billingPage

• `Optional` **billingPage**:
[`RichContent`](../modules/provisioning.md#richcontent) = `undefined`

#### Defined in

[core/src/provisioning.ts:141](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L141)

---

### email

• **email**: `string` = `""`

#### Defined in

[core/src/provisioning.ts:125](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L125)

---

### features

• **features**: [`AccountFeatures`](../provisioning.AccountFeatures)

#### Defined in

[core/src/provisioning.ts:147](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L147)

---

### id

• **id**: `string` = `""`

#### Overrides

[Storable](../storage.Storable).[id](storage.Storable.md#id)

#### Defined in

[core/src/provisioning.ts:123](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L123)

---

### metaData

• `Optional` **metaData**: `any` = `undefined`

#### Defined in

[core/src/provisioning.ts:139](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L139)

---

### orgs

• **orgs**: `string`[] = `[]`

#### Defined in

[core/src/provisioning.ts:149](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L149)

---

### quota

• **quota**: [`AccountQuota`](../provisioning.AccountQuota)

#### Defined in

[core/src/provisioning.ts:144](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L144)

---

### status

• **status**:
[`ProvisioningStatus`](../../enums/provisioning.ProvisioningStatus) =
`ProvisioningStatus.Active`

#### Defined in

[core/src/provisioning.ts:129](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L129)

---

### statusLabel

• **statusLabel**: `string` = `""`

#### Defined in

[core/src/provisioning.ts:131](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L131)

---

### statusMessage

• **statusMessage**: `string` \|
[`RichContent`](../modules/provisioning.md#richcontent) = `""`

#### Defined in

[core/src/provisioning.ts:133](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L133)

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

[Storable](../storage.Storable).[\_fromRaw](storage.Storable.md#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](provisioning.AccountProvisioning.md#toraw) on
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

[Storable](../storage.Storable).[\_toRaw](storage.Storable.md#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`AccountProvisioning`](../provisioning.AccountProvisioning)

Creates a deep clone of the object

#### Returns

[`AccountProvisioning`](../provisioning.AccountProvisioning)

#### Inherited from

[Storable](../storage.Storable).[clone](storage.Storable.md#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`):
[`AccountProvisioning`](../provisioning.AccountProvisioning)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`AccountProvisioning`](../provisioning.AccountProvisioning)

#### Inherited from

[Storable](../storage.Storable).[fromBytes](storage.Storable.md#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`):
[`AccountProvisioning`](../provisioning.AccountProvisioning)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`AccountProvisioning`](../provisioning.AccountProvisioning)

#### Inherited from

[Storable](../storage.Storable).[fromJSON](storage.Storable.md#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`):
[`AccountProvisioning`](../provisioning.AccountProvisioning)

Restores propertiers from a raw object of the same form generated by
[toRaw](provisioning.AccountProvisioning.md#toraw). The base implementation
blindly copies over values from the raw object via `Object.assign` so subclasses
should explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected
[\_fromRaw](provisioning.AccountProvisioning.md#_fromraw) method to implement
subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`AccountProvisioning`](../provisioning.AccountProvisioning)

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
versions. Use [\_toRaw](provisioning.AccountProvisioning.md#_toraw) for
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

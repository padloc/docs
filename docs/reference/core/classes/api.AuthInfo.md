---
title: "Class: AuthInfo"
linkTitle: "AuthInfo"
slug: "api.AuthInfo"
---

[api](../../modules/api).AuthInfo

## Hierarchy

-   [`Serializable`](../encoding.Serializable)

    ↳ **`AuthInfo`**

## Constructors

### constructor

• **new AuthInfo**(`vals?`)

#### Parameters

| Name   | Type                                      |
| :----- | :---------------------------------------- |
| `vals` | `Partial`<[`AuthInfo`](../api.AuthInfo)\> |

#### Overrides

[Serializable](../encoding.Serializable).[constructor](../encoding.Serializable#constructor)

#### Defined in

[core/src/api.ts:347](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L347)

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Serializable](../encoding.Serializable).[\_propertySerializationOptions](../encoding.Serializable#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### authenticators

• **authenticators**: [`AuthenticatorInfo`](../auth.AuthenticatorInfo)[] = `[]`

#### Defined in

[core/src/api.ts:356](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L356)

---

### invites

• **invites**: { `id`: `string` ; `orgId`: `string` ; `orgName`: `string` }[] =
`[]`

#### Defined in

[core/src/api.ts:369](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L369)

---

### keyStoreEntries

• **keyStoreEntries**: [`KeyStoreEntryInfo`](../key_store.KeyStoreEntryInfo)[] =
`[]`

#### Defined in

[core/src/api.ts:364](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L364)

---

### mfaOrder

• **mfaOrder**: `string`[] = `[]`

#### Defined in

[core/src/api.ts:358](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L358)

---

### provisioning

• **provisioning**: [`Provisioning`](../provisioning.Provisioning)

#### Defined in

[core/src/api.ts:367](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L367)

---

### sessions

• **sessions**: [`SessionInfo`](../session.SessionInfo)[] = `[]`

#### Defined in

[core/src/api.ts:361](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L361)

---

### trustedDevices

• **trustedDevices**: [`DeviceInfo`](../platform.DeviceInfo)[] = `[]`

#### Defined in

[core/src/api.ts:353](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L353)

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
[[exlude]] array and calls [toRaw](../api.AuthInfo#toraw) on any properties that
are themselfes instances of [Serializable](../encoding.Serializable). This
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

▸ **clone**(): [`AuthInfo`](../api.AuthInfo)

Creates a deep clone of the object

#### Returns

[`AuthInfo`](../api.AuthInfo)

#### Inherited from

[Serializable](../encoding.Serializable).[clone](../encoding.Serializable#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`AuthInfo`](../api.AuthInfo)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`AuthInfo`](../api.AuthInfo)

#### Inherited from

[Serializable](../encoding.Serializable).[fromBytes](../encoding.Serializable#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`AuthInfo`](../api.AuthInfo)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`AuthInfo`](../api.AuthInfo)

#### Inherited from

[Serializable](../encoding.Serializable).[fromJSON](../encoding.Serializable#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`AuthInfo`](../api.AuthInfo)

Restores propertiers from a raw object of the same form generated by
[toRaw](../api.AuthInfo#toraw). The base implementation blindly copies over
values from the raw object via `Object.assign` so subclasses should explictly
process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../api.AuthInfo#_fromraw) method to
implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`AuthInfo`](../api.AuthInfo)

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
versions. Use [\_toRaw](../api.AuthInfo#_toraw) for subclass-specific behavior.

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

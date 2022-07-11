---
title: "Class: AuthenticatorInfo"
linkTitle: "AuthenticatorInfo"
slug: "auth.AuthenticatorInfo"
---

[auth](../../modules/auth).AuthenticatorInfo

## Hierarchy

-   [`Serializable`](../encoding.Serializable)

    ↳ **`AuthenticatorInfo`**

## Constructors

### constructor

• **new AuthenticatorInfo**(`init?`)

#### Parameters

| Name   | Type                                                         |
| :----- | :----------------------------------------------------------- |
| `init` | `Partial`<[`AuthenticatorInfo`](../auth.AuthenticatorInfo)\> |

#### Overrides

[Serializable](../encoding.Serializable).[constructor](encoding.Serializable.md#constructor)

#### Defined in

[core/src/auth.ts:58](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L58)

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Serializable](../encoding.Serializable).[\_propertySerializationOptions](encoding.Serializable.md#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### created

• **created**: `Date`

Time of creation

#### Defined in

[core/src/auth.ts:40](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L40)

---

### description

• **description**: `string` = `""`

#### Defined in

[core/src/auth.ts:47](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L47)

---

### device

• `Optional` **device**: [`DeviceInfo`](../platform.DeviceInfo)

#### Defined in

[core/src/auth.ts:56](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L56)

---

### id

• **id**: `string` = `""`

#### Defined in

[core/src/auth.ts:45](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L45)

---

### lastUsed

• `Optional` **lastUsed**: `Date`

#### Defined in

[core/src/auth.ts:43](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L43)

---

### purposes

• **purposes**: [`AuthPurpose`](../../enums/auth.AuthPurpose)[] = `[]`

#### Defined in

[core/src/auth.ts:51](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L51)

---

### status

• **status**: [`AuthenticatorStatus`](../../enums/auth.AuthenticatorStatus) =
`AuthenticatorStatus.Registering`

#### Defined in

[core/src/auth.ts:53](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L53)

---

### type

• **type**: [`AuthType`](../../enums/auth.AuthType) = `AuthType.Email`

#### Defined in

[core/src/auth.ts:49](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L49)

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
[[exlude]] array and calls [toRaw](auth.AuthenticatorInfo.md#toraw) on any
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

[Serializable](../encoding.Serializable).[\_toRaw](encoding.Serializable.md#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`AuthenticatorInfo`](../auth.AuthenticatorInfo)

Creates a deep clone of the object

#### Returns

[`AuthenticatorInfo`](../auth.AuthenticatorInfo)

#### Inherited from

[Serializable](../encoding.Serializable).[clone](encoding.Serializable.md#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`AuthenticatorInfo`](../auth.AuthenticatorInfo)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`AuthenticatorInfo`](../auth.AuthenticatorInfo)

#### Inherited from

[Serializable](../encoding.Serializable).[fromBytes](encoding.Serializable.md#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`AuthenticatorInfo`](../auth.AuthenticatorInfo)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`AuthenticatorInfo`](../auth.AuthenticatorInfo)

#### Inherited from

[Serializable](../encoding.Serializable).[fromJSON](encoding.Serializable.md#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`AuthenticatorInfo`](../auth.AuthenticatorInfo)

Restores propertiers from a raw object of the same form generated by
[toRaw](auth.AuthenticatorInfo.md#toraw). The base implementation blindly copies
over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](auth.AuthenticatorInfo.md#_fromraw)
method to implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`AuthenticatorInfo`](../auth.AuthenticatorInfo)

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
versions. Use [\_toRaw](auth.AuthenticatorInfo.md#_toraw) for subclass-specific
behavior.

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

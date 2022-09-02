---
title: "Class: Authenticator<T>"
linkTitle: "Authenticator"
slug: "auth.Authenticator"
---

[auth](../../modules/auth).Authenticator

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Hierarchy

-   [`Serializable`](../encoding.Serializable)

    ↳ **`Authenticator`**

## Constructors

### constructor

• **new Authenticator**<`T`\>(`init?`)

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name   | Type                                                         |
| :----- | :----------------------------------------------------------- |
| `init` | `Partial`<[`Authenticator`](../auth.Authenticator)<`any`\>\> |

#### Overrides

[Serializable](../encoding.Serializable).[constructor](../encoding.Serializable#constructor)

#### Defined in

[core/src/auth.ts:91](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L91)

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Serializable](../encoding.Serializable).[\_propertySerializationOptions](../encoding.Serializable#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### created

• **created**: `Date`

Time of creation

#### Defined in

[core/src/auth.ts:67](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L67)

---

### description

• **description**: `string` = `""`

#### Defined in

[core/src/auth.ts:74](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L74)

---

### device

• `Optional` **device**: [`DeviceInfo`](../platform.DeviceInfo)

#### Defined in

[core/src/auth.ts:83](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L83)

---

### id

• **id**: `string` = `""`

#### Defined in

[core/src/auth.ts:72](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L72)

---

### lastUsed

• `Optional` **lastUsed**: `Date`

#### Defined in

[core/src/auth.ts:70](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L70)

---

### purposes

• **purposes**: [`AuthPurpose`](../../enums/auth.AuthPurpose)[] = `[]`

#### Defined in

[core/src/auth.ts:78](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L78)

---

### state

• `Optional` **state**: `T` = `undefined`

#### Defined in

[core/src/auth.ts:85](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L85)

---

### status

• **status**: [`AuthenticatorStatus`](../../enums/auth.AuthenticatorStatus) =
`AuthenticatorStatus.Registering`

#### Defined in

[core/src/auth.ts:80](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L80)

---

### type

• **type**: [`AuthType`](../../enums/auth.AuthType) = `AuthType.Email`

#### Defined in

[core/src/auth.ts:76](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L76)

## Accessors

### info

• `get` **info**(): [`AuthenticatorInfo`](../auth.AuthenticatorInfo)

#### Returns

[`AuthenticatorInfo`](../auth.AuthenticatorInfo)

#### Defined in

[core/src/auth.ts:87](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L87)

---

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
[[exlude]] array and calls [toRaw](../auth.Authenticator#toraw) on any
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

▸ **clone**(): [`Authenticator`](../auth.Authenticator)<`T`\>

Creates a deep clone of the object

#### Returns

[`Authenticator`](../auth.Authenticator)<`T`\>

#### Inherited from

[Serializable](../encoding.Serializable).[clone](../encoding.Serializable#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`Authenticator`](../auth.Authenticator)<`T`\>

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`Authenticator`](../auth.Authenticator)<`T`\>

#### Inherited from

[Serializable](../encoding.Serializable).[fromBytes](../encoding.Serializable#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`Authenticator`](../auth.Authenticator)<`T`\>

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`Authenticator`](../auth.Authenticator)<`T`\>

#### Inherited from

[Serializable](../encoding.Serializable).[fromJSON](../encoding.Serializable#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`Authenticator`](../auth.Authenticator)<`T`\>

Restores propertiers from a raw object of the same form generated by
[toRaw](../auth.Authenticator#toraw). The base implementation blindly copies
over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../auth.Authenticator#_fromraw) method to
implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`Authenticator`](../auth.Authenticator)<`T`\>

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

[core/src/auth.ts:96](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L96)

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
versions. Use [\_toRaw](../auth.Authenticator#_toraw) for subclass-specific
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

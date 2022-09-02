---
title: "Class: TotpAuthConfig"
linkTitle: "TotpAuthConfig"
slug: "auth_totp.TotpAuthConfig"
---

[auth/totp](../../modules/auth_totp).TotpAuthConfig

## Hierarchy

-   [`Config`](../config.Config)

    ↳ **`TotpAuthConfig`**

## Constructors

### constructor

• **new TotpAuthConfig**()

#### Inherited from

[Config](../config.Config).[constructor](../config.Config#constructor)

## Properties

### \_paramDefinitions

• **\_paramDefinitions**: `ParamDefinition`[]

#### Inherited from

[Config](../config.Config).[\_paramDefinitions](../config.Config#_paramdefinitions)

#### Defined in

[core/src/config.ts:34](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/config.ts#L34)

---

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Config](../config.Config).[\_propertySerializationOptions](../config.Config#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### digits

• **digits**: `number` = `6`

#### Defined in

[core/src/auth/totp.ts:12](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/totp.ts#L12)

---

### hash

• **hash**: `"SHA-256"` \| `"SHA-1"` = `"SHA-1"`

#### Defined in

[core/src/auth/totp.ts:15](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/totp.ts#L15)

---

### interval

• **interval**: `number` = `30`

#### Defined in

[core/src/auth/totp.ts:9](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/totp.ts#L9)

---

### window

• **window**: `number` = `1`

#### Defined in

[core/src/auth/totp.ts:18](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/totp.ts#L18)

## Accessors

### kind

• `get` **kind**(): `string`

A string representing the objects "type", useful for segmenting storage, among
other things. Defaults to the lowercase class name, but can be overwritten by
subclasses

#### Returns

`string`

#### Inherited from

Config.kind

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

[Config](../config.Config).[\_fromRaw](../config.Config#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](../auth_totp.TotpAuthConfig#toraw) on any
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

[Config](../config.Config).[\_toRaw](../config.Config#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`TotpAuthConfig`](../auth_totp.TotpAuthConfig)

Creates a deep clone of the object

#### Returns

[`TotpAuthConfig`](../auth_totp.TotpAuthConfig)

#### Inherited from

[Config](../config.Config).[clone](../config.Config#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`TotpAuthConfig`](../auth_totp.TotpAuthConfig)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`TotpAuthConfig`](../auth_totp.TotpAuthConfig)

#### Inherited from

[Config](../config.Config).[fromBytes](../config.Config#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromEnv

▸ **fromEnv**(`env`, `prefix?`): [`TotpAuthConfig`](../auth_totp.TotpAuthConfig)

#### Parameters

| Name     | Type     | Default value |
| :------- | :------- | :------------ |
| `env`    | `Object` | `undefined`   |
| `prefix` | `string` | `"PL_"`       |

#### Returns

[`TotpAuthConfig`](../auth_totp.TotpAuthConfig)

#### Inherited from

[Config](../config.Config).[fromEnv](../config.Config#fromenv)

#### Defined in

[core/src/config.ts:36](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/config.ts#L36)

---

### fromJSON

▸ **fromJSON**(`json`): [`TotpAuthConfig`](../auth_totp.TotpAuthConfig)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`TotpAuthConfig`](../auth_totp.TotpAuthConfig)

#### Inherited from

[Config](../config.Config).[fromJSON](../config.Config#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`TotpAuthConfig`](../auth_totp.TotpAuthConfig)

Restores propertiers from a raw object of the same form generated by
[toRaw](../auth_totp.TotpAuthConfig#toraw). The base implementation blindly
copies over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../auth_totp.TotpAuthConfig#_fromraw)
method to implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`TotpAuthConfig`](../auth_totp.TotpAuthConfig)

#### Inherited from

[Config](../config.Config).[fromRaw](../config.Config#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Inherited from

[Config](../config.Config).[toBytes](../config.Config#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toEnv

▸ **toEnv**(`prefix?`, `includeUndefined?`): `Object`

#### Parameters

| Name               | Type      | Default value |
| :----------------- | :-------- | :------------ |
| `prefix`           | `string`  | `"PL_"`       |
| `includeUndefined` | `boolean` | `false`       |

#### Returns

`Object`

#### Inherited from

[Config](../config.Config).[toEnv](../config.Config#toenv)

#### Defined in

[core/src/config.ts:74](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/config.ts#L74)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Inherited from

[Config](../config.Config).[toJSON](../config.Config#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](../auth_totp.TotpAuthConfig#_toraw) for
subclass-specific behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Inherited from

[Config](../config.Config).[toRaw](../config.Config#toraw)

#### Defined in

[core/src/config.ts:112](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/config.ts#L112)

---

### validate

▸ **validate**(): `boolean`

This is called during deserialization and should verify that all properties have
been populated with values of the correct type. Subclasses should implement this
method based on their class structure.

#### Returns

`boolean`

#### Inherited from

[Config](../config.Config).[validate](../config.Config#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

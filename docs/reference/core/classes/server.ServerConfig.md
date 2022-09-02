---
title: "Class: ServerConfig"
linkTitle: "ServerConfig"
slug: "server.ServerConfig"
---

[server](../../modules/server).ServerConfig

Server configuration

## Hierarchy

-   [`Config`](../config.Config)

    ↳ **`ServerConfig`**

## Constructors

### constructor

• **new ServerConfig**(`init?`)

#### Parameters

| Name   | Type                                                 |
| :----- | :--------------------------------------------------- |
| `init` | `Partial`<[`ServerConfig`](../server.ServerConfig)\> |

#### Overrides

[Config](../config.Config).[constructor](../config.Config#constructor)

#### Defined in

[core/src/server.ts:89](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L89)

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

### clientUrl

• **clientUrl**: `string` = `"http://localhost:8080"`

URL where the client interface is hosted. Used for creating links into the
application

#### Defined in

[core/src/server.ts:68](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L68)

---

### defaultAuthTypes

• **defaultAuthTypes**: [`AuthType`](../../enums/auth.AuthType)[]

#### Defined in

[core/src/server.ts:83](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L83)

---

### maxRequestAge

• **maxRequestAge**: `number`

Maximum accepted request age

#### Defined in

[core/src/server.ts:76](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L76)

---

### reportErrors

• **reportErrors**: `string` = `""`

Email address to report critical errors to

#### Defined in

[core/src/server.ts:72](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L72)

---

### scimServerUrl

• **scimServerUrl**: `string` = `"http://localhost:5000"`

URL where the SCIM directory server is hosted, if used. Used for creating URLs
for integrations

#### Defined in

[core/src/server.ts:87](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L87)

---

### verifyEmailOnSignup

• **verifyEmailOnSignup**: `boolean` = `true`

Whether or not to require email verification before creating an account

#### Defined in

[core/src/server.ts:80](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L80)

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
[[exlude]] array and calls [toRaw](../server.ServerConfig#toraw) on any
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

▸ **clone**(): [`ServerConfig`](../server.ServerConfig)

Creates a deep clone of the object

#### Returns

[`ServerConfig`](../server.ServerConfig)

#### Inherited from

[Config](../config.Config).[clone](../config.Config#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`ServerConfig`](../server.ServerConfig)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`ServerConfig`](../server.ServerConfig)

#### Inherited from

[Config](../config.Config).[fromBytes](../config.Config#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromEnv

▸ **fromEnv**(`env`, `prefix?`): [`ServerConfig`](../server.ServerConfig)

#### Parameters

| Name     | Type     | Default value |
| :------- | :------- | :------------ |
| `env`    | `Object` | `undefined`   |
| `prefix` | `string` | `"PL_"`       |

#### Returns

[`ServerConfig`](../server.ServerConfig)

#### Inherited from

[Config](../config.Config).[fromEnv](../config.Config#fromenv)

#### Defined in

[core/src/config.ts:36](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/config.ts#L36)

---

### fromJSON

▸ **fromJSON**(`json`): [`ServerConfig`](../server.ServerConfig)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`ServerConfig`](../server.ServerConfig)

#### Inherited from

[Config](../config.Config).[fromJSON](../config.Config#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`ServerConfig`](../server.ServerConfig)

Restores propertiers from a raw object of the same form generated by
[toRaw](../server.ServerConfig#toraw). The base implementation blindly copies
over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../server.ServerConfig#_fromraw) method
to implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`ServerConfig`](../server.ServerConfig)

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
versions. Use [\_toRaw](../server.ServerConfig#_toraw) for subclass-specific
behavior.

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

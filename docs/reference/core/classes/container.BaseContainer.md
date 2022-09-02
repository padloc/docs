---
title: "Class: BaseContainer"
linkTitle: "BaseContainer"
slug: "container.BaseContainer"
---

[container](../../modules/container).BaseContainer

Base class for all **Container** implementations. In general, a **Container** is
an object for holding data encrypted using a symmetric cipher. Implementations
vary mostly in how the encryption key is generated. Sub classes must implement
the [unlock](../container.BaseContainer#unlock) method and may likely also want
to augment [lock](../container.BaseContainer#lock),
[validate](../container.BaseContainer#validate),
[\_fromRaw](../container.BaseContainer#_fromraw) and
[\_toRaw](../container.BaseContainer#_toraw).

## Hierarchy

-   [`Serializable`](../encoding.Serializable)

    ↳ **`BaseContainer`**

    ↳↳ [`SimpleContainer`](../container.SimpleContainer)

    ↳↳ [`PBES2Container`](../container.PBES2Container)

    ↳↳ [`SharedContainer`](../container.SharedContainer)

## Constructors

### constructor

• **new BaseContainer**()

#### Inherited from

[Serializable](../encoding.Serializable).[constructor](../encoding.Serializable#constructor)

## Properties

### \_key

• `Protected` `Optional` **\_key**: `Uint8Array`

The key used for encryption. Sub classes must set this property in the
[unlock](../container.BaseContainer#unlock) method.

#### Defined in

[core/src/container.ts:33](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L33)

---

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Serializable](../encoding.Serializable).[\_propertySerializationOptions](../encoding.Serializable#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### encryptedData

• `Optional` **encryptedData**: `Uint8Array`

Encrypted data

#### Defined in

[core/src/container.ts:28](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L28)

---

### encryptionParams

• **encryptionParams**: [`AESEncryptionParams`](../crypto.AESEncryptionParams)

Parameters used for encryption of content data

#### Defined in

[core/src/container.ts:24](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L24)

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
[[exlude]] array and calls [toRaw](../container.BaseContainer#toraw) on any
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

▸ **clone**(): [`BaseContainer`](../container.BaseContainer)

Creates a deep clone of the object

#### Returns

[`BaseContainer`](../container.BaseContainer)

#### Overrides

[Serializable](../encoding.Serializable).[clone](../encoding.Serializable#clone)

#### Defined in

[core/src/container.ts:85](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L85)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`BaseContainer`](../container.BaseContainer)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`BaseContainer`](../container.BaseContainer)

#### Inherited from

[Serializable](../encoding.Serializable).[fromBytes](../encoding.Serializable#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`BaseContainer`](../container.BaseContainer)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`BaseContainer`](../container.BaseContainer)

#### Inherited from

[Serializable](../encoding.Serializable).[fromJSON](../encoding.Serializable#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`BaseContainer`](../container.BaseContainer)

Restores propertiers from a raw object of the same form generated by
[toRaw](../container.BaseContainer#toraw). The base implementation blindly
copies over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../container.BaseContainer#_fromraw)
method to implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`BaseContainer`](../container.BaseContainer)

#### Inherited from

[Serializable](../encoding.Serializable).[fromRaw](../encoding.Serializable#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### getData

▸ **getData**(): `Promise`<`Uint8Array`\>

Decrypts and extracts the plain text data from the container. This will usually
require unlocking the container first.

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/container.ts:61](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L61)

---

### lock

▸ **lock**(): `void`

Locks the container, removing the possibility to extract the plain text data via
[getData](../container.BaseContainer#getdata) until the container is unlocked
again. Subclasses extending this class must take care to delete any keys or
other sensitive data that may have been stored temporarily after unlocking the
container.

#### Returns

`void`

#### Defined in

[core/src/container.ts:81](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L81)

---

### setData

▸ **setData**(`data`): `Promise`<`void`\>

Encrypts the provided `data` and stores it in the container

#### Parameters

| Name   | Type         |
| :----- | :----------- |
| `data` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/container.ts:38](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L38)

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
versions. Use [\_toRaw](../container.BaseContainer#_toraw) for subclass-specific
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

### unlock

▸ `Abstract` **unlock**(`secret`): `Promise`<`void`\>

Unlocks the container, making it possible to extract the plain text data via
[getData](../container.BaseContainer#getdata). The type of **secret** provided
will differ based on the encryption scheme used by implemenations.

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `secret` | `unknown` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/container.ts:73](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L73)

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

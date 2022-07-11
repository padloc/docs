---
title: "Class: SimpleContainer"
linkTitle: "SimpleContainer"
slug: "container.SimpleContainer"
---

[container](../../modules/container).SimpleContainer

Most basic **Container** implementation where the encryption key is simply
passed explicitly.

## Hierarchy

-   [`BaseContainer`](../container.BaseContainer)

    ↳ **`SimpleContainer`**

    ↳↳ [`StoredMasterKey`](../app.StoredMasterKey)

    ↳↳ [`Attachment`](../attachment.Attachment)

    ↳↳ [`PublicKeyAuthClientData`](../auth_public_key.PublicKeyAuthClientData)

    ↳↳ [`Invite`](../invite.Invite)

## Constructors

### constructor

• **new SimpleContainer**()

#### Inherited from

[BaseContainer](../container.BaseContainer).[constructor](container.BaseContainer.md#constructor)

## Properties

### \_key

• `Protected` `Optional` **\_key**: `Uint8Array`

The key used for encryption. Sub classes must set this property in the
[unlock](container.SimpleContainer.md#unlock) method.

#### Inherited from

[BaseContainer](../container.BaseContainer).[\_key](container.BaseContainer.md#_key)

#### Defined in

[core/src/container.ts:33](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L33)

---

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[BaseContainer](../container.BaseContainer).[\_propertySerializationOptions](container.BaseContainer.md#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### encryptedData

• `Optional` **encryptedData**: `Uint8Array`

Encrypted data

#### Inherited from

[BaseContainer](../container.BaseContainer).[encryptedData](container.BaseContainer.md#encrypteddata)

#### Defined in

[core/src/container.ts:28](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L28)

---

### encryptionParams

• **encryptionParams**: [`AESEncryptionParams`](../crypto.AESEncryptionParams)

Parameters used for encryption of content data

#### Inherited from

[BaseContainer](../container.BaseContainer).[encryptionParams](container.BaseContainer.md#encryptionparams)

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

BaseContainer.kind

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

[BaseContainer](../container.BaseContainer).[\_fromRaw](container.BaseContainer.md#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](container.SimpleContainer.md#toraw) on any
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

[BaseContainer](../container.BaseContainer).[\_toRaw](container.BaseContainer.md#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`SimpleContainer`](../container.SimpleContainer)

Creates a deep clone of the object

#### Returns

[`SimpleContainer`](../container.SimpleContainer)

#### Inherited from

[BaseContainer](../container.BaseContainer).[clone](container.BaseContainer.md#clone)

#### Defined in

[core/src/container.ts:85](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L85)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`SimpleContainer`](../container.SimpleContainer)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`SimpleContainer`](../container.SimpleContainer)

#### Inherited from

[BaseContainer](../container.BaseContainer).[fromBytes](container.BaseContainer.md#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`SimpleContainer`](../container.SimpleContainer)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`SimpleContainer`](../container.SimpleContainer)

#### Inherited from

[BaseContainer](../container.BaseContainer).[fromJSON](container.BaseContainer.md#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`SimpleContainer`](../container.SimpleContainer)

Restores propertiers from a raw object of the same form generated by
[toRaw](container.SimpleContainer.md#toraw). The base implementation blindly
copies over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](container.SimpleContainer.md#_fromraw)
method to implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`SimpleContainer`](../container.SimpleContainer)

#### Inherited from

[BaseContainer](../container.BaseContainer).[fromRaw](container.BaseContainer.md#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### getData

▸ **getData**(): `Promise`<`Uint8Array`\>

Decrypts and extracts the plain text data from the container. This will usually
require unlocking the container first.

#### Returns

`Promise`<`Uint8Array`\>

#### Inherited from

[BaseContainer](../container.BaseContainer).[getData](container.BaseContainer.md#getdata)

#### Defined in

[core/src/container.ts:61](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L61)

---

### lock

▸ **lock**(): `void`

Locks the container, removing the possibility to extract the plain text data via
[getData](container.SimpleContainer.md#getdata) until the container is unlocked
again. Subclasses extending this class must take care to delete any keys or
other sensitive data that may have been stored temporarily after unlocking the
container.

#### Returns

`void`

#### Inherited from

[BaseContainer](../container.BaseContainer).[lock](container.BaseContainer.md#lock)

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

#### Inherited from

[BaseContainer](../container.BaseContainer).[setData](container.BaseContainer.md#setdata)

#### Defined in

[core/src/container.ts:38](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L38)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Inherited from

[BaseContainer](../container.BaseContainer).[toBytes](container.BaseContainer.md#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Inherited from

[BaseContainer](../container.BaseContainer).[toJSON](container.BaseContainer.md#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](container.SimpleContainer.md#_toraw) for
subclass-specific behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Inherited from

[BaseContainer](../container.BaseContainer).[toRaw](container.BaseContainer.md#toraw)

#### Defined in

[core/src/encoding.ts:179](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L179)

---

### unlock

▸ **unlock**(`key`): `Promise`<`void`\>

Unlocks the container, making it possible to extract the plain text data via
[getData](container.SimpleContainer.md#getdata). The type of **secret** provided
will differ based on the encryption scheme used by implemenations.

#### Parameters

| Name  | Type         |
| :---- | :----------- |
| `key` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Overrides

[BaseContainer](../container.BaseContainer).[unlock](container.BaseContainer.md#unlock)

#### Defined in

[core/src/container.ts:97](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L97)

---

### validate

▸ **validate**(): `boolean`

This is called during deserialization and should verify that all properties have
been populated with values of the correct type. Subclasses should implement this
method based on their class structure.

#### Returns

`boolean`

#### Inherited from

[BaseContainer](../container.BaseContainer).[validate](container.BaseContainer.md#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

---
title: "Class: PublicKeyAuthClientData"
linkTitle: "PublicKeyAuthClientData"
slug: "auth_public_key.PublicKeyAuthClientData"
---

[auth/public-key](../../modules/auth_public_key).PublicKeyAuthClientData

## Hierarchy

-   [`SimpleContainer`](../container.SimpleContainer)

    ↳ **`PublicKeyAuthClientData`**

## Implements

-   [`Storable`](../storage.Storable)

## Constructors

### constructor

• **new PublicKeyAuthClientData**()

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[constructor](container.SimpleContainer.md#constructor)

## Properties

### \_key

• `Protected` `Optional` **\_key**: `Uint8Array`

The key used for encryption. Sub classes must set this property in the
[unlock](auth_public_key.PublicKeyAuthClientData.md#unlock) method.

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[\_key](container.SimpleContainer.md#_key)

#### Defined in

[core/src/container.ts:33](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L33)

---

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Implementation of

Storable.\_propertySerializationOptions

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[\_propertySerializationOptions](container.SimpleContainer.md#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### encryptedData

• `Optional` **encryptedData**: `Uint8Array`

Encrypted data

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[encryptedData](container.SimpleContainer.md#encrypteddata)

#### Defined in

[core/src/container.ts:28](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L28)

---

### encryptionParams

• **encryptionParams**: [`AESEncryptionParams`](../crypto.AESEncryptionParams)

Parameters used for encryption of content data

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[encryptionParams](container.SimpleContainer.md#encryptionparams)

#### Defined in

[core/src/container.ts:24](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L24)

---

### id

• **id**: `string` = `""`

#### Implementation of

Storable.id

#### Defined in

[core/src/auth/public-key.ts:22](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/public-key.ts#L22)

---

### privateKey

• `Optional` **privateKey**: `Uint8Array`

#### Defined in

[core/src/auth/public-key.ts:28](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/public-key.ts#L28)

---

### publicKey

• **publicKey**: `Uint8Array`

#### Defined in

[core/src/auth/public-key.ts:25](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/public-key.ts#L25)

## Accessors

### kind

• `get` **kind**(): `string`

A string representing the objects "type", useful for segmenting storage, among
other things. Defaults to the lowercase class name, but can be overwritten by
subclasses

#### Returns

`string`

#### Implementation of

Storable.kind

#### Inherited from

SimpleContainer.kind

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

#### Implementation of

Storable.\_fromRaw

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[\_fromRaw](container.SimpleContainer.md#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls
[toRaw](auth_public_key.PublicKeyAuthClientData.md#toraw) on any properties that
are themselfes instances of [Serializable](../encoding.Serializable). This
method should be overwritten by subclasses if certain properties require special
treatment.

#### Parameters

| Name      | Type                    |
| :-------- | :---------------------- |
| `version` | `undefined` \| `string` |

#### Returns

`any`

#### Implementation of

Storable.\_toRaw

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[\_toRaw](container.SimpleContainer.md#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**():
[`PublicKeyAuthClientData`](../auth_public_key.PublicKeyAuthClientData)

Creates a deep clone of the object

#### Returns

[`PublicKeyAuthClientData`](../auth_public_key.PublicKeyAuthClientData)

#### Implementation of

Storable.clone

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[clone](container.SimpleContainer.md#clone)

#### Defined in

[core/src/container.ts:85](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L85)

---

### fromBytes

▸ **fromBytes**(`bytes`):
[`PublicKeyAuthClientData`](../auth_public_key.PublicKeyAuthClientData)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`PublicKeyAuthClientData`](../auth_public_key.PublicKeyAuthClientData)

#### Implementation of

Storable.fromBytes

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[fromBytes](container.SimpleContainer.md#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`):
[`PublicKeyAuthClientData`](../auth_public_key.PublicKeyAuthClientData)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`PublicKeyAuthClientData`](../auth_public_key.PublicKeyAuthClientData)

#### Implementation of

Storable.fromJSON

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[fromJSON](container.SimpleContainer.md#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`):
[`PublicKeyAuthClientData`](../auth_public_key.PublicKeyAuthClientData)

Restores propertiers from a raw object of the same form generated by
[toRaw](auth_public_key.PublicKeyAuthClientData.md#toraw). The base
implementation blindly copies over values from the raw object via
`Object.assign` so subclasses should explictly process any propertyies that need
special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected
[\_fromRaw](auth_public_key.PublicKeyAuthClientData.md#_fromraw) method to
implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`PublicKeyAuthClientData`](../auth_public_key.PublicKeyAuthClientData)

#### Implementation of

Storable.fromRaw

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[fromRaw](container.SimpleContainer.md#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### generateKeys

▸ **generateKeys**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/auth/public-key.ts:30](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/public-key.ts#L30)

---

### getData

▸ **getData**(): `Promise`<`Uint8Array`\>

Decrypts and extracts the plain text data from the container. This will usually
require unlocking the container first.

#### Returns

`Promise`<`Uint8Array`\>

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[getData](container.SimpleContainer.md#getdata)

#### Defined in

[core/src/container.ts:61](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L61)

---

### lock

▸ **lock**(): `void`

Locks the container, removing the possibility to extract the plain text data via
[getData](auth_public_key.PublicKeyAuthClientData.md#getdata) until the
container is unlocked again. Subclasses extending this class must take care to
delete any keys or other sensitive data that may have been stored temporarily
after unlocking the container.

#### Returns

`void`

#### Overrides

[SimpleContainer](../container.SimpleContainer).[lock](container.SimpleContainer.md#lock)

#### Defined in

[core/src/auth/public-key.ts:44](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/public-key.ts#L44)

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

[SimpleContainer](../container.SimpleContainer).[setData](container.SimpleContainer.md#setdata)

#### Defined in

[core/src/container.ts:38](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L38)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Implementation of

Storable.toBytes

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[toBytes](container.SimpleContainer.md#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Implementation of

Storable.toJSON

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[toJSON](container.SimpleContainer.md#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](auth_public_key.PublicKeyAuthClientData.md#_toraw) for
subclass-specific behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Implementation of

Storable.toRaw

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[toRaw](container.SimpleContainer.md#toraw)

#### Defined in

[core/src/encoding.ts:179](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L179)

---

### unlock

▸ **unlock**(`key`): `Promise`<`void`\>

Unlocks the container, making it possible to extract the plain text data via
[getData](auth_public_key.PublicKeyAuthClientData.md#getdata). The type of
**secret** provided will differ based on the encryption scheme used by
implemenations.

#### Parameters

| Name  | Type         |
| :---- | :----------- |
| `key` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Overrides

[SimpleContainer](../container.SimpleContainer).[unlock](container.SimpleContainer.md#unlock)

#### Defined in

[core/src/auth/public-key.ts:37](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/public-key.ts#L37)

---

### validate

▸ **validate**(): `boolean`

This is called during deserialization and should verify that all properties have
been populated with values of the correct type. Subclasses should implement this
method based on their class structure.

#### Returns

`boolean`

#### Implementation of

Storable.validate

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[validate](container.SimpleContainer.md#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

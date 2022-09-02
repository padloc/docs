---
title: "Class: StoredMasterKey"
linkTitle: "StoredMasterKey"
slug: "app.StoredMasterKey"
---

[app](../../modules/app).StoredMasterKey

## Hierarchy

-   [`SimpleContainer`](../container.SimpleContainer)

    ↳ **`StoredMasterKey`**

## Constructors

### constructor

• **new StoredMasterKey**()

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[constructor](../container.SimpleContainer#constructor)

## Properties

### \_key

• `Protected` `Optional` **\_key**: `Uint8Array`

The key used for encryption. Sub classes must set this property in the
[unlock](../app.StoredMasterKey#unlock) method.

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[\_key](../container.SimpleContainer#_key)

#### Defined in

[core/src/container.ts:33](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L33)

---

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[\_propertySerializationOptions](../container.SimpleContainer#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### authenticatorId

• **authenticatorId**: `string` = `""`

#### Defined in

[core/src/app.ts:141](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L141)

---

### encryptedData

• `Optional` **encryptedData**: `Uint8Array`

Encrypted data

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[encryptedData](../container.SimpleContainer#encrypteddata)

#### Defined in

[core/src/container.ts:28](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L28)

---

### encryptionParams

• **encryptionParams**: [`AESEncryptionParams`](../crypto.AESEncryptionParams)

Parameters used for encryption of content data

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[encryptionParams](../container.SimpleContainer#encryptionparams)

#### Defined in

[core/src/container.ts:24](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L24)

---

### keyStoreId

• **keyStoreId**: `string` = `""`

#### Defined in

[core/src/app.ts:142](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L142)

## Accessors

### kind

• `get` **kind**(): `string`

A string representing the objects "type", useful for segmenting storage, among
other things. Defaults to the lowercase class name, but can be overwritten by
subclasses

#### Returns

`string`

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

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[\_fromRaw](../container.SimpleContainer#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](../app.StoredMasterKey#toraw) on any
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

[SimpleContainer](../container.SimpleContainer).[\_toRaw](../container.SimpleContainer#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`StoredMasterKey`](../app.StoredMasterKey)

Creates a deep clone of the object

#### Returns

[`StoredMasterKey`](../app.StoredMasterKey)

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[clone](../container.SimpleContainer#clone)

#### Defined in

[core/src/container.ts:85](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L85)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`StoredMasterKey`](../app.StoredMasterKey)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`StoredMasterKey`](../app.StoredMasterKey)

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[fromBytes](../container.SimpleContainer#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`StoredMasterKey`](../app.StoredMasterKey)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`StoredMasterKey`](../app.StoredMasterKey)

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[fromJSON](../container.SimpleContainer#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`StoredMasterKey`](../app.StoredMasterKey)

Restores propertiers from a raw object of the same form generated by
[toRaw](../app.StoredMasterKey#toraw). The base implementation blindly copies
over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../app.StoredMasterKey#_fromraw) method
to implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`StoredMasterKey`](../app.StoredMasterKey)

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[fromRaw](../container.SimpleContainer#fromraw)

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

[SimpleContainer](../container.SimpleContainer).[getData](../container.SimpleContainer#getdata)

#### Defined in

[core/src/container.ts:61](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L61)

---

### lock

▸ **lock**(): `void`

Locks the container, removing the possibility to extract the plain text data via
[getData](../app.StoredMasterKey#getdata) until the container is unlocked again.
Subclasses extending this class must take care to delete any keys or other
sensitive data that may have been stored temporarily after unlocking the
container.

#### Returns

`void`

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[lock](../container.SimpleContainer#lock)

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

[SimpleContainer](../container.SimpleContainer).[setData](../container.SimpleContainer#setdata)

#### Defined in

[core/src/container.ts:38](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L38)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[toBytes](../container.SimpleContainer#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[toJSON](../container.SimpleContainer#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](../app.StoredMasterKey#_toraw) for subclass-specific
behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[toRaw](../container.SimpleContainer#toraw)

#### Defined in

[core/src/encoding.ts:179](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L179)

---

### unlock

▸ **unlock**(`key`): `Promise`<`void`\>

Unlocks the container, making it possible to extract the plain text data via
[getData](../app.StoredMasterKey#getdata). The type of **secret** provided will
differ based on the encryption scheme used by implemenations.

#### Parameters

| Name  | Type         |
| :---- | :----------- |
| `key` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[unlock](../container.SimpleContainer#unlock)

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

[SimpleContainer](../container.SimpleContainer).[validate](../container.SimpleContainer#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

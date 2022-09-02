---
title: "Class: Attachment"
linkTitle: "Attachment"
slug: "attachment.Attachment"
---

[attachment](../../modules/attachment).Attachment

## Hierarchy

-   [`SimpleContainer`](../container.SimpleContainer)

    ↳ **`Attachment`**

## Constructors

### constructor

• **new Attachment**(`__namedParameters?`)

#### Parameters

| Name                | Type                                                         |
| :------------------ | :----------------------------------------------------------- |
| `__namedParameters` | `Partial`<[`AttachmentInfo`](../attachment.AttachmentInfo)\> |

#### Overrides

[SimpleContainer](../container.SimpleContainer).[constructor](../container.SimpleContainer#constructor)

#### Defined in

[core/src/attachment.ts:105](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L105)

## Properties

### \_key

• `Protected` `Optional` **\_key**: `Uint8Array`

The key used for encryption. Sub classes must set this property in the
[unlock](../attachment.Attachment#unlock) method.

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

### downloadProgress

• `Optional` **downloadProgress**:
[`RequestProgress`](../transport.RequestProgress)

#### Defined in

[core/src/attachment.ts:103](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L103)

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

### id

• **id**: `string` = `""`

#### Defined in

[core/src/attachment.ts:97](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L97)

---

### name

• **name**: `string` = `""`

#### Defined in

[core/src/attachment.ts:99](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L99)

---

### size

• **size**: `number` = `0`

#### Defined in

[core/src/attachment.ts:100](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L100)

---

### type

• **type**: `string` = `""`

#### Defined in

[core/src/attachment.ts:101](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L101)

---

### uploadProgress

• `Optional` **uploadProgress**:
[`RequestProgress`](../transport.RequestProgress)

#### Defined in

[core/src/attachment.ts:102](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L102)

---

### vault

• **vault**: `string` = `""`

#### Defined in

[core/src/attachment.ts:98](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L98)

## Accessors

### info

• `get` **info**(): [`AttachmentInfo`](../attachment.AttachmentInfo)

#### Returns

[`AttachmentInfo`](../attachment.AttachmentInfo)

#### Defined in

[core/src/attachment.ts:113](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L113)

---

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

---

### loaded

• `get` **loaded**(): `boolean`

#### Returns

`boolean`

#### Defined in

[core/src/attachment.ts:124](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L124)

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
[[exlude]] array and calls [toRaw](../attachment.Attachment#toraw) on any
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

▸ **clone**(): [`Attachment`](../attachment.Attachment)

Creates a deep clone of the object

#### Returns

[`Attachment`](../attachment.Attachment)

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[clone](../container.SimpleContainer#clone)

#### Defined in

[core/src/container.ts:85](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L85)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`Attachment`](../attachment.Attachment)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`Attachment`](../attachment.Attachment)

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[fromBytes](../container.SimpleContainer#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromFile

▸ **fromFile**(`file`): `Promise`<[`Attachment`](../attachment.Attachment)\>

#### Parameters

| Name   | Type   |
| :----- | :----- |
| `file` | `File` |

#### Returns

`Promise`<[`Attachment`](../attachment.Attachment)\>

#### Defined in

[core/src/attachment.ts:128](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L128)

---

### fromJSON

▸ **fromJSON**(`json`): [`Attachment`](../attachment.Attachment)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`Attachment`](../attachment.Attachment)

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[fromJSON](../container.SimpleContainer#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`Attachment`](../attachment.Attachment)

Restores propertiers from a raw object of the same form generated by
[toRaw](../attachment.Attachment#toraw). The base implementation blindly copies
over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../attachment.Attachment#_fromraw) method
to implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`Attachment`](../attachment.Attachment)

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
[getData](../attachment.Attachment#getdata) until the container is unlocked
again. Subclasses extending this class must take care to delete any keys or
other sensitive data that may have been stored temporarily after unlocking the
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

### toDataURL

▸ **toDataURL**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/attachment.ts:149](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L149)

---

### toFile

▸ **toFile**(): `Promise`<`File`\>

#### Returns

`Promise`<`File`\>

#### Defined in

[core/src/attachment.ts:144](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L144)

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

### toObjectURL

▸ **toObjectURL**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/attachment.ts:154](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L154)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](../attachment.Attachment#_toraw) for subclass-specific
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

### toText

▸ **toText**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/attachment.ts:159](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L159)

---

### unlock

▸ **unlock**(`key`): `Promise`<`void`\>

Unlocks the container, making it possible to extract the plain text data via
[getData](../attachment.Attachment#getdata). The type of **secret** provided
will differ based on the encryption scheme used by implemenations.

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

#### Overrides

[SimpleContainer](../container.SimpleContainer).[validate](../container.SimpleContainer#validate)

#### Defined in

[core/src/attachment.ts:164](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L164)

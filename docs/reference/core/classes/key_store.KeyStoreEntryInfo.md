---
title: "Class: KeyStoreEntryInfo"
linkTitle: "KeyStoreEntryInfo"
slug: "key_store.KeyStoreEntryInfo"
---

[key-store](../../modules/key_store).KeyStoreEntryInfo

## Hierarchy

-   [`Serializable`](../encoding.Serializable)

    ↳ **`KeyStoreEntryInfo`**

## Constructors

### constructor

• **new KeyStoreEntryInfo**(`init?`)

#### Parameters

| Name   | Type                                                      |
| :----- | :-------------------------------------------------------- |
| `init` | `Partial`<[`KeyStoreEntry`](../key_store.KeyStoreEntry)\> |

#### Overrides

[Serializable](../encoding.Serializable).[constructor](encoding.Serializable.md#constructor)

#### Defined in

[core/src/key-store.ts:15](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/key-store.ts#L15)

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Serializable](../encoding.Serializable).[\_propertySerializationOptions](encoding.Serializable.md#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### accountId

• **accountId**: `string` = `""`

#### Defined in

[core/src/key-store.ts:11](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/key-store.ts#L11)

---

### authenticatorId

• **authenticatorId**: `string` = `""`

#### Defined in

[core/src/key-store.ts:13](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/key-store.ts#L13)

---

### created

• **created**: `Date`

#### Defined in

[core/src/key-store.ts:9](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/key-store.ts#L9)

---

### id

• **id**: `string` = `""`

#### Defined in

[core/src/key-store.ts:6](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/key-store.ts#L6)

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
[[exlude]] array and calls [toRaw](key_store.KeyStoreEntryInfo.md#toraw) on any
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

▸ **clone**(): [`KeyStoreEntryInfo`](../key_store.KeyStoreEntryInfo)

Creates a deep clone of the object

#### Returns

[`KeyStoreEntryInfo`](../key_store.KeyStoreEntryInfo)

#### Inherited from

[Serializable](../encoding.Serializable).[clone](encoding.Serializable.md#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`KeyStoreEntryInfo`](../key_store.KeyStoreEntryInfo)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`KeyStoreEntryInfo`](../key_store.KeyStoreEntryInfo)

#### Inherited from

[Serializable](../encoding.Serializable).[fromBytes](encoding.Serializable.md#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`KeyStoreEntryInfo`](../key_store.KeyStoreEntryInfo)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`KeyStoreEntryInfo`](../key_store.KeyStoreEntryInfo)

#### Inherited from

[Serializable](../encoding.Serializable).[fromJSON](encoding.Serializable.md#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`KeyStoreEntryInfo`](../key_store.KeyStoreEntryInfo)

Restores propertiers from a raw object of the same form generated by
[toRaw](key_store.KeyStoreEntryInfo.md#toraw). The base implementation blindly
copies over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](key_store.KeyStoreEntryInfo.md#_fromraw)
method to implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`KeyStoreEntryInfo`](../key_store.KeyStoreEntryInfo)

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
versions. Use [\_toRaw](key_store.KeyStoreEntryInfo.md#_toraw) for
subclass-specific behavior.

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

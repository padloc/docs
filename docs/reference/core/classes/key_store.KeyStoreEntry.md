---
title: "Class: KeyStoreEntry"
linkTitle: "KeyStoreEntry"
slug: "key_store.KeyStoreEntry"
---

[key-store](../../modules/key_store).KeyStoreEntry

## Hierarchy

-   [`Storable`](../storage.Storable)

    ↳ **`KeyStoreEntry`**

## Constructors

### constructor

• **new KeyStoreEntry**(`init?`)

#### Parameters

| Name   | Type                                                      |
| :----- | :-------------------------------------------------------- |
| `init` | `Partial`<[`KeyStoreEntry`](../key_store.KeyStoreEntry)\> |

#### Overrides

[Storable](../storage.Storable).[constructor](../storage.Storable#constructor)

#### Defined in

[core/src/key-store.ts:43](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/key-store.ts#L43)

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Storable](../storage.Storable).[\_propertySerializationOptions](../storage.Storable#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### accountId

• **accountId**: `string` = `""`

#### Defined in

[core/src/key-store.ts:27](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/key-store.ts#L27)

---

### authenticatorId

• **authenticatorId**: `string` = `""`

#### Defined in

[core/src/key-store.ts:29](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/key-store.ts#L29)

---

### created

• **created**: `Date`

#### Defined in

[core/src/key-store.ts:25](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/key-store.ts#L25)

---

### data

• **data**: `Uint8Array`

#### Defined in

[core/src/key-store.ts:32](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/key-store.ts#L32)

---

### id

• **id**: `string` = `""`

#### Overrides

[Storable](../storage.Storable).[id](../storage.Storable#id)

#### Defined in

[core/src/key-store.ts:22](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/key-store.ts#L22)

## Accessors

### info

• `get` **info**(): [`KeyStoreEntryInfo`](../key_store.KeyStoreEntryInfo)

#### Returns

[`KeyStoreEntryInfo`](../key_store.KeyStoreEntryInfo)

#### Defined in

[core/src/key-store.ts:34](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/key-store.ts#L34)

---

### kind

• `get` **kind**(): `string`

A string representing the objects "type", useful for segmenting storage, among
other things. Defaults to the lowercase class name, but can be overwritten by
subclasses

#### Returns

`string`

#### Inherited from

Storable.kind

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

[Storable](../storage.Storable).[\_fromRaw](../storage.Storable#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](../key_store.KeyStoreEntry#toraw) on any
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

[Storable](../storage.Storable).[\_toRaw](../storage.Storable#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`KeyStoreEntry`](../key_store.KeyStoreEntry)

Creates a deep clone of the object

#### Returns

[`KeyStoreEntry`](../key_store.KeyStoreEntry)

#### Inherited from

[Storable](../storage.Storable).[clone](../storage.Storable#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`KeyStoreEntry`](../key_store.KeyStoreEntry)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`KeyStoreEntry`](../key_store.KeyStoreEntry)

#### Inherited from

[Storable](../storage.Storable).[fromBytes](../storage.Storable#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`KeyStoreEntry`](../key_store.KeyStoreEntry)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`KeyStoreEntry`](../key_store.KeyStoreEntry)

#### Inherited from

[Storable](../storage.Storable).[fromJSON](../storage.Storable#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`KeyStoreEntry`](../key_store.KeyStoreEntry)

Restores propertiers from a raw object of the same form generated by
[toRaw](../key_store.KeyStoreEntry#toraw). The base implementation blindly
copies over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../key_store.KeyStoreEntry#_fromraw)
method to implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`KeyStoreEntry`](../key_store.KeyStoreEntry)

#### Inherited from

[Storable](../storage.Storable).[fromRaw](../storage.Storable#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/key-store.ts:48](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/key-store.ts#L48)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Inherited from

[Storable](../storage.Storable).[toBytes](../storage.Storable#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Inherited from

[Storable](../storage.Storable).[toJSON](../storage.Storable#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](../key_store.KeyStoreEntry#_toraw) for subclass-specific
behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Inherited from

[Storable](../storage.Storable).[toRaw](../storage.Storable#toraw)

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

[Storable](../storage.Storable).[validate](../storage.Storable#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

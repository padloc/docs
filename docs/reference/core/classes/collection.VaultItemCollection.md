---
title: "Class: VaultItemCollection"
linkTitle: "VaultItemCollection"
slug: "collection.VaultItemCollection"
---

[collection](../../modules/collection).VaultItemCollection

A collection of vault items items, used for consolidating changes made
independently across multiple instances through "merging".

## Hierarchy

-   [`Serializable`](../encoding.Serializable)

    ↳ **`VaultItemCollection`**

## Implements

-   `Iterable`<[`VaultItem`](../item.VaultItem)\>

## Constructors

### constructor

• **new VaultItemCollection**(`items?`)

#### Parameters

| Name    | Type                               | Default value |
| :------ | :--------------------------------- | :------------ |
| `items` | [`VaultItem`](../item.VaultItem)[] | `[]`          |

#### Overrides

[Serializable](../encoding.Serializable).[constructor](../encoding.Serializable#constructor)

#### Defined in

[core/src/collection.ts:32](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/collection.ts#L32)

## Properties

### \_changes

• `Private` **\_changes**: `Map`<`string`, `Date`\>

#### Defined in

[core/src/collection.ts:30](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/collection.ts#L30)

---

### \_items

• `Private` **\_items**: `Map`<`string`, [`VaultItem`](../item.VaultItem)\>

#### Defined in

[core/src/collection.ts:29](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/collection.ts#L29)

---

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Serializable](../encoding.Serializable).[\_propertySerializationOptions](../encoding.Serializable#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

## Accessors

### hasChanges

• `get` **hasChanges**(): `boolean`

#### Returns

`boolean`

#### Defined in

[core/src/collection.ts:14](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/collection.ts#L14)

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

---

### size

• `get` **size**(): `number`

Number of items in this VaultItemCollection

#### Returns

`number`

#### Defined in

[core/src/collection.ts:10](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/collection.ts#L10)

---

### tags

• `get` **tags**(): `string`[]

Aggregated list of tags assigned to the items in this collection

#### Returns

`string`[]

#### Defined in

[core/src/collection.ts:19](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/collection.ts#L19)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`VaultItem`](../item.VaultItem)\>

#### Returns

`IterableIterator`<[`VaultItem`](../item.VaultItem)\>

#### Implementation of

Iterable.\_\_@iterator@78

#### Defined in

[core/src/collection.ts:108](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/collection.ts#L108)

---

### \_fromRaw

▸ `Protected` **\_fromRaw**(`__namedParameters`): `void`

Restore values from a raw object. The default implementation simply copies over
all iterable properties from the base object. Overwrite this method for
properties that require special treatment

#### Parameters

| Name                | Type  |
| :------------------ | :---- |
| `__namedParameters` | `any` |

#### Returns

`void`

#### Overrides

[Serializable](../encoding.Serializable).[\_fromRaw](../encoding.Serializable#_fromraw)

#### Defined in

[core/src/collection.ts:99](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/collection.ts#L99)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `Object`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](../collection.VaultItemCollection#toraw) on
any properties that are themselfes instances of
[Serializable](../encoding.Serializable). This method should be overwritten by
subclasses if certain properties require special treatment.

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `version` | `string` |

#### Returns

`Object`

| Name      | Type                 |
| :-------- | :------------------- |
| `changes` | [`string`, `Date`][] |
| `items`   | `any`[]              |

#### Overrides

[Serializable](../encoding.Serializable).[\_toRaw](../encoding.Serializable#_toraw)

#### Defined in

[core/src/collection.ts:92](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/collection.ts#L92)

---

### clearChanges

▸ **clearChanges**(`before?`): `void`

#### Parameters

| Name      | Type   |
| :-------- | :----- |
| `before?` | `Date` |

#### Returns

`void`

#### Defined in

[core/src/collection.ts:84](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/collection.ts#L84)

---

### clone

▸ **clone**(): [`VaultItemCollection`](../collection.VaultItemCollection)

Creates a deep clone of the object

#### Returns

[`VaultItemCollection`](../collection.VaultItemCollection)

#### Inherited from

[Serializable](../encoding.Serializable).[clone](../encoding.Serializable#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`):
[`VaultItemCollection`](../collection.VaultItemCollection)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`VaultItemCollection`](../collection.VaultItemCollection)

#### Inherited from

[Serializable](../encoding.Serializable).[fromBytes](../encoding.Serializable#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`):
[`VaultItemCollection`](../collection.VaultItemCollection)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`VaultItemCollection`](../collection.VaultItemCollection)

#### Inherited from

[Serializable](../encoding.Serializable).[fromJSON](../encoding.Serializable#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`VaultItemCollection`](../collection.VaultItemCollection)

Restores propertiers from a raw object of the same form generated by
[toRaw](../collection.VaultItemCollection#toraw). The base implementation
blindly copies over values from the raw object via `Object.assign` so subclasses
should explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected
[\_fromRaw](../collection.VaultItemCollection#_fromraw) method to implement
subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`VaultItemCollection`](../collection.VaultItemCollection)

#### Inherited from

[Serializable](../encoding.Serializable).[fromRaw](../encoding.Serializable#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### get

▸ **get**(`id`): `null` \| [`VaultItem`](../item.VaultItem)

Get an item with a given `id`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`null` \| [`VaultItem`](../item.VaultItem)

#### Defined in

[core/src/collection.ts:38](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/collection.ts#L38)

---

### merge

▸ **merge**(`coll`): `void`

Merges in changes from another
[VaultItemCollection](../collection.VaultItemCollection) instance.

#### Parameters

| Name   | Type                                                       |
| :----- | :--------------------------------------------------------- |
| `coll` | [`VaultItemCollection`](../collection.VaultItemCollection) |

#### Returns

`void`

#### Defined in

[core/src/collection.ts:67](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/collection.ts#L67)

---

### remove

▸ **remove**(...`items`): `void`

Removes one or more items based on their id.

#### Parameters

| Name       | Type                               |
| :--------- | :--------------------------------- |
| `...items` | [`VaultItem`](../item.VaultItem)[] |

#### Returns

`void`

#### Defined in

[core/src/collection.ts:57](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/collection.ts#L57)

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
versions. Use [\_toRaw](../collection.VaultItemCollection#_toraw) for
subclass-specific behavior.

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

### update

▸ **update**(...`items`): `void`

Updates one or more items based on their id. If no item with the same id exists,
the item will be added to the collection

#### Parameters

| Name       | Type                               |
| :--------- | :--------------------------------- |
| `...items` | [`VaultItem`](../item.VaultItem)[] |

#### Returns

`void`

#### Defined in

[core/src/collection.ts:46](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/collection.ts#L46)

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

---
title: "Class: MemoryStorage"
linkTitle: "MemoryStorage"
slug: "storage.MemoryStorage"
---

[storage](../../modules/storage).MemoryStorage

Basic in-memory storage. Useful for testing purposes

## Implements

-   [`Storage`](../../interfaces/storage.Storage)

## Constructors

### constructor

• **new MemoryStorage**()

## Properties

### \_storage

• `Private` **\_storage**: `Map`<`string`, `object`\>

#### Defined in

[core/src/storage.ts:62](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/storage.ts#L62)

## Methods

### clear

▸ **clear**(): `Promise`<`void`\>

Deletes all data in this storage

#### Returns

`Promise`<`void`\>

#### Implementation of

[Storage](../../interfaces/storage.Storage).[clear](../interfaces/storage.Storage#clear)

#### Defined in

[core/src/storage.ts:81](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/storage.ts#L81)

---

### delete

▸ **delete**<`T`\>(`obj`): `Promise`<`void`\>

Deletes an object

#### Type parameters

| Name | Type                                            |
| :--- | :---------------------------------------------- |
| `T`  | extends [`Storable`](../storage.Storable)<`T`\> |

#### Parameters

| Name  | Type |
| :---- | :--- |
| `obj` | `T`  |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Storage](../../interfaces/storage.Storage).[delete](../interfaces/storage.Storage#delete)

#### Defined in

[core/src/storage.ts:77](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/storage.ts#L77)

---

### get

▸ **get**<`T`\>(`cls`, `id`): `Promise`<`T`\>

Retrieves an object of type `T` based on its `id`

#### Type parameters

| Name | Type                                            |
| :--- | :---------------------------------------------- |
| `T`  | extends [`Storable`](../storage.Storable)<`T`\> |

#### Parameters

| Name  | Type                                                                            |
| :---- | :------------------------------------------------------------------------------ |
| `cls` | `T` \| [`StorableConstructor`](../modules/storage#storableconstructor)<`T`\> |
| `id`  | `string`                                                                        |

#### Returns

`Promise`<`T`\>

#### Implementation of

[Storage](../../interfaces/storage.Storage).[get](../interfaces/storage.Storage#get)

#### Defined in

[core/src/storage.ts:68](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/storage.ts#L68)

---

### list

▸ **list**<`T`\>(`cls`, `__namedParameters?`): `Promise`<`T`[]\>

Retrieves an object of type `T` based on its `id`

#### Type parameters

| Name | Type                                            |
| :--- | :---------------------------------------------- |
| `T`  | extends [`Storable`](../storage.Storable)<`T`\> |

#### Parameters

| Name                | Type                                                                      |
| :------------------ | :------------------------------------------------------------------------ |
| `cls`               | [`StorableConstructor`](../modules/storage#storableconstructor)<`T`\>  |
| `__namedParameters` | [`StorageListOptions`](../../interfaces/storage.StorageListOptions)<`T`\> |

#### Returns

`Promise`<`T`[]\>

#### Implementation of

[Storage](../../interfaces/storage.Storage).[list](../interfaces/storage.Storage#list)

#### Defined in

[core/src/storage.ts:85](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/storage.ts#L85)

---

### save

▸ **save**<`T`\>(`obj`): `Promise`<`void`\>

Saves an object to the storage

#### Type parameters

| Name | Type                                            |
| :--- | :---------------------------------------------- |
| `T`  | extends [`Storable`](../storage.Storable)<`T`\> |

#### Parameters

| Name  | Type |
| :---- | :--- |
| `obj` | `T`  |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Storage](../../interfaces/storage.Storage).[save](../interfaces/storage.Storage#save)

#### Defined in

[core/src/storage.ts:64](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/storage.ts#L64)

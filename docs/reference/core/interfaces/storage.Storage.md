---
title: "Interface: Storage"
linkTitle: "Storage"
slug: "storage.Storage"
---

[storage](../../modules/storage).Storage

Generic interface for data storage

## Implemented by

-   [`MemoryStorage`](../../classes/storage.MemoryStorage)
-   [`VoidStorage`](../../classes/storage.VoidStorage)

## Methods

### clear

▸ **clear**(): `Promise`<`void`\>

Deletes all data in this storage

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/storage.ts:40](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/storage.ts#L40)

---

### delete

▸ **delete**<`T`\>(`obj`): `Promise`<`void`\>

Deletes an object

#### Type parameters

| Name | Type                                                       |
| :--- | :--------------------------------------------------------- |
| `T`  | extends [`Storable`](../../classes/storage.Storable)<`T`\> |

#### Parameters

| Name  | Type |
| :---- | :--- |
| `obj` | `T`  |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/storage.ts:37](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/storage.ts#L37)

---

### get

▸ **get**<`T`\>(`cls`, `id`): `Promise`<`T`\>

Retrieves an object of type `T` based on its `id`

#### Type parameters

| Name | Type                                                       |
| :--- | :--------------------------------------------------------- |
| `T`  | extends [`Storable`](../../classes/storage.Storable)<`T`\> |

#### Parameters

| Name  | Type                                                                            |
| :---- | :------------------------------------------------------------------------------ |
| `cls` | `T` \| [`StorableConstructor`](../modules/storage.md#storableconstructor)<`T`\> |
| `id`  | `string`                                                                        |

#### Returns

`Promise`<`T`\>

#### Defined in

[core/src/storage.ts:34](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/storage.ts#L34)

---

### list

▸ **list**<`T`\>(`cls`, `opts?`): `Promise`<`T`[]\>

Retrieves an object of type `T` based on its `id`

#### Type parameters

| Name | Type                                                       |
| :--- | :--------------------------------------------------------- |
| `T`  | extends [`Storable`](../../classes/storage.Storable)<`T`\> |

#### Parameters

| Name    | Type                                                                     |
| :------ | :----------------------------------------------------------------------- |
| `cls`   | [`StorableConstructor`](../modules/storage.md#storableconstructor)<`T`\> |
| `opts?` | [`StorageListOptions`](../storage.StorageListOptions)<`T`\>              |

#### Returns

`Promise`<`T`[]\>

#### Defined in

[core/src/storage.ts:43](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/storage.ts#L43)

---

### save

▸ **save**<`T`\>(`obj`): `Promise`<`void`\>

Saves an object to the storage

#### Type parameters

| Name | Type                                                       |
| :--- | :--------------------------------------------------------- |
| `T`  | extends [`Storable`](../../classes/storage.Storable)<`T`\> |

#### Parameters

| Name  | Type |
| :---- | :--- |
| `obj` | `T`  |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/storage.ts:31](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/storage.ts#L31)

---
title: "Class: VoidStorage"
linkTitle: "VoidStorage"
slug: "storage.VoidStorage"
---

[storage](../../modules/storage).VoidStorage

## Implements

-   [`Storage`](../../interfaces/storage.Storage)

## Constructors

### constructor

• **new VoidStorage**()

## Methods

### clear

▸ **clear**(): `Promise`<`void`\>

Deletes all data in this storage

#### Returns

`Promise`<`void`\>

#### Implementation of

[Storage](../../interfaces/storage.Storage).[clear](../interfaces/storage.Storage#clear)

#### Defined in

[core/src/storage.ts:52](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/storage.ts#L52)

---

### delete

▸ **delete**<`T`\>(`_obj`): `Promise`<`void`\>

Deletes an object

#### Type parameters

| Name | Type                                            |
| :--- | :---------------------------------------------- |
| `T`  | extends [`Storable`](../storage.Storable)<`T`\> |

#### Parameters

| Name   | Type |
| :----- | :--- |
| `_obj` | `T`  |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Storage](../../interfaces/storage.Storage).[delete](../interfaces/storage.Storage#delete)

#### Defined in

[core/src/storage.ts:51](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/storage.ts#L51)

---

### get

▸ **get**<`T`\>(`_cls`, `_id`): `Promise`<`T`\>

Retrieves an object of type `T` based on its `id`

#### Type parameters

| Name | Type                                            |
| :--- | :---------------------------------------------- |
| `T`  | extends [`Storable`](../storage.Storable)<`T`\> |

#### Parameters

| Name   | Type                                                                            |
| :----- | :------------------------------------------------------------------------------ |
| `_cls` | `T` \| [`StorableConstructor`](../modules/storage#storableconstructor)<`T`\> |
| `_id`  | `string`                                                                        |

#### Returns

`Promise`<`T`\>

#### Implementation of

[Storage](../../interfaces/storage.Storage).[get](../interfaces/storage.Storage#get)

#### Defined in

[core/src/storage.ts:48](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/storage.ts#L48)

---

### list

▸ **list**<`T`\>(`_cls`, `_opts?`): `Promise`<`never`[]\>

Retrieves an object of type `T` based on its `id`

#### Type parameters

| Name | Type                                            |
| :--- | :---------------------------------------------- |
| `T`  | extends [`Storable`](../storage.Storable)<`T`\> |

#### Parameters

| Name     | Type                                                                      |
| :------- | :------------------------------------------------------------------------ |
| `_cls`   | [`StorableConstructor`](../modules/storage#storableconstructor)<`T`\>  |
| `_opts?` | [`StorageListOptions`](../../interfaces/storage.StorageListOptions)<`T`\> |

#### Returns

`Promise`<`never`[]\>

#### Implementation of

[Storage](../../interfaces/storage.Storage).[list](../interfaces/storage.Storage#list)

#### Defined in

[core/src/storage.ts:53](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/storage.ts#L53)

---

### save

▸ **save**<`T`\>(`_obj`): `Promise`<`void`\>

Saves an object to the storage

#### Type parameters

| Name | Type                                            |
| :--- | :---------------------------------------------- |
| `T`  | extends [`Storable`](../storage.Storable)<`T`\> |

#### Parameters

| Name   | Type |
| :----- | :--- |
| `_obj` | `T`  |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Storage](../../interfaces/storage.Storage).[save](../interfaces/storage.Storage#save)

#### Defined in

[core/src/storage.ts:47](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/storage.ts#L47)

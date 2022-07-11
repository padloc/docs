---
title: "Class: MemoryAttachmentStorage"
linkTitle: "MemoryAttachmentStorage"
slug: "attachment.MemoryAttachmentStorage"
---

[attachment](../../modules/attachment).MemoryAttachmentStorage

## Implements

-   [`AttachmentStorage`](../../interfaces/attachment.AttachmentStorage)

## Constructors

### constructor

• **new MemoryAttachmentStorage**()

## Properties

### \_storage

• `Private` **\_storage**: `Map`<`string`,
[`Attachment`](../attachment.Attachment)\>

#### Defined in

[core/src/attachment.ts:178](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L178)

## Methods

### delete

▸ **delete**(`vault`, `id`): `Promise`<`void`\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `vault` | `string` |
| `id`    | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[AttachmentStorage](../../interfaces/attachment.AttachmentStorage).[delete](../interfaces/attachment.AttachmentStorage.md#delete)

#### Defined in

[core/src/attachment.ts:192](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L192)

---

### deleteAll

▸ **deleteAll**(`vault`): `Promise`<`void`\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `vault` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[AttachmentStorage](../../interfaces/attachment.AttachmentStorage).[deleteAll](../interfaces/attachment.AttachmentStorage.md#deleteall)

#### Defined in

[core/src/attachment.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L196)

---

### get

▸ **get**(`vault`, `id`): `Promise`<[`Attachment`](../attachment.Attachment)\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `vault` | `string` |
| `id`    | `string` |

#### Returns

`Promise`<[`Attachment`](../attachment.Attachment)\>

#### Implementation of

[AttachmentStorage](../../interfaces/attachment.AttachmentStorage).[get](../interfaces/attachment.AttachmentStorage.md#get)

#### Defined in

[core/src/attachment.ts:184](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L184)

---

### getUsage

▸ **getUsage**(`vault`): `Promise`<`number`\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `vault` | `string` |

#### Returns

`Promise`<`number`\>

#### Implementation of

[AttachmentStorage](../../interfaces/attachment.AttachmentStorage).[getUsage](../interfaces/attachment.AttachmentStorage.md#getusage)

#### Defined in

[core/src/attachment.ts:204](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L204)

---

### put

▸ **put**(`a`): `Promise`<`void`\>

#### Parameters

| Name | Type                                     |
| :--- | :--------------------------------------- |
| `a`  | [`Attachment`](../attachment.Attachment) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[AttachmentStorage](../../interfaces/attachment.AttachmentStorage).[put](../interfaces/attachment.AttachmentStorage.md#put)

#### Defined in

[core/src/attachment.ts:180](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L180)

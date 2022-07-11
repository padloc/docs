---
title: "Interface: AttachmentStorage"
linkTitle: "AttachmentStorage"
slug: "attachment.AttachmentStorage"
---

[attachment](../../modules/attachment).AttachmentStorage

## Implemented by

-   [`MemoryAttachmentStorage`](../../classes/attachment.MemoryAttachmentStorage)

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

#### Defined in

[core/src/attachment.ts:172](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L172)

---

### deleteAll

▸ **deleteAll**(`vault`): `Promise`<`void`\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `vault` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/attachment.ts:173](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L173)

---

### get

▸ **get**(`vault`, `id`):
`Promise`<[`Attachment`](../../classes/attachment.Attachment)\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `vault` | `string` |
| `id`    | `string` |

#### Returns

`Promise`<[`Attachment`](../../classes/attachment.Attachment)\>

#### Defined in

[core/src/attachment.ts:171](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L171)

---

### getUsage

▸ **getUsage**(`vault`): `Promise`<`number`\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `vault` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[core/src/attachment.ts:174](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L174)

---

### put

▸ **put**(`a`): `Promise`<`void`\>

#### Parameters

| Name | Type                                                |
| :--- | :-------------------------------------------------- |
| `a`  | [`Attachment`](../../classes/attachment.Attachment) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/attachment.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L170)

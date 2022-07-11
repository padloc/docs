---
title: "Module: attachment"
linkTitle: "attachment"
slug: "attachment"
---

## Classes

-   [Attachment](../../classes/attachment.Attachment)
-   [AttachmentInfo](../../classes/attachment.AttachmentInfo)
-   [MemoryAttachmentStorage](../../classes/attachment.MemoryAttachmentStorage)

## Interfaces

-   [AttachmentStorage](../../interfaces/attachment.AttachmentStorage)

## Type Aliases

### AttachmentID

Ƭ **AttachmentID**: `string`

#### Defined in

[core/src/attachment.ts:78](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L78)

## Functions

### readFileAsArrayBuffer

▸ **readFileAsArrayBuffer**(`blob`): `Promise`<`ArrayBuffer`\>

#### Parameters

| Name   | Type   |
| :----- | :----- |
| `blob` | `File` |

#### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

[core/src/attachment.ts:27](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L27)

---

### readFileAsText

▸ **readFileAsText**(`blob`): `Promise`<`string`\>

#### Parameters

| Name   | Type   |
| :----- | :----- |
| `blob` | `File` |

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/attachment.ts:44](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L44)

---

### readFileAsUint8Array

▸ **readFileAsUint8Array**(`blob`): `Promise`<`Uint8Array`\>

#### Parameters

| Name   | Type   |
| :----- | :----- |
| `blob` | `File` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/attachment.ts:9](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/attachment.ts#L9)

---
title: "Interface: Messenger"
linkTitle: "Messenger"
slug: "messenger.Messenger"
---

[messenger](../../modules/messenger).Messenger

Generic interface for sending messages to users

## Implemented by

-   [`ConsoleMessenger`](../../classes/messenger.ConsoleMessenger)
-   [`StubMessenger`](../../classes/messenger.StubMessenger)

## Methods

### send

▸ **send**<`T`\>(`addr`, `msg`): `Promise`<`void`\>

Sends a message to a given address

#### Type parameters

| Name | Type                                                         |
| :--- | :----------------------------------------------------------- |
| `T`  | extends [`MessageData`](../modules/messenger.md#messagedata) |

#### Parameters

| Name   | Type                                               |
| :----- | :------------------------------------------------- |
| `addr` | `string`                                           |
| `msg`  | [`Message`](../../classes/messenger.Message)<`T`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/messenger.ts:78](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L78)

---
title: "Class: ConsoleMessenger"
linkTitle: "ConsoleMessenger"
slug: "messenger.ConsoleMessenger"
---

[messenger](../../modules/messenger).ConsoleMessenger

## Implements

-   [`Messenger`](../../interfaces/messenger.Messenger)

## Constructors

### constructor

• **new ConsoleMessenger**()

## Methods

### send

▸ **send**(`recipient`, `message`): `Promise`<`void`\>

Sends a message to a given address

#### Parameters

| Name        | Type                                      |
| :---------- | :---------------------------------------- |
| `recipient` | `string`                                  |
| `message`   | [`Message`](../messenger.Message)<`any`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Messenger](../../interfaces/messenger.Messenger).[send](../interfaces/messenger.Messenger#send)

#### Defined in

[core/src/messenger.ts:106](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L106)

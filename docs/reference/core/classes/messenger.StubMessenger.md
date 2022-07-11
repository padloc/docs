---
title: "Class: StubMessenger"
linkTitle: "StubMessenger"
slug: "messenger.StubMessenger"
---

[messenger](../../modules/messenger).StubMessenger

Stub implementation of the [Messenger](../../interfaces/messenger.Messenger)
interface. Simply stores messages in memory. Useful for testing purposes.

## Implements

-   [`Messenger`](../../interfaces/messenger.Messenger)

## Constructors

### constructor

• **new StubMessenger**()

## Properties

### messages

• **messages**: { `message`: [`Message`](../messenger.Message)<`any`\> ;
`recipient`: `string` }[] = `[]`

An array of messages passed to the [send](messenger.StubMessenger.md#send)
method. Sorted from most recent to oldest.

#### Defined in

[core/src/messenger.ts:90](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L90)

## Methods

### lastMessage

▸ **lastMessage**(`addr`): `null` \| [`Message`](../messenger.Message)<`any`\>

Returns the most recent message sent to `addr`.

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `addr` | `string` |

#### Returns

`null` \| [`Message`](../messenger.Message)<`any`\>

#### Defined in

[core/src/messenger.ts:99](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L99)

---

### send

▸ **send**<`T`\>(`recipient`, `message`): `Promise`<`void`\>

Sends a message to a given address

#### Type parameters

| Name | Type                                                         |
| :--- | :----------------------------------------------------------- |
| `T`  | extends [`MessageData`](../modules/messenger.md#messagedata) |

#### Parameters

| Name        | Type                                    |
| :---------- | :-------------------------------------- |
| `recipient` | `string`                                |
| `message`   | [`Message`](../messenger.Message)<`T`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Messenger](../../interfaces/messenger.Messenger).[send](../interfaces/messenger.Messenger.md#send)

#### Defined in

[core/src/messenger.ts:92](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L92)

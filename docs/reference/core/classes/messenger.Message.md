---
title: "Class: Message<T>"
linkTitle: "Message"
slug: "messenger.Message"
---

[messenger](../../modules/messenger).Message

A message to be sent to a user

## Type parameters

| Name | Type                                                         |
| :--- | :----------------------------------------------------------- |
| `T`  | extends [`MessageData`](../modules/messenger.md#messagedata) |

## Hierarchy

-   **`Message`**

    ↳ [`EmailAuthMessage`](../messenger.EmailAuthMessage)

    ↳
    [`JoinOrgInviteAcceptedMessage`](../messenger.JoinOrgInviteAcceptedMessage)

    ↳
    [`JoinOrgInviteCompletedMessage`](../messenger.JoinOrgInviteCompletedMessage)

    ↳ [`ErrorMessage`](../messenger.ErrorMessage)

## Constructors

### constructor

• **new Message**<`T`\>(`data`)

#### Type parameters

| Name | Type                                                         |
| :--- | :----------------------------------------------------------- |
| `T`  | extends [`MessageData`](../modules/messenger.md#messagedata) |

#### Parameters

| Name   | Type |
| :----- | :--- |
| `data` | `T`  |

#### Defined in

[core/src/messenger.ts:13](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L13)

## Properties

### data

• `Readonly` **data**: `T`

---

### template

• `Readonly` `Abstract` **template**: `string`

Template name

#### Defined in

[core/src/messenger.ts:11](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L11)

## Accessors

### title

• `Abstract` `get` **title**(): `string`

Message title

#### Returns

`string`

#### Defined in

[core/src/messenger.ts:8](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L8)

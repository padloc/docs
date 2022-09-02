---
title: "Class: JoinOrgInviteCompletedMessage"
linkTitle: "JoinOrgInviteCompletedMessage"
slug: "messenger.JoinOrgInviteCompletedMessage"
---

[messenger](../../modules/messenger).JoinOrgInviteCompletedMessage

## Hierarchy

-   [`Message`](../messenger.Message)<{ `openAppUrl`: `string` ; `orgName`:
    `string` }\>

    ↳ **`JoinOrgInviteCompletedMessage`**

## Constructors

### constructor

• **new JoinOrgInviteCompletedMessage**(`data`)

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `data`            | `Object` |
| `data.openAppUrl` | `string` |
| `data.orgName`    | `string` |

#### Inherited from

[Message](../messenger.Message).[constructor](../messenger.Message#constructor)

#### Defined in

[core/src/messenger.ts:13](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L13)

## Properties

### data

• `Readonly` **data**: `Object`

#### Type declaration

| Name         | Type     |
| :----------- | :------- |
| `openAppUrl` | `string` |
| `orgName`    | `string` |

#### Inherited from

[Message](../messenger.Message).[data](../messenger.Message#data)

---

### template

• **template**: `string` = `"join-org-invite-completed"`

Template name

#### Overrides

[Message](../messenger.Message).[template](../messenger.Message#template)

#### Defined in

[core/src/messenger.ts:56](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L56)

## Accessors

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Overrides

Message.title

#### Defined in

[core/src/messenger.ts:58](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L58)

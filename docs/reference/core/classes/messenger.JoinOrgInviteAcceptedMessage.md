---
title: "Class: JoinOrgInviteAcceptedMessage"
linkTitle: "JoinOrgInviteAcceptedMessage"
slug: "messenger.JoinOrgInviteAcceptedMessage"
---

[messenger](../../modules/messenger).JoinOrgInviteAcceptedMessage

## Hierarchy

-   [`Message`](../messenger.Message)<{ `confirmMemberUrl`: `string` ;
    `invitee`: `string` ; `orgName`: `string` }\>

    ↳ **`JoinOrgInviteAcceptedMessage`**

## Constructors

### constructor

• **new JoinOrgInviteAcceptedMessage**(`data`)

#### Parameters

| Name                    | Type     |
| :---------------------- | :------- |
| `data`                  | `Object` |
| `data.confirmMemberUrl` | `string` |
| `data.invitee`          | `string` |
| `data.orgName`          | `string` |

#### Inherited from

[Message](../messenger.Message).[constructor](messenger.Message.md#constructor)

#### Defined in

[core/src/messenger.ts:13](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L13)

## Properties

### data

• `Readonly` **data**: `Object`

#### Type declaration

| Name               | Type     |
| :----------------- | :------- |
| `confirmMemberUrl` | `string` |
| `invitee`          | `string` |
| `orgName`          | `string` |

#### Inherited from

[Message](../messenger.Message).[data](messenger.Message.md#data)

---

### template

• **template**: `string` = `"join-org-invite-accepted"`

Template name

#### Overrides

[Message](../messenger.Message).[template](messenger.Message.md#template)

#### Defined in

[core/src/messenger.ts:48](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L48)

## Accessors

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Overrides

Message.title

#### Defined in

[core/src/messenger.ts:50](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L50)

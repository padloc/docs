---
title: "Class: JoinOrgInviteMessage"
linkTitle: "JoinOrgInviteMessage"
slug: "messenger.JoinOrgInviteMessage"
---

[messenger](../../modules/messenger).JoinOrgInviteMessage

## Hierarchy

-   `OrgInviteMessage`

    ↳ **`JoinOrgInviteMessage`**

## Constructors

### constructor

• **new JoinOrgInviteMessage**(`data`)

#### Parameters

| Name                   | Type     |
| :--------------------- | :------- |
| `data`                 | `Object` |
| `data.acceptInviteUrl` | `string` |
| `data.invitedBy`       | `string` |
| `data.orgName`         | `string` |

#### Inherited from

OrgInviteMessage.constructor

#### Defined in

[core/src/messenger.ts:13](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L13)

## Properties

### data

• `Readonly` **data**: `Object`

#### Type declaration

| Name              | Type     |
| :---------------- | :------- |
| `acceptInviteUrl` | `string` |
| `invitedBy`       | `string` |
| `orgName`         | `string` |

#### Inherited from

OrgInviteMessage.data

---

### template

• **template**: `string` = `"join-org-invite"`

#### Overrides

OrgInviteMessage.template

#### Defined in

[core/src/messenger.ts:28](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L28)

## Accessors

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Overrides

OrgInviteMessage.title

#### Defined in

[core/src/messenger.ts:30](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L30)

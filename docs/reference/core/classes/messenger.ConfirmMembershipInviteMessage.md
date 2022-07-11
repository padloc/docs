---
title: "Class: ConfirmMembershipInviteMessage"
linkTitle: "ConfirmMembershipInviteMessage"
slug: "messenger.ConfirmMembershipInviteMessage"
---

[messenger](../../modules/messenger).ConfirmMembershipInviteMessage

## Hierarchy

-   `OrgInviteMessage`

    ↳ **`ConfirmMembershipInviteMessage`**

## Constructors

### constructor

• **new ConfirmMembershipInviteMessage**(`data`)

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

• **template**: `string` = `"confirm-org-member-invite"`

#### Overrides

OrgInviteMessage.template

#### Defined in

[core/src/messenger.ts:36](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L36)

## Accessors

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Overrides

OrgInviteMessage.title

#### Defined in

[core/src/messenger.ts:38](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L38)

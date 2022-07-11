---
title: "Enumeration: OrgRole"
linkTitle: "OrgRole"
slug: "org.OrgRole"
---

[org](../../modules/org).OrgRole

Role of a member within an organization, each associated with certain priviliges

## Enumeration Members

### Admin

• **Admin**

Organization admin. Can manage groups and vaults.

#### Defined in

[core/src/org.ts:22](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L22)

---

### Member

• **Member**

Basic organization member. Can read public organization data and read/write
certain [Vault](../../classes/vault.Vault.md)s they have been assigned to
directly or via [Group](../classes/org.Group)s.

#### Defined in

[core/src/org.ts:27](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L27)

---

### Owner

• **Owner**

Organization owner. Can manage members, groups and vaults. Owners have access to
the secret [Org.privateKey](../classes/org.Org.md#privatekey) and
[Org.invitesKey](../classes/org.Org.md#inviteskey) properties.

#### Defined in

[core/src/org.ts:18](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L18)

---

### Suspended

• **Suspended**

Suspended members can read public organization data and access [[Vaults]] they
have been assigned to, but are excluded from any updates to those vaults. Member
information (like public key and email address) of suspended members are
considered unverified, and need to be updated and verified via a membership
confirmation [Invite](../../classes/invite.Invite).

**`deprecated`** Use `OrgMemberStatus.Suspended` instead

#### Defined in

[core/src/org.ts:36](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L36)

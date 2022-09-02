---
title: "Class: Org"
linkTitle: "Org"
slug: "org.Org"
---

[org](../../modules/org).Org

Organizations are the central component of Padlocs secure data sharing
architecture.

All shared [Vault](../vault.Vault)s are provisioned and managed in the context
of an organization, while the [Org](../org.Org) class itself is responsible for
managing, signing and verifying public keys, identities and priviliges for all
of it's members.

Vaults can be assigned to members direcly or indirectly through
[Group](../org.Group)s. In both cases, this access can be declared _readonly_.

Before being added to an organization, members need to go throug a key exchange
procedure designed to allow verification of organization and member details by
both parties. See [Invite](../invite.Invite) class for details.

The [privateKey](../org.Org#privatekey) and [invitesKey](../org.Org#inviteskey)
properties are considered secret and are only accessible to members with the
[OrgRole.Owner](../enums/org.OrgRole#owner) role. To protect this information
from unauthorized access, [Org](../org.Org) extends the
[SharedContainer](../container.SharedContainer) class, encrypting this data at
rest.

#### Organization Structure

```
┌──────────────┐            ┌──────────────┐            ┌──────────────┐
│              │           ╱│              │╲           │              │
│   Account    │┼─────────○─│  Membership  │──┼────────┼│ Organization │
│              │           ╲│              │╱           │              │
└──────────────┘            └───┬──────┬───┘            └──────────────┘
                               ╲│╱    ╲│╱                       ┼
                                ○      ○                        ○
                                │      │                       ╱│╲
                                │      │                ┌──────────────┐
                                │      │               ╱│              │
                                │      └──────────────○─│    Group     │
                                │                      ╲│              │
                                ○                       └──────────────┘
                               ╱│╲                             ╲│╱
                        ┌──────────────┐                        ○
                        │              │╲                       │
                        │ Shared Vault │─○──────────────────────┘
                        │              │╱
                        └──────────────┘
```

## Hierarchy

-   [`SharedContainer`](../container.SharedContainer)

    ↳ **`Org`**

    ↳↳ [`UnlockedOrg`](../../interfaces/org.UnlockedOrg)

## Implements

-   [`Storable`](../storage.Storable)

## Constructors

### constructor

• **new Org**()

#### Inherited from

[SharedContainer](../container.SharedContainer).[constructor](../container.SharedContainer#constructor)

## Properties

### \_key

• `Protected` `Optional` **\_key**: `Uint8Array`

The key used for encryption. Sub classes must set this property in the
[unlock](../org.Org#unlock) method.

#### Inherited from

[SharedContainer](../container.SharedContainer).[\_key](../container.SharedContainer#_key)

#### Defined in

[core/src/container.ts:33](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L33)

---

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Implementation of

Storable.\_propertySerializationOptions

#### Inherited from

[SharedContainer](../container.SharedContainer).[\_propertySerializationOptions](../container.SharedContainer#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### accessors

• **accessors**: [`Accessor`](../container.Accessor)[] = `[]`

The ids and encrypted keys of all accessors

#### Inherited from

[SharedContainer](../container.SharedContainer).[accessors](../container.SharedContainer#accessors)

#### Defined in

[core/src/container.ts:159](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L159)

---

### created

• **created**: `Date`

Creation date

#### Defined in

[core/src/org.ts:240](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L240)

---

### directory

• **directory**: [`OrgDirectorySettings`](../org.OrgDirectorySettings)

#### Defined in

[core/src/org.ts:302](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L302)

---

### encryptedData

• `Optional` **encryptedData**: `Uint8Array`

Encrypted data

#### Inherited from

[SharedContainer](../container.SharedContainer).[encryptedData](../container.SharedContainer#encrypteddata)

#### Defined in

[core/src/container.ts:28](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L28)

---

### encryptionParams

• **encryptionParams**: [`AESEncryptionParams`](../crypto.AESEncryptionParams)

Parameters used for encryption of content data

#### Inherited from

[SharedContainer](../container.SharedContainer).[encryptionParams](../container.SharedContainer#encryptionparams)

#### Defined in

[core/src/container.ts:24](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L24)

---

### groups

• **groups**: [`Group`](../org.Group)[] = `[]`

This organizations [Group](../org.Group)s.

#### Defined in

[core/src/org.ts:292](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L292)

---

### id

• **id**: `string` = `""`

Unique identier

#### Implementation of

Storable.id

#### Defined in

[core/src/org.ts:233](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L233)

---

### invites

• **invites**: [`Invite`](../invite.Invite)[] = `[]`

Pending [Invite](../invite.Invite)s

#### Defined in

[core/src/org.ts:299](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L299)

---

### invitesKey

• `Optional` **invitesKey**: `Uint8Array`

AES key used as encryption key for [Invite](../invite.Invite)s

**`secret`** **IMPORTANT**: This property is considered **secret** and should
never stored or transmitted in plain text

#### Defined in

[core/src/org.ts:268](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L268)

---

### keyParams

• **keyParams**: [`RSAEncryptionParams`](../crypto.RSAEncryptionParams)

Parameters used to wrap the shared encryption key

#### Inherited from

[SharedContainer](../container.SharedContainer).[keyParams](../container.SharedContainer#keyparams)

#### Defined in

[core/src/container.ts:155](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L155)

---

### members

• **members**: [`OrgMember`](../org.OrgMember)[] = `[]`

Array of organization members

#### Defined in

[core/src/org.ts:288](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L288)

---

### minMemberUpdated

• **minMemberUpdated**: `Date`

Minimum accepted update time for organization members. Any members with a
[OrgMember.updated](../org.OrgMember#updated) value lower than this should be
considered invalid.

In order to prevent an attacker from rolling back this value, all clients should
verify that updated organization object always have a
[Org.minMemberUpdated](../org.Org#minmemberupdated) value equal to or higher
than the previous one.

#### Defined in

[core/src/org.ts:280](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L280)

---

### name

• **name**: `string` = `""`

Organization name

#### Defined in

[core/src/org.ts:236](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L236)

---

### privateKey

• `Optional` **privateKey**: `Uint8Array`

Private key used for signing member details

**`secret`** **IMPORTANT**: This property is considered **secret** and should
never stored or transmitted in plain text

#### Defined in

[core/src/org.ts:258](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L258)

---

### publicKey

• `Optional` **publicKey**: `Uint8Array`

Public key used for verifying member signatures

#### Defined in

[core/src/org.ts:248](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L248)

---

### revision

• **revision**: `string` = `""`

Revision id used for ensuring continuity when synchronizing the account object
between client and server

#### Defined in

[core/src/org.ts:308](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L308)

---

### signingParams

• **signingParams**: [`RSASigningParams`](../crypto.RSASigningParams)

Parameters for creating member signatures

#### Defined in

[core/src/org.ts:284](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L284)

---

### updated

• **updated**: `Date`

Last updated

#### Defined in

[core/src/org.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L244)

---

### vaults

• **vaults**: { `id`: `string` ; `name`: `string` ; `revision?`: `string` }[] =
`[]`

Shared [Vault](../vault.Vault)s owned by this organization

#### Defined in

[core/src/org.ts:295](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L295)

## Accessors

### info

• `get` **info**(): [`OrgInfo`](../../interfaces/org.OrgInfo)

#### Returns

[`OrgInfo`](../../interfaces/org.OrgInfo)

#### Defined in

[core/src/org.ts:315](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L315)

---

### kind

• `get` **kind**(): `string`

A string representing the objects "type", useful for segmenting storage, among
other things. Defaults to the lowercase class name, but can be overwritten by
subclasses

#### Returns

`string`

#### Implementation of

Storable.kind

#### Inherited from

SharedContainer.kind

#### Defined in

[core/src/encoding.ts:159](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L159)

---

### owner

• `get` **owner**(): `undefined` \| [`OrgMember`](../org.OrgMember)

[Account](../account.Account) which created this organization

#### Returns

`undefined` \| [`OrgMember`](../org.OrgMember)

#### Defined in

[core/src/org.ts:311](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L311)

## Methods

### \_fromRaw

▸ `Protected` **\_fromRaw**(`raw`): `void`

Restore values from a raw object. The default implementation simply copies over
all iterable properties from the base object. Overwrite this method for
properties that require special treatment

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

`void`

#### Implementation of

Storable.\_fromRaw

#### Inherited from

[SharedContainer](../container.SharedContainer).[\_fromRaw](../container.SharedContainer#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](../org.Org#toraw) on any properties that are
themselfes instances of [Serializable](../encoding.Serializable). This method
should be overwritten by subclasses if certain properties require special
treatment.

#### Parameters

| Name      | Type                    |
| :-------- | :---------------------- |
| `version` | `undefined` \| `string` |

#### Returns

`any`

#### Implementation of

Storable.\_toRaw

#### Inherited from

[SharedContainer](../container.SharedContainer).[\_toRaw](../container.SharedContainer#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### addOrUpdateMember

▸ **addOrUpdateMember**(`__namedParameters`): `Promise`<`void`\>

Adds a member to the organization, or updates the existing member with the same
id.

#### Parameters

| Name                              | Type                                                 |
| :-------------------------------- | :--------------------------------------------------- |
| `__namedParameters`               | `Object`                                             |
| `__namedParameters.accountId?`    | `string`                                             |
| `__namedParameters.email`         | `string`                                             |
| `__namedParameters.name`          | `string`                                             |
| `__namedParameters.orgSignature?` | `Uint8Array`                                         |
| `__namedParameters.publicKey?`    | `Uint8Array`                                         |
| `__namedParameters.role?`         | [`OrgRole`](../../enums/org.OrgRole)                 |
| `__namedParameters.status?`       | [`OrgMemberStatus`](../../enums/org.OrgMemberStatus) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/org.ts:616](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L616)

---

### canRead

▸ **canRead**(`vault`, `account`): `undefined` \| `boolean`

Check whether the given `account` has read access to a `vault`

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `vault`         | `Object` |
| `vault.id`      | `string` |
| `account`       | `Object` |
| `account.email` | `string` |

#### Returns

`undefined` \| `boolean`

#### Defined in

[core/src/org.ts:426](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L426)

---

### canWrite

▸ **canWrite**(`vault`, `acc`): `undefined` \| `boolean`

Check whether the given `account` has write access to a `vault`

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `vault`     | `Object` |
| `vault.id`  | `string` |
| `acc`       | `Object` |
| `acc.email` | `string` |

#### Returns

`undefined` \| `boolean`

#### Defined in

[core/src/org.ts:436](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L436)

---

### clone

▸ **clone**(): [`Org`](../org.Org)

Creates a deep clone of the object

#### Returns

[`Org`](../org.Org)

#### Implementation of

Storable.clone

#### Inherited from

[SharedContainer](../container.SharedContainer).[clone](../container.SharedContainer#clone)

#### Defined in

[core/src/container.ts:85](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L85)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`Org`](../org.Org)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`Org`](../org.Org)

#### Implementation of

Storable.fromBytes

#### Inherited from

[SharedContainer](../container.SharedContainer).[fromBytes](../container.SharedContainer#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`Org`](../org.Org)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`Org`](../org.Org)

#### Implementation of

Storable.fromJSON

#### Inherited from

[SharedContainer](../container.SharedContainer).[fromJSON](../container.SharedContainer#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`Org`](../org.Org)

Restores propertiers from a raw object of the same form generated by
[toRaw](../org.Org#toraw). The base implementation blindly copies over values
from the raw object via `Object.assign` so subclasses should explictly process
any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../org.Org#_fromraw) method to implement
subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`Org`](../org.Org)

#### Implementation of

Storable.fromRaw

#### Inherited from

[SharedContainer](../container.SharedContainer).[fromRaw](../container.SharedContainer#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### generateKeys

▸ **generateKeys**(): `Promise`<`void`\>

Generates a new [publicKey](../org.Org#publickey),
[privateKey](../org.Org#privatekey) and [invitesKey](../org.Org#inviteskey) and
encrypts the latter two

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/org.ts:496](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L496)

---

### getAccessors

▸ **getAccessors**(`vault`):
[`ActiveOrgMember`](../../interfaces/org.ActiveOrgMember)[]

Get all membes that have acess to a given `vault`, either directly or through a
[Group](../org.Group)

#### Parameters

| Name    | Type                      |
| :------ | :------------------------ |
| `vault` | [`Vault`](../vault.Vault) |

#### Returns

[`ActiveOrgMember`](../../interfaces/org.ActiveOrgMember)[]

#### Defined in

[core/src/org.ts:391](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L391)

---

### getData

▸ **getData**(): `Promise`<`Uint8Array`\>

Decrypts and extracts the plain text data from the container. This will usually
require unlocking the container first.

#### Returns

`Promise`<`Uint8Array`\>

#### Inherited from

[SharedContainer](../container.SharedContainer).[getData](../container.SharedContainer#getdata)

#### Defined in

[core/src/container.ts:61](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L61)

---

### getGroup

▸ **getGroup**(`name`): `undefined` \| [`Group`](../org.Group)

Get group with the given `name`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`undefined` \| [`Group`](../org.Group)

#### Defined in

[core/src/org.ts:355](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L355)

---

### getGroupsForMember

▸ **getGroupsForMember**(`__namedParameters`): [`Group`](../org.Group)[]

Get all [Group](../org.Group)s the given [Account](../account.Account) is a
member of

#### Parameters

| Name                      | Type     |
| :------------------------ | :------- |
| `__namedParameters`       | `Object` |
| `__namedParameters.email` | `string` |

#### Returns

[`Group`](../org.Group)[]

#### Defined in

[core/src/org.ts:370](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L370)

---

### getGroupsForVault

▸ **getGroupsForVault**(`__namedParameters`): [`Group`](../org.Group)[]

Get all groups assigned to a given [Vault](../vault.Vault)

#### Parameters

| Name                   | Type     |
| :--------------------- | :------- |
| `__namedParameters`    | `Object` |
| `__namedParameters.id` | `string` |

#### Returns

[`Group`](../org.Group)[]

#### Defined in

[core/src/org.ts:375](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L375)

---

### getInvite

▸ **getInvite**(`id`): `undefined` \| [`Invite`](../invite.Invite)

Get the invite with the given `id`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| [`Invite`](../invite.Invite)

#### Defined in

[core/src/org.ts:449](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L449)

---

### getMember

▸ **getMember**(`__namedParameters`): `undefined` \|
[`OrgMember`](../org.OrgMember)

Get the [OrgMember](../org.OrgMember) object for this
[Account](../account.Account)

#### Parameters

| Name                | Type                                                                                             |
| :------------------ | :----------------------------------------------------------------------------------------------- |
| `__namedParameters` | { `accountId?`: `string` ; `email`: `string` } \| { `accountId`: `string` ; `email?`: `string` } |

#### Returns

`undefined` \| [`OrgMember`](../org.OrgMember)

#### Defined in

[core/src/org.ts:345](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L345)

---

### getMembersForGroup

▸ **getMembersForGroup**(`group`): [`OrgMember`](../org.OrgMember)[]

Get all members of a given `group`

#### Parameters

| Name    | Type                    |
| :------ | :---------------------- |
| `group` | [`Group`](../org.Group) |

#### Returns

[`OrgMember`](../org.OrgMember)[]

#### Defined in

[core/src/org.ts:360](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L360)

---

### getMembersForVault

▸ **getMembersForVault**(`__namedParameters`):
[`ActiveOrgMember`](../../interfaces/org.ActiveOrgMember)[]

Get all members directly assigned to a given [Vault](../vault.Vault)

#### Parameters

| Name                   | Type     |
| :--------------------- | :------- |
| `__namedParameters`    | `Object` |
| `__namedParameters.id` | `string` |

#### Returns

[`ActiveOrgMember`](../../interfaces/org.ActiveOrgMember)[]

#### Defined in

[core/src/org.ts:380](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L380)

---

### getVaultsForMember

▸ **getVaultsForMember**(`acc`): { `id`: `string` ; `name`: `string` ;
`revision?`: `string` }[]

Get all vaults the given member has access to

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `acc`       | `Object` |
| `acc.email` | `string` |

#### Returns

{ `id`: `string` ; `name`: `string` ; `revision?`: `string` }[]

#### Defined in

[core/src/org.ts:407](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L407)

---

### initialize

▸ **initialize**(`account`): `Promise`<`void`\>

Initializes the organization, generating [publicKey](../org.Org#publickey),
[privateKey](../org.Org#privatekey), and [invitesKey](../org.Org#inviteskey) and
adding the given `account` as the organization owner.

#### Parameters

| Name      | Type                            |
| :-------- | :------------------------------ |
| `account` | [`Account`](../account.Account) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/org.ts:463](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L463)

---

### isAdmin

▸ **isAdmin**(`m`): `boolean`

Whether the given [Account](../account.Account) is an
[OrgRole.Admin](../enums/org.OrgRole#admin)

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `m`       | `Object` |
| `m.email` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/org.ts:333](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L333)

---

### isMember

▸ **isMember**(`acc`): `boolean`

Whether the given [Account](../account.Account) is an organization member

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `acc`       | `Object` |
| `acc.email` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/org.ts:350](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L350)

---

### isOwner

▸ **isOwner**(`__namedParameters`): `boolean`

Whether the given [Account](../account.Account) is an
[OrgRole.Owner](../enums/org.OrgRole#owner)

#### Parameters

| Name                      | Type     |
| :------------------------ | :------- |
| `__namedParameters`       | `Object` |
| `__namedParameters.email` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/org.ts:328](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L328)

---

### isSuspended

▸ **isSuspended**(`m`): `boolean`

Whether the given [Account](../account.Account) is currently suspended

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `m`       | `Object` |
| `m.email` | `string` |

#### Returns

`boolean`

#### Defined in

[core/src/org.ts:339](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L339)

---

### lock

▸ **lock**(): `void`

Locks the container, removing the possibility to extract the plain text data via
[getData](../org.Org#getdata) until the container is unlocked again. Subclasses
extending this class must take care to delete any keys or other sensitive data
that may have been stored temporarily after unlocking the container.

#### Returns

`void`

#### Overrides

[SharedContainer](../container.SharedContainer).[lock](../container.SharedContainer#lock)

#### Defined in

[core/src/org.ts:537](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L537)

---

### makeOwner

▸ **makeOwner**(`member`): `Promise`<`void`\>

Transfers organization ownership to a different member

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `member`       | `Object` |
| `member.email` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/org.ts:685](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L685)

---

### removeInvite

▸ **removeInvite**(`__namedParameters`): `void`

Remove an invite

#### Parameters

| Name                | Type                         |
| :------------------ | :--------------------------- |
| `__namedParameters` | [`Invite`](../invite.Invite) |

#### Returns

`void`

#### Defined in

[core/src/org.ts:454](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L454)

---

### removeMember

▸ **removeMember**(`member`, `reSignMembers?`): `Promise`<`void`\>

Removes a member from the organization

#### Parameters

| Name            | Type      | Default value |
| :-------------- | :-------- | :------------ |
| `member`        | `Object`  | `undefined`   |
| `member.email`  | `string`  | `undefined`   |
| `reSignMembers` | `boolean` | `true`        |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/org.ts:655](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L655)

---

### rotateKeys

▸ **rotateKeys**(`force?`): `Promise`<`void`\>

Regenerates all cryptographic keys and updates all member signatures

#### Parameters

| Name    | Type      | Default value |
| :------ | :-------- | :------------ |
| `force` | `boolean` | `false`       |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/org.ts:507](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L507)

---

### setData

▸ **setData**(`data`): `Promise`<`void`\>

Encrypts the provided `data` and stores it in the container

#### Parameters

| Name   | Type         |
| :----- | :----------- |
| `data` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[SharedContainer](../container.SharedContainer).[setData](../container.SharedContainer#setdata)

#### Defined in

[core/src/container.ts:38](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L38)

---

### sign

▸ **sign**(`member`): `Promise`<[`OrgMember`](../org.OrgMember)\>

Signs the `member`s public key, id, role and email address so they can be
verified later

#### Parameters

| Name     | Type                            |
| :------- | :------------------------------ |
| `member` | [`OrgMember`](../org.OrgMember) |

#### Returns

`Promise`<[`OrgMember`](../org.OrgMember)\>

#### Defined in

[core/src/org.ts:547](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L547)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Implementation of

Storable.toBytes

#### Inherited from

[SharedContainer](../container.SharedContainer).[toBytes](../container.SharedContainer#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Implementation of

Storable.toJSON

#### Inherited from

[SharedContainer](../container.SharedContainer).[toJSON](../container.SharedContainer#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](../org.Org#_toraw) for subclass-specific behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Implementation of

Storable.toRaw

#### Inherited from

[SharedContainer](../container.SharedContainer).[toRaw](../container.SharedContainer#toraw)

#### Defined in

[core/src/encoding.ts:179](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L179)

---

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[core/src/org.ts:717](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L717)

---

### unlock

▸ **unlock**(`account`): `Promise`<`void`\>

"Unlocks" the organization, granting access to the organizations
[privateKey](../org.Org#privatekey) and [invitesKey](../org.Org#inviteskey)
properties.

#### Parameters

| Name      | Type                                                          |
| :-------- | :------------------------------------------------------------ |
| `account` | [`UnlockedAccount`](../../interfaces/account.UnlockedAccount) |

#### Returns

`Promise`<`void`\>

#### Overrides

[SharedContainer](../container.SharedContainer).[unlock](../container.SharedContainer#unlock)

#### Defined in

[core/src/org.ts:529](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L529)

---

### updateAccessors

▸ **updateAccessors**(`subjects`): `Promise`<`void`\>

Updates the containers accessors, generating a new shared key and encrypting it
with the public keys of the provided **subjects**. Non-empty containers need to
be unlocked first.

#### Parameters

| Name       | Type                                             |
| :--------- | :----------------------------------------------- |
| `subjects` | { `id`: `string` ; `publicKey`: `Uint8Array` }[] |

#### Returns

`Promise`<`void`\>

#### Inherited from

[SharedContainer](../container.SharedContainer).[updateAccessors](../container.SharedContainer#updateaccessors)

#### Defined in

[core/src/container.ts:189](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L189)

---

### validate

▸ **validate**(): `boolean`

This is called during deserialization and should verify that all properties have
been populated with values of the correct type. Subclasses should implement this
method based on their class structure.

#### Returns

`boolean`

#### Implementation of

Storable.validate

#### Overrides

[SharedContainer](../container.SharedContainer).[validate](../container.SharedContainer#validate)

#### Defined in

[core/src/org.ts:709](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L709)

---

### verify

▸ **verify**(`member`): `Promise`<`void`\>

Verifies the `member`s public key, id, role and email address. Throws if
verification fails.

#### Parameters

| Name     | Type                            |
| :------- | :------------------------------ |
| `member` | [`OrgMember`](../org.OrgMember) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/org.ts:577](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L577)

---

### verifyAll

▸ **verifyAll**(`members?`): `Promise`<`void`\>

Verify all provided `members`, throws if verification fails for any of them.

#### Parameters

| Name      | Type                              |
| :-------- | :-------------------------------- |
| `members` | [`OrgMember`](../org.OrgMember)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/org.ts:608](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L608)

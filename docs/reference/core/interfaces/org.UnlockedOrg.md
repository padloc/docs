---
title: "Interface: UnlockedOrg"
linkTitle: "UnlockedOrg"
slug: "org.UnlockedOrg"
---

[org](../../modules/org).UnlockedOrg

## Hierarchy

-   [`Org`](../../classes/org.Org)

    ↳ **`UnlockedOrg`**

## Properties

### \_key

• `Protected` `Optional` **\_key**: `Uint8Array`

The key used for encryption. Sub classes must set this property in the
[unlock](../org.UnlockedOrg#unlock) method.

#### Inherited from

[Org](../../classes/org.Org).[\_key](../classes/org.Org#_key)

#### Defined in

[core/src/container.ts:33](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L33)

---

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../encoding.SerializationOptions)[]

#### Inherited from

[Org](../../classes/org.Org).[\_propertySerializationOptions](../classes/org.Org#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### accessors

• **accessors**: [`Accessor`](../../classes/container.Accessor)[] = `[]`

The ids and encrypted keys of all accessors

#### Inherited from

[Org](../../classes/org.Org).[accessors](../classes/org.Org#accessors)

#### Defined in

[core/src/container.ts:159](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L159)

---

### created

• **created**: `Date`

Creation date

#### Inherited from

[Org](../../classes/org.Org).[created](../classes/org.Org#created)

#### Defined in

[core/src/org.ts:240](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L240)

---

### directory

• **directory**:
[`OrgDirectorySettings`](../../classes/org.OrgDirectorySettings)

#### Inherited from

[Org](../../classes/org.Org).[directory](../classes/org.Org#directory)

#### Defined in

[core/src/org.ts:302](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L302)

---

### encryptedData

• `Optional` **encryptedData**: `Uint8Array`

Encrypted data

#### Inherited from

[Org](../../classes/org.Org).[encryptedData](../classes/org.Org#encrypteddata)

#### Defined in

[core/src/container.ts:28](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L28)

---

### encryptionParams

• **encryptionParams**:
[`AESEncryptionParams`](../../classes/crypto.AESEncryptionParams)

Parameters used for encryption of content data

#### Inherited from

[Org](../../classes/org.Org).[encryptionParams](../classes/org.Org#encryptionparams)

#### Defined in

[core/src/container.ts:24](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L24)

---

### groups

• **groups**: [`Group`](../../classes/org.Group)[] = `[]`

This organizations [Group](../../classes/org.Group)s.

#### Inherited from

[Org](../../classes/org.Org).[groups](../classes/org.Org#groups)

#### Defined in

[core/src/org.ts:292](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L292)

---

### id

• **id**: `string` = `""`

Unique identier

#### Inherited from

[Org](../../classes/org.Org).[id](../classes/org.Org#id)

#### Defined in

[core/src/org.ts:233](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L233)

---

### invites

• **invites**: [`Invite`](../../classes/invite.Invite)[] = `[]`

Pending [Invite](../../classes/invite.Invite)s

#### Inherited from

[Org](../../classes/org.Org).[invites](../classes/org.Org#invites)

#### Defined in

[core/src/org.ts:299](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L299)

---

### invitesKey

• **invitesKey**: `Uint8Array`

AES key used as encryption key for [Invite](../../classes/invite.Invite)s

#### Overrides

[Org](../../classes/org.Org).[invitesKey](../classes/org.Org#inviteskey)

#### Defined in

[core/src/org.ts:724](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L724)

---

### keyParams

• **keyParams**:
[`RSAEncryptionParams`](../../classes/crypto.RSAEncryptionParams)

Parameters used to wrap the shared encryption key

#### Inherited from

[Org](../../classes/org.Org).[keyParams](../classes/org.Org#keyparams)

#### Defined in

[core/src/container.ts:155](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L155)

---

### members

• **members**: [`OrgMember`](../../classes/org.OrgMember)[] = `[]`

Array of organization members

#### Inherited from

[Org](../../classes/org.Org).[members](../classes/org.Org#members)

#### Defined in

[core/src/org.ts:288](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L288)

---

### minMemberUpdated

• **minMemberUpdated**: `Date`

Minimum accepted update time for organization members. Any members with a
[OrgMember.updated](../classes/org.OrgMember#updated) value lower than this
should be considered invalid.

In order to prevent an attacker from rolling back this value, all clients should
verify that updated organization object always have a
[Org.minMemberUpdated](../classes/org.Org#minmemberupdated) value equal to or
higher than the previous one.

#### Inherited from

[Org](../../classes/org.Org).[minMemberUpdated](../classes/org.Org#minmemberupdated)

#### Defined in

[core/src/org.ts:280](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L280)

---

### name

• **name**: `string` = `""`

Organization name

#### Inherited from

[Org](../../classes/org.Org).[name](../classes/org.Org#name)

#### Defined in

[core/src/org.ts:236](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L236)

---

### privateKey

• **privateKey**: `Uint8Array`

Private key used for signing member details

#### Overrides

[Org](../../classes/org.Org).[privateKey](../classes/org.Org#privatekey)

#### Defined in

[core/src/org.ts:723](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L723)

---

### publicKey

• `Optional` **publicKey**: `Uint8Array`

Public key used for verifying member signatures

#### Inherited from

[Org](../../classes/org.Org).[publicKey](../classes/org.Org#publickey)

#### Defined in

[core/src/org.ts:248](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L248)

---

### revision

• **revision**: `string` = `""`

Revision id used for ensuring continuity when synchronizing the account object
between client and server

#### Inherited from

[Org](../../classes/org.Org).[revision](../classes/org.Org#revision)

#### Defined in

[core/src/org.ts:308](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L308)

---

### signingParams

• **signingParams**: [`RSASigningParams`](../../classes/crypto.RSASigningParams)

Parameters for creating member signatures

#### Inherited from

[Org](../../classes/org.Org).[signingParams](../classes/org.Org#signingparams)

#### Defined in

[core/src/org.ts:284](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L284)

---

### updated

• **updated**: `Date`

Last updated

#### Inherited from

[Org](../../classes/org.Org).[updated](../classes/org.Org#updated)

#### Defined in

[core/src/org.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L244)

---

### vaults

• **vaults**: { `id`: `string` ; `name`: `string` ; `revision?`: `string` }[] =
`[]`

Shared [Vault](../../classes/vault.Vault)s owned by this organization

#### Inherited from

[Org](../../classes/org.Org).[vaults](../classes/org.Org#vaults)

#### Defined in

[core/src/org.ts:295](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L295)

## Accessors

### info

• `get` **info**(): [`OrgInfo`](../org.OrgInfo)

#### Returns

[`OrgInfo`](../org.OrgInfo)

#### Inherited from

Org.info

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

#### Inherited from

Org.kind

#### Defined in

[core/src/encoding.ts:159](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L159)

---

### owner

• `get` **owner**(): `undefined` \| [`OrgMember`](../../classes/org.OrgMember)

[Account](../../classes/account.Account) which created this organization

#### Returns

`undefined` \| [`OrgMember`](../../classes/org.OrgMember)

#### Inherited from

Org.owner

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

#### Inherited from

[Org](../../classes/org.Org).[\_fromRaw](../classes/org.Org#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](../org.UnlockedOrg#toraw) on any properties
that are themselfes instances of
[Serializable](../../classes/encoding.Serializable). This method should be
overwritten by subclasses if certain properties require special treatment.

#### Parameters

| Name      | Type                    |
| :-------- | :---------------------- |
| `version` | `undefined` \| `string` |

#### Returns

`any`

#### Inherited from

[Org](../../classes/org.Org).[\_toRaw](../classes/org.Org#_toraw)

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

#### Inherited from

[Org](../../classes/org.Org).[addOrUpdateMember](../classes/org.Org#addorupdatemember)

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

#### Inherited from

[Org](../../classes/org.Org).[canRead](../classes/org.Org#canread)

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

#### Inherited from

[Org](../../classes/org.Org).[canWrite](../classes/org.Org#canwrite)

#### Defined in

[core/src/org.ts:436](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L436)

---

### clone

▸ **clone**(): [`UnlockedOrg`](../org.UnlockedOrg)

Creates a deep clone of the object

#### Returns

[`UnlockedOrg`](../org.UnlockedOrg)

#### Inherited from

[Org](../../classes/org.Org).[clone](../classes/org.Org#clone)

#### Defined in

[core/src/container.ts:85](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L85)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`UnlockedOrg`](../org.UnlockedOrg)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`UnlockedOrg`](../org.UnlockedOrg)

#### Inherited from

[Org](../../classes/org.Org).[fromBytes](../classes/org.Org#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`UnlockedOrg`](../org.UnlockedOrg)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`UnlockedOrg`](../org.UnlockedOrg)

#### Inherited from

[Org](../../classes/org.Org).[fromJSON](../classes/org.Org#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`UnlockedOrg`](../org.UnlockedOrg)

Restores propertiers from a raw object of the same form generated by
[toRaw](../org.UnlockedOrg#toraw). The base implementation blindly copies over
values from the raw object via `Object.assign` so subclasses should explictly
process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../org.UnlockedOrg#_fromraw) method to
implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`UnlockedOrg`](../org.UnlockedOrg)

#### Inherited from

[Org](../../classes/org.Org).[fromRaw](../classes/org.Org#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### generateKeys

▸ **generateKeys**(): `Promise`<`void`\>

Generates a new [publicKey](../org.UnlockedOrg#publickey),
[privateKey](../org.UnlockedOrg#privatekey) and
[invitesKey](../org.UnlockedOrg#inviteskey) and encrypts the latter two

#### Returns

`Promise`<`void`\>

#### Inherited from

[Org](../../classes/org.Org).[generateKeys](../classes/org.Org#generatekeys)

#### Defined in

[core/src/org.ts:496](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L496)

---

### getAccessors

▸ **getAccessors**(`vault`): [`ActiveOrgMember`](../org.ActiveOrgMember)[]

Get all membes that have acess to a given `vault`, either directly or through a
[Group](../../classes/org.Group)

#### Parameters

| Name    | Type                                 |
| :------ | :----------------------------------- |
| `vault` | [`Vault`](../../classes/vault.Vault) |

#### Returns

[`ActiveOrgMember`](../org.ActiveOrgMember)[]

#### Inherited from

[Org](../../classes/org.Org).[getAccessors](../classes/org.Org#getaccessors)

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

[Org](../../classes/org.Org).[getData](../classes/org.Org#getdata)

#### Defined in

[core/src/container.ts:61](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L61)

---

### getGroup

▸ **getGroup**(`name`): `undefined` \| [`Group`](../../classes/org.Group)

Get group with the given `name`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`undefined` \| [`Group`](../../classes/org.Group)

#### Inherited from

[Org](../../classes/org.Org).[getGroup](../classes/org.Org#getgroup)

#### Defined in

[core/src/org.ts:355](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L355)

---

### getGroupsForMember

▸ **getGroupsForMember**(`__namedParameters`):
[`Group`](../../classes/org.Group)[]

Get all [Group](../../classes/org.Group)s the given
[Account](../classes/account.Account) is a member of

#### Parameters

| Name                      | Type     |
| :------------------------ | :------- |
| `__namedParameters`       | `Object` |
| `__namedParameters.email` | `string` |

#### Returns

[`Group`](../../classes/org.Group)[]

#### Inherited from

[Org](../../classes/org.Org).[getGroupsForMember](../classes/org.Org#getgroupsformember)

#### Defined in

[core/src/org.ts:370](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L370)

---

### getGroupsForVault

▸ **getGroupsForVault**(`__namedParameters`):
[`Group`](../../classes/org.Group)[]

Get all groups assigned to a given [Vault](../../classes/vault.Vault)

#### Parameters

| Name                   | Type     |
| :--------------------- | :------- |
| `__namedParameters`    | `Object` |
| `__namedParameters.id` | `string` |

#### Returns

[`Group`](../../classes/org.Group)[]

#### Inherited from

[Org](../../classes/org.Org).[getGroupsForVault](../classes/org.Org#getgroupsforvault)

#### Defined in

[core/src/org.ts:375](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L375)

---

### getInvite

▸ **getInvite**(`id`): `undefined` \| [`Invite`](../../classes/invite.Invite)

Get the invite with the given `id`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| [`Invite`](../../classes/invite.Invite)

#### Inherited from

[Org](../../classes/org.Org).[getInvite](../classes/org.Org#getinvite)

#### Defined in

[core/src/org.ts:449](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L449)

---

### getMember

▸ **getMember**(`__namedParameters`): `undefined` \|
[`OrgMember`](../../classes/org.OrgMember)

Get the [OrgMember](../../classes/org.OrgMember) object for this
[Account](../classes/account.Account)

#### Parameters

| Name                | Type                                                                                             |
| :------------------ | :----------------------------------------------------------------------------------------------- |
| `__namedParameters` | { `accountId?`: `string` ; `email`: `string` } \| { `accountId`: `string` ; `email?`: `string` } |

#### Returns

`undefined` \| [`OrgMember`](../../classes/org.OrgMember)

#### Inherited from

[Org](../../classes/org.Org).[getMember](../classes/org.Org#getmember)

#### Defined in

[core/src/org.ts:345](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L345)

---

### getMembersForGroup

▸ **getMembersForGroup**(`group`): [`OrgMember`](../../classes/org.OrgMember)[]

Get all members of a given `group`

#### Parameters

| Name    | Type                               |
| :------ | :--------------------------------- |
| `group` | [`Group`](../../classes/org.Group) |

#### Returns

[`OrgMember`](../../classes/org.OrgMember)[]

#### Inherited from

[Org](../../classes/org.Org).[getMembersForGroup](../classes/org.Org#getmembersforgroup)

#### Defined in

[core/src/org.ts:360](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L360)

---

### getMembersForVault

▸ **getMembersForVault**(`__namedParameters`):
[`ActiveOrgMember`](../org.ActiveOrgMember)[]

Get all members directly assigned to a given [Vault](../../classes/vault.Vault)

#### Parameters

| Name                   | Type     |
| :--------------------- | :------- |
| `__namedParameters`    | `Object` |
| `__namedParameters.id` | `string` |

#### Returns

[`ActiveOrgMember`](../org.ActiveOrgMember)[]

#### Inherited from

[Org](../../classes/org.Org).[getMembersForVault](../classes/org.Org#getmembersforvault)

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

#### Inherited from

[Org](../../classes/org.Org).[getVaultsForMember](../classes/org.Org#getvaultsformember)

#### Defined in

[core/src/org.ts:407](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L407)

---

### initialize

▸ **initialize**(`account`): `Promise`<`void`\>

Initializes the organization, generating
[publicKey](../org.UnlockedOrg#publickey),
[privateKey](../org.UnlockedOrg#privatekey), and
[invitesKey](../org.UnlockedOrg#inviteskey) and adding the given `account` as
the organization owner.

#### Parameters

| Name      | Type                                       |
| :-------- | :----------------------------------------- |
| `account` | [`Account`](../../classes/account.Account) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Org](../../classes/org.Org).[initialize](../classes/org.Org#initialize)

#### Defined in

[core/src/org.ts:463](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L463)

---

### isAdmin

▸ **isAdmin**(`m`): `boolean`

Whether the given [Account](../../classes/account.Account) is an
[OrgRole.Admin](../enums/org.OrgRole#admin)

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `m`       | `Object` |
| `m.email` | `string` |

#### Returns

`boolean`

#### Inherited from

[Org](../../classes/org.Org).[isAdmin](../classes/org.Org#isadmin)

#### Defined in

[core/src/org.ts:333](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L333)

---

### isMember

▸ **isMember**(`acc`): `boolean`

Whether the given [Account](../../classes/account.Account) is an organization
member

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `acc`       | `Object` |
| `acc.email` | `string` |

#### Returns

`boolean`

#### Inherited from

[Org](../../classes/org.Org).[isMember](../classes/org.Org#ismember)

#### Defined in

[core/src/org.ts:350](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L350)

---

### isOwner

▸ **isOwner**(`__namedParameters`): `boolean`

Whether the given [Account](../../classes/account.Account) is an
[OrgRole.Owner](../enums/org.OrgRole#owner)

#### Parameters

| Name                      | Type     |
| :------------------------ | :------- |
| `__namedParameters`       | `Object` |
| `__namedParameters.email` | `string` |

#### Returns

`boolean`

#### Inherited from

[Org](../../classes/org.Org).[isOwner](../classes/org.Org#isowner)

#### Defined in

[core/src/org.ts:328](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L328)

---

### isSuspended

▸ **isSuspended**(`m`): `boolean`

Whether the given [Account](../../classes/account.Account) is currently
suspended

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `m`       | `Object` |
| `m.email` | `string` |

#### Returns

`boolean`

#### Inherited from

[Org](../../classes/org.Org).[isSuspended](../classes/org.Org#issuspended)

#### Defined in

[core/src/org.ts:339](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L339)

---

### lock

▸ **lock**(): `void`

Locks the container, removing the possibility to extract the plain text data via
[getData](../org.UnlockedOrg#getdata) until the container is unlocked again.
Subclasses extending this class must take care to delete any keys or other
sensitive data that may have been stored temporarily after unlocking the
container.

#### Returns

`void`

#### Inherited from

[Org](../../classes/org.Org).[lock](../classes/org.Org#lock)

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

#### Inherited from

[Org](../../classes/org.Org).[makeOwner](../classes/org.Org#makeowner)

#### Defined in

[core/src/org.ts:685](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L685)

---

### removeInvite

▸ **removeInvite**(`__namedParameters`): `void`

Remove an invite

#### Parameters

| Name                | Type                                    |
| :------------------ | :-------------------------------------- |
| `__namedParameters` | [`Invite`](../../classes/invite.Invite) |

#### Returns

`void`

#### Inherited from

[Org](../../classes/org.Org).[removeInvite](../classes/org.Org#removeinvite)

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

#### Inherited from

[Org](../../classes/org.Org).[removeMember](../classes/org.Org#removemember)

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

#### Inherited from

[Org](../../classes/org.Org).[rotateKeys](../classes/org.Org#rotatekeys)

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

[Org](../../classes/org.Org).[setData](../classes/org.Org#setdata)

#### Defined in

[core/src/container.ts:38](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L38)

---

### sign

▸ **sign**(`member`): `Promise`<[`OrgMember`](../../classes/org.OrgMember)\>

Signs the `member`s public key, id, role and email address so they can be
verified later

#### Parameters

| Name     | Type                                       |
| :------- | :----------------------------------------- |
| `member` | [`OrgMember`](../../classes/org.OrgMember) |

#### Returns

`Promise`<[`OrgMember`](../../classes/org.OrgMember)\>

#### Inherited from

[Org](../../classes/org.Org).[sign](../classes/org.Org#sign)

#### Defined in

[core/src/org.ts:547](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L547)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Inherited from

[Org](../../classes/org.Org).[toBytes](../classes/org.Org#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Inherited from

[Org](../../classes/org.Org).[toJSON](../classes/org.Org#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](../org.UnlockedOrg#_toraw) for subclass-specific
behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Inherited from

[Org](../../classes/org.Org).[toRaw](../classes/org.Org#toraw)

#### Defined in

[core/src/encoding.ts:179](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L179)

---

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Org](../../classes/org.Org).[toString](../classes/org.Org#tostring)

#### Defined in

[core/src/org.ts:717](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L717)

---

### unlock

▸ **unlock**(`account`): `Promise`<`void`\>

"Unlocks" the organization, granting access to the organizations
[privateKey](../org.UnlockedOrg#privatekey) and
[invitesKey](../org.UnlockedOrg#inviteskey) properties.

#### Parameters

| Name      | Type                                            |
| :-------- | :---------------------------------------------- |
| `account` | [`UnlockedAccount`](../account.UnlockedAccount) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Org](../../classes/org.Org).[unlock](../classes/org.Org#unlock)

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

[Org](../../classes/org.Org).[updateAccessors](../classes/org.Org#updateaccessors)

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

#### Inherited from

[Org](../../classes/org.Org).[validate](../classes/org.Org#validate)

#### Defined in

[core/src/org.ts:709](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L709)

---

### verify

▸ **verify**(`member`): `Promise`<`void`\>

Verifies the `member`s public key, id, role and email address. Throws if
verification fails.

#### Parameters

| Name     | Type                                       |
| :------- | :----------------------------------------- |
| `member` | [`OrgMember`](../../classes/org.OrgMember) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Org](../../classes/org.Org).[verify](../classes/org.Org#verify)

#### Defined in

[core/src/org.ts:577](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L577)

---

### verifyAll

▸ **verifyAll**(`members?`): `Promise`<`void`\>

Verify all provided `members`, throws if verification fails for any of them.

#### Parameters

| Name      | Type                                         |
| :-------- | :------------------------------------------- |
| `members` | [`OrgMember`](../../classes/org.OrgMember)[] |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Org](../../classes/org.Org).[verifyAll](../classes/org.Org#verifyall)

#### Defined in

[core/src/org.ts:608](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L608)

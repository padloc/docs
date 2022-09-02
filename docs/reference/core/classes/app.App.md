---
title: "Class: App"
linkTitle: "App"
slug: "app.App"
---

[app](../../modules/app).App

The `App` class is _the_ user-facing top level component encapsulating all
functionality of the Padloc client app. It is responsible for managing state,
client-side persistence and synchronization with the [Server](../server.Server)
and exposes methods for manipulating a users [Account](../account.Account),
[Org](../org.Org)anizations and [Vault](../vault.Vault)s.

[App](../app.App) is completely platform-agnostic and can be used in any
environment capable of running JavaScript. It does however rely on
platform-specific providers for a number of features like storage and encryption
which can be "plugged in" as needed.

### Encryption

The `@padloc/core` module does not provide or depend on any specific
implementation of cryptographic primitives but instead relies on the
[CryptoProvider](../../interfaces/crypto.CryptoProvider) interface to provide
those.

Users of the [App](../app.App) class (and of the `@padloc/core` package in
general) are responsible for ensuring that a secure implemenation of the
[CryptoProvider](../../interfaces/crypto.CryptoProvider) interface is available
before using any methods that require cryptographic functionality. This is done
through the `crypto.setProvider` function (see example below).

### Platform API

Certain functionality requires access to some platform APIs. For this, an
implementation of the [Platform](../../interfaces/platform.Platform) interface
can be provided via `platform.setPlatform`.

### Persistent Storage

Persistent storage is provided by an implementation of the
[Storage](../../interfaces/storage.Storage) interface.

### Data Transport

The [Sender](../../interfaces/transport.Sender) interface handles
communication with the [Server](../server.Server) instance through a RPC
[Request](../transport.Request)-[Response](../transport.Response) cycle. The
implementation provided should match the
[Receiver](../../interfaces/transport.Receiver) implementation used in the
[Server](../server.Server) instance.

### Initialization Example

```ts
@import { setProvider } from "@padloc/core/src/crypto";
@import { setPlatform } from "@padloc/core/src/platform";

setProvider(new NodeCryptoProvider());
setPlatform(new NodePlatform());

const app = new App(new LevelDBStorage(), new HTTPSender());

app.loaded.then(() => console.log("app ready!");
```

## Constructors

### constructor

• **new App**(`sender`)

#### Parameters

| Name     | Type                                          |
| :------- | :-------------------------------------------- |
| `sender` | [`Sender`](../../interfaces/transport.Sender) |

#### Defined in

[core/src/app.ts:314](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L314)

## Properties

### \_activeSyncPromises

• `Private` **\_activeSyncPromises**: `Map`<`string`, `Promise`<`void`\>\>

#### Defined in

[core/src/app.ts:425](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L425)

---

### \_cachedStartCreateSessionResponses

• `Private` **\_cachedStartCreateSessionResponses**: `Map`<`string`,
[`StartCreateSessionResponse`](../api.StartCreateSessionResponse)\>

#### Defined in

[core/src/app.ts:429](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L429)

---

### \_queuedSyncPromises

• `Private` **\_queuedSyncPromises**: `Map`<`string`, `Promise`<`void`\>\>

#### Defined in

[core/src/app.ts:424](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L424)

---

### \_resolveLoad

• `Private` **\_resolveLoad**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[core/src/app.ts:309](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L309)

---

### \_subscriptions

• `Private` **\_subscriptions**: (`state`: [`AppState`](../app.AppState)) =>
`void`[] = `[]`

#### Defined in

[core/src/app.ts:427](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L427)

---

### api

• **api**: [`API`](../api.API)

API client for RPC calls

#### Defined in

[core/src/app.ts:304](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L304)

---

### loaded

• **loaded**: `Promise`<`void`\>

Promise that is resolved when the app has been fully loaded

#### Defined in

[core/src/app.ts:312](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L312)

---

### publish

• **publish**: (...`args`: `any`[]) => `void`

#### Type declaration

▸ (...`args`): `void`

Notifies all subscribers of a [state](../app.App#state) change

##### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Defined in

[core/src/app.ts:545](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L545)

---

### state

• **state**: [`AppState`](../app.AppState)

Application state

#### Defined in

[core/src/app.ts:307](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L307)

---

### version

• **version**: `string` = `"3.0"`

App version

#### Defined in

[core/src/app.ts:301](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L301)

## Accessors

### account

• `get` **account**(): `null` \| [`Account`](../account.Account)

Current account

#### Returns

`null` \| [`Account`](../account.Account)

#### Defined in

[core/src/app.ts:336](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L336)

---

### auditedItems

• `get` **auditedItems**(): { `item`: [`VaultItem`](../item.VaultItem) ;
`vault`: [`Vault`](../vault.Vault) }[]

#### Returns

{ `item`: [`VaultItem`](../item.VaultItem) ; `vault`: [`Vault`](../vault.Vault)
}[]

#### Defined in

[core/src/app.ts:378](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L378)

---

### authInfo

• `get` **authInfo**(): `null` \| [`AuthInfo`](../api.AuthInfo)

Authentication Information, such as active sessions, trusted devices etc.

#### Returns

`null` \| [`AuthInfo`](../api.AuthInfo)

#### Defined in

[core/src/app.ts:341](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L341)

---

### count

• `get` **count**(): `Object`

#### Returns

`Object`

| Name          | Type     |
| :------------ | :------- |
| `attachments` | `number` |
| `currentHost` | `number` |
| `favorites`   | `number` |
| `recent`      | `number` |
| `report`      | `number` |
| `total`       | `number` |

#### Defined in

[core/src/app.ts:390](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L390)

---

### mainVault

• `get` **mainVault**(): `null` \| [`Vault`](../vault.Vault)

The current users main, or "private" [Vault](../vault.Vault)

#### Returns

`null` \| [`Vault`](../vault.Vault)

#### Defined in

[core/src/app.ts:366](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L366)

---

### offline

• `get` **offline**(): `boolean`

#### Returns

`boolean`

#### Defined in

[core/src/app.ts:370](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L370)

---

### orgs

• `get` **orgs**(): [`Org`](../org.Org)[]

The current accounts organizations

#### Returns

[`Org`](../org.Org)[]

#### Defined in

[core/src/app.ts:351](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L351)

---

### remembersMasterKey

• `get` **remembersMasterKey**(): `boolean`

#### Returns

`boolean`

#### Defined in

[core/src/app.ts:374](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L374)

---

### session

• `get` **session**(): `null` \| [`Session`](../session.Session)

Current session

#### Returns

`null` \| [`Session`](../session.Session)

#### Defined in

[core/src/app.ts:346](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L346)

---

### settings

• `get` **settings**(): [`Settings`](../app.Settings)

Application settings

#### Returns

[`Settings`](../app.Settings)

#### Defined in

[core/src/app.ts:361](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L361)

---

### storage

• `get` **storage**(): [`Storage`](../../interfaces/storage.Storage)

#### Returns

[`Storage`](../../interfaces/storage.Storage)

#### Defined in

[core/src/app.ts:326](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L326)

---

### syncComplete

• `get` **syncComplete**(): `Promise`<`void`[]\>

Promise that resolves once all current synchronization processes are complete

#### Returns

`Promise`<`void`[]\>

#### Defined in

[core/src/app.ts:331](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L331)

---

### vaults

• `get` **vaults**(): [`Vault`](../vault.Vault)[]

The current accounts vaults

#### Returns

[`Vault`](../vault.Vault)[]

#### Defined in

[core/src/app.ts:356](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L356)

## Methods

### \_logout

▸ `Private` **\_logout**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:689](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L689)

---

### \_migrateFavorites

▸ `Private` **\_migrateFavorites**(`vault`): `void`

Migrate favorites from "old" favoriting mechanism

**`deprecated`**

#### Parameters

| Name    | Type                      |
| :------ | :------------------------ |
| `vault` | [`Vault`](../vault.Vault) |

#### Returns

`void`

#### Defined in

[core/src/app.ts:1209](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1209)

---

### \_queueSync

▸ `Private` **\_queueSync**(`obj`, `fn`): `Promise`<`any`\>

================ HELPER METHODS ================

#### Parameters

| Name     | Type                                             |
| :------- | :----------------------------------------------- |
| `obj`    | `Object`                                         |
| `obj.id` | `string`                                         |
| `fn`     | (`obj`: { `id`: `string` }) => `Promise`<`any`\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[core/src/app.ts:2009](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L2009)

---

### \_syncVault

▸ `Private` **\_syncVault**(`vault`): `Promise`<`null` \|
[`Vault`](../vault.Vault)\>

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `vault`           | `Object` |
| `vault.id`        | `string` |
| `vault.revision?` | `string` |

#### Returns

`Promise`<`null` \| [`Vault`](../vault.Vault)\>

#### Defined in

[core/src/app.ts:1402](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1402)

---

### \_unlocked

▸ `Private` **\_unlocked**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:2049](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L2049)

---

### acceptInvite

▸ **acceptInvite**(`invite`, `secret`): `Promise`<`boolean`\>

Accept an [Invite](../invite.Invite)

#### Parameters

| Name     | Type                         | Description                                                                  |
| :------- | :--------------------------- | :--------------------------------------------------------------------------- |
| `invite` | [`Invite`](../invite.Invite) | -                                                                            |
| `secret` | `string`                     | The secret confirmation code, provided to the user by the organization owner |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/app.ts:1852](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1852)

---

### addItems

▸ **addItems**(`items`, `__namedParameters`): `Promise`<`void`\>

Adds a number of `items` to the given `vault`

#### Parameters

| Name                   | Type                               |
| :--------------------- | :--------------------------------- |
| `items`                | [`VaultItem`](../item.VaultItem)[] |
| `__namedParameters`    | `Object`                           |
| `__namedParameters.id` | `string`                           |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:1426](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1426)

---

### autoHandleInvites

▸ **autoHandleInvites**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:1901](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1901)

---

### changePassword

▸ **changePassword**(`password`): `Promise`<`void`\>

Updates the users master password

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `password` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:713](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L713)

---

### confirmInvite

▸ **confirmInvite**(`invite`): `Promise`<[`OrgMember`](../org.OrgMember)\>

Confirm an [Invite](../invite.Invite) after it has been accepted by the invitee.
This will verify the invitees information and then add them to the organization.

#### Parameters

| Name     | Type                         |
| :------- | :--------------------------- |
| `invite` | [`Invite`](../invite.Invite) |

#### Returns

`Promise`<[`OrgMember`](../org.OrgMember)\>

The newly created member object.

#### Defined in

[core/src/app.ts:1867](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1867)

---

### createAttachment

▸ **createAttachment**(`itemId`, `file`, `name?`):
`Promise`<[`Attachment`](../attachment.Attachment)\>

============= ATTACHMENTS =============

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `itemId` | `string` |
| `file`   | `File`   |
| `name?`  | `string` |

#### Returns

`Promise`<[`Attachment`](../attachment.Attachment)\>

#### Defined in

[core/src/app.ts:1930](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1930)

---

### createGroup

▸ **createGroup**(`org`, `name`, `members`, `vaults`):
`Promise`<[`Group`](../org.Group)\>

Creates a new [Group](../org.Group) in the given `org`

#### Parameters

| Name      | Type                                         |
| :-------- | :------------------------------------------- |
| `org`     | [`Org`](../org.Org)                          |
| `name`    | `string`                                     |
| `members` | { `email`: `string` }[]                      |
| `vaults`  | { `id`: `string` ; `readonly`: `boolean` }[] |

#### Returns

`Promise`<[`Group`](../org.Group)\>

#### Defined in

[core/src/app.ts:1672](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1672)

---

### createInvites

▸ **createInvites**(`__namedParameters`, `emails`, `purpose?`):
`Promise`<[`Invite`](../invite.Invite)[]\>

Create a new [Invite](../invite.Invite)

#### Parameters

| Name                | Type                                                  |
| :------------------ | :---------------------------------------------------- |
| `__namedParameters` | [`Org`](../org.Org)                                   |
| `emails`            | `string`[]                                            |
| `purpose?`          | [`InvitePurpose`](../modules/invite#invitepurpose) |

#### Returns

`Promise`<[`Invite`](../invite.Invite)[]\>

#### Defined in

[core/src/app.ts:1818](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1818)

---

### createItem

▸ **createItem**(`__namedParameters`):
`Promise`<[`VaultItem`](../item.VaultItem)\>

Creates a new [VaultItem](../item.VaultItem)

#### Parameters

| Name                         | Type                       |
| :--------------------------- | :------------------------- |
| `__namedParameters`          | `Object`                   |
| `__namedParameters.fields?`  | [`Field`](../item.Field)[] |
| `__namedParameters.icon?`    | `string`                   |
| `__namedParameters.name`     | `string`                   |
| `__namedParameters.tags?`    | `string`[]                 |
| `__namedParameters.vault`    | `Object`                   |
| `__namedParameters.vault.id` | `string`                   |

#### Returns

`Promise`<[`VaultItem`](../item.VaultItem)\>

#### Defined in

[core/src/app.ts:1434](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1434)

---

### createOrg

▸ **createOrg**(`name`): `Promise`<[`Org`](../org.Org)\>

Create a new [Org](../org.Org)ganization

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`Promise`<[`Org`](../org.Org)\>

#### Defined in

[core/src/app.ts:1587](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1587)

---

### createVault

▸ **createVault**(`name`, `org`, `members?`, `groups?`):
`Promise`<[`Vault`](../vault.Vault)\>

Create a new [Vault](../vault.Vault)

#### Parameters

| Name      | Type                                                                     | Default value |
| :-------- | :----------------------------------------------------------------------- | :------------ |
| `name`    | `string`                                                                 | `undefined`   |
| `org`     | [`Org`](../org.Org)                                                      | `undefined`   |
| `members` | { `accountId?`: `string` ; `email`: `string` ; `readonly`: `boolean` }[] | `[]`          |
| `groups`  | { `name`: `string` ; `readonly`: `boolean` }[]                           | `[]`          |

#### Returns

`Promise`<[`Vault`](../vault.Vault)\>

#### Defined in

[core/src/app.ts:986](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L986)

---

### deleteAccount

▸ **deleteAccount**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:684](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L684)

---

### deleteAttachment

▸ **deleteAttachment**(`itemId`, `att`): `Promise`<`void`\>

#### Parameters

| Name     | Type                                                                                         |
| :------- | :------------------------------------------------------------------------------------------- |
| `itemId` | `string`                                                                                     |
| `att`    | [`Attachment`](../attachment.Attachment) \| [`AttachmentInfo`](../attachment.AttachmentInfo) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:1969](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1969)

---

### deleteInvite

▸ **deleteInvite**(`invite`): `Promise`<`void`\>

Deletes an [Invite](../invite.Invite)

#### Parameters

| Name     | Type                         |
| :------- | :--------------------------- |
| `invite` | [`Invite`](../invite.Invite) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:1894](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1894)

---

### deleteItems

▸ **deleteItems**(`items`): `Promise`<`void`\>

Delete a number of `items`

#### Parameters

| Name    | Type                               |
| :------ | :--------------------------------- |
| `items` | [`VaultItem`](../item.VaultItem)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:1485](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1485)

---

### deleteOrg

▸ **deleteOrg**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:1666](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1666)

---

### deleteVault

▸ **deleteVault**(`id`): `Promise`<`void`\>

Delete [Vault](../vault.Vault)

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:1086](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1086)

---

### downloadAttachment

▸ **downloadAttachment**(`att`):
`Promise`<[`Attachment`](../attachment.Attachment)\>

#### Parameters

| Name  | Type                                             |
| :---- | :----------------------------------------------- |
| `att` | [`AttachmentInfo`](../attachment.AttachmentInfo) |

#### Returns

`Promise`<[`Attachment`](../attachment.Attachment)\>

#### Defined in

[core/src/app.ts:1952](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1952)

---

### fetchAccount

▸ **fetchAccount**(): `Promise`<`void`\>

Fetches the users [Account](../account.Account) info from the
[Server](../server.Server)

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:741](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L741)

---

### fetchAuthInfo

▸ **fetchAuthInfo**(): `Promise`<`void`\>

Fetches the users [Account](../account.Account) info from the
[Server](../server.Server)

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:758](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L758)

---

### fetchOrg

▸ **fetchOrg**(`__namedParameters`): `Promise`<[`Org`](../org.Org)\>

Fetch the [Org](../org.Org)anization object with the given `id`

#### Parameters

| Name                          | Type     |
| :---------------------------- | :------- |
| `__namedParameters`           | `Object` |
| `__namedParameters.id`        | `string` |
| `__namedParameters.revision?` | `string` |

#### Returns

`Promise`<[`Org`](../org.Org)\>

#### Defined in

[core/src/app.ts:1610](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1610)

---

### fetchOrgs

▸ **fetchOrgs**(): `Promise`<`void`\>

Fetch all organizations the current account is a member of

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:1596](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1596)

---

### fetchVault

▸ **fetchVault**(`__namedParameters`): `Promise`<`null` \|
[`Vault`](../vault.Vault)\>

#### Parameters

| Name                          | Type     |
| :---------------------------- | :------- |
| `__namedParameters`           | `Object` |
| `__namedParameters.id`        | `string` |
| `__namedParameters.revision?` | `string` |

#### Returns

`Promise`<`null` \| [`Vault`](../vault.Vault)\>

#### Defined in

[core/src/app.ts:1132](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1132)

---

### forgetMasterKey

▸ **forgetMasterKey**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:932](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L932)

---

### getAccountFeatures

▸ **getAccountFeatures**(): [`AccountFeatures`](../provisioning.AccountFeatures)

#### Returns

[`AccountFeatures`](../provisioning.AccountFeatures)

#### Defined in

[core/src/app.ts:1995](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1995)

---

### getAccountProvisioning

▸ **getAccountProvisioning**():
[`AccountProvisioning`](../provisioning.AccountProvisioning)

========= PROVISIONING =========

#### Returns

[`AccountProvisioning`](../provisioning.AccountProvisioning)

#### Defined in

[core/src/app.ts:1987](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1987)

---

### getInvite

▸ **getInvite**(`orgId`, `id`): `Promise`<`null` \|
[`Invite`](../invite.Invite)\>

Get an [Invite](../invite.Invite) based on the organization id and invite id.

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `orgId` | `string` |
| `id`    | `string` |

#### Returns

`Promise`<`null` \| [`Invite`](../invite.Invite)\>

#### Defined in

[core/src/app.ts:1839](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1839)

---

### getItem

▸ **getItem**(`id`): `null` \| { `item`: [`VaultItem`](../item.VaultItem) ;
`vault`: [`Vault`](../vault.Vault) }

Get the [VaultItem](../item.VaultItem) and [Vault](../vault.Vault) for the given
item `id`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`null` \| { `item`: [`VaultItem`](../item.VaultItem) ; `vault`:
[`Vault`](../vault.Vault) }

#### Defined in

[core/src/app.ts:1414](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1414)

---

### getItemsForHost

▸ **getItemsForHost**(`host`): { `item`: [`VaultItem`](../item.VaultItem) ;
`vault`: [`Vault`](../vault.Vault) }[]

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `host` | `string` |

#### Returns

{ `item`: [`VaultItem`](../item.VaultItem) ; `vault`: [`Vault`](../vault.Vault)
}[]

#### Defined in

[core/src/app.ts:1531](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1531)

---

### getItemsForUrl

▸ **getItemsForUrl**(`url`): { `item`: [`VaultItem`](../item.VaultItem) ;
`vault`: [`Vault`](../vault.Vault) }[]

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `url` | `string` |

#### Returns

{ `item`: [`VaultItem`](../item.VaultItem) ; `vault`: [`Vault`](../vault.Vault)
}[]

#### Defined in

[core/src/app.ts:1559](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1559)

---

### getOrg

▸ **getOrg**(`id`): `undefined` \| [`Org`](../org.Org)

Get the organization with the given `id`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| [`Org`](../org.Org)

#### Defined in

[core/src/app.ts:1575](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1575)

---

### getOrgFeatures

▸ **getOrgFeatures**(`org`): [`OrgFeatures`](../provisioning.OrgFeatures)

#### Parameters

| Name  | Type                                      |
| :---- | :---------------------------------------- |
| `org` | [`OrgInfo`](../../interfaces/org.OrgInfo) |

#### Returns

[`OrgFeatures`](../provisioning.OrgFeatures)

#### Defined in

[core/src/app.ts:1999](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1999)

---

### getOrgProvisioning

▸ **getOrgProvisioning**(`__namedParameters`):
[`OrgProvisioning`](../provisioning.OrgProvisioning)

#### Parameters

| Name                   | Type     |
| :--------------------- | :------- |
| `__namedParameters`    | `Object` |
| `__namedParameters.id` | `string` |

#### Returns

[`OrgProvisioning`](../provisioning.OrgProvisioning)

#### Defined in

[core/src/app.ts:1991](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1991)

---

### getVault

▸ **getVault**(`id`): `undefined` \| [`Vault`](../vault.Vault)

Get the [Vault](../vault.Vault) with the given `id`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`undefined` \| [`Vault`](../vault.Vault)

#### Defined in

[core/src/app.ts:970](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L970)

---

### hasWritePermissions

▸ **hasWritePermissions**(`vault`): `undefined` \| `boolean`

Whether the current user has write permissions to the given `vault`.

#### Parameters

| Name    | Type                      |
| :------ | :------------------------ |
| `vault` | [`Vault`](../vault.Vault) |

#### Returns

`undefined` \| `boolean`

#### Defined in

[core/src/app.ts:1387](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1387)

---

### isEditable

▸ **isEditable**(`vault`): `undefined` \| `boolean`

#### Parameters

| Name    | Type                      |
| :------ | :------------------------ |
| `vault` | [`Vault`](../vault.Vault) |

#### Returns

`undefined` \| `boolean`

#### Defined in

[core/src/app.ts:1397](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1397)

---

### isMainVault

▸ **isMainVault**(`vault`): `null` \| `boolean`

#### Parameters

| Name    | Type                      |
| :------ | :------------------------ |
| `vault` | [`Vault`](../vault.Vault) |

#### Returns

`null` \| `boolean`

#### Defined in

[core/src/app.ts:981](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L981)

---

### load

▸ **load**(): `Promise`<`void`\>

Load application state from persistent storage

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:444](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L444)

---

### lock

▸ **lock**(): `Promise`<`void`\>

Locks the app and wipes all sensitive information from memory.

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:503](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L503)

---

### login

▸ **login**(`email`, `password`, `verify?`, `addTrustedDevice?`):
`Promise`<`void`\>

Log in user, creating a new [Session](../session.Session), loading
[Account](../account.Account) info and fetching all of the users
[Org](../org.Org)anizations and [Vault](../vault.Vault)s.

#### Parameters

| Name                | Type      |
| :------------------ | :-------- |
| `email`             | `string`  |
| `password`          | `string`  |
| `verify?`           | `string`  |
| `addTrustedDevice?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:633](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L633)

---

### logout

▸ **logout**(): `Promise`<`void`\>

Logs out user and clears all sensitive information

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:679](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L679)

---

### moveItems

▸ **moveItems**(`items`, `target`):
`Promise`<[`VaultItem`](../item.VaultItem)[]\>

Move `items` from their current vault to the `target` vault

#### Parameters

| Name     | Type                               |
| :------- | :--------------------------------- |
| `items`  | [`VaultItem`](../item.VaultItem)[] |
| `target` | [`Vault`](../vault.Vault)          |

#### Returns

`Promise`<[`VaultItem`](../item.VaultItem)[]\>

#### Defined in

[core/src/app.ts:1521](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1521)

---

### putOrg

▸ **putOrg**(`org`): `void`

Update the given organization locally

#### Parameters

| Name  | Type                |
| :---- | :------------------ |
| `org` | [`Org`](../org.Org) |

#### Returns

`void`

#### Defined in

[core/src/app.ts:1580](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1580)

---

### putVault

▸ **putVault**(`vault`): `void`

Locally update the given `vault` object

#### Parameters

| Name    | Type                      |
| :------ | :------------------------ |
| `vault` | [`Vault`](../vault.Vault) |

#### Returns

`void`

#### Defined in

[core/src/app.ts:975](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L975)

---

### recoverAccount

▸ **recoverAccount**(`__namedParameters`): `Promise`<`void`\>

Initiates account recovery allowing a user to regain control of their account in
case they forget their master password. This results in the following:

-   All of the accounts cryptographic keys are rotated.
-   The accounts sensitive data is encrypted with the new master password.
-   The accounts authentication info is updated to reflect the password change.
-   The accounts private vault is reset (and the data within it lost).
-   The cryptographic keys of all [Org](../org.Org)anizations owned by the
    account will be rotated and all members suspended until reconfirmed.
-   The accounts memberships to any [Org](../org.Org)ganizations not owned by it
    will be suspended until reconfirmed.

The user will automatically get logged in during this process so a separate
login is not necessary.

#### Parameters

| Name                         | Type     |
| :--------------------------- | :------- |
| `__namedParameters`          | `Object` |
| `__namedParameters.email`    | `string` |
| `__namedParameters.password` | `string` |
| `__namedParameters.verify`   | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:830](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L830)

---

### reload

▸ **reload**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:478](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L478)

---

### rememberMasterKey

▸ **rememberMasterKey**(`authenticatorId`): `Promise`<`void`\>

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `authenticatorId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:911](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L911)

---

### removeMember

▸ **removeMember**(`org`, `member`): `Promise`<`void`\>

Removes a member from the given `org`

#### Parameters

| Name     | Type                            |
| :------- | :------------------------------ |
| `org`    | [`Org`](../org.Org)             |
| `member` | [`OrgMember`](../org.OrgMember) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:1786](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1786)

---

### revokeSession

▸ **revokeSession**(`__namedParameters`): `Promise`<`void`\>

Revokes the given [Session](../session.Session)

#### Parameters

| Name                   | Type     |
| :--------------------- | :------- |
| `__namedParameters`    | `Object` |
| `__namedParameters.id` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:808](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L808)

---

### rotateOrgKeys

▸ **rotateOrgKeys**(`org`): `Promise`<[`Org`](../org.Org)\>

#### Parameters

| Name  | Type                |
| :---- | :------------------ |
| `org` | [`Org`](../org.Org) |

#### Returns

`Promise`<[`Org`](../org.Org)\>

#### Defined in

[core/src/app.ts:878](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L878)

---

### save

▸ **save**(): `Promise`<`void`\>

Save application state to persistent storage

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:432](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L432)

---

### saveVault

▸ **saveVault**(`vault`): `Promise`<`void`\>

Commit changes to vault object and save locally

#### Parameters

| Name    | Type                      |
| :------ | :------------------------ |
| `vault` | [`Vault`](../vault.Vault) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:1079](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1079)

---

### setSettings

▸ **setSettings**(`obj`): `Promise`<`void`\>

Update application settings

#### Parameters

| Name  | Type                                      |
| :---- | :---------------------------------------- |
| `obj` | `Partial`<[`Settings`](../app.Settings)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:567](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L567)

---

### setState

▸ **setState**(`state`): `void`

Updates the app [state](../app.App#state)

#### Parameters

| Name    | Type                                      |
| :------ | :---------------------------------------- |
| `state` | `Partial`<[`AppState`](../app.AppState)\> |

#### Returns

`void`

#### Defined in

[core/src/app.ts:554](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L554)

---

### setStats

▸ **setStats**(`obj`): `Promise`<`void`\>

Update usage data

#### Parameters

| Name  | Type                                |
| :---- | :---------------------------------- |
| `obj` | `Partial`<[`Stats`](../app.Stats)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:560](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L560)

---

### signup

▸ **signup**(`__namedParameters`): `Promise`<`void`\>

Creates a new Padloc [Account](../account.Account) and signs in the user.

#### Parameters

| Name                           | Type     |
| :----------------------------- | :------- |
| `__namedParameters`            | `Object` |
| `__namedParameters.authToken`  | `string` |
| `__namedParameters.email`      | `string` |
| `__namedParameters.invite?`    | `Object` |
| `__namedParameters.invite.id`  | `string` |
| `__namedParameters.invite.org` | `string` |
| `__namedParameters.name`       | `string` |
| `__namedParameters.password`   | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:582](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L582)

---

### subscribe

▸ **subscribe**(`fn`): () => `void`

Notifies of changes to the app [state](../app.App#state) via the provided
function

#### Parameters

| Name | Type                                               |
| :--- | :------------------------------------------------- |
| `fn` | (`state`: [`AppState`](../app.AppState)) => `void` |

#### Returns

`fn`

A unsubscribe function

▸ (): `void`

##### Returns

`void`

#### Defined in

[core/src/app.ts:530](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L530)

---

### syncVault

▸ **syncVault**(`vault`): `Promise`<[`Vault`](../vault.Vault)\>

Synchronize the given [Vault](../vault.Vault)

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `vault`           | `Object` |
| `vault.id`        | `string` |
| `vault.name?`     | `string` |
| `vault.revision?` | `string` |

#### Returns

`Promise`<[`Vault`](../vault.Vault)\>

#### Defined in

[core/src/app.ts:1092](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1092)

---

### syncVaults

▸ **syncVaults**(): `Promise`<`void`\>

Synchronize all vaults the current user has access to.

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:1097](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1097)

---

### synchronize

▸ **synchronize**(): `Promise`<`void`\>

Synchronizes the current account and all of the accounts organizations and
vaults

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:512](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L512)

---

### toggleFavorite

▸ **toggleFavorite**(`id`, `favorite`): `Promise`<`void`\>

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `id`       | `string`  |
| `favorite` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:1475](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1475)

---

### transferOwnership

▸ **transferOwnership**(`org`, `member`): `Promise`<`void`\>

Transfers an organizations ownership to a different member

#### Parameters

| Name     | Type                            |
| :------- | :------------------------------ |
| `org`    | [`Org`](../org.Org)             |
| `member` | [`OrgMember`](../org.OrgMember) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:1799](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1799)

---

### unlock

▸ **unlock**(`password`): `Promise`<`void`\>

Unlocks the current [Account](../account.Account) and all available [[Vaults]].

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `password` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:489](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L489)

---

### unlockWithMasterKey

▸ **unlockWithMasterKey**(`key`): `Promise`<`void`\>

#### Parameters

| Name  | Type         |
| :---- | :----------- |
| `key` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:958](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L958)

---

### unlockWithRememberedMasterKey

▸ **unlockWithRememberedMasterKey**(`authToken`): `Promise`<`void`\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `authToken` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:944](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L944)

---

### unsubscribe

▸ **unsubscribe**(`fn`): `void`

Unsubscribes a function previously subscribed through
[subscribe](../app.App#subscribe).

#### Parameters

| Name | Type                                               |
| :--- | :------------------------------------------------- |
| `fn` | (`state`: [`AppState`](../app.AppState)) => `void` |

#### Returns

`void`

#### Defined in

[core/src/app.ts:538](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L538)

---

### updateAccount

▸ **updateAccount**(`transform`): `Promise`<`void`\>

Updates the users [Account](../account.Account) information

#### Parameters

| Name        | Type                                                              | Description                                    |
| :---------- | :---------------------------------------------------------------- | :--------------------------------------------- |
| `transform` | (`account`: [`Account`](../account.Account)) => `Promise`<`any`\> | A function applying the changes to the account |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:770](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L770)

---

### updateGroup

▸ **updateGroup**(`org`, `__namedParameters`, `__namedParameters`):
`Promise`<[`Group`](../org.Group)\>

Updates a [Group](../org.Group)s name and members

#### Parameters

| Name                         | Type                                         |
| :--------------------------- | :------------------------------------------- |
| `org`                        | [`Org`](../org.Org)                          |
| `__namedParameters`          | `Object`                                     |
| `__namedParameters.name`     | `string`                                     |
| `__namedParameters`          | `Object`                                     |
| `__namedParameters.members?` | { `email`: `string` }[]                      |
| `__namedParameters.name?`    | `string`                                     |
| `__namedParameters.vaults?`  | { `id`: `string` ; `readonly`: `boolean` }[] |

#### Returns

`Promise`<[`Group`](../org.Group)\>

#### Defined in

[core/src/app.ts:1698](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1698)

---

### updateItem

▸ **updateItem**(`item`, `upd`): `Promise`<`void`\>

Update a given [VaultItem](../item.VaultItem)s name, fields, tags and
attachments

#### Parameters

| Name                | Type                                                 |
| :------------------ | :--------------------------------------------------- |
| `item`              | [`VaultItem`](../item.VaultItem)                     |
| `upd`               | `Object`                                             |
| `upd.attachments?`  | [`AttachmentInfo`](../attachment.AttachmentInfo)[]   |
| `upd.auditResults?` | [`AuditResult`](../../interfaces/item.AuditResult)[] |
| `upd.fields?`       | [`Field`](../item.Field)[]                           |
| `upd.lastAudited?`  | `Date`                                               |
| `upd.name?`         | `string`                                             |
| `upd.tags?`         | `string`[]                                           |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:1458](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1458)

---

### updateLastUsed

▸ **updateLastUsed**(`item`): `Promise`<`void`\>

#### Parameters

| Name   | Type                             |
| :----- | :------------------------------- |
| `item` | [`VaultItem`](../item.VaultItem) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:1479](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1479)

---

### updateMember

▸ **updateMember**(`org`, `__namedParameters`, `__namedParameters`):
`Promise`<[`OrgMember`](../org.OrgMember)\>

Update a members assigned [Vault](../vault.Vault)s, [Group](../org.Group)s
and [OrgRole](../enums/org.OrgRole).

#### Parameters

| Name                        | Type                                                 |
| :-------------------------- | :--------------------------------------------------- |
| `org`                       | [`Org`](../org.Org)                                  |
| `__namedParameters`         | [`OrgMember`](../org.OrgMember)                      |
| `__namedParameters`         | `Object`                                             |
| `__namedParameters.groups?` | `string`[]                                           |
| `__namedParameters.role?`   | [`OrgRole`](../../enums/org.OrgRole)                 |
| `__namedParameters.status?` | [`OrgMemberStatus`](../../enums/org.OrgMemberStatus) |
| `__namedParameters.vaults?` | { `id`: `string` ; `readonly`: `boolean` }[]         |

#### Returns

`Promise`<[`OrgMember`](../org.OrgMember)\>

#### Defined in

[core/src/app.ts:1733](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1733)

---

### updateOrg

▸ **updateOrg**(`id`, `transform`): `Promise`<[`Org`](../org.Org)\>

Update the organization with the given `id`.

#### Parameters

| Name        | Type                                              | Description                   |
| :---------- | :------------------------------------------------ | :---------------------------- |
| `id`        | `string`                                          | -                             |
| `transform` | (`org`: [`Org`](../org.Org)) => `Promise`<`any`\> | Function applying the changes |

#### Returns

`Promise`<[`Org`](../org.Org)\>

#### Defined in

[core/src/app.ts:1640](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1640)

---

### updateVault

▸ **updateVault**(`__namedParameters`, `tries?`): `Promise`<`null` \|
[`Vault`](../vault.Vault)\>

#### Parameters

| Name                   | Type     | Default value |
| :--------------------- | :------- | :------------ |
| `__namedParameters`    | `Object` | `undefined`   |
| `__namedParameters.id` | `string` | `undefined`   |
| `tries`                | `number` | `0`           |

#### Returns

`Promise`<`null` \| [`Vault`](../vault.Vault)\>

#### Defined in

[core/src/app.ts:1222](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1222)

---

### updateVaultAccess

▸ **updateVaultAccess**(`orgId`, `id`, `name`, `members?`, `groups?`):
`Promise`<`void`\>

Update [Vault](../vault.Vault) name and access (not the vaults contents)

#### Parameters

| Name      | Type                                                              | Default value |
| :-------- | :---------------------------------------------------------------- | :------------ |
| `orgId`   | `string`                                                          | `undefined`   |
| `id`      | `string`                                                          | `undefined`   |
| `name`    | `string`                                                          | `undefined`   |
| `members` | { `email`: `string` ; `id?`: `string` ; `readonly`: `boolean` }[] | `[]`          |
| `groups`  | { `name`: `string` ; `readonly`: `boolean` }[]                    | `[]`          |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/app.ts:1031](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L1031)

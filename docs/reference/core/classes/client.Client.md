---
title: "Class: Client"
linkTitle: "Client"
slug: "client.Client"
---

[client](../../modules/client).Client

Client-side interface for Client-Server communication. Manages serialization,
authentication and some state like current session and account.

## Hierarchy

-   [`API`](../api.API)

    ↳ **`Client`**

## Constructors

### constructor

• **new Client**(`state`, `sender`, `hook?`)

#### Parameters

| Name     | Type                                                                                                                                               |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| `state`  | [`ClientState`](../../interfaces/client.ClientState)                                                                                               |
| `sender` | [`Sender`](../../interfaces/transport.Sender)                                                                                                      |
| `hook?`  | (`req`: [`Request`](../transport.Request), `res`: `null` \| [`Response`](../transport.Response), `err`: `null` \| [`Err`](../error.Err)) => `void` |

#### Overrides

[API](../api.API).[constructor](../api.API#constructor)

#### Defined in

[core/src/client.ts:28](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/client.ts#L28)

## Properties

### handlerDefinitions

• **handlerDefinitions**: `HandlerDefinition`[]

#### Inherited from

[API](../api.API).[handlerDefinitions](../api.API#handlerdefinitions)

#### Defined in

[core/src/api.ts:428](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L428)

---

### online

• **online**: `boolean` = `true`

#### Defined in

[core/src/client.ts:26](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/client.ts#L26)

---

### state

• **state**: [`ClientState`](../../interfaces/client.ClientState)

## Accessors

### session

• `get` **session**(): `null` \| [`Session`](../session.Session)

The current session

#### Returns

`null` \| [`Session`](../session.Session)

#### Defined in

[core/src/client.ts:58](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/client.ts#L58)

## Methods

### acceptInvite

▸ **acceptInvite**(`_invite`):
[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

Accept an [Invite](../invite.Invite)

**`authentication_required`**

Requires the authenticated account to be the recipient of the invite.

#### Parameters

| Name      | Type                         |
| :-------- | :--------------------------- |
| `_invite` | [`Invite`](../invite.Invite) |

#### Returns

[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

#### Inherited from

[API](../api.API).[acceptInvite](../api.API#acceptinvite)

#### Defined in

[core/src/api.ts:658](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L658)

---

### call

▸ **call**(`method`, `params?`, `progress?`):
`Promise`<[`Response`](../transport.Response)\>

Generic method for making an RPC call

#### Parameters

| Name        | Type                                              |
| :---------- | :------------------------------------------------ |
| `method`    | `string`                                          |
| `params?`   | `any`[]                                           |
| `progress?` | [`RequestProgress`](../transport.RequestProgress) |

#### Returns

`Promise`<[`Response`](../transport.Response)\>

#### Defined in

[core/src/client.ts:63](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/client.ts#L63)

---

### completeAuthRequest

▸ **completeAuthRequest**(`_params`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`CompleteAuthRequestResponse`](../api.CompleteAuthRequestResponse)\>

#### Parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `_params` | [`CompleteAuthRequestParams`](../api.CompleteAuthRequestParams) |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`CompleteAuthRequestResponse`](../api.CompleteAuthRequestResponse)\>

#### Inherited from

[API](../api.API).[completeAuthRequest](../api.API#completeauthrequest)

#### Defined in

[core/src/api.ts:455](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L455)

---

### completeCreateSession

▸ **completeCreateSession**(`_params`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Session`](../session.Session)\>

Create new [Session](../session.Session) which can be used to authenticate
future request

#### Parameters

| Name      | Type                                                                |
| :-------- | :------------------------------------------------------------------ |
| `_params` | [`CompleteCreateSessionParams`](../api.CompleteCreateSessionParams) |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Session`](../session.Session)\>

#### Inherited from

[API](../api.API).[completeCreateSession](../api.API#completecreatesession)

#### Defined in

[core/src/api.ts:481](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L481)

---

### completeRegisterAuthenticator

▸ **completeRegisterAuthenticator**(`_params`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`CompleteRegisterMFAuthenticatorResponse`](../api.CompleteRegisterMFAuthenticatorResponse)\>

#### Parameters

| Name      | Type                                                                                    |
| :-------- | :-------------------------------------------------------------------------------------- |
| `_params` | [`CompleteRegisterMFAuthenticatorParams`](../api.CompleteRegisterMFAuthenticatorParams) |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`CompleteRegisterMFAuthenticatorResponse`](../api.CompleteRegisterMFAuthenticatorResponse)\>

#### Inherited from

[API](../api.API).[completeRegisterAuthenticator](../api.API#completeregisterauthenticator)

#### Defined in

[core/src/api.ts:438](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L438)

---

### createAccount

▸ **createAccount**(`_params`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Account`](../account.Account)\>

Create a new [Account](../account.Account)

#### Parameters

| Name      | Type                                                |
| :-------- | :-------------------------------------------------- |
| `_params` | [`CreateAccountParams`](../api.CreateAccountParams) |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Account`](../account.Account)\>

#### Inherited from

[API](../api.API).[createAccount](../api.API#createaccount)

#### Defined in

[core/src/api.ts:497](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L497)

---

### createAttachment

▸ **createAttachment**(`_attachment`):
[`PromiseWithProgress`](../modules/api#promisewithprogress)<`string`\>

#### Parameters

| Name          | Type                                     |
| :------------ | :--------------------------------------- |
| `_attachment` | [`Attachment`](../attachment.Attachment) |

#### Returns

[`PromiseWithProgress`](../modules/api#promisewithprogress)<`string`\>

#### Inherited from

[API](../api.API).[createAttachment](../api.API#createattachment)

#### Defined in

[core/src/api.ts:663](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L663)

---

### createKeyStoreEntry

▸ **createKeyStoreEntry**(`_params`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`KeyStoreEntry`](../key_store.KeyStoreEntry)\>

#### Parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `_params` | [`CreateKeyStoreEntryParams`](../api.CreateKeyStoreEntryParams) |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`KeyStoreEntry`](../key_store.KeyStoreEntry)\>

#### Inherited from

[API](../api.API).[createKeyStoreEntry](../api.API#createkeystoreentry)

#### Defined in

[core/src/api.ts:688](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L688)

---

### createOrg

▸ **createOrg**(`_params`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Org`](../org.Org)\>

Create a new [Org](../org.Org)

**`authentication_required`**

#### Parameters

| Name      | Type                |
| :-------- | :------------------ |
| `_params` | [`Org`](../org.Org) |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Org`](../org.Org)\>

#### Inherited from

[API](../api.API).[createOrg](../api.API#createorg)

#### Defined in

[core/src/api.ts:549](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L549)

---

### createVault

▸ **createVault**(`_vault`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Vault`](../vault.Vault)\>

Create a new vault

**`authentication_required`**

Requires the [OrgRole.Admin](../enums/org.OrgRole#admin) role on the
associated organization

#### Parameters

| Name     | Type                      |
| :------- | :------------------------ |
| `_vault` | [`Vault`](../vault.Vault) |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Vault`](../vault.Vault)\>

#### Inherited from

[API](../api.API).[createVault](../api.API#createvault)

#### Defined in

[core/src/api.ts:591](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L591)

---

### deleteAccount

▸ **deleteAccount**():
[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

Delete current account

#### Returns

[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

#### Inherited from

[API](../api.API).[deleteAccount](../api.API#deleteaccount)

#### Defined in

[core/src/api.ts:539](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L539)

---

### deleteAttachment

▸ **deleteAttachment**(`_attachment`):
[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

#### Parameters

| Name          | Type                                                      |
| :------------ | :-------------------------------------------------------- |
| `_attachment` | [`DeleteAttachmentParams`](../api.DeleteAttachmentParams) |

#### Returns

[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

#### Inherited from

[API](../api.API).[deleteAttachment](../api.API#deleteattachment)

#### Defined in

[core/src/api.ts:673](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L673)

---

### deleteAuthenticator

▸ **deleteAuthenticator**(`_id`):
[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `_id` | `string` |

#### Returns

[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

#### Inherited from

[API](../api.API).[deleteAuthenticator](../api.API#deleteauthenticator)

#### Defined in

[core/src/api.ts:445](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L445)

---

### deleteKeyStoreEntry

▸ **deleteKeyStoreEntry**(`_params`): `Promise`<`void`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `_params` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[API](../api.API).[deleteKeyStoreEntry](../api.API#deletekeystoreentry)

#### Defined in

[core/src/api.ts:698](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L698)

---

### deleteLegacyAccount

▸ **deleteLegacyAccount**():
[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

#### Returns

[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

#### Inherited from

[API](../api.API).[deleteLegacyAccount](../api.API#deletelegacyaccount)

#### Defined in

[core/src/api.ts:683](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L683)

---

### deleteOrg

▸ **deleteOrg**(`_id`):
[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `_id` | `string` |

#### Returns

[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

#### Inherited from

[API](../api.API).[deleteOrg](../api.API#deleteorg)

#### Defined in

[core/src/api.ts:579](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L579)

---

### deleteVault

▸ **deleteVault**(`_id`):
[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

Delete the [Vault](../vault.Vault) with the given `id`

**`authentication_required`**

Requires at least the [OrgRole.Admin](../enums/org.OrgRole#admin) role on the
organization the vault belongs to. Private vaults cannot be deleted.

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `_id` | `string` |

#### Returns

[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

#### Inherited from

[API](../api.API).[deleteVault](../api.API#deletevault)

#### Defined in

[core/src/api.ts:633](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L633)

---

### getAccount

▸ **getAccount**():
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Account`](../account.Account)\>

Get the [Account](../account.Account) associated with the current session

**`authentication_required`**

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Account`](../account.Account)\>

#### Inherited from

[API](../api.API).[getAccount](../api.API#getaccount)

#### Defined in

[core/src/api.ts:507](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L507)

---

### getAttachment

▸ **getAttachment**(`_attachment`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Attachment`](../attachment.Attachment)\>

#### Parameters

| Name          | Type                                                |
| :------------ | :-------------------------------------------------- |
| `_attachment` | [`GetAttachmentParams`](../api.GetAttachmentParams) |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Attachment`](../attachment.Attachment)\>

#### Inherited from

[API](../api.API).[getAttachment](../api.API#getattachment)

#### Defined in

[core/src/api.ts:668](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L668)

---

### getAuthInfo

▸ **getAuthInfo**(): `Promise`<[`AuthInfo`](../api.AuthInfo)\>

Get the [AuthInfo](../api.AuthInfo) for the current account

#### Returns

`Promise`<[`AuthInfo`](../api.AuthInfo)\>

#### Inherited from

[API](../api.API).[getAuthInfo](../api.API#getauthinfo)

#### Defined in

[core/src/api.ts:513](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L513)

---

### getInvite

▸ **getInvite**(`_params`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Invite`](../invite.Invite)\>

Get an [Invite](../invite.Invite).

**`authentication_required`**

Requires the authenticated account to either be an
[OrgRole.Owner](../enums/org.OrgRole#owner) of the associated organization or
the recipient of the invite.

#### Parameters

| Name      | Type                                        |
| :-------- | :------------------------------------------ |
| `_params` | [`GetInviteParams`](../api.GetInviteParams) |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Invite`](../invite.Invite)\>

#### Inherited from

[API](../api.API).[getInvite](../api.API#getinvite)

#### Defined in

[core/src/api.ts:646](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L646)

---

### getKeyStoreEntry

▸ **getKeyStoreEntry**(`_params`):
`Promise`<[`KeyStoreEntry`](../key_store.KeyStoreEntry)\>

#### Parameters

| Name      | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| `_params` | [`GetKeyStoreEntryParams`](../api.GetKeyStoreEntryParams) |

#### Returns

`Promise`<[`KeyStoreEntry`](../key_store.KeyStoreEntry)\>

#### Inherited from

[API](../api.API).[getKeyStoreEntry](../api.API#getkeystoreentry)

#### Defined in

[core/src/api.ts:693](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L693)

---

### getLegacyData

▸ **getLegacyData**(`_params`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`PBES2Container`](../container.PBES2Container)\>

#### Parameters

| Name      | Type                                                |
| :-------- | :-------------------------------------------------- |
| `_params` | [`GetLegacyDataParams`](../api.GetLegacyDataParams) |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`PBES2Container`](../container.PBES2Container)\>

#### Inherited from

[API](../api.API).[getLegacyData](../api.API#getlegacydata)

#### Defined in

[core/src/api.ts:678](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L678)

---

### getOrg

▸ **getOrg**(`_id`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Org`](../org.Org)\>

Get the [Org](../org.Org) for a given `id`.

**`authentication_required`**

Requires the authenticated account to be a member of the given organization

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `_id` | `string` |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Org`](../org.Org)\>

#### Inherited from

[API](../api.API).[getOrg](../api.API#getorg)

#### Defined in

[core/src/api.ts:561](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L561)

---

### getVault

▸ **getVault**(`_id`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Vault`](../vault.Vault)\>

Get the [Vault](../vault.Vault) with the given `id`

**`authentiation_required`**

If the vault belongs to an organization, the authenticated account needs to be
assigned to the given vault either directly or through a [Group](../org.Group).
Otherwise, only access to the accounts private vault is allowed.

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `_id` | `string` |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Vault`](../vault.Vault)\>

#### Inherited from

[API](../api.API).[getVault](../api.API#getvault)

#### Defined in

[core/src/api.ts:605](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L605)

---

### recoverAccount

▸ **recoverAccount**(`_params`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Account`](../account.Account)\>

Initiate account recovery

#### Parameters

| Name      | Type                                                  |
| :-------- | :---------------------------------------------------- |
| `_params` | [`RecoverAccountParams`](../api.RecoverAccountParams) |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Account`](../account.Account)\>

#### Inherited from

[API](../api.API).[recoverAccount](../api.API#recoveraccount)

#### Defined in

[core/src/api.ts:531](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L531)

---

### removeTrustedDevice

▸ **removeTrustedDevice**(`_id`):
[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `_id` | `string` |

#### Returns

[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

#### Inherited from

[API](../api.API).[removeTrustedDevice](../api.API#removetrusteddevice)

#### Defined in

[core/src/api.ts:708](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L708)

---

### revokeSession

▸ **revokeSession**(`_id`):
[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

Revoke a [Session](../session.Session), effectively logging out any client
authenticated with it

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `_id` | `string` |

#### Returns

[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

#### Inherited from

[API](../api.API).[revokeSession](../api.API#revokesession)

#### Defined in

[core/src/api.ts:489](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L489)

---

### startAuthRequest

▸ **startAuthRequest**(`_params`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`StartAuthRequestResponse`](../api.StartAuthRequestResponse)\>

#### Parameters

| Name      | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| `_params` | [`StartAuthRequestParams`](../api.StartAuthRequestParams) |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`StartAuthRequestResponse`](../api.StartAuthRequestResponse)\>

#### Inherited from

[API](../api.API).[startAuthRequest](../api.API#startauthrequest)

#### Defined in

[core/src/api.ts:450](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L450)

---

### startCreateSession

▸ **startCreateSession**(`_params`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`StartCreateSessionResponse`](../api.StartCreateSessionResponse)\>

Initiate the login procedure for a given account by requesting the
authentication params which are required for proceeding with [[createSession]].

#### Parameters

| Name      | Type                                                          |
| :-------- | :------------------------------------------------------------ |
| `_params` | [`StartCreateSessionParams`](../api.StartCreateSessionParams) |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`StartCreateSessionResponse`](../api.StartCreateSessionResponse)\>

#### Inherited from

[API](../api.API).[startCreateSession](../api.API#startcreatesession)

#### Defined in

[core/src/api.ts:464](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L464)

---

### startRegisterAuthenticator

▸ **startRegisterAuthenticator**(`_params`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`StartRegisterAuthenticatorResponse`](../api.StartRegisterAuthenticatorResponse)\>

#### Parameters

| Name      | Type                                                                          |
| :-------- | :---------------------------------------------------------------------------- |
| `_params` | [`StartRegisterAuthenticatorParams`](../api.StartRegisterAuthenticatorParams) |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`StartRegisterAuthenticatorResponse`](../api.StartRegisterAuthenticatorResponse)\>

#### Inherited from

[API](../api.API).[startRegisterAuthenticator](../api.API#startregisterauthenticator)

#### Defined in

[core/src/api.ts:431](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L431)

---

### updateAccount

▸ **updateAccount**(`_account`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Account`](../account.Account)\>

Update the [Account](../account.Account) associated with the current session.

**`authentication_required`**

#### Parameters

| Name       | Type                            |
| :--------- | :------------------------------ |
| `_account` | [`Account`](../account.Account) |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Account`](../account.Account)\>

#### Inherited from

[API](../api.API).[updateAccount](../api.API#updateaccount)

#### Defined in

[core/src/api.ts:523](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L523)

---

### updateAuth

▸ **updateAuth**(`_params`):
[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

Update the authentication params stored on the server. This is usually used in
case a users master password has changed.

#### Parameters

| Name      | Type                                          |
| :-------- | :-------------------------------------------- |
| `_params` | [`UpdateAuthParams`](../api.UpdateAuthParams) |

#### Returns

[`PromiseWithProgress`](../modules/api#promisewithprogress)<`void`\>

#### Inherited from

[API](../api.API).[updateAuth](../api.API#updateauth)

#### Defined in

[core/src/api.ts:473](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L473)

---

### updateOrg

▸ **updateOrg**(`_org`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Org`](../org.Org)\>

Updates a given [Org](../org.Org)

**`authentication_required`**

Updating members, organization name or pubic/private keys requires the
[OrgRole.Owner](../enums/org.OrgRole#owner) role, while any other changes
require the [OrgRole.Admin](../enums/org.OrgRole#admin) role.

#### Parameters

| Name   | Type                |
| :----- | :------------------ |
| `_org` | [`Org`](../org.Org) |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Org`](../org.Org)\>

#### Inherited from

[API](../api.API).[updateOrg](../api.API#updateorg)

#### Defined in

[core/src/api.ts:574](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L574)

---

### updateVault

▸ **updateVault**(`_vault`):
[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Vault`](../vault.Vault)\>

Update the given [Vault](../vault.Vault)

**`authentiation_required`**

If vault belongs to an organization, the authenticated account needs to be be
assigned to the given vault either directly or through a [Group](../org.Group)
and have explicit write access. Otherwise, only access to the accounts private
vault is allowed.

#### Parameters

| Name     | Type                      |
| :------- | :------------------------ |
| `_vault` | [`Vault`](../vault.Vault) |

#### Returns

[`PromiseWithProgress`](../../modules/api#promisewithprogress)<[`Vault`](../vault.Vault)\>

#### Inherited from

[API](../api.API).[updateVault](../api.API#updatevault)

#### Defined in

[core/src/api.ts:620](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L620)

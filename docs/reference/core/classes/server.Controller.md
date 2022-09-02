---
title: "Class: Controller"
linkTitle: "Controller"
slug: "server.Controller"
---

[server](../../modules/server).Controller

Controller class for processing api requests

## Hierarchy

-   [`API`](../api.API)

    ↳ **`Controller`**

## Constructors

### constructor

• **new Controller**(`server`, `context`)

#### Parameters

| Name      | Type                                         |
| :-------- | :------------------------------------------- |
| `server`  | [`Server`](../server.Server)                 |
| `context` | [`Context`](../../interfaces/server.Context) |

#### Overrides

[API](../api.API).[constructor](../api.API#constructor)

#### Defined in

[core/src/server.ts:129](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L129)

## Properties

### context

• **context**: [`Context`](../../interfaces/server.Context)

---

### handlerDefinitions

• **handlerDefinitions**: `HandlerDefinition`[]

#### Inherited from

[API](../api.API).[handlerDefinitions](../api.API#handlerdefinitions)

#### Defined in

[core/src/api.ts:428](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L428)

---

### server

• **server**: [`Server`](../server.Server)

## Accessors

### attachmentStorage

• `get` **attachmentStorage**():
[`AttachmentStorage`](../../interfaces/attachment.AttachmentStorage)

#### Returns

[`AttachmentStorage`](../../interfaces/attachment.AttachmentStorage)

#### Defined in

[core/src/server.ts:145](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L145)

---

### authServers

• `get` **authServers**(): [`AuthServer`](../../interfaces/auth.AuthServer)[]

#### Returns

[`AuthServer`](../../interfaces/auth.AuthServer)[]

#### Defined in

[core/src/server.ts:153](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L153)

---

### config

• `get` **config**(): [`ServerConfig`](../server.ServerConfig)

#### Returns

[`ServerConfig`](../server.ServerConfig)

#### Defined in

[core/src/server.ts:133](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L133)

---

### legacyServer

• `get` **legacyServer**(): `undefined` \|
[`LegacyServer`](../../interfaces/server.LegacyServer)

#### Returns

`undefined` \| [`LegacyServer`](../../interfaces/server.LegacyServer)

#### Defined in

[core/src/server.ts:149](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L149)

---

### messenger

• `get` **messenger**(): [`Messenger`](../../interfaces/messenger.Messenger)

#### Returns

[`Messenger`](../../interfaces/messenger.Messenger)

#### Defined in

[core/src/server.ts:141](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L141)

---

### provisioner

• `get` **provisioner**():
[`Provisioner`](../../interfaces/provisioning.Provisioner)

#### Returns

[`Provisioner`](../../interfaces/provisioning.Provisioner)

#### Defined in

[core/src/server.ts:157](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L157)

---

### storage

• `get` **storage**(): [`Storage`](../../interfaces/storage.Storage)

#### Returns

[`Storage`](../../interfaces/storage.Storage)

#### Defined in

[core/src/server.ts:137](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L137)

## Methods

### \_createAdHocAuthenticator

▸ `Private` **\_createAdHocAuthenticator**(`auth`, `purposes`, `type`):
`Promise`<[`Authenticator`](../auth.Authenticator)<`any`\>\>

#### Parameters

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `auth`     | [`Auth`](../auth.Auth)                          |
| `purposes` | [`AuthPurpose`](../../enums/auth.AuthPurpose)[] |
| `type`     | [`AuthType`](../../enums/auth.AuthType)         |

#### Returns

`Promise`<[`Authenticator`](../auth.Authenticator)<`any`\>\>

#### Defined in

[core/src/server.ts:1748](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1748)

---

### \_getAuth

▸ `Protected` **\_getAuth**(`email`): `Promise`<[`Auth`](../auth.Auth)\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `email` | `string` |

#### Returns

`Promise`<[`Auth`](../auth.Auth)\>

#### Defined in

[core/src/server.ts:1760](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1760)

---

### \_getAuthServer

▸ `Protected` **\_getAuthServer**(`type`):
[`AuthServer`](../../interfaces/auth.AuthServer)

#### Parameters

| Name   | Type                                    |
| :----- | :-------------------------------------- |
| `type` | [`AuthType`](../../enums/auth.AuthType) |

#### Returns

[`AuthServer`](../../interfaces/auth.AuthServer)

#### Defined in

[core/src/server.ts:1842](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1842)

---

### \_getAuthenticators

▸ `Protected` **\_getAuthenticators**(`auth`):
`Promise`<[`Authenticator`](../auth.Authenticator)<`any`\>[]\>

#### Parameters

| Name   | Type                   |
| :----- | :--------------------- |
| `auth` | [`Auth`](../auth.Auth) |

#### Returns

`Promise`<[`Authenticator`](../auth.Authenticator)<`any`\>[]\>

#### Defined in

[core/src/server.ts:1733](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1733)

---

### \_requireAuth

▸ `Private` **\_requireAuth**(): `Object`

#### Returns

`Object`

| Name           | Type                                           |
| :------------- | :--------------------------------------------- |
| `account`      | [`Account`](../account.Account)                |
| `auth`         | [`Auth`](../auth.Auth)                         |
| `provisioning` | [`Provisioning`](../provisioning.Provisioning) |
| `session`      | [`Session`](../session.Session)                |

#### Defined in

[core/src/server.ts:1723](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1723)

---

### \_useAuthToken

▸ `Private` **\_useAuthToken**(`__namedParameters`): `Promise`<`void`\>

#### Parameters

| Name                                 | Type                                          |
| :----------------------------------- | :-------------------------------------------- |
| `__namedParameters`                  | `Object`                                      |
| `__namedParameters.authenticatorId?` | `string`                                      |
| `__namedParameters.email`            | `string`                                      |
| `__namedParameters.purpose`          | [`AuthPurpose`](../../enums/auth.AuthPurpose) |
| `__namedParameters.requestId?`       | `string`                                      |
| `__namedParameters.token`            | `string`                                      |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/server.ts:1853](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1853)

---

### acceptInvite

▸ **acceptInvite**(`invite`): `Promise`<`void`\>

Accept an [Invite](../invite.Invite)

#### Parameters

| Name     | Type                         |
| :------- | :--------------------------- |
| `invite` | [`Invite`](../invite.Invite) |

#### Returns

`Promise`<`void`\>

#### Overrides

[API](../api.API).[acceptInvite](../api.API#acceptinvite)

#### Defined in

[core/src/server.ts:1470](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1470)

---

### authenticate

▸ **authenticate**(`req`, `ctx`): `Promise`<`void`\>

#### Parameters

| Name  | Type                                         |
| :---- | :------------------------------------------- |
| `req` | [`Request`](../transport.Request)            |
| `ctx` | [`Context`](../../interfaces/server.Context) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/server.ts:161](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L161)

---

### completeAuthRequest

▸ **completeAuthRequest**(`__namedParameters`):
`Promise`<[`CompleteAuthRequestResponse`](../api.CompleteAuthRequestResponse)\>

#### Parameters

| Name                | Type                                                            |
| :------------------ | :-------------------------------------------------------------- |
| `__namedParameters` | [`CompleteAuthRequestParams`](../api.CompleteAuthRequestParams) |

#### Returns

`Promise`<[`CompleteAuthRequestResponse`](../api.CompleteAuthRequestResponse)\>

#### Overrides

[API](../api.API).[completeAuthRequest](../api.API#completeauthrequest)

#### Defined in

[core/src/server.ts:394](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L394)

---

### completeCreateSession

▸ **completeCreateSession**(`__namedParameters`):
`Promise`<[`Session`](../session.Session)\>

Create new [Session](../session.Session) which can be used to authenticate
future request

#### Parameters

| Name                | Type                                                                |
| :------------------ | :------------------------------------------------------------------ |
| `__namedParameters` | [`CompleteCreateSessionParams`](../api.CompleteCreateSessionParams) |

#### Returns

`Promise`<[`Session`](../session.Session)\>

#### Overrides

[API](../api.API).[completeCreateSession](../api.API#completecreatesession)

#### Defined in

[core/src/server.ts:553](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L553)

---

### completeRegisterAuthenticator

▸ **completeRegisterAuthenticator**(`__namedParameters`):
`Promise`<[`CompleteRegisterMFAuthenticatorResponse`](../api.CompleteRegisterMFAuthenticatorResponse)\>

#### Parameters

| Name                | Type                                                                                    |
| :------------------ | :-------------------------------------------------------------------------------------- |
| `__namedParameters` | [`CompleteRegisterMFAuthenticatorParams`](../api.CompleteRegisterMFAuthenticatorParams) |

#### Returns

`Promise`<[`CompleteRegisterMFAuthenticatorResponse`](../api.CompleteRegisterMFAuthenticatorResponse)\>

#### Overrides

[API](../api.API).[completeRegisterAuthenticator](../api.API#completeregisterauthenticator)

#### Defined in

[core/src/server.ts:266](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L266)

---

### createAccount

▸ **createAccount**(`__namedParameters`):
`Promise`<[`Account`](../account.Account)\>

Create a new [Account](../account.Account)

#### Parameters

| Name                | Type                                                |
| :------------------ | :-------------------------------------------------- |
| `__namedParameters` | [`CreateAccountParams`](../api.CreateAccountParams) |

#### Returns

`Promise`<[`Account`](../account.Account)\>

#### Overrides

[API](../api.API).[createAccount](../api.API#createaccount)

#### Defined in

[core/src/server.ts:643](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L643)

---

### createAttachment

▸ **createAttachment**(`att`): `Promise`<`string`\>

#### Parameters

| Name  | Type                                     |
| :---- | :--------------------------------------- |
| `att` | [`Attachment`](../attachment.Attachment) |

#### Returns

`Promise`<`string`\>

#### Overrides

[API](../api.API).[createAttachment](../api.API#createattachment)

#### Defined in

[core/src/server.ts:1520](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1520)

---

### createKeyStoreEntry

▸ **createKeyStoreEntry**(`__namedParameters`):
`Promise`<[`KeyStoreEntry`](../key_store.KeyStoreEntry)\>

#### Parameters

| Name                | Type                                                            |
| :------------------ | :-------------------------------------------------------------- |
| `__namedParameters` | [`CreateKeyStoreEntryParams`](../api.CreateKeyStoreEntryParams) |

#### Returns

`Promise`<[`KeyStoreEntry`](../key_store.KeyStoreEntry)\>

#### Overrides

[API](../api.API).[createKeyStoreEntry](../api.API#createkeystoreentry)

#### Defined in

[core/src/server.ts:1657](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1657)

---

### createOrg

▸ **createOrg**(`org`): `Promise`<[`Org`](../org.Org)\>

Create a new [Org](../org.Org)

#### Parameters

| Name  | Type                |
| :---- | :------------------ |
| `org` | [`Org`](../org.Org) |

#### Returns

`Promise`<[`Org`](../org.Org)\>

#### Overrides

[API](../api.API).[createOrg](../api.API#createorg)

#### Defined in

[core/src/server.ts:878](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L878)

---

### createVault

▸ **createVault**(`vault`): `Promise`<[`Vault`](../vault.Vault)\>

Create a new vault

#### Parameters

| Name    | Type                      |
| :------ | :------------------------ |
| `vault` | [`Vault`](../vault.Vault) |

#### Returns

`Promise`<[`Vault`](../vault.Vault)\>

#### Overrides

[API](../api.API).[createVault](../api.API#createvault)

#### Defined in

[core/src/server.ts:1354](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1354)

---

### deleteAccount

▸ **deleteAccount**(): `Promise`<`void`\>

Delete current account

#### Returns

`Promise`<`void`\>

#### Overrides

[API](../api.API).[deleteAccount](../api.API#deleteaccount)

#### Defined in

[core/src/server.ts:846](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L846)

---

### deleteAttachment

▸ **deleteAttachment**(`__namedParameters`): `Promise`<`void`\>

#### Parameters

| Name                | Type                                                      |
| :------------------ | :-------------------------------------------------------- |
| `__namedParameters` | [`DeleteAttachmentParams`](../api.DeleteAttachmentParams) |

#### Returns

`Promise`<`void`\>

#### Overrides

[API](../api.API).[deleteAttachment](../api.API#deleteattachment)

#### Defined in

[core/src/server.ts:1592](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1592)

---

### deleteAuthenticator

▸ **deleteAuthenticator**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Overrides

[API](../api.API).[deleteAuthenticator](../api.API#deleteauthenticator)

#### Defined in

[core/src/server.ts:289](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L289)

---

### deleteKeyStoreEntry

▸ **deleteKeyStoreEntry**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Overrides

[API](../api.API).[deleteKeyStoreEntry](../api.API#deletekeystoreentry)

#### Defined in

[core/src/server.ts:1700](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1700)

---

### deleteLegacyAccount

▸ **deleteLegacyAccount**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[API](../api.API).[deleteLegacyAccount](../api.API#deletelegacyaccount)

#### Defined in

[core/src/server.ts:1641](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1641)

---

### deleteOrg

▸ **deleteOrg**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Overrides

[API](../api.API).[deleteOrg](../api.API#deleteorg)

#### Defined in

[core/src/server.ts:1221](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1221)

---

### deleteVault

▸ **deleteVault**(`id`): `Promise`<`void`\>

Delete the [Vault](../vault.Vault) with the given `id`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Overrides

[API](../api.API).[deleteVault](../api.API#deletevault)

#### Defined in

[core/src/server.ts:1404](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1404)

---

### getAccount

▸ **getAccount**(): `Promise`<[`Account`](../account.Account)\>

Get the [Account](../account.Account) associated with the current session

#### Returns

`Promise`<[`Account`](../account.Account)\>

#### Overrides

[API](../api.API).[getAccount](../api.API#getaccount)

#### Defined in

[core/src/server.ts:699](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L699)

---

### getAttachment

▸ **getAttachment**(`__namedParameters`):
`Promise`<[`Attachment`](../attachment.Attachment)\>

#### Parameters

| Name                | Type                                                |
| :------------------ | :-------------------------------------------------- |
| `__namedParameters` | [`GetAttachmentParams`](../api.GetAttachmentParams) |

#### Returns

`Promise`<[`Attachment`](../attachment.Attachment)\>

#### Overrides

[API](../api.API).[getAttachment](../api.API#getattachment)

#### Defined in

[core/src/server.ts:1569](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1569)

---

### getAuthInfo

▸ **getAuthInfo**(): `Promise`<[`AuthInfo`](../api.AuthInfo)\>

Get the [AuthInfo](../api.AuthInfo) for the current account

#### Returns

`Promise`<[`AuthInfo`](../api.AuthInfo)\>

#### Overrides

[API](../api.API).[getAuthInfo](../api.API#getauthinfo)

#### Defined in

[core/src/server.ts:706](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L706)

---

### getInvite

▸ **getInvite**(`__namedParameters`): `Promise`<[`Invite`](../invite.Invite)\>

Get an [Invite](../invite.Invite).

#### Parameters

| Name                | Type                                        |
| :------------------ | :------------------------------------------ |
| `__namedParameters` | [`GetInviteParams`](../api.GetInviteParams) |

#### Returns

`Promise`<[`Invite`](../invite.Invite)\>

#### Overrides

[API](../api.API).[getInvite](../api.API#getinvite)

#### Defined in

[core/src/server.ts:1448](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1448)

---

### getKeyStoreEntry

▸ **getKeyStoreEntry**(`__namedParameters`):
`Promise`<[`KeyStoreEntry`](../key_store.KeyStoreEntry)\>

#### Parameters

| Name                | Type                                                      |
| :------------------ | :-------------------------------------------------------- |
| `__namedParameters` | [`GetKeyStoreEntryParams`](../api.GetKeyStoreEntryParams) |

#### Returns

`Promise`<[`KeyStoreEntry`](../key_store.KeyStoreEntry)\>

#### Overrides

[API](../api.API).[getKeyStoreEntry](../api.API#getkeystoreentry)

#### Defined in

[core/src/server.ts:1682](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1682)

---

### getLegacyData

▸ **getLegacyData**(`__namedParameters`):
`Promise`<[`PBES2Container`](../container.PBES2Container)\>

#### Parameters

| Name                | Type                                                |
| :------------------ | :-------------------------------------------------- |
| `__namedParameters` | [`GetLegacyDataParams`](../api.GetLegacyDataParams) |

#### Returns

`Promise`<[`PBES2Container`](../container.PBES2Container)\>

#### Overrides

[API](../api.API).[getLegacyData](../api.API#getlegacydata)

#### Defined in

[core/src/server.ts:1613](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1613)

---

### getOrg

▸ **getOrg**(`id`): `Promise`<[`Org`](../org.Org)\>

Get the [Org](../org.Org) for a given `id`.

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<[`Org`](../org.Org)\>

#### Overrides

[API](../api.API).[getOrg](../api.API#getorg)

#### Defined in

[core/src/server.ts:918](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L918)

---

### getVault

▸ **getVault**(`id`): `Promise`<[`Vault`](../vault.Vault)\>

Get the [Vault](../vault.Vault) with the given `id`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<[`Vault`](../vault.Vault)\>

#### Overrides

[API](../api.API).[getVault](../api.API#getvault)

#### Defined in

[core/src/server.ts:1251](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1251)

---

### log

▸ **log**(`type`, `data?`): [`LogEvent`](../logging.LogEvent)

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |
| `data` | `any`    |

#### Returns

[`LogEvent`](../logging.LogEvent)

#### Defined in

[core/src/server.ts:247](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L247)

---

### process

▸ **process**(`req`): `Promise`<`any`\>

#### Parameters

| Name  | Type                              |
| :---- | :-------------------------------- |
| `req` | [`Request`](../transport.Request) |

#### Returns

`Promise`<`any`\>

#### Defined in

[core/src/server.ts:227](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L227)

---

### recoverAccount

▸ **recoverAccount**(`__namedParameters`):
`Promise`<[`Account`](../account.Account)\>

Initiate account recovery

#### Parameters

| Name                | Type                                                  |
| :------------------ | :---------------------------------------------------- |
| `__namedParameters` | [`RecoverAccountParams`](../api.RecoverAccountParams) |

#### Returns

`Promise`<[`Account`](../account.Account)\>

#### Overrides

[API](../api.API).[recoverAccount](../api.API#recoveraccount)

#### Defined in

[core/src/server.ts:782](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L782)

---

### removeTrustedDevice

▸ **removeTrustedDevice**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Overrides

[API](../api.API).[removeTrustedDevice](../api.API#removetrusteddevice)

#### Defined in

[core/src/server.ts:500](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L500)

---

### revokeSession

▸ **revokeSession**(`id`): `Promise`<`void`\>

Revoke a [Session](../session.Session), effectively logging out any client
authenticated with it

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Overrides

[API](../api.API).[revokeSession](../api.API#revokesession)

#### Defined in

[core/src/server.ts:626](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L626)

---

### startAuthRequest

▸ **startAuthRequest**(`__namedParameters`):
`Promise`<[`StartAuthRequestResponse`](../api.StartAuthRequestResponse)\>

#### Parameters

| Name                | Type                                                      |
| :------------------ | :-------------------------------------------------------- |
| `__namedParameters` | [`StartAuthRequestParams`](../api.StartAuthRequestParams) |

#### Returns

`Promise`<[`StartAuthRequestResponse`](../api.StartAuthRequestResponse)\>

#### Overrides

[API](../api.API).[startAuthRequest](../api.API#startauthrequest)

#### Defined in

[core/src/server.ts:315](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L315)

---

### startCreateSession

▸ **startCreateSession**(`__namedParameters`):
`Promise`<[`StartCreateSessionResponse`](../api.StartCreateSessionResponse)\>

Initiate the login procedure for a given account by requesting the
authentication params which are required for proceeding with [[createSession]].

#### Parameters

| Name                | Type                                                          |
| :------------------ | :------------------------------------------------------------ |
| `__namedParameters` | [`StartCreateSessionParams`](../api.StartCreateSessionParams) |

#### Returns

`Promise`<[`StartCreateSessionResponse`](../api.StartCreateSessionResponse)\>

#### Overrides

[API](../api.API).[startCreateSession](../api.API#startcreatesession)

#### Defined in

[core/src/server.ts:512](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L512)

---

### startRegisterAuthenticator

▸ **startRegisterAuthenticator**(`__namedParameters`):
`Promise`<[`StartRegisterAuthenticatorResponse`](../api.StartRegisterAuthenticatorResponse)\>

#### Parameters

| Name                | Type                                                                          |
| :------------------ | :---------------------------------------------------------------------------- |
| `__namedParameters` | [`StartRegisterAuthenticatorParams`](../api.StartRegisterAuthenticatorParams) |

#### Returns

`Promise`<[`StartRegisterAuthenticatorResponse`](../api.StartRegisterAuthenticatorResponse)\>

#### Overrides

[API](../api.API).[startRegisterAuthenticator](../api.API#startregisterauthenticator)

#### Defined in

[core/src/server.ts:251](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L251)

---

### updateAccount

▸ **updateAccount**(`__namedParameters`):
`Promise`<[`Account`](../account.Account)\>

Update the [Account](../account.Account) associated with the current session.

#### Parameters

| Name                | Type                            |
| :------------------ | :------------------------------ |
| `__namedParameters` | [`Account`](../account.Account) |

#### Returns

`Promise`<[`Account`](../account.Account)\>

#### Overrides

[API](../api.API).[updateAccount](../api.API#updateaccount)

#### Defined in

[core/src/server.ts:743](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L743)

---

### updateAuth

▸ **updateAuth**(`__namedParameters`): `Promise`<`void`\>

Update the authentication params stored on the server. This is usually used in
case a users master password has changed.

#### Parameters

| Name                | Type                                          |
| :------------------ | :-------------------------------------------- |
| `__namedParameters` | [`UpdateAuthParams`](../api.UpdateAuthParams) |

#### Returns

`Promise`<`void`\>

#### Overrides

[API](../api.API).[updateAuth](../api.API#updateauth)

#### Defined in

[core/src/server.ts:480](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L480)

---

### updateMetaData

▸ **updateMetaData**(`org`): `Promise`<`void`\>

#### Parameters

| Name  | Type                |
| :---- | :------------------ |
| `org` | [`Org`](../org.Org) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/server.ts:1653](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1653)

---

### updateOrg

▸ **updateOrg**(`__namedParameters`): `Promise`<[`Org`](../org.Org)\>

Updates a given [Org](../org.Org)

#### Parameters

| Name                | Type                |
| :------------------ | :------------------ |
| `__namedParameters` | [`Org`](../org.Org) |

#### Returns

`Promise`<[`Org`](../org.Org)\>

#### Overrides

[API](../api.API).[updateOrg](../api.API#updateorg)

#### Defined in

[core/src/server.ts:934](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L934)

---

### updateVault

▸ **updateVault**(`__namedParameters`): `Promise`<[`Vault`](../vault.Vault)\>

Update the given [Vault](../vault.Vault)

#### Parameters

| Name                | Type                      |
| :------------------ | :------------------------ |
| `__namedParameters` | [`Vault`](../vault.Vault) |

#### Returns

`Promise`<[`Vault`](../vault.Vault)\>

#### Overrides

[API](../api.API).[updateVault](../api.API#updatevault)

#### Defined in

[core/src/server.ts:1278](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/server.ts#L1278)

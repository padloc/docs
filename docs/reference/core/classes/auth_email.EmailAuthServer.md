---
title: "Class: EmailAuthServer"
linkTitle: "EmailAuthServer"
slug: "auth_email.EmailAuthServer"
---

[auth/email](../../modules/auth_email).EmailAuthServer

## Implements

-   [`AuthServer`](../../interfaces/auth.AuthServer)

## Constructors

### constructor

• **new EmailAuthServer**(`messenger`)

#### Parameters

| Name        | Type                                                |
| :---------- | :-------------------------------------------------- |
| `messenger` | [`Messenger`](../../interfaces/messenger.Messenger) |

#### Defined in

[core/src/auth/email.ts:8](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/email.ts#L8)

## Properties

### messenger

• **messenger**: [`Messenger`](../../interfaces/messenger.Messenger)

## Methods

### \_generateCode

▸ `Private` **\_generateCode**(`len?`): `Promise`<`string`\>

#### Parameters

| Name  | Type     | Default value |
| :---- | :------- | :------------ |
| `len` | `number` | `6`           |

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/auth/email.ts:76](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/email.ts#L76)

---

### activateAuthenticator

▸ **activateAuthenticator**(`authenticator`, `__namedParameters`):
`Promise`<`void`\>

#### Parameters

| Name                     | Type                                             |
| :----------------------- | :----------------------------------------------- |
| `authenticator`          | [`Authenticator`](../auth.Authenticator)<`any`\> |
| `__namedParameters`      | `Object`                                         |
| `__namedParameters.code` | `string`                                         |

#### Returns

`Promise`<`void`\>

#### Implementation of

[AuthServer](../../interfaces/auth.AuthServer).[activateAuthenticator](../interfaces/auth.AuthServer.md#activateauthenticator)

#### Defined in

[core/src/auth/email.ts:34](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/email.ts#L34)

---

### initAuthRequest

▸ **initAuthRequest**(`authenticator`, `request`): `Promise`<{ `email`: `any` ;
`sentAt`: `string` ; `subject`: `string` = message.title }\>

#### Parameters

| Name            | Type                                             |
| :-------------- | :----------------------------------------------- |
| `authenticator` | [`Authenticator`](../auth.Authenticator)<`any`\> |
| `request`       | [`AuthRequest`](../auth.AuthRequest)<`any`\>     |

#### Returns

`Promise`<{ `email`: `any` ; `sentAt`: `string` ; `subject`: `string` =
message.title }\>

#### Implementation of

[AuthServer](../../interfaces/auth.AuthServer).[initAuthRequest](../interfaces/auth.AuthServer.md#initauthrequest)

#### Defined in

[core/src/auth/email.ts:44](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/email.ts#L44)

---

### initAuthenticator

▸ **initAuthenticator**(`authenticator`, `auth`, `__namedParameters?`):
`Promise`<{ `email`: `string` ; `requestId`: `string` ; `sentAt`: `string` } \|
{ `email`: `string` ; `requestId`: `undefined` ; `sentAt`: `undefined` }\>

#### Parameters

| Name                       | Type                                             |
| :------------------------- | :----------------------------------------------- |
| `authenticator`            | [`Authenticator`](../auth.Authenticator)<`any`\> |
| `auth`                     | [`Auth`](../auth.Auth)                           |
| `__namedParameters`        | `Object`                                         |
| `__namedParameters.email?` | `string`                                         |

#### Returns

`Promise`<{ `email`: `string` ; `requestId`: `string` ; `sentAt`: `string` } \|
{ `email`: `string` ; `requestId`: `undefined` ; `sentAt`: `undefined` }\>

#### Implementation of

[AuthServer](../../interfaces/auth.AuthServer).[initAuthenticator](../interfaces/auth.AuthServer.md#initauthenticator)

#### Defined in

[core/src/auth/email.ts:14](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/email.ts#L14)

---

### supportsType

▸ **supportsType**(`type`): `boolean`

#### Parameters

| Name   | Type                                    |
| :----- | :-------------------------------------- |
| `type` | [`AuthType`](../../enums/auth.AuthType) |

#### Returns

`boolean`

#### Implementation of

[AuthServer](../../interfaces/auth.AuthServer).[supportsType](../interfaces/auth.AuthServer.md#supportstype)

#### Defined in

[core/src/auth/email.ts:10](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/email.ts#L10)

---

### verifyAuthRequest

▸ **verifyAuthRequest**(`_method`, `request`, `__namedParameters`):
`Promise`<`void`\>

#### Parameters

| Name                     | Type                                             |
| :----------------------- | :----------------------------------------------- |
| `_method`                | [`Authenticator`](../auth.Authenticator)<`any`\> |
| `request`                | [`AuthRequest`](../auth.AuthRequest)<`any`\>     |
| `__namedParameters`      | `Object`                                         |
| `__namedParameters.code` | `string`                                         |

#### Returns

`Promise`<`void`\>

#### Implementation of

[AuthServer](../../interfaces/auth.AuthServer).[verifyAuthRequest](../interfaces/auth.AuthServer.md#verifyauthrequest)

#### Defined in

[core/src/auth/email.ts:62](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/email.ts#L62)

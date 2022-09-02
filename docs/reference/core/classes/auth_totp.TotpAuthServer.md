---
title: "Class: TotpAuthServer"
linkTitle: "TotpAuthServer"
slug: "auth_totp.TotpAuthServer"
---

[auth/totp](../../modules/auth_totp).TotpAuthServer

## Implements

-   [`AuthServer`](../../interfaces/auth.AuthServer)

## Constructors

### constructor

• **new TotpAuthServer**(`_config`)

#### Parameters

| Name      | Type                                            |
| :-------- | :---------------------------------------------- |
| `_config` | [`TotpAuthConfig`](../auth_totp.TotpAuthConfig) |

#### Defined in

[core/src/auth/totp.ts:22](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/totp.ts#L22)

## Methods

### \_verifyCode

▸ `Private` **\_verifyCode**(`authenticator`, `code`): `Promise`<`boolean`\>

#### Parameters

| Name            | Type                                             |
| :-------------- | :----------------------------------------------- |
| `authenticator` | [`Authenticator`](../auth.Authenticator)<`any`\> |
| `code`          | `string`                                         |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/auth/totp.ts:56](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/totp.ts#L56)

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

[AuthServer](../../interfaces/auth.AuthServer).[activateAuthenticator](../interfaces/auth.AuthServer#activateauthenticator)

#### Defined in

[core/src/auth/totp.ts:37](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/totp.ts#L37)

---

### initAuthRequest

▸ **initAuthRequest**(`_authenticator`, `_request`): `Promise`<{}\>

#### Parameters

| Name             | Type                                             |
| :--------------- | :----------------------------------------------- |
| `_authenticator` | [`Authenticator`](../auth.Authenticator)<`any`\> |
| `_request`       | [`AuthRequest`](../auth.AuthRequest)<`any`\>     |

#### Returns

`Promise`<{}\>

#### Implementation of

[AuthServer](../../interfaces/auth.AuthServer).[initAuthRequest](../interfaces/auth.AuthServer#initauthrequest)

#### Defined in

[core/src/auth/totp.ts:46](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/totp.ts#L46)

---

### initAuthenticator

▸ **initAuthenticator**(`authenticator`): `Promise`<{ `secret`: `string` }\>

#### Parameters

| Name            | Type                                             |
| :-------------- | :----------------------------------------------- |
| `authenticator` | [`Authenticator`](../auth.Authenticator)<`any`\> |

#### Returns

`Promise`<{ `secret`: `string` }\>

#### Implementation of

[AuthServer](../../interfaces/auth.AuthServer).[initAuthenticator](../interfaces/auth.AuthServer#initauthenticator)

#### Defined in

[core/src/auth/totp.ts:28](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/totp.ts#L28)

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

[AuthServer](../../interfaces/auth.AuthServer).[supportsType](../interfaces/auth.AuthServer#supportstype)

#### Defined in

[core/src/auth/totp.ts:24](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/totp.ts#L24)

---

### verifyAuthRequest

▸ **verifyAuthRequest**(`authenticator`, `_request`, `__namedParameters`):
`Promise`<`void`\>

#### Parameters

| Name                     | Type                                             |
| :----------------------- | :----------------------------------------------- |
| `authenticator`          | [`Authenticator`](../auth.Authenticator)<`any`\> |
| `_request`               | [`AuthRequest`](../auth.AuthRequest)<`any`\>     |
| `__namedParameters`      | `Object`                                         |
| `__namedParameters.code` | `string`                                         |

#### Returns

`Promise`<`void`\>

#### Implementation of

[AuthServer](../../interfaces/auth.AuthServer).[verifyAuthRequest](../interfaces/auth.AuthServer#verifyauthrequest)

#### Defined in

[core/src/auth/totp.ts:50](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/totp.ts#L50)

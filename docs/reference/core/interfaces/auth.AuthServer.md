---
title: "Interface: AuthServer"
linkTitle: "AuthServer"
slug: "auth.AuthServer"
---

[auth](../../modules/auth).AuthServer

## Implemented by

-   [`EmailAuthServer`](../../classes/auth_email.EmailAuthServer)
-   [`PublicKeyAuthServer`](../../classes/auth_public_key.PublicKeyAuthServer)
-   [`TotpAuthServer`](../../classes/auth_totp.TotpAuthServer)

## Methods

### activateAuthenticator

▸ **activateAuthenticator**(`authenticator`, `params?`): `Promise`<`void`\>

#### Parameters

| Name            | Type                                                        |
| :-------------- | :---------------------------------------------------------- |
| `authenticator` | [`Authenticator`](../../classes/auth.Authenticator)<`any`\> |
| `params?`       | `any`                                                       |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/auth.ts:154](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L154)

---

### initAuthRequest

▸ **initAuthRequest**(`authenticator`, `request`, `params?`): `Promise`<`any`\>

#### Parameters

| Name            | Type                                                        |
| :-------------- | :---------------------------------------------------------- |
| `authenticator` | [`Authenticator`](../../classes/auth.Authenticator)<`any`\> |
| `request`       | [`AuthRequest`](../../classes/auth.AuthRequest)<`any`\>     |
| `params?`       | `any`                                                       |

#### Returns

`Promise`<`any`\>

#### Defined in

[core/src/auth.ts:156](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L156)

---

### initAuthenticator

▸ **initAuthenticator**(`authenticator`, `auth`, `params?`): `Promise`<`any`\>

#### Parameters

| Name            | Type                                                        |
| :-------------- | :---------------------------------------------------------- |
| `authenticator` | [`Authenticator`](../../classes/auth.Authenticator)<`any`\> |
| `auth`          | [`Auth`](../../classes/auth.Auth)                           |
| `params?`       | `any`                                                       |

#### Returns

`Promise`<`any`\>

#### Defined in

[core/src/auth.ts:152](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L152)

---

### supportsType

▸ **supportsType**(`type`): `boolean`

#### Parameters

| Name   | Type                                    |
| :----- | :-------------------------------------- |
| `type` | [`AuthType`](../../enums/auth.AuthType) |

#### Returns

`boolean`

#### Defined in

[core/src/auth.ts:150](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L150)

---

### verifyAuthRequest

▸ **verifyAuthRequest**(`authenticator`, `request`, `params?`):
`Promise`<`void`\>

#### Parameters

| Name            | Type                                                        |
| :-------------- | :---------------------------------------------------------- |
| `authenticator` | [`Authenticator`](../../classes/auth.Authenticator)<`any`\> |
| `request`       | [`AuthRequest`](../../classes/auth.AuthRequest)<`any`\>     |
| `params?`       | `any`                                                       |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/auth.ts:158](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L158)

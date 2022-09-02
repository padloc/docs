---
title: "Class: PublicKeyAuthServer"
linkTitle: "PublicKeyAuthServer"
slug: "auth_public_key.PublicKeyAuthServer"
---

[auth/public-key](../../modules/auth_public_key).PublicKeyAuthServer

## Implements

-   [`AuthServer`](../../interfaces/auth.AuthServer)

## Constructors

### constructor

• **new PublicKeyAuthServer**()

## Methods

### \_verify

▸ `Private` **\_verify**(`publicKey`, `challenge`, `signedChallenge`):
`Promise`<`boolean`\>

#### Parameters

| Name              | Type                                                                  |
| :---------------- | :-------------------------------------------------------------------- |
| `publicKey`       | `Uint8Array`                                                          |
| `challenge`       | [`PublicKeyAuthChallenge`](../auth_public_key.PublicKeyAuthChallenge) |
| `signedChallenge` | `Uint8Array`                                                          |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/auth/public-key.ts:145](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/public-key.ts#L145)

---

### activateAuthenticator

▸ **activateAuthenticator**(`authenticator`, `__namedParameters`):
`Promise`<`any`\>

#### Parameters

| Name                                | Type                                             |
| :---------------------------------- | :----------------------------------------------- |
| `authenticator`                     | [`Authenticator`](../auth.Authenticator)<`any`\> |
| `__namedParameters`                 | `Object`                                         |
| `__namedParameters.publicKey`       | `string`                                         |
| `__namedParameters.signedChallenge` | `string`                                         |

#### Returns

`Promise`<`any`\>

#### Implementation of

[AuthServer](../../interfaces/auth.AuthServer).[activateAuthenticator](../interfaces/auth.AuthServer#activateauthenticator)

#### Defined in

[core/src/auth/public-key.ts:109](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/public-key.ts#L109)

---

### initAuthRequest

▸ **initAuthRequest**(`_authenticator`, `request`): `Promise`<`any`\>

#### Parameters

| Name             | Type                                             |
| :--------------- | :----------------------------------------------- |
| `_authenticator` | [`Authenticator`](../auth.Authenticator)<`any`\> |
| `request`        | [`AuthRequest`](../auth.AuthRequest)<`any`\>     |

#### Returns

`Promise`<`any`\>

#### Implementation of

[AuthServer](../../interfaces/auth.AuthServer).[initAuthRequest](../interfaces/auth.AuthServer#initauthrequest)

#### Defined in

[core/src/auth/public-key.ts:121](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/public-key.ts#L121)

---

### initAuthenticator

▸ **initAuthenticator**(`authenticator`): `Promise`<{ `challenge`: `any` }\>

#### Parameters

| Name            | Type                                             |
| :-------------- | :----------------------------------------------- |
| `authenticator` | [`Authenticator`](../auth.Authenticator)<`any`\> |

#### Returns

`Promise`<{ `challenge`: `any` }\>

#### Implementation of

[AuthServer](../../interfaces/auth.AuthServer).[initAuthenticator](../interfaces/auth.AuthServer#initauthenticator)

#### Defined in

[core/src/auth/public-key.ts:97](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/public-key.ts#L97)

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

[core/src/auth/public-key.ts:93](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/public-key.ts#L93)

---

### verifyAuthRequest

▸ **verifyAuthRequest**(`authenticator`, `request`, `__namedParameters`):
`Promise`<`void`\>

#### Parameters

| Name                                | Type                                             |
| :---------------------------------- | :----------------------------------------------- |
| `authenticator`                     | [`Authenticator`](../auth.Authenticator)<`any`\> |
| `request`                           | [`AuthRequest`](../auth.AuthRequest)<`any`\>     |
| `__namedParameters`                 | `Object`                                         |
| `__namedParameters.signedChallenge` | `string`                                         |

#### Returns

`Promise`<`void`\>

#### Implementation of

[AuthServer](../../interfaces/auth.AuthServer).[verifyAuthRequest](../interfaces/auth.AuthServer#verifyauthrequest)

#### Defined in

[core/src/auth/public-key.ts:130](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/public-key.ts#L130)

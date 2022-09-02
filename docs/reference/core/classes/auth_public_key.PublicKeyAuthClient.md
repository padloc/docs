---
title: "Class: PublicKeyAuthClient"
linkTitle: "PublicKeyAuthClient"
slug: "auth_public_key.PublicKeyAuthClient"
---

[auth/public-key](../../modules/auth_public_key).PublicKeyAuthClient

## Implements

-   [`AuthClient`](../../interfaces/auth.AuthClient)

## Constructors

### constructor

• **new PublicKeyAuthClient**(`_keyStore`)

#### Parameters

| Name        | Type                                                               |
| :---------- | :----------------------------------------------------------------- |
| `_keyStore` | [`BiometricKeyStore`](../../interfaces/platform.BiometricKeyStore) |

#### Defined in

[core/src/auth/public-key.ts:51](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/public-key.ts#L51)

## Methods

### \_sign

▸ `Private` **\_sign**(`data`, `challenge`): `Promise`<`Uint8Array`\>

#### Parameters

| Name        | Type                                                                    |
| :---------- | :---------------------------------------------------------------------- |
| `data`      | [`PublicKeyAuthClientData`](../auth_public_key.PublicKeyAuthClientData) |
| `challenge` | [`PublicKeyAuthChallenge`](../auth_public_key.PublicKeyAuthChallenge)   |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/auth/public-key.ts:83](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/public-key.ts#L83)

---

### prepareAuthentication

▸ **prepareAuthentication**(`__namedParameters`): `Promise`<{ `signedChallenge`:
`string` }\>

#### Parameters

| Name                | Type  |
| :------------------ | :---- |
| `__namedParameters` | `any` |

#### Returns

`Promise`<{ `signedChallenge`: `string` }\>

#### Implementation of

[AuthClient](../../interfaces/auth.AuthClient).[prepareAuthentication](../interfaces/auth.AuthClient#prepareauthentication)

#### Defined in

[core/src/auth/public-key.ts:72](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/public-key.ts#L72)

---

### prepareRegistration

▸ **prepareRegistration**(`__namedParameters`): `Promise`<{ `publicKey`:
`string` ; `signedChallenge`: `string` }\>

#### Parameters

| Name                          | Type     |
| :---------------------------- | :------- |
| `__namedParameters`           | `Object` |
| `__namedParameters.challenge` | `any`    |

#### Returns

`Promise`<{ `publicKey`: `string` ; `signedChallenge`: `string` }\>

#### Implementation of

[AuthClient](../../interfaces/auth.AuthClient).[prepareRegistration](../interfaces/auth.AuthClient#prepareregistration)

#### Defined in

[core/src/auth/public-key.ts:57](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/public-key.ts#L57)

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

[AuthClient](../../interfaces/auth.AuthClient).[supportsType](../interfaces/auth.AuthClient#supportstype)

#### Defined in

[core/src/auth/public-key.ts:53](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth/public-key.ts#L53)

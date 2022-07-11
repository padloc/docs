---
title: "Interface: AuthClient"
linkTitle: "AuthClient"
slug: "auth.AuthClient"
---

[auth](../../modules/auth).AuthClient

## Implemented by

-   [`PublicKeyAuthClient`](../../classes/auth_public_key.PublicKeyAuthClient)

## Methods

### prepareAuthentication

▸ **prepareAuthentication**(`serverData`): `Promise`<`any`\>

#### Parameters

| Name         | Type  |
| :----------- | :---- |
| `serverData` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[core/src/auth.ts:164](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L164)

---

### prepareRegistration

▸ **prepareRegistration**(`serverData`): `Promise`<`any`\>

#### Parameters

| Name         | Type  |
| :----------- | :---- |
| `serverData` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[core/src/auth.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L163)

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

[core/src/auth.ts:162](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L162)

---
title: "Module: api"
linkTitle: "api"
slug: "api"
---

## Classes

-   [API](../../classes/api.API)
-   [AuthInfo](../../classes/api.AuthInfo)
-   [CompleteAuthRequestParams](../../classes/api.CompleteAuthRequestParams)
-   [CompleteAuthRequestResponse](../../classes/api.CompleteAuthRequestResponse)
-   [CompleteCreateSessionParams](../../classes/api.CompleteCreateSessionParams)
-   [CompleteRegisterMFAuthenticatorParams](../../classes/api.CompleteRegisterMFAuthenticatorParams)
-   [CompleteRegisterMFAuthenticatorResponse](../../classes/api.CompleteRegisterMFAuthenticatorResponse)
-   [CreateAccountParams](../../classes/api.CreateAccountParams)
-   [CreateKeyStoreEntryParams](../../classes/api.CreateKeyStoreEntryParams)
-   [DeleteAttachmentParams](../../classes/api.DeleteAttachmentParams)
-   [GetAttachmentParams](../../classes/api.GetAttachmentParams)
-   [GetInviteParams](../../classes/api.GetInviteParams)
-   [GetKeyStoreEntryParams](../../classes/api.GetKeyStoreEntryParams)
-   [GetLegacyDataParams](../../classes/api.GetLegacyDataParams)
-   [RecoverAccountParams](../../classes/api.RecoverAccountParams)
-   [StartAuthRequestParams](../../classes/api.StartAuthRequestParams)
-   [StartAuthRequestResponse](../../classes/api.StartAuthRequestResponse)
-   [StartCreateSessionParams](../../classes/api.StartCreateSessionParams)
-   [StartCreateSessionResponse](../../classes/api.StartCreateSessionResponse)
-   [StartRegisterAuthenticatorParams](../../classes/api.StartRegisterAuthenticatorParams)
-   [StartRegisterAuthenticatorResponse](../../classes/api.StartRegisterAuthenticatorResponse)
-   [UpdateAuthParams](../../classes/api.UpdateAuthParams)

## Type Aliases

### PromiseWithProgress

Ƭ **PromiseWithProgress**<`T`\>: `Promise`<`T`\> & { `progress?`:
[`RequestProgress`](../../classes/transport.RequestProgress) }

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[core/src/api.ts:421](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L421)

## Functions

### Handler

▸ **Handler**(`input`, `output`): (`proto`: [`API`](../../classes/api.API),
`method`: `string`) => `void`

Decorator for defining request handler methods

#### Parameters

| Name     | Type                                                                                                   |
| :------- | :----------------------------------------------------------------------------------------------------- |
| `input`  | `undefined` \| [`SerializableConstructor`](encoding.md#serializableconstructor) \| `StringConstructor` |
| `output` | `undefined` \| [`SerializableConstructor`](encoding.md#serializableconstructor) \| `StringConstructor` |

#### Returns

`fn`

▸ (`proto`, `method`): `void`

##### Parameters

| Name     | Type                           |
| :------- | :----------------------------- |
| `proto`  | [`API`](../../classes/api.API) |
| `method` | `string`                       |

##### Returns

`void`

#### Defined in

[core/src/api.ts:405](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/api.ts#L405)

---
title: "Interface: Platform"
linkTitle: "Platform"
slug: "platform.Platform"
---

[platform](../../modules/platform).Platform

Generic interface for various platform APIs

## Implemented by

-   [`StubPlatform`](../../classes/platform.StubPlatform)

## Properties

### biometricKeyStore

• **biometricKeyStore**: [`BiometricKeyStore`](../platform.BiometricKeyStore)

#### Defined in

[core/src/platform.ts:91](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L91)

---

### crypto

• **crypto**: [`CryptoProvider`](../crypto.CryptoProvider)

#### Defined in

[core/src/platform.ts:87](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L87)

---

### platformAuthType

• `Readonly` **platformAuthType**: `null` \|
[`AuthType`](../../enums/auth.AuthType)

#### Defined in

[core/src/platform.ts:128](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L128)

---

### storage

• **storage**: [`Storage`](../storage.Storage)

#### Defined in

[core/src/platform.ts:89](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L89)

---

### supportedAuthTypes

• `Readonly` **supportedAuthTypes**: [`AuthType`](../../enums/auth.AuthType)[]

#### Defined in

[core/src/platform.ts:102](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L102)

## Methods

### completeAuthRequest

▸ **completeAuthRequest**(`req`): `Promise`<{ `accountStatus`:
[`AccountStatus`](../../enums/auth.AccountStatus.md) ; `deviceTrusted`:
`boolean` ; `email`: `string` ; `legacyData?`:
[`PBES2Container`](../classes/container.PBES2Container.md) ; `provisioning`:
[`AccountProvisioning`](../classes/provisioning.AccountProvisioning) ; `token`:
`string` }\>

#### Parameters

| Name  | Type                                                                     |
| :---- | :----------------------------------------------------------------------- |
| `req` | [`StartAuthRequestResponse`](../../classes/api.StartAuthRequestResponse) |

#### Returns

`Promise`<{ `accountStatus`:
[`AccountStatus`](../../enums/auth.AccountStatus.md) ; `deviceTrusted`:
`boolean` ; `email`: `string` ; `legacyData?`:
[`PBES2Container`](../classes/container.PBES2Container.md) ; `provisioning`:
[`AccountProvisioning`](../classes/provisioning.AccountProvisioning) ; `token`:
`string` }\>

#### Defined in

[core/src/platform.ts:119](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L119)

---

### composeEmail

▸ **composeEmail**(`addr`, `subject`, `message`): `Promise`<`void`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `addr`    | `string` |
| `subject` | `string` |
| `message` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/platform.ts:96](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L96)

---

### getClipboard

▸ **getClipboard**(): `Promise`<`string`\>

Retrieves the current text from the system clipboard

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/platform.ts:82](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L82)

---

### getDeviceInfo

▸ **getDeviceInfo**():
`Promise`<[`DeviceInfo`](../../classes/platform.DeviceInfo)\>

Get information about the current device

#### Returns

`Promise`<[`DeviceInfo`](../../classes/platform.DeviceInfo)\>

#### Defined in

[core/src/platform.ts:85](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L85)

---

### getPlatformAuthToken

▸ **getPlatformAuthToken**(`_purpose`): `Promise`<`string`\>

#### Parameters

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `_purpose` | [`AuthPurpose`](../../enums/auth.AuthPurpose)[] |

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/platform.ts:131](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L131)

---

### openExternalUrl

▸ **openExternalUrl**(`_url`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `_url` | `string` |

#### Returns

`void`

#### Defined in

[core/src/platform.ts:98](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L98)

---

### registerAuthenticator

▸ **registerAuthenticator**(`opts`): `Promise`<`string`\>

#### Parameters

| Name            | Type                                              |
| :-------------- | :------------------------------------------------ |
| `opts`          | `Object`                                          |
| `opts.data?`    | `any`                                             |
| `opts.device?`  | [`DeviceInfo`](../../classes/platform.DeviceInfo) |
| `opts.purposes` | [`AuthPurpose`](../../enums/auth.AuthPurpose)[]   |
| `opts.type`     | [`AuthType`](../../enums/auth.AuthType)           |

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/platform.ts:104](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L104)

---

### registerPlatformAuthenticator

▸ **registerPlatformAuthenticator**(`purposes`): `Promise`<`string`\>

#### Parameters

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `purposes` | [`AuthPurpose`](../../enums/auth.AuthPurpose)[] |

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/platform.ts:130](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L130)

---

### saveFile

▸ **saveFile**(`name`, `type`, `contents`): `Promise`<`void`\>

#### Parameters

| Name       | Type         |
| :--------- | :----------- |
| `name`     | `string`     |
| `type`     | `string`     |
| `contents` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/platform.ts:100](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L100)

---

### scanQR

▸ **scanQR**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/platform.ts:93](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L93)

---

### setClipboard

▸ **setClipboard**(`text`): `Promise`<`void`\>

Copies the given `text` to the system clipboard

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `text` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/platform.ts:79](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L79)

---

### startAuthRequest

▸ **startAuthRequest**(`opts`):
`Promise`<[`StartAuthRequestResponse`](../../classes/api.StartAuthRequestResponse)\>

#### Parameters

| Name                       | Type                                          |
| :------------------------- | :-------------------------------------------- |
| `opts`                     | `Object`                                      |
| `opts.authenticatorId?`    | `string`                                      |
| `opts.authenticatorIndex?` | `number`                                      |
| `opts.email?`              | `string`                                      |
| `opts.purpose`             | [`AuthPurpose`](../../enums/auth.AuthPurpose) |
| `opts.type?`               | [`AuthType`](../../enums/auth.AuthType)       |

#### Returns

`Promise`<[`StartAuthRequestResponse`](../../classes/api.StartAuthRequestResponse)\>

#### Defined in

[core/src/platform.ts:111](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L111)

---

### stopScanQR

▸ **stopScanQR**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/platform.ts:94](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L94)

---

### supportsPlatformAuthenticator

▸ **supportsPlatformAuthenticator**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/platform.ts:129](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L129)

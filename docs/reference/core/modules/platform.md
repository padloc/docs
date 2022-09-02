---
title: "Module: platform"
linkTitle: "platform"
slug: "platform"
---

## Classes

-   [DeviceInfo](../../classes/platform.DeviceInfo)
-   [StubBiometricKeyStore](../../classes/platform.StubBiometricKeyStore)
-   [StubPlatform](../../classes/platform.StubPlatform)

## Interfaces

-   [BiometricKeyStore](../../interfaces/platform.BiometricKeyStore)
-   [Platform](../../interfaces/platform.Platform)

## Functions

### authenticate

▸ **authenticate**(`opts`): `Promise`<{ `accountStatus`:
[`AccountStatus`](../../enums/auth.AccountStatus) ; `deviceTrusted`:
`boolean` ; `email`: `string` ; `legacyData?`:
[`PBES2Container`](../classes/container.PBES2Container) ; `provisioning`:
[`AccountProvisioning`](../classes/provisioning.AccountProvisioning) ; `token`:
`string` }\>

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

`Promise`<{ `accountStatus`:
[`AccountStatus`](../../enums/auth.AccountStatus) ; `deviceTrusted`:
`boolean` ; `email`: `string` ; `legacyData?`:
[`PBES2Container`](../classes/container.PBES2Container) ; `provisioning`:
[`AccountProvisioning`](../classes/provisioning.AccountProvisioning) ; `token`:
`string` }\>

#### Defined in

[core/src/platform.ts:308](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L308)

---

### completeAuthRequest

▸ **completeAuthRequest**(`req`): `Promise`<{ `accountStatus`:
[`AccountStatus`](../../enums/auth.AccountStatus) ; `deviceTrusted`:
`boolean` ; `email`: `string` ; `legacyData?`:
[`PBES2Container`](../classes/container.PBES2Container) ; `provisioning`:
[`AccountProvisioning`](../classes/provisioning.AccountProvisioning) ; `token`:
`string` }\>

#### Parameters

| Name  | Type                                                                     |
| :---- | :----------------------------------------------------------------------- |
| `req` | [`StartAuthRequestResponse`](../../classes/api.StartAuthRequestResponse) |

#### Returns

`Promise`<{ `accountStatus`:
[`AccountStatus`](../../enums/auth.AccountStatus) ; `deviceTrusted`:
`boolean` ; `email`: `string` ; `legacyData?`:
[`PBES2Container`](../classes/container.PBES2Container) ; `provisioning`:
[`AccountProvisioning`](../classes/provisioning.AccountProvisioning) ; `token`:
`string` }\>

#### Defined in

[core/src/platform.ts:297](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L297)

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

[core/src/platform.ts:270](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L270)

---

### getClipboard

▸ **getClipboard**(): `Promise`<`string`\>

Copies the given `text` to the system clipboard

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/platform.ts:240](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L240)

---

### getCryptoProvider

▸ **getCryptoProvider**():
[`CryptoProvider`](../../interfaces/crypto.CryptoProvider)

#### Returns

[`CryptoProvider`](../../interfaces/crypto.CryptoProvider)

#### Defined in

[core/src/platform.ts:254](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L254)

---

### getDeviceInfo

▸ **getDeviceInfo**():
`Promise`<[`DeviceInfo`](../../classes/platform.DeviceInfo)\>

Get information about the current device

#### Returns

`Promise`<[`DeviceInfo`](../../classes/platform.DeviceInfo)\>

#### Defined in

[core/src/platform.ts:250](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L250)

---

### getPlatform

▸ **getPlatform**(): [`Platform`](../../interfaces/platform.Platform)

Get the current [Platform](../../interfaces/platform.Platform) implemenation

#### Returns

[`Platform`](../../interfaces/platform.Platform)

#### Defined in

[core/src/platform.ts:235](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L235)

---

### getPlatformAuthType

▸ **getPlatformAuthType**(): `null` \| [`AuthType`](../../enums/auth.AuthType)

#### Returns

`null` \| [`AuthType`](../../enums/auth.AuthType)

#### Defined in

[core/src/platform.ts:327](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L327)

---

### getStorage

▸ **getStorage**(): [`Storage`](../../interfaces/storage.Storage)

#### Returns

[`Storage`](../../interfaces/storage.Storage)

#### Defined in

[core/src/platform.ts:258](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L258)

---

### openExternalUrl

▸ **openExternalUrl**(`url`): `void`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `url` | `string` |

#### Returns

`void`

#### Defined in

[core/src/platform.ts:331](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L331)

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

[core/src/platform.ts:278](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L278)

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

[core/src/platform.ts:323](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L323)

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

[core/src/platform.ts:274](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L274)

---

### scanQR

▸ **scanQR**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/platform.ts:262](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L262)

---

### setClipboard

▸ **setClipboard**(`val`): `Promise`<`void`\>

Retrieves the current text from the system clipboard

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `val` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/platform.ts:245](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L245)

---

### setPlatform

▸ **setPlatform**(`p`): `void`

Set the appropriate [Platform](../../interfaces/platform.Platform) implemenation
for the current environment

#### Parameters

| Name | Type                                             |
| :--- | :----------------------------------------------- |
| `p`  | [`Platform`](../../interfaces/platform.Platform) |

#### Returns

`void`

#### Defined in

[core/src/platform.ts:228](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L228)

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

[core/src/platform.ts:287](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L287)

---

### stopScanQR

▸ **stopScanQR**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/platform.ts:266](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L266)

---

### supportsPlatformAuthenticator

▸ **supportsPlatformAuthenticator**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/platform.ts:319](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L319)

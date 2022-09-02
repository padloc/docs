---
title: "Class: StubPlatform"
linkTitle: "StubPlatform"
slug: "platform.StubPlatform"
---

[platform](../../modules/platform).StubPlatform

Stub implementation of the [Platform](../../interfaces/platform.Platform)
interface. Useful for testing

## Implements

-   [`Platform`](../../interfaces/platform.Platform)

## Constructors

### constructor

• **new StubPlatform**()

## Properties

### biometricKeyStore

• **biometricKeyStore**:
[`StubBiometricKeyStore`](../platform.StubBiometricKeyStore)

#### Implementation of

[Platform](../../interfaces/platform.Platform).[biometricKeyStore](../interfaces/platform.Platform#biometrickeystore)

#### Defined in

[core/src/platform.ts:140](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L140)

---

### crypto

• **crypto**: [`StubCryptoProvider`](../stub_crypto_provider.StubCryptoProvider)

#### Implementation of

[Platform](../../interfaces/platform.Platform).[crypto](../interfaces/platform.Platform#crypto)

#### Defined in

[core/src/platform.ts:138](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L138)

---

### platformAuthType

• `Readonly` **platformAuthType**: `null` \|
[`AuthType`](../../enums/auth.AuthType) = `null`

#### Implementation of

[Platform](../../interfaces/platform.Platform).[platformAuthType](../interfaces/platform.Platform#platformauthtype)

#### Defined in

[core/src/platform.ts:208](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L208)

---

### storage

• **storage**: [`Storage`](../../interfaces/storage.Storage)

#### Implementation of

[Platform](../../interfaces/platform.Platform).[storage](../interfaces/platform.Platform#storage)

#### Defined in

[core/src/platform.ts:139](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L139)

## Accessors

### supportedAuthTypes

• `get` **supportedAuthTypes**(): [`AuthType`](../../enums/auth.AuthType)[]

#### Returns

[`AuthType`](../../enums/auth.AuthType)[]

#### Implementation of

[Platform](../../interfaces/platform.Platform).[supportedAuthTypes](../interfaces/platform.Platform#supportedauthtypes)

#### Defined in

[core/src/platform.ts:142](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L142)

## Methods

### completeAuthRequest

▸ **completeAuthRequest**(`_req`): `Promise`<{ `accountStatus`:
[`AccountStatus`](../../enums/auth.AccountStatus) ; `deviceTrusted`:
`boolean` ; `email`: `string` ; `legacyData?`:
[`PBES2Container`](../container.PBES2Container) ; `provisioning`:
[`AccountProvisioning`](../provisioning.AccountProvisioning) ; `token`: `string`
}\>

#### Parameters

| Name   | Type                                                          |
| :----- | :------------------------------------------------------------ |
| `_req` | [`StartAuthRequestResponse`](../api.StartAuthRequestResponse) |

#### Returns

`Promise`<{ `accountStatus`:
[`AccountStatus`](../../enums/auth.AccountStatus) ; `deviceTrusted`:
`boolean` ; `email`: `string` ; `legacyData?`:
[`PBES2Container`](../container.PBES2Container) ; `provisioning`:
[`AccountProvisioning`](../provisioning.AccountProvisioning) ; `token`: `string`
}\>

#### Implementation of

[Platform](../../interfaces/platform.Platform).[completeAuthRequest](../interfaces/platform.Platform#completeauthrequest)

#### Defined in

[core/src/platform.ts:197](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L197)

---

### composeEmail

▸ **composeEmail**(`_addr`, `_subject`, `_message`): `Promise`<`void`\>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `_addr`    | `string` |
| `_subject` | `string` |
| `_message` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Platform](../../interfaces/platform.Platform).[composeEmail](../interfaces/platform.Platform#composeemail)

#### Defined in

[core/src/platform.ts:168](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L168)

---

### getClipboard

▸ **getClipboard**(): `Promise`<`string`\>

Retrieves the current text from the system clipboard

#### Returns

`Promise`<`string`\>

#### Implementation of

[Platform](../../interfaces/platform.Platform).[getClipboard](../interfaces/platform.Platform#getclipboard)

#### Defined in

[core/src/platform.ts:150](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L150)

---

### getDeviceInfo

▸ **getDeviceInfo**(): `Promise`<[`DeviceInfo`](../platform.DeviceInfo)\>

Get information about the current device

#### Returns

`Promise`<[`DeviceInfo`](../platform.DeviceInfo)\>

#### Implementation of

[Platform](../../interfaces/platform.Platform).[getDeviceInfo](../interfaces/platform.Platform#getdeviceinfo)

#### Defined in

[core/src/platform.ts:155](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L155)

---

### getPlatformAuthToken

▸ **getPlatformAuthToken**(`_purpose`): `Promise`<`string`\>

#### Parameters

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `_purpose` | [`AuthPurpose`](../../enums/auth.AuthPurpose)[] |

#### Returns

`Promise`<`string`\>

#### Implementation of

[Platform](../../interfaces/platform.Platform).[getPlatformAuthToken](../interfaces/platform.Platform#getplatformauthtoken)

#### Defined in

[core/src/platform.ts:218](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L218)

---

### openExternalUrl

▸ **openExternalUrl**(`_url`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `_url` | `string` |

#### Returns

`void`

#### Implementation of

[Platform](../../interfaces/platform.Platform).[openExternalUrl](../interfaces/platform.Platform#openexternalurl)

#### Defined in

[core/src/platform.ts:172](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L172)

---

### registerAuthenticator

▸ **registerAuthenticator**(`_opts`): `Promise`<`string`\>

#### Parameters

| Name             | Type                                            |
| :--------------- | :---------------------------------------------- |
| `_opts`          | `Object`                                        |
| `_opts.data?`    | `any`                                           |
| `_opts.device?`  | [`DeviceInfo`](../platform.DeviceInfo)          |
| `_opts.purposes` | [`AuthPurpose`](../../enums/auth.AuthPurpose)[] |
| `_opts.type`     | [`AuthType`](../../enums/auth.AuthType)         |

#### Returns

`Promise`<`string`\>

#### Implementation of

[Platform](../../interfaces/platform.Platform).[registerAuthenticator](../interfaces/platform.Platform#registerauthenticator)

#### Defined in

[core/src/platform.ts:178](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L178)

---

### registerPlatformAuthenticator

▸ **registerPlatformAuthenticator**(`_purpose`): `Promise`<`string`\>

#### Parameters

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `_purpose` | [`AuthPurpose`](../../enums/auth.AuthPurpose)[] |

#### Returns

`Promise`<`string`\>

#### Implementation of

[Platform](../../interfaces/platform.Platform).[registerPlatformAuthenticator](../interfaces/platform.Platform#registerplatformauthenticator)

#### Defined in

[core/src/platform.ts:214](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L214)

---

### saveFile

▸ **saveFile**(`_name`, `_type`, `_contents`): `Promise`<`void`\>

#### Parameters

| Name        | Type         |
| :---------- | :----------- |
| `_name`     | `string`     |
| `_type`     | `string`     |
| `_contents` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Platform](../../interfaces/platform.Platform).[saveFile](../interfaces/platform.Platform#savefile)

#### Defined in

[core/src/platform.ts:176](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L176)

---

### scanQR

▸ **scanQR**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Implementation of

[Platform](../../interfaces/platform.Platform).[scanQR](../interfaces/platform.Platform#scanqr)

#### Defined in

[core/src/platform.ts:159](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L159)

---

### setClipboard

▸ **setClipboard**(`_val`): `Promise`<`void`\>

Copies the given `text` to the system clipboard

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `_val` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Platform](../../interfaces/platform.Platform).[setClipboard](../interfaces/platform.Platform#setclipboard)

#### Defined in

[core/src/platform.ts:146](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L146)

---

### startAuthRequest

▸ **startAuthRequest**(`_opts`):
`Promise`<[`StartAuthRequestResponse`](../api.StartAuthRequestResponse)\>

#### Parameters

| Name                        | Type                                          |
| :-------------------------- | :-------------------------------------------- |
| `_opts`                     | `Object`                                      |
| `_opts.authenticatorId?`    | `string`                                      |
| `_opts.authenticatorIndex?` | `number`                                      |
| `_opts.email?`              | `string`                                      |
| `_opts.purpose`             | [`AuthPurpose`](../../enums/auth.AuthPurpose) |
| `_opts.type?`               | [`AuthType`](../../enums/auth.AuthType)       |

#### Returns

`Promise`<[`StartAuthRequestResponse`](../api.StartAuthRequestResponse)\>

#### Implementation of

[Platform](../../interfaces/platform.Platform).[startAuthRequest](../interfaces/platform.Platform#startauthrequest)

#### Defined in

[core/src/platform.ts:187](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L187)

---

### stopScanQR

▸ **stopScanQR**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Platform](../../interfaces/platform.Platform).[stopScanQR](../interfaces/platform.Platform#stopscanqr)

#### Defined in

[core/src/platform.ts:164](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L164)

---

### supportsPlatformAuthenticator

▸ **supportsPlatformAuthenticator**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[Platform](../../interfaces/platform.Platform).[supportsPlatformAuthenticator](../interfaces/platform.Platform#supportsplatformauthenticator)

#### Defined in

[core/src/platform.ts:210](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L210)

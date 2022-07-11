---
title: "Class: StubCryptoProvider"
linkTitle: "StubCryptoProvider"
slug: "stub_crypto_provider.StubCryptoProvider"
---

[stub-crypto-provider](../../modules/stub_crypto_provider).StubCryptoProvider

StubCryptoProvider is a stub implementation of the
[CryptoProvider](../../interfaces/crypto.CryptoProvider) interface mainly used
for testing. All methods merely emulate the behavior of an actual implementation
in a way that makes it compatible for use with the rest of the **@padloc/core**
package. Needless to say, this class is **NOT SECURE AND SHOULD NEVER BE USED IN
A PRODUCTION ENVIRONMENT**.

## Implements

-   [`CryptoProvider`](../../interfaces/crypto.CryptoProvider)

## Constructors

### constructor

• **new StubCryptoProvider**()

## Methods

### decrypt

▸ **decrypt**(`key`, `data`, `params`): `Promise`<`Uint8Array`\>

Decrypts `data` with `key` using the cipher and parameters specified in `params`

#### Parameters

| Name     | Type                                                   |
| :------- | :----------------------------------------------------- |
| `key`    | `Uint8Array`                                           |
| `data`   | `Uint8Array`                                           |
| `params` | [`AESEncryptionParams`](../crypto.AESEncryptionParams) |

#### Returns

`Promise`<`Uint8Array`\>

#### Implementation of

[CryptoProvider](../../interfaces/crypto.CryptoProvider).[decrypt](../interfaces/crypto.CryptoProvider.md#decrypt)

#### Defined in

[core/src/stub-crypto-provider.ts:82](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/stub-crypto-provider.ts#L82)

▸ **decrypt**(`publicKey`, `data`, `params`): `Promise`<`Uint8Array`\>

#### Parameters

| Name        | Type                                                   |
| :---------- | :----------------------------------------------------- |
| `publicKey` | `Uint8Array`                                           |
| `data`      | `Uint8Array`                                           |
| `params`    | [`RSAEncryptionParams`](../crypto.RSAEncryptionParams) |

#### Returns

`Promise`<`Uint8Array`\>

#### Implementation of

[CryptoProvider](../../interfaces/crypto.CryptoProvider).[decrypt](../interfaces/crypto.CryptoProvider.md#decrypt)

#### Defined in

[core/src/stub-crypto-provider.ts:83](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/stub-crypto-provider.ts#L83)

---

### deriveKey

▸ **deriveKey**(`password`, `params`): `Promise`<`Uint8Array`\>

Derives a key from a given `password` using the provided key derivation
**params** `password` should be the byte array representation of a UTF-8 encoded
password.

#### Parameters

| Name       | Type                                     |
| :--------- | :--------------------------------------- |
| `password` | `Uint8Array`                             |
| `params`   | [`PBKDF2Params`](../crypto.PBKDF2Params) |

#### Returns

`Promise`<`Uint8Array`\>

#### Implementation of

[CryptoProvider](../../interfaces/crypto.CryptoProvider).[deriveKey](../interfaces/crypto.CryptoProvider.md#derivekey)

#### Defined in

[core/src/stub-crypto-provider.ts:58](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/stub-crypto-provider.ts#L58)

---

### encrypt

▸ **encrypt**(`key`, `data`, `params`): `Promise`<`Uint8Array`\>

Encrypts `data` with `key` using the cipher and parameters specified in `params`

#### Parameters

| Name     | Type                                                   |
| :------- | :----------------------------------------------------- |
| `key`    | `Uint8Array`                                           |
| `data`   | `Uint8Array`                                           |
| `params` | [`AESEncryptionParams`](../crypto.AESEncryptionParams) |

#### Returns

`Promise`<`Uint8Array`\>

#### Implementation of

[CryptoProvider](../../interfaces/crypto.CryptoProvider).[encrypt](../interfaces/crypto.CryptoProvider.md#encrypt)

#### Defined in

[core/src/stub-crypto-provider.ts:64](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/stub-crypto-provider.ts#L64)

▸ **encrypt**(`publicKey`, `data`, `params`): `Promise`<`Uint8Array`\>

#### Parameters

| Name        | Type                                                   |
| :---------- | :----------------------------------------------------- |
| `publicKey` | `Uint8Array`                                           |
| `data`      | `Uint8Array`                                           |
| `params`    | [`RSAEncryptionParams`](../crypto.RSAEncryptionParams) |

#### Returns

`Promise`<`Uint8Array`\>

#### Implementation of

[CryptoProvider](../../interfaces/crypto.CryptoProvider).[encrypt](../interfaces/crypto.CryptoProvider.md#encrypt)

#### Defined in

[core/src/stub-crypto-provider.ts:65](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/stub-crypto-provider.ts#L65)

---

### fingerprint

▸ **fingerprint**(`key`): `Promise`<`Uint8Array`\>

Creates a fingerprint from a given rsa public key

#### Parameters

| Name  | Type         |
| :---- | :----------- |
| `key` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Implementation of

[CryptoProvider](../../interfaces/crypto.CryptoProvider).[fingerprint](../interfaces/crypto.CryptoProvider.md#fingerprint)

#### Defined in

[core/src/stub-crypto-provider.ts:113](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/stub-crypto-provider.ts#L113)

---

### generateKey

▸ **generateKey**(`params`): `Promise`<`Uint8Array`\>

Generates a random key or key pair for the algorithm specified in **params**

#### Parameters

| Name     | Type                                     |
| :------- | :--------------------------------------- |
| `params` | [`AESKeyParams`](../crypto.AESKeyParams) |

#### Returns

`Promise`<`Uint8Array`\>

#### Implementation of

[CryptoProvider](../../interfaces/crypto.CryptoProvider).[generateKey](../interfaces/crypto.CryptoProvider.md#generatekey)

#### Defined in

[core/src/stub-crypto-provider.ts:41](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/stub-crypto-provider.ts#L41)

▸ **generateKey**(`params`): `Promise`<{ `privateKey`: `Uint8Array` ;
`publicKey`: `Uint8Array` }\>

#### Parameters

| Name     | Type                                     |
| :------- | :--------------------------------------- |
| `params` | [`RSAKeyParams`](../crypto.RSAKeyParams) |

#### Returns

`Promise`<{ `privateKey`: `Uint8Array` ; `publicKey`: `Uint8Array` }\>

#### Implementation of

[CryptoProvider](../../interfaces/crypto.CryptoProvider).[generateKey](../interfaces/crypto.CryptoProvider.md#generatekey)

#### Defined in

[core/src/stub-crypto-provider.ts:42](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/stub-crypto-provider.ts#L42)

▸ **generateKey**(`params`): `Promise`<`Uint8Array`\>

#### Parameters

| Name     | Type                                       |
| :------- | :----------------------------------------- |
| `params` | [`HMACKeyParams`](../crypto.HMACKeyParams) |

#### Returns

`Promise`<`Uint8Array`\>

#### Implementation of

[CryptoProvider](../../interfaces/crypto.CryptoProvider).[generateKey](../interfaces/crypto.CryptoProvider.md#generatekey)

#### Defined in

[core/src/stub-crypto-provider.ts:43](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/stub-crypto-provider.ts#L43)

---

### hash

▸ **hash**(`input`, `_params`): `Promise`<`Uint8Array`\>

Creates a digest of the provided **input** using the algorithm specified in
**params** For algorithms that should be supported, see
[HashParams](../crypto.HashParams).

#### Parameters

| Name      | Type                                 |
| :-------- | :----------------------------------- |
| `input`   | `Uint8Array`                         |
| `_params` | [`HashParams`](../crypto.HashParams) |

#### Returns

`Promise`<`Uint8Array`\>

#### Implementation of

[CryptoProvider](../../interfaces/crypto.CryptoProvider).[hash](../interfaces/crypto.CryptoProvider.md#hash)

#### Defined in

[core/src/stub-crypto-provider.ts:37](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/stub-crypto-provider.ts#L37)

---

### randomBytes

▸ **randomBytes**(`n`): `Promise`<`Uint8Array`\>

Generates an Array of `n` random bytes

#### Parameters

| Name | Type     |
| :--- | :------- |
| `n`  | `number` |

#### Returns

`Promise`<`Uint8Array`\>

#### Implementation of

[CryptoProvider](../../interfaces/crypto.CryptoProvider).[randomBytes](../interfaces/crypto.CryptoProvider.md#randombytes)

#### Defined in

[core/src/stub-crypto-provider.ts:29](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/stub-crypto-provider.ts#L29)

---

### sign

▸ **sign**(`key`, `data`, `params`): `Promise`<`Uint8Array`\>

Creates a signature from `data` with `key` using the algorithm and parameters
specified in `params`

#### Parameters

| Name     | Type                                 |
| :------- | :----------------------------------- |
| `key`    | `Uint8Array`                         |
| `data`   | `Uint8Array`                         |
| `params` | [`HMACParams`](../crypto.HMACParams) |

#### Returns

`Promise`<`Uint8Array`\>

#### Implementation of

[CryptoProvider](../../interfaces/crypto.CryptoProvider).[sign](../interfaces/crypto.CryptoProvider.md#sign)

#### Defined in

[core/src/stub-crypto-provider.ts:117](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/stub-crypto-provider.ts#L117)

▸ **sign**(`key`, `data`, `params`): `Promise`<`Uint8Array`\>

#### Parameters

| Name     | Type                                             |
| :------- | :----------------------------------------------- |
| `key`    | `Uint8Array`                                     |
| `data`   | `Uint8Array`                                     |
| `params` | [`RSASigningParams`](../crypto.RSASigningParams) |

#### Returns

`Promise`<`Uint8Array`\>

#### Implementation of

[CryptoProvider](../../interfaces/crypto.CryptoProvider).[sign](../interfaces/crypto.CryptoProvider.md#sign)

#### Defined in

[core/src/stub-crypto-provider.ts:118](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/stub-crypto-provider.ts#L118)

---

### timingSafeEqual

▸ **timingSafeEqual**(`a`, `b`): `Promise`<`boolean`\>

Compares two values without leaking timing information that would allow an
attacker to guess one of the values

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `a`  | `Uint8Array` |
| `b`  | `Uint8Array` |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[CryptoProvider](../../interfaces/crypto.CryptoProvider).[timingSafeEqual](../interfaces/crypto.CryptoProvider.md#timingsafeequal)

#### Defined in

[core/src/stub-crypto-provider.ts:146](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/stub-crypto-provider.ts#L146)

---

### verify

▸ **verify**(`key`, `signature`, `data`, `params`): `Promise`<`boolean`\>

Verifies `signature` with `data` and `key` using the algorithm and parameters
specified in `params`

#### Parameters

| Name        | Type                                 |
| :---------- | :----------------------------------- |
| `key`       | `Uint8Array`                         |
| `signature` | `Uint8Array`                         |
| `data`      | `Uint8Array`                         |
| `params`    | [`HMACParams`](../crypto.HMACParams) |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[CryptoProvider](../../interfaces/crypto.CryptoProvider).[verify](../interfaces/crypto.CryptoProvider.md#verify)

#### Defined in

[core/src/stub-crypto-provider.ts:127](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/stub-crypto-provider.ts#L127)

▸ **verify**(`key`, `signature`, `data`, `params`): `Promise`<`boolean`\>

#### Parameters

| Name        | Type                                             |
| :---------- | :----------------------------------------------- |
| `key`       | `Uint8Array`                                     |
| `signature` | `Uint8Array`                                     |
| `data`      | `Uint8Array`                                     |
| `params`    | [`RSASigningParams`](../crypto.RSASigningParams) |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[CryptoProvider](../../interfaces/crypto.CryptoProvider).[verify](../interfaces/crypto.CryptoProvider.md#verify)

#### Defined in

[core/src/stub-crypto-provider.ts:128](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/stub-crypto-provider.ts#L128)

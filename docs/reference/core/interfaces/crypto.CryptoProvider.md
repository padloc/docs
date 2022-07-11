---
title: "Interface: CryptoProvider"
linkTitle: "CryptoProvider"
slug: "crypto.CryptoProvider"
---

[crypto](../../modules/crypto).CryptoProvider

CryptoProvider provides a unified interface for cryptographic primitives accross
all platforms. This is usually a thin wrapper around the native crypto module
provided by the platform.

## Implemented by

-   [`StubCryptoProvider`](../../classes/stub_crypto_provider.StubCryptoProvider)

## Methods

### decrypt

▸ **decrypt**(`key`, `data`, `params`): `Promise`<`Uint8Array`\>

Decrypts `data` with `key` using the cipher and parameters specified in `params`

#### Parameters

| Name     | Type                                                              |
| :------- | :---------------------------------------------------------------- |
| `key`    | `Uint8Array`                                                      |
| `data`   | `Uint8Array`                                                      |
| `params` | [`AESEncryptionParams`](../../classes/crypto.AESEncryptionParams) |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/crypto.ts:182](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L182)

▸ **decrypt**(`privateKey`, `data`, `params`): `Promise`<`Uint8Array`\>

#### Parameters

| Name         | Type                                                              |
| :----------- | :---------------------------------------------------------------- |
| `privateKey` | `Uint8Array`                                                      |
| `data`       | `Uint8Array`                                                      |
| `params`     | [`RSAEncryptionParams`](../../classes/crypto.RSAEncryptionParams) |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/crypto.ts:183](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L183)

---

### deriveKey

▸ **deriveKey**(`password`, `params`): `Promise`<`Uint8Array`\>

Derives a key from a given `password` using the provided key derivation
**params** `password` should be the byte array representation of a UTF-8 encoded
password.

#### Parameters

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `password` | `Uint8Array`                                        |
| `params`   | [`PBKDF2Params`](../../classes/crypto.PBKDF2Params) |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/crypto.ts:171](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L171)

---

### encrypt

▸ **encrypt**(`key`, `data`, `params`): `Promise`<`Uint8Array`\>

Encrypts `data` with `key` using the cipher and parameters specified in `params`

#### Parameters

| Name     | Type                                                              |
| :------- | :---------------------------------------------------------------- |
| `key`    | `Uint8Array`                                                      |
| `data`   | `Uint8Array`                                                      |
| `params` | [`AESEncryptionParams`](../../classes/crypto.AESEncryptionParams) |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/crypto.ts:176](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L176)

▸ **encrypt**(`publicKey`, `data`, `params`): `Promise`<`Uint8Array`\>

#### Parameters

| Name        | Type                                                              |
| :---------- | :---------------------------------------------------------------- |
| `publicKey` | `Uint8Array`                                                      |
| `data`      | `Uint8Array`                                                      |
| `params`    | [`RSAEncryptionParams`](../../classes/crypto.RSAEncryptionParams) |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/crypto.ts:177](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L177)

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

#### Defined in

[core/src/crypto.ts:200](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L200)

---

### generateKey

▸ **generateKey**(`params`): `Promise`<`Uint8Array`\>

Generates a random key or key pair for the algorithm specified in **params**

#### Parameters

| Name     | Type                                                |
| :------- | :-------------------------------------------------- |
| `params` | [`AESKeyParams`](../../classes/crypto.AESKeyParams) |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/crypto.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L163)

▸ **generateKey**(`params`): `Promise`<`Uint8Array`\>

#### Parameters

| Name     | Type                                                  |
| :------- | :---------------------------------------------------- |
| `params` | [`HMACKeyParams`](../../classes/crypto.HMACKeyParams) |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/crypto.ts:164](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L164)

▸ **generateKey**(`params`): `Promise`<{ `privateKey`: `Uint8Array` ;
`publicKey`: `Uint8Array` }\>

#### Parameters

| Name     | Type                                                |
| :------- | :-------------------------------------------------- |
| `params` | [`RSAKeyParams`](../../classes/crypto.RSAKeyParams) |

#### Returns

`Promise`<{ `privateKey`: `Uint8Array` ; `publicKey`: `Uint8Array` }\>

#### Defined in

[core/src/crypto.ts:165](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L165)

---

### hash

▸ **hash**(`input`, `params`): `Promise`<`Uint8Array`\>

Creates a digest of the provided **input** using the algorithm specified in
**params** For algorithms that should be supported, see
[HashParams](../../classes/crypto.HashParams).

#### Parameters

| Name     | Type                                            |
| :------- | :---------------------------------------------- |
| `input`  | `Uint8Array`                                    |
| `params` | [`HashParams`](../../classes/crypto.HashParams) |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/crypto.ts:158](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L158)

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

#### Defined in

[core/src/crypto.ts:152](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L152)

---

### sign

▸ **sign**(`key`, `data`, `params`): `Promise`<`Uint8Array`\>

Creates a signature from `data` with `key` using the algorithm and parameters
specified in `params`

#### Parameters

| Name     | Type                                            |
| :------- | :---------------------------------------------- |
| `key`    | `Uint8Array`                                    |
| `data`   | `Uint8Array`                                    |
| `params` | [`HMACParams`](../../classes/crypto.HMACParams) |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/crypto.ts:188](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L188)

▸ **sign**(`key`, `data`, `params`): `Promise`<`Uint8Array`\>

#### Parameters

| Name     | Type                                                        |
| :------- | :---------------------------------------------------------- |
| `key`    | `Uint8Array`                                                |
| `data`   | `Uint8Array`                                                |
| `params` | [`RSASigningParams`](../../classes/crypto.RSASigningParams) |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/crypto.ts:189](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L189)

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

#### Defined in

[core/src/crypto.ts:205](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L205)

---

### verify

▸ **verify**(`key`, `signature`, `data`, `params`): `Promise`<`boolean`\>

Verifies `signature` with `data` and `key` using the algorithm and parameters
specified in `params`

#### Parameters

| Name        | Type                                            |
| :---------- | :---------------------------------------------- |
| `key`       | `Uint8Array`                                    |
| `signature` | `Uint8Array`                                    |
| `data`      | `Uint8Array`                                    |
| `params`    | [`HMACParams`](../../classes/crypto.HMACParams) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/crypto.ts:194](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L194)

▸ **verify**(`key`, `signature`, `data`, `params`): `Promise`<`boolean`\>

#### Parameters

| Name        | Type                                                        |
| :---------- | :---------------------------------------------------------- |
| `key`       | `Uint8Array`                                                |
| `signature` | `Uint8Array`                                                |
| `data`      | `Uint8Array`                                                |
| `params`    | [`RSASigningParams`](../../classes/crypto.RSASigningParams) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/crypto.ts:195](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L195)

---
title: "Module: crypto"
linkTitle: "crypto"
slug: "crypto"
---

## Classes

-   [AESEncryptionParams](../../classes/crypto.AESEncryptionParams)
-   [AESKeyParams](../../classes/crypto.AESKeyParams)
-   [HMACKeyParams](../../classes/crypto.HMACKeyParams)
-   [HMACParams](../../classes/crypto.HMACParams)
-   [HashParams](../../classes/crypto.HashParams)
-   [PBKDF2Params](../../classes/crypto.PBKDF2Params)
-   [RSAEncryptionParams](../../classes/crypto.RSAEncryptionParams)
-   [RSAKeyParams](../../classes/crypto.RSAKeyParams)
-   [RSASigningParams](../../classes/crypto.RSASigningParams)

## Interfaces

-   [CryptoProvider](../../interfaces/crypto.CryptoProvider)

## Type Aliases

### AESKey

Ƭ **AESKey**: `Uint8Array`

#### Defined in

[core/src/crypto.ts:8](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L8)

---

### HMACKey

Ƭ **HMACKey**: `Uint8Array`

#### Defined in

[core/src/crypto.ts:9](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L9)

---

### RSAPrivateKey

Ƭ **RSAPrivateKey**: `Uint8Array`

#### Defined in

[core/src/crypto.ts:12](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L12)

---

### RSAPublicKey

Ƭ **RSAPublicKey**: `Uint8Array`

#### Defined in

[core/src/crypto.ts:11](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L11)

---

### SymmetricKey

Ƭ **SymmetricKey**: [`AESKey`](../crypto#aeskey) \|
[`HMACKey`](../crypto#hmackey)

#### Defined in

[core/src/crypto.ts:10](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L10)

## Variables

### PBKDF2_ITER_DEFAULT

• `Const` **PBKDF2_ITER_DEFAULT**: `100000`

#### Defined in

[core/src/crypto.ts:4](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L4)

---

### PBKDF2_ITER_MAX

• `Const` **PBKDF2_ITER_MAX**: `10000000`

#### Defined in

[core/src/crypto.ts:6](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/crypto.ts#L6)

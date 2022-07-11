---
title: "Module: sjcl"
linkTitle: "sjcl"
slug: "sjcl"
---

## Variables

### default

• `Const` **default**: `Object`

[[CrypoProvider]] implemenation using the
[SJCL](https://github.com/bitwiseshiftleft/sjcl) library. This is used to
decrypt legacy (<3.x) Padlock containers that use AES in CCM mode which is
unfortunately not supported by the WebCrypto standard. Only supports
encryption/decryption using AES-CCM.

#### Type declaration

| Name          | Type                                                                                                                                               |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| `decrypt`     | (`key`: `Uint8Array`, `ct`: `Uint8Array`, `params`: [`AESEncryptionParams`](../../classes/crypto.AESEncryptionParams)) => `Promise`<`Uint8Array`\> |
| `deriveKey`   | (`_password`: `string`, `_params`: [`PBKDF2Params`](../../classes/crypto.PBKDF2Params)) => `Promise`<`Uint8Array`\>                                |
| `encrypt`     | (`key`: `Uint8Array`, `pt`: `Uint8Array`, `params`: [`AESEncryptionParams`](../../classes/crypto.AESEncryptionParams)) => `Promise`<`Uint8Array`\> |
| `isAvailable` | () => `boolean`                                                                                                                                    |
| `randomBytes` | (`_bytes`: `number`) => `Uint8Array`                                                                                                               |
| `randomKey`   | (`_n`: `number`) => `Promise`<`never`\>                                                                                                            |

#### Defined in

[core/src/sjcl.ts:15](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/sjcl.ts#L15)

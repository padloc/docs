---
title: "Module: otp"
linkTitle: "otp"
slug: "otp"
---

## Interfaces

-   [HOTPOpts](../../interfaces/otp.HOTPOpts)
-   [TOTPOpts](../../interfaces/otp.TOTPOpts)
-   [TOTPValidationOpts](../../interfaces/otp.TOTPValidationOpts)

## Functions

### generateSecret

▸ **generateSecret**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/otp.ts:80](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/otp.ts#L80)

---

### generateURL

▸ **generateURL**(`__namedParameters`): `string`

#### Parameters

| Name                | Type                                                                                                                                                         |
| :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__namedParameters` | { `account`: `string` ; `issuer?`: `string` ; `secret`: `string` ; `type?`: `"hotp"` \| `"totp"` } & `Partial`<[`TOTPOpts`](../../interfaces/otp.TOTPOpts)\> |

#### Returns

`string`

#### Defined in

[core/src/otp.ts:85](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/otp.ts#L85)

---

### getCounter

▸ **getCounter**(`time?`, `__namedParameters?`): `number`

#### Parameters

| Name                          | Type     |
| :---------------------------- | :------- |
| `time`                        | `number` |
| `__namedParameters`           | `Object` |
| `__namedParameters.interval?` | `number` |

#### Returns

`number`

#### Defined in

[core/src/otp.ts:64](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/otp.ts#L64)

---

### hotp

▸ **hotp**(`secret`, `counter`, `__namedParameters?`): `Promise`<`string`\>

#### Parameters

| Name                | Type                                        |
| :------------------ | :------------------------------------------ |
| `secret`            | `Uint8Array`                                |
| `counter`           | `number`                                    |
| `__namedParameters` | [`HOTPOpts`](../../interfaces/otp.HOTPOpts) |

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/otp.ts:27](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/otp.ts#L27)

---

### parseURL

▸ **parseURL**(`data`): `Object`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `data` | `string` |

#### Returns

`Object`

| Name     | Type     |
| :------- | :------- |
| `secret` | `string` |

#### Defined in

[core/src/otp.ts:68](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/otp.ts#L68)

---

### totp

▸ **totp**(`secret`, `time?`, `__namedParameters?`): `Promise`<`string`\>

#### Parameters

| Name                | Type                                        |
| :------------------ | :------------------------------------------ |
| `secret`            | `Uint8Array`                                |
| `time`              | `number`                                    |
| `__namedParameters` | [`TOTPOpts`](../../interfaces/otp.TOTPOpts) |

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/otp.ts:40](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/otp.ts#L40)

---

### validateHotp

▸ **validateHotp**(`secret`, `token`, `counter`, `__namedParameters?`):
`Promise`<`boolean`\>

#### Parameters

| Name                | Type                                                            |
| :------------------ | :-------------------------------------------------------------- |
| `secret`            | `Uint8Array`                                                    |
| `token`             | `string`                                                        |
| `counter`           | `number`                                                        |
| `__namedParameters` | [`TOTPValidationOpts`](../../interfaces/otp.TOTPValidationOpts) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/otp.ts:49](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/otp.ts#L49)

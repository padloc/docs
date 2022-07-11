---
title: "Class: Core"
linkTitle: "Core"
slug: "srp.Core"
---

[srp](../../modules/srp).Core

Implements various formulas defined in the
[SRP specification](http://srp.stanford.edu/design.html), used by
[Client](../srp.Client) and [Server](../srp.Server) classes.

## Constructors

### constructor

• **new Core**(`length`)

#### Parameters

| Name     | Type             |
| :------- | :--------------- |
| `length` | `SRPGroupLength` |

#### Defined in

[core/src/srp.ts:323](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L323)

## Properties

### \_params

• `Private` **\_params**: `SRPParams`

#### Defined in

[core/src/srp.ts:321](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L321)

## Methods

### A

▸ **A**(`a`): `BigInteger`

Calculates `A` from random value `a`, according to the formula

```
A = g ^ a % N
```

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `a`  | `BigInteger` |

#### Returns

`BigInteger`

#### Defined in

[core/src/srp.ts:351](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L351)

---

### B

▸ **B**(`v`, `b`): `Promise`<`BigInteger`\>

Calculates `B` from `v` and the random value `b` according to the formula

```
B = (k * v + g ^ b % N) % N
```

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `v`  | `BigInteger` |
| `b`  | `BigInteger` |

#### Returns

`Promise`<`BigInteger`\>

#### Defined in

[core/src/srp.ts:361](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L361)

---

### H

▸ **H**(...`inp`): `Promise`<`BigInteger`\>

Creates a hash of all arguments, concatenated

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `...inp` | `BigInteger`[] |

#### Returns

`Promise`<`BigInteger`\>

#### Defined in

[core/src/srp.ts:331](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L331)

---

### K

▸ **K**(`S`): `Promise`<`BigInteger`\>

Calculates the shared key `K = H(S)`

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `S`  | `BigInteger` |

#### Returns

`Promise`<`BigInteger`\>

#### Defined in

[core/src/srp.ts:410](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L410)

---

### M1

▸ **M1**(`A`, `B`, `K`): `Promise`<`BigInteger`\>

Calculates the first verification value `M1 = H(A | B | K)`

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `A`  | `BigInteger` |
| `B`  | `BigInteger` |
| `K`  | `BigInteger` |

#### Returns

`Promise`<`BigInteger`\>

#### Defined in

[core/src/srp.ts:417](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L417)

---

### M2

▸ **M2**(`A`, `M1`, `K`): `Promise`<`BigInteger`\>

Calculates the second verification value `M2 = H(A | M1 | K)`

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `A`  | `BigInteger` |
| `M1` | `BigInteger` |
| `K`  | `BigInteger` |

#### Returns

`Promise`<`BigInteger`\>

#### Defined in

[core/src/srp.ts:424](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L424)

---

### clientS

▸ **clientS**(`B`, `x`, `a`, `u`): `Promise`<`BigInteger`\>

Calculates `S` from `B`, `x`, `a` and `u` according to the formula

```
S = (B - k * (g ^ x % N)) ^ (a + u * x) % N
```

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `B`  | `BigInteger` |
| `x`  | `BigInteger` |
| `a`  | `BigInteger` |
| `u`  | `BigInteger` |

#### Returns

`Promise`<`BigInteger`\>

#### Defined in

[core/src/srp.ts:382](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L382)

---

### isZeroWhenModN

▸ **isZeroWhenModN**(`n`): `boolean`

This is used to ensure that values are not zero when mod N.

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `n`  | `BigInteger` |

#### Returns

`boolean`

#### Defined in

[core/src/srp.ts:431](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L431)

---

### k

▸ **k**(): `Promise`<`BigInteger`\>

Calculates the multiplier `k = H(N | g)` according to the SRP-6a specification

#### Returns

`Promise`<`BigInteger`\>

#### Defined in

[core/src/srp.ts:403](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L403)

---

### serverS

▸ **serverS**(`A`, `v`, `u`, `b`): `BigInteger`

Calculates `S` from `A`, `v`, `b` and `u` according to the formula

```
S = (A * v ^ u % N) ^ b % N
```

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `A`  | `BigInteger` |
| `v`  | `BigInteger` |
| `u`  | `BigInteger` |
| `b`  | `BigInteger` |

#### Returns

`BigInteger`

#### Defined in

[core/src/srp.ts:396](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L396)

---

### u

▸ **u**(`A`, `B`): `Promise`<`BigInteger`\>

Calculates `u` from `A` and `B` according to the formula

```
u = H(A | B)
```

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `A`  | `BigInteger` |
| `B`  | `BigInteger` |

#### Returns

`Promise`<`BigInteger`\>

#### Defined in

[core/src/srp.ts:372](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L372)

---

### v

▸ **v**(`x`): `BigInteger`

Calculates verifier `v` from secret `x` according to the formula

```
v = g ^ x % N
```

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `x`  | `BigInteger` |

#### Returns

`BigInteger`

#### Defined in

[core/src/srp.ts:342](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L342)

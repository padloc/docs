---
title: "Class: Server"
linkTitle: "Server"
slug: "srp.Server"
---

[srp](../../modules/srp).Server

## Constructors

### constructor

• **new Server**(`state`, `length?`)

#### Parameters

| Name     | Type                              | Default value |
| :------- | :-------------------------------- | :------------ |
| `state`  | [`SRPSession`](../srp.SRPSession) | `undefined`   |
| `length` | `SRPGroupLength`                  | `4096`        |

#### Defined in

[core/src/srp.ts:273](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L273)

## Properties

### \_session

• `Private` **\_session**: [`SRPSession`](../srp.SRPSession)

#### Defined in

[core/src/srp.ts:271](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L271)

---

### \_srp

• `Private` **\_srp**: [`Core`](../srp.Core)

#### Defined in

[core/src/srp.ts:270](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L270)

## Accessors

### B

• `get` **B**(): `null` \| `Uint8Array`

Server-side random initializer, available after calling
[initialize](srp.Server.md#initialize)

#### Returns

`null` \| `Uint8Array`

#### Defined in

[core/src/srp.ts:245](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L245)

---

### K

• `get` **K**(): `null` \| `Uint8Array`

Common session key, available after calling
[initialize](srp.Server.md#initialize) and [setA](srp.Server.md#seta)

#### Returns

`null` \| `Uint8Array`

#### Defined in

[core/src/srp.ts:250](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L250)

---

### M1

• `get` **M1**(): `null` \| `Uint8Array`

First value used to verify a successful key exchange, available after calling
[initialize](srp.Server.md#initialize) and [setA](srp.Server.md#seta)

#### Returns

`null` \| `Uint8Array`

#### Defined in

[core/src/srp.ts:258](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L258)

---

### M2

• `get` **M2**(): `null` \| `Uint8Array`

Second value used to verify a successful key exchange, available after calling
[initialize](srp.Server.md#initialize) and [setA](srp.Server.md#seta)

#### Returns

`null` \| `Uint8Array`

#### Defined in

[core/src/srp.ts:266](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L266)

## Methods

### \_getKey

▸ `Private` **\_getKey**(): `Promise`<`BigInteger`\>

#### Returns

`Promise`<`BigInteger`\>

#### Defined in

[core/src/srp.ts:299](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L299)

---

### initialize

▸ **initialize**(`v`): `Promise`<`void`\>

Initialize server using the given verfifier `v`. Generates [B](srp.Server.md#b).

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `v`  | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/srp.ts:279](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L279)

---

### setA

▸ **setA**(`A`): `Promise`<`void`\>

Apply [Client.A](srp.Client.md#a) value, calculating [K](srp.Server.md#k),
[M1](srp.Server.md#m1) and [M2](srp.Server.md#m2). Should only be called after
[initialize](srp.Server.md#initialize) has been called.

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `A`  | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/srp.ts:289](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L289)

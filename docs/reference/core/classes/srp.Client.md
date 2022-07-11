---
title: "Class: Client"
linkTitle: "Client"
slug: "srp.Client"
---

[srp](../../modules/srp).Client

High-level interface for the client side

## Constructors

### constructor

• **new Client**(`state?`, `length?`)

#### Parameters

| Name     | Type                              | Default value |
| :------- | :-------------------------------- | :------------ |
| `state`  | [`SRPSession`](../srp.SRPSession) | `undefined`   |
| `length` | `SRPGroupLength`                  | `4096`        |

#### Defined in

[core/src/srp.ts:200](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L200)

## Properties

### \_session

• `Private` **\_session**: [`SRPSession`](../srp.SRPSession)

#### Defined in

[core/src/srp.ts:198](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L198)

---

### \_srp

• `Private` **\_srp**: [`Core`](../srp.Core)

#### Defined in

[core/src/srp.ts:197](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L197)

## Accessors

### A

• `get` **A**(): `null` \| `Uint8Array`

Client-side random initializer, available after calling
[initialize](srp.Client.md#initialize)

#### Returns

`null` \| `Uint8Array`

#### Defined in

[core/src/srp.ts:172](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L172)

---

### K

• `get` **K**(): `null` \| `Uint8Array`

Common session key, available after calling
[initialize](srp.Client.md#initialize) and [setB](srp.Client.md#setb)

#### Returns

`null` \| `Uint8Array`

#### Defined in

[core/src/srp.ts:177](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L177)

---

### M1

• `get` **M1**(): `null` \| `Uint8Array`

First value used to verify a successful key exchange, available after calling
[initialize](srp.Client.md#initialize) and [setB](srp.Client.md#setb)

#### Returns

`null` \| `Uint8Array`

#### Defined in

[core/src/srp.ts:185](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L185)

---

### M2

• `get` **M2**(): `null` \| `Uint8Array`

Second value used to verify a successful key exchange, available after calling
[initialize](srp.Client.md#initialize) and [setB](srp.Client.md#setb)

#### Returns

`null` \| `Uint8Array`

#### Defined in

[core/src/srp.ts:193](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L193)

---

### v

• `get` **v**(): `null` \| `Uint8Array`

Verifier value, available after calling [initialize](srp.Client.md#initialize)

#### Returns

`null` \| `Uint8Array`

#### Defined in

[core/src/srp.ts:167](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L167)

## Methods

### \_getKey

▸ `Private` **\_getKey**(): `Promise`<`BigInteger`\>

#### Returns

`Promise`<`BigInteger`\>

#### Defined in

[core/src/srp.ts:227](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L227)

---

### initialize

▸ **initialize**(`x`): `Promise`<`void`\>

Initialize client using the given secret `x`, generating [v](srp.Client.md#v)
and [A](srp.Client.md#a)

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `x`  | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/srp.ts:206](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L206)

---

### setB

▸ **setB**(`B`): `Promise`<`void`\>

Apply [Server.B](srp.Server.md#b) value, calculating [K](srp.Client.md#k),
[M1](srp.Client.md#m1) and [M2](srp.Client.md#m2). Should only be called after
[initialize](srp.Client.md#initialize) has been called.

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `B`  | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/srp.ts:217](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/srp.ts#L217)

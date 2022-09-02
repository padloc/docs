---
title: "Class: DirectSender"
linkTitle: "DirectSender"
slug: "transport.DirectSender"
---

[transport](../../modules/transport).DirectSender

Stub implementation of the [Sender](../../interfaces/transport.Sender)
interface, passing requests directly into a [Server](../server.Server) instance.
this is useful for testing, where client and server instances are managed by the
same process

## Implements

-   [`Sender`](../../interfaces/transport.Sender)

## Constructors

### constructor

• **new DirectSender**(`server`)

#### Parameters

| Name     | Type                         |
| :------- | :--------------------------- |
| `server` | [`Server`](../server.Server) |

#### Defined in

[core/src/transport.ts:87](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L87)

## Methods

### send

▸ **send**(`req`): `Promise`<[`Response`](../transport.Response)\>

#### Parameters

| Name  | Type                              |
| :---- | :-------------------------------- |
| `req` | [`Request`](../transport.Request) |

#### Returns

`Promise`<[`Response`](../transport.Response)\>

#### Implementation of

[Sender](../../interfaces/transport.Sender).[send](../interfaces/transport.Sender#send)

#### Defined in

[core/src/transport.ts:89](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L89)

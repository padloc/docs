---
title: "Interface: Sender"
linkTitle: "Sender"
slug: "transport.Sender"
---

[transport](../../modules/transport).Sender

Generic interface for sending [Request](../../classes/transport.Request)s

## Implemented by

-   [`DirectSender`](../../classes/transport.DirectSender)

## Methods

### send

▸ **send**(`req`, `progress?`):
`Promise`<[`Response`](../../classes/transport.Response)\>

#### Parameters

| Name        | Type                                                         |
| :---------- | :----------------------------------------------------------- |
| `req`       | [`Request`](../../classes/transport.Request)                 |
| `progress?` | [`RequestProgress`](../../classes/transport.RequestProgress) |

#### Returns

`Promise`<[`Response`](../../classes/transport.Response)\>

#### Defined in

[core/src/transport.ts:73](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L73)

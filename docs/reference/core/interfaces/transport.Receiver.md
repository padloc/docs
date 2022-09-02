---
title: "Interface: Receiver"
linkTitle: "Receiver"
slug: "transport.Receiver"
---

[transport](../../modules/transport).Receiver

Generic interface for receiving [Request](../../classes/transport.Request)s
and processing them into a [Response](../classes/transport.Response)

## Methods

### listen

▸ **listen**(`handler`): `void`

#### Parameters

| Name      | Type                                                                                                                |
| :-------- | :------------------------------------------------------------------------------------------------------------------ |
| `handler` | (`req`: [`Request`](../../classes/transport.Request)) => `Promise`<[`Response`](../classes/transport.Response)\> |

#### Returns

`void`

#### Defined in

[core/src/transport.ts:78](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L78)

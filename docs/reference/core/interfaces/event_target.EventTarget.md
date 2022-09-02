---
title: "Interface: EventTarget"
linkTitle: "EventTarget"
slug: "event_target.EventTarget"
---

[event-target](../../modules/event_target).EventTarget

## Implemented by

-   [`EventEmitter`](../../classes/event_target.EventEmitter)

## Methods

### addEventListener

▸ **addEventListener**(`eventName`, `listener`): `any`

#### Parameters

| Name        | Type                                              |
| :---------- | :------------------------------------------------ |
| `eventName` | `string`                                          |
| `listener`  | [`Listener`](../modules/event_target#listener) |

#### Returns

`any`

#### Defined in

[core/src/event-target.ts:9](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/event-target.ts#L9)

---

### removeEventListener

▸ **removeEventListener**(`eventName`, `listener`): `any`

#### Parameters

| Name        | Type                                              |
| :---------- | :------------------------------------------------ |
| `eventName` | `string`                                          |
| `listener`  | [`Listener`](../modules/event_target#listener) |

#### Returns

`any`

#### Defined in

[core/src/event-target.ts:10](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/event-target.ts#L10)

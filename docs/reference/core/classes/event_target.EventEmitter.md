---
title: "Class: EventEmitter"
linkTitle: "EventEmitter"
slug: "event_target.EventEmitter"
---

[event-target](../../modules/event_target).EventEmitter

## Hierarchy

-   **`EventEmitter`**

    ↳ [`RequestProgress`](../transport.RequestProgress)

## Implements

-   [`EventTarget`](../../interfaces/event_target.EventTarget)

## Constructors

### constructor

• **new EventEmitter**()

## Properties

### \_listeners

• `Private` **\_listeners**: `Map`<`string`,
`Set`<[`Listener`](../modules/event_target.md#listener)\>\>

#### Defined in

[core/src/event-target.ts:14](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/event-target.ts#L14)

## Methods

### addEventListener

▸ **addEventListener**(`eventName`, `listener`): `void`

#### Parameters

| Name        | Type                                              |
| :---------- | :------------------------------------------------ |
| `eventName` | `string`                                          |
| `listener`  | [`Listener`](../modules/event_target.md#listener) |

#### Returns

`void`

#### Implementation of

[EventTarget](../../interfaces/event_target.EventTarget).[addEventListener](../interfaces/event_target.EventTarget.md#addeventlistener)

#### Defined in

[core/src/event-target.ts:16](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/event-target.ts#L16)

---

### dispatch

▸ **dispatch**(`type`, `detail?`): `void`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `type`    | `string` |
| `detail?` | `any`    |

#### Returns

`void`

#### Defined in

[core/src/event-target.ts:43](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/event-target.ts#L43)

---

### dispatchEvent

▸ **dispatchEvent**(`e`): `void`

#### Parameters

| Name | Type                                           |
| :--- | :--------------------------------------------- |
| `e`  | [`Event`](../../interfaces/event_target.Event) |

#### Returns

`void`

#### Defined in

[core/src/event-target.ts:30](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/event-target.ts#L30)

---

### removeEventListener

▸ **removeEventListener**(`eventName`, `listener`): `void`

#### Parameters

| Name        | Type                                              |
| :---------- | :------------------------------------------------ |
| `eventName` | `string`                                          |
| `listener`  | [`Listener`](../modules/event_target.md#listener) |

#### Returns

`void`

#### Implementation of

[EventTarget](../../interfaces/event_target.EventTarget).[removeEventListener](../interfaces/event_target.EventTarget.md#removeeventlistener)

#### Defined in

[core/src/event-target.ts:23](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/event-target.ts#L23)

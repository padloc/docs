---
title: "Class: RequestProgress"
linkTitle: "RequestProgress"
slug: "transport.RequestProgress"
---

[transport](../../modules/transport).RequestProgress

## Hierarchy

-   [`EventEmitter`](../event_target.EventEmitter)

    ↳ **`RequestProgress`**

## Constructors

### constructor

• **new RequestProgress**()

#### Inherited from

[EventEmitter](../event_target.EventEmitter).[constructor](../event_target.EventEmitter#constructor)

## Properties

### \_downloadProgress

• `Private` **\_downloadProgress**: `Progress`

#### Defined in

[core/src/transport.ts:147](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L147)

---

### \_error

• `Private` `Optional` **\_error**: [`Error`](../../interfaces/transport.Error)

#### Defined in

[core/src/transport.ts:149](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L149)

---

### \_rejectCompleted

• `Private` **\_rejectCompleted**: (`err`:
[`Error`](../../interfaces/transport.Error)) => `void`

#### Type declaration

▸ (`err`): `void`

##### Parameters

| Name  | Type                                        |
| :---- | :------------------------------------------ |
| `err` | [`Error`](../../interfaces/transport.Error) |

##### Returns

`void`

#### Defined in

[core/src/transport.ts:152](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L152)

---

### \_resolveCompleted

• `Private` **\_resolveCompleted**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[core/src/transport.ts:151](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L151)

---

### \_uploadProgress

• `Private` **\_uploadProgress**: `Progress`

#### Defined in

[core/src/transport.ts:146](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L146)

---

### completed

• **completed**: `Promise`<`void`\>

#### Defined in

[core/src/transport.ts:101](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L101)

## Accessors

### downloadProgress

• `get` **downloadProgress**(): `Progress`

#### Returns

`Progress`

#### Defined in

[core/src/transport.ts:116](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L116)

• `set` **downloadProgress**(`progress`): `void`

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `progress` | `Progress` |

#### Returns

`void`

#### Defined in

[core/src/transport.ts:120](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L120)

---

### error

• `get` **error**(): `undefined` \| [`Error`](../../interfaces/transport.Error)

#### Returns

`undefined` \| [`Error`](../../interfaces/transport.Error)

#### Defined in

[core/src/transport.ts:142](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L142)

• `set` **error**(`error`): `void`

#### Parameters

| Name    | Type                                                       |
| :------ | :--------------------------------------------------------- |
| `error` | `undefined` \| [`Error`](../../interfaces/transport.Error) |

#### Returns

`void`

#### Defined in

[core/src/transport.ts:133](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L133)

---

### progress

• `get` **progress**(): `Object`

#### Returns

`Object`

| Name     | Type     |
| :------- | :------- |
| `loaded` | `number` |
| `total`  | `number` |

#### Defined in

[core/src/transport.ts:126](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L126)

---

### uploadProgress

• `get` **uploadProgress**(): `Progress`

#### Returns

`Progress`

#### Defined in

[core/src/transport.ts:106](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L106)

• `set` **uploadProgress**(`progress`): `void`

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `progress` | `Progress` |

#### Returns

`void`

#### Defined in

[core/src/transport.ts:110](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L110)

## Methods

### addEventListener

▸ **addEventListener**(`eventName`, `listener`): `void`

#### Parameters

| Name        | Type                                              |
| :---------- | :------------------------------------------------ |
| `eventName` | `string`                                          |
| `listener`  | [`Listener`](../modules/event_target#listener) |

#### Returns

`void`

#### Inherited from

[EventEmitter](../event_target.EventEmitter).[addEventListener](../event_target.EventEmitter#addeventlistener)

#### Defined in

[core/src/event-target.ts:16](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/event-target.ts#L16)

---

### complete

▸ **complete**(): `void`

#### Returns

`void`

#### Defined in

[core/src/transport.ts:154](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/transport.ts#L154)

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

#### Inherited from

[EventEmitter](../event_target.EventEmitter).[dispatch](../event_target.EventEmitter#dispatch)

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

#### Inherited from

[EventEmitter](../event_target.EventEmitter).[dispatchEvent](../event_target.EventEmitter#dispatchevent)

#### Defined in

[core/src/event-target.ts:30](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/event-target.ts#L30)

---

### removeEventListener

▸ **removeEventListener**(`eventName`, `listener`): `void`

#### Parameters

| Name        | Type                                              |
| :---------- | :------------------------------------------------ |
| `eventName` | `string`                                          |
| `listener`  | [`Listener`](../modules/event_target#listener) |

#### Returns

`void`

#### Inherited from

[EventEmitter](../event_target.EventEmitter).[removeEventListener](../event_target.EventEmitter#removeeventlistener)

#### Defined in

[core/src/event-target.ts:23](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/event-target.ts#L23)

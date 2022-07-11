---
title: "Class: MultiLogger"
linkTitle: "MultiLogger"
slug: "logging.MultiLogger"
---

[logging](../../modules/logging).MultiLogger

## Implements

-   [`Logger`](../../interfaces/logging.Logger)

## Constructors

### constructor

• **new MultiLogger**(...`loggers`)

#### Parameters

| Name         | Type                                          |
| :----------- | :-------------------------------------------- |
| `...loggers` | [`Logger`](../../interfaces/logging.Logger)[] |

#### Defined in

[core/src/logging.ts:50](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/logging.ts#L50)

## Properties

### \_loggers

• `Private` **\_loggers**: [`Logger`](../../interfaces/logging.Logger)[] = `[]`

#### Defined in

[core/src/logging.ts:48](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/logging.ts#L48)

## Methods

### log

▸ **log**(`type`, `data?`): [`LogEvent`](../logging.LogEvent)

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `type`  | `string` |
| `data?` | `any`    |

#### Returns

[`LogEvent`](../logging.LogEvent)

#### Implementation of

[Logger](../../interfaces/logging.Logger).[log](../interfaces/logging.Logger.md#log)

#### Defined in

[core/src/logging.ts:54](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/logging.ts#L54)

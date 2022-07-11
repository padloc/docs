---
title: "Class: ErrorMessage"
linkTitle: "ErrorMessage"
slug: "messenger.ErrorMessage"
---

[messenger](../../modules/messenger).ErrorMessage

## Hierarchy

-   [`Message`](../messenger.Message)<{ `code`: `string` ; `eventId`: `string` ;
    `message`: `string` ; `time`: `string` }\>

    ↳ **`ErrorMessage`**

## Constructors

### constructor

• **new ErrorMessage**(`data`)

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `data`         | `Object` |
| `data.code`    | `string` |
| `data.eventId` | `string` |
| `data.message` | `string` |
| `data.time`    | `string` |

#### Inherited from

[Message](../messenger.Message).[constructor](messenger.Message.md#constructor)

#### Defined in

[core/src/messenger.ts:13](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L13)

## Properties

### data

• `Readonly` **data**: `Object`

#### Type declaration

| Name      | Type     |
| :-------- | :------- |
| `code`    | `string` |
| `eventId` | `string` |
| `message` | `string` |
| `time`    | `string` |

#### Inherited from

[Message](../messenger.Message).[data](messenger.Message.md#data)

---

### template

• **template**: `string` = `"error"`

Template name

#### Overrides

[Message](../messenger.Message).[template](messenger.Message.md#template)

#### Defined in

[core/src/messenger.ts:64](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L64)

## Accessors

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Overrides

Message.title

#### Defined in

[core/src/messenger.ts:66](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L66)

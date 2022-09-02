---
title: "Class: EmailAuthMessage"
linkTitle: "EmailAuthMessage"
slug: "messenger.EmailAuthMessage"
---

[messenger](../../modules/messenger).EmailAuthMessage

## Hierarchy

-   [`Message`](../messenger.Message)<{ `code`: `string` ; `requestId`: `string`
    }\>

    ↳ **`EmailAuthMessage`**

## Constructors

### constructor

• **new EmailAuthMessage**(`data`)

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `data`           | `Object` |
| `data.code`      | `string` |
| `data.requestId` | `string` |

#### Inherited from

[Message](../messenger.Message).[constructor](../messenger.Message#constructor)

#### Defined in

[core/src/messenger.ts:13](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L13)

## Properties

### data

• `Readonly` **data**: `Object`

#### Type declaration

| Name        | Type     |
| :---------- | :------- |
| `code`      | `string` |
| `requestId` | `string` |

#### Inherited from

[Message](../messenger.Message).[data](../messenger.Message#data)

---

### template

• **template**: `string` = `"email-auth"`

Template name

#### Overrides

[Message](../messenger.Message).[template](../messenger.Message#template)

#### Defined in

[core/src/messenger.ts:17](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L17)

## Accessors

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Overrides

Message.title

#### Defined in

[core/src/messenger.ts:19](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/messenger.ts#L19)

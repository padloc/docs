---
title: "Class: Err"
linkTitle: "Err"
slug: "error.Err"
---

[error](../../modules/error).Err

Custom error class augmenting the built-in `Error` with some additional
properties

## Hierarchy

-   `Error`

    ↳ **`Err`**

## Constructors

### constructor

• **new Err**(`code`, `message?`, `__namedParameters?`)

#### Parameters

| Name                | Type                                                  |
| :------------------ | :---------------------------------------------------- |
| `code`              | [`ErrorCode`](../../enums/error.ErrorCode)            |
| `message?`          | `string`                                              |
| `__namedParameters` | [`ErrorOptions`](../../interfaces/error.ErrorOptions) |

#### Overrides

Error.constructor

#### Defined in

[core/src/error.ts:85](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/error.ts#L85)

## Properties

### code

• **code**: [`ErrorCode`](../../enums/error.ErrorCode)

Error code used for more precise error segmentation

#### Defined in

[core/src/error.ts:75](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/error.ts#L75)

---

### display

• **display**: `boolean`

Wether or not this error should be displayed to the user

#### Defined in

[core/src/error.ts:79](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/error.ts#L79)

---

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

core/node_modules/typescript/lib/lib.es5.d.ts:974

---

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

core/node_modules/typescript/lib/lib.es5.d.ts:973

---

### originalError

• `Optional` **originalError**: `Error`

The original error, if available

#### Defined in

[core/src/error.ts:81](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/error.ts#L81)

---

### report

• **report**: `boolean`

Wether or not this error should be reported to an admin, if that option exists

#### Defined in

[core/src/error.ts:77](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/error.ts#L77)

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

core/node_modules/typescript/lib/lib.es5.d.ts:975

---

### time

• **time**: `Date`

Time when the error was created

#### Defined in

[core/src/error.ts:83](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/error.ts#L83)

---

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`:
`CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name          | Type         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

core/node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

core/node_modules/@types/node/globals.d.ts:13

## Methods

### toRaw

▸ **toRaw**(): `Object`

#### Returns

`Object`

| Name      | Type                                       |
| :-------- | :----------------------------------------- |
| `code`    | [`ErrorCode`](../../enums/error.ErrorCode) |
| `message` | `string`                                   |
| `stack`   | `undefined` \| `string`                    |

#### Defined in

[core/src/error.ts:93](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/error.ts#L93)

---

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[core/src/error.ts:101](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/error.ts#L101)

---

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

core/node_modules/@types/node/globals.d.ts:4

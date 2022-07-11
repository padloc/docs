---
title: "Module: util"
linkTitle: "util"
slug: "util"
---

## Variables

### charSets

• `Const` **charSets**: `Object`

Predefined char sets for generating randing strings

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha` | `string` |
| `alphanum` | `string` |
| `full` | `string` |
| `hexa` | `string` |
| `num` | `string` |

#### Defined in

[core/src/util.ts:33](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/util.ts#L33)

___

### chars

• `Const` **chars**: `Object`

Caracters, by category

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lower` | `string` |
| `numbers` | `string` |
| `other` | `string` |
| `upper` | `string` |

#### Defined in

[core/src/util.ts:25](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/util.ts#L25)

## Functions

### applyMixins

▸ **applyMixins**(`baseClass`, ...`mixins`): `any`

Applies a number of class `mixins` to a `baseClass`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseClass` | `any` |
| `...mixins` | (`cls`: `any`) => `any`[] |

#### Returns

`any`

#### Defined in

[core/src/util.ts:168](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/util.ts#L168)

___

### capitalize

▸ **capitalize**(`string`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

[core/src/util.ts:193](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/util.ts#L193)

___

### debounce

▸ **debounce**(`fn`, `delay`): (...`args`: `any`[]) => `void`

"Debounces" a function, making sure it is only called once within a certain
time window

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (...`args`: `any`[]) => `any` |
| `delay` | `number` |

#### Returns

`fn`

▸ (...`args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Defined in

[core/src/util.ts:101](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/util.ts#L101)

___

### escapeRegex

▸ **escapeRegex**(`str`): `string`

Escapes all regex special characters within a given string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[core/src/util.ts:175](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/util.ts#L175)

___

### getIdFromEmail

▸ **getIdFromEmail**(`email`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/util.ts:183](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/util.ts#L183)

___

### randomNumber

▸ **randomNumber**(`min?`, `max?`): `Promise`<`number`\>

Generates a random number between `min` and `max`.
Taken from https://github.com/EFForg/OpenWireless/blob/master/app/js/diceware.js

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `min` | `number` | `0` |
| `max` | `number` | `10` |

#### Returns

`Promise`<`number`\>

#### Defined in

[core/src/util.ts:60](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/util.ts#L60)

___

### randomString

▸ **randomString**(`length?`, `charSet?`): `Promise`<`string`\>

Creates a random string with a given `length`, with characters chosen from a given `charSet`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `length` | `number` | `32` |
| `charSet` | `string` | `charSets.full` |

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/util.ts:42](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/util.ts#L42)

___

### removeTrailingSlash

▸ **removeTrailingSlash**(`url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

[core/src/util.ts:217](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/util.ts#L217)

___

### resolveLanguage

▸ **resolveLanguage**(`locale`, `supportedLanguages`): `string`

Resolves a given locale string to the approprivate available language

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | `string` |
| `supportedLanguages` | `Object` |

#### Returns

`string`

#### Defined in

[core/src/util.ts:150](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/util.ts#L150)

___

### setPath

▸ **setPath**(`obj`, `path`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `path` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[core/src/util.ts:221](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/util.ts#L221)

___

### stripPropertiesRecursive

▸ **stripPropertiesRecursive**(`obj`, `properties`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |
| `properties` | `string`[] |

#### Returns

`object`

#### Defined in

[core/src/util.ts:204](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/util.ts#L204)

___

### throttle

▸ **throttle**(`fn`, `delay`): (...`args`: `any`[]) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (...`args`: `any`[]) => `any` |
| `delay` | `number` |

#### Returns

`fn`

▸ (...`args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Defined in

[core/src/util.ts:123](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/util.ts#L123)

___

### truncate

▸ **truncate**(`str`, `len`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `len` | `number` |

#### Returns

`string`

#### Defined in

[core/src/util.ts:179](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/util.ts#L179)

___

### uuid

▸ **uuid**(): `Promise`<`string`\>

Generates a random UUID v4

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/util.ts:6](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/util.ts#L6)

___

### wait

▸ **wait**(`delay`): `Promise`<`void`\>

Returns a promise that resolves after a given `delay`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `delay` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/util.ts:143](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/util.ts#L143)

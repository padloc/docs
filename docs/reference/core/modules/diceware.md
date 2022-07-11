---
title: "Module: diceware"
linkTitle: "diceware"
slug: "diceware"
---

## Variables

### AVAILABLE\_LANGUAGES

• `Const` **AVAILABLE\_LANGUAGES**: { `label`: `string` = "English"; `value`: `string` = "en" }[]

#### Defined in

[locale/src/wordlists.ts:30](https://github.com/padloc/padloc/blob/b00eb4fd/packages/locale/src/wordlists.ts#L30)

## Functions

### generatePassphrase

▸ **generatePassphrase**(`nWords?`, `separator?`, `languages?`): `Promise`<`string`\>

Generates a passphrase consisting of a number of words randomly selected
from a word list. Motivated by http://world.std.com/~reinhold/diceware.html

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `nWords` | `number` | `4` |
| `separator` | `string` | `"-"` |
| `languages` | `string`[] | `undefined` |

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/diceware.ts:10](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/diceware.ts#L10)

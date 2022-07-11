---
title: "Interface: FieldDef"
linkTitle: "FieldDef"
slug: "item.FieldDef"
---

[item](../../modules/item).FieldDef

Field definition containing meta data for a certain field type

## Properties

### actions

• `Optional` **actions**: { `icon`: `string` ; `label`: `string` ; `action`:
(`value`: `string`) => `void` }[]

#### Defined in

[core/src/item.ts:52](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L52)

---

### icon

• **icon**: `string`

icon used for display

#### Defined in

[core/src/item.ts:45](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L45)

---

### mask

• **mask**: `boolean`

whether the field should be masked when displayed

#### Defined in

[core/src/item.ts:41](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L41)

---

### matchPattern

• **matchPattern**: `RegExp`

regular expression describing pattern of field contents (used for matching)

#### Defined in

[core/src/item.ts:39](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L39)

---

### multiline

• **multiline**: `boolean`

whether the field value can have multiple lines

#### Defined in

[core/src/item.ts:43](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L43)

---

### name

• **name**: `string`

display name

#### Defined in

[core/src/item.ts:47](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L47)

---

### pattern

• **pattern**: `RegExp`

regular expression describing pattern of field contents (used for validation)

#### Defined in

[core/src/item.ts:37](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L37)

---

### type

• **type**: [`FieldType`](../../enums/item.FieldType)

content type

#### Defined in

[core/src/item.ts:35](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L35)

## Methods

### format

▸ `Optional` **format**(`value`, `masked`): `string`

display formatting

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `value`  | `string`  |
| `masked` | `boolean` |

#### Returns

`string`

#### Defined in

[core/src/item.ts:49](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L49)

---

### transform

▸ `Optional` **transform**(`value`): `Promise`<`string`\>

for values that need to be prepared before being copied / filled

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/item.ts:51](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L51)

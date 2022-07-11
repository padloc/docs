---
title: "Module: item"
linkTitle: "item"
slug: "item"
---

## Enumerations

-   [AuditType](../../enums/item.AuditType)
-   [FieldType](../../enums/item.FieldType)

## Classes

-   [Field](../../classes/item.Field)
-   [VaultItem](../../classes/item.VaultItem)

## Interfaces

-   [AuditResult](../../interfaces/item.AuditResult)
-   [FieldDef](../../interfaces/item.FieldDef)
-   [ItemTemplate](../../interfaces/item.ItemTemplate)

## Type Aliases

### Tag

Ƭ **Tag**: `string`

A tag that can be assigned to a [VaultItem](../../classes/item.VaultItem)

#### Defined in

[core/src/item.ts:10](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L10)

---

### VaultItemID

Ƭ **VaultItemID**: `string`

Unique identifier for [VaultItem](../../classes/item.VaultItem)s

#### Defined in

[core/src/item.ts:13](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L13)

## Variables

### FIELD_DEFS

• `Const` **FIELD_DEFS**: { [t in FieldType]: FieldDef }

Available field types and respective meta data (order matters for pattern
matching)

#### Defined in

[core/src/item.ts:56](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L56)

---

### ITEM_TEMPLATES

• `Const` **ITEM_TEMPLATES**:
[`ItemTemplate`](../../interfaces/item.ItemTemplate)[]

#### Defined in

[core/src/item.ts:385](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L385)

## Functions

### createVaultItem

▸ **createVaultItem**(`__namedParameters`):
`Promise`<[`VaultItem`](../../classes/item.VaultItem)\>

Creates a new vault item

#### Parameters

| Name                | Type                                                    |
| :------------------ | :------------------------------------------------------ |
| `__namedParameters` | `Partial`<[`VaultItem`](../../classes/item.VaultItem)\> |

#### Returns

`Promise`<[`VaultItem`](../../classes/item.VaultItem)\>

#### Defined in

[core/src/item.ts:323](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L323)

---

### guessFieldType

▸ **guessFieldType**(`__namedParameters`):
[`FieldType`](../../enums/item.FieldType)

Guesses the most appropriate field type based on field name and value

#### Parameters

| Name                        | Type      |
| :-------------------------- | :-------- |
| `__namedParameters`         | `Object`  |
| `__namedParameters.masked?` | `boolean` |
| `__namedParameters.name`    | `string`  |
| `__namedParameters.value?`  | `string`  |

#### Returns

[`FieldType`](../../enums/item.FieldType)

#### Defined in

[core/src/item.ts:339](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L339)

---

### normalizeTag

▸ **normalizeTag**(`tag`): [`Tag`](item.md#tag)

Normalizes a tag value by removing invalid characters

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `tag` | `string` |

#### Returns

[`Tag`](item.md#tag)

#### Defined in

[core/src/item.ts:261](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L261)

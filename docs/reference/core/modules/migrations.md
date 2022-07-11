---
title: "Module: migrations"
linkTitle: "migrations"
slug: "migrations"
---

## Interfaces

-   [Migration](../../interfaces/migrations.Migration)

## Variables

### EARLIEST_VERSION

• `Const` **EARLIEST_VERSION**: `string`

#### Defined in

[core/src/migrations.ts:92](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/migrations.ts#L92)

---

### LATEST_VERSION

• `Const` **LATEST_VERSION**: `string`

#### Defined in

[core/src/migrations.ts:94](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/migrations.ts#L94)

---

### MIGRATIONS

• `Const` **MIGRATIONS**: [`Migration`](../../interfaces/migrations.Migration)[]

#### Defined in

[core/src/migrations.ts:14](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/migrations.ts#L14)

---

### VERSIONS

• `Const` **VERSIONS**: `string`[]

#### Defined in

[core/src/migrations.ts:93](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/migrations.ts#L93)

## Functions

### downgrade

▸ **downgrade**(`kind`, `raw`, `version?`): `any`

#### Parameters

| Name      | Type     | Default value    |
| :-------- | :------- | :--------------- |
| `kind`    | `string` | `undefined`      |
| `raw`     | `any`    | `undefined`      |
| `version` | `string` | `LATEST_VERSION` |

#### Returns

`any`

#### Defined in

[core/src/migrations.ts:133](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/migrations.ts#L133)

---

### upgrade

▸ **upgrade**(`kind`, `raw`, `version?`): `any`

#### Parameters

| Name      | Type     | Default value    |
| :-------- | :------- | :--------------- |
| `kind`    | `string` | `undefined`      |
| `raw`     | `any`    | `undefined`      |
| `version` | `string` | `LATEST_VERSION` |

#### Returns

`any`

#### Defined in

[core/src/migrations.ts:103](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/migrations.ts#L103)

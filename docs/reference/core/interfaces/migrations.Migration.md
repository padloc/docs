---
title: "Interface: Migration"
linkTitle: "Migration"
slug: "migrations.Migration"
---

[migrations](../../modules/migrations).Migration

## Properties

### from

• **from**: `string`

#### Defined in

[core/src/migrations.ts:4](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/migrations.ts#L4)

---

### to

• **to**: `string`

#### Defined in

[core/src/migrations.ts:5](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/migrations.ts#L5)

---

### transforms

• **transforms**: `Object`

#### Index signature

▪ [kind: `string`]: { `down`: (`inp`: `any`, `kind?`: `string`) => `any` ; `up`:
(`inp`: `any`, `kind?`: `string`) => `any` }

#### Defined in

[core/src/migrations.ts:6](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/migrations.ts#L6)

---
title: "Module: legacy"
linkTitle: "legacy"
slug: "legacy"
---

## Interfaces

-   [LegacyContainer](../../interfaces/legacy.LegacyContainer)

## Functions

### parseLegacyContainer

▸ **parseLegacyContainer**(`raw`):
[`PBES2Container`](../../classes/container.PBES2Container)

Transforms a legacy container object into an instance of
[PBES2Container](../../classes/container.PBES2Container)

#### Parameters

| Name  | Type                                                         |
| :---- | :----------------------------------------------------------- |
| `raw` | [`LegacyContainer`](../../interfaces/legacy.LegacyContainer) |

#### Returns

[`PBES2Container`](../../classes/container.PBES2Container)

#### Defined in

[core/src/legacy.ts:46](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/legacy.ts#L46)

---

### validateLegacyContainer

▸ **validateLegacyContainer**(`obj`): `boolean`

Validates legacy container structure

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `obj` | `any` |

#### Returns

`boolean`

#### Defined in

[core/src/legacy.ts:26](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/legacy.ts#L26)

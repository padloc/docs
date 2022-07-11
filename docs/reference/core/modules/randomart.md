---
title: "Module: randomart"
linkTitle: "randomart"
slug: "randomart"
---

## Interfaces

-   [Fingerprint](../../interfaces/randomart.Fingerprint)
-   [Options](../../interfaces/randomart.Options)

## Variables

### defaults

• `Const` **defaults**: [`Options`](../../interfaces/randomart.Options)

Default options

#### Defined in

[core/src/randomart.ts:30](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/randomart.ts#L30)

## Functions

### getValues

▸ **getValues**(`fingerprint`, `opts?`): `number`[][]

#### Parameters

| Name          | Type                                                        |
| :------------ | :---------------------------------------------------------- |
| `fingerprint` | `Uint8Array`                                                |
| `opts`        | `Partial`<[`Options`](../../interfaces/randomart.Options)\> |

#### Returns

`number`[][]

#### Defined in

[core/src/randomart.ts:80](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/randomart.ts#L80)

---

### randomArt

▸ **randomArt**(`fingerprint`, `opts?`):
[`Fingerprint`](../../interfaces/randomart.Fingerprint)

Generates a visualisation of a "fingerprint" similar to the ascii-based
visualization method used by OpenSSH. Generates a "heat map" of values on a grid
of a given width and height using the "drunken bishop" algorithm desribed in
[this paper](http://www.dirk-loss.de/sshvis/drunken_bishop.pdf).

#### Parameters

| Name          | Type                                                        |
| :------------ | :---------------------------------------------------------- |
| `fingerprint` | `Uint8Array`                                                |
| `opts`        | `Partial`<[`Options`](../../interfaces/randomart.Options)\> |

#### Returns

[`Fingerprint`](../../interfaces/randomart.Fingerprint)

#### Defined in

[core/src/randomart.ts:115](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/randomart.ts#L115)

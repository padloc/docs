---
title: "Interface: Fingerprint"
linkTitle: "Fingerprint"
slug: "randomart.Fingerprint"
---

[randomart](../../modules/randomart).Fingerprint

Represents a "fingerprint" visualization of a certain
[height](randomart.Fingerprint.md#height) and
[width](randomart.Fingerprint.md#width), the
[values](randomart.Fingerprint.md#values) property contains the raw values
generated using the
[drunken bishop](http://www.dirk-loss.de/sshvis/drunken_bishop.pdf) while
[symbols](randomart.Fingerprint.md#symbols) represents the same values by
mapping the on the symbols defined in
[Options.symbols](randomart.Options.md#symbols).

## Properties

### height

• **height**: `number`

#### Defined in

[core/src/randomart.ts:21](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/randomart.ts#L21)

---

### symbols

• **symbols**: `string`[][]

#### Defined in

[core/src/randomart.ts:23](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/randomart.ts#L23)

---

### values

• **values**: `number`[][]

#### Defined in

[core/src/randomart.ts:22](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/randomart.ts#L22)

---

### width

• **width**: `number`

#### Defined in

[core/src/randomart.ts:20](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/randomart.ts#L20)

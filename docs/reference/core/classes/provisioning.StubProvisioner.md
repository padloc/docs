---
title: "Class: StubProvisioner"
linkTitle: "StubProvisioner"
slug: "provisioning.StubProvisioner"
---

[provisioning](../../modules/provisioning).StubProvisioner

## Implements

-   [`Provisioner`](../../interfaces/provisioning.Provisioner)

## Constructors

### constructor

• **new StubProvisioner**()

## Methods

### accountDeleted

▸ **accountDeleted**(`_params`): `Promise`<`void`\>

#### Parameters

| Name                 | Type     |
| :------------------- | :------- |
| `_params`            | `Object` |
| `_params.accountId?` | `string` |
| `_params.email`      | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Provisioner](../../interfaces/provisioning.Provisioner).[accountDeleted](../interfaces/provisioning.Provisioner#accountdeleted)

#### Defined in

[core/src/provisioning.ts:221](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L221)

---

### getProvisioning

▸ **getProvisioning**(`_params`):
`Promise`<[`Provisioning`](../provisioning.Provisioning)\>

#### Parameters

| Name                 | Type     |
| :------------------- | :------- |
| `_params`            | `Object` |
| `_params.accountId?` | `string` |
| `_params.email`      | `string` |

#### Returns

`Promise`<[`Provisioning`](../provisioning.Provisioning)\>

#### Implementation of

[Provisioner](../../interfaces/provisioning.Provisioner).[getProvisioning](../interfaces/provisioning.Provisioner#getprovisioning)

#### Defined in

[core/src/provisioning.ts:217](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L217)

---

### orgDeleted

▸ **orgDeleted**(`_params`): `Promise`<`void`\>

#### Parameters

| Name      | Type                                      |
| :-------- | :---------------------------------------- |
| `_params` | [`OrgInfo`](../../interfaces/org.OrgInfo) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Provisioner](../../interfaces/provisioning.Provisioner).[orgDeleted](../interfaces/provisioning.Provisioner#orgdeleted)

#### Defined in

[core/src/provisioning.ts:222](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L222)

---

### orgOwnerChanged

▸ **orgOwnerChanged**(`_org`, `_prevOwner`, `_newOwner`): `Promise`<`void`\>

#### Parameters

| Name               | Type     |
| :----------------- | :------- |
| `_org`             | `Object` |
| `_org.id`          | `string` |
| `_prevOwner`       | `Object` |
| `_prevOwner.email` | `string` |
| `_prevOwner.id`    | `string` |
| `_newOwner`        | `Object` |
| `_newOwner.email`  | `string` |
| `_newOwner.id`     | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Provisioner](../../interfaces/provisioning.Provisioner).[orgOwnerChanged](../interfaces/provisioning.Provisioner#orgownerchanged)

#### Defined in

[core/src/provisioning.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L223)

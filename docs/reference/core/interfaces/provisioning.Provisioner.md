---
title: "Interface: Provisioner"
linkTitle: "Provisioner"
slug: "provisioning.Provisioner"
---

[provisioning](../../modules/provisioning).Provisioner

## Implemented by

-   [`BasicProvisioner`](../../classes/provisioning.BasicProvisioner)
-   [`StubProvisioner`](../../classes/provisioning.StubProvisioner)

## Methods

### accountDeleted

▸ **accountDeleted**(`params`): `Promise`<`void`\>

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `params`            | `Object` |
| `params.accountId?` | `string` |
| `params.email`      | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/provisioning.ts:207](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L207)

---

### getProvisioning

▸ **getProvisioning**(`params`):
`Promise`<[`Provisioning`](../../classes/provisioning.Provisioning)\>

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `params`            | `Object` |
| `params.accountId?` | `string` |
| `params.email`      | `string` |

#### Returns

`Promise`<[`Provisioning`](../../classes/provisioning.Provisioning)\>

#### Defined in

[core/src/provisioning.ts:206](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L206)

---

### orgDeleted

▸ **orgDeleted**(`params`): `Promise`<`void`\>

#### Parameters

| Name     | Type                        |
| :------- | :-------------------------- |
| `params` | [`OrgInfo`](../org.OrgInfo) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/provisioning.ts:208](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L208)

---

### orgOwnerChanged

▸ **orgOwnerChanged**(`org`, `prevOwner`, `newOwner`): `Promise`<`void`\>

#### Parameters

| Name              | Type                        |
| :---------------- | :-------------------------- |
| `org`             | [`OrgInfo`](../org.OrgInfo) |
| `prevOwner`       | `Object`                    |
| `prevOwner.email` | `string`                    |
| `prevOwner.id?`   | `string`                    |
| `newOwner`        | `Object`                    |
| `newOwner.email`  | `string`                    |
| `newOwner.id?`    | `string`                    |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/provisioning.ts:209](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L209)

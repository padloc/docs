---
title: "Class: BasicProvisioner"
linkTitle: "BasicProvisioner"
slug: "provisioning.BasicProvisioner"
---

[provisioning](../../modules/provisioning).BasicProvisioner

## Implements

-   [`Provisioner`](../../interfaces/provisioning.Provisioner)

## Constructors

### constructor

• **new BasicProvisioner**(`storage`, `config?`)

#### Parameters

| Name      | Type                                                               |
| :-------- | :----------------------------------------------------------------- |
| `storage` | [`Storage`](../../interfaces/storage.Storage)                      |
| `config`  | [`BasicProvisionerConfig`](../provisioning.BasicProvisionerConfig) |

#### Defined in

[core/src/provisioning.ts:266](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L266)

## Properties

### config

• `Readonly` **config**:
[`BasicProvisionerConfig`](../provisioning.BasicProvisionerConfig)

---

### storage

• `Readonly` **storage**: [`Storage`](../../interfaces/storage.Storage)

## Methods

### \_getDefaultAccountProvisioning

▸ `Protected` **\_getDefaultAccountProvisioning**():
`Promise`<[`AccountProvisioning`](../provisioning.AccountProvisioning)\>

#### Returns

`Promise`<[`AccountProvisioning`](../provisioning.AccountProvisioning)\>

#### Defined in

[core/src/provisioning.ts:365](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L365)

---

### \_getOrCreateAccountProvisioning

▸ `Protected` **\_getOrCreateAccountProvisioning**(`__namedParameters`):
`Promise`<[`AccountProvisioning`](../provisioning.AccountProvisioning)\>

#### Parameters

| Name                           | Type     |
| :----------------------------- | :------- |
| `__namedParameters`            | `Object` |
| `__namedParameters.accountId?` | `string` |
| `__namedParameters.email`      | `string` |

#### Returns

`Promise`<[`AccountProvisioning`](../provisioning.AccountProvisioning)\>

#### Defined in

[core/src/provisioning.ts:378](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L378)

---

### \_getOrCreateOrgProvisioning

▸ `Protected` **\_getOrCreateOrgProvisioning**(`orgId`):
`Promise`<[`OrgProvisioning`](../provisioning.OrgProvisioning)\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `orgId` | `string` |

#### Returns

`Promise`<[`OrgProvisioning`](../provisioning.OrgProvisioning)\>

#### Defined in

[core/src/provisioning.ts:399](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L399)

---

### accountDeleted

▸ **accountDeleted**(`__namedParameters`): `Promise`<`void`\>

#### Parameters

| Name                           | Type     |
| :----------------------------- | :------- |
| `__namedParameters`            | `Object` |
| `__namedParameters.accountId?` | `string` |
| `__namedParameters.email`      | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Provisioner](../../interfaces/provisioning.Provisioner).[accountDeleted](../interfaces/provisioning.Provisioner.md#accountdeleted)

#### Defined in

[core/src/provisioning.ts:313](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L313)

---

### getProvisioning

▸ **getProvisioning**(`__namedParameters`):
`Promise`<[`Provisioning`](../provisioning.Provisioning)\>

#### Parameters

| Name                           | Type     |
| :----------------------------- | :------- |
| `__namedParameters`            | `Object` |
| `__namedParameters.accountId?` | `string` |
| `__namedParameters.email`      | `string` |

#### Returns

`Promise`<[`Provisioning`](../provisioning.Provisioning)\>

#### Implementation of

[Provisioner](../../interfaces/provisioning.Provisioner).[getProvisioning](../interfaces/provisioning.Provisioner.md#getprovisioning)

#### Defined in

[core/src/provisioning.ts:271](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L271)

---

### orgDeleted

▸ **orgDeleted**(`__namedParameters`): `Promise`<`void`\>

#### Parameters

| Name                | Type                                      |
| :------------------ | :---------------------------------------- |
| `__namedParameters` | [`OrgInfo`](../../interfaces/org.OrgInfo) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Provisioner](../../interfaces/provisioning.Provisioner).[orgDeleted](../interfaces/provisioning.Provisioner.md#orgdeleted)

#### Defined in

[core/src/provisioning.ts:322](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L322)

---

### orgOwnerChanged

▸ **orgOwnerChanged**(`__namedParameters`, `prevOwner`, `newOwner`):
`Promise`<`void`\>

#### Parameters

| Name                | Type                                      |
| :------------------ | :---------------------------------------- |
| `__namedParameters` | [`OrgInfo`](../../interfaces/org.OrgInfo) |
| `prevOwner`         | `Object`                                  |
| `prevOwner.email`   | `string`                                  |
| `prevOwner.id?`     | `string`                                  |
| `newOwner`          | `Object`                                  |
| `newOwner.email`    | `string`                                  |
| `newOwner.id?`      | `string`                                  |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Provisioner](../../interfaces/provisioning.Provisioner).[orgOwnerChanged](../interfaces/provisioning.Provisioner.md#orgownerchanged)

#### Defined in

[core/src/provisioning.ts:336](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/provisioning.ts#L336)

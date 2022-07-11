---
title: "Module: config"
linkTitle: "config"
slug: "config"
---

## Classes

-   [Config](../../classes/config.Config)

## Type Aliases

### ConfigConstructor

Ƭ **ConfigConstructor**: (...`args`: `any`[]) =>
[`Config`](../../classes/config.Config)

#### Type declaration

• (...`args`)

Generic type representing the constructor of a class extending
[Config](../../classes/config.Config)

##### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Defined in

[core/src/config.ts:6](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/config.ts#L6)

## Functions

### ConfigParam

▸ **ConfigParam**(`type?`, `secret?`): (`proto`:
[`Config`](../../classes/config.Config), `prop`: `string`) => `void`

#### Parameters

| Name     | Type                                                                                                          | Default value |
| :------- | :------------------------------------------------------------------------------------------------------------ | :------------ |
| `type`   | `"string"` \| `"number"` \| `"boolean"` \| `"string[]"` \| [`ConfigConstructor`](config.md#configconstructor) | `"string"`    |
| `secret` | `boolean`                                                                                                     | `false`       |

#### Returns

`fn`

▸ (`proto`, `prop`): `void`

##### Parameters

| Name    | Type                                    |
| :------ | :-------------------------------------- |
| `proto` | [`Config`](../../classes/config.Config) |
| `prop`  | `string`                                |

##### Returns

`void`

#### Defined in

[core/src/config.ts:14](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/config.ts#L14)

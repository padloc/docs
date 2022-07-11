---
title: "Module: spec/spec"
linkTitle: "spec/spec"
slug: "spec_spec"
---

## Type Aliases

### Spec

Ƭ **Spec**: (`test`: (`name`: `string`, `fn`: () => `Promise`<`void`\>) => `void`, `assert`: `any`) => `void`

#### Type declaration

▸ (`test`, `assert`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `test` | (`name`: `string`, `fn`: () => `Promise`<`void`\>) => `void` |
| `assert` | `any` |

##### Returns

`void`

#### Defined in

[core/src/spec/spec.ts:4](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/spec/spec.ts#L4)

## Functions

### assertReject

▸ **assertReject**(`assert`, `fn`, `code`, `message?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `assert` | `any` |
| `fn` | () => `Promise`<`any`\> |
| `code` | `string` |
| `message?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/spec/spec.ts:17](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/spec/spec.ts#L17)

___

### assertResolve

▸ **assertResolve**(`assert`, `fn`, `message?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `assert` | `any` |
| `fn` | () => `Promise`<`any`\> |
| `message?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/spec/spec.ts:6](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/spec/spec.ts#L6)

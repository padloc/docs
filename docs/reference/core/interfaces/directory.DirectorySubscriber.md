---
title: "Interface: DirectorySubscriber"
linkTitle: "DirectorySubscriber"
slug: "directory.DirectorySubscriber"
---

[directory](../../modules/directory).DirectorySubscriber

## Implemented by

-   [`DirectorySync`](../../classes/directory.DirectorySync)

## Methods

### groupCreated

▸ **groupCreated**(`group`, `orgId`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                            |
| :------ | :---------------------------------------------- |
| `group` | [`DirectoryGroup`](../directory.DirectoryGroup) |
| `orgId` | `string`                                        |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/directory.ts:25](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/directory.ts#L25)

---

### groupDeleted

▸ **groupDeleted**(`group`, `orgId`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                            |
| :------ | :---------------------------------------------- |
| `group` | [`DirectoryGroup`](../directory.DirectoryGroup) |
| `orgId` | `string`                                        |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/directory.ts:27](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/directory.ts#L27)

---

### groupUpdated

▸ **groupUpdated**(`group`, `orgId`, `previousName?`): `Promise`<`void`\>

#### Parameters

| Name            | Type                                            |
| :-------------- | :---------------------------------------------- |
| `group`         | [`DirectoryGroup`](../directory.DirectoryGroup) |
| `orgId`         | `string`                                        |
| `previousName?` | `string`                                        |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/directory.ts:26](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/directory.ts#L26)

---

### userCreated

▸ **userCreated**(`user`, `orgId`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                          |
| :------ | :-------------------------------------------- |
| `user`  | [`DirectoryUser`](../directory.DirectoryUser) |
| `orgId` | `string`                                      |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/directory.ts:21](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/directory.ts#L21)

---

### userDeleted

▸ **userDeleted**(`user`, `orgId`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                          |
| :------ | :-------------------------------------------- |
| `user`  | [`DirectoryUser`](../directory.DirectoryUser) |
| `orgId` | `string`                                      |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/directory.ts:23](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/directory.ts#L23)

---

### userUpdated

▸ **userUpdated**(`user`, `orgId`, `previousEmail?`): `Promise`<`void`\>

#### Parameters

| Name             | Type                                          |
| :--------------- | :-------------------------------------------- |
| `user`           | [`DirectoryUser`](../directory.DirectoryUser) |
| `orgId`          | `string`                                      |
| `previousEmail?` | `string`                                      |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/directory.ts:22](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/directory.ts#L22)

---
title: "Class: DirectorySync"
linkTitle: "DirectorySync"
slug: "directory.DirectorySync"
---

[directory](../../modules/directory).DirectorySync

## Implements

-   [`DirectorySubscriber`](../../interfaces/directory.DirectorySubscriber)

## Constructors

### constructor

• **new DirectorySync**(`server`, `providers?`)

#### Parameters

| Name        | Type                                                                  | Default value |
| :---------- | :-------------------------------------------------------------------- | :------------ |
| `server`    | [`Server`](../server.Server)                                          | `undefined`   |
| `providers` | [`DirectoryProvider`](../../interfaces/directory.DirectoryProvider)[] | `[]`          |

#### Defined in

[core/src/directory.ts:35](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/directory.ts#L35)

## Properties

### server

• `Readonly` **server**: [`Server`](../server.Server)

## Methods

### \_getAuthForEmail

▸ `Private` **\_getAuthForEmail**(`email`): `Promise`<[`Auth`](../auth.Auth)\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `email` | `string` |

#### Returns

`Promise`<[`Auth`](../auth.Auth)\>

#### Defined in

[core/src/directory.ts:202](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/directory.ts#L202)

---

### groupCreated

▸ **groupCreated**(`group`, `orgId`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                                          |
| :------ | :------------------------------------------------------------ |
| `group` | [`DirectoryGroup`](../../interfaces/directory.DirectoryGroup) |
| `orgId` | `string`                                                      |

#### Returns

`Promise`<`void`\>

#### Implementation of

[DirectorySubscriber](../../interfaces/directory.DirectorySubscriber).[groupCreated](../interfaces/directory.DirectorySubscriber#groupcreated)

#### Defined in

[core/src/directory.ts:127](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/directory.ts#L127)

---

### groupDeleted

▸ **groupDeleted**(`group`, `orgId`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                                          |
| :------ | :------------------------------------------------------------ |
| `group` | [`DirectoryGroup`](../../interfaces/directory.DirectoryGroup) |
| `orgId` | `string`                                                      |

#### Returns

`Promise`<`void`\>

#### Implementation of

[DirectorySubscriber](../../interfaces/directory.DirectorySubscriber).[groupDeleted](../interfaces/directory.DirectorySubscriber#groupdeleted)

#### Defined in

[core/src/directory.ts:188](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/directory.ts#L188)

---

### groupUpdated

▸ **groupUpdated**(`group`, `orgId`, `previousName?`): `Promise`<`void`\>

#### Parameters

| Name            | Type                                                          |
| :-------------- | :------------------------------------------------------------ |
| `group`         | [`DirectoryGroup`](../../interfaces/directory.DirectoryGroup) |
| `orgId`         | `string`                                                      |
| `previousName?` | `string`                                                      |

#### Returns

`Promise`<`void`\>

#### Implementation of

[DirectorySubscriber](../../interfaces/directory.DirectorySubscriber).[groupUpdated](../interfaces/directory.DirectorySubscriber#groupupdated)

#### Defined in

[core/src/directory.ts:157](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/directory.ts#L157)

---

### userCreated

▸ **userCreated**(`user`, `orgId`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                                        |
| :------ | :---------------------------------------------------------- |
| `user`  | [`DirectoryUser`](../../interfaces/directory.DirectoryUser) |
| `orgId` | `string`                                                    |

#### Returns

`Promise`<`void`\>

#### Implementation of

[DirectorySubscriber](../../interfaces/directory.DirectorySubscriber).[userCreated](../interfaces/directory.DirectorySubscriber#usercreated)

#### Defined in

[core/src/directory.ts:41](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/directory.ts#L41)

---

### userDeleted

▸ **userDeleted**(`user`, `orgId`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                                        |
| :------ | :---------------------------------------------------------- |
| `user`  | [`DirectoryUser`](../../interfaces/directory.DirectoryUser) |
| `orgId` | `string`                                                    |

#### Returns

`Promise`<`void`\>

#### Implementation of

[DirectorySubscriber](../../interfaces/directory.DirectorySubscriber).[userDeleted](../interfaces/directory.DirectorySubscriber#userdeleted)

#### Defined in

[core/src/directory.ts:97](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/directory.ts#L97)

---

### userUpdated

▸ **userUpdated**(`user`, `orgId`, `previousEmail?`): `Promise`<`void`\>

#### Parameters

| Name             | Type                                                        |
| :--------------- | :---------------------------------------------------------- |
| `user`           | [`DirectoryUser`](../../interfaces/directory.DirectoryUser) |
| `orgId`          | `string`                                                    |
| `previousEmail?` | `string`                                                    |

#### Returns

`Promise`<`void`\>

#### Implementation of

[DirectorySubscriber](../../interfaces/directory.DirectorySubscriber).[userUpdated](../interfaces/directory.DirectorySubscriber#userupdated)

#### Defined in

[core/src/directory.ts:65](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/directory.ts#L65)

---
title: "Class: AppState"
linkTitle: "AppState"
slug: "app.AppState"
---

[app](../../modules/app).AppState

Application state

## Hierarchy

-   [`Storable`](../storage.Storable)

    ↳ **`AppState`**

## Constructors

### constructor

• **new AppState**()

#### Inherited from

[Storable](../storage.Storable).[constructor](../storage.Storable#constructor)

## Properties

### \_errors

• **\_errors**: [`Err`](../error.Err)[] = `[]`

#### Defined in

[core/src/app.ts:211](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L211)

---

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Storable](../storage.Storable).[\_propertySerializationOptions](../storage.Storable#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### account

• **account**: `null` \| [`Account`](../account.Account) = `null`

Currently logged in [Account](../account.Account)

#### Defined in

[core/src/app.ts:175](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L175)

---

### authInfo

• **authInfo**: `null` \| [`AuthInfo`](../api.AuthInfo) = `null`

Authentication Information, such as active sessions, trusted devices etc.

#### Defined in

[core/src/app.ts:179](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L179)

---

### context

• **context**: [`AppContext`](../../interfaces/app.AppContext) = `{}`

#### Defined in

[core/src/app.ts:198](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L198)

---

### device

• **device**: [`DeviceInfo`](../platform.DeviceInfo)

Info about current device

#### Defined in

[core/src/app.ts:167](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L167)

---

### id

• **id**: `string` = `"app-state"`

#### Overrides

[Storable](../storage.Storable).[id](../storage.Storable#id)

#### Defined in

[core/src/app.ts:155](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L155)

---

### index

• **index**: [`Index`](../app.Index)

#### Defined in

[core/src/app.ts:201](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L201)

---

### lastUsed

• **lastUsed**: `Map`<`string`, `Date`\>

IDs of most recently used items. The most recently used item is last

#### Defined in

[core/src/app.ts:209](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L209)

---

### offline

• **offline**: `boolean` = `false`

Whether the app doesn't have an internet connection at the moment

#### Defined in

[core/src/app.ts:193](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L193)

---

### orgs

• **orgs**: [`Org`](../org.Org)[] = `[]`

All organizations the current [account](../app.AppState#account) is a member of.

#### Defined in

[core/src/app.ts:183](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L183)

---

### rememberedMasterKey

• **rememberedMasterKey**: `null` \| [`StoredMasterKey`](../app.StoredMasterKey)
= `null`

#### Defined in

[core/src/app.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L196)

---

### session

• **session**: `null` \| [`Session`](../session.Session) = `null`

Current [Session](../session.Session)

#### Defined in

[core/src/app.ts:171](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L171)

---

### settings

• **settings**: [`Settings`](../app.Settings)

Application Settings

#### Defined in

[core/src/app.ts:159](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L159)

---

### stats

• **stats**: [`Stats`](../app.Stats)

Usage data

#### Defined in

[core/src/app.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L163)

---

### syncing

• **syncing**: `boolean` = `false`

Whether a sync is currently in process.

#### Defined in

[core/src/app.ts:190](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L190)

---

### vaults

• **vaults**: [`Vault`](../vault.Vault)[] = `[]`

All vaults the current [account](../app.AppState#account) has access to.

#### Defined in

[core/src/app.ts:187](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L187)

## Accessors

### kind

• `get` **kind**(): `string`

A string representing the objects "type", useful for segmenting storage, among
other things. Defaults to the lowercase class name, but can be overwritten by
subclasses

#### Returns

`string`

#### Inherited from

Storable.kind

#### Defined in

[core/src/encoding.ts:159](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L159)

---

### locked

• `get` **locked**(): `boolean`

Whether the app is in "locked" state

#### Returns

`boolean`

#### Defined in

[core/src/app.ts:233](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L233)

---

### loggedIn

• `get` **loggedIn**(): `boolean`

Whether a user is logged in

#### Returns

`boolean`

#### Defined in

[core/src/app.ts:238](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L238)

---

### tags

• `get` **tags**(): [`string`, `number`][]

All [Tag](../../modules/item#tag)s found within the users
[Vault](../vault.Vault)s

#### Returns

[`string`, `number`][]

#### Defined in

[core/src/app.ts:214](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/app.ts#L214)

## Methods

### \_fromRaw

▸ `Protected` **\_fromRaw**(`raw`): `void`

Restore values from a raw object. The default implementation simply copies over
all iterable properties from the base object. Overwrite this method for
properties that require special treatment

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

`void`

#### Inherited from

[Storable](../storage.Storable).[\_fromRaw](../storage.Storable#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](../app.AppState#toraw) on any properties that
are themselfes instances of [Serializable](../encoding.Serializable). This
method should be overwritten by subclasses if certain properties require special
treatment.

#### Parameters

| Name      | Type                    |
| :-------- | :---------------------- |
| `version` | `undefined` \| `string` |

#### Returns

`any`

#### Inherited from

[Storable](../storage.Storable).[\_toRaw](../storage.Storable#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`AppState`](../app.AppState)

Creates a deep clone of the object

#### Returns

[`AppState`](../app.AppState)

#### Inherited from

[Storable](../storage.Storable).[clone](../storage.Storable#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`AppState`](../app.AppState)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`AppState`](../app.AppState)

#### Inherited from

[Storable](../storage.Storable).[fromBytes](../storage.Storable#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`AppState`](../app.AppState)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`AppState`](../app.AppState)

#### Inherited from

[Storable](../storage.Storable).[fromJSON](../storage.Storable#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`AppState`](../app.AppState)

Restores propertiers from a raw object of the same form generated by
[toRaw](../app.AppState#toraw). The base implementation blindly copies over
values from the raw object via `Object.assign` so subclasses should explictly
process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../app.AppState#_fromraw) method to
implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`AppState`](../app.AppState)

#### Inherited from

[Storable](../storage.Storable).[fromRaw](../storage.Storable#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Inherited from

[Storable](../storage.Storable).[toBytes](../storage.Storable#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Inherited from

[Storable](../storage.Storable).[toJSON](../storage.Storable#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](../app.AppState#_toraw) for subclass-specific behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Inherited from

[Storable](../storage.Storable).[toRaw](../storage.Storable#toraw)

#### Defined in

[core/src/encoding.ts:179](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L179)

---

### validate

▸ **validate**(): `boolean`

This is called during deserialization and should verify that all properties have
been populated with values of the correct type. Subclasses should implement this
method based on their class structure.

#### Returns

`boolean`

#### Inherited from

[Storable](../storage.Storable).[validate](../storage.Storable#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

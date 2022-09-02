---
title: "Class: Auth"
linkTitle: "Auth"
slug: "auth.Auth"
---

[auth](../../modules/auth).Auth

Contains authentication data needed for SRP session negotiation

## Hierarchy

-   [`Serializable`](../encoding.Serializable)

    ↳ **`Auth`**

## Implements

-   [`Storable`](../storage.Storable)

## Constructors

### constructor

• **new Auth**(`email?`)

#### Parameters

| Name    | Type     | Default value |
| :------ | :------- | :------------ |
| `email` | `string` | `""`          |

#### Overrides

[Serializable](../encoding.Serializable).[constructor](../encoding.Serializable#constructor)

#### Defined in

[core/src/auth.ts:234](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L234)

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Implementation of

Storable.\_propertySerializationOptions

#### Inherited from

[Serializable](../encoding.Serializable).[\_propertySerializationOptions](../encoding.Serializable#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### account

• `Optional` **account**: `string` = `undefined`

Id of the [Account](../account.Account) the authentication data belongs to

#### Defined in

[core/src/auth.ts:184](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L184)

---

### accountStatus

• **accountStatus**: [`AccountStatus`](../../enums/auth.AccountStatus) =
`AccountStatus.Unregistered`

#### Defined in

[core/src/auth.ts:190](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L190)

---

### authRequests

• **authRequests**: [`AuthRequest`](../auth.AuthRequest)<`any`\>[] = `[]`

#### Defined in

[core/src/auth.ts:210](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L210)

---

### authenticators

• **authenticators**: [`Authenticator`](../auth.Authenticator)<`any`\>[] = `[]`

#### Defined in

[core/src/auth.ts:207](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L207)

---

### created

• **created**: `Date`

#### Defined in

[core/src/auth.ts:181](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L181)

---

### email

• **email**: `string` = `""`

---

### id

• **id**: `string` = `""`

#### Implementation of

Storable.id

#### Defined in

[core/src/auth.ts:178](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L178)

---

### invites

• **invites**: { `expires`: `string` ; `id`: `string` ; `orgId`: `string` ;
`orgName`: `string` }[] = `[]`

Invites to organizations

#### Defined in

[core/src/auth.ts:224](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L224)

---

### keyParams

• **keyParams**: [`PBKDF2Params`](../crypto.PBKDF2Params)

Key derivation params used by the client to compute session key from the users
master password

#### Defined in

[core/src/auth.ts:201](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L201)

---

### keyStoreEntries

• **keyStoreEntries**: [`KeyStoreEntryInfo`](../key_store.KeyStoreEntryInfo)[] =
`[]`

#### Defined in

[core/src/auth.ts:213](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L213)

---

### legacyData

• `Optional` **legacyData**: [`PBES2Container`](../container.PBES2Container)

#### Defined in

[core/src/auth.ts:232](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L232)

---

### mfaOrder

• **mfaOrder**: `string`[] = `[]`

#### Defined in

[core/src/auth.ts:221](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L221)

---

### sessions

• **sessions**: [`SessionInfo`](../session.SessionInfo)[] = `[]`

#### Defined in

[core/src/auth.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L216)

---

### srpSessions

• **srpSessions**: [`SRPSession`](../srp.SRPSession)[] = `[]`

#### Defined in

[core/src/auth.ts:219](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L219)

---

### trustedDevices

• **trustedDevices**: [`DeviceInfo`](../platform.DeviceInfo)[] = `[]`

#### Defined in

[core/src/auth.ts:204](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L204)

---

### verifier

• `Optional` **verifier**: `Uint8Array`

Verifier used for SRP session negotiation

#### Defined in

[core/src/auth.ts:194](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L194)

## Accessors

### accountId

• `get` **accountId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[core/src/auth.ts:186](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L186)

---

### kind

• `get` **kind**(): `string`

A string representing the objects "type", useful for segmenting storage, among
other things. Defaults to the lowercase class name, but can be overwritten by
subclasses

#### Returns

`string`

#### Implementation of

Storable.kind

#### Inherited from

Serializable.kind

#### Defined in

[core/src/encoding.ts:159](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L159)

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

#### Implementation of

Storable.\_fromRaw

#### Inherited from

[Serializable](../encoding.Serializable).[\_fromRaw](../encoding.Serializable#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](../auth.Auth#toraw) on any properties that
are themselfes instances of [Serializable](../encoding.Serializable). This
method should be overwritten by subclasses if certain properties require special
treatment.

#### Parameters

| Name      | Type                    |
| :-------- | :---------------------- |
| `version` | `undefined` \| `string` |

#### Returns

`any`

#### Implementation of

Storable.\_toRaw

#### Inherited from

[Serializable](../encoding.Serializable).[\_toRaw](../encoding.Serializable#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`Auth`](../auth.Auth)

Creates a deep clone of the object

#### Returns

[`Auth`](../auth.Auth)

#### Implementation of

Storable.clone

#### Inherited from

[Serializable](../encoding.Serializable).[clone](../encoding.Serializable#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`Auth`](../auth.Auth)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`Auth`](../auth.Auth)

#### Implementation of

Storable.fromBytes

#### Inherited from

[Serializable](../encoding.Serializable).[fromBytes](../encoding.Serializable#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`Auth`](../auth.Auth)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`Auth`](../auth.Auth)

#### Implementation of

Storable.fromJSON

#### Inherited from

[Serializable](../encoding.Serializable).[fromJSON](../encoding.Serializable#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`Auth`](../auth.Auth)

Restores propertiers from a raw object of the same form generated by
[toRaw](../auth.Auth#toraw). The base implementation blindly copies over values
from the raw object via `Object.assign` so subclasses should explictly process
any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../auth.Auth#_fromraw) method to
implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`Auth`](../auth.Auth)

#### Implementation of

Storable.fromRaw

#### Inherited from

[Serializable](../encoding.Serializable).[fromRaw](../encoding.Serializable#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### getAuthKey

▸ **getAuthKey**(`password`): `Promise`<`Uint8Array`\>

Generate the session key from the users master `password`

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `password` | `string` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/auth.ts:245](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L245)

---

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/auth.ts:238](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/auth.ts#L238)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Implementation of

Storable.toBytes

#### Inherited from

[Serializable](../encoding.Serializable).[toBytes](../encoding.Serializable#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Implementation of

Storable.toJSON

#### Inherited from

[Serializable](../encoding.Serializable).[toJSON](../encoding.Serializable#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](../auth.Auth#_toraw) for subclass-specific behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Implementation of

Storable.toRaw

#### Inherited from

[Serializable](../encoding.Serializable).[toRaw](../encoding.Serializable#toraw)

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

#### Implementation of

Storable.validate

#### Inherited from

[Serializable](../encoding.Serializable).[validate](../encoding.Serializable#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

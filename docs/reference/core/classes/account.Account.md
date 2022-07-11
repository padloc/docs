---
title: "Class: Account"
linkTitle: "Account"
slug: "account.Account"
---

[account](../../modules/account).Account

The `Account` object represents an individual Padloc user and holds general
account information as well as cryptographic keys necessary for accessing
[[Vaults]] and signing/verifying [Org](../org.Org)anization details.

The [privateKey](account.Account.md#privatekey) and
[signingKey](account.Account.md#signingkey) properties are considered secret and
therefore need to be encrypted at rest. For this, the
[Account](../account.Account) object serves as a
[PBES2Container](../container.PBES2Container) which is unlocked by the users
**master password**.

## Hierarchy

-   [`PBES2Container`](../container.PBES2Container)

    ↳ **`Account`**

    ↳↳ [`UnlockedAccount`](../../interfaces/account.UnlockedAccount)

## Implements

-   [`Storable`](../storage.Storable)

## Constructors

### constructor

• **new Account**()

#### Inherited from

[PBES2Container](../container.PBES2Container).[constructor](container.PBES2Container.md#constructor)

## Properties

### \_key

• `Protected` `Optional` **\_key**: `Uint8Array`

The key used for encryption. Sub classes must set this property in the
[unlock](account.Account.md#unlock) method.

#### Inherited from

[PBES2Container](../container.PBES2Container).[\_key](container.PBES2Container.md#_key)

#### Defined in

[core/src/container.ts:33](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L33)

---

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Implementation of

Storable.\_propertySerializationOptions

#### Inherited from

[PBES2Container](../container.PBES2Container).[\_propertySerializationOptions](container.PBES2Container.md#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### created

• **created**: `Date`

When the account was created

#### Defined in

[core/src/account.ts:55](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L55)

---

### email

• **email**: `string` = `""`

The users email address

#### Defined in

[core/src/account.ts:48](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L48)

---

### encryptedData

• `Optional` **encryptedData**: `Uint8Array`

Encrypted data

#### Inherited from

[PBES2Container](../container.PBES2Container).[encryptedData](container.PBES2Container.md#encrypteddata)

#### Defined in

[core/src/container.ts:28](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L28)

---

### encryptionParams

• **encryptionParams**: [`AESEncryptionParams`](../crypto.AESEncryptionParams)

Parameters used for encryption of content data

#### Inherited from

[PBES2Container](../container.PBES2Container).[encryptionParams](container.PBES2Container.md#encryptionparams)

#### Defined in

[core/src/container.ts:24](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L24)

---

### favorites

• **favorites**: `Set`<`string`\>

#### Defined in

[core/src/account.ts:103](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L103)

---

### id

• **id**: `string` = `""`

Unique account ID

#### Implementation of

Storable.id

#### Defined in

[core/src/account.ts:45](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L45)

---

### keyParams

• **keyParams**: [`PBKDF2Params`](../crypto.PBKDF2Params)

Parameters used for key derivation

#### Inherited from

[PBES2Container](../container.PBES2Container).[keyParams](container.PBES2Container.md#keyparams)

#### Defined in

[core/src/container.ts:110](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L110)

---

### mainVault

• **mainVault**: `Object`

ID of the accounts main or "private" [Vault](../vault.Vault).

#### Type declaration

| Name        | Type     |
| :---------- | :------- |
| `id`        | `string` |
| `name?`     | `string` |
| `revision?` | `string` |

#### Defined in

[core/src/account.ts:87](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L87)

---

### name

• **name**: `string` = `""`

The users display name

#### Defined in

[core/src/account.ts:51](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L51)

---

### orgs

• **orgs**: [`OrgInfo`](../../interfaces/org.OrgInfo)[] = `[]`

All organizations this account is a member of

#### Defined in

[core/src/account.ts:94](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L94)

---

### privateKey

• `Optional` **privateKey**: `Uint8Array`

The accounts private key

**`secret`** **IMPORTANT**: This property is considered **secret** and should
never stored or transmitted in plain text

#### Defined in

[core/src/account.ts:73](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L73)

---

### publicKey

• **publicKey**: `Uint8Array`

The accounts public key

#### Defined in

[core/src/account.ts:63](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L63)

---

### revision

• **revision**: `string` = `""`

Revision id used for ensuring continuity when synchronizing the account object
between client and server

#### Defined in

[core/src/account.ts:100](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L100)

---

### signingKey

• `Optional` **signingKey**: `Uint8Array`

HMAC key used for signing and verifying organization details

**IMPORTANT**: This property is considered **secret** and should never stored or
transmitted in plain text

**`secret`**

#### Defined in

[core/src/account.ts:84](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L84)

---

### updated

• **updated**: `Date`

when the account was last updated

#### Defined in

[core/src/account.ts:59](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L59)

## Accessors

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

PBES2Container.kind

#### Defined in

[core/src/encoding.ts:159](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L159)

---

### locked

• `get` **locked**(): `boolean`

Whether or not this Account object is current "locked" or, in other words,
whether the `privateKey` and `signingKey` properties have been decrypted.

#### Returns

`boolean`

#### Defined in

[core/src/account.ts:109](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L109)

---

### masterKey

• `get` **masterKey**(): `undefined` \| `Uint8Array`

#### Returns

`undefined` \| `Uint8Array`

#### Defined in

[core/src/account.ts:113](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L113)

• `set` **masterKey**(`key`): `void`

#### Parameters

| Name  | Type                        |
| :---- | :-------------------------- |
| `key` | `undefined` \| `Uint8Array` |

#### Returns

`void`

#### Defined in

[core/src/account.ts:117](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L117)

## Methods

### \_commitSecrets

▸ `Private` **\_commitSecrets**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/account.ts:253](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L253)

---

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

[PBES2Container](../container.PBES2Container).[\_fromRaw](container.PBES2Container.md#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_loadSecrets

▸ `Private` **\_loadSecrets**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/account.ts:245](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L245)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](account.Account.md#toraw) on any properties
that are themselfes instances of [Serializable](../encoding.Serializable). This
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

[PBES2Container](../container.PBES2Container).[\_toRaw](container.PBES2Container.md#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`Account`](../account.Account)

Creates a deep clone of the object

#### Returns

[`Account`](../account.Account)

#### Implementation of

Storable.clone

#### Overrides

[PBES2Container](../container.PBES2Container).[clone](container.PBES2Container.md#clone)

#### Defined in

[core/src/account.ts:168](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L168)

---

### copySecrets

▸ **copySecrets**(`account`): `void`

#### Parameters

| Name      | Type                            |
| :-------- | :------------------------------ |
| `account` | [`Account`](../account.Account) |

#### Returns

`void`

#### Defined in

[core/src/account.ts:226](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L226)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`Account`](../account.Account)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`Account`](../account.Account)

#### Implementation of

Storable.fromBytes

#### Inherited from

[PBES2Container](../container.PBES2Container).[fromBytes](container.PBES2Container.md#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`Account`](../account.Account)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`Account`](../account.Account)

#### Implementation of

Storable.fromJSON

#### Inherited from

[PBES2Container](../container.PBES2Container).[fromJSON](container.PBES2Container.md#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`Account`](../account.Account)

Restores propertiers from a raw object of the same form generated by
[toRaw](account.Account.md#toraw). The base implementation blindly copies over
values from the raw object via `Object.assign` so subclasses should explictly
process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](account.Account.md#_fromraw) method to
implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`Account`](../account.Account)

#### Implementation of

Storable.fromRaw

#### Inherited from

[PBES2Container](../container.PBES2Container).[fromRaw](container.PBES2Container.md#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### getData

▸ **getData**(): `Promise`<`Uint8Array`\>

Decrypts and extracts the plain text data from the container. This will usually
require unlocking the container first.

#### Returns

`Promise`<`Uint8Array`\>

#### Inherited from

[PBES2Container](../container.PBES2Container).[getData](container.PBES2Container.md#getdata)

#### Defined in

[core/src/container.ts:61](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L61)

---

### initialize

▸ **initialize**(`password`): `Promise`<`void`\>

Generates the accounts [privateKey](account.Account.md#privatekey),
[publicKey](account.Account.md#publickey) and
[signingKey](account.Account.md#signingkey) and encrypts
[privateKey](account.Account.md#privatekey) and [[singingKey]] using the master
password.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `password` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/account.ts:125](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L125)

---

### lock

▸ **lock**(): `void`

"Locks" the account by deleting all sensitive data from the object

#### Returns

`void`

#### Overrides

[PBES2Container](../container.PBES2Container).[lock](container.PBES2Container.md#lock)

#### Defined in

[core/src/account.ts:161](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L161)

---

### setData

▸ **setData**(`data`): `Promise`<`void`\>

Encrypts the provided `data` and stores it in the container

#### Parameters

| Name   | Type         |
| :----- | :----------- |
| `data` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[PBES2Container](../container.PBES2Container).[setData](container.PBES2Container.md#setdata)

#### Defined in

[core/src/container.ts:38](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L38)

---

### setPassword

▸ **setPassword**(`password`): `Promise`<`void`\>

Updates the master password by reencrypting the
[privateKey](account.Account.md#privatekey) and
[signingKey](account.Account.md#signingkey) properties

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `password` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/account.ts:134](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L134)

---

### signOrg

▸ **signOrg**(`__namedParameters`): `Promise`<`Uint8Array`\>

Creates a signature that can be used later to verify an organizations id and
public key

#### Parameters

| Name                          | Type         |
| :---------------------------- | :----------- |
| `__namedParameters`           | `Object`     |
| `__namedParameters.id`        | `string`     |
| `__namedParameters.publicKey` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/account.ts:181](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L181)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Implementation of

Storable.toBytes

#### Inherited from

[PBES2Container](../container.PBES2Container).[toBytes](container.PBES2Container.md#tobytes)

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

[PBES2Container](../container.PBES2Container).[toJSON](container.PBES2Container.md#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](account.Account.md#_toraw) for subclass-specific
behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Implementation of

Storable.toRaw

#### Inherited from

[PBES2Container](../container.PBES2Container).[toRaw](container.PBES2Container.md#toraw)

#### Defined in

[core/src/encoding.ts:179](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L179)

---

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[core/src/account.ts:174](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L174)

---

### toggleFavorite

▸ **toggleFavorite**(`id`, `favorite`): `Promise`<`void`\>

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `id`       | `string`  |
| `favorite` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/account.ts:221](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L221)

---

### unlock

▸ **unlock**(`password`): `Promise`<`void`\>

"Unlocks" the account by decrypting and extracting
[privateKey](account.Account.md#privatekey) and
[signingKey](account.Account.md#signingkey) from
[encryptedData](account.Account.md#encrypteddata)

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `password` | `string` |

#### Returns

`Promise`<`void`\>

#### Overrides

[PBES2Container](../container.PBES2Container).[unlock](container.PBES2Container.md#unlock)

#### Defined in

[core/src/account.ts:144](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L144)

---

### unlockWithMasterKey

▸ **unlockWithMasterKey**(`key`): `Promise`<`void`\>

Unlocks the account by providing the encryption key directly rather than
deriving it fro the master password

#### Parameters

| Name  | Type         |
| :---- | :----------- |
| `key` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/account.ts:153](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L153)

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

#### Overrides

[PBES2Container](../container.PBES2Container).[validate](container.PBES2Container.md#validate)

#### Defined in

[core/src/account.ts:233](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L233)

---

### verifyOrg

▸ **verifyOrg**(`org`): `Promise`<`void`\>

Verifies an organizations id an public key, using the signature stored in the
[Member](../enums/org.OrgRole.md#member) object associated with the account.

#### Parameters

| Name  | Type                |
| :---- | :------------------ |
| `org` | [`Org`](../org.Org) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/account.ts:192](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L192)

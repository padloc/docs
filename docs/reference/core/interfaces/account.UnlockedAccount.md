---
title: "Interface: UnlockedAccount"
linkTitle: "UnlockedAccount"
slug: "account.UnlockedAccount"
---

[account](../../modules/account).UnlockedAccount

## Hierarchy

-   [`Account`](../../classes/account.Account)

    ↳ **`UnlockedAccount`**

## Properties

### \_key

• `Protected` `Optional` **\_key**: `Uint8Array`

The key used for encryption. Sub classes must set this property in the
[unlock](../account.UnlockedAccount#unlock) method.

#### Inherited from

[Account](../../classes/account.Account).[\_key](../classes/account.Account#_key)

#### Defined in

[core/src/container.ts:33](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L33)

---

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../encoding.SerializationOptions)[]

#### Inherited from

[Account](../../classes/account.Account).[\_propertySerializationOptions](../classes/account.Account#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### created

• **created**: `Date`

When the account was created

#### Inherited from

[Account](../../classes/account.Account).[created](../classes/account.Account#created)

#### Defined in

[core/src/account.ts:55](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L55)

---

### email

• **email**: `string` = `""`

The users email address

#### Inherited from

[Account](../../classes/account.Account).[email](../classes/account.Account#email)

#### Defined in

[core/src/account.ts:48](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L48)

---

### encryptedData

• `Optional` **encryptedData**: `Uint8Array`

Encrypted data

#### Inherited from

[Account](../../classes/account.Account).[encryptedData](../classes/account.Account#encrypteddata)

#### Defined in

[core/src/container.ts:28](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L28)

---

### encryptionParams

• **encryptionParams**:
[`AESEncryptionParams`](../../classes/crypto.AESEncryptionParams)

Parameters used for encryption of content data

#### Inherited from

[Account](../../classes/account.Account).[encryptionParams](../classes/account.Account#encryptionparams)

#### Defined in

[core/src/container.ts:24](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L24)

---

### favorites

• **favorites**: `Set`<`string`\>

#### Inherited from

[Account](../../classes/account.Account).[favorites](../classes/account.Account#favorites)

#### Defined in

[core/src/account.ts:103](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L103)

---

### id

• **id**: `string` = `""`

Unique account ID

#### Inherited from

[Account](../../classes/account.Account).[id](../classes/account.Account#id)

#### Defined in

[core/src/account.ts:45](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L45)

---

### keyParams

• **keyParams**: [`PBKDF2Params`](../../classes/crypto.PBKDF2Params)

Parameters used for key derivation

#### Inherited from

[Account](../../classes/account.Account).[keyParams](../classes/account.Account#keyparams)

#### Defined in

[core/src/container.ts:110](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L110)

---

### mainVault

• **mainVault**: `Object`

ID of the accounts main or "private" [Vault](../../classes/vault.Vault).

#### Type declaration

| Name        | Type     |
| :---------- | :------- |
| `id`        | `string` |
| `name?`     | `string` |
| `revision?` | `string` |

#### Inherited from

[Account](../../classes/account.Account).[mainVault](../classes/account.Account#mainvault)

#### Defined in

[core/src/account.ts:87](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L87)

---

### name

• **name**: `string` = `""`

The users display name

#### Inherited from

[Account](../../classes/account.Account).[name](../classes/account.Account#name)

#### Defined in

[core/src/account.ts:51](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L51)

---

### orgs

• **orgs**: [`OrgInfo`](../org.OrgInfo)[] = `[]`

All organizations this account is a member of

#### Inherited from

[Account](../../classes/account.Account).[orgs](../classes/account.Account#orgs)

#### Defined in

[core/src/account.ts:94](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L94)

---

### privateKey

• **privateKey**: `Uint8Array`

The accounts private key

#### Overrides

[Account](../../classes/account.Account).[privateKey](../classes/account.Account#privatekey)

#### Defined in

[core/src/account.ts:260](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L260)

---

### publicKey

• **publicKey**: `Uint8Array`

The accounts public key

#### Inherited from

[Account](../../classes/account.Account).[publicKey](../classes/account.Account#publickey)

#### Defined in

[core/src/account.ts:63](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L63)

---

### revision

• **revision**: `string` = `""`

Revision id used for ensuring continuity when synchronizing the account object
between client and server

#### Inherited from

[Account](../../classes/account.Account).[revision](../classes/account.Account#revision)

#### Defined in

[core/src/account.ts:100](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L100)

---

### signingKey

• **signingKey**: `Uint8Array`

HMAC key used for signing and verifying organization details

**IMPORTANT**: This property is considered **secret** and should never stored or
transmitted in plain text

#### Overrides

[Account](../../classes/account.Account).[signingKey](../classes/account.Account#signingkey)

#### Defined in

[core/src/account.ts:261](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L261)

---

### updated

• **updated**: `Date`

when the account was last updated

#### Inherited from

[Account](../../classes/account.Account).[updated](../classes/account.Account#updated)

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

#### Inherited from

Account.kind

#### Defined in

[core/src/encoding.ts:159](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L159)

---

### locked

• `get` **locked**(): `boolean`

Whether or not this Account object is current "locked" or, in other words,
whether the `privateKey` and `signingKey` properties have been decrypted.

#### Returns

`boolean`

#### Inherited from

Account.locked

#### Defined in

[core/src/account.ts:109](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L109)

---

### masterKey

• `get` **masterKey**(): `undefined` \| `Uint8Array`

#### Returns

`undefined` \| `Uint8Array`

#### Inherited from

Account.masterKey

#### Defined in

[core/src/account.ts:113](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L113)

• `set` **masterKey**(`key`): `void`

#### Parameters

| Name  | Type                        |
| :---- | :-------------------------- |
| `key` | `undefined` \| `Uint8Array` |

#### Returns

`void`

#### Inherited from

Account.masterKey

#### Defined in

[core/src/account.ts:117](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L117)

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

[Account](../../classes/account.Account).[\_fromRaw](../classes/account.Account#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](../account.UnlockedAccount#toraw) on any
properties that are themselfes instances of
[Serializable](../../classes/encoding.Serializable). This method should be
overwritten by subclasses if certain properties require special treatment.

#### Parameters

| Name      | Type                    |
| :-------- | :---------------------- |
| `version` | `undefined` \| `string` |

#### Returns

`any`

#### Inherited from

[Account](../../classes/account.Account).[\_toRaw](../classes/account.Account#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`UnlockedAccount`](../account.UnlockedAccount)

Creates a deep clone of the object

#### Returns

[`UnlockedAccount`](../account.UnlockedAccount)

#### Inherited from

[Account](../../classes/account.Account).[clone](../classes/account.Account#clone)

#### Defined in

[core/src/account.ts:168](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L168)

---

### copySecrets

▸ **copySecrets**(`account`): `void`

#### Parameters

| Name      | Type                                       |
| :-------- | :----------------------------------------- |
| `account` | [`Account`](../../classes/account.Account) |

#### Returns

`void`

#### Inherited from

[Account](../../classes/account.Account).[copySecrets](../classes/account.Account#copysecrets)

#### Defined in

[core/src/account.ts:226](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L226)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`UnlockedAccount`](../account.UnlockedAccount)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`UnlockedAccount`](../account.UnlockedAccount)

#### Inherited from

[Account](../../classes/account.Account).[fromBytes](../classes/account.Account#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`UnlockedAccount`](../account.UnlockedAccount)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`UnlockedAccount`](../account.UnlockedAccount)

#### Inherited from

[Account](../../classes/account.Account).[fromJSON](../classes/account.Account#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`UnlockedAccount`](../account.UnlockedAccount)

Restores propertiers from a raw object of the same form generated by
[toRaw](../account.UnlockedAccount#toraw). The base implementation blindly
copies over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../account.UnlockedAccount#_fromraw)
method to implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`UnlockedAccount`](../account.UnlockedAccount)

#### Inherited from

[Account](../../classes/account.Account).[fromRaw](../classes/account.Account#fromraw)

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

[Account](../../classes/account.Account).[getData](../classes/account.Account#getdata)

#### Defined in

[core/src/container.ts:61](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L61)

---

### initialize

▸ **initialize**(`password`): `Promise`<`void`\>

Generates the accounts [privateKey](../account.UnlockedAccount#privatekey),
[publicKey](../account.UnlockedAccount#publickey) and
[signingKey](../account.UnlockedAccount#signingkey) and encrypts
[privateKey](../account.UnlockedAccount#privatekey) and [[singingKey]] using the
master password.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `password` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Account](../../classes/account.Account).[initialize](../classes/account.Account#initialize)

#### Defined in

[core/src/account.ts:125](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L125)

---

### lock

▸ **lock**(): `void`

"Locks" the account by deleting all sensitive data from the object

#### Returns

`void`

#### Inherited from

[Account](../../classes/account.Account).[lock](../classes/account.Account#lock)

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

[Account](../../classes/account.Account).[setData](../classes/account.Account#setdata)

#### Defined in

[core/src/container.ts:38](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L38)

---

### setPassword

▸ **setPassword**(`password`): `Promise`<`void`\>

Updates the master password by reencrypting the
[privateKey](../account.UnlockedAccount#privatekey) and
[signingKey](../account.UnlockedAccount#signingkey) properties

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `password` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Account](../../classes/account.Account).[setPassword](../classes/account.Account#setpassword)

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

#### Inherited from

[Account](../../classes/account.Account).[signOrg](../classes/account.Account#signorg)

#### Defined in

[core/src/account.ts:181](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L181)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Inherited from

[Account](../../classes/account.Account).[toBytes](../classes/account.Account#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Inherited from

[Account](../../classes/account.Account).[toJSON](../classes/account.Account#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](../account.UnlockedAccount#_toraw) for subclass-specific
behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Inherited from

[Account](../../classes/account.Account).[toRaw](../classes/account.Account#toraw)

#### Defined in

[core/src/encoding.ts:179](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L179)

---

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Account](../../classes/account.Account).[toString](../classes/account.Account#tostring)

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

#### Inherited from

[Account](../../classes/account.Account).[toggleFavorite](../classes/account.Account#togglefavorite)

#### Defined in

[core/src/account.ts:221](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L221)

---

### unlock

▸ **unlock**(`password`): `Promise`<`void`\>

"Unlocks" the account by decrypting and extracting
[privateKey](../account.UnlockedAccount#privatekey) and
[signingKey](../account.UnlockedAccount#signingkey) from
[encryptedData](../account.UnlockedAccount#encrypteddata)

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `password` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Account](../../classes/account.Account).[unlock](../classes/account.Account#unlock)

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

#### Inherited from

[Account](../../classes/account.Account).[unlockWithMasterKey](../classes/account.Account#unlockwithmasterkey)

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

#### Inherited from

[Account](../../classes/account.Account).[validate](../classes/account.Account#validate)

#### Defined in

[core/src/account.ts:233](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L233)

---

### verifyOrg

▸ **verifyOrg**(`org`): `Promise`<`void`\>

Verifies an organizations id an public key, using the signature stored in the
[Member](../enums/org.OrgRole#member) object associated with the account.

#### Parameters

| Name  | Type                           |
| :---- | :----------------------------- |
| `org` | [`Org`](../../classes/org.Org) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Account](../../classes/account.Account).[verifyOrg](../classes/account.Account#verifyorg)

#### Defined in

[core/src/account.ts:192](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/account.ts#L192)

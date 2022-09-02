---
title: "Class: Vault"
linkTitle: "Vault"
slug: "vault.Vault"
---

[vault](../../modules/vault).Vault

Container for securely storing a collection of [VaultItem](../item.VaultItem)s.
Vaults can be owned by a single user ("private" vaults) or shared between
multiple users ("shared" vaults). Shared vaults are provisioned and managed
through [Org](../org.Org)s.

## Hierarchy

-   [`SharedContainer`](../container.SharedContainer)

    ↳ **`Vault`**

## Implements

-   [`Storable`](../storage.Storable)

## Constructors

### constructor

• **new Vault**()

#### Inherited from

[SharedContainer](../container.SharedContainer).[constructor](../container.SharedContainer#constructor)

## Properties

### \_key

• `Protected` `Optional` **\_key**: `Uint8Array`

The key used for encryption. Sub classes must set this property in the
[unlock](../vault.Vault#unlock) method.

#### Inherited from

[SharedContainer](../container.SharedContainer).[\_key](../container.SharedContainer#_key)

#### Defined in

[core/src/container.ts:33](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L33)

---

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Implementation of

Storable.\_propertySerializationOptions

#### Inherited from

[SharedContainer](../container.SharedContainer).[\_propertySerializationOptions](../container.SharedContainer#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### accessors

• **accessors**: [`Accessor`](../container.Accessor)[] = `[]`

The ids and encrypted keys of all accessors

#### Inherited from

[SharedContainer](../container.SharedContainer).[accessors](../container.SharedContainer#accessors)

#### Defined in

[core/src/container.ts:159](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L159)

---

### created

• **created**: `Date`

Time of creation

#### Defined in

[core/src/vault.ts:32](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/vault.ts#L32)

---

### encryptedData

• `Optional` **encryptedData**: `Uint8Array`

Encrypted data

#### Inherited from

[SharedContainer](../container.SharedContainer).[encryptedData](../container.SharedContainer#encrypteddata)

#### Defined in

[core/src/container.ts:28](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L28)

---

### encryptionParams

• **encryptionParams**: [`AESEncryptionParams`](../crypto.AESEncryptionParams)

Parameters used for encryption of content data

#### Inherited from

[SharedContainer](../container.SharedContainer).[encryptionParams](../container.SharedContainer#encryptionparams)

#### Defined in

[core/src/container.ts:24](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L24)

---

### error

• `Optional` **error**: [`Err`](../error.Err)

#### Defined in

[core/src/vault.ts:56](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/vault.ts#L56)

---

### id

• **id**: `string` = `""`

unique identifier

#### Implementation of

Storable.id

#### Defined in

[core/src/vault.ts:19](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/vault.ts#L19)

---

### items

• **items**: [`VaultItemCollection`](../collection.VaultItemCollection)

A collection [VaultItem](../item.VaultItem)s representing the senstive data
store in this vault

**`secret`**

**IMPORTANT**: This property is considered **secret** and should never stored or
transmitted in plain text

#### Defined in

[core/src/vault.ts:53](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/vault.ts#L53)

---

### keyParams

• **keyParams**: [`RSAEncryptionParams`](../crypto.RSAEncryptionParams)

Parameters used to wrap the shared encryption key

#### Inherited from

[SharedContainer](../container.SharedContainer).[keyParams](../container.SharedContainer#keyparams)

#### Defined in

[core/src/container.ts:155](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L155)

---

### name

• **name**: `string` = `""`

Vault name

#### Defined in

[core/src/vault.ts:25](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/vault.ts#L25)

---

### org

• `Optional` **org**: [`OrgInfo`](../../interfaces/org.OrgInfo) = `undefined`

The [Org](../org.Org) this vault belongs to (if a shared vault)

#### Defined in

[core/src/vault.ts:22](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/vault.ts#L22)

---

### owner

• **owner**: `string` = `""`

The vault owner (the [Account](../account.Account) that created this vault)

#### Defined in

[core/src/vault.ts:28](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/vault.ts#L28)

---

### revision

• **revision**: `string` = `""`

Revision id used for ensuring continuity when synchronizing the vault object
between client and server

#### Defined in

[core/src/vault.ts:42](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/vault.ts#L42)

---

### updated

• **updated**: `Date`

Time of last update

#### Defined in

[core/src/vault.ts:36](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/vault.ts#L36)

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

SharedContainer.kind

#### Defined in

[core/src/encoding.ts:159](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L159)

---

### label

• `get` **label**(): `string`

Convenience getter for getting a display label truncated to a certain maximum
length

#### Returns

`string`

#### Defined in

[core/src/vault.ts:61](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/vault.ts#L61)

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

[SharedContainer](../container.SharedContainer).[\_fromRaw](../container.SharedContainer#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](../vault.Vault#toraw) on any properties that
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

[SharedContainer](../container.SharedContainer).[\_toRaw](../container.SharedContainer#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`Vault`](../vault.Vault)

Creates a deep clone of the object

#### Returns

[`Vault`](../vault.Vault)

#### Implementation of

Storable.clone

#### Overrides

[SharedContainer](../container.SharedContainer).[clone](../container.SharedContainer#clone)

#### Defined in

[core/src/vault.ts:110](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/vault.ts#L110)

---

### commit

▸ **commit**(): `Promise`<`void`\>

Commit changes to `items` by reencrypting the data.

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/vault.ts:88](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/vault.ts#L88)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`Vault`](../vault.Vault)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`Vault`](../vault.Vault)

#### Implementation of

Storable.fromBytes

#### Inherited from

[SharedContainer](../container.SharedContainer).[fromBytes](../container.SharedContainer#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`Vault`](../vault.Vault)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`Vault`](../vault.Vault)

#### Implementation of

Storable.fromJSON

#### Inherited from

[SharedContainer](../container.SharedContainer).[fromJSON](../container.SharedContainer#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`Vault`](../vault.Vault)

Restores propertiers from a raw object of the same form generated by
[toRaw](../vault.Vault#toraw). The base implementation blindly copies over
values from the raw object via `Object.assign` so subclasses should explictly
process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../vault.Vault#_fromraw) method to
implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`Vault`](../vault.Vault)

#### Implementation of

Storable.fromRaw

#### Inherited from

[SharedContainer](../container.SharedContainer).[fromRaw](../container.SharedContainer#fromraw)

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

[SharedContainer](../container.SharedContainer).[getData](../container.SharedContainer#getdata)

#### Defined in

[core/src/container.ts:61](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L61)

---

### lock

▸ **lock**(): `Promise`<`void`\>

Locks the container, removing the possibility to extract the plain text data via
[getData](../vault.Vault#getdata) until the container is unlocked again.
Subclasses extending this class must take care to delete any keys or other
sensitive data that may have been stored temporarily after unlocking the
container.

#### Returns

`Promise`<`void`\>

#### Overrides

[SharedContainer](../container.SharedContainer).[lock](../container.SharedContainer#lock)

#### Defined in

[core/src/vault.ts:80](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/vault.ts#L80)

---

### merge

▸ **merge**(`vault`): `void`

Merges in changes from another `vault`. This requires both vaults to be
unlocked.

#### Parameters

| Name    | Type                      |
| :------ | :------------------------ |
| `vault` | [`Vault`](../vault.Vault) |

#### Returns

`void`

#### Defined in

[core/src/vault.ts:95](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/vault.ts#L95)

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

[SharedContainer](../container.SharedContainer).[setData](../container.SharedContainer#setdata)

#### Defined in

[core/src/container.ts:38](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L38)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Implementation of

Storable.toBytes

#### Inherited from

[SharedContainer](../container.SharedContainer).[toBytes](../container.SharedContainer#tobytes)

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

[SharedContainer](../container.SharedContainer).[toJSON](../container.SharedContainer#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](../vault.Vault#_toraw) for subclass-specific behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Implementation of

Storable.toRaw

#### Inherited from

[SharedContainer](../container.SharedContainer).[toRaw](../container.SharedContainer#toraw)

#### Defined in

[core/src/encoding.ts:179](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L179)

---

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[core/src/vault.ts:106](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/vault.ts#L106)

---

### unlock

▸ **unlock**(`account`): `Promise`<`void`\>

Unlocks the vault with the given `account`, decrypting the data stored in the
vault and populating the [items](../vault.Vault#items) property. For this to be
successful, the `account` object needs to be unlocked and the account must have
access to this vault.

#### Parameters

| Name      | Type                                                          |
| :-------- | :------------------------------------------------------------ |
| `account` | [`UnlockedAccount`](../../interfaces/account.UnlockedAccount) |

#### Returns

`Promise`<`void`\>

#### Overrides

[SharedContainer](../container.SharedContainer).[unlock](../container.SharedContainer#unlock)

#### Defined in

[core/src/vault.ts:70](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/vault.ts#L70)

---

### updateAccessors

▸ **updateAccessors**(`subjects`): `Promise`<`void`\>

Updates the containers accessors, generating a new shared key and encrypting it
with the public keys of the provided **subjects**. Non-empty containers need to
be unlocked first.

#### Parameters

| Name       | Type                                             |
| :--------- | :----------------------------------------------- |
| `subjects` | { `id`: `string` ; `publicKey`: `Uint8Array` }[] |

#### Returns

`Promise`<`void`\>

#### Inherited from

[SharedContainer](../container.SharedContainer).[updateAccessors](../container.SharedContainer#updateaccessors)

#### Defined in

[core/src/container.ts:189](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L189)

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

[SharedContainer](../container.SharedContainer).[validate](../container.SharedContainer#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

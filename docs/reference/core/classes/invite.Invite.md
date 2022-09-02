---
title: "Class: Invite"
linkTitle: "Invite"
slug: "invite.Invite"
---

[invite](../../modules/invite).Invite

The `Invite` class encapsules most of the logic and information necessary to
perform a key exchange between an [Org](../org.Org) and
[Account](../account.Account) before adding the [Account](../account.Account) as a
member. A secret HMAC key is used to sign and verify the public keys of both
invitee and organization. This key is derived from a
[secret](../invite.Invite#secret), which needs to be communicated between the
organization owner and invitee directly.

The invite flow generally works as follows:

```ts
// ORG OWNER

const invite = new Invite("bob@example.com", "add_member");

// Generates random secret and signs organization details
await invite.intialize(../org, orgOwnerAccount);

console.log("invite secret: ", invite.secret);

// => Invite object is send to server, which sends an email to the invitee

// INVITEE
// => Invitee fetches `invite` object from server, asks org owner for `secret` (in person)

// Verifies organization info and signs own public key

const success = await invite.accept(../inviteeAccount, secret);

if (!success) {
    throw "Verification failed! Incorrect secret?";
}

// => Sends updated invite object to server

// ORG OWNER

// => Fetches updated invite object

// Verify invitee details.
if (!(await invite.verifyInvitee())) {
    throw "Failed to verify invitee details!";
}

// DONE!
await org.addOrUpdateMember(../invite.invitee);
```

## Hierarchy

-   [`SimpleContainer`](../container.SimpleContainer)

    ↳ **`Invite`**

## Constructors

### constructor

• **new Invite**(`email?`, `purpose?`)

#### Parameters

| Name      | Type                                                  | Default value |
| :-------- | :---------------------------------------------------- | :------------ |
| `email`   | `string`                                              | `""`          |
| `purpose` | [`InvitePurpose`](../modules/invite#invitepurpose) | `"join_org"`  |

#### Overrides

[SimpleContainer](../container.SimpleContainer).[constructor](../container.SimpleContainer#constructor)

#### Defined in

[core/src/invite.ts:203](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L203)

## Properties

### \_key

• `Protected` `Optional` **\_key**: `Uint8Array`

The key used for encryption. Sub classes must set this property in the
[unlock](../invite.Invite#unlock) method.

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[\_key](../container.SimpleContainer#_key)

#### Defined in

[core/src/container.ts:33](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L33)

---

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[\_propertySerializationOptions](../container.SimpleContainer#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### \_secret

• `Private` `Optional` **\_secret**: `string` = `""`

#### Defined in

[core/src/invite.ts:188](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L188)

---

### \_signingKey

• `Private` `Optional` **\_signingKey**: `null` \| `Uint8Array` = `null`

#### Defined in

[core/src/invite.ts:189](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L189)

---

### created

• **created**: `Date`

Time of creation

#### Defined in

[core/src/invite.ts:128](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L128)

---

### email

• **email**: `string` = `""`

---

### encryptedData

• `Optional` **encryptedData**: `Uint8Array`

Encrypted data

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[encryptedData](../container.SimpleContainer#encrypteddata)

#### Defined in

[core/src/container.ts:28](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L28)

---

### encryptionParams

• **encryptionParams**: [`AESEncryptionParams`](../crypto.AESEncryptionParams)

Parameters used for encryption of content data

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[encryptionParams](../container.SimpleContainer#encryptionparams)

#### Defined in

[core/src/container.ts:24](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L24)

---

### expires

• **expires**: `Date`

Expiration time used to limit invite procedure to a certain time window. This
property is also stored in [encryptedData](../invite.Invite#encrypteddata) along
with the invite secret to prevent tempering.

#### Defined in

[core/src/invite.ts:136](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L136)

---

### id

• **id**: `string` = `""`

Unique identfier

#### Defined in

[core/src/invite.ts:124](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L124)

---

### invitedBy

• `Optional` **invitedBy**: `Object` = `undefined`

Info about who created the invite.

#### Type declaration

| Name        | Type     |
| :---------- | :------- |
| `accountId` | `string` |
| `email`     | `string` |
| `name`      | `string` |

#### Defined in

[core/src/invite.ts:153](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L153)

---

### invitee

• **invitee**: `InviteeInfo`

Invitee info, including HMAC signature used for verification Set when the
invitee successfully accepts the invite

#### Defined in

[core/src/invite.ts:150](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L150)

---

### org

• **org**: `OrgInfo`

Organization info, including HMAC signature used for verification. Set during
initialization

#### Defined in

[core/src/invite.ts:143](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L143)

---

### purpose

• **purpose**: [`InvitePurpose`](../modules/invite#invitepurpose) =
`"join_org"`

---

### signingKeyParams

• **signingKeyParams**: [`PBKDF2Params`](../crypto.PBKDF2Params)

Key derivation paramaters used for deriving the HMAC signing key from
[secret](../invite.Invite#secret).

#### Defined in

[core/src/invite.ts:193](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L193)

---

### signingParams

• **signingParams**: [`HMACParams`](../crypto.HMACParams)

Parameters used for signing organization and initee details.

#### Defined in

[core/src/invite.ts:201](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L201)

## Accessors

### accepted

• `get` **accepted**(): `boolean`

Whether this invite has been accepted by the invitee

#### Returns

`boolean`

#### Defined in

[core/src/invite.ts:184](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L184)

---

### expired

• `get` **expired**(): `boolean`

Whether this invite has expired

#### Returns

`boolean`

#### Defined in

[core/src/invite.ts:179](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L179)

---

### kind

• `get` **kind**(): `string`

A string representing the objects "type", useful for segmenting storage, among
other things. Defaults to the lowercase class name, but can be overwritten by
subclasses

#### Returns

`string`

#### Inherited from

SimpleContainer.kind

#### Defined in

[core/src/encoding.ts:159](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L159)

---

### secret

• `get` **secret**(): `undefined` \| `string`

Random secret used for deriving the HMAC key that is used to sign and verify
organization and invitee details. It is encrypted at rest with an AES key only
available to organization admins. The invitee does not have access to this
property directly but needs to request it from the organization owner directly.

**`secret`** **IMPORTANT**: This property is considered **secret** and should
never stored or transmitted in plain text

#### Returns

`undefined` \| `string`

#### Defined in

[core/src/invite.ts:174](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L174)

• `set` **secret**(`s`): `void`

Random secret used for deriving the HMAC key that is used to sign and verify
organization and invitee details. It is encrypted at rest with an AES key only
available to organization admins. The invitee does not have access to this
property directly but needs to request it from the organization owner directly.

**`secret`** **IMPORTANT**: This property is considered **secret** and should
never stored or transmitted in plain text

#### Parameters

| Name | Type                    |
| :--- | :---------------------- |
| `s`  | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[core/src/invite.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L170)

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

[SimpleContainer](../container.SimpleContainer).[\_fromRaw](../container.SimpleContainer#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_getSigningKey

▸ `Private` **\_getSigningKey**(): `Promise`<`Uint8Array`\>

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/invite.ts:328](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L328)

---

### \_sign

▸ `Private` **\_sign**(`val`): `Promise`<`Uint8Array`\>

#### Parameters

| Name  | Type         |
| :---- | :----------- |
| `val` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[core/src/invite.ts:341](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L341)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](../invite.Invite#toraw) on any properties
that are themselfes instances of [Serializable](../encoding.Serializable). This
method should be overwritten by subclasses if certain properties require special
treatment.

#### Parameters

| Name      | Type                    |
| :-------- | :---------------------- |
| `version` | `undefined` \| `string` |

#### Returns

`any`

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[\_toRaw](../container.SimpleContainer#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### \_verify

▸ `Private` **\_verify**(`sig`, `val`): `Promise`<`boolean`\>

#### Parameters

| Name  | Type         |
| :---- | :----------- |
| `sig` | `Uint8Array` |
| `val` | `Uint8Array` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/invite.ts:345](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L345)

---

### accept

▸ **accept**(`account`, `secret`): `Promise`<`boolean`\>

Accepts the invite by verifying the organization details and, if successful,
signing and storing the invitees own information. Throws if verification is
unsuccessful.

#### Parameters

| Name      | Type                            |
| :-------- | :------------------------------ |
| `account` | [`Account`](../account.Account) |
| `secret`  | `string`                        |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/invite.ts:273](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L273)

---

### clone

▸ **clone**(): [`Invite`](../invite.Invite)

Creates a deep clone of the object

#### Returns

[`Invite`](../invite.Invite)

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[clone](../container.SimpleContainer#clone)

#### Defined in

[core/src/container.ts:85](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L85)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`Invite`](../invite.Invite)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`Invite`](../invite.Invite)

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[fromBytes](../container.SimpleContainer#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`Invite`](../invite.Invite)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`Invite`](../invite.Invite)

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[fromJSON](../container.SimpleContainer#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`Invite`](../invite.Invite)

Restores propertiers from a raw object of the same form generated by
[toRaw](../invite.Invite#toraw). The base implementation blindly copies over
values from the raw object via `Object.assign` so subclasses should explictly
process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../invite.Invite#_fromraw) method to
implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`Invite`](../invite.Invite)

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[fromRaw](../container.SimpleContainer#fromraw)

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

[SimpleContainer](../container.SimpleContainer).[getData](../container.SimpleContainer#getdata)

#### Defined in

[core/src/container.ts:61](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L61)

---

### initialize

▸ **initialize**(`org`, `invitor`, `duration?`): `Promise`<`void`\>

Initializes the invite by generating a random [secret](../invite.Invite#secret)
and [id](../invite.Invite#id) and signing and storing the organization details.

#### Parameters

| Name       | Type                            | Default value | Description                               |
| :--------- | :------------------------------ | :------------ | :---------------------------------------- |
| `org`      | [`Org`](../org.Org)             | `undefined`   | The organization this invite is for       |
| `invitor`  | [`Account`](../account.Account) | `undefined`   | Account creating the invite               |
| `duration` | `number`                        | `12`          | Number of hours until this invite expires |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/invite.ts:220](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L220)

---

### lock

▸ **lock**(): `void`

Locks the container, removing the possibility to extract the plain text data via
[getData](../invite.Invite#getdata) until the container is unlocked again.
Subclasses extending this class must take care to delete any keys or other
sensitive data that may have been stored temporarily after unlocking the
container.

#### Returns

`void`

#### Overrides

[SimpleContainer](../container.SimpleContainer).[lock](../container.SimpleContainer#lock)

#### Defined in

[core/src/invite.ts:262](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L262)

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

[SimpleContainer](../container.SimpleContainer).[setData](../container.SimpleContainer#setdata)

#### Defined in

[core/src/container.ts:38](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/container.ts#L38)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[toBytes](../container.SimpleContainer#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[toJSON](../container.SimpleContainer#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](../invite.Invite#_toraw) for subclass-specific behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[toRaw](../container.SimpleContainer#toraw)

#### Defined in

[core/src/encoding.ts:179](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L179)

---

### unlock

▸ **unlock**(`key`): `Promise`<`void`\>

"Unlocks" the invite with the dedicated key (owned by the respective
[Org](../org.Org)). This grants access to the [secret](../invite.Invite#secret)
property and verfies that [expires](../invite.Invite#expires) has not been
tempered with.

#### Parameters

| Name  | Type         |
| :---- | :----------- |
| `key` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Overrides

[SimpleContainer](../container.SimpleContainer).[unlock](../container.SimpleContainer#unlock)

#### Defined in

[core/src/invite.ts:251](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L251)

---

### validate

▸ **validate**(): `boolean`

This is called during deserialization and should verify that all properties have
been populated with values of the correct type. Subclasses should implement this
method based on their class structure.

#### Returns

`boolean`

#### Inherited from

[SimpleContainer](../container.SimpleContainer).[validate](../container.SimpleContainer#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

---

### verifyInvitee

▸ **verifyInvitee**(): `Promise`<`boolean`\>

Verifies the invitee information.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/invite.ts:311](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L311)

---

### verifyOrg

▸ **verifyOrg**(): `Promise`<`boolean`\>

Verifies the organization information.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/invite.ts:299](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/invite.ts#L299)

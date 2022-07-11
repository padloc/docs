---
title: "Interface: ActiveOrgMember"
linkTitle: "ActiveOrgMember"
slug: "org.ActiveOrgMember"
---

[org](../../modules/org).ActiveOrgMember

## Hierarchy

-   [`OrgMember`](../../classes/org.OrgMember)

    ↳ **`ActiveOrgMember`**

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../encoding.SerializationOptions)[]

#### Inherited from

[OrgMember](../../classes/org.OrgMember).[\_propertySerializationOptions](../classes/org.OrgMember.md#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### accountId

• **accountId**: `string`

id of the corresponding [Account](../../classes/account.Account)

#### Overrides

[OrgMember](../../classes/org.OrgMember).[accountId](../classes/org.OrgMember.md#accountid)

#### Defined in

[core/src/org.ts:118](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L118)

---

### email

• **email**: `string` = `""`

email address of the corresponding [Account](../../classes/account.Account)

#### Inherited from

[OrgMember](../../classes/org.OrgMember).[email](../classes/org.OrgMember.md#email)

#### Defined in

[core/src/org.ts:60](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L60)

---

### id

• **id**: `string`

#### Overrides

[OrgMember](../../classes/org.OrgMember).[id](../classes/org.OrgMember.md#id)

#### Defined in

[core/src/org.ts:116](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L116)

---

### name

• **name**: `string` = `""`

name of the corresponding [Account](../../classes/account.Account)

#### Inherited from

[OrgMember](../../classes/org.OrgMember).[name](../classes/org.OrgMember.md#name)

#### Defined in

[core/src/org.ts:57](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L57)

---

### orgSignature

• **orgSignature**: `Uint8Array`

signature used by the member to verify [Org.id](../classes/org.Org.md#id) and
[[Org.publickey]] of the organization

#### Overrides

[OrgMember](../../classes/org.OrgMember).[orgSignature](../classes/org.OrgMember.md#orgsignature)

#### Defined in

[core/src/org.ts:121](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L121)

---

### publicKey

• **publicKey**: `Uint8Array`

public key of the corresponding [Account](../../classes/account.Account)

#### Overrides

[OrgMember](../../classes/org.OrgMember).[publicKey](../classes/org.OrgMember.md#publickey)

#### Defined in

[core/src/org.ts:119](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L119)

---

### role

• **role**: [`OrgRole`](../../enums/org.OrgRole) = `OrgRole.Member`

the members organization role

#### Inherited from

[OrgMember](../../classes/org.OrgMember).[role](../classes/org.OrgMember.md#role)

#### Defined in

[core/src/org.ts:81](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L81)

---

### signature

• **signature**: `Uint8Array`

signature used by other members to verify [id](org.ActiveOrgMember.md#id),
[email](org.ActiveOrgMember.md#email) and
[publicKey](org.ActiveOrgMember.md#publickey)

#### Overrides

[OrgMember](../../classes/org.OrgMember).[signature](../classes/org.OrgMember.md#signature)

#### Defined in

[core/src/org.ts:120](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L120)

---

### status

• **status**: [`Active`](../enums/org.OrgMemberStatus.md#active)

#### Overrides

[OrgMember](../../classes/org.OrgMember).[status](../classes/org.OrgMember.md#status)

#### Defined in

[core/src/org.ts:117](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L117)

---

### updated

• **updated**: `Date`

time the member was last updated

#### Inherited from

[OrgMember](../../classes/org.OrgMember).[updated](../classes/org.OrgMember.md#updated)

#### Defined in

[core/src/org.ts:87](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L87)

---

### vaults

• **vaults**: { `id`: `string` ; `readonly`: `boolean` }[] = `[]`

vaults assigned to this member

#### Inherited from

[OrgMember](../../classes/org.OrgMember).[vaults](../classes/org.OrgMember.md#vaults)

#### Defined in

[core/src/org.ts:75](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/org.ts#L75)

## Accessors

### kind

• `get` **kind**(): `string`

A string representing the objects "type", useful for segmenting storage, among
other things. Defaults to the lowercase class name, but can be overwritten by
subclasses

#### Returns

`string`

#### Inherited from

OrgMember.kind

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

#### Inherited from

[OrgMember](../../classes/org.OrgMember).[\_fromRaw](../classes/org.OrgMember.md#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](org.ActiveOrgMember.md#toraw) on any
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

[OrgMember](../../classes/org.OrgMember).[\_toRaw](../classes/org.OrgMember.md#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`ActiveOrgMember`](../org.ActiveOrgMember)

Creates a deep clone of the object

#### Returns

[`ActiveOrgMember`](../org.ActiveOrgMember)

#### Inherited from

[OrgMember](../../classes/org.OrgMember).[clone](../classes/org.OrgMember.md#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`ActiveOrgMember`](../org.ActiveOrgMember)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`ActiveOrgMember`](../org.ActiveOrgMember)

#### Inherited from

[OrgMember](../../classes/org.OrgMember).[fromBytes](../classes/org.OrgMember.md#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`ActiveOrgMember`](../org.ActiveOrgMember)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`ActiveOrgMember`](../org.ActiveOrgMember)

#### Inherited from

[OrgMember](../../classes/org.OrgMember).[fromJSON](../classes/org.OrgMember.md#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`ActiveOrgMember`](../org.ActiveOrgMember)

Restores propertiers from a raw object of the same form generated by
[toRaw](org.ActiveOrgMember.md#toraw). The base implementation blindly copies
over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](org.ActiveOrgMember.md#_fromraw) method
to implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`ActiveOrgMember`](../org.ActiveOrgMember)

#### Inherited from

[OrgMember](../../classes/org.OrgMember).[fromRaw](../classes/org.OrgMember.md#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Inherited from

[OrgMember](../../classes/org.OrgMember).[toBytes](../classes/org.OrgMember.md#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Inherited from

[OrgMember](../../classes/org.OrgMember).[toJSON](../classes/org.OrgMember.md#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](org.ActiveOrgMember.md#_toraw) for subclass-specific
behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Inherited from

[OrgMember](../../classes/org.OrgMember).[toRaw](../classes/org.OrgMember.md#toraw)

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

[OrgMember](../../classes/org.OrgMember).[validate](../classes/org.OrgMember.md#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

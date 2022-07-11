---
title: "Class: VaultItem"
linkTitle: "VaultItem"
slug: "item.VaultItem"
---

[item](../../modules/item).VaultItem

Represents an entry within a vault

## Hierarchy

-   [`Serializable`](../encoding.Serializable)

    ↳ **`VaultItem`**

## Constructors

### constructor

• **new VaultItem**(`vals?`)

#### Parameters

| Name   | Type                                         |
| :----- | :------------------------------------------- |
| `vals` | `Partial`<[`VaultItem`](../item.VaultItem)\> |

#### Overrides

[Serializable](../encoding.Serializable).[constructor](encoding.Serializable.md#constructor)

#### Defined in

[core/src/item.ts:278](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L278)

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Serializable](../encoding.Serializable).[\_propertySerializationOptions](encoding.Serializable.md#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### attachments

• **attachments**: [`AttachmentInfo`](../attachment.AttachmentInfo)[] = `[]`

attachments associated with this item

#### Defined in

[core/src/item.ts:314](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L314)

---

### auditResults

• **auditResults**: [`AuditResult`](../../interfaces/item.AuditResult)[] = `[]`

#### Defined in

[core/src/item.ts:316](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L316)

---

### favorited

• **favorited**: `string`[] = `[]`

**`deprecated`** Accounts that have favorited this item

#### Defined in

[core/src/item.ts:310](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L310)

---

### fields

• **fields**: [`Field`](../item.Field)[] = `[]`

item fields

#### Defined in

[core/src/item.ts:294](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L294)

---

### icon

• `Optional` **icon**: `string` = `undefined`

icon to be displayed for this item

#### Defined in

[core/src/item.ts:290](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L290)

---

### id

• **id**: `string` = `""`

unique identfier

#### Defined in

[core/src/item.ts:284](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L284)

---

### lastAudited

• `Optional` **lastAudited**: `Date`

#### Defined in

[core/src/item.ts:319](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L319)

---

### name

• **name**: `string` = `""`

item name

#### Defined in

[core/src/item.ts:287](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L287)

---

### tags

• **tags**: `string`[] = `[]`

array of tags assigned with this item

#### Defined in

[core/src/item.ts:297](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L297)

---

### updated

• **updated**: `Date`

Date and time of last update

#### Defined in

[core/src/item.ts:301](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L301)

---

### updatedBy

• **updatedBy**: `string` = `""`

[Account](../account.Account) the item was last updated by

#### Defined in

[core/src/item.ts:304](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L304)

## Accessors

### kind

• `get` **kind**(): `string`

A string representing the objects "type", useful for segmenting storage, among
other things. Defaults to the lowercase class name, but can be overwritten by
subclasses

#### Returns

`string`

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

#### Inherited from

[Serializable](../encoding.Serializable).[\_fromRaw](encoding.Serializable.md#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](item.VaultItem.md#toraw) on any properties
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

[Serializable](../encoding.Serializable).[\_toRaw](encoding.Serializable.md#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`VaultItem`](../item.VaultItem)

Creates a deep clone of the object

#### Returns

[`VaultItem`](../item.VaultItem)

#### Inherited from

[Serializable](../encoding.Serializable).[clone](encoding.Serializable.md#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`VaultItem`](../item.VaultItem)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`VaultItem`](../item.VaultItem)

#### Inherited from

[Serializable](../encoding.Serializable).[fromBytes](encoding.Serializable.md#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`VaultItem`](../item.VaultItem)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`VaultItem`](../item.VaultItem)

#### Inherited from

[Serializable](../encoding.Serializable).[fromJSON](encoding.Serializable.md#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`VaultItem`](../item.VaultItem)

Restores propertiers from a raw object of the same form generated by
[toRaw](item.VaultItem.md#toraw). The base implementation blindly copies over
values from the raw object via `Object.assign` so subclasses should explictly
process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](item.VaultItem.md#_fromraw) method to
implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`VaultItem`](../item.VaultItem)

#### Inherited from

[Serializable](../encoding.Serializable).[fromRaw](encoding.Serializable.md#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Inherited from

[Serializable](../encoding.Serializable).[toBytes](encoding.Serializable.md#tobytes)

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Inherited from

[Serializable](../encoding.Serializable).[toJSON](encoding.Serializable.md#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](item.VaultItem.md#_toraw) for subclass-specific
behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Inherited from

[Serializable](../encoding.Serializable).[toRaw](encoding.Serializable.md#toraw)

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

[Serializable](../encoding.Serializable).[validate](encoding.Serializable.md#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

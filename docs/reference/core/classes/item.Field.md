---
title: "Class: Field"
linkTitle: "Field"
slug: "item.Field"
---

[item](../../modules/item).Field

## Hierarchy

-   [`Serializable`](../encoding.Serializable)

    ↳ **`Field`**

## Constructors

### constructor

• **new Field**(`vals?`)

#### Parameters

| Name   | Type                                 |
| :----- | :----------------------------------- |
| `vals` | `Partial`<[`Field`](../item.Field)\> |

#### Overrides

[Serializable](../encoding.Serializable).[constructor](../encoding.Serializable#constructor)

#### Defined in

[core/src/item.ts:221](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L221)

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Serializable](../encoding.Serializable).[\_propertySerializationOptions](../encoding.Serializable#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### name

• **name**: `string` = `""`

field name

#### Defined in

[core/src/item.ts:232](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L232)

---

### type

• **type**: [`FieldType`](../../enums/item.FieldType) = `FieldType.Text`

field type, determining meta data via the corresponding field definition in
[FIELD_DEFS](../modules/item#field_defs)

#### Defined in

[core/src/item.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L230)

---

### value

• **value**: `string` = `""`

field content

#### Defined in

[core/src/item.ts:234](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L234)

## Accessors

### def

• `get` **def**(): [`FieldDef`](../../interfaces/item.FieldDef)

#### Returns

[`FieldDef`](../../interfaces/item.FieldDef)

#### Defined in

[core/src/item.ts:236](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L236)

---

### icon

• `get` **icon**(): `string`

#### Returns

`string`

#### Defined in

[core/src/item.ts:240](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L240)

---

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

#### Overrides

[Serializable](../encoding.Serializable).[\_fromRaw](../encoding.Serializable#_fromraw)

#### Defined in

[core/src/item.ts:252](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L252)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](../item.Field#toraw) on any properties that
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

[Serializable](../encoding.Serializable).[\_toRaw](../encoding.Serializable#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`Field`](../item.Field)

Creates a deep clone of the object

#### Returns

[`Field`](../item.Field)

#### Inherited from

[Serializable](../encoding.Serializable).[clone](../encoding.Serializable#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### format

▸ **format**(`masked`): `string`

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `masked` | `boolean` |

#### Returns

`string`

#### Defined in

[core/src/item.ts:248](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L248)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`Field`](../item.Field)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`Field`](../item.Field)

#### Inherited from

[Serializable](../encoding.Serializable).[fromBytes](../encoding.Serializable#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`Field`](../item.Field)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`Field`](../item.Field)

#### Inherited from

[Serializable](../encoding.Serializable).[fromJSON](../encoding.Serializable#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`Field`](../item.Field)

Restores propertiers from a raw object of the same form generated by
[toRaw](../item.Field#toraw). The base implementation blindly copies over values
from the raw object via `Object.assign` so subclasses should explictly process
any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../item.Field#_fromraw) method to
implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`Field`](../item.Field)

#### Inherited from

[Serializable](../encoding.Serializable).[fromRaw](../encoding.Serializable#fromraw)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

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

#### Inherited from

[Serializable](../encoding.Serializable).[toJSON](../encoding.Serializable#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](../item.Field#_toraw) for subclass-specific behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

#### Inherited from

[Serializable](../encoding.Serializable).[toRaw](../encoding.Serializable#toraw)

#### Defined in

[core/src/encoding.ts:179](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L179)

---

### transform

▸ **transform**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[core/src/item.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/item.ts#L244)

---

### validate

▸ **validate**(): `boolean`

This is called during deserialization and should verify that all properties have
been populated with values of the correct type. Subclasses should implement this
method based on their class structure.

#### Returns

`boolean`

#### Inherited from

[Serializable](../encoding.Serializable).[validate](../encoding.Serializable#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

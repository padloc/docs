---
title: "Class: DeviceInfo"
linkTitle: "DeviceInfo"
slug: "platform.DeviceInfo"
---

[platform](../../modules/platform).DeviceInfo

Object representing all information available for a given device.

## Hierarchy

-   [`Serializable`](../encoding.Serializable)

    ↳ **`DeviceInfo`**

## Constructors

### constructor

• **new DeviceInfo**(`props?`)

#### Parameters

| Name     | Type                                               |
| :------- | :------------------------------------------------- |
| `props?` | `Partial`<[`DeviceInfo`](../platform.DeviceInfo)\> |

#### Overrides

[Serializable](../encoding.Serializable).[constructor](../encoding.Serializable#constructor)

#### Defined in

[core/src/platform.ts:50](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L50)

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Inherited from

[Serializable](../encoding.Serializable).[\_propertySerializationOptions](../encoding.Serializable#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### appVersion

• **appVersion**: `string` = `""`

Padloc version installed on the device

#### Defined in

[core/src/platform.ts:26](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L26)

---

### browser

• **browser**: `string` = `""`

The browser the application was loaded in, if applicable

#### Defined in

[core/src/platform.ts:43](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L43)

---

### browserVersion

• **browserVersion**: `string` = `""`

The version of the browser the application was loaded in, if applicable

#### Defined in

[core/src/platform.ts:46](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L46)

---

### description

• **description**: `string`

#### Defined in

[core/src/platform.ts:48](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L48)

---

### id

• **id**: `string` = `""`

Unique device identifier

#### Defined in

[core/src/platform.ts:23](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L23)

---

### locale

• **locale**: `string` = `"en"`

The devices locale setting

#### Defined in

[core/src/platform.ts:34](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L34)

---

### manufacturer

• **manufacturer**: `string` = `""`

The device manufacturer, if available

#### Defined in

[core/src/platform.ts:37](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L37)

---

### model

• **model**: `string` = `""`

The device mode, if available

#### Defined in

[core/src/platform.ts:40](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L40)

---

### osVersion

• **osVersion**: `string` = `""`

OS version running on the device

#### Defined in

[core/src/platform.ts:20](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L20)

---

### platform

• **platform**: `string` = `""`

Platform/Operating System running on the device

#### Defined in

[core/src/platform.ts:17](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L17)

---

### userAgent

• **userAgent**: `string` = `""`

The user agent of the browser running the application

#### Defined in

[core/src/platform.ts:31](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L31)

---

### vendorVersion

• **vendorVersion**: `string` = `""`

#### Defined in

[core/src/platform.ts:28](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/platform.ts#L28)

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

[Serializable](../encoding.Serializable).[\_fromRaw](../encoding.Serializable#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](../platform.DeviceInfo#toraw) on any
properties that are themselfes instances of
[Serializable](../encoding.Serializable). This method should be overwritten by
subclasses if certain properties require special treatment.

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

▸ **clone**(): [`DeviceInfo`](../platform.DeviceInfo)

Creates a deep clone of the object

#### Returns

[`DeviceInfo`](../platform.DeviceInfo)

#### Inherited from

[Serializable](../encoding.Serializable).[clone](../encoding.Serializable#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`DeviceInfo`](../platform.DeviceInfo)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`DeviceInfo`](../platform.DeviceInfo)

#### Inherited from

[Serializable](../encoding.Serializable).[fromBytes](../encoding.Serializable#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`DeviceInfo`](../platform.DeviceInfo)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`DeviceInfo`](../platform.DeviceInfo)

#### Inherited from

[Serializable](../encoding.Serializable).[fromJSON](../encoding.Serializable#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`DeviceInfo`](../platform.DeviceInfo)

Restores propertiers from a raw object of the same form generated by
[toRaw](../platform.DeviceInfo#toraw). The base implementation blindly copies
over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../platform.DeviceInfo#_fromraw) method
to implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`DeviceInfo`](../platform.DeviceInfo)

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
versions. Use [\_toRaw](../platform.DeviceInfo#_toraw) for subclass-specific
behavior.

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

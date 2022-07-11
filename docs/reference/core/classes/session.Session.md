---
title: "Class: Session"
linkTitle: "Session"
slug: "session.Session"
---

[session](../../modules/session).Session

A session represents a trusted connection between a
[Server](../server.Server.md) and [Client](client.Client) which can be used to
authenticate requests, allowing both parties to verify the other parties
identity and check the request/response bodies integrity. The authentication
flow usually works as follows:

```ts
// CLIENT

const request = createRequest();
await this.session.authenticate(request);

// SERVER

if (!(await context.session.verify(request))) {
    throw "Failed to verify request!";
}

const response = processRequest(request);
await context.session.authenticate(response);

// CLIENT

if (!(await context.session.verify(response))) {
    throw "Failed to verify response!";
}

processResponse(response);
```

```
                       ┌──────────┐     ┌──────────┐
                       │Client (C)│     │Server (S)│
                       └─────┬────┘     └────┬─────┘
┌──────────────────────────┐ │               │
│req = [request body]      │ │   req, sid,   │
│t1 = [timestamp]          │ │   t1, sig1    │ ┌──────────────────────────┐
│sig1 = HMAC(K, sid|t1|req)│ │──────────────▶│ │=> verify sig1            │
└──────────────────────────┘ │               │ │res = [response body]     │
                             │               │ │t2 = [timestamp]          │
            ┌──────────────┐ │ res, t2, sig2 │ │sig2 = HMAC(K, sid|t2|res)│
            │=> verify sig2│ │◁ ─ ─ ─ ─ ─ ─ ─│ └──────────────────────────┘
            └──────────────┘ │               │
                             │               │
                             ▼               ▼
```

## Hierarchy

-   [`Serializable`](../encoding.Serializable)

    ↳ **`Session`**

## Implements

-   [`Storable`](../storage.Storable)

## Constructors

### constructor

• **new Session**()

#### Inherited from

[Serializable](../encoding.Serializable).[constructor](encoding.Serializable.md#constructor)

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Implementation of

Storable.\_propertySerializationOptions

#### Inherited from

[Serializable](../encoding.Serializable).[\_propertySerializationOptions](encoding.Serializable.md#_propertyserializationoptions)

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

---

### account

• **account**: `string` = `""`

Associated [Account](../account.Account)

#### Defined in

[core/src/session.ts:90](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/session.ts#L90)

---

### created

• **created**: `Date`

Time of creation

#### Defined in

[core/src/session.ts:94](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/session.ts#L94)

---

### device

• `Optional` **device**: [`DeviceInfo`](../platform.DeviceInfo)

Info about the device the client is running on

#### Defined in

[core/src/session.ts:114](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/session.ts#L114)

---

### expires

• `Optional` **expires**: `Date`

Expiration time

#### Defined in

[core/src/session.ts:106](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/session.ts#L106)

---

### id

• **id**: `string` = `""`

Unique identifier

#### Implementation of

Storable.id

#### Defined in

[core/src/session.ts:87](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/session.ts#L87)

---

### key

• `Optional` **key**: `Uint8Array`

Session key used to sign/verify requests and responses

#### Defined in

[core/src/session.ts:110](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/session.ts#L110)

---

### lastLocation

• `Optional` **lastLocation**: `Object` = `undefined`

#### Type declaration

| Name       | Type     |
| :--------- | :------- |
| `city?`    | `string` |
| `country?` | `string` |

#### Defined in

[core/src/session.ts:116](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/session.ts#L116)

---

### lastUsed

• **lastUsed**: `Date`

When this session was last used to authenticate a request

#### Defined in

[core/src/session.ts:102](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/session.ts#L102)

---

### updated

• **updated**: `Date`

Time of last update

#### Defined in

[core/src/session.ts:98](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/session.ts#L98)

## Accessors

### info

• `get` **info**(): [`SessionInfo`](../session.SessionInfo)

Public session info

#### Returns

[`SessionInfo`](../session.SessionInfo)

#### Defined in

[core/src/session.ts:124](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/session.ts#L124)

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

[Serializable](../encoding.Serializable).[\_fromRaw](encoding.Serializable.md#_fromraw)

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_sign

▸ `Private` **\_sign**(`data`):
`Promise`<[`RequestAuthentication`](../transport.RequestAuthentication)\>

#### Parameters

| Name   | Type  |
| :----- | :---- |
| `data` | `any` |

#### Returns

`Promise`<[`RequestAuthentication`](../transport.RequestAuthentication)\>

#### Defined in

[core/src/session.ts:160](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/session.ts#L160)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](session.Session.md#toraw) on any properties
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

[Serializable](../encoding.Serializable).[\_toRaw](encoding.Serializable.md#_toraw)

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### \_verify

▸ `Private` **\_verify**(`auth`, `data`): `Promise`<`boolean`\>

#### Parameters

| Name   | Type                                                          |
| :----- | :------------------------------------------------------------ |
| `auth` | [`RequestAuthentication`](../transport.RequestAuthentication) |
| `data` | `any`                                                         |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/session.ts:172](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/session.ts#L172)

---

### authenticate

▸ **authenticate**(`r`): `Promise`<`void`\>

Authenticates a [Request](../transport.Request.md) or
[Response](transport.Response) by signing the session id, timestamp and
request/response body using the session [key](session.Session.md#key).

#### Parameters

| Name | Type                                                                     |
| :--- | :----------------------------------------------------------------------- |
| `r`  | [`Request`](../transport.Request.md) \| [`Response`](transport.Response) |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/src/session.ts:141](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/session.ts#L141)

---

### clone

▸ **clone**(): [`Session`](../session.Session)

Creates a deep clone of the object

#### Returns

[`Session`](../session.Session)

#### Implementation of

Storable.clone

#### Inherited from

[Serializable](../encoding.Serializable).[clone](encoding.Serializable.md#clone)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`Session`](../session.Session)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`Session`](../session.Session)

#### Implementation of

Storable.fromBytes

#### Inherited from

[Serializable](../encoding.Serializable).[fromBytes](encoding.Serializable.md#frombytes)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`Session`](../session.Session)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`Session`](../session.Session)

#### Implementation of

Storable.fromJSON

#### Inherited from

[Serializable](../encoding.Serializable).[fromJSON](encoding.Serializable.md#fromjson)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`Session`](../session.Session)

Restores propertiers from a raw object of the same form generated by
[toRaw](session.Session.md#toraw). The base implementation blindly copies over
values from the raw object via `Object.assign` so subclasses should explictly
process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](session.Session.md#_fromraw) method to
implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`Session`](../session.Session)

#### Implementation of

Storable.fromRaw

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

#### Implementation of

Storable.toBytes

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

#### Implementation of

Storable.toJSON

#### Inherited from

[Serializable](../encoding.Serializable).[toJSON](encoding.Serializable.md#tojson)

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](session.Session.md#_toraw) for subclass-specific
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

#### Implementation of

Storable.validate

#### Inherited from

[Serializable](../encoding.Serializable).[validate](encoding.Serializable.md#validate)

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

---

### verify

▸ **verify**(`r`): `Promise`<`boolean`\>

Verifies session id, timestamp and request/response body of a given
[Request](../transport.Request.md) or [Response](transport.Response) using the
session [key](session.Session.md#key).

#### Parameters

| Name | Type                                                                     |
| :--- | :----------------------------------------------------------------------- |
| `r`  | [`Request`](../transport.Request.md) \| [`Response`](transport.Response) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/src/session.ts:150](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/session.ts#L150)

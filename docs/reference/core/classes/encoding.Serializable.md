---
title: "Class: Serializable"
linkTitle: "Serializable"
slug: "encoding.Serializable"
---

[encoding](../../modules/encoding).Serializable

Base class for "serializable" classes, i.e. classes that can be serialized into
a plain javascript object, JSON string or byte sequence which can be used for
storage or data transfer. Subclasses will generally want to overwrite the
[toRaw](../encoding.Serializable#toraw),
[fromRaw](../encoding.Serializable#fromraw) and
[validate](../encoding.Serializable#validate) methods to account for their
specific class structure.

**`example`**

```ts
class MyClass extends Serializable {
    name: string;
    parent?: MyClass;
    bytes: Uint8Array;

    toRaw() {
        return {
            ...super.toRaw(),
            bytes: bytesToBase64(this.bytes),
        };
    }

    fromRaw({ bytes, parent, ...rest }) {
        return super.fromRaw({
            bytes: base64ToBytes(bytes),
            parent: parent && new MyClass().fromRaw(parent),
            ...rest,
        });
    }

    validate() {
        return (
            super.validate() &&
            typeof this.name === "string" &&
            this.bytes instanceof Uint8Array &&
            (typeof this.parent === "undefined" ||
                this.parent instanceof MyClass)
        );
    }
}
```

## Hierarchy

-   **`Serializable`**

    ↳ [`AccountSecrets`](../account.AccountSecrets)

    ↳ [`CreateAccountParams`](../api.CreateAccountParams)

    ↳ [`RecoverAccountParams`](../api.RecoverAccountParams)

    ↳
    [`StartRegisterAuthenticatorParams`](../api.StartRegisterAuthenticatorParams)

    ↳
    [`StartRegisterAuthenticatorResponse`](../api.StartRegisterAuthenticatorResponse)

    ↳
    [`CompleteRegisterMFAuthenticatorParams`](../api.CompleteRegisterMFAuthenticatorParams)

    ↳
    [`CompleteRegisterMFAuthenticatorResponse`](../api.CompleteRegisterMFAuthenticatorResponse)

    ↳ [`StartAuthRequestParams`](../api.StartAuthRequestParams)

    ↳ [`StartAuthRequestResponse`](../api.StartAuthRequestResponse)

    ↳ [`CompleteAuthRequestParams`](../api.CompleteAuthRequestParams)

    ↳ [`CompleteAuthRequestResponse`](../api.CompleteAuthRequestResponse)

    ↳ [`StartCreateSessionParams`](../api.StartCreateSessionParams)

    ↳ [`StartCreateSessionResponse`](../api.StartCreateSessionResponse)

    ↳ [`CompleteCreateSessionParams`](../api.CompleteCreateSessionParams)

    ↳ [`GetInviteParams`](../api.GetInviteParams)

    ↳ [`GetAttachmentParams`](../api.GetAttachmentParams)

    ↳ [`GetLegacyDataParams`](../api.GetLegacyDataParams)

    ↳ [`CreateKeyStoreEntryParams`](../api.CreateKeyStoreEntryParams)

    ↳ [`GetKeyStoreEntryParams`](../api.GetKeyStoreEntryParams)

    ↳ [`AuthInfo`](../api.AuthInfo)

    ↳ [`UpdateAuthParams`](../api.UpdateAuthParams)

    ↳ [`Stats`](../app.Stats)

    ↳ [`Settings`](../app.Settings)

    ↳ [`Index`](../app.Index)

    ↳ [`AttachmentInfo`](../attachment.AttachmentInfo)

    ↳ [`PublicKeyAuthChallenge`](../auth_public_key.PublicKeyAuthChallenge)

    ↳ [`AuthenticatorInfo`](../auth.AuthenticatorInfo)

    ↳ [`Authenticator`](../auth.Authenticator)

    ↳ [`AuthRequest`](../auth.AuthRequest)

    ↳ [`Auth`](../auth.Auth)

    ↳ [`VaultItemCollection`](../collection.VaultItemCollection)

    ↳ [`Config`](../config.Config)

    ↳ [`BaseContainer`](../container.BaseContainer)

    ↳ [`Accessor`](../container.Accessor)

    ↳ [`AESEncryptionParams`](../crypto.AESEncryptionParams)

    ↳ [`AESKeyParams`](../crypto.AESKeyParams)

    ↳ [`HMACKeyParams`](../crypto.HMACKeyParams)

    ↳ [`RSAKeyParams`](../crypto.RSAKeyParams)

    ↳ [`PBKDF2Params`](../crypto.PBKDF2Params)

    ↳ [`RSAEncryptionParams`](../crypto.RSAEncryptionParams)

    ↳ [`RSASigningParams`](../crypto.RSASigningParams)

    ↳ [`HMACParams`](../crypto.HMACParams)

    ↳ [`HashParams`](../crypto.HashParams)

    ↳ [`Field`](../item.Field)

    ↳ [`VaultItem`](../item.VaultItem)

    ↳ [`KeyStoreEntryInfo`](../key_store.KeyStoreEntryInfo)

    ↳ [`OrgMember`](../org.OrgMember)

    ↳ [`Group`](../org.Group)

    ↳ [`OrgSecrets`](../org.OrgSecrets)

    ↳ [`ScimSettings`](../org.ScimSettings)

    ↳ [`OrgDirectorySettings`](../org.OrgDirectorySettings)

    ↳ [`DeviceInfo`](../platform.DeviceInfo)

    ↳ [`OrgQuota`](../provisioning.OrgQuota)

    ↳ [`AccountQuota`](../provisioning.AccountQuota)

    ↳ [`Feature`](../provisioning.Feature)

    ↳ [`AccountFeatures`](../provisioning.AccountFeatures)

    ↳ [`OrgFeatures`](../provisioning.OrgFeatures)

    ↳ [`Provisioning`](../provisioning.Provisioning)

    ↳ [`AccountQuota`](../quota.AccountQuota)

    ↳ [`OrgQuota`](../quota.OrgQuota)

    ↳ [`SessionInfo`](../session.SessionInfo)

    ↳ [`Session`](../session.Session)

    ↳ [`SRPSession`](../srp.SRPSession)

    ↳ [`Storable`](../storage.Storable)

    ↳ [`RequestAuthentication`](../transport.RequestAuthentication)

    ↳ [`Request`](../transport.Request)

    ↳ [`Response`](../transport.Response)

    ↳ [`RequestMFACodeParams`](../v3_compat.RequestMFACodeParams)

    ↳ [`RetrieveMFATokenParams`](../v3_compat.RetrieveMFATokenParams)

    ↳ [`RetrieveMFATokenResponse`](../v3_compat.RetrieveMFATokenResponse)

    ↳ [`InitAuthParams`](../v3_compat.InitAuthParams)

    ↳ [`InitAuthResponse`](../v3_compat.InitAuthResponse)

    ↳ [`CreateSessionParams`](../v3_compat.CreateSessionParams)

## Constructors

### constructor

• **new Serializable**()

## Properties

### \_propertySerializationOptions

• **\_propertySerializationOptions**:
[`SerializationOptions`](../../interfaces/encoding.SerializationOptions)[]

#### Defined in

[core/src/encoding.ts:163](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L163)

## Accessors

### kind

• `get` **kind**(): `string`

A string representing the objects "type", useful for segmenting storage, among
other things. Defaults to the lowercase class name, but can be overwritten by
subclasses

#### Returns

`string`

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

#### Defined in

[core/src/encoding.ts:286](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L286)

---

### \_toRaw

▸ `Protected` **\_toRaw**(`version`): `any`

Transform this object into a raw javascript object used for serialization. The
default implementation simply copies all iterable properties not included in the
[[exlude]] array and calls [toRaw](../encoding.Serializable#toraw) on any
properties that are themselfes instances of
[Serializable](../encoding.Serializable). This method should be overwritten by
subclasses if certain properties require special treatment.

#### Parameters

| Name      | Type                    |
| :-------- | :---------------------- |
| `version` | `undefined` \| `string` |

#### Returns

`any`

#### Defined in

[core/src/encoding.ts:257](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L257)

---

### clone

▸ **clone**(): [`Serializable`](../encoding.Serializable)

Creates a deep clone of the object

#### Returns

[`Serializable`](../encoding.Serializable)

#### Defined in

[core/src/encoding.ts:244](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L244)

---

### fromBytes

▸ **fromBytes**(`bytes`): [`Serializable`](../encoding.Serializable)

Deserializes the object from a byte array

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

[`Serializable`](../encoding.Serializable)

#### Defined in

[core/src/encoding.ts:237](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L237)

---

### fromJSON

▸ **fromJSON**(`json`): [`Serializable`](../encoding.Serializable)

Deserializes the object from a JSON string

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `json` | `string` |

#### Returns

[`Serializable`](../encoding.Serializable)

#### Defined in

[core/src/encoding.ts:223](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L223)

---

### fromRaw

▸ **fromRaw**(`raw`): [`Serializable`](../encoding.Serializable)

Restores propertiers from a raw object of the same form generated by
[toRaw](../encoding.Serializable#toraw). The base implementation blindly copies
over values from the raw object via `Object.assign` so subclasses should
explictly process any propertyies that need special treatment.

Also takes are of validation and "upgrading" in case the raw object has an old
version. Use the protected [\_fromRaw](../encoding.Serializable#_fromraw) method
to implement subclass-specific behavior.

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `raw` | `any` |

#### Returns

[`Serializable`](../encoding.Serializable)

#### Defined in

[core/src/encoding.ts:196](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L196)

---

### toBytes

▸ **toBytes**(): `Uint8Array`

Returns a serialization of the object in form of a byte array

#### Returns

`Uint8Array`

#### Defined in

[core/src/encoding.ts:230](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L230)

---

### toJSON

▸ **toJSON**(): `string`

Returns a JSON serialization of the object

#### Returns

`string`

#### Defined in

[core/src/encoding.ts:216](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L216)

---

### toRaw

▸ **toRaw**(`version?`): `any`

Creates a raw javascript object representation of the class, which can be used
for storage or data transmission. Also handles "downgrading" to previous
versions. Use [\_toRaw](../encoding.Serializable#_toraw) for subclass-specific
behavior.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `string` |

#### Returns

`any`

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

#### Defined in

[core/src/encoding.ts:170](https://github.com/padloc/padloc/blob/b00eb4fd/packages/core/src/encoding.ts#L170)

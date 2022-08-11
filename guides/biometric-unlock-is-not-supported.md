---
title: Biometric unlock is not supported
icon: fingerprint
description:
    What to expect when your device shows as not supporting biometric unlock.
---

Padloc 4 supports biometric unlock on multiple devices, using multiple providers
(Face ID, Touch ID, hardware devices, FIDO/FIDO2, fingerprint readers, etc.),
but sometimes, your device will show up as not being supported.

That is more likely to happen on the desktop apps, where support for WebAuthn in
WebViews for Windows and Linux is more limited (as there are also a lot more
possibilities than in macOS, for example).

If you're interested in understanding more about it or even potentially put
pressure on having your specific hardware/device/provider be supported, there's
[an open issue for Electron](https://github.com/electron/electron/issues/24573)
and [one for Tauri/WebKitGTK](https://bugs.webkit.org/show_bug.cgi?id=205350).

If you have any other relevant links, information, or if you have any questions,
please don't hesitate to contact us at
[support@padloc.app](mailto:support@padloc.app)!

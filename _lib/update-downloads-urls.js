const fs = require("fs");
const path = require("path");

const downloadsFilePath = path.join(__dirname, '..', '_data', 'downloads.json');

if (process.argv.length < 3) {
    process.exit(-1);
}

const version = process.argv[2];

const downloads = [
    {
        title: "Padloc for Mac",
        type: "desktop",
        icon: "apple",
        url: `https://github.com/padloc/padloc/releases/download/v${version}/padloc_${version}_macos_tauri_x64.dmg`,
        version,
    },
    {
        title: "Padloc for Mac (Electron)",
        type: "desktop",
        icon: "apple",
        url: `https://github.com/padloc/padloc/releases/download/v${version}/padloc_${version}_macos_electron_x64.dmg`,
        version,
    },
    {
        title: "Padloc for Mac (M1/M2, Electron)",
        type: "desktop",
        icon: "apple",
        url: `https://github.com/padloc/padloc/releases/download/v${version}/padloc_${version}_macos_electron_arm64.dmg`,
        version,
    },
    {
        title: "Padloc for Windows",
        type: "desktop",
        icon: "windows",
        url: `https://github.com/padloc/padloc/releases/download/v${version}/padloc_${version}_windows_tauri_x64.msi`,
        version,
    },
    {
        title: "Padloc for Windows (Electron)",
        type: "desktop",
        icon: "windows",
        url: `https://github.com/padloc/padloc/releases/download/v${version}/padloc_${version}_windows_electron_x64.exe`,
        version,
    },
    {
        title: "Padloc for Linux (amd64, AppImage)",
        type: "desktop",
        icon: "linux",
        url: `https://github.com/padloc/padloc/releases/download/v${version}/padloc_${version}_linux_tauri_amd64.AppImage`,
        version,
    },
    {
        title: "Padloc for Linux (amd64, Deb Package)",
        type: "desktop",
        icon: "linux",
        url: `https://github.com/padloc/padloc/releases/download/v${version}/padloc_${version}_linux_tauri_amd64.deb`,
        version,
    },
    {
        title: "Padloc for Linux (x86_64, Electron, AppImage)",
        type: "desktop",
        icon: "linux",
        url: `https://github.com/padloc/padloc/releases/download/v${version}/padloc_${version}_linux_electron_x86_64.AppImage`,
        version,
    },
    {
        title: "Padloc for Linux (amd64, Electron, Snap)",
        type: "desktop",
        icon: "linux",
        url: `https://snapcraft.io/padloc`,
        version,
    },
    {
        title: "Padloc for Linux (x86_64, Electron, Flatpack)",
        type: "desktop",
        icon: "linux",
        url: `https://github.com/padloc/padloc/releases/download/v${version}/padloc_${version}_linux_electron_x86_64.flatpak`,
        version,
    },
    {
        title: "Padloc for iOS",
        type: "mobile",
        icon: "apple",
        url: `https://itunes.apple.com/app/id1478877043`,
        version,
    },
    {
        title: "Padloc for Android",
        type: "mobile",
        icon: "android",
        url: `https://play.google.com/store/apps/details?id=app.padloc`,
        version,
    },
    {
        title: "Google Chrome",
        type: "extension",
        icon: "chrome",
        url: `https://chrome.google.com/webstore/detail/padloc/bjpblhcipjjiobljnniifeoaapgdflnc`,
        version,
    },
    {
        title: "Firefox",
        type: "extension",
        icon: "firefox",
        url: `https://addons.mozilla.org/en-US/firefox/addon/padloc/`,
        version,
    }
];

fs.writeFileSync(downloadsFilePath, JSON.stringify(downloads, null, 4), 'utf-8');

console.log(`${downloadsFilePath} file updated.`);

process.exit(0);

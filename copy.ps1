$fsw = New-Object IO.FileSystemWatcher
$fsw.Path = $pwd.Path
$fsw.Filter = "*.js"
$fsw.EnableRaisingEvents = $true

$copyme = {Copy-Item "D:\macro\GitHubs\wbb\whutbbcode.user.js" "$HOME\AppData\Roaming\Mozilla\Firefox\Profiles\f6fzyt8b.default\gm_scripts\WhutBBCode\WhutBBCode.user.js"}

Register-ObjectEvent $fsw "Changed" -Action $copyme

while ($true) {
    Start-Sleep -Milliseconds 100
}

## WhutBBCode? Overview

![WhutBBCode? Image](https://raw.githubusercontent.com/hateradio/wbb/master/screenshot.png "WhutBBCode?")

### Install and Source

Install it from Greasy Fork . . . [https://greasyfork.org/en/scripts/1024-whutbbcode](https://greasyfork.org/en/scripts/1024-whutbbcode "WhutBBCode? Install")

Check out the source . . . [https://github.com/hateradio/wbb](https://github.com/hateradio/wbb "WhutBBCode? Source Code")

_As of version 3.0, "WhutBBCode?" has been renamed, so you might have to uninstall previous versions of "WhutBBCode? for What.CD and Waffles.fm" from your user scripts in Greasemonkey/Tampermonkey._

### Compatibility

Most Gazelle sites are also compatible; however, they have to be included manually. **If you want me to add a site, please send me a message.**

#### Sites

*   Apollo
*   Waffles
*   Indietorrents
*   Cinemageddon
*   PTP
*   RED, GG, nWCD, BS, bs, and more . . .
*   <del>What</del> (Archived in the code)

Note that you have to save your _settings_ on every site.

#### Browsers

*   Firefox 4+
*   Opera 11+
*   Chrome 10+
*   Safari 5+

The script is known to work on Opera, Chrome, Safari with the [Tampermonkey](https://tampermonkey.net/?browser=safari "Tampermonkey") extension.

### Shortcut Keys

Shortcut keys were only tested in the above-mentioned browsers.


*   `Ctrl + b = [b][/b]` (Bold)
*   `Ctrl + i = [i][/i]` (Italic)
*   `Ctrl + u = [u][/u]` (Underline)
*   `Ctrl + s = [s][/s]` (Strike)
*   `Ctrl + k = [#]` (Ordered List Item - What.CD only)
*   `Ctrl + l = [*]` (List Item)
*   `Ctrl + h = [url=][/url]` (Link)
*   `Ctrl + m = [img][/img]` (Image)
*   `Ctrl + d = {Delete}` (Erases your message!)

### Version Info

#### Version 5

 *   Simplifies Gazelle site inclusion, only requires to use @include

#### Version 4.9.4

 *   adds support for secret-cinema.pw, fixes efectodoppler

#### Version 4.9.3

 *   adds support for efectodoppler.pw

#### Version 4.9.2

*   adds support for reportsv2.php

#### Version 4.9.1

*   adds update check with github json link (cors support)

#### Version 4.9

*   fix width when in sidebar
*   adds tehconnection, oppaitime, morethan.tv, alpharatio
*   remove update check
*   remove bwtm, nostream

#### Version 4.8

*   force button container width and text centering
*   shortcut information on button title
*   mac shortcut keys
*   red <=> pth

#### Version 4.7

*   code and emoticon refactor
*   pth emoticon
*   adds hidra.zone support

#### Version 4.6

*   edit boxes should now work in Chrome

#### Version 4.5

*   adds support for PTH, GG, nWCD, Nostream, BWTM, BS, bs
*   changes some styling for shortcut information

#### Version 4

*   adds apollo support
*   enabled all possible BBCode tags, thanks inverness
*   fixes emoticons, thanks toy

#### Version 3.1

*   Replaces Waffles.fm for ch
*   Fixes Waffles emoticons
*   Fixes .gz with .gazelle property

#### Version 3.0.1 - 3.0.2

*   Resolves Chrome errors
*   Removes extraneous gray text CSS
*   Adds mature tag

#### Version 3

*   Brand new, completely rewritten code base
*   Brand new Glyph icons from the Bootstrap source
*   More customizable, just read the source comments!
*   Same great functionality

#### Version 2

*   WhutBBCode? 2.0 looks a bit different for What.CD because of some new buttons. Overall, the align button has been separated for each individual type.

### Newer Gazelle Versions

*   Use `[code][/code]` when you want to make an item within a line mono-spaced, like I did just now. Use it for functions, (X)HTML, or any other code snippets.
*   Use `[important][/important]` to mark something urgent.
*   Use `[#]` to make ordered lists.

For reference, the list above is an unordered list; the list below is an ordered list. You don't use 1, 2, 3\. They are included automatically.

1.  This is the first item.
2.  This is the second item.
3.  This is the third item.


### Excluding Textareas from WhutBBCode?

Note: If you add "noWhutBB" to the class attribute of a textarea, WhutBBCode? will not do anything to to that text box. It will get ignored.

#### Example

```
<textarea class="noWhutBB"></textarea>
```
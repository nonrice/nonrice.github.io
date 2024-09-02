+++
title = 'Me and Paul vs. CMake (Week 5)'
date = 2024-07-28T22:57:28-04:00
draft = false 
+++

I am back to working in WhiskerToolbox. Having knowledge on dynamic linking and app bundling on MacOS became very useful, as it turned out the target audience for this app was mainly Mac users.
<!--more-->

### WhiskerToolbox: App Bundling
In order to have other people be able to use the application, specifically on MacOS since many have Macs, it is necessary to bundle the compiled result into an app package. In the process we came across two very annoying issues.

### `dylib` Bundling
In an ironic twist even though we opted for dynamically linking most libraries, in order to ship an app bundle it was necessary to contain them in the finished bundle under the `Frameworks` folder. 

If we simply handed the compiled result to someone, they would not be able to open it because the executable would be looking for files in the build directory of the developer's computer. In order to fix this we had to bundle all the libraries with the executable, then modify the exectuable's `rpath` to search for `.dylibs` in the new location. To do this for the Qt library there was a tool called `macdeployqt`. However it seems to mangle the application and cause it to be unopenable. The solution was to instead use Qt's function in CMake, which automatically generated a deploy script that worked.

In order to handle the other libraries, Paul wrote a CMake function to simply copy them into the necessary location and modify the `rpath`.

### Codesigning
Having made an app bundle myself before, I thought it was possible to run the newly packaged app without code signing. Unfortunately this wasn't the case, and it was probably because the signatures in the Qt libraries we moved into `Frameworks` became invalidated or something. Either way the app would crash, not because of any code error but because of the absence of a code signature upon opening.

Not having a code signature also included one other nuisance, which was that downloaded copies of the apps would be claimed as "damaged" when in reality it was because Apple had detected the absence of a code signature and put an extended attribute `com.apple.quarantine` onto the app, disallowing it to be opened. This issue was annoying because while I did deal with it before in the past, I had by then forgotten about it so when Paul sent me test app bundles I thought they were all broken. I really dislike Apple for these misleading practices. Another one we ran into is that even if the app had a proper code signature, if it didn't come from an Apple developer account (which costs $100), MacOS would pretend the app was unopenable. The proper way to open these kind of apps was to right click and open them. Basically Apple forces users to take a backwoods route for no good reason.

Back to the codesigning topic: on my computer I was able to generate a self signing certificate and add sign the application with it. The next step was to get this signing process into the Github CI, which in the future would be used to automatically create releases of the application upon commits. This part was really irksome as well. I had created my codesigning certificate through a tool that, on MacOS, didn't really seem to have any kind of TUI counterpart, making it impossible to replicate the process on the cloud. Eventually it was Paul who found a working CMake codesigning action by some other people, and got it to work inside of our CI.

### App Icon
On Friday I quickly updated the CI to give the generated application an app icon. It reused the function for copying libraries, since all that was necessary to make an app icon was to copy a `.icns` file (which I generated from a PNG on ([https://icns.kitchen](https://icns.kitchen)) into the `Resources` folder of the bundle.

![App Icon](/images/appicon2.png)

### Tongue Tracking
Continuing with tongue tracking since the beginning of the week, I was able to create analyses of many tongue tracking experiments of Jun's. However, on most of the results, the tracking result was not very good. For the two experiment results that were particularly well tracked, my diagrams were included in Jun's presentation on the lab meeting of Friday this week, which felt pretty great.

### Plan for the final week
Now that everything packaging related is done for WhiskerToolbox the one thing I have left to do was to finish the final feature, the graph viewer. I am also scheduled to make a presentation on the final day.
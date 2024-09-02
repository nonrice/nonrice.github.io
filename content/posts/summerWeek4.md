+++
title = 'Tongue Tracking Continued (Week 4)'
date = 2024-07-13T21:22:38-04:00
draft = false  
+++

I had a chance to show some more advanced Python skills this week.
<!--more-->

### Tongue Tracking
So work has been getting interesting again. On Monday I reorganized the work from my lab code. It has an interestig structure. I wanted to keep the "useful messiness" of the workspace, but also have clean directories that are user friendly to others. The solution I came up with was to have a Makefile that would build these clean directories simply by using `cp` command. As I write this I realize another solution could just be to symlink them. I'll give it a try the start of next week.

### Numba
Turning my code into actual Python packages and organizing it early on helped be greatly. Because the day after I had my first assignment where I would be using the code I previously wrote. I just found it so satisfying that I was importing and using my own library. 

The job was to analyze the average tongue trajectory of mice licks. Obviously this would require heavy usage of the tongue tip tracking algorithm that I implemented earlier. But it turns out, there was a lot of tongue data to analyze. To retrack the entire file, for just one experiment, would take roughly an hour for my code. I thought of many ways to speed it up. First I thought I could just reimplement my code in C++, then stitch it together with the rest of the Python notebooks with some shell commands and file operations. But I think this would be too cumbersome to do every time, so next I looked into libraries that would let me write C++ code that can be called in Python. Like how other scientific computing libraries do things. But immediately upon visiting their "Getting Started" pages I had the feeling it would be a huge headache. Eventually I settled on Numba, a Python just-in-time compiler. 

Numba operates by having the programmer mark functions to be compiled. Then once the program is running, Numba compiles each marked function into machine code which runs super fast. Since Python is not a typed language and in machine code type sizes usually must be known beforehand, it may be the case Numba waits until the function is actually called so it can know what types are used, and then compiles it. This results in a sort of "warming up" phenomenon where when the code is first run, it seems to be stuck. Actually it is just Numba compiling the code, and once this warm up phase is over the program runs really fast.

Theoretically it should be possible just to put the Numba decorator `@njit` on all my functions and have a speedup for free. But as I feared it wouldn't be that easy. The great thing about Numba is that they support optimization of NumPy, which I used heavily throughout my code. However, it seems that to support this optimization, Numba developers have to write custom operations to support each NumPy function. And it turns out, these custom operations are not complete, so Numba actually supports something more like a subset of NumPy. One annoying thing I found was that while `np.mean()` is supported, the `axis` argument is not supported. So in the end I had to implement an `np.mean()` by myself, which I think is just kind of cruel. Additionally Numba is not as lenient as pure Python when it comes to typing, so figuring out typing errors was also a massive headache since I realized when I wrote my original code, I didn't care at all about types. Implicit conversion that Numba did not like was all over the place. 

In the end the result was worth the effort. I sped up my code around $100$ times, so the original tracking process which took 1 hour now took around 1 minute. I'll definitely look into using Numba again. There is something so satisfying about writing really concise high level Python statements and seeing them execute so quickly, something that would take multiple lines of C++ code to acheive.

### Tongue Tip Tracking Analysis
So after getting the tongue tip tracked my goal was to create an average trajectory of the tongue, the reason being that other experiments would alter the behavior of the mice, so it would be interesting to compare the differences in average trajectory between those of the altered mice and regular mice. 

The process I came up with was to first split the tracking data into independent licks, which I did simply through finding gaps in the footage where the tongue was absent- indicating a lick had been completed. After that I parametized the licks and normalized this parametization such that $0$ would always refer to the beginning of the lick and $1$ would refer to the end of the lick. Now I had a function for each lick which would take in a $t\in [0, 1]$ and return a point $(x_i, y_i)$, and all I had to do was enumerate $t$ from $0$ to $1$ and take the average of the points to create the final average trajectory. 

### Next Week
Next week I will be able to analyze the trajectories of the altered mice. There is also a final large feature that Paul wants to add to the WhiskerToolbox (the name will be changing soon since now it operates on a lot more than just whisker data), which is to add a final media type: graphs. Since the researchers often track quantities related to mice, it would be great for them to be able to have a time series data scrolling alongside the video player, instead of having to repeatedly cross reference video and time series data all the time. This process is especially tedious since they often don't have the same time scale. It may also be useful for them to be able to draw masks over some region of interest and plot a graph of the brightness of that region over time, for example. 


+++
title = 'A Whisker Toolbox (Week 2)'
date = 2024-06-25T18:29:02-04:00
draft = false  
+++

After the first week I had pretty much settled into Cambridge. After becoming more familiar with the lab's work. I began doing more complicated tasks. 
<!--more-->

### The GUI tool 
This week I experienced what it was like to work with a moderately large, proper C++ project. I guess no experience is complete without large amounts of grappling with build systems. I spent a lot of time working with Paul in order to get the project building on my laptop. Fortunately I have previous experience with CMake so I wasn't completely lost. I even managed to debug some errors by myself. However the errors seemed to have a way of progressively becoming harder, and eventually all I could do was show Paul logs and error messages and wait for his help.

### Upgrading GUI tool
Now that I had a working copy of the tool on my computer I was to make many upgrades to it.
- Adding GUI for loading various types of masks
- Starting an image processing widget allowing for the user to apply various filters when playing back video and auto content

These were mainly small changes in order to get started with. Right now I am working on integrating the GrabCut tool I made in the previous week into application. To do this I am intending to first translate my Python code into C++, then implement all the necessary callbacks in C++ which can then be hooked up into the Qt events the application uses.  

### Tounge tip tracking
Jun was interested in not just tracking the region of the tongue but also the tip of the tongue, and referred me to [this paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8299742/) so I could implement those researchers' algorithm for tongue tip tracking. I was surprised that many of the contents of the paper seemed to match exactly what we were doing. Jun said that we were doing something more than what was in the paper, however I still think it is a bit wrong that, out of what I think might be competitiveness, time is effectively wasted since we are replicating steps that have already been done before. 

I was concerned that the description of the algorithm in the paper would have large amounts of jargon and be generally very complicated, but when I began to clearly read line by line it wasn't so complicated after all. I had a prototype in a Jupyter notebook very soon and later optimized the code by "translating" the "raw" Python I wrote into their NumPy method equivalents.

### Refactoring
This was pretty much just taking all of the previous Python code I wrote and making them much cleaner, adding documentation, comments and such. Then I organized everything into functions which let my programs be imported as modules. For each module applicable I also quickly implemented a CLI using `argparse` which would run when running the module directly. 

### Nerve Labeling
Continuing from last week I still was labeling the hypoglossal nerve. There was some interesting problem where it turned out that some nerves would merge into each other, meaning it wasn't guaranteed that each nerve was their own component. This was sorted out with Jun who was very well versed in the anatomy of the mice. I think during the next week I will be able to finish the hypoglossal nerve and export some videos of the scans. 

### Life
Living in Cambridge is better than I thought it'd be. I've gotten in the habit of moving my runs to the morning instead of the afternoon. The trails by the river are great, and some sections even have a dirt path alongside them. On days that I don't run, I found an informal ultimate frisbee league to play in. I have some years of casual experience during school, where I played roughly every two weeks during a free period with some friends. Here, the people were much more skilled, but it was still fun. It turns out I can run faster than a good amount of the people there so I usually find myself receiving throws near the end zones.  

The food is also not bad. Usually I eat at home but the Shojo Cambridge restaurant is good. For lunch so far I've tried Al's Tech Square Cafe and Area Four restaurant (other times I usually pack my own food) which are both very close to the MIBR building.

![Pizza](/images/IMG_0017.jpeg)



+++
title = 'SummerWeek2'
date = 2024-06-25T18:29:02-04:00
draft = True 
+++
After the first week I had pretty much settled into Cambridge. 

# Tongue Tracking
## Compiling GUI tool
This week I experienced what it was like to work with a moderately large, proper C++ project. I guess no experience is complete without large amounts of grappling with build systems. I spent a lot fo time working with Paul in order to get the project building on my laptop. Fortunately I have previous experience with CMake so I wasn't completely lost. I even managed to debug some errors by myself. However the errors seemed to have a way of progressively becoming harder, and eventually all I could do was show Paul logs and error messages and wait for his help.

## Tounge tip tracking
Jun was interested in not just tracking the region of the tongue but also the tip of the tongue, and referred me to [this paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8299742/) so I could implement those researchers' algorithm for tongue tip tracking. I was surprised that many of the contents of the paper seemed to match exactly what we were doing. Jun said that we were doing something more than what was in the paper, however I still think it is a bit wrong that, out of what I think might be competitiveness, time is effectively wasted since we are replicating steps that have already been done before. 

I was concerned that the description of the algorithm in the paper would have large amounts of jargon and be generally very complicated, but when I began to clearly read line by line it wasn't so complicated after all. I had a prototype in a Jupyter notebook very soon and later optimized the code by "translating" the "raw" Python I wrote into their NumPy method equivalents. 


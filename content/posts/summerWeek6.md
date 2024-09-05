+++
title = 'Final Stretch (Week 6)'
date = 2024-07-28T23:30:05-04:00
draft = false 
+++

I concluded my final week by adding a final large feature, doing lots of refactoring/documentation, and presenting it all at the lab meeting!
<!--more-->

### WhiskerToolbox
So in order to develop the final feature I first had to find a plotting library. It seems that Paul had made a basic analog viewer in the past before, but I think it is way to much effort to do that myself. We settled on a project called [JKQTPlotter](https://github.com/jkriege2/JKQtPlotter). With slightly better knowledge of CMake, I was able to include this library into the source code with just a bit of help from Paul. 

One thing that Paul brought up after I was midway into integrating this library into WhiskerToolbox was that it might not be the best choice in the future, since much of the data may have huge numbers of datapoints, which would slow the plotter down. The library actually had a fast plotting window coded with OpenGL but it was deprecated so we decided our best bet was to switch to another library sometime down the road.

In a day I was able to sync up the graph with the the analog viewer, and also plot a analog series along the timeline. After that, I added the ability to customize the series by scaling and transforming it. It was also necessary to plot a digital signal, but there wasn't actually a class for the kind of "shaded window sequence" I was trying to make. There was a class for creating a single "shaded window", so I ended up subclassing the general graph class and making it pass down function calls into an array of these single shaded windows. 

Doing all these things required a lot of interaction with the API of the library. This was my first time working with such a small, yet heavily developed library. The magnitude of features it had was on par with industry respected libraries, but the documentation was not. Normally when working with libraries like Qt, a simple Google search about any problem that I might have would return many forum posts, pages of Qt documentation, and maybe even blog posts of people writing their own tutorials for the topic I was searching. For JKQTPlotter, I had nothing, other than the documentation from the developer, which, to his credit was very well written (not that I have any standards yet). It was my first time actually "coding with the docs".

I had a fully fledged graph viewer by Wednesday and continued to iron out some issues both with the graph viewer and in other parts of the application, which was being tested by Jun while labeling experiments. Finally on Thursday, after fully settling on the analog viewer, Paul gave me some demonstration data that I would use in the Friday presentation, which would be solely about WhiskerToolbox and the work I did on it. 

### Presentation Time
I was surprised that I was not very nervous about the presentation. I had expected to be much more tense but overall I was able to talk fluidly through the presentation. After that I finished the day early, writing a final set of documentation for all of my code and then testing out the new TETR.IO update which happened to release on the afternoon, right after my presentation.

### Last Chance To See... Maybe Not?
I walked around the MIT campus to conclude my penultimate day in Cambridge and mainly saw some art galleries. They were interesting since they had some "true" modern art. One of the rooms was bewildering in what it contained as "art", sometimes being just a few objects taped to the wall.

On Saturday I got on the train, leaving the way I came.


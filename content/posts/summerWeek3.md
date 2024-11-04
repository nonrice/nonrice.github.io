+++
title = 'Tongue Tracking (Week 3)'
date = 2024-07-07T12:32:02-04:00
draft = false
+++


This was a short week since the 4th and 5th were both holidays (I went on a whale watch!), followed immediately by the weekend. I mainly focused on a single thing during this week.  
<!--more-->

### Tongue Tracking
For the three days during this week I was working on integrating the GrabCut tool I made into the application. To do this I finally created a Qt widget by myself, where previously I was only modifying existing widgets Paul had added.

I first translated my Python GrabCut tool into C++ which was pretty easy since OpenCV had C++ bindings as well. I built the app in C++ a little differently by making sure to separate the GUI and the controls, whereas in the Python version they were pretty much interlocked together. My reasoning was as such: in this way it would be very easy to swap the GUI. I developed this C++ version of the tool separately, "black boxed" in order to avoid interference with the main application. To test it, I quickly wrote up a GUI. The controls portion of the C++ version simply exposed an interface of functions which can then be quickly hooked up to the GUI and tested. Then, when ready to deploy it onto the actual application I only needed to paste the code in, then hook up the interface to the GUI of the actual application.

The process was not as streamlined as I hoped, but only because creating the GUI inside Qt had a learning curve which I had to figure out. The actual "binding" of the interface of my C++ tool was pretty straightforward, and satisfying that it had worked exactly liked I had planned it out to do. I am not sure if this is a standard practice for software development elsewhere. But I think it was pretty smooth.

![Whale Watch](/images/IMG_0069.jpeg)
+++
title = 'Summer Week 1'
date = 2024-06-23T18:32:41-04:00
draft = false 
+++

This summer I have a 6 weeks internship at the McGovern Institute for Brain Research and I want to document what I do there.
<!--more-->
On my first day I met Jun and Paul who would oversee my work for the rest of the week. It was intended that I help in the more technical side of research, which was more related to my strengths.

# Tongue tracking
The Wang Lab where I spent my time studied the brain by using mice in experiments. One experiment collected data on the licking pattern of mice while they drank water. A high speed camera recorded the mice, whose heads were locked in place in a water-feeding contraption.

The goal was to accurately determine where the tongue was at all times by running segmentation processes on the video frames. 

## Cleaning up existing masks
When I got to the lab a neural network was already created to perform this task. However, its output was not completely accurate, correctly segmenting the general region, but making mistakes on the boundary. One such mistake was the appearance of small "blobs" in the labelings which were not part of the tongue. To fix this I wrote a script to extract the segmentation data (it was stored in a special format) and remove all but the largest connected component of pixels, which is assumed to be the tongue. This was the first assignment I completed at the lab!

While this improved the segmentation masks by a bit, it turns out the underlying issue was faulty training data supplied to the neural network. The training data itself turned out to have labeling issues.

## Tool for creating training data
To create the training data for the original neural network the researchers simply opened video frames in Photoshop and quickly selected the tongue with a magic wand tool. I have never used Photoshop before but it is my understanding that doing so was cumbersome, hence why my next task was to create a more streamlined image processing tool that would make creation of training data easier. 

Paul suggested that I used the grabcut tool from OpenCV, which turned out probably to be the best option. The algorithm iteratively refines the mask it creates, the greatest benefit being that it allows user-input: if the segmentation is incorrect, the researcher can correct the algorithm by directly drawing on the segmentation, which would then be noted of as the algorithm continues to refine it.

In true programmer fashion I didn't write most of the code for this tool myself- it turned out that OpenCV kindly created a sample program that opened up all the capabilities of the grabcut tool in a user-friendly way. The bulk of my work on this tool consisted of adaptations of this tool, including but not limited to:
- Ability to specify large amounts of images to be sequentially processed
- Tweaked the very rudimentary brush tool to have it draw a consistent stroke
- Various interface changes

Currently I am finishing this tool and it should be ready the next week.

## Working with custom GUI tool from the lab
The lab already created an application to play back the footage of the mice and overlay generated masks, also providing some other utilities. I was assigned to add features to this app related to tongue tracking and jaw tracking, one of which probably is to integrate the tool describe above into this application.

# Mouse nerve labeling
Using a light sheet microscope the lab created very detailed scans of mice head nervous systems. The process was interesting- the genetics of the mice were mutated such that their nerve cells would become flourescent. Then many chemicals were used to make their flesh translucent. When the light sheet microscope produced the correct type of light, all the nerve cells emitted light which would then be captured and processed.

I initially thought that this task would be very difficult, since I had no knowledge of the anatomy of a mouse head, or even a human head for that matter. It turns out this task was easier than I thought. Each nerve, though complicated, in the end was still a single connected component. This meant that as long as I had a starting point to recognize each nerve with, the coloring process actually be very easy.

This week I started with labeling the hypoglossal nerve, which leads to the tongue. This nerve was probably the easiest to identify, originating from a distinctive blob in the middle of the head.

I think the researchers assigned me this task probably because I have previous experience with 3D modeling software in creating animations and such, but I think that in reality this task requires practically no expertise in any field. It is enjoyable though, especially to put on some music and just color away.

The tech used for this coloring process was also fascinating, it was done through an Oculus Quest connected to a beast of a computer. It had as much memory as the size of my laptop disk. Yet the sheer size of the head scans still made the visualization nearly unusable on occasion.



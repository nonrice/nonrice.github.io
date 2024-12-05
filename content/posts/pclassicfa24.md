+++
title = 'PClassic Fall 2024'
date = 2024-12-01T17:00:23-05:00
draft = true 
+++
The nice thing about competitive programming is that you can compete as much as you want without actually traveling anywhere. But in-person events always have an appeal which not even the most elaborate online setup might replace.
<!--more-->
So for my second contest of the school year, I teamed up with two other members of my school's competitive programming club to attend the Philadelphia Classic as UPenn.

### 1 week before...
Other than solving practice problems, my preparation for this contest began upon noticing that only one computer per team was allowed in the contest hall. I offered my laptop, which my team accepted. 

Until this point, my competitive programming setup might considered an "acquired taste", especially by non-competitive programmers. I enjoyed the simplicity of having a barebones setup--a near-vanilla Vim configuration with a few lines of `.vimrc` to define compiling/running keybinds. Even my terminal configuration played a part; for years I'd been using a bitmap font with a hand-picked colorscheme, which I spent more time than I'd like to admit choosing. 
![The setup](/images/myvim.png "The setup")

Creating a new setup that each of my team members could use was a fun challenge--it also opened my eyes to many useful tools I hadn't bothered to try in the past. Some of these tools have become much more advanced than I was expecting. For example, [this one](https://marketplace.visualstudio.com/items?itemName=DivyanshuAgrawal.competitive-programming-helper) not only simplifies the process of compiling, running, pasting input, and comparing output into a single button, but also connects to a browser extension which scrapes the problem contents directly off of the browser webpage, allowing a programmer to immediately start working.

Yes, that was a Visual Studio Marketplace link. As a result of this contest preparation, these days I exclusively use Visual Studio Code for competitive programming (I used it in the past for other projects). Turns out, there usually are reasons why things like it are so mainstream.

### Contest day
It was a 3 hour drive to the UPenn. Thanks to my father who offered to drive, I slept most of the ride. It seems sleep is incredibly important for mentally challenging pursuits. I once read an anecdote online from a person who was trying to study Chess in order to get a better sense of the game for the Chess-related novel they were writing. They reported how they naturally began sleeping 3-4 hours more than they usually slept, after they began their studies! This story comes up in my mind every time I think of sleeping in preparation for some big event, and it usually helps me sleep despite the excitement. 

After arriving at the campus and checking in, my team and I were free to walk around before the contest began. We spent this time visiting other team tables, getting food, and setting up our own table. One of the science and technology magnet schools in our area (TJ...) managed to send upwards of ~20 people (we counted) to this contest, which is even more impressive considering some of their programmers were away at a math competition happening on the same day. 

I wasn't sure what to expect, but the contest start wasn't too momentous--just my teammates and I watching as the clock on the online judge counted down to zero. We immediately ripped apart the problem booklets in order to start dividing the tasks to each other. Even in the advanced division there were many simple problems, so we soon started implementing our solutions. Here, I was pleased (and relieved) to see all my editor configurations running smoothly, from the templating system to the keyboard switcher (one of my teammates was a DVORAK user). 

Our crusade of solves began to slow down at roughly the two hour mark. We didn't know it then, but actually that was when it would completely stop, despite the full time limit being 4 hours. At that point all we had left were the 3 hardest problems of the contest. The hardest one was a math-oriented problem. One of my teammates took a look, wrote a solution, but then realized that he had misunderstood the problem and it was in reality much harder than he originally thought. With him being the strongest at math in our team, we decided to skip it. So for the latter half of the contest, he and I tackled the other two problems independently (our third teammate had already contributed to the best of his ability). 

The problem I had was fairly unassuming. Just simulate a process of some cars moving and crashing, but do so with some optimization. It was this optimization part that made the problem difficult. Simply simulating the process like it is described in the problem would cause the solution to fail for being too slow. With these kinds of problems, there really isn't a specific algorithm or technique to memorize and use, so I was coming up with several methods I could use in order to correctly expedite the simulation--doing so took roughly an hour. But implementing my ideas into code was another challenge--to be honest, it shouldn't have been, but having focused my energy on other projects throughout the summer and fall I was a bit out of practice. 

Test case #14. "Wrong answer on test 14". This message struck anxiety into my heart every time I saw it--and I saw it a lot. In competitive programming, after submitting a solution the online grader will run it against many hidden test cases, to ensure its correctness. And it just so happened that whatever test case 14 was, it thwarted my attempt at solving this problem every time I resubmitted it, hopefully longing at the grading system. Actually, I now know the exact contents of this hidden case, because after the contest I requested it from the organizers. Yet, there was still something about my implementation that would fail when confronted with that case. It turns out that I had come up an approach nearly identical to the intended one. But it seems like, amongst the web of logic I wrote (unfortunately my coding tends to get messy under extreme pressure), something escaped my desperate rounds of scrutiny and continually sabotaged my trials. 

As the sky darkened and the contest timer approached the end, I made my last submission to the problem. It would be so nice to conclude this blog on a high note... "and to my surprise, it was accepted!!!". But no, I, my team, and even the other team we shared our contest hall with (they had given up around 30 minutes earlier and were cheering us on now) watched as the test case counter climbed up and up, then froze. Seconds later, the final verdict of my submission came through: "Wrong answer on test 14". 

### Reflections

There was a silver lining to this misfortune though; solving my problem would only push us up by one rank, into fourth place, still not enough to reach the prizes, reserved only for the top three. Had PClassic been an online contest, this would be the only takeaway I get. The experience of getting familiar with other teams (despite spending so much time competitive programming, I'm actually pretty isolated from in-person communication with other competitive programmers, other than the bubble that is my school club), exploring the university campus, and even the food, all brought out something new in competitive programming to me.

Our next planned contest is at the MIT Informatics Tournament... considering my final takeaways from this contest, I feel MIT will be a terrific experience. 
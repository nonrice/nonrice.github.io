+++
title = 'MathProblems1'
date = 2024-04-21T10:43:58-04:00
mathjax = true
+++
I will write about some math problems I find interesting. I think my goal will be to qualify for AIME through AMC 12. I started competition math very late but I guess enjoying it is more important than starting time. Maybe my CP experience will help me, or maybe this may help my CP experience. 

## 1. https://mathdash.live/problem/6602937808c7d9edd61d1d8e

Substitution gives $7x + 7y = 63$ so $x+y = 9$.

Squaring it gives $x^2 + 2xy + y^2 = 81$ and using $xy=6$ again the answer is $x^2 + y^2 = \boxed{69}$

All the steps are some neat subsitutions which I think are satisfying to solve. I also noticed it seems product expansions like the form $(a_1+a_2+\ldots)(b_1+b_2+\ldots)\ldots$ seem to be common in competition math.

## 2. https://mathdash.live/problem/661740e86d7e42e4941cf4d2

This is probably the hardest problem I did this week. So I started with translating the statement:
$$
100x + y = x^2 + y^2
$$
I was lost until I realized this produced a circle equation. So I thought maybe I can turn it into the standard form of a circle. To do this I recalled from precalculus class to complete the squares for $x$ and $y$.
$$\begin{align}
0 &= x^2 - 100x + y^2 - y\\\\\\
2500 + \frac{1}{4} &= (x-50)^2 + (y-\frac{1}{2})^2\\\\\\
10001 &= (2x-100)^2 + (2y-1)^2
\end{align}$$
Now it becomes very neat. If $p$ and $q$ are subtituted as $2x-100$ and $2y-1$ respectively it becomes a circle centered at $(0, 0)$. 
$$10001 = p^2 + q^2$$
The observation becomes if $(p, q)$ is a solution then $(\pm p, \pm q)$ are also solutions. With the provided solution $(x, y) = (88, 33)$, $(p, q) = (76, 65)$. So to find other $(x, y)$ we can try $(p, q) = (\pm 76, \pm 65)$. Using $(-76, 65)$ is the only other pair that yields positive $x$ and $y$ and it gives $(x, y) = (12, 33)$ for an answer of $\boxed{1233}$.

For a while I didn't realize this observation and was instead stuck trying to find $(p, q)$ other than $(76, 65)$. Turns out using Wolfram the only other possible pair was $(1, 100)$ which produces an invalid solution. 

## 3. https://mathdash.live/problem/65ee2bba6f93f642333ecb73
The statement creates a grid of straight lines $y=7, 11,\ldots 17$ and $x=17, 19,\ldots 37$. Now it's asking how to use the lines to go from $(7, 17)$ to $(17, 37)$.

It's then easy to see that no matter what travel, the number of intersection points passed is invariant. Furthermore at each intersection point a decision is made: go down or right? There are $4$ $y$ lines so you must move right $3$ times, and similarly you must move down $5$ times for a total of $8$ decisions. There's no restriction on when to make what decision so at any $3$ points you must choose to move right and otherwise move down. In other words the answer is $\binom{8}{3} = \boxed{56}$.

Paths on grids is a very common niche for CP problems. In fact when I first saw this I was tempted to use the classic DP recurrence $dp(i, j) = dp(i-1, j) + dp(i, j-1)$. The interesting thing is such a recurrence is easier to program than a binomial coefficient since in CP the inputs for these type of problems get large- meaning to program the binomial coefficients you would first need a binary exponentation, then precalculating factorials and their inverses under the provided modulus, then finally implementing the combination function. Whereas to adapt the DP approach all is needed is to append a modulus operation to the recurrence. But by hand, using binomial coefficient is much faster. 


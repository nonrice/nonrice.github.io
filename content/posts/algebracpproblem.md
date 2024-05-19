+++
title = 'Algebra CP Problem'
date = 2024-05-19T12:01:09-04:00
draft = false
+++
Link: https://codeforces.com/contest/1618/problem/E

Essentially the problem asks to solve a system of equations:
$$
\begin{align*}
1a_1 + 2a_2 + 3a_3 + \ldots + na_n &= b_1\tag{1}\\\
2a_1 + 3a_2 + 4a_3 + \ldots + 1a_n &= b_2\tag{2}\\\
&\space\space \vdots\\\
na_1 + 1a_2 + 2a_3 + \ldots + (n-1)a_n &= b_n\tag{n}
\end{align*}
$$
Traditional methods to solve systems are too slow for $n\leq 2\cdot 10^5$. But the structure of the equations means such general algorithms are not needed.  

Add the equations to get:
$$
\begin{align}
\frac{n(n+1)}{2}\sum a &= \sum b\\\
\sum a &= \frac{2}{n(n+1)}\sum b
\end{align}
$$

Now there exists a procedure to compute all $a_i$. Let $i=1$ for example.

First subtract $(n)$ from $(1)$:
$$
\begin{align}
(1-n)a_1 + a_2 + a_3 + \ldots + a_n &= b_1 - b_n\\\
na_1 + \sum a &= b_1 - b_n\\\
a_1 &= \frac{b_1 - b_n - \sum a}{n}
\end{align}
$$
From above, the value of $\sum a$ is known. So this is a closed expression for $a_1$. The general expression works out to be:
$$
a_i = \frac{b_i - b_{(i-2\bmod n) + 1} - \sum{a}}{n}
$$
Where $b_{(i-2\bmod n) + 1}$ is the equation prior to $b_i$.

This formula can be applied for $i\in [1, n]$ to compute the requested answer.

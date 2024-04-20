+++
title = 'SQRT Decomposition On Queries'
date = 2024-02-20T20:33:41-04:00
mathjax = true
summary = "Versatile online range queries technique."
+++
You can use SQRT Decomposition On Queries to solve range query problems with some kind of update operation. It is not as well documented as two popular algorithm SQRT based algorithms (Mo's Algorithm, SQRT Decomposition).

The best way to explain this technique is through example. You have the problem:

You have an array $a$ of $n$ integers. Process $q$ queries. Queries come in two types:
1. Add $x$ to the range $[l, r]$
2. Compute the sum of the range $[l, r]$

Let's see a naive solution: maintain prefix sum to compute type 2 queries in $\mathcal{O}(1)$. Then perform type 1 queries in $\mathcal{O}(n)$. It's too slow if we have many type 1 queries.

First observe, if we want to perform several type 1 queries at the same time, it can be done trivially in $\mathcal{O}(n)$ by storing deltas for the end points of each query, then applying them altogether in one sweep.
```cpp
for (auto [l, r, x] : updates){
	d[l] += x;
	d[r+1] -= x;
}
for (int i=1; i<=n; ++i){
	d[i] += d[i-1];
}
for (int i=1; i<=n; ++i){
	d[i] += d[i-1];
	p[i] += d[i];
}
```
Secondly observe, given a type 1 query and a type 2 query, you can easily tell the effect of the type 1 query in $\mathcal{O}(1)$ by just looking at their intersection.

These two properties give a solution. We maintain prefix sum and a cache of queries. This cache does not exceed size $b$. Now let's look at how queries are handled.
- Type 1: Insert the query into the cache
- Type 2: First use the prefix sum. Then for each query in the cache, add its effect to the answer.

What if the cache exceeds size $b$? We need to empty it and apply its effect into the prefix sum. This is just like performing several type 1 queries at the same time, which is doable in linear time. 

That's it. Now we see the running time. Unsurprisingly, $b=\sqrt{q}$. The total time complexity is simple to calculate and is $\mathcal{O}((n+q)\sqrt{q})$. It is fast enough for many problems. 

Of course, this strategy is slower than segment tree, the primary DS used to tackle such RURQ problems. However, this strategy is far more versatile. You can handle many different kinds of queries and updates, without much thinking.


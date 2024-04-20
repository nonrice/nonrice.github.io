+++
title = 'Cache Locality Optimization'
date = 2024-04-02T18:08:20-04:00
mathjax = true
+++
There is the problem: "Given an array $a$ of length $n$ where, $1\leq a_i\leq 10^9$ and $1\leq n\leq 10^5$, count the ordered pairs $(i, j)$ such that $i<j$ and $a_i\\& a_j = 0$ where $\\&$ denotes the bitwise AND operation."

An inexperienced CPer may disregard the constraint on $n$ and write the obvious $\mathcal{O}(n^2)$ solution.
```cpp
for (int i=0; i<n; ++i){
	for (int j=i; j<n; ++j){
		ans += (a[i] & a[j]) == 0;
	}
}
```
To test the code I use a randomly generated array with $n=10^5$. With [Codeforces custom invocation](https://codeforces.com/problemset/customtest) which automatically runs the program multiple times for accurate timing, the program took 2.9s. The majority of time constraint lies between 1-2s, so this is too slow. 

However, rearranging the sequence of memory access improves the running time. Here the array is broken into blocks of size `b`. Then, pairs of blocks are enumerated. For the current pair of blocks, one element from each block is chosen to form the pairs that are checked.
```cpp
for (int i=0; i<n; i+=b){
	for (int j=0; j<n; j+=b){
		for (int k=i; k<i+b; ++k){
			for (int w=j; w<j+b; ++w){
				ans += (a[k] & a[w]) == 0;
			}
		}
	}
}
```
Typical CPUs will prefetch memory surrounding a memory access, putting into CPU cache which is much faster. Compared to the original approach, this approach leverages this prefetched memory more. The idea of the "blocks" is to ensure the accesses of `a` are not as "all over the place". As a result, this code runs in 0.8s, a large boost!
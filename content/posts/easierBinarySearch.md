+++
title = 'Easier Binary Search'
date = 2024-02-10T21:24:35-04:00
mathjax = true
summary = "Alternative to traditional binary search."
+++
Everyone knows the traditinal binary search algorithm using $l$ and $r$ pointers. However to new CPers it is especially easy to make a bounds mistake. When I can't use `lower_bound` or the like I implement a different method of binary searching. It is similar to the binary lifting technique for trees.

Let $f(x)$ be a boolean function defined on the range $[l, r]$. It evaluates to $\text{true}$ for some prefix of $[l, r]$ and $\text{false}$ otherwise. We need to find the largest $x$ which gives a $\text{true}$ result. The implementation is as such:
```cpp
int x = l-1;
for (int step=r-l+1; step>=1; step/=2){
	while (x+step <= r && f(x+step)){
		x += step;
	}
}
```
The idea is very simple. Start $x$ at the lower bound. Then make steps forward, maintaining $f(x)$ is $\text{true}$. Once no more steps can be made, make the step size smaller and repeat.

I think it is a much cleaner implementation of binary search. Yet, the only place I have seen it documented is in this [introductory USACO book](https://darrenyao.com/usacobook/cpp.pdf). However a decent CPer likely could think of it himself.

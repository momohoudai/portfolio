---
title: "Circle-Finite Line Collision"
date: 2021-04-28T12:00:00+08:00
authors:
  - Gerald Wong
tags:
  - Collision
---

Recently, I had to derive this particular collision detection algorithm for my bullet hell genre game. It's an interesting algorithm that can be expanded to deal with the 'moving circle vs static circle' and 'moving circle vs moving circle' problems.  

<!--more-->

(PS, maybe one day I'll use latex to make the notations easier to read)

Note that this article does not take into account collision responses; its goal is simply to check if the objects involved are colliding (but perhaps it is possible to derive the variables needed for collision response from this algorithm).

Also, a disclaimer here is that, we assume that whoever is reading the article is familiar with Linear Algebra or at least vector-related math. I won't go into details of vector-specific operators such as projection and dot product. That is hopefully for another article for another time.

## Circle-Finite Line Collision Check

We are given a line `$ l $` where `$ \dot{m} $` and `$ \dot{n} $` represents the start and end point of the line segment respectively. We are also given a circle which an origin at point `$ \dot{c} $` with radius `$ r $`. Determine whether the circle is colliding with the line.

![](/img/blog_img/20210428_circle_line_collision/1.jpg)

The general idea is to find the point on the line `$ l $` which will be the shortest distance from the line `$ c $`. We will call this point `$ \dot{s} $`, and the shortest distance `$ d $`. Next, we need to figure out whether this point `$\dot{s}$` exists within our line segment. Finally, we figure out if `$ d $` is greater than `$ r $`. If it is not, it means that it is intersecting. For all other cases, it does not intersect. In other words:

- Find `$ \dot{s} $` and `$d$`.
- Check if `$ \dot{s} $` exists within our line. If it is not, we are not intersecting
- Check if `$d$` is greater than `$r$`. If it is not, we are intersecting.

![](/img/blog_img/20210428_circle_line_collision/2.jpg)

There is a small caveat we need to cover before we continue, regarding checking if `$ \dot{s} $` exists within our line. It would not cover the case illustrated below.

![](/img/blog_img/20210428_circle_line_collision/3.jpg)

Thankfully, this is conceptually easy to solve. We extend our line ends (`$ \dot{m} $` and `$ \dot{n} $`) by a factor of  `$r$`. We update our list:

- Extend `$ \dot{m} $` and `$ \dot{n} $` line segment end points by `$r$`
- Find `$ \dot{s} $` and `$d$`.
- Check if `$ \dot{s} $` exists within our line. If it is not, we are not intersecting
- Check if `$d$` is greater than `$r$`. If it is not, we are intersecting.

## Extend line segment start and end points by a factor of the circle's radius

First, we need to find the unit vector to extend `$ \dot{m} $` and `$ \dot{n} $`. First, get the vector `$ \vec{v} $` that goes from `$ \dot{m} $` to `$ \dot{n} $` by subtracting `$ \dot{m} $` from `$ \dot{n} $` :


$ \vec{v} = \dot{n} - \dot{m} $  

then we normalize it to get the unit vector `$ \hat{v} $`, where `$|\vec{v}|$` is the magnitude/length of `$ \vec{v} $`:

$ \hat{v} = \dfrac{\vec{v}}{|\vec{v}|} $

Since `$\hat{v}$` is the unit vector of `$ \vec{v} $`, we simply multiply it with `$r$` to get the amount to translate `$ \dot{m} $` and `$ \dot{n} $` to 'extend' the line. Thus, our new `$ \dot{m} $` and `$ \dot{n} $` (which we will denote as `$ \dot{m'} $` and `$ \dot{n'} $`) will be:

$ \dot{m'} = \dot{m} - (\hat{v} * r) $

$ \dot{n'} = \dot{n} + (\hat{v} * r) $

## Find the point that is the shortest distance from the line to the circle

For those familiar with vector arithmetic, to find the point `$ \dot{s} $`, it is simply the projection of the vector formed by `$ (\dot{c} - \dot{m}) $` onto `$ \vec{v} $`. I would suggest those not familiar with projection to give it a look. Anyway, the formula is simply:


$ \dot{s} = \dfrac{((\dot{c} - \dot{m}) ・\vec{v} }{\vec{|v|}}  *  \hat{v} + \dot{m} $

## Check if s is within our line

This is easier than it looks. Imaging that we have a line formed by `$ \dot{m} + t(v) $`, where `$t$` represents a scalar value such that if it is 0, we will get `$ \dot{m} $` and if it is 1, we will get `$ \dot{n} $`. 

In other words, `$t$` is a ratio. Also, since we already know that `$ \dot{s} $` is definitely on the line, it means that we can safely say that there exists a `$t$` such that:


$ \dot{m} + t(\vec{v}) = \dot{s} $


We can then choose any element of `$\vec{v}$` to find `$t$`. Note that the element that you choose from  `$ \vec{v} $` must not be 0. 

I.e. if `$ v_x = 0 $`, use `$ v_y $` instead, etc. There won't be a case where all elements of `$\vec{v}$` is 0 because...that wouldn't form us the line `$l$` anymore.


$ m_x + t(v_x) = s_x $

$ t(v_x) = s_x - m_x $

$ t = \dfrac{(s_x - m_x)}{v_x} $


If `$t$` is lesser than 0 or greater than 1, we are not colliding. Otherwise, we go to the final section.

## Check the distance between the circle and the line

Finally, we want to find the shortest distance `$d$` between the circle and the line. With that, we will compare it against the radius of the circle `$r$`. This is simply finding the distance between `$\dot{c}$` and `$\dot{s}$` using our favorite Pythagoras Theorem, and comparing it against `$r$`.

In fact, if you do not like dealing with square roots, we can just compare the `$d^2$` with `$r^2$` 

$ d^2 = (\dot{c} - \dot{s})_x * (\dot{c} - \dot{s})_x + (\dot{c} - \dot{s})_y * (\dot{c} - \dot{s})_y $

$ r^2 = r * r $

If `$d^2$` < `$r^2$`, then we have a collision!

## Conclusion

Now that we have this, hopefully we can expend it to deal with other problems such as moving circles against moving circles, which will be covered in another article soon.



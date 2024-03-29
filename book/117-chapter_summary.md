---
title: Chapter Summary
---

<h3 id="filepos3185005"><a id="filepos3185038"></a>Chapter Summary</h3>
<p>In C++, memory is allocated through <code>new</code> expressions and freed through <code>delete</code> expressions. The library also defines an <code>allocator</code> class for allocating blocks of dynamic memory.</p>
<p>Programs that allocate dynamic memory are responsible for freeing the memory they allocate. Properly freeing dynamic memory is a rich source of bugs: Either the memory is never freed, or it is freed while there are still pointers referring to the memory. The new library defines smart pointers—<code>shared_ptr, unique_ptr</code>, and <code>weak_ptr</code>—that make managing dynamic memory much safer. A smart pointer automatically frees the memory once there are no other users of that memory. When possible, modern C++ programs ought to use smart pointers.</p>

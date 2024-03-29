---
title: Chapter Summary
---

<h3 id="filepos2707156"><a id="filepos2707189"></a>Chapter Summary</h3>
<p>The standard library defines about 100 type-independent algorithms that operate on sequences. Sequences can be elements in a library container type, a built-in array, or generated (for example) by reading or writing to a stream. Algorithms achieve their type independence by operating in terms of iterators. Most algorithms take as their first two arguments a pair of iterators denoting a range of elements. Additional iterator arguments might include an output iterator denoting a destination, or another iterator or iterator pair denoting a second input sequence.</p>
<p>Iterators are categorized into one of five categories depending on the operations they support. The iterator categories are input, output, forward, bidirectional, and random access. An iterator belongs to a particular category if it supports the operations required for that iterator category.</p>
<p>Just as iterators are categorized by their operations, iterator parameters to the algorithms are categorized by the iterator operations they require. Algorithms that only read their sequences require only input iterator operations. Those that write to a destination iterator require only the actions of an output iterator, and so on.</p>
<p>Algorithms <em>never</em> directly change the size of the sequences on which they operate. They may copy elements from one position to another but cannot directly add or remove elements.</p>
<p>Although algorithms cannot add elements to a sequence, an insert iterator may do so. An insert iterator is bound to a container. When we assign a value of the container’s element type to an insert iterator, the iterator adds the given element to the container.</p>
<p>The <code>forward_list</code> and <code>list</code> containers define their own versions of some of the generic algorithms. Unlike the generic algorithms, these list-specific versions modify the given lists.</p>

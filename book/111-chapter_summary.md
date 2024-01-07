---
title: Chapter Summary
---

<h3 id="filepos2887561"><a id="filepos2887594"></a>Chapter Summary</h3>
<p>The associative containers support efficient lookup and retrieval of elements by key. The use of a key distinguishes the associative containers from the sequential containers, in which elements are accessed positionally.</p>
<p>There are eight associative containers, each of which</p>
<ul><li>Is a <code>map</code> or a <code>set</code>. a <code>map</code> stores key-value pairs; a <code>set</code> stores only keys.</li><li>Requires unique keys or not.</li><li>Keeps keys in order or not.</li></ul>

<p>Ordered containers use a comparison function to order the elements by key. By default, the comparison is the <code>&lt;</code> operator on the keys. Unordered containers use the key type’s <code>==</code> operator and an object of type <code>hash&lt;key_type&gt;</code> to organize their elements.</p>
<p>Containers with nonunique keys include the word <code>multi</code> in their names; those that use hashing start with the word <code>unordered</code>. A <code>set</code> is an ordered collection in which each key may appear only once; an <code>unordered_multiset</code> is an unordered collection of keys in which the keys can appear multiple times.</p>
<p>The associative containers share many operations with the sequential containers. However, the associative containers define some new operations and redefine the meaning or return types of some operations common to both the sequential and associative containers. The differences in the operations reflect the use of keys in associative containers.</p>
<p>Iterators for the ordered containers access elements in order by key. Elements with the same key are stored adjacent to one another in both the ordered and unordered containers.</p>

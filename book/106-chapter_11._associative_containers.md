<h2 id="filepos2718579">Chapter 11. Associative Containers</h2>
<p>Contents</p><ul><li><strong><a href="107-11.1._using_an_associative_container.html#filepos2724280">Section 11.1 Using an Associative Container</a></strong></li><li><strong><a href="108-11.2._overview_of_the_associative_containers.html#filepos2739630">Section 11.2 Overview of the Associative Containers</a></strong></li><li><strong><a href="109-11.3._operations_on_associative_containers.html#filepos2776538">Section 11.3 Operations on Associative Containers</a></strong></li><li><strong><a href="110-11.4._the_unordered_containers.html#filepos2872751">Section 11.4 The Unordered Containers</a></strong></li><li><strong><a href="111-chapter_summary.html#filepos2887561">Chapter Summary</a></strong></li><li><strong><a href="112-defined_terms.html#filepos2890511">Defined Terms</a></strong></li></ul>

<p>Associative and sequential containers differ from one another in a fundamental way: Elements in an associative container are stored and retrieved by a key. In contrast, elements in a sequential container are stored and accessed sequentially by their position in the container.</p>
<p>Although the associative containers share much of the behavior of the sequential containers, they differ from the sequential containers in ways that reflect the use of keys.</p>
<p><a id="filepos2720452"></a><em><a href="112-defined_terms.html#filepos2890953" id="filepos2720464">Associative containers</a></em> support efficient lookup and retrieval by a key. The two primary <strong>associative-container</strong> types are <code>map</code> and <code>set</code>. The elements in a <code>map</code> are key–value pairs: The key serves as an index into the <code>map</code>, and the value represents the data associated with that index. A <code>set</code> element contains only a key; a <code>set</code> supports efficient queries as to whether a given key is present. We might use a <code>set</code> to hold words that we want to ignore during some kind of text processing. A dictionary would be a good use for a <code>map</code>: The word would be the key, and its definition would be the value.</p>
<p>The library provides eight associative containers, listed in <a href="106-chapter_11._associative_containers.html#filepos2723140">Table 11.1</a>. These eight differ along three dimensions: Each container is (1) a <code>set</code> or a <code>map</code>, (2) requires unique keys or allows multiple keys, and (3) stores the elements in order or not. The containers that allow multiple keys include the word <code>multi</code>; those that do not keep their keys ordered start with the word <code>unordered</code>. Hence an <code>unordered_multi_set</code> is a set that allows multiple keys whose elements are not stored in order, whereas a <code>set</code> has unique keys that are stored in order. The unordered containers use a hash function to organize their elements. We’ll have more to say about the hash function in § <a href="110-11.4._the_unordered_containers.html#filepos2872751">11.4</a> (p. <a href="110-11.4._the_unordered_containers.html#filepos2872751">444</a>).</p>
<p><a id="filepos2723140"></a>Table 11.1. Associative Container Types</p>

**Elements Ordered by Key**

| Data Structure | Description                                  |
|----------------|----------------------------------------------|
| `map`          | Associative array; holds key-value pairs     |
| `set`          | Container in which the key is the value      |
| `multimap`     | map in which a key can appear multiple times |
| `multiset`     | set in which a key can appear multiple times |

**Unordered Collections**

| Data Structure       | Description                                |
|----------------------|--------------------------------------------|
| `unordered_map`      | map organized by a hash function           |
| `unordered_set`      | set organized by a hash function           |
| `unordered_multimap` | Hashed map; keys can appear multiple times |
| `unordered_multiset` | Hashed set; keys can appear multiple times |

<p>The <code>map</code> and <code>multimap</code> types are defined in the <code>map</code> header; the <code>set</code> and <code>multiset</code> types are in the <code>set</code> header; and the unordered containers are in the <code>unordered_map</code> and <code>unordered_set</code> headers.</p>

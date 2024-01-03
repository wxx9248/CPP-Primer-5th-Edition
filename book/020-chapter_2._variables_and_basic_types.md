<h2 id="filepos284544">Chapter 2. Variables and Basic Types</h2>
<p>Contents</p><ul><li><strong><a href="021-2.1._primitive_builtin_types.html#filepos288112">Section 2.1 Primitive Built-in Types</a></strong></li><li><strong><a href="022-2.2._variables.html#filepos350076">Section 2.2 Variables</a></strong></li><li><strong><a href="023-2.3._compound_types.html#filepos394806">Section 2.3 Compound Types</a></strong></li><li><strong><a href="024-2.4._const_qualifier.html#filepos462256">Section 2.4 <code>const</code> Qualifier</a></strong></li><li><strong><a href="025-2.5._dealing_with_types.html#filepos535463">Section 2.5 Dealing with Types</a></strong></li><li><strong><a href="026-2.6._defining_our_own_data_structures.html#filepos576488">Section 2.6 Defining Our Own Data Structures</a></strong></li><li><strong><a href="027-chapter_summary.html#filepos610229">Chapter Summary</a></strong></li><li><strong><a href="028-defined_terms.html#filepos611642">Defined Terms</a></strong></li></ul>

<p>Types are fundamental to any program: They tell us what our data mean and what operations we can perform on those data.</p>
<p>C++ has extensive support for types. The language defines several primitive types (characters, integers, floating-point numbers, etc.) and provides mechanisms that let us define our own data types. The library uses these mechanisms to define more complicated types such as variable-length character strings, vectors, and so on. This chapter covers the built-in types and begins our coverage of how C++ supports more complicated types.</p>
<p><a id="filepos286944"></a><em>Types determine</em> the meaning of the data and operations in our programs. The meaning of even as simple a statement as</p>

```c++
i = i + j;
```

<p>depends on the types of <code>i</code> and <code>j</code>. If <code>i</code> and <code>j</code> are integers, this statement has the ordinary, arithmetic meaning of <code>+</code>. However, if <code>i</code> and <code>j</code> are <code>Sales_item</code> objects (§ <a href="015-1.5._introducing_classes.html#filepos222335">1.5.1</a>, p. <a href="015-1.5._introducing_classes.html#filepos222335">20</a>), this statement adds the components of these two objects.</p>

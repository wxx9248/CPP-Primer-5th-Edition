---
title: Chapter Summary
---

<h3 id="filepos4137640"><a id="filepos4137673"></a>Chapter Summary</h3>
<p>Inheritance lets us write new classes that share behavior with their base class(es) but override or add to that behavior as needed. Dynamic binding lets us ignore type differences by choosing, at run time, which version of a function to run based on an object’s dynamic type. The combination of inheritance and dynamic binding lets us write type-independent, programs that have type-specific behavior.</p>
<p>In C++, dynamic binding applies <em>only</em> to functions declared as <code>virtual</code> and called through a reference or pointer.</p>
<p>A derived-class object contains a subobject corresponding to each of its base classes. Because every derived object contains a base part, we can convert a reference or pointer to a derived-class type to a reference or pointer to an accessible base class.</p>
<p>Inherited objects are constructed, copied, moved, and assigned by constructing, copying, moving, and assigning the base part(s) of the object before handling the derived part. Destructors execute in the opposite order; the derived type is destroyed first, followed by destructors for the base-class subobjects. Base classes usually should define a virtual destructor even if the class otherwise has no need for a destructor. The destructor must be virtual if a pointer to a base is ever deleted when it actually addresses a derived-class object.</p>
<p>A derived class specifies a protection level for each of its base class(es). Members of a <code>public</code> base are part of the interface of the derived class; members of a <code>private</code> base are inaccessible; members of a <code>protected</code> base are accessible to classes that derive from the derived class but not to users of the derived class.</p>

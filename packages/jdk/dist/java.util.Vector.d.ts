declare namespace java {
    namespace util {
        /**
         * The {@code Vector} class implements a growable array of
         * objects. Like an array, it contains components that can be
         * accessed using an integer index. However, the size of a
         * {@code Vector} can grow or shrink as needed to accommodate
         * adding and removing items after the {@code Vector} has been created.
         * <p>Each vector tries to optimize storage management by maintaining a
         * {@code capacity} and a {@code capacityIncrement}. The
         * {@code capacity} is always at least as large as the vector
         * size; it is usually larger because as components are added to the
         * vector, the vector's storage increases in chunks the size of
         * {@code capacityIncrement}. An application can increase the
         * capacity of a vector before inserting a large number of
         * components; this reduces the amount of incremental reallocation.
         * <p><a name="fail-fast">
         * The iterators returned by this class's {@link #iterator() iterator} and
         * {@link #listIterator(int) listIterator} methods are <em>fail-fast</em></a>:
         * if the vector is structurally modified at any time after the iterator is
         * created, in any way except through the iterator's own
         * {@link ListIterator#remove() remove} or
         * {@link ListIterator#add(Object) add} methods, the iterator will throw a
         * {@link ConcurrentModificationException}.  Thus, in the face of
         * concurrent modification, the iterator fails quickly and cleanly, rather
         * than risking arbitrary, non-deterministic behavior at an undetermined
         * time in the future.  The {@link Enumeration Enumerations} returned by
         * the {@link #elements() elements} method are <em>not</em> fail-fast.
         * <p>Note that the fail-fast behavior of an iterator cannot be guaranteed
         * as it is, generally speaking, impossible to make any hard guarantees in the
         * presence of unsynchronized concurrent modification.  Fail-fast iterators
         * throw {@code ConcurrentModificationException} on a best-effort basis.
         * Therefore, it would be wrong to write a program that depended on this
         * exception for its correctness:  <i>the fail-fast behavior of iterators
         * should be used only to detect bugs.</i>
         * <p>As of the Java 2 platform v1.2, this class was retrofitted to
         * implement the {@link List} interface, making it a member of the
         * <a href="{@docRoot}/../technotes/guides/collections/index.html">
         * Java Collections Framework</a>.  Unlike the new collection
         * implementations, {@code Vector} is synchronized.  If a thread-safe
         * implementation is not needed, it is recommended to use {@link
         * ArrayList} in place of {@code Vector}.
         * @author Lee Boynton
         * @author Jonathan Payne
         * @see Collection
         * @see LinkedList
         * @since JDK1.0
         */
        // @ts-ignore
        class Vector<E> extends java.util.AbstractList<E> implements java.util.List<E>, java.util.RandomAccess, java.lang.Cloneable, java.io.Serializable {
            /**
             * Constructs an empty vector with the specified initial capacity and
             * capacity increment.
             * @param initialCapacity     the initial capacity of the vector
             * @param capacityIncrement   the amount by which the capacity is
             *                               increased when the vector overflows
             * @throws IllegalArgumentException if the specified initial capacity
             *          is negative
             */
            // @ts-ignore
            constructor(initialCapacity: number /*int*/, capacityIncrement: number /*int*/)
            /**
             * Constructs an empty vector with the specified initial capacity and
             * with its capacity increment equal to zero.
             * @param initialCapacity   the initial capacity of the vector
             * @throws IllegalArgumentException if the specified initial capacity
             *          is negative
             */
            // @ts-ignore
            constructor(initialCapacity: number /*int*/)
            /**
             * Constructs an empty vector so that its internal data array
             * has size {@code 10} and its standard capacity increment is
             * zero.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a vector containing the elements of the specified
             * collection, in the order they are returned by the collection's
             * iterator.
             * @param c the collection whose elements are to be placed into this
             *        vector
             * @throws NullPointerException if the specified collection is null
             * @since 1.2
             */
            // @ts-ignore
            constructor(c: java.util.Collection<any> | Array<any>)
            /**
             * The array buffer into which the components of the vector are
             * stored. The capacity of the vector is the length of this array buffer,
             * and is at least large enough to contain all the vector's elements.
             * <p>Any array elements following the last element in the Vector are null.
             * @serial 
             */
            // @ts-ignore
            elementData: java.lang.Object[] | any[]
            /**
             * The number of valid components in this {@code Vector} object.
             * Components {@code elementData[0]} through
             * {@code elementData[elementCount-1]} are the actual items.
             * @serial 
             */
            // @ts-ignore
            elementCount: number /*int*/
            /**
             * The amount by which the capacity of the vector is automatically
             * incremented when its size becomes greater than its capacity.  If
             * the capacity increment is less than or equal to zero, the capacity
             * of the vector is doubled each time it needs to grow.
             * @serial 
             */
            // @ts-ignore
            capacityIncrement: number /*int*/
            /**
             * Copies the components of this vector into the specified array.
             * The item at index {@code k} in this vector is copied into
             * component {@code k} of {@code anArray}.
             * @param anArray the array into which the components get copied
             * @throws NullPointerException if the given array is null
             * @throws IndexOutOfBoundsException if the specified array is not
             *          large enough to hold all the components of this vector
             * @throws ArrayStoreException if a component of this vector is not of
             *          a runtime type that can be stored in the specified array
             * @see #toArray(Object[])
             */
            // @ts-ignore
            public copyInto(anArray: java.lang.Object[] | any[]): void
            /**
             * Trims the capacity of this vector to be the vector's current
             * size. If the capacity of this vector is larger than its current
             * size, then the capacity is changed to equal the size by replacing
             * its internal data array, kept in the field {@code elementData},
             * with a smaller one. An application can use this operation to
             * minimize the storage of a vector.
             */
            // @ts-ignore
            public trimToSize(): void
            /**
             * Increases the capacity of this vector, if necessary, to ensure
             * that it can hold at least the number of components specified by
             * the minimum capacity argument.
             * <p>If the current capacity of this vector is less than
             * {@code minCapacity}, then its capacity is increased by replacing its
             * internal data array, kept in the field {@code elementData}, with a
             * larger one.  The size of the new data array will be the old size plus
             * {@code capacityIncrement}, unless the value of
             * {@code capacityIncrement} is less than or equal to zero, in which case
             * the new capacity will be twice the old capacity; but if this new size
             * is still smaller than {@code minCapacity}, then the new capacity will
             * be {@code minCapacity}.
             * @param minCapacity the desired minimum capacity
             */
            // @ts-ignore
            public ensureCapacity(minCapacity: number /*int*/): void
            /**
             * Sets the size of this vector. If the new size is greater than the
             * current size, new {@code null} items are added to the end of
             * the vector. If the new size is less than the current size, all
             * components at index {@code newSize} and greater are discarded.
             * @param newSize   the new size of this vector
             * @throws ArrayIndexOutOfBoundsException if the new size is negative
             */
            // @ts-ignore
            public setSize(newSize: number /*int*/): void
            /**
             * Returns the current capacity of this vector.
             * @return the current capacity (the length of its internal
             *           data array, kept in the field {#code elementData}
             *           of this vector)
             */
            // @ts-ignore
            public capacity(): number /*int*/
            /**
             * Returns the number of components in this vector.
             * @return the number of components in this vector
             */
            // @ts-ignore
            public size(): number /*int*/
            /**
             * Tests if this vector has no components.
             * @return {#code true} if and only if this vector has
             *           no components, that is, its size is zero;
             *           {@code false} otherwise.
             */
            // @ts-ignore
            public isEmpty(): boolean
            /**
             * Returns an enumeration of the components of this vector. The
             * returned {@code Enumeration} object will generate all items in
             * this vector. The first item generated is the item at index {@code 0},
             * then the item at index {@code 1}, and so on.
             * @return an enumeration of the components of this vector
             * @see Iterator
             */
            // @ts-ignore
            public elements(): java.util.Enumeration<E>
            /**
             * Returns {@code true} if this vector contains the specified element.
             * More formally, returns {@code true} if and only if this vector
             * contains at least one element {@code e} such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
             * @param o element whose presence in this vector is to be tested
             * @return {#code true} if this vector contains the specified element
             */
            // @ts-ignore
            public contains(o: java.lang.Object | any): boolean
            /**
             * Returns the index of the first occurrence of the specified element
             * in this vector, or -1 if this vector does not contain the element.
             * More formally, returns the lowest index {@code i} such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>,
             * or -1 if there is no such index.
             * @param o element to search for
             * @return the index of the first occurrence of the specified element in
             *          this vector, or -1 if this vector does not contain the element
             */
            // @ts-ignore
            public indexOf(o: java.lang.Object | any): number /*int*/
            /**
             * Returns the index of the first occurrence of the specified element in
             * this vector, searching forwards from {@code index}, or returns -1 if
             * the element is not found.
             * More formally, returns the lowest index {@code i} such that
             * <tt>(i&nbsp;&gt;=&nbsp;index&nbsp;&amp;&amp;&nbsp;(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i))))</tt>,
             * or -1 if there is no such index.
             * @param o element to search for
             * @param index index to start searching from
             * @return the index of the first occurrence of the element in
             *          this vector at position {#code index} or later in the vector;
             *          {@code -1} if the element is not found.
             * @throws IndexOutOfBoundsException if the specified index is negative
             * @see Object#equals(Object)
             */
            // @ts-ignore
            public indexOf(o: java.lang.Object | any, index: number /*int*/): number /*int*/
            /**
             * Returns the index of the last occurrence of the specified element
             * in this vector, or -1 if this vector does not contain the element.
             * More formally, returns the highest index {@code i} such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>,
             * or -1 if there is no such index.
             * @param o element to search for
             * @return the index of the last occurrence of the specified element in
             *          this vector, or -1 if this vector does not contain the element
             */
            // @ts-ignore
            public lastIndexOf(o: java.lang.Object | any): number /*int*/
            /**
             * Returns the index of the last occurrence of the specified element in
             * this vector, searching backwards from {@code index}, or returns -1 if
             * the element is not found.
             * More formally, returns the highest index {@code i} such that
             * <tt>(i&nbsp;&lt;=&nbsp;index&nbsp;&amp;&amp;&nbsp;(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i))))</tt>,
             * or -1 if there is no such index.
             * @param o element to search for
             * @param index index to start searching backwards from
             * @return the index of the last occurrence of the element at position
             *          less than or equal to {#code index} in this vector;
             *          -1 if the element is not found.
             * @throws IndexOutOfBoundsException if the specified index is greater
             *          than or equal to the current size of this vector
             */
            // @ts-ignore
            public lastIndexOf(o: java.lang.Object | any, index: number /*int*/): number /*int*/
            /**
             * Returns the component at the specified index.
             * <p>This method is identical in functionality to the {@link #get(int)}
             * method (which is part of the {@link List} interface).
             * @param index   an index into this vector
             * @return the component at the specified index
             * @throws ArrayIndexOutOfBoundsException if the index is out of range
             *          ({#code index < 0 || index >= size()})
             */
            // @ts-ignore
            public elementAt(index: number /*int*/): E
            /**
             * Returns the first component (the item at index {@code 0}) of
             * this vector.
             * @return the first component of this vector
             * @throws NoSuchElementException if this vector has no components
             */
            // @ts-ignore
            public firstElement(): E
            /**
             * Returns the last component of the vector.
             * @return the last component of the vector, i.e., the component at index
             *           <code>size()&nbsp;-&nbsp;1</code>.
             * @throws NoSuchElementException if this vector is empty
             */
            // @ts-ignore
            public lastElement(): E
            /**
             * Sets the component at the specified {@code index} of this
             * vector to be the specified object. The previous component at that
             * position is discarded.
             * <p>The index must be a value greater than or equal to {@code 0}
             * and less than the current size of the vector.
             * <p>This method is identical in functionality to the
             * {@link #set(int, Object) set(int, E)}
             * method (which is part of the {@link List} interface). Note that the
             * {@code set} method reverses the order of the parameters, to more closely
             * match array usage.  Note also that the {@code set} method returns the
             * old value that was stored at the specified position.
             * @param obj     what the component is to be set to
             * @param index   the specified index
             * @throws ArrayIndexOutOfBoundsException if the index is out of range
             *          ({#code index < 0 || index >= size()})
             */
            // @ts-ignore
            public setElementAt(obj: E, index: number /*int*/): void
            /**
             * Deletes the component at the specified index. Each component in
             * this vector with an index greater or equal to the specified
             * {@code index} is shifted downward to have an index one
             * smaller than the value it had previously. The size of this vector
             * is decreased by {@code 1}.
             * <p>The index must be a value greater than or equal to {@code 0}
             * and less than the current size of the vector.
             * <p>This method is identical in functionality to the {@link #remove(int)}
             * method (which is part of the {@link List} interface).  Note that the
             * {@code remove} method returns the old value that was stored at the
             * specified position.
             * @param index   the index of the object to remove
             * @throws ArrayIndexOutOfBoundsException if the index is out of range
             *          ({#code index < 0 || index >= size()})
             */
            // @ts-ignore
            public removeElementAt(index: number /*int*/): void
            /**
             * Inserts the specified object as a component in this vector at the
             * specified {@code index}. Each component in this vector with
             * an index greater or equal to the specified {@code index} is
             * shifted upward to have an index one greater than the value it had
             * previously.
             * <p>The index must be a value greater than or equal to {@code 0}
             * and less than or equal to the current size of the vector. (If the
             * index is equal to the current size of the vector, the new element
             * is appended to the Vector.)
             * <p>This method is identical in functionality to the
             * {@link #add(int, Object) add(int, E)}
             * method (which is part of the {@link List} interface).  Note that the
             * {@code add} method reverses the order of the parameters, to more closely
             * match array usage.
             * @param obj     the component to insert
             * @param index   where to insert the new component
             * @throws ArrayIndexOutOfBoundsException if the index is out of range
             *          ({#code index < 0 || index > size()})
             */
            // @ts-ignore
            public insertElementAt(obj: E, index: number /*int*/): void
            /**
             * Adds the specified component to the end of this vector,
             * increasing its size by one. The capacity of this vector is
             * increased if its size becomes greater than its capacity.
             * <p>This method is identical in functionality to the
             * {@link #add(Object) add(E)}
             * method (which is part of the {@link List} interface).
             * @param obj   the component to be added
             */
            // @ts-ignore
            public addElement(obj: E): void
            /**
             * Removes the first (lowest-indexed) occurrence of the argument
             * from this vector. If the object is found in this vector, each
             * component in the vector with an index greater or equal to the
             * object's index is shifted downward to have an index one smaller
             * than the value it had previously.
             * <p>This method is identical in functionality to the
             * {@link #remove(Object)} method (which is part of the
             * {@link List} interface).
             * @param obj   the component to be removed
             * @return {#code true} if the argument was a component of this
             *           vector; {@code false} otherwise.
             */
            // @ts-ignore
            public removeElement(obj: java.lang.Object | any): boolean
            /**
             * Removes all components from this vector and sets its size to zero.
             * <p>This method is identical in functionality to the {@link #clear}
             * method (which is part of the {@link List} interface).
             */
            // @ts-ignore
            public removeAllElements(): void
            /**
             * Returns a clone of this vector. The copy will contain a
             * reference to a clone of the internal data array, not a reference
             * to the original internal data array of this {@code Vector} object.
             * @return a clone of this vector
             */
            // @ts-ignore
            public clone(): any
            /**
             * Returns an array containing all of the elements in this Vector
             * in the correct order.
             * @since 1.2
             */
            // @ts-ignore
            public toArray(): any[]
            /**
             * Returns an array containing all of the elements in this Vector in the
             * correct order; the runtime type of the returned array is that of the
             * specified array.  If the Vector fits in the specified array, it is
             * returned therein.  Otherwise, a new array is allocated with the runtime
             * type of the specified array and the size of this Vector.
             * <p>If the Vector fits in the specified array with room to spare
             * (i.e., the array has more elements than the Vector),
             * the element in the array immediately following the end of the
             * Vector is set to null.  (This is useful in determining the length
             * of the Vector <em>only</em> if the caller knows that the Vector
             * does not contain any null elements.)
             * @param a the array into which the elements of the Vector are to
             *           be stored, if it is big enough; otherwise, a new array of the
             *           same runtime type is allocated for this purpose.
             * @return an array containing the elements of the Vector
             * @throws ArrayStoreException if the runtime type of a is not a supertype
             *  of the runtime type of every element in this Vector
             * @throws NullPointerException if the given array is null
             * @since 1.2
             */
            // @ts-ignore
            public toArray<T>(a: T[]): T
            /**
             * Returns the element at the specified position in this Vector.
             * @param index index of the element to return
             * @return object at the specified index
             * @throws ArrayIndexOutOfBoundsException if the index is out of range
             *             ({#code index < 0 || index >= size()})
             * @since 1.2
             */
            // @ts-ignore
            public get(index: number /*int*/): E
            /**
             * Replaces the element at the specified position in this Vector with the
             * specified element.
             * @param index index of the element to replace
             * @param element element to be stored at the specified position
             * @return the element previously at the specified position
             * @throws ArrayIndexOutOfBoundsException if the index is out of range
             *          ({#code index < 0 || index >= size()})
             * @since 1.2
             */
            // @ts-ignore
            public set(index: number /*int*/, element: E): E
            /**
             * Appends the specified element to the end of this Vector.
             * @param e element to be appended to this Vector
             * @return {#code true} (as specified by {@link Collection#add})
             * @since 1.2
             */
            // @ts-ignore
            public add(e: E): boolean
            /**
             * Removes the first occurrence of the specified element in this Vector
             * If the Vector does not contain the element, it is unchanged.  More
             * formally, removes the element with the lowest index i such that
             * {@code (o==null ? get(i)==null : o.equals(get(i)))} (if such
             * an element exists).
             * @param o element to be removed from this Vector, if present
             * @return true if the Vector contained the specified element
             * @since 1.2
             */
            // @ts-ignore
            public remove(o: java.lang.Object | any): boolean
            /**
             * Inserts the specified element at the specified position in this Vector.
             * Shifts the element currently at that position (if any) and any
             * subsequent elements to the right (adds one to their indices).
             * @param index index at which the specified element is to be inserted
             * @param element element to be inserted
             * @throws ArrayIndexOutOfBoundsException if the index is out of range
             *          ({#code index < 0 || index > size()})
             * @since 1.2
             */
            // @ts-ignore
            public add(index: number /*int*/, element: E): void
            /**
             * Removes the element at the specified position in this Vector.
             * Shifts any subsequent elements to the left (subtracts one from their
             * indices).  Returns the element that was removed from the Vector.
             * @throws ArrayIndexOutOfBoundsException if the index is out of range
             *          ({#code index < 0 || index >= size()})
             * @param index the index of the element to be removed
             * @return element that was removed
             * @since 1.2
             */
            // @ts-ignore
            public remove(index: number /*int*/): E
            /**
             * Removes all of the elements from this Vector.  The Vector will
             * be empty after this call returns (unless it throws an exception).
             * @since 1.2
             */
            // @ts-ignore
            public clear(): void
            /**
             * Returns true if this Vector contains all of the elements in the
             * specified Collection.
             * @param c a collection whose elements will be tested for containment
             *           in this Vector
             * @return true if this Vector contains all of the elements in the
             *          specified collection
             * @throws NullPointerException if the specified collection is null
             */
            // @ts-ignore
            public containsAll(c: java.util.Collection<any> | Array<any>): boolean
            /**
             * Appends all of the elements in the specified Collection to the end of
             * this Vector, in the order that they are returned by the specified
             * Collection's Iterator.  The behavior of this operation is undefined if
             * the specified Collection is modified while the operation is in progress.
             * (This implies that the behavior of this call is undefined if the
             * specified Collection is this Vector, and this Vector is nonempty.)
             * @param c elements to be inserted into this Vector
             * @return {#code true} if this Vector changed as a result of the call
             * @throws NullPointerException if the specified collection is null
             * @since 1.2
             */
            // @ts-ignore
            public addAll(c: java.util.Collection<any> | Array<any>): boolean
            /**
             * Removes from this Vector all of its elements that are contained in the
             * specified Collection.
             * @param c a collection of elements to be removed from the Vector
             * @return true if this Vector changed as a result of the call
             * @throws ClassCastException if the types of one or more elements
             *          in this vector are incompatible with the specified
             *          collection
             *  (<a href="Collection.html#optional-restrictions">optional</a>)
             * @throws NullPointerException if this vector contains one or more null
             *          elements and the specified collection does not support null
             *          elements
             *  (<a href="Collection.html#optional-restrictions">optional</a>),
             *          or if the specified collection is null
             * @since 1.2
             */
            // @ts-ignore
            public removeAll(c: java.util.Collection<any> | Array<any>): boolean
            /**
             * Retains only the elements in this Vector that are contained in the
             * specified Collection.  In other words, removes from this Vector all
             * of its elements that are not contained in the specified Collection.
             * @param c a collection of elements to be retained in this Vector
             *           (all other elements are removed)
             * @return true if this Vector changed as a result of the call
             * @throws ClassCastException if the types of one or more elements
             *          in this vector are incompatible with the specified
             *          collection
             *  (<a href="Collection.html#optional-restrictions">optional</a>)
             * @throws NullPointerException if this vector contains one or more null
             *          elements and the specified collection does not support null
             *          elements
             *          (<a href="Collection.html#optional-restrictions">optional</a>),
             *          or if the specified collection is null
             * @since 1.2
             */
            // @ts-ignore
            public retainAll(c: java.util.Collection<any> | Array<any>): boolean
            /**
             * Inserts all of the elements in the specified Collection into this
             * Vector at the specified position.  Shifts the element currently at
             * that position (if any) and any subsequent elements to the right
             * (increases their indices).  The new elements will appear in the Vector
             * in the order that they are returned by the specified Collection's
             * iterator.
             * @param index index at which to insert the first element from the
             *               specified collection
             * @param c elements to be inserted into this Vector
             * @return {#code true} if this Vector changed as a result of the call
             * @throws ArrayIndexOutOfBoundsException if the index is out of range
             *          ({#code index < 0 || index > size()})
             * @throws NullPointerException if the specified collection is null
             * @since 1.2
             */
            // @ts-ignore
            public addAll(index: number /*int*/, c: java.util.Collection<any> | Array<any>): boolean
            /**
             * Compares the specified Object with this Vector for equality.  Returns
             * true if and only if the specified Object is also a List, both Lists
             * have the same size, and all corresponding pairs of elements in the two
             * Lists are <em>equal</em>.  (Two elements {@code e1} and
             * {@code e2} are <em>equal</em> if {@code (e1==null ? e2==null :
             * e1.equals(e2))}.)  In other words, two Lists are defined to be
             * equal if they contain the same elements in the same order.
             * @param o the Object to be compared for equality with this Vector
             * @return true if the specified Object is equal to this Vector
             */
            // @ts-ignore
            public equals(o: java.lang.Object | any): boolean
            /**
             * Returns the hash code value for this Vector.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Returns a string representation of this Vector, containing
             * the String representation of each element.
             */
            // @ts-ignore
            public toString(): string
            /**
             * Returns a view of the portion of this List between fromIndex,
             * inclusive, and toIndex, exclusive.  (If fromIndex and toIndex are
             * equal, the returned List is empty.)  The returned List is backed by this
             * List, so changes in the returned List are reflected in this List, and
             * vice-versa.  The returned List supports all of the optional List
             * operations supported by this List.
             * <p>This method eliminates the need for explicit range operations (of
             * the sort that commonly exist for arrays).  Any operation that expects
             * a List can be used as a range operation by operating on a subList view
             * instead of a whole List.  For example, the following idiom
             * removes a range of elements from a List:
             * <pre>
             * list.subList(from, to).clear();
             * </pre>
             * Similar idioms may be constructed for indexOf and lastIndexOf,
             * and all of the algorithms in the Collections class can be applied to
             * a subList.
             * <p>The semantics of the List returned by this method become undefined if
             * the backing list (i.e., this List) is <i>structurally modified</i> in
             * any way other than via the returned List.  (Structural modifications are
             * those that change the size of the List, or otherwise perturb it in such
             * a fashion that iterations in progress may yield incorrect results.)
             * @param fromIndex low endpoint (inclusive) of the subList
             * @param toIndex high endpoint (exclusive) of the subList
             * @return a view of the specified range within this List
             * @throws IndexOutOfBoundsException if an endpoint index value is out of range
             *          {#code (fromIndex < 0 || toIndex > size)}
             * @throws IllegalArgumentException if the endpoint indices are out of order
             *          {#code (fromIndex > toIndex)}
             */
            // @ts-ignore
            public subList(fromIndex: number /*int*/, toIndex: number /*int*/): Array<E>
            /**
             * Removes from this list all of the elements whose index is between
             * {@code fromIndex}, inclusive, and {@code toIndex}, exclusive.
             * Shifts any succeeding elements to the left (reduces their index).
             * This call shortens the list by {@code (toIndex - fromIndex)} elements.
             * (If {@code toIndex==fromIndex}, this operation has no effect.)
             */
            // @ts-ignore
            removeRange(fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Returns a list iterator over the elements in this list (in proper
             * sequence), starting at the specified position in the list.
             * The specified index indicates the first element that would be
             * returned by an initial call to {@link ListIterator#next next}.
             * An initial call to {@link ListIterator#previous previous} would
             * return the element with the specified index minus one.
             * <p>The returned list iterator is <a href="#fail-fast"><i>fail-fast</i></a>.
             * @throws IndexOutOfBoundsException {#inheritDoc}
             */
            // @ts-ignore
            public listIterator(index: number /*int*/): java.util.ListIterator<E>
            /**
             * Returns a list iterator over the elements in this list (in proper
             * sequence).
             * <p>The returned list iterator is <a href="#fail-fast"><i>fail-fast</i></a>.
             * @see #listIterator(int)
             */
            // @ts-ignore
            public listIterator(): java.util.ListIterator<E>
            /**
             * Returns an iterator over the elements in this list in proper sequence.
             * <p>The returned iterator is <a href="#fail-fast"><i>fail-fast</i></a>.
             * @return an iterator over the elements in this list in proper sequence
             */
            // @ts-ignore
            public iterator(): java.util.Iterator<E>
            // @ts-ignore
            public forEach(action: java.util.function$.Consumer<any>): void
            // @ts-ignore
            public removeIf(filter: java.util.function$.Predicate<any>): boolean
            // @ts-ignore
            public replaceAll(operator: java.util.function$.UnaryOperator<E>): void
            // @ts-ignore
            public sort(c: java.util.Comparator<any>): void
            /**
             * Creates a <em><a href="Spliterator.html#binding">late-binding</a></em>
             * and <em>fail-fast</em> {@link Spliterator} over the elements in this
             * list.
             * <p>The {@code Spliterator} reports {@link Spliterator#SIZED},
             * {@link Spliterator#SUBSIZED}, and {@link Spliterator#ORDERED}.
             * Overriding implementations should document the reporting of additional
             * characteristic values.
             * @return a {#code Spliterator} over the elements in this list
             * @since 1.8
             */
            // @ts-ignore
            public spliterator(): java.util.Spliterator<E>
        }
    }
}

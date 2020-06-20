declare namespace java {
    namespace util {
        /**
         * Resizable-array implementation of the <tt>List</tt> interface.  Implements
         * all optional list operations, and permits all elements, including
         * <tt>null</tt>.  In addition to implementing the <tt>List</tt> interface,
         * this class provides methods to manipulate the size of the array that is
         * used internally to store the list.  (This class is roughly equivalent to
         * <tt>Vector</tt>, except that it is unsynchronized.)
         * <p>The <tt>size</tt>, <tt>isEmpty</tt>, <tt>get</tt>, <tt>set</tt>,
         * <tt>iterator</tt>, and <tt>listIterator</tt> operations run in constant
         * time.  The <tt>add</tt> operation runs in <i>amortized constant time</i>,
         * that is, adding n elements requires O(n) time.  All of the other operations
         * run in linear time (roughly speaking).  The constant factor is low compared
         * to that for the <tt>LinkedList</tt> implementation.
         * <p>Each <tt>ArrayList</tt> instance has a <i>capacity</i>.  The capacity is
         * the size of the array used to store the elements in the list.  It is always
         * at least as large as the list size.  As elements are added to an ArrayList,
         * its capacity grows automatically.  The details of the growth policy are not
         * specified beyond the fact that adding an element has constant amortized
         * time cost.
         * <p>An application can increase the capacity of an <tt>ArrayList</tt> instance
         * before adding a large number of elements using the <tt>ensureCapacity</tt>
         * operation.  This may reduce the amount of incremental reallocation.
         * <p><strong>Note that this implementation is not synchronized.</strong>
         * If multiple threads access an <tt>ArrayList</tt> instance concurrently,
         * and at least one of the threads modifies the list structurally, it
         * <i>must</i> be synchronized externally.  (A structural modification is
         * any operation that adds or deletes one or more elements, or explicitly
         * resizes the backing array; merely setting the value of an element is not
         * a structural modification.)  This is typically accomplished by
         * synchronizing on some object that naturally encapsulates the list.
         * If no such object exists, the list should be "wrapped" using the
         * {@link Collections#synchronizedList Collections.synchronizedList}
         * method.  This is best done at creation time, to prevent accidental
         * unsynchronized access to the list:<pre>
         * List list = Collections.synchronizedList(new ArrayList(...));</pre>
         * <p><a name="fail-fast">
         * The iterators returned by this class's {@link #iterator() iterator} and
         * {@link #listIterator(int) listIterator} methods are <em>fail-fast</em>:</a>
         * if the list is structurally modified at any time after the iterator is
         * created, in any way except through the iterator's own
         * {@link ListIterator#remove() remove} or
         * {@link ListIterator#add(Object) add} methods, the iterator will throw a
         * {@link ConcurrentModificationException}.  Thus, in the face of
         * concurrent modification, the iterator fails quickly and cleanly, rather
         * than risking arbitrary, non-deterministic behavior at an undetermined
         * time in the future.
         * <p>Note that the fail-fast behavior of an iterator cannot be guaranteed
         * as it is, generally speaking, impossible to make any hard guarantees in the
         * presence of unsynchronized concurrent modification.  Fail-fast iterators
         * throw {@code ConcurrentModificationException} on a best-effort basis.
         * Therefore, it would be wrong to write a program that depended on this
         * exception for its correctness:  <i>the fail-fast behavior of iterators
         * should be used only to detect bugs.</i>
         * <p>This class is a member of the
         * <a href="{@docRoot}/../technotes/guides/collections/index.html">
         * Java Collections Framework</a>.
         * @author Josh Bloch
         * @author Neal Gafter
         * @see Collection
         * @see List
         * @see LinkedList
         * @see Vector
         * @since 1.2
         */
        // @ts-ignore
        class ArrayList<E> extends java.util.AbstractList<E> implements java.util.List<E>, java.util.RandomAccess, java.lang.Cloneable, java.io.Serializable {
            /**
             * Constructs an empty list with the specified initial capacity.
             * @param initialCapacity  the initial capacity of the list
             * @throws IllegalArgumentException if the specified initial capacity
             *          is negative
             */
            // @ts-ignore
            constructor(initialCapacity: number /*int*/)
            /**
             * Constructs an empty list with an initial capacity of ten.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a list containing the elements of the specified
             * collection, in the order they are returned by the collection's
             * iterator.
             * @param c the collection whose elements are to be placed into this list
             * @throws NullPointerException if the specified collection is null
             */
            // @ts-ignore
            constructor(c: Array<E>)
            /**
             * Trims the capacity of this <tt>ArrayList</tt> instance to be the
             * list's current size.  An application can use this operation to minimize
             * the storage of an <tt>ArrayList</tt> instance.
             */
            // @ts-ignore
            trimToSize(): void
            /**
             * Increases the capacity of this <tt>ArrayList</tt> instance, if
             * necessary, to ensure that it can hold at least the number of elements
             * specified by the minimum capacity argument.
             * @param minCapacity   the desired minimum capacity
             */
            // @ts-ignore
            ensureCapacity(minCapacity: number /*int*/): void
            /**
             * Returns the number of elements in this list.
             * @return the number of elements in this list
             */
            // @ts-ignore
            size(): int
            /**
             * Returns <tt>true</tt> if this list contains no elements.
             * @return <tt>true</tt> if this list contains no elements
             */
            // @ts-ignore
            isEmpty(): boolean
            /**
             * Returns <tt>true</tt> if this list contains the specified element.
             * More formally, returns <tt>true</tt> if and only if this list contains
             * at least one element <tt>e</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
             * @param o element whose presence in this list is to be tested
             * @return <tt>true</tt> if this list contains the specified element
             */
            // @ts-ignore
            contains(o: any): boolean
            /**
             * Returns the index of the first occurrence of the specified element
             * in this list, or -1 if this list does not contain the element.
             * More formally, returns the lowest index <tt>i</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>,
             * or -1 if there is no such index.
             */
            // @ts-ignore
            indexOf(o: any): int
            /**
             * Returns the index of the last occurrence of the specified element
             * in this list, or -1 if this list does not contain the element.
             * More formally, returns the highest index <tt>i</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>,
             * or -1 if there is no such index.
             */
            // @ts-ignore
            lastIndexOf(o: any): int
            /**
             * Returns a shallow copy of this <tt>ArrayList</tt> instance.  (The
             * elements themselves are not copied.)
             * @return a clone of this <tt>ArrayList</tt> instance
             */
            // @ts-ignore
            clone(): java.lang.Object
            /**
             * Returns an array containing all of the elements in this list
             * in proper sequence (from first to last element).
             * <p>The returned array will be "safe" in that no references to it are
             * maintained by this list.  (In other words, this method must allocate
             * a new array).  The caller is thus free to modify the returned array.
             * <p>This method acts as bridge between array-based and collection-based
             * APIs.
             * @return an array containing all of the elements in this list in
             *          proper sequence
             */
            // @ts-ignore
            toArray(): java.lang.Object[]
            /**
             * Returns an array containing all of the elements in this list in proper
             * sequence (from first to last element); the runtime type of the returned
             * array is that of the specified array.  If the list fits in the
             * specified array, it is returned therein.  Otherwise, a new array is
             * allocated with the runtime type of the specified array and the size of
             * this list.
             * <p>If the list fits in the specified array with room to spare
             * (i.e., the array has more elements than the list), the element in
             * the array immediately following the end of the collection is set to
             * <tt>null</tt>.  (This is useful in determining the length of the
             * list <i>only</i> if the caller knows that the list does not contain
             * any null elements.)
             * @param a the array into which the elements of the list are to
             *           be stored, if it is big enough; otherwise, a new array of the
             *           same runtime type is allocated for this purpose.
             * @return an array containing the elements of the list
             * @throws ArrayStoreException if the runtime type of the specified array
             *          is not a supertype of the runtime type of every element in
             *          this list
             * @throws NullPointerException if the specified array is null
             */
            // @ts-ignore
            toArray<T>(a: T[]): T
            /**
             * Returns the element at the specified position in this list.
             * @param index index of the element to return
             * @return the element at the specified position in this list
             * @throws IndexOutOfBoundsException {#inheritDoc}
             */
            // @ts-ignore
            get(index: number /*int*/): E
            /**
             * Replaces the element at the specified position in this list with
             * the specified element.
             * @param index index of the element to replace
             * @param element element to be stored at the specified position
             * @return the element previously at the specified position
             * @throws IndexOutOfBoundsException {#inheritDoc}
             */
            // @ts-ignore
            set(index: number /*int*/, element: E): E
            /**
             * Appends the specified element to the end of this list.
             * @param e element to be appended to this list
             * @return <tt>true</tt> (as specified by {#link Collection#add})
             */
            // @ts-ignore
            add(e: E): boolean
            /**
             * Inserts the specified element at the specified position in this
             * list. Shifts the element currently at that position (if any) and
             * any subsequent elements to the right (adds one to their indices).
             * @param index index at which the specified element is to be inserted
             * @param element element to be inserted
             * @throws IndexOutOfBoundsException {#inheritDoc}
             */
            // @ts-ignore
            add(index: number /*int*/, element: E): void
            /**
             * Removes the element at the specified position in this list.
             * Shifts any subsequent elements to the left (subtracts one from their
             * indices).
             * @param index the index of the element to be removed
             * @return the element that was removed from the list
             * @throws IndexOutOfBoundsException {#inheritDoc}
             */
            // @ts-ignore
            remove(index: number /*int*/): E
            /**
             * Removes the first occurrence of the specified element from this list,
             * if it is present.  If the list does not contain the element, it is
             * unchanged.  More formally, removes the element with the lowest index
             * <tt>i</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>
             * (if such an element exists).  Returns <tt>true</tt> if this list
             * contained the specified element (or equivalently, if this list
             * changed as a result of the call).
             * @param o element to be removed from this list, if present
             * @return <tt>true</tt> if this list contained the specified element
             */
            // @ts-ignore
            remove(o: any): boolean
            /**
             * Removes all of the elements from this list.  The list will
             * be empty after this call returns.
             */
            // @ts-ignore
            clear(): void
            /**
             * Appends all of the elements in the specified collection to the end of
             * this list, in the order that they are returned by the
             * specified collection's Iterator.  The behavior of this operation is
             * undefined if the specified collection is modified while the operation
             * is in progress.  (This implies that the behavior of this call is
             * undefined if the specified collection is this list, and this
             * list is nonempty.)
             * @param c collection containing elements to be added to this list
             * @return <tt>true</tt> if this list changed as a result of the call
             * @throws NullPointerException if the specified collection is null
             */
            // @ts-ignore
            addAll(c: Array<E>): boolean
            /**
             * Inserts all of the elements in the specified collection into this
             * list, starting at the specified position.  Shifts the element
             * currently at that position (if any) and any subsequent elements to
             * the right (increases their indices).  The new elements will appear
             * in the list in the order that they are returned by the
             * specified collection's iterator.
             * @param index index at which to insert the first element from the
             *               specified collection
             * @param c collection containing elements to be added to this list
             * @return <tt>true</tt> if this list changed as a result of the call
             * @throws IndexOutOfBoundsException {#inheritDoc}
             * @throws NullPointerException if the specified collection is null
             */
            // @ts-ignore
            addAll(index: number /*int*/, c: Array<E>): boolean
            /**
             * Removes from this list all of the elements whose index is between
             * {@code fromIndex}, inclusive, and {@code toIndex}, exclusive.
             * Shifts any succeeding elements to the left (reduces their index).
             * This call shortens the list by {@code (toIndex - fromIndex)} elements.
             * (If {@code toIndex==fromIndex}, this operation has no effect.)
             * @throws IndexOutOfBoundsException if {#code fromIndex} or
             *          {@code toIndex} is out of range
             *          ({@code fromIndex < 0 ||
             *           fromIndex >= size() ||
             *           toIndex > size() ||
             *           toIndex < fromIndex})
             */
            // @ts-ignore
            removeRange(fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Removes from this list all of its elements that are contained in the
             * specified collection.
             * @param c collection containing elements to be removed from this list
             * @return {#code true} if this list changed as a result of the call
             * @throws ClassCastException if the class of an element of this list
             *          is incompatible with the specified collection
             *  (<a href="Collection.html#optional-restrictions">optional</a>)
             * @throws NullPointerException if this list contains a null element and the
             *          specified collection does not permit null elements
             *  (<a href="Collection.html#optional-restrictions">optional</a>),
             *          or if the specified collection is null
             * @see Collection#contains(Object)
             */
            // @ts-ignore
            removeAll(c: Array<any>): boolean
            /**
             * Retains only the elements in this list that are contained in the
             * specified collection.  In other words, removes from this list all
             * of its elements that are not contained in the specified collection.
             * @param c collection containing elements to be retained in this list
             * @return {#code true} if this list changed as a result of the call
             * @throws ClassCastException if the class of an element of this list
             *          is incompatible with the specified collection
             *  (<a href="Collection.html#optional-restrictions">optional</a>)
             * @throws NullPointerException if this list contains a null element and the
             *          specified collection does not permit null elements
             *  (<a href="Collection.html#optional-restrictions">optional</a>),
             *          or if the specified collection is null
             * @see Collection#contains(Object)
             */
            // @ts-ignore
            retainAll(c: Array<any>): boolean
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
            listIterator(index: number /*int*/): java.util.ListIterator<E>
            /**
             * Returns a list iterator over the elements in this list (in proper
             * sequence).
             * <p>The returned list iterator is <a href="#fail-fast"><i>fail-fast</i></a>.
             * @see #listIterator(int)
             */
            // @ts-ignore
            listIterator(): java.util.ListIterator<E>
            /**
             * Returns an iterator over the elements in this list in proper sequence.
             * <p>The returned iterator is <a href="#fail-fast"><i>fail-fast</i></a>.
             * @return an iterator over the elements in this list in proper sequence
             */
            // @ts-ignore
            iterator(): java.util.Iterator<E>
            /**
             * Returns a view of the portion of this list between the specified
             * {@code fromIndex}, inclusive, and {@code toIndex}, exclusive.  (If
             * {@code fromIndex} and {@code toIndex} are equal, the returned list is
             * empty.)  The returned list is backed by this list, so non-structural
             * changes in the returned list are reflected in this list, and vice-versa.
             * The returned list supports all of the optional list operations.
             * <p>This method eliminates the need for explicit range operations (of
             * the sort that commonly exist for arrays).  Any operation that expects
             * a list can be used as a range operation by passing a subList view
             * instead of a whole list.  For example, the following idiom
             * removes a range of elements from a list:
             * <pre>
             * list.subList(from, to).clear();
             * </pre>
             * Similar idioms may be constructed for {@link #indexOf(Object)} and
             * {@link #lastIndexOf(Object)}, and all of the algorithms in the
             * {@link Collections} class can be applied to a subList.
             * <p>The semantics of the list returned by this method become undefined if
             * the backing list (i.e., this list) is <i>structurally modified</i> in
             * any way other than via the returned list.  (Structural modifications are
             * those that change the size of this list, or otherwise perturb it in such
             * a fashion that iterations in progress may yield incorrect results.)
             * @throws IndexOutOfBoundsException {#inheritDoc}
             * @throws IllegalArgumentException {#inheritDoc}
             */
            // @ts-ignore
            subList(fromIndex: number /*int*/, toIndex: number /*int*/): java.util.List<E>
            // @ts-ignore
            forEach(action: java.util.function.Consumer<any super E> | java.util.function$.Consumer<? super E>): void
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
            spliterator(): java.util.Spliterator<E>
            // @ts-ignore
            removeIf(filter: java.util.function.Predicate<any super E> | java.util.function$.Predicate<? super E>): boolean
            // @ts-ignore
            replaceAll(operator: java.util.function.UnaryOperator<E> | java.util.function$.UnaryOperator<E>): void
            // @ts-ignore
            sort(c: java.util.Comparator<any super E>): void
        }
    }
}

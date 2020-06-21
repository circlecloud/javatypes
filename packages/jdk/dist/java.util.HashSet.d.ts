declare namespace java {
    namespace util {
        /**
         * This class implements the <tt>Set</tt> interface, backed by a hash table
         * (actually a <tt>HashMap</tt> instance).  It makes no guarantees as to the
         * iteration order of the set; in particular, it does not guarantee that the
         * order will remain constant over time.  This class permits the <tt>null</tt>
         * element.
         * <p>This class offers constant time performance for the basic operations
         * (<tt>add</tt>, <tt>remove</tt>, <tt>contains</tt> and <tt>size</tt>),
         * assuming the hash function disperses the elements properly among the
         * buckets.  Iterating over this set requires time proportional to the sum of
         * the <tt>HashSet</tt> instance's size (the number of elements) plus the
         * "capacity" of the backing <tt>HashMap</tt> instance (the number of
         * buckets).  Thus, it's very important not to set the initial capacity too
         * high (or the load factor too low) if iteration performance is important.
         * <p><strong>Note that this implementation is not synchronized.</strong>
         * If multiple threads access a hash set concurrently, and at least one of
         * the threads modifies the set, it <i>must</i> be synchronized externally.
         * This is typically accomplished by synchronizing on some object that
         * naturally encapsulates the set.
         * If no such object exists, the set should be "wrapped" using the
         * {@link Collections#synchronizedSet Collections.synchronizedSet}
         * method.  This is best done at creation time, to prevent accidental
         * unsynchronized access to the set:<pre>
         * Set s = Collections.synchronizedSet(new HashSet(...));</pre>
         * <p>The iterators returned by this class's <tt>iterator</tt> method are
         * <i>fail-fast</i>: if the set is modified at any time after the iterator is
         * created, in any way except through the iterator's own <tt>remove</tt>
         * method, the Iterator throws a {@link ConcurrentModificationException}.
         * Thus, in the face of concurrent modification, the iterator fails quickly
         * and cleanly, rather than risking arbitrary, non-deterministic behavior at
         * an undetermined time in the future.
         * <p>Note that the fail-fast behavior of an iterator cannot be guaranteed
         * as it is, generally speaking, impossible to make any hard guarantees in the
         * presence of unsynchronized concurrent modification.  Fail-fast iterators
         * throw <tt>ConcurrentModificationException</tt> on a best-effort basis.
         * Therefore, it would be wrong to write a program that depended on this
         * exception for its correctness: <i>the fail-fast behavior of iterators
         * should be used only to detect bugs.</i>
         * <p>This class is a member of the
         * <a href="{@docRoot}/../technotes/guides/collections/index.html">
         * Java Collections Framework</a>.
         * @param <E> the type of elements maintained by this set
         * @author Josh Bloch
         * @author Neal Gafter
         * @see Collection
         * @see Set
         * @see TreeSet
         * @see HashMap
         * @since 1.2
         */
        // @ts-ignore
        class HashSet<E> extends java.util.AbstractSet<E> implements java.util.Set<E>, java.lang.Cloneable, java.io.Serializable {
            /**
             * Constructs a new, empty set; the backing <tt>HashMap</tt> instance has
             * default initial capacity (16) and load factor (0.75).
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new set containing the elements in the specified
             * collection.  The <tt>HashMap</tt> is created with default load factor
             * (0.75) and an initial capacity sufficient to contain the elements in
             * the specified collection.
             * @param c the collection whose elements are to be placed into this set
             * @throws NullPointerException if the specified collection is null
             */
            // @ts-ignore
            constructor(c: java.util.Collection<any> | Array<any>)
            /**
             * Constructs a new, empty set; the backing <tt>HashMap</tt> instance has
             * the specified initial capacity and the specified load factor.
             * @param initialCapacity   the initial capacity of the hash map
             * @param loadFactor        the load factor of the hash map
             * @throws IllegalArgumentException if the initial capacity is less
             *              than zero, or if the load factor is nonpositive
             */
            // @ts-ignore
            constructor(initialCapacity: number /*int*/, loadFactor: number /*float*/)
            /**
             * Constructs a new, empty set; the backing <tt>HashMap</tt> instance has
             * the specified initial capacity and default load factor (0.75).
             * @param initialCapacity   the initial capacity of the hash table
             * @throws IllegalArgumentException if the initial capacity is less
             *              than zero
             */
            // @ts-ignore
            constructor(initialCapacity: number /*int*/)
            /**
             * Returns an iterator over the elements in this set.  The elements
             * are returned in no particular order.
             * @return an Iterator over the elements in this set
             * @see ConcurrentModificationException
             */
            // @ts-ignore
            public iterator(): java.util.Iterator<E>
            /**
             * Returns the number of elements in this set (its cardinality).
             * @return the number of elements in this set (its cardinality)
             */
            // @ts-ignore
            public size(): number /*int*/
            /**
             * Returns <tt>true</tt> if this set contains no elements.
             * @return <tt>true</tt> if this set contains no elements
             */
            // @ts-ignore
            public isEmpty(): boolean
            /**
             * Returns <tt>true</tt> if this set contains the specified element.
             * More formally, returns <tt>true</tt> if and only if this set
             * contains an element <tt>e</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
             * @param o element whose presence in this set is to be tested
             * @return <tt>true</tt> if this set contains the specified element
             */
            // @ts-ignore
            public contains(o: java.lang.Object | any): boolean
            /**
             * Adds the specified element to this set if it is not already present.
             * More formally, adds the specified element <tt>e</tt> to this set if
             * this set contains no element <tt>e2</tt> such that
             * <tt>(e==null&nbsp;?&nbsp;e2==null&nbsp;:&nbsp;e.equals(e2))</tt>.
             * If this set already contains the element, the call leaves the set
             * unchanged and returns <tt>false</tt>.
             * @param e element to be added to this set
             * @return <tt>true</tt> if this set did not already contain the specified
             *  element
             */
            // @ts-ignore
            public add(e: E): boolean
            /**
             * Removes the specified element from this set if it is present.
             * More formally, removes an element <tt>e</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>,
             * if this set contains such an element.  Returns <tt>true</tt> if
             * this set contained the element (or equivalently, if this set
             * changed as a result of the call).  (This set will not contain the
             * element once the call returns.)
             * @param o object to be removed from this set, if present
             * @return <tt>true</tt> if the set contained the specified element
             */
            // @ts-ignore
            public remove(o: java.lang.Object | any): boolean
            /**
             * Removes all of the elements from this set.
             * The set will be empty after this call returns.
             */
            // @ts-ignore
            public clear(): void
            /**
             * Returns a shallow copy of this <tt>HashSet</tt> instance: the elements
             * themselves are not cloned.
             * @return a shallow copy of this set
             */
            // @ts-ignore
            public clone(): any
            /**
             * Creates a <em><a href="Spliterator.html#binding">late-binding</a></em>
             * and <em>fail-fast</em> {@link Spliterator} over the elements in this
             * set.
             * <p>The {@code Spliterator} reports {@link Spliterator#SIZED} and
             * {@link Spliterator#DISTINCT}.  Overriding implementations should document
             * the reporting of additional characteristic values.
             * @return a {#code Spliterator} over the elements in this set
             * @since 1.8
             */
            // @ts-ignore
            public spliterator(): java.util.Spliterator<E>
        }
    }
}

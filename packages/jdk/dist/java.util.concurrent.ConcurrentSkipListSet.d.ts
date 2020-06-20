declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A scalable concurrent {@link NavigableSet} implementation based on
             * a {@link ConcurrentSkipListMap}.  The elements of the set are kept
             * sorted according to their {@linkplain Comparable natural ordering},
             * or by a {@link Comparator} provided at set creation time, depending
             * on which constructor is used.
             * <p>This implementation provides expected average <i>log(n)</i> time
             * cost for the {@code contains}, {@code add}, and {@code remove}
             * operations and their variants.  Insertion, removal, and access
             * operations safely execute concurrently by multiple threads.
             * <p>Iterators and spliterators are
             * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
             * <p>Ascending ordered views and their iterators are faster than
             * descending ones.
             * <p>Beware that, unlike in most collections, the {@code size}
             * method is <em>not</em> a constant-time operation. Because of the
             * asynchronous nature of these sets, determining the current number
             * of elements requires a traversal of the elements, and so may report
             * inaccurate results if this collection is modified during traversal.
             * Additionally, the bulk operations {@code addAll},
             * {@code removeAll}, {@code retainAll}, {@code containsAll},
             * {@code equals}, and {@code toArray} are <em>not</em> guaranteed
             * to be performed atomically. For example, an iterator operating
             * concurrently with an {@code addAll} operation might view only some
             * of the added elements.
             * <p>This class and its iterators implement all of the
             * <em>optional</em> methods of the {@link Set} and {@link Iterator}
             * interfaces. Like most other concurrent collection implementations,
             * this class does not permit the use of {@code null} elements,
             * because {@code null} arguments and return values cannot be reliably
             * distinguished from the absence of elements.
             * <p>This class is a member of the
             * <a href="{@docRoot}/../technotes/guides/collections/index.html">
             * Java Collections Framework</a>.
             * @author Doug Lea
             * @param <E> the type of elements maintained by this set
             * @since 1.6
             */
            // @ts-ignore
            class ConcurrentSkipListSet<E> extends java.util.AbstractSet<E> implements java.util.NavigableSet<E>, java.lang.Cloneable, java.io.Serializable {
                /**
                 * Constructs a new, empty set that orders its elements according to
                 * their {@linkplain Comparable natural ordering}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new, empty set that orders its elements according to
                 * the specified comparator.
                 * @param comparator the comparator that will be used to order this set.
                 *         If {#code null}, the {@linkplain Comparable natural
                 *         ordering} of the elements will be used.
                 */
                // @ts-ignore
                constructor(comparator: java.util.Comparator<any super E>)
                /**
                 * Constructs a new set containing the elements in the specified
                 * collection, that orders its elements according to their
                 * {@linkplain Comparable natural ordering}.
                 * @param c The elements that will comprise the new set
                 * @throws ClassCastException if the elements in {#code c} are
                 *          not {@link Comparable}, or are not mutually comparable
                 * @throws NullPointerException if the specified collection or any
                 *          of its elements are null
                 */
                // @ts-ignore
                constructor(c: Array<E>)
                /**
                 * Constructs a new set containing the same elements and using the
                 * same ordering as the specified sorted set.
                 * @param s sorted set whose elements will comprise the new set
                 * @throws NullPointerException if the specified sorted set or any
                 *          of its elements are null
                 */
                // @ts-ignore
                constructor(s: java.util.SortedSet<E>)
                /**
                 * Returns a shallow copy of this {@code ConcurrentSkipListSet}
                 * instance. (The elements themselves are not cloned.)
                 * @return a shallow copy of this set
                 */
                // @ts-ignore
                clone(): java.util.concurrent.ConcurrentSkipListSet<E>
                /**
                 * Returns the number of elements in this set.  If this set
                 * contains more than {@code Integer.MAX_VALUE} elements, it
                 * returns {@code Integer.MAX_VALUE}.
                 * <p>Beware that, unlike in most collections, this method is
                 * <em>NOT</em> a constant-time operation. Because of the
                 * asynchronous nature of these sets, determining the current
                 * number of elements requires traversing them all to count them.
                 * Additionally, it is possible for the size to change during
                 * execution of this method, in which case the returned result
                 * will be inaccurate. Thus, this method is typically not very
                 * useful in concurrent applications.
                 * @return the number of elements in this set
                 */
                // @ts-ignore
                size(): int
                /**
                 * Returns {@code true} if this set contains no elements.
                 * @return {#code true} if this set contains no elements
                 */
                // @ts-ignore
                isEmpty(): boolean
                /**
                 * Returns {@code true} if this set contains the specified element.
                 * More formally, returns {@code true} if and only if this set
                 * contains an element {@code e} such that {@code o.equals(e)}.
                 * @param o object to be checked for containment in this set
                 * @return {#code true} if this set contains the specified element
                 * @throws ClassCastException if the specified element cannot be
                 *          compared with the elements currently in this set
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                contains(o: any): boolean
                /**
                 * Adds the specified element to this set if it is not already present.
                 * More formally, adds the specified element {@code e} to this set if
                 * the set contains no element {@code e2} such that {@code e.equals(e2)}.
                 * If this set already contains the element, the call leaves the set
                 * unchanged and returns {@code false}.
                 * @param e element to be added to this set
                 * @return {#code true} if this set did not already contain the
                 *          specified element
                 * @throws ClassCastException if {#code e} cannot be compared
                 *          with the elements currently in this set
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                add(e: E): boolean
                /**
                 * Removes the specified element from this set if it is present.
                 * More formally, removes an element {@code e} such that
                 * {@code o.equals(e)}, if this set contains such an element.
                 * Returns {@code true} if this set contained the element (or
                 * equivalently, if this set changed as a result of the call).
                 * (This set will not contain the element once the call returns.)
                 * @param o object to be removed from this set, if present
                 * @return {#code true} if this set contained the specified element
                 * @throws ClassCastException if {#code o} cannot be compared
                 *          with the elements currently in this set
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                remove(o: any): boolean
                /**
                 * Removes all of the elements from this set.
                 */
                // @ts-ignore
                clear(): void
                /**
                 * Returns an iterator over the elements in this set in ascending order.
                 * @return an iterator over the elements in this set in ascending order
                 */
                // @ts-ignore
                iterator(): java.util.Iterator<E>
                /**
                 * Returns an iterator over the elements in this set in descending order.
                 * @return an iterator over the elements in this set in descending order
                 */
                // @ts-ignore
                descendingIterator(): java.util.Iterator<E>
                /**
                 * Compares the specified object with this set for equality.  Returns
                 * {@code true} if the specified object is also a set, the two sets
                 * have the same size, and every member of the specified set is
                 * contained in this set (or equivalently, every member of this set is
                 * contained in the specified set).  This definition ensures that the
                 * equals method works properly across different implementations of the
                 * set interface.
                 * @param o the object to be compared for equality with this set
                 * @return {#code true} if the specified object is equal to this set
                 */
                // @ts-ignore
                equals(o: any): boolean
                /**
                 * Removes from this set all of its elements that are contained in
                 * the specified collection.  If the specified collection is also
                 * a set, this operation effectively modifies this set so that its
                 * value is the <i>asymmetric set difference</i> of the two sets.
                 * @param c collection containing elements to be removed from this set
                 * @return {#code true} if this set changed as a result of the call
                 * @throws ClassCastException if the types of one or more elements in this
                 *          set are incompatible with the specified collection
                 * @throws NullPointerException if the specified collection or any
                 *          of its elements are null
                 */
                // @ts-ignore
                removeAll(c: Array<any>): boolean
                /**
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                lower(e: E): E
                /**
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                floor(e: E): E
                /**
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                ceiling(e: E): E
                /**
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if the specified element is null
                 */
                // @ts-ignore
                higher(e: E): E
                // @ts-ignore
                pollFirst(): E
                // @ts-ignore
                pollLast(): E
                // @ts-ignore
                comparator(): java.util.Comparator<? super E>
                /**
                 * @throws java.util.NoSuchElementException {#inheritDoc}
                 */
                // @ts-ignore
                first(): E
                /**
                 * @throws java.util.NoSuchElementException {#inheritDoc}
                 */
                // @ts-ignore
                last(): E
                /**
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if {#code fromElement} or
                 *          {@code toElement} is null
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                subSet(fromElement: E, fromInclusive: boolean, toElement: E, toInclusive: boolean): java.util.NavigableSet<E>
                /**
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if {#code toElement} is null
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                headSet(toElement: E, inclusive: boolean): java.util.NavigableSet<E>
                /**
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if {#code fromElement} is null
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                tailSet(fromElement: E, inclusive: boolean): java.util.NavigableSet<E>
                /**
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if {#code fromElement} or
                 *          {@code toElement} is null
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                subSet(fromElement: E, toElement: E): java.util.NavigableSet<E>
                /**
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if {#code toElement} is null
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                headSet(toElement: E): java.util.NavigableSet<E>
                /**
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if {#code fromElement} is null
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                tailSet(fromElement: E): java.util.NavigableSet<E>
                /**
                 * Returns a reverse order view of the elements contained in this set.
                 * The descending set is backed by this set, so changes to the set are
                 * reflected in the descending set, and vice-versa.
                 * <p>The returned set has an ordering equivalent to
                 * {@link Collections#reverseOrder(Comparator) Collections.reverseOrder}{@code (comparator())}.
                 * The expression {@code s.descendingSet().descendingSet()} returns a
                 * view of {@code s} essentially equivalent to {@code s}.
                 * @return a reverse order view of this set
                 */
                // @ts-ignore
                descendingSet(): java.util.NavigableSet<E>
                /**
                 * Returns a {@link Spliterator} over the elements in this set.
                 * <p>The {@code Spliterator} reports {@link Spliterator#CONCURRENT},
                 * {@link Spliterator#NONNULL}, {@link Spliterator#DISTINCT},
                 * {@link Spliterator#SORTED} and {@link Spliterator#ORDERED}, with an
                 * encounter order that is ascending order.  Overriding implementations
                 * should document the reporting of additional characteristic values.
                 * <p>The spliterator's comparator (see
                 * {@link java.util.Spliterator#getComparator()}) is {@code null} if
                 * the set's comparator (see {@link #comparator()}) is {@code null}.
                 * Otherwise, the spliterator's comparator is the same as or imposes the
                 * same total ordering as the set's comparator.
                 * @return a {#code Spliterator} over the elements in this set
                 * @since 1.8
                 */
                // @ts-ignore
                spliterator(): java.util.Spliterator<E>
            }
        }
    }
}

declare namespace java {
    namespace util {
        /**
         * Doubly-linked list implementation of the {@code List} and {@code Deque}
         * interfaces.  Implements all optional list operations, and permits all
         * elements (including {@code null}).
         * <p>All of the operations perform as could be expected for a doubly-linked
         * list.  Operations that index into the list will traverse the list from
         * the beginning or the end, whichever is closer to the specified index.
         * <p><strong>Note that this implementation is not synchronized.</strong>
         * If multiple threads access a linked list concurrently, and at least
         * one of the threads modifies the list structurally, it <i>must</i> be
         * synchronized externally.  (A structural modification is any operation
         * that adds or deletes one or more elements; merely setting the value of
         * an element is not a structural modification.)  This is typically
         * accomplished by synchronizing on some object that naturally
         * encapsulates the list.
         * If no such object exists, the list should be "wrapped" using the
         * {@link Collections#synchronizedList Collections.synchronizedList}
         * method.  This is best done at creation time, to prevent accidental
         * unsynchronized access to the list:<pre>
         * List list = Collections.synchronizedList(new LinkedList(...));</pre>
         * <p>The iterators returned by this class's {@code iterator} and
         * {@code listIterator} methods are <i>fail-fast</i>: if the list is
         * structurally modified at any time after the iterator is created, in
         * any way except through the Iterator's own {@code remove} or
         * {@code add} methods, the iterator will throw a {@link
         * ConcurrentModificationException}.  Thus, in the face of concurrent
         * modification, the iterator fails quickly and cleanly, rather than
         * risking arbitrary, non-deterministic behavior at an undetermined
         * time in the future.
         * <p>Note that the fail-fast behavior of an iterator cannot be guaranteed
         * as it is, generally speaking, impossible to make any hard guarantees in the
         * presence of unsynchronized concurrent modification.  Fail-fast iterators
         * throw {@code ConcurrentModificationException} on a best-effort basis.
         * Therefore, it would be wrong to write a program that depended on this
         * exception for its correctness:   <i>the fail-fast behavior of iterators
         * should be used only to detect bugs.</i>
         * <p>This class is a member of the
         * <a href="{@docRoot}/../technotes/guides/collections/index.html">
         * Java Collections Framework</a>.
         * @author Josh Bloch
         * @see List
         * @see ArrayList
         * @since 1.2
         * @param <E> the type of elements held in this collection
         */
        // @ts-ignore
        class LinkedList<E> extends java.util.AbstractSequentialList<E> implements java.util.List<E>, java.util.Deque<E>, java.lang.Cloneable, java.io.Serializable {
            /**
             * Constructs an empty list.
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
             * Returns the first element in this list.
             * @return the first element in this list
             * @throws NoSuchElementException if this list is empty
             */
            // @ts-ignore
            getFirst(): E
            /**
             * Returns the last element in this list.
             * @return the last element in this list
             * @throws NoSuchElementException if this list is empty
             */
            // @ts-ignore
            getLast(): E
            /**
             * Removes and returns the first element from this list.
             * @return the first element from this list
             * @throws NoSuchElementException if this list is empty
             */
            // @ts-ignore
            removeFirst(): E
            /**
             * Removes and returns the last element from this list.
             * @return the last element from this list
             * @throws NoSuchElementException if this list is empty
             */
            // @ts-ignore
            removeLast(): E
            /**
             * Inserts the specified element at the beginning of this list.
             * @param e the element to add
             */
            // @ts-ignore
            addFirst(e: E): void
            /**
             * Appends the specified element to the end of this list.
             * <p>This method is equivalent to {@link #add}.
             * @param e the element to add
             */
            // @ts-ignore
            addLast(e: E): void
            /**
             * Returns {@code true} if this list contains the specified element.
             * More formally, returns {@code true} if and only if this list contains
             * at least one element {@code e} such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
             * @param o element whose presence in this list is to be tested
             * @return {#code true} if this list contains the specified element
             */
            // @ts-ignore
            contains(o: any): boolean
            /**
             * Returns the number of elements in this list.
             * @return the number of elements in this list
             */
            // @ts-ignore
            size(): int
            /**
             * Appends the specified element to the end of this list.
             * <p>This method is equivalent to {@link #addLast}.
             * @param e element to be appended to this list
             * @return {#code true} (as specified by {@link Collection#add})
             */
            // @ts-ignore
            add(e: E): boolean
            /**
             * Removes the first occurrence of the specified element from this list,
             * if it is present.  If this list does not contain the element, it is
             * unchanged.  More formally, removes the element with the lowest index
             * {@code i} such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>
             * (if such an element exists).  Returns {@code true} if this list
             * contained the specified element (or equivalently, if this list
             * changed as a result of the call).
             * @param o element to be removed from this list, if present
             * @return {#code true} if this list contained the specified element
             */
            // @ts-ignore
            remove(o: any): boolean
            /**
             * Appends all of the elements in the specified collection to the end of
             * this list, in the order that they are returned by the specified
             * collection's iterator.  The behavior of this operation is undefined if
             * the specified collection is modified while the operation is in
             * progress.  (Note that this will occur if the specified collection is
             * this list, and it's nonempty.)
             * @param c collection containing elements to be added to this list
             * @return {#code true} if this list changed as a result of the call
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
             * @param index index at which to insert the first element
             *               from the specified collection
             * @param c collection containing elements to be added to this list
             * @return {#code true} if this list changed as a result of the call
             * @throws IndexOutOfBoundsException {#inheritDoc}
             * @throws NullPointerException if the specified collection is null
             */
            // @ts-ignore
            addAll(index: number /*int*/, c: Array<E>): boolean
            /**
             * Removes all of the elements from this list.
             * The list will be empty after this call returns.
             */
            // @ts-ignore
            clear(): void
            /**
             * Returns the element at the specified position in this list.
             * @param index index of the element to return
             * @return the element at the specified position in this list
             * @throws IndexOutOfBoundsException {#inheritDoc}
             */
            // @ts-ignore
            get(index: number /*int*/): E
            /**
             * Replaces the element at the specified position in this list with the
             * specified element.
             * @param index index of the element to replace
             * @param element element to be stored at the specified position
             * @return the element previously at the specified position
             * @throws IndexOutOfBoundsException {#inheritDoc}
             */
            // @ts-ignore
            set(index: number /*int*/, element: E): E
            /**
             * Inserts the specified element at the specified position in this list.
             * Shifts the element currently at that position (if any) and any
             * subsequent elements to the right (adds one to their indices).
             * @param index index at which the specified element is to be inserted
             * @param element element to be inserted
             * @throws IndexOutOfBoundsException {#inheritDoc}
             */
            // @ts-ignore
            add(index: number /*int*/, element: E): void
            /**
             * Removes the element at the specified position in this list.  Shifts any
             * subsequent elements to the left (subtracts one from their indices).
             * Returns the element that was removed from the list.
             * @param index the index of the element to be removed
             * @return the element previously at the specified position
             * @throws IndexOutOfBoundsException {#inheritDoc}
             */
            // @ts-ignore
            remove(index: number /*int*/): E
            /**
             * Returns the index of the first occurrence of the specified element
             * in this list, or -1 if this list does not contain the element.
             * More formally, returns the lowest index {@code i} such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>,
             * or -1 if there is no such index.
             * @param o element to search for
             * @return the index of the first occurrence of the specified element in
             *          this list, or -1 if this list does not contain the element
             */
            // @ts-ignore
            indexOf(o: any): int
            /**
             * Returns the index of the last occurrence of the specified element
             * in this list, or -1 if this list does not contain the element.
             * More formally, returns the highest index {@code i} such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>,
             * or -1 if there is no such index.
             * @param o element to search for
             * @return the index of the last occurrence of the specified element in
             *          this list, or -1 if this list does not contain the element
             */
            // @ts-ignore
            lastIndexOf(o: any): int
            /**
             * Retrieves, but does not remove, the head (first element) of this list.
             * @return the head of this list, or {#code null} if this list is empty
             * @since 1.5
             */
            // @ts-ignore
            peek(): E
            /**
             * Retrieves, but does not remove, the head (first element) of this list.
             * @return the head of this list
             * @throws NoSuchElementException if this list is empty
             * @since 1.5
             */
            // @ts-ignore
            element(): E
            /**
             * Retrieves and removes the head (first element) of this list.
             * @return the head of this list, or {#code null} if this list is empty
             * @since 1.5
             */
            // @ts-ignore
            poll(): E
            /**
             * Retrieves and removes the head (first element) of this list.
             * @return the head of this list
             * @throws NoSuchElementException if this list is empty
             * @since 1.5
             */
            // @ts-ignore
            remove(): E
            /**
             * Adds the specified element as the tail (last element) of this list.
             * @param e the element to add
             * @return {#code true} (as specified by {@link Queue#offer})
             * @since 1.5
             */
            // @ts-ignore
            offer(e: E): boolean
            /**
             * Inserts the specified element at the front of this list.
             * @param e the element to insert
             * @return {#code true} (as specified by {@link Deque#offerFirst})
             * @since 1.6
             */
            // @ts-ignore
            offerFirst(e: E): boolean
            /**
             * Inserts the specified element at the end of this list.
             * @param e the element to insert
             * @return {#code true} (as specified by {@link Deque#offerLast})
             * @since 1.6
             */
            // @ts-ignore
            offerLast(e: E): boolean
            /**
             * Retrieves, but does not remove, the first element of this list,
             * or returns {@code null} if this list is empty.
             * @return the first element of this list, or {#code null}
             *          if this list is empty
             * @since 1.6
             */
            // @ts-ignore
            peekFirst(): E
            /**
             * Retrieves, but does not remove, the last element of this list,
             * or returns {@code null} if this list is empty.
             * @return the last element of this list, or {#code null}
             *          if this list is empty
             * @since 1.6
             */
            // @ts-ignore
            peekLast(): E
            /**
             * Retrieves and removes the first element of this list,
             * or returns {@code null} if this list is empty.
             * @return the first element of this list, or {#code null} if
             *      this list is empty
             * @since 1.6
             */
            // @ts-ignore
            pollFirst(): E
            /**
             * Retrieves and removes the last element of this list,
             * or returns {@code null} if this list is empty.
             * @return the last element of this list, or {#code null} if
             *      this list is empty
             * @since 1.6
             */
            // @ts-ignore
            pollLast(): E
            /**
             * Pushes an element onto the stack represented by this list.  In other
             * words, inserts the element at the front of this list.
             * <p>This method is equivalent to {@link #addFirst}.
             * @param e the element to push
             * @since 1.6
             */
            // @ts-ignore
            push(e: E): void
            /**
             * Pops an element from the stack represented by this list.  In other
             * words, removes and returns the first element of this list.
             * <p>This method is equivalent to {@link #removeFirst()}.
             * @return the element at the front of this list (which is the top
             *          of the stack represented by this list)
             * @throws NoSuchElementException if this list is empty
             * @since 1.6
             */
            // @ts-ignore
            pop(): E
            /**
             * Removes the first occurrence of the specified element in this
             * list (when traversing the list from head to tail).  If the list
             * does not contain the element, it is unchanged.
             * @param o element to be removed from this list, if present
             * @return {#code true} if the list contained the specified element
             * @since 1.6
             */
            // @ts-ignore
            removeFirstOccurrence(o: any): boolean
            /**
             * Removes the last occurrence of the specified element in this
             * list (when traversing the list from head to tail).  If the list
             * does not contain the element, it is unchanged.
             * @param o element to be removed from this list, if present
             * @return {#code true} if the list contained the specified element
             * @since 1.6
             */
            // @ts-ignore
            removeLastOccurrence(o: any): boolean
            /**
             * Returns a list-iterator of the elements in this list (in proper
             * sequence), starting at the specified position in the list.
             * Obeys the general contract of {@code List.listIterator(int)}.<p>
             * The list-iterator is <i>fail-fast</i>: if the list is structurally
             * modified at any time after the Iterator is created, in any way except
             * through the list-iterator's own {@code remove} or {@code add}
             * methods, the list-iterator will throw a
             * {@code ConcurrentModificationException}.  Thus, in the face of
             * concurrent modification, the iterator fails quickly and cleanly, rather
             * than risking arbitrary, non-deterministic behavior at an undetermined
             * time in the future.
             * @param index index of the first element to be returned from the
             *               list-iterator (by a call to {#code next})
             * @return a ListIterator of the elements in this list (in proper
             *          sequence), starting at the specified position in the list
             * @throws IndexOutOfBoundsException {#inheritDoc}
             * @see List#listIterator(int)
             */
            // @ts-ignore
            listIterator(index: number /*int*/): java.util.ListIterator<E>
            /**
             * @since 1.6
             */
            // @ts-ignore
            descendingIterator(): java.util.Iterator<E>
            /**
             * Returns a shallow copy of this {@code LinkedList}. (The elements
             * themselves are not cloned.)
             * @return a shallow copy of this {#code LinkedList} instance
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
             * @return an array containing all of the elements in this list
             *          in proper sequence
             */
            // @ts-ignore
            toArray(): java.lang.Object[]
            /**
             * Returns an array containing all of the elements in this list in
             * proper sequence (from first to last element); the runtime type of
             * the returned array is that of the specified array.  If the list fits
             * in the specified array, it is returned therein.  Otherwise, a new
             * array is allocated with the runtime type of the specified array and
             * the size of this list.
             * <p>If the list fits in the specified array with room to spare (i.e.,
             * the array has more elements than the list), the element in the array
             * immediately following the end of the list is set to {@code null}.
             * (This is useful in determining the length of the list <i>only</i> if
             * the caller knows that the list does not contain any null elements.)
             * <p>Like the {@link #toArray()} method, this method acts as bridge between
             * array-based and collection-based APIs.  Further, this method allows
             * precise control over the runtime type of the output array, and may,
             * under certain circumstances, be used to save allocation costs.
             * <p>Suppose {@code x} is a list known to contain only strings.
             * The following code can be used to dump the list into a newly
             * allocated array of {@code String}:
             * <pre>
             * String[] y = x.toArray(new String[0]);</pre>
             * Note that {@code toArray(new Object[0])} is identical in function to
             * {@code toArray()}.
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
             * Creates a <em><a href="Spliterator.html#binding">late-binding</a></em>
             * and <em>fail-fast</em> {@link Spliterator} over the elements in this
             * list.
             * <p>The {@code Spliterator} reports {@link Spliterator#SIZED} and
             * {@link Spliterator#ORDERED}.  Overriding implementations should document
             * the reporting of additional characteristic values.
             * @implNote The {#code Spliterator} additionally reports {@link Spliterator#SUBSIZED}
             *  and implements {@code trySplit} to permit limited parallelism..
             * @return a {#code Spliterator} over the elements in this list
             * @since 1.8
             */
            // @ts-ignore
            spliterator(): java.util.Spliterator<E>
        }
    }
}

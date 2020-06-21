declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * A RoleUnresolvedList represents a list of RoleUnresolved objects,
             * representing roles not retrieved from a relation due to a problem
             * encountered when trying to access (read or write) the roles.
             * @since 1.5
             */
            // @ts-ignore
            class RoleUnresolvedList extends java.util.ArrayList<java.lang.Object | any> {
                /**
                 * Constructs an empty RoleUnresolvedList.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an empty RoleUnresolvedList with the initial capacity
                 * specified.
                 * @param initialCapacity  initial capacity
                 */
                // @ts-ignore
                constructor(initialCapacity: number /*int*/)
                /**
                 * Constructs a {@code RoleUnresolvedList} containing the elements of the
                 * {@code List} specified, in the order in which they are returned by
                 * the {@code List}'s iterator. The {@code RoleUnresolvedList} instance has
                 * an initial capacity of 110% of the size of the {@code List}
                 * specified.
                 * @param list the {#code List} that defines the initial contents of
                 *  the new {@code RoleUnresolvedList}.
                 * @exception IllegalArgumentException if the {#code list} parameter
                 *  is {@code null} or if the {@code list} parameter contains any
                 *  non-RoleUnresolved objects.
                 * @see ArrayList#ArrayList(java.util.Collection)
                 */
                // @ts-ignore
                constructor(list: java.util.List<javax.management.relation.RoleUnresolved> | Array<javax.management.relation.RoleUnresolved>)
                /**
                 * Return a view of this list as a {@code List<RoleUnresolved>}.
                 * Changes to the returned value are reflected by changes
                 * to the original {@code RoleUnresolvedList} and vice versa.
                 * @return a {#code List<RoleUnresolved>} whose contents
                 *  reflect the contents of this {@code RoleUnresolvedList}.
                 * 
                 *  <p>If this method has ever been called on a given
                 *  {@code RoleUnresolvedList} instance, a subsequent attempt to add
                 *  an object to that instance which is not a {@code RoleUnresolved}
                 *  will fail with an {@code IllegalArgumentException}. For compatibility
                 *  reasons, a {@code RoleUnresolvedList} on which this method has never
                 *  been called does allow objects other than {@code RoleUnresolved}s to
                 *  be added.</p>
                 * @throws IllegalArgumentException if this {#code RoleUnresolvedList}
                 *  contains an element that is not a {@code RoleUnresolved}.
                 * @since 1.6
                 */
                // @ts-ignore
                public asList(): Array<javax.management.relation.RoleUnresolved>
                /**
                 * Adds the RoleUnresolved specified as the last element of the list.
                 * @param role - the unresolved role to be added.
                 * @exception IllegalArgumentException  if the unresolved role is null.
                 */
                // @ts-ignore
                public add(role: javax.management.relation.RoleUnresolved): void
                /**
                 * Inserts the unresolved role specified as an element at the position
                 * specified.
                 * Elements with an index greater than or equal to the current position are
                 * shifted up.
                 * @param index - The position in the list where the new
                 *  RoleUnresolved object is to be inserted.
                 * @param role - The RoleUnresolved object to be inserted.
                 * @exception IllegalArgumentException  if the unresolved role is null.
                 * @exception IndexOutOfBoundsException if index is out of range
                 *  (<code>index &lt; 0 || index &gt; size()</code>).
                 */
                // @ts-ignore
                public add(index: number /*int*/, role: javax.management.relation.RoleUnresolved): void
                /**
                 * Sets the element at the position specified to be the unresolved role
                 * specified.
                 * The previous element at that position is discarded.
                 * @param index - The position specified.
                 * @param role - The value to which the unresolved role element
                 *  should be set.
                 * @exception IllegalArgumentException   if the unresolved role is null.
                 * @exception IndexOutOfBoundsException if index is out of range
                 *  (<code>index &lt; 0 || index &gt;= size()</code>).
                 */
                // @ts-ignore
                public set(index: number /*int*/, role: javax.management.relation.RoleUnresolved): void
                /**
                 * Appends all the elements in the RoleUnresolvedList specified to the end
                 * of the list, in the order in which they are returned by the Iterator of
                 * the RoleUnresolvedList specified.
                 * @param roleList - Elements to be inserted into the list
                 *  (can be null).
                 * @return true if this list changed as a result of the call.
                 * @exception IndexOutOfBoundsException  if accessing with an index
                 *  outside of the list.
                 */
                // @ts-ignore
                public addAll(roleList: javax.management.relation.RoleUnresolvedList): boolean
                /**
                 * Inserts all of the elements in the RoleUnresolvedList specified into
                 * this list, starting at the specified position, in the order in which
                 * they are returned by the Iterator of the RoleUnresolvedList specified.
                 * @param index - Position at which to insert the first element from the
                 *  RoleUnresolvedList specified.
                 * @param roleList - Elements to be inserted into the list.
                 * @return true if this list changed as a result of the call.
                 * @exception IllegalArgumentException  if the role is null.
                 * @exception IndexOutOfBoundsException if index is out of range
                 *  (<code>index &lt; 0 || index &gt; size()</code>).
                 */
                // @ts-ignore
                public addAll(index: number /*int*/, roleList: javax.management.relation.RoleUnresolvedList): boolean
                // @ts-ignore
                public add(o: java.lang.Object | any): boolean
                // @ts-ignore
                public add(index: number /*int*/, element: java.lang.Object | any): void
                // @ts-ignore
                public addAll(c: java.util.Collection<any> | Array<any>): boolean
                // @ts-ignore
                public addAll(index: number /*int*/, c: java.util.Collection<any> | Array<any>): boolean
                // @ts-ignore
                public set(index: number /*int*/, element: java.lang.Object | any): any
            }
        }
    }
}

declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * A RoleList represents a list of roles (Role objects). It is used as
             * parameter when creating a relation, and when trying to set several roles in
             * a relation (via 'setRoles()' method). It is returned as part of a
             * RoleResult, to provide roles successfully retrieved.
             * @since 1.5
             */
            // @ts-ignore
            class RoleList extends java.util.ArrayList<java.lang.Object | any> {
                /**
                 * Constructs an empty RoleList.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an empty RoleList with the initial capacity
                 * specified.
                 * @param initialCapacity  initial capacity
                 */
                // @ts-ignore
                constructor(initialCapacity: number /*int*/)
                /**
                 * Constructs a {@code RoleList} containing the elements of the
                 * {@code List} specified, in the order in which they are returned by
                 * the {@code List}'s iterator. The {@code RoleList} instance has
                 * an initial capacity of 110% of the size of the {@code List}
                 * specified.
                 * @param list the {#code List} that defines the initial contents of
                 *  the new {@code RoleList}.
                 * @exception IllegalArgumentException if the {#code list} parameter
                 *  is {@code null} or if the {@code list} parameter contains any
                 *  non-Role objects.
                 * @see ArrayList#ArrayList(java.util.Collection)
                 */
                // @ts-ignore
                constructor(list: java.util.List<javax.management.relation.Role> | Array<javax.management.relation.Role>)
                /**
                 * Return a view of this list as a {@code List<Role>}.
                 * Changes to the returned value are reflected by changes
                 * to the original {@code RoleList} and vice versa.
                 * @return a {#code List<Role>} whose contents
                 *  reflect the contents of this {@code RoleList}.
                 * 
                 *  <p>If this method has ever been called on a given
                 *  {@code RoleList} instance, a subsequent attempt to add
                 *  an object to that instance which is not a {@code Role}
                 *  will fail with an {@code IllegalArgumentException}. For compatibility
                 *  reasons, a {@code RoleList} on which this method has never
                 *  been called does allow objects other than {@code Role}s to
                 *  be added.</p>
                 * @throws IllegalArgumentException if this {#code RoleList} contains
                 *  an element that is not a {@code Role}.
                 * @since 1.6
                 */
                // @ts-ignore
                public asList(): Array<javax.management.relation.Role>
                /**
                 * Adds the Role specified as the last element of the list.
                 * @param role  the role to be added.
                 * @exception IllegalArgumentException  if the role is null.
                 */
                // @ts-ignore
                public add(role: javax.management.relation.Role): void
                /**
                 * Inserts the role specified as an element at the position specified.
                 * Elements with an index greater than or equal to the current position are
                 * shifted up.
                 * @param index  The position in the list where the new Role
                 *  object is to be inserted.
                 * @param role  The Role object to be inserted.
                 * @exception IllegalArgumentException  if the role is null.
                 * @exception IndexOutOfBoundsException  if accessing with an index
                 *  outside of the list.
                 */
                // @ts-ignore
                public add(index: number /*int*/, role: javax.management.relation.Role): void
                /**
                 * Sets the element at the position specified to be the role
                 * specified.
                 * The previous element at that position is discarded.
                 * @param index  The position specified.
                 * @param role  The value to which the role element should be set.
                 * @exception IllegalArgumentException  if the role is null.
                 * @exception IndexOutOfBoundsException  if accessing with an index
                 *  outside of the list.
                 */
                // @ts-ignore
                public set(index: number /*int*/, role: javax.management.relation.Role): void
                /**
                 * Appends all the elements in the RoleList specified to the end
                 * of the list, in the order in which they are returned by the Iterator of
                 * the RoleList specified.
                 * @param roleList  Elements to be inserted into the list (can be null)
                 * @return true if this list changed as a result of the call.
                 * @exception IndexOutOfBoundsException  if accessing with an index
                 *  outside of the list.
                 * @see ArrayList#addAll(Collection)
                 */
                // @ts-ignore
                public addAll(roleList: javax.management.relation.RoleList): boolean
                /**
                 * Inserts all of the elements in the RoleList specified into this
                 * list, starting at the specified position, in the order in which they are
                 * returned by the Iterator of the RoleList specified.
                 * @param index  Position at which to insert the first element from the
                 *  RoleList specified.
                 * @param roleList  Elements to be inserted into the list.
                 * @return true if this list changed as a result of the call.
                 * @exception IllegalArgumentException  if the role is null.
                 * @exception IndexOutOfBoundsException  if accessing with an index
                 *  outside of the list.
                 * @see ArrayList#addAll(int, Collection)
                 */
                // @ts-ignore
                public addAll(index: number /*int*/, roleList: javax.management.relation.RoleList): boolean
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

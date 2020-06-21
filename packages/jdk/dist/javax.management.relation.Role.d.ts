declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * Represents a role: includes a role name and referenced MBeans (via their
             * ObjectNames). The role value is always represented as an ArrayList
             * collection (of ObjectNames) to homogenize the access.
             * <p>The <b>serialVersionUID</b> of this class is <code>-279985518429862552L</code>.
             * @since 1.5
             */
            // @ts-ignore
            class Role extends java.lang.Object implements java.io.Serializable {
                /**
                 * <p>Make a new Role object.
                 * No check is made that the ObjectNames in the role value exist in
                 * an MBean server.  That check will be made when the role is set
                 * in a relation.
                 * @param roleName  role name
                 * @param roleValue  role value (List of ObjectName objects)
                 * @exception IllegalArgumentException  if null parameter
                 */
                // @ts-ignore
                constructor(roleName: java.lang.String | string, roleValue: java.util.List<javax.management.ObjectName> | Array<javax.management.ObjectName>)
                /**
                 * Retrieves role name.
                 * @return the role name.
                 * @see #setRoleName
                 */
                // @ts-ignore
                public getRoleName(): string
                /**
                 * Retrieves role value.
                 * @return ArrayList of ObjectName objects for referenced MBeans.
                 * @see #setRoleValue
                 */
                // @ts-ignore
                public getRoleValue(): Array<javax.management.ObjectName>
                /**
                 * Sets role name.
                 * @param roleName  role name
                 * @exception IllegalArgumentException  if null parameter
                 * @see #getRoleName
                 */
                // @ts-ignore
                public setRoleName(roleName: java.lang.String | string): void
                /**
                 * Sets role value.
                 * @param roleValue  List of ObjectName objects for referenced
                 *  MBeans.
                 * @exception IllegalArgumentException  if null parameter
                 * @see #getRoleValue
                 */
                // @ts-ignore
                public setRoleValue(roleValue: java.util.List<javax.management.ObjectName> | Array<javax.management.ObjectName>): void
                /**
                 * Returns a string describing the role.
                 * @return the description of the role.
                 */
                // @ts-ignore
                public toString(): string
                /**
                 * Clone the role object.
                 * @return a Role that is an independent copy of the current Role object.
                 */
                // @ts-ignore
                public clone(): any
                /**
                 * Returns a string for the given role value.
                 * @param roleValue  List of ObjectName objects
                 * @return A String consisting of the ObjectNames separated by
                 *  newlines (\n).
                 * @exception IllegalArgumentException  if null parameter
                 */
                // @ts-ignore
                public static roleValueToString(roleValue: java.util.List<javax.management.ObjectName> | Array<javax.management.ObjectName>): string
            }
        }
    }
}

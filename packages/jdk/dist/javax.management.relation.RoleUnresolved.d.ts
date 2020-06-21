declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * Represents an unresolved role: a role not retrieved from a relation due
             * to a problem. It provides the role name, value (if problem when trying to
             * set the role) and an integer defining the problem (constants defined in
             * RoleStatus).
             * <p>The <b>serialVersionUID</b> of this class is <code>-48350262537070138L</code>.
             * @since 1.5
             */
            // @ts-ignore
            class RoleUnresolved extends java.lang.Object implements java.io.Serializable {
                /**
                 * Constructor.
                 * @param name  name of the role
                 * @param value  value of the role (if problem when setting the
                 *  role)
                 * @param pbType  type of problem (according to known problem types,
                 *  listed as static final members).
                 * @exception IllegalArgumentException  if null parameter or incorrect
                 *  problem type
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string, value: java.util.List<javax.management.ObjectName> | Array<javax.management.ObjectName>, pbType: number /*int*/)
                /**
                 * Retrieves role name.
                 * @return the role name.
                 * @see #setRoleName
                 */
                // @ts-ignore
                public getRoleName(): string
                /**
                 * Retrieves role value.
                 * @return an ArrayList of ObjectName objects, the one provided to be set
                 *  in given role. Null if the unresolved role is returned for a read
                 *  access.
                 * @see #setRoleValue
                 */
                // @ts-ignore
                public getRoleValue(): Array<javax.management.ObjectName>
                /**
                 * Retrieves problem type.
                 * @return an integer corresponding to a problem, those being described as
                 *  static final members of current class.
                 * @see #setProblemType
                 */
                // @ts-ignore
                public getProblemType(): number /*int*/
                /**
                 * Sets role name.
                 * @param name the new role name.
                 * @exception IllegalArgumentException  if null parameter
                 * @see #getRoleName
                 */
                // @ts-ignore
                public setRoleName(name: java.lang.String | string): void
                /**
                 * Sets role value.
                 * @param value  List of ObjectName objects for referenced
                 *  MBeans not set in role.
                 * @see #getRoleValue
                 */
                // @ts-ignore
                public setRoleValue(value: java.util.List<javax.management.ObjectName> | Array<javax.management.ObjectName>): void
                /**
                 * Sets problem type.
                 * @param pbType  integer corresponding to a problem. Must be one of
                 *  those described as static final members of current class.
                 * @exception IllegalArgumentException  if incorrect problem type
                 * @see #getProblemType
                 */
                // @ts-ignore
                public setProblemType(pbType: number /*int*/): void
                /**
                 * Clone this object.
                 * @return an independent clone.
                 */
                // @ts-ignore
                public clone(): any
                /**
                 * Return a string describing this object.
                 * @return a description of this RoleUnresolved object.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}

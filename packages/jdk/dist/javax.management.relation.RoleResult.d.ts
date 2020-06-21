declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * Represents the result of a multiple access to several roles of a relation
             * (either for reading or writing).
             * <p>The <b>serialVersionUID</b> of this class is <code>-6304063118040985512L</code>.
             * @since 1.5
             */
            // @ts-ignore
            class RoleResult extends java.lang.Object implements java.io.Serializable {
                /**
                 * Constructor.
                 * @param list  list of roles successfully accessed.
                 * @param unresolvedList  list of roles not accessed (with problem
                 *  descriptions).
                 */
                // @ts-ignore
                constructor(list: javax.management.relation.RoleList, unresolvedList: javax.management.relation.RoleUnresolvedList)
                /**
                 * Retrieves list of roles successfully accessed.
                 * @return a RoleList
                 * @see #setRoles
                 */
                // @ts-ignore
                public getRoles(): javax.management.relation.RoleList
                /**
                 * Retrieves list of roles unsuccessfully accessed.
                 * @return a RoleUnresolvedList.
                 * @see #setRolesUnresolved
                 */
                // @ts-ignore
                public getRolesUnresolved(): javax.management.relation.RoleUnresolvedList
                /**
                 * Sets list of roles successfully accessed.
                 * @param list  list of roles successfully accessed
                 * @see #getRoles
                 */
                // @ts-ignore
                public setRoles(list: javax.management.relation.RoleList): void
                /**
                 * Sets list of roles unsuccessfully accessed.
                 * @param unresolvedList  list of roles unsuccessfully accessed
                 * @see #getRolesUnresolved
                 */
                // @ts-ignore
                public setRolesUnresolved(unresolvedList: javax.management.relation.RoleUnresolvedList): void
            }
        }
    }
}

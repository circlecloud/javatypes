declare namespace java {
    namespace security {
        /**
         * The BasicPermission class extends the Permission class, and
         * can be used as the base class for permissions that want to
         * follow the same naming convention as BasicPermission.
         * <P>
         * The name for a BasicPermission is the name of the given permission
         * (for example, "exit",
         * "setFactory", "print.queueJob", etc). The naming
         * convention follows the  hierarchical property naming convention.
         * An asterisk may appear by itself, or if immediately preceded by a "."
         * may appear at the end of the name, to signify a wildcard match.
         * For example, "*" and "java.*" signify a wildcard match, while "*java", "a*b",
         * and "java*" do not.
         * <P>
         * The action string (inherited from Permission) is unused.
         * Thus, BasicPermission is commonly used as the base class for
         * "named" permissions
         * (ones that contain a name but no actions list; you either have the
         * named permission or you don't.)
         * Subclasses may implement actions on top of BasicPermission,
         * if desired.
         * <p>
         * @see java.security.Permission
         * @see java.security.Permissions
         * @see java.security.PermissionCollection
         * @see java.lang.SecurityManager
         * @author Marianne Mueller
         * @author Roland Schemers
         */
        // @ts-ignore
        abstract class BasicPermission extends java.security.Permission implements java.io.Serializable {
            /**
             * Creates a new BasicPermission with the specified name.
             * Name is the symbolic name of the permission, such as
             * "setFactory",
             * "print.queueJob", or "topLevelWindow", etc.
             * @param name the name of the BasicPermission.
             * @throws NullPointerException if {#code name} is {@code null}.
             * @throws IllegalArgumentException if {#code name} is empty.
             */
            // @ts-ignore
            constructor(name: java.lang.String | string)
            /**
             * Creates a new BasicPermission object with the specified name.
             * The name is the symbolic name of the BasicPermission, and the
             * actions String is currently unused.
             * @param name the name of the BasicPermission.
             * @param actions ignored.
             * @throws NullPointerException if {#code name} is {@code null}.
             * @throws IllegalArgumentException if {#code name} is empty.
             */
            // @ts-ignore
            constructor(name: java.lang.String | string, actions: java.lang.String | string)
            /**
             * Checks if the specified permission is "implied" by
             * this object.
             * <P>
             * More specifically, this method returns true if:
             * <ul>
             * <li> <i>p</i>'s class is the same as this object's class, and
             * <li> <i>p</i>'s name equals or (in the case of wildcards)
             * is implied by this object's
             * name. For example, "a.b.*" implies "a.b.c".
             * </ul>
             * @param p the permission to check against.
             * @return true if the passed permission is equal to or
             *  implied by this permission, false otherwise.
             */
            // @ts-ignore
            public implies(p: java.security.Permission): boolean
            /**
             * Checks two BasicPermission objects for equality.
             * Checks that <i>obj</i>'s class is the same as this object's class
             * and has the same name as this object.
             * <P>
             * @param obj the object we are testing for equality with this object.
             * @return true if <i>obj</i>'s class is the same as this object's class
             *   and has the same name as this BasicPermission object, false otherwise.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Returns the hash code value for this object.
             * The hash code used is the hash code of the name, that is,
             * {@code getName().hashCode()}, where {@code getName} is
             * from the Permission superclass.
             * @return a hash code value for this object.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Returns the canonical string representation of the actions,
             * which currently is the empty string "", since there are no actions for
             * a BasicPermission.
             * @return the empty string "".
             */
            // @ts-ignore
            public getActions(): string
            /**
             * Returns a new PermissionCollection object for storing BasicPermission
             * objects.
             * <p>BasicPermission objects must be stored in a manner that allows them
             * to be inserted in any order, but that also enables the
             * PermissionCollection {@code implies} method
             * to be implemented in an efficient (and consistent) manner.
             * @return a new PermissionCollection object suitable for
             *  storing BasicPermissions.
             */
            // @ts-ignore
            public newPermissionCollection(): java.security.PermissionCollection
        }
    }
}

declare namespace java {
    namespace security {
        /**
         * The AllPermission is a permission that implies all other permissions.
         * <p>
         * <b>Note:</b> Granting AllPermission should be done with extreme care,
         * as it implies all other permissions. Thus, it grants code the ability
         * to run with security
         * disabled.  Extreme caution should be taken before granting such
         * a permission to code.  This permission should be used only during testing,
         * or in extremely rare cases where an application or applet is
         * completely trusted and adding the necessary permissions to the policy
         * is prohibitively cumbersome.
         * @see java.security.Permission
         * @see java.security.AccessController
         * @see java.security.Permissions
         * @see java.security.PermissionCollection
         * @see java.lang.SecurityManager
         * @author Roland Schemers
         * @serial exclude
         */
        // @ts-ignore
        class AllPermission extends java.security.Permission {
            /**
             * Creates a new AllPermission object.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new AllPermission object. This
             * constructor exists for use by the {@code Policy} object
             * to instantiate new Permission objects.
             * @param name ignored
             * @param actions ignored.
             */
            // @ts-ignore
            constructor(name: java.lang.String | string, actions: java.lang.String | string)
            /**
             * Checks if the specified permission is "implied" by
             * this object. This method always returns true.
             * @param p the permission to check against.
             * @return return
             */
            // @ts-ignore
            public implies(p: java.security.Permission): boolean
            /**
             * Checks two AllPermission objects for equality. Two AllPermission
             * objects are always equal.
             * @param obj the object we are testing for equality with this object.
             * @return true if <i>obj</i> is an AllPermission, false otherwise.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Returns the hash code value for this object.
             * @return a hash code value for this object.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Returns the canonical string representation of the actions.
             * @return the actions.
             */
            // @ts-ignore
            public getActions(): string
            /**
             * Returns a new PermissionCollection object for storing AllPermission
             * objects.
             * <p>
             * @return a new PermissionCollection object suitable for
             *  storing AllPermissions.
             */
            // @ts-ignore
            public newPermissionCollection(): java.security.PermissionCollection
        }
    }
}

declare namespace java {
    namespace security {
        /**
         * The UnresolvedPermission class is used to hold Permissions that
         * were "unresolved" when the Policy was initialized.
         * An unresolved permission is one whose actual Permission class
         * does not yet exist at the time the Policy is initialized (see below).
         * <p>The policy for a Java runtime (specifying
         * which permissions are available for code from various principals)
         * is represented by a Policy object.
         * Whenever a Policy is initialized or refreshed, Permission objects of
         * appropriate classes are created for all permissions
         * allowed by the Policy.
         * <p>Many permission class types
         * referenced by the policy configuration are ones that exist
         * locally (i.e., ones that can be found on CLASSPATH).
         * Objects for such permissions can be instantiated during
         * Policy initialization. For example, it is always possible
         * to instantiate a java.io.FilePermission, since the
         * FilePermission class is found on the CLASSPATH.
         * <p>Other permission classes may not yet exist during Policy
         * initialization. For example, a referenced permission class may
         * be in a JAR file that will later be loaded.
         * For each such class, an UnresolvedPermission is instantiated.
         * Thus, an UnresolvedPermission is essentially a "placeholder"
         * containing information about the permission.
         * <p>Later, when code calls AccessController.checkPermission
         * on a permission of a type that was previously unresolved,
         * but whose class has since been loaded, previously-unresolved
         * permissions of that type are "resolved". That is,
         * for each such UnresolvedPermission, a new object of
         * the appropriate class type is instantiated, based on the
         * information in the UnresolvedPermission.
         * <p> To instantiate the new class, UnresolvedPermission assumes
         * the class provides a zero, one, and/or two-argument constructor.
         * The zero-argument constructor would be used to instantiate
         * a permission without a name and without actions.
         * A one-arg constructor is assumed to take a {@code String}
         * name as input, and a two-arg constructor is assumed to take a
         * {@code String} name and {@code String} actions
         * as input.  UnresolvedPermission may invoke a
         * constructor with a {@code null} name and/or actions.
         * If an appropriate permission constructor is not available,
         * the UnresolvedPermission is ignored and the relevant permission
         * will not be granted to executing code.
         * <p> The newly created permission object replaces the
         * UnresolvedPermission, which is removed.
         * <p> Note that the {@code getName} method for an
         * {@code UnresolvedPermission} returns the
         * {@code type} (class name) for the underlying permission
         * that has not been resolved.
         * @see java.security.Permission
         * @see java.security.Permissions
         * @see java.security.PermissionCollection
         * @see java.security.Policy
         * @author Roland Schemers
         */
        // @ts-ignore
        class UnresolvedPermission extends java.security.Permission implements java.io.Serializable {
            /**
             * Creates a new UnresolvedPermission containing the permission
             * information needed later to actually create a Permission of the
             * specified class, when the permission is resolved.
             * @param type the class name of the Permission class that will be
             *  created when this unresolved permission is resolved.
             * @param name the name of the permission.
             * @param actions the actions of the permission.
             * @param certs the certificates the permission's class was signed with.
             *  This is a list of certificate chains, where each chain is composed of a
             *  signer certificate and optionally its supporting certificate chain.
             *  Each chain is ordered bottom-to-top (i.e., with the signer certificate
             *  first and the (root) certificate authority last). The signer
             *  certificates are copied from the array. Subsequent changes to
             *  the array will not affect this UnsolvedPermission.
             */
            // @ts-ignore
            constructor(type: string, name: string, actions: string, certs: java.security.cert.Certificate[])
            /**
             * This method always returns false for unresolved permissions.
             * That is, an UnresolvedPermission is never considered to
             * imply another permission.
             * @param p the permission to check against.
             * @return false.
             */
            // @ts-ignore
            implies(p: java.security.Permission): boolean
            /**
             * Checks two UnresolvedPermission objects for equality.
             * Checks that <i>obj</i> is an UnresolvedPermission, and has
             * the same type (class) name, permission name, actions, and
             * certificates as this object.
             * <p> To determine certificate equality, this method only compares
             * actual signer certificates.  Supporting certificate chains
             * are not taken into consideration by this method.
             * @param obj the object we are testing for equality with this object.
             * @return true if obj is an UnresolvedPermission, and has the same
             *  type (class) name, permission name, actions, and
             *  certificates as this object.
             */
            // @ts-ignore
            equals(obj: any): boolean
            /**
             * Returns the hash code value for this object.
             * @return a hash code value for this object.
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Returns the canonical string representation of the actions,
             * which currently is the empty string "", since there are no actions for
             * an UnresolvedPermission. That is, the actions for the
             * permission that will be created when this UnresolvedPermission
             * is resolved may be non-null, but an UnresolvedPermission
             * itself is never considered to have any actions.
             * @return the empty string "".
             */
            // @ts-ignore
            getActions(): java.lang.String
            /**
             * Get the type (class name) of the underlying permission that
             * has not been resolved.
             * @return the type (class name) of the underlying permission that
             *   has not been resolved
             * @since 1.5
             */
            // @ts-ignore
            getUnresolvedType(): java.lang.String
            /**
             * Get the target name of the underlying permission that
             * has not been resolved.
             * @return the target name of the underlying permission that
             *           has not been resolved, or {#code null},
             *           if there is no target name
             * @since 1.5
             */
            // @ts-ignore
            getUnresolvedName(): java.lang.String
            /**
             * Get the actions for the underlying permission that
             * has not been resolved.
             * @return the actions for the underlying permission that
             *           has not been resolved, or {#code null}
             *           if there are no actions
             * @since 1.5
             */
            // @ts-ignore
            getUnresolvedActions(): java.lang.String
            /**
             * Get the signer certificates (without any supporting chain)
             * for the underlying permission that has not been resolved.
             * @return the signer certificates for the underlying permission that
             *  has not been resolved, or null, if there are no signer certificates.
             *  Returns a new array each time this method is called.
             * @since 1.5
             */
            // @ts-ignore
            getUnresolvedCerts(): java.security.cert.Certificate[]
            /**
             * Returns a string describing this UnresolvedPermission.  The convention
             * is to specify the class name, the permission name, and the actions, in
             * the following format: '(unresolved "ClassName" "name" "actions")'.
             * @return information about this UnresolvedPermission.
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Returns a new PermissionCollection object for storing
             * UnresolvedPermission  objects.
             * <p>
             * @return a new PermissionCollection object suitable for
             *  storing UnresolvedPermissions.
             */
            // @ts-ignore
            newPermissionCollection(): java.security.PermissionCollection
        }
    }
}

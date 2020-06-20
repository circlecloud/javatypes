declare namespace java {
    namespace security {
        /**
         * This class defines the <i>Service Provider Interface</i> (<b>SPI</b>)
         * for the {@code Policy} class.
         * All the abstract methods in this class must be implemented by each
         * service provider who wishes to supply a Policy implementation.
         * <p> Subclass implementations of this abstract class must provide
         * a public constructor that takes a {@code Policy.Parameters}
         * object as an input parameter.  This constructor also must throw
         * an IllegalArgumentException if it does not understand the
         * {@code Policy.Parameters} input.
         * @since 1.6
         */
        // @ts-ignore
        class PolicySpi extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Check whether the policy has granted a Permission to a ProtectionDomain.
             * @param domain the ProtectionDomain to check.
             * @param permission check whether this permission is granted to the
             *           specified domain.
             * @return boolean true if the permission is granted to the domain.
             */
            // @ts-ignore
            abstract engineImplies(domain: java.security.ProtectionDomain, permission: java.security.Permission): boolean
            /**
             * Refreshes/reloads the policy configuration. The behavior of this method
             * depends on the implementation. For example, calling {@code refresh}
             * on a file-based policy will cause the file to be re-read.
             * <p> The default implementation of this method does nothing.
             * This method should be overridden if a refresh operation is supported
             * by the policy implementation.
             */
            // @ts-ignore
            engineRefresh(): void
            /**
             * Return a PermissionCollection object containing the set of
             * permissions granted to the specified CodeSource.
             * <p> The default implementation of this method returns
             * Policy.UNSUPPORTED_EMPTY_COLLECTION object.  This method can be
             * overridden if the policy implementation can return a set of
             * permissions granted to a CodeSource.
             * @param codesource the CodeSource to which the returned
             *           PermissionCollection has been granted.
             * @return a set of permissions granted to the specified CodeSource.
             *           If this operation is supported, the returned
             *           set of permissions must be a new mutable instance
             *           and it must support heterogeneous Permission types.
             *           If this operation is not supported,
             *           Policy.UNSUPPORTED_EMPTY_COLLECTION is returned.
             */
            // @ts-ignore
            engineGetPermissions(codesource: java.security.CodeSource): java.security.PermissionCollection
            /**
             * Return a PermissionCollection object containing the set of
             * permissions granted to the specified ProtectionDomain.
             * <p> The default implementation of this method returns
             * Policy.UNSUPPORTED_EMPTY_COLLECTION object.  This method can be
             * overridden if the policy implementation can return a set of
             * permissions granted to a ProtectionDomain.
             * @param domain the ProtectionDomain to which the returned
             *           PermissionCollection has been granted.
             * @return a set of permissions granted to the specified ProtectionDomain.
             *           If this operation is supported, the returned
             *           set of permissions must be a new mutable instance
             *           and it must support heterogeneous Permission types.
             *           If this operation is not supported,
             *           Policy.UNSUPPORTED_EMPTY_COLLECTION is returned.
             */
            // @ts-ignore
            engineGetPermissions(domain: java.security.ProtectionDomain): java.security.PermissionCollection
        }
    }
}

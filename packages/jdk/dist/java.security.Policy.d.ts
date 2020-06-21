declare namespace java {
    namespace security {
        /**
         * A Policy object is responsible for determining whether code executing
         * in the Java runtime environment has permission to perform a
         * security-sensitive operation.
         * <p> There is only one Policy object installed in the runtime at any
         * given time.  A Policy object can be installed by calling the
         * {@code setPolicy} method.  The installed Policy object can be
         * obtained by calling the {@code getPolicy} method.
         * <p> If no Policy object has been installed in the runtime, a call to
         * {@code getPolicy} installs an instance of the default Policy
         * implementation (a default subclass implementation of this abstract class).
         * The default Policy implementation can be changed by setting the value
         * of the {@code policy.provider} security property to the fully qualified
         * name of the desired Policy subclass implementation.
         * <p> Application code can directly subclass Policy to provide a custom
         * implementation.  In addition, an instance of a Policy object can be
         * constructed by invoking one of the {@code getInstance} factory methods
         * with a standard type.  The default policy type is "JavaPolicy".
         * <p> Once a Policy instance has been installed (either by default, or by
         * calling {@code setPolicy}), the Java runtime invokes its
         * {@code implies} method when it needs to
         * determine whether executing code (encapsulated in a ProtectionDomain)
         * can perform SecurityManager-protected operations.  How a Policy object
         * retrieves its policy data is up to the Policy implementation itself.
         * The policy data may be stored, for example, in a flat ASCII file,
         * in a serialized binary file of the Policy class, or in a database.
         * <p> The {@code refresh} method causes the policy object to
         * refresh/reload its data.  This operation is implementation-dependent.
         * For example, if the policy object stores its data in configuration files,
         * calling {@code refresh} will cause it to re-read the configuration
         * policy files.  If a refresh operation is not supported, this method does
         * nothing.  Note that refreshed policy may not have an effect on classes
         * in a particular ProtectionDomain. This is dependent on the Policy
         * provider's implementation of the {@code implies}
         * method and its PermissionCollection caching strategy.
         * @author Roland Schemers
         * @author Gary Ellison
         * @see java.security.Provider
         * @see java.security.ProtectionDomain
         * @see java.security.Permission
         * @see java.security.Security security properties
         */
        // @ts-ignore
        abstract class Policy extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * A read-only empty PermissionCollection instance.
             * @since 1.6
             */
            // @ts-ignore
            public static readonly UNSUPPORTED_EMPTY_COLLECTION: java.security.PermissionCollection
            /**
             * Returns the installed Policy object. This value should not be cached,
             * as it may be changed by a call to {@code setPolicy}.
             * This method first calls
             * {@code SecurityManager.checkPermission} with a
             * {@code SecurityPermission("getPolicy")} permission
             * to ensure it's ok to get the Policy object.
             * @return the installed Policy.
             * @throws SecurityException
             *         if a security manager exists and its
             *         {#code checkPermission} method doesn't allow
             *         getting the Policy object.
             * @see SecurityManager#checkPermission(Permission)
             * @see #setPolicy(java.security.Policy)
             */
            // @ts-ignore
            public static getPolicy(): java.security.Policy
            /**
             * Sets the system-wide Policy object. This method first calls
             * {@code SecurityManager.checkPermission} with a
             * {@code SecurityPermission("setPolicy")}
             * permission to ensure it's ok to set the Policy.
             * @param p the new system Policy object.
             * @throws SecurityException
             *         if a security manager exists and its
             *         {#code checkPermission} method doesn't allow
             *         setting the Policy.
             * @see SecurityManager#checkPermission(Permission)
             * @see #getPolicy()
             */
            // @ts-ignore
            public static setPolicy(p: java.security.Policy): void
            /**
             * Returns a Policy object of the specified type.
             * <p> This method traverses the list of registered security providers,
             * starting with the most preferred Provider.
             * A new Policy object encapsulating the
             * PolicySpi implementation from the first
             * Provider that supports the specified type is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * @param type the specified Policy type.  See the Policy section in the
             *     <a href=
             *     "{#docRoot}/../technotes/guides/security/StandardNames.html#Policy">
             *     Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *     for a list of standard Policy types.
             * @param params parameters for the Policy, which may be null.
             * @return the new Policy object.
             * @exception SecurityException if the caller does not have permission
             *           to get a Policy instance for the specified type.
             * @exception NullPointerException if the specified type is null.
             * @exception IllegalArgumentException if the specified parameters
             *           are not understood by the PolicySpi implementation
             *           from the selected Provider.
             * @exception NoSuchAlgorithmException if no Provider supports a PolicySpi
             *           implementation for the specified type.
             * @see Provider
             * @since 1.6
             */
            // @ts-ignore
            public static getInstance(type: java.lang.String | string, params: java.security.Policy.Parameters): java.security.Policy
            /**
             * Returns a Policy object of the specified type.
             * <p> A new Policy object encapsulating the
             * PolicySpi implementation from the specified provider
             * is returned.   The specified provider must be registered
             * in the provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * @param type the specified Policy type.  See the Policy section in the
             *     <a href=
             *     "{#docRoot}/../technotes/guides/security/StandardNames.html#Policy">
             *     Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *     for a list of standard Policy types.
             * @param params parameters for the Policy, which may be null.
             * @param provider the provider.
             * @return the new Policy object.
             * @exception SecurityException if the caller does not have permission
             *           to get a Policy instance for the specified type.
             * @exception NullPointerException if the specified type is null.
             * @exception IllegalArgumentException if the specified provider
             *           is null or empty,
             *           or if the specified parameters are not understood by
             *           the PolicySpi implementation from the specified provider.
             * @exception NoSuchProviderException if the specified provider is not
             *           registered in the security provider list.
             * @exception NoSuchAlgorithmException if the specified provider does not
             *           support a PolicySpi implementation for the specified type.
             * @see Provider
             * @since 1.6
             */
            // @ts-ignore
            public static getInstance(type: java.lang.String | string, params: java.security.Policy.Parameters, provider: java.lang.String | string): java.security.Policy
            /**
             * Returns a Policy object of the specified type.
             * <p> A new Policy object encapsulating the
             * PolicySpi implementation from the specified Provider
             * object is returned.  Note that the specified Provider object
             * does not have to be registered in the provider list.
             * @param type the specified Policy type.  See the Policy section in the
             *     <a href=
             *     "{#docRoot}/../technotes/guides/security/StandardNames.html#Policy">
             *     Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *     for a list of standard Policy types.
             * @param params parameters for the Policy, which may be null.
             * @param provider the Provider.
             * @return the new Policy object.
             * @exception SecurityException if the caller does not have permission
             *           to get a Policy instance for the specified type.
             * @exception NullPointerException if the specified type is null.
             * @exception IllegalArgumentException if the specified Provider is null,
             *           or if the specified parameters are not understood by
             *           the PolicySpi implementation from the specified Provider.
             * @exception NoSuchAlgorithmException if the specified Provider does not
             *           support a PolicySpi implementation for the specified type.
             * @see Provider
             * @since 1.6
             */
            // @ts-ignore
            public static getInstance(type: java.lang.String | string, params: java.security.Policy.Parameters, provider: java.security.Provider): java.security.Policy
            /**
             * Return the Provider of this Policy.
             * <p> This Policy instance will only have a Provider if it
             * was obtained via a call to {@code Policy.getInstance}.
             * Otherwise this method returns null.
             * @return the Provider of this Policy, or null.
             * @since 1.6
             */
            // @ts-ignore
            public getProvider(): java.security.Provider
            /**
             * Return the type of this Policy.
             * <p> This Policy instance will only have a type if it
             * was obtained via a call to {@code Policy.getInstance}.
             * Otherwise this method returns null.
             * @return the type of this Policy, or null.
             * @since 1.6
             */
            // @ts-ignore
            public getType(): string
            /**
             * Return Policy parameters.
             * <p> This Policy instance will only have parameters if it
             * was obtained via a call to {@code Policy.getInstance}.
             * Otherwise this method returns null.
             * @return Policy parameters, or null.
             * @since 1.6
             */
            // @ts-ignore
            public getParameters(): java.security.Policy.Parameters
            /**
             * Return a PermissionCollection object containing the set of
             * permissions granted to the specified CodeSource.
             * <p> Applications are discouraged from calling this method
             * since this operation may not be supported by all policy implementations.
             * Applications should solely rely on the {@code implies} method
             * to perform policy checks.  If an application absolutely must call
             * a getPermissions method, it should call
             * {@code getPermissions(ProtectionDomain)}.
             * <p> The default implementation of this method returns
             * Policy.UNSUPPORTED_EMPTY_COLLECTION.  This method can be
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
            public getPermissions(codesource: java.security.CodeSource): java.security.PermissionCollection
            /**
             * Return a PermissionCollection object containing the set of
             * permissions granted to the specified ProtectionDomain.
             * <p> Applications are discouraged from calling this method
             * since this operation may not be supported by all policy implementations.
             * Applications should rely on the {@code implies} method
             * to perform policy checks.
             * <p> The default implementation of this method first retrieves
             * the permissions returned via {@code getPermissions(CodeSource)}
             * (the CodeSource is taken from the specified ProtectionDomain),
             * as well as the permissions located inside the specified ProtectionDomain.
             * All of these permissions are then combined and returned in a new
             * PermissionCollection object.  If {@code getPermissions(CodeSource)}
             * returns Policy.UNSUPPORTED_EMPTY_COLLECTION, then this method
             * returns the permissions contained inside the specified ProtectionDomain
             * in a new PermissionCollection object.
             * <p> This method can be overridden if the policy implementation
             * supports returning a set of permissions granted to a ProtectionDomain.
             * @param domain the ProtectionDomain to which the returned
             *           PermissionCollection has been granted.
             * @return a set of permissions granted to the specified ProtectionDomain.
             *           If this operation is supported, the returned
             *           set of permissions must be a new mutable instance
             *           and it must support heterogeneous Permission types.
             *           If this operation is not supported,
             *           Policy.UNSUPPORTED_EMPTY_COLLECTION is returned.
             * @since 1.4
             */
            // @ts-ignore
            public getPermissions(domain: java.security.ProtectionDomain): java.security.PermissionCollection
            /**
             * Evaluates the global policy for the permissions granted to
             * the ProtectionDomain and tests whether the permission is
             * granted.
             * @param domain the ProtectionDomain to test
             * @param permission the Permission object to be tested for implication.
             * @return true if "permission" is a proper subset of a permission
             *  granted to this ProtectionDomain.
             * @see java.security.ProtectionDomain
             * @since 1.4
             */
            // @ts-ignore
            public implies(domain: java.security.ProtectionDomain, permission: java.security.Permission): boolean
            /**
             * Refreshes/reloads the policy configuration. The behavior of this method
             * depends on the implementation. For example, calling {@code refresh}
             * on a file-based policy will cause the file to be re-read.
             * <p> The default implementation of this method does nothing.
             * This method should be overridden if a refresh operation is supported
             * by the policy implementation.
             */
            // @ts-ignore
            public refresh(): void
        }
    }
}

declare namespace java {
    namespace security {
        /**
         * <p>This class represents a scope for identities. It is an Identity
         * itself, and therefore has a name and can have a scope. It can also
         * optionally have a public key and associated certificates.
         * <p>An IdentityScope can contain Identity objects of all kinds, including
         * Signers. All types of Identity objects can be retrieved, added, and
         * removed using the same methods. Note that it is possible, and in fact
         * expected, that different types of identity scopes will
         * apply different policies for their various operations on the
         * various types of Identities.
         * <p>There is a one-to-one mapping between keys and identities, and
         * there can only be one copy of one key per scope. For example, suppose
         * <b>Acme Software, Inc</b> is a software publisher known to a user.
         * Suppose it is an Identity, that is, it has a public key, and a set of
         * associated certificates. It is named in the scope using the name
         * "Acme Software". No other named Identity in the scope has the same
         * public  key. Of course, none has the same name as well.
         * @see Identity
         * @see Signer
         * @see Principal
         * @see Key
         * @author Benjamin Renaud
         * @deprecated This class is no longer used. Its functionality has been
         *  replaced by {#code java.security.KeyStore}, the
         *  {@code java.security.cert} package, and
         *  {@code java.security.Principal}.
         */
        // @ts-ignore
        class IdentityScope extends java.security.Identity {
            /**
             * This constructor is used for serialization only and should not
             * be used by subclasses.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new identity scope with the specified name.
             * @param name the scope name.
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Constructs a new identity scope with the specified name and scope.
             * @param name the scope name.
             * @param scope the scope for the new identity scope.
             * @exception KeyManagementException if there is already an identity
             *  with the same name in the scope.
             */
            // @ts-ignore
            constructor(name: string, scope: java.security.IdentityScope)
            /**
             * Returns the system's identity scope.
             * @return the system's identity scope, or {#code null} if none has been
             *          set.
             * @see #setSystemScope
             */
            // @ts-ignore
            getSystemScope(): java.security.IdentityScope
            /**
             * Sets the system's identity scope.
             * <p>First, if there is a security manager, its
             * {@code checkSecurityAccess}
             * method is called with {@code "setSystemScope"}
             * as its argument to see if it's ok to set the identity scope.
             * @param scope the scope to set.
             * @exception SecurityException  if a security manager exists and its
             *  {#code checkSecurityAccess} method doesn't allow
             *  setting the identity scope.
             * @see #getSystemScope
             * @see SecurityManager#checkSecurityAccess
             */
            // @ts-ignore
            setSystemScope(scope: java.security.IdentityScope): void
            /**
             * Returns the number of identities within this identity scope.
             * @return the number of identities within this identity scope.
             */
            // @ts-ignore
            abstract size(): int
            /**
             * Returns the identity in this scope with the specified name (if any).
             * @param name the name of the identity to be retrieved.
             * @return the identity named {#code name}, or null if there are
             *  no identities named {@code name} in this scope.
             */
            // @ts-ignore
            abstract getIdentity(name: string): java.security.Identity
            /**
             * Retrieves the identity whose name is the same as that of the
             * specified principal. (Note: Identity implements Principal.)
             * @param principal the principal corresponding to the identity
             *  to be retrieved.
             * @return the identity whose name is the same as that of the
             *  principal, or null if there are no identities of the same name
             *  in this scope.
             */
            // @ts-ignore
            getIdentity(principal: java.security.Principal): java.security.Identity
            /**
             * Retrieves the identity with the specified public key.
             * @param key the public key for the identity to be returned.
             * @return the identity with the given key, or null if there are
             *  no identities in this scope with that key.
             */
            // @ts-ignore
            abstract getIdentity(key: java.security.PublicKey): java.security.Identity
            /**
             * Adds an identity to this identity scope.
             * @param identity the identity to be added.
             * @exception KeyManagementException if the identity is not
             *  valid, a name conflict occurs, another identity has the same
             *  public key as the identity being added, or another exception
             *  occurs.
             */
            // @ts-ignore
            abstract addIdentity(identity: java.security.Identity): void
            /**
             * Removes an identity from this identity scope.
             * @param identity the identity to be removed.
             * @exception KeyManagementException if the identity is missing,
             *  or another exception occurs.
             */
            // @ts-ignore
            abstract removeIdentity(identity: java.security.Identity): void
            /**
             * Returns an enumeration of all identities in this identity scope.
             * @return an enumeration of all identities in this identity scope.
             */
            // @ts-ignore
            abstract identities(): java.util.Enumeration<java.security.Identity>
            /**
             * Returns a string representation of this identity scope, including
             * its name, its scope name, and the number of identities in this
             * identity scope.
             * @return a string representation of this identity scope.
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}

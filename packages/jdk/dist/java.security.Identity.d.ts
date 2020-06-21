declare namespace java {
    namespace security {
        /**
         * <p>This class represents identities: real-world objects such as people,
         * companies or organizations whose identities can be authenticated using
         * their public keys. Identities may also be more abstract (or concrete)
         * constructs, such as daemon threads or smart cards.
         * <p>All Identity objects have a name and a public key. Names are
         * immutable. Identities may also be scoped. That is, if an Identity is
         * specified to have a particular scope, then the name and public
         * key of the Identity are unique within that scope.
         * <p>An Identity also has a set of certificates (all certifying its own
         * public key). The Principal names specified in these certificates need
         * not be the same, only the key.
         * <p>An Identity can be subclassed, to include postal and email addresses,
         * telephone numbers, images of faces and logos, and so on.
         * @see IdentityScope
         * @see Signer
         * @see Principal
         * @author Benjamin Renaud
         * @deprecated This class is no longer used. Its functionality has been
         *  replaced by {#code java.security.KeyStore}, the
         *  {@code java.security.cert} package, and
         *  {@code java.security.Principal}.
         */
        // @ts-ignore
        abstract class Identity extends java.lang.Object implements java.security.Principal, java.io.Serializable {
            /**
             * Constructor for serialization only.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an identity with the specified name and scope.
             * @param name the identity name.
             * @param scope the scope of the identity.
             * @exception KeyManagementException if there is already an identity
             *  with the same name in the scope.
             */
            // @ts-ignore
            constructor(name: java.lang.String | string, scope: java.security.IdentityScope)
            /**
             * Constructs an identity with the specified name and no scope.
             * @param name the identity name.
             */
            // @ts-ignore
            constructor(name: java.lang.String | string)
            /**
             * Returns this identity's name.
             * @return the name of this identity.
             */
            // @ts-ignore
            public getName(): string
            /**
             * Returns this identity's scope.
             * @return the scope of this identity.
             */
            // @ts-ignore
            public getScope(): java.security.IdentityScope
            /**
             * Returns this identity's public key.
             * @return the public key for this identity.
             * @see #setPublicKey
             */
            // @ts-ignore
            public getPublicKey(): java.security.PublicKey
            /**
             * Sets this identity's public key. The old key and all of this
             * identity's certificates are removed by this operation.
             * <p>First, if there is a security manager, its {@code checkSecurityAccess}
             * method is called with {@code "setIdentityPublicKey"}
             * as its argument to see if it's ok to set the public key.
             * @param key the public key for this identity.
             * @exception KeyManagementException if another identity in the
             *  identity's scope has the same public key, or if another exception occurs.
             * @exception SecurityException  if a security manager exists and its
             *  {#code checkSecurityAccess} method doesn't allow
             *  setting the public key.
             * @see #getPublicKey
             * @see SecurityManager#checkSecurityAccess
             */
            // @ts-ignore
            public setPublicKey(key: java.security.PublicKey): void
            /**
             * Specifies a general information string for this identity.
             * <p>First, if there is a security manager, its {@code checkSecurityAccess}
             * method is called with {@code "setIdentityInfo"}
             * as its argument to see if it's ok to specify the information string.
             * @param info the information string.
             * @exception SecurityException  if a security manager exists and its
             *  {#code checkSecurityAccess} method doesn't allow
             *  setting the information string.
             * @see #getInfo
             * @see SecurityManager#checkSecurityAccess
             */
            // @ts-ignore
            public setInfo(info: java.lang.String | string): void
            /**
             * Returns general information previously specified for this identity.
             * @return general information about this identity.
             * @see #setInfo
             */
            // @ts-ignore
            public getInfo(): string
            /**
             * Adds a certificate for this identity. If the identity has a public
             * key, the public key in the certificate must be the same, and if
             * the identity does not have a public key, the identity's
             * public key is set to be that specified in the certificate.
             * <p>First, if there is a security manager, its {@code checkSecurityAccess}
             * method is called with {@code "addIdentityCertificate"}
             * as its argument to see if it's ok to add a certificate.
             * @param certificate the certificate to be added.
             * @exception KeyManagementException if the certificate is not valid,
             *  if the public key in the certificate being added conflicts with
             *  this identity's public key, or if another exception occurs.
             * @exception SecurityException  if a security manager exists and its
             *  {#code checkSecurityAccess} method doesn't allow
             *  adding a certificate.
             * @see SecurityManager#checkSecurityAccess
             */
            // @ts-ignore
            public addCertificate(certificate: java.security.Certificate): void
            /**
             * Removes a certificate from this identity.
             * <p>First, if there is a security manager, its {@code checkSecurityAccess}
             * method is called with {@code "removeIdentityCertificate"}
             * as its argument to see if it's ok to remove a certificate.
             * @param certificate the certificate to be removed.
             * @exception KeyManagementException if the certificate is
             *  missing, or if another exception occurs.
             * @exception SecurityException  if a security manager exists and its
             *  {#code checkSecurityAccess} method doesn't allow
             *  removing a certificate.
             * @see SecurityManager#checkSecurityAccess
             */
            // @ts-ignore
            public removeCertificate(certificate: java.security.Certificate): void
            /**
             * Returns a copy of all the certificates for this identity.
             * @return a copy of all the certificates for this identity.
             */
            // @ts-ignore
            public certificates(): java.security.Certificate[]
            /**
             * Tests for equality between the specified object and this identity.
             * This first tests to see if the entities actually refer to the same
             * object, in which case it returns true. Next, it checks to see if
             * the entities have the same name and the same scope. If they do,
             * the method returns true. Otherwise, it calls
             * {@link #identityEquals(Identity) identityEquals}, which subclasses should
             * override.
             * @param identity the object to test for equality with this identity.
             * @return true if the objects are considered equal, false otherwise.
             * @see #identityEquals
             */
            // @ts-ignore
            public equals(identity: java.lang.Object | any): boolean
            /**
             * Tests for equality between the specified identity and this identity.
             * This method should be overriden by subclasses to test for equality.
             * The default behavior is to return true if the names and public keys
             * are equal.
             * @param identity the identity to test for equality with this identity.
             * @return true if the identities are considered equal, false
             *  otherwise.
             * @see #equals
             */
            // @ts-ignore
            identityEquals(identity: java.security.Identity): boolean
            /**
             * Returns a short string describing this identity, telling its
             * name and its scope (if any).
             * <p>First, if there is a security manager, its {@code checkSecurityAccess}
             * method is called with {@code "printIdentity"}
             * as its argument to see if it's ok to return the string.
             * @return information about this identity, such as its name and the
             *  name of its scope (if any).
             * @exception SecurityException  if a security manager exists and its
             *  {#code checkSecurityAccess} method doesn't allow
             *  returning a string describing this identity.
             * @see SecurityManager#checkSecurityAccess
             */
            // @ts-ignore
            public toString(): string
            /**
             * Returns a string representation of this identity, with
             * optionally more details than that provided by the
             * {@code toString} method without any arguments.
             * <p>First, if there is a security manager, its {@code checkSecurityAccess}
             * method is called with {@code "printIdentity"}
             * as its argument to see if it's ok to return the string.
             * @param detailed whether or not to provide detailed information.
             * @return information about this identity. If {#code detailed}
             *  is true, then this method returns more information than that
             *  provided by the {@code toString} method without any arguments.
             * @exception SecurityException  if a security manager exists and its
             *  {#code checkSecurityAccess} method doesn't allow
             *  returning a string describing this identity.
             * @see #toString
             * @see SecurityManager#checkSecurityAccess
             */
            // @ts-ignore
            public toString(detailed: boolean): string
            /**
             * Returns a hashcode for this identity.
             * @return a hashcode for this identity.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
        }
    }
}

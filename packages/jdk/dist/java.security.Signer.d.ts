declare namespace java {
    namespace security {
        /**
         * This class is used to represent an Identity that can also digitally
         * sign data.
         * <p>The management of a signer's private keys is an important and
         * sensitive issue that should be handled by subclasses as appropriate
         * to their intended use.
         * @see Identity
         * @author Benjamin Renaud
         * @deprecated This class is no longer used. Its functionality has been
         *  replaced by {#code java.security.KeyStore}, the
         *  {@code java.security.cert} package, and
         *  {@code java.security.Principal}.
         */
        // @ts-ignore
        class Signer extends java.security.Identity {
            /**
             * Creates a signer. This constructor should only be used for
             * serialization.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a signer with the specified identity name.
             * @param name the identity name.
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Creates a signer with the specified identity name and scope.
             * @param name the identity name.
             * @param scope the scope of the identity.
             * @exception KeyManagementException if there is already an identity
             *  with the same name in the scope.
             */
            // @ts-ignore
            constructor(name: string, scope: java.security.IdentityScope)
            /**
             * Returns this signer's private key.
             * <p>First, if there is a security manager, its {@code checkSecurityAccess}
             * method is called with {@code "getSignerPrivateKey"}
             * as its argument to see if it's ok to return the private key.
             * @return this signer's private key, or null if the private key has
             *  not yet been set.
             * @exception SecurityException  if a security manager exists and its
             *  {#code checkSecurityAccess} method doesn't allow
             *  returning the private key.
             * @see SecurityManager#checkSecurityAccess
             */
            // @ts-ignore
            getPrivateKey(): java.security.PrivateKey
            /**
             * Sets the key pair (public key and private key) for this signer.
             * <p>First, if there is a security manager, its {@code checkSecurityAccess}
             * method is called with {@code "setSignerKeyPair"}
             * as its argument to see if it's ok to set the key pair.
             * @param pair an initialized key pair.
             * @exception InvalidParameterException if the key pair is not
             *  properly initialized.
             * @exception KeyException if the key pair cannot be set for any
             *  other reason.
             * @exception SecurityException  if a security manager exists and its
             *  {#code checkSecurityAccess} method doesn't allow
             *  setting the key pair.
             * @see SecurityManager#checkSecurityAccess
             */
            // @ts-ignore
            setKeyPair(pair: java.security.KeyPair): void
            /**
             * Returns a string of information about the signer.
             * @return a string of information about the signer.
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}

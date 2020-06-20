declare namespace java {
    namespace security {
        /**
         * The Signature class is used to provide applications the functionality
         * of a digital signature algorithm. Digital signatures are used for
         * authentication and integrity assurance of digital data.
         * <p> The signature algorithm can be, among others, the NIST standard
         * DSA, using DSA and SHA-256. The DSA algorithm using the
         * SHA-256 message digest algorithm can be specified as {@code SHA256withDSA}.
         * In the case of RSA the signing algorithm could be specified as, for example,
         * {@code SHA256withRSA}.
         * The algorithm name must be specified, as there is no default.
         * <p> A Signature object can be used to generate and verify digital
         * signatures.
         * <p> There are three phases to the use of a Signature object for
         * either signing data or verifying a signature:<ol>
         * <li>Initialization, with either
         * <ul>
         * <li>a public key, which initializes the signature for
         * verification (see {@link #initVerify(PublicKey) initVerify}), or
         * <li>a private key (and optionally a Secure Random Number Generator),
         * which initializes the signature for signing
         * (see {@link #initSign(PrivateKey)}
         * and {@link #initSign(PrivateKey, SecureRandom)}).
         * </ul>
         * <li>Updating
         * <p>Depending on the type of initialization, this will update the
         * bytes to be signed or verified. See the
         * {@link #update(byte) update} methods.
         * <li>Signing or Verifying a signature on all updated bytes. See the
         * {@link #sign() sign} methods and the {@link #verify(byte[]) verify}
         * method.
         * </ol>
         * <p>Note that this class is abstract and extends from
         * {@code SignatureSpi} for historical reasons.
         * Application developers should only take notice of the methods defined in
         * this {@code Signature} class; all the methods in
         * the superclass are intended for cryptographic service providers who wish to
         * supply their own implementations of digital signature algorithms.
         * <p> Every implementation of the Java platform is required to support the
         * following standard {@code Signature} algorithms:
         * <ul>
         * <li>{@code SHA1withDSA}</li>
         * <li>{@code SHA1withRSA}</li>
         * <li>{@code SHA256withRSA}</li>
         * </ul>
         * These algorithms are described in the <a href=
         * "{@docRoot}/../technotes/guides/security/StandardNames.html#Signature">
         * Signature section</a> of the
         * Java Cryptography Architecture Standard Algorithm Name Documentation.
         * Consult the release documentation for your implementation to see if any
         * other algorithms are supported.
         * @author Benjamin Renaud
         */
        // @ts-ignore
        class Signature extends java.security.SignatureSpi {
            /**
             * Creates a Signature object for the specified algorithm.
             * @param algorithm the standard string name of the algorithm.
             *  See the Signature section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#Signature">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             */
            // @ts-ignore
            constructor(algorithm: string)
            /**
             * Possible {@link #state} value, signifying that
             * this signature object has not yet been initialized.
             */
            // @ts-ignore
            readonly UNINITIALIZED: number /*int*/
            /**
             * Possible {@link #state} value, signifying that
             * this signature object has been initialized for signing.
             */
            // @ts-ignore
            readonly SIGN: number /*int*/
            /**
             * Possible {@link #state} value, signifying that
             * this signature object has been initialized for verification.
             */
            // @ts-ignore
            readonly VERIFY: number /*int*/
            /**
             * Current state of this signature object.
             */
            // @ts-ignore
            state: number /*int*/
            /**
             * Returns a Signature object that implements the specified signature
             * algorithm.
             * <p> This method traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new Signature object encapsulating the
             * SignatureSpi implementation from the first
             * Provider that supports the specified algorithm is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * @param algorithm the standard name of the algorithm requested.
             *  See the Signature section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#Signature">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             * @return the new Signature object.
             * @exception NoSuchAlgorithmException if no Provider supports a
             *           Signature implementation for the
             *           specified algorithm.
             * @see Provider
             */
            // @ts-ignore
            getInstance(algorithm: string): java.security.Signature
            /**
             * Returns a Signature object that implements the specified signature
             * algorithm.
             * <p> A new Signature object encapsulating the
             * SignatureSpi implementation from the specified provider
             * is returned.  The specified provider must be registered
             * in the security provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * @param algorithm the name of the algorithm requested.
             *  See the Signature section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#Signature">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             * @param provider the name of the provider.
             * @return the new Signature object.
             * @exception NoSuchAlgorithmException if a SignatureSpi
             *           implementation for the specified algorithm is not
             *           available from the specified provider.
             * @exception NoSuchProviderException if the specified provider is not
             *           registered in the security provider list.
             * @exception IllegalArgumentException if the provider name is null
             *           or empty.
             * @see Provider
             */
            // @ts-ignore
            getInstance(algorithm: string, provider: string): java.security.Signature
            /**
             * Returns a Signature object that implements the specified
             * signature algorithm.
             * <p> A new Signature object encapsulating the
             * SignatureSpi implementation from the specified Provider
             * object is returned.  Note that the specified Provider object
             * does not have to be registered in the provider list.
             * @param algorithm the name of the algorithm requested.
             *  See the Signature section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#Signature">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard algorithm names.
             * @param provider the provider.
             * @return the new Signature object.
             * @exception NoSuchAlgorithmException if a SignatureSpi
             *           implementation for the specified algorithm is not available
             *           from the specified Provider object.
             * @exception IllegalArgumentException if the provider is null.
             * @see Provider
             * @since 1.4
             */
            // @ts-ignore
            getInstance(algorithm: string, provider: java.security.Provider): java.security.Signature
            /**
             * Returns the provider of this signature object.
             * @return the provider of this signature object
             */
            // @ts-ignore
            getProvider(): java.security.Provider
            /**
             * Initializes this object for verification. If this method is called
             * again with a different argument, it negates the effect
             * of this call.
             * @param publicKey the public key of the identity whose signature is
             *  going to be verified.
             * @exception InvalidKeyException if the key is invalid.
             */
            // @ts-ignore
            initVerify(publicKey: java.security.PublicKey): void
            /**
             * Initializes this object for verification, using the public key from
             * the given certificate.
             * <p>If the certificate is of type X.509 and has a <i>key usage</i>
             * extension field marked as critical, and the value of the <i>key usage</i>
             * extension field implies that the public key in
             * the certificate and its corresponding private key are not
             * supposed to be used for digital signatures, an
             * {@code InvalidKeyException} is thrown.
             * @param certificate the certificate of the identity whose signature is
             *  going to be verified.
             * @exception InvalidKeyException  if the public key in the certificate
             *  is not encoded properly or does not include required  parameter
             *  information or cannot be used for digital signature purposes.
             * @since 1.3
             */
            // @ts-ignore
            initVerify(certificate: java.security.cert.Certificate): void
            /**
             * Initialize this object for signing. If this method is called
             * again with a different argument, it negates the effect
             * of this call.
             * @param privateKey the private key of the identity whose signature
             *  is going to be generated.
             * @exception InvalidKeyException if the key is invalid.
             */
            // @ts-ignore
            initSign(privateKey: java.security.PrivateKey): void
            /**
             * Initialize this object for signing. If this method is called
             * again with a different argument, it negates the effect
             * of this call.
             * @param privateKey the private key of the identity whose signature
             *  is going to be generated.
             * @param random the source of randomness for this signature.
             * @exception InvalidKeyException if the key is invalid.
             */
            // @ts-ignore
            initSign(privateKey: java.security.PrivateKey, random: java.security.SecureRandom): void
            /**
             * Returns the signature bytes of all the data updated.
             * The format of the signature depends on the underlying
             * signature scheme.
             * <p>A call to this method resets this signature object to the state
             * it was in when previously initialized for signing via a
             * call to {@code initSign(PrivateKey)}. That is, the object is
             * reset and available to generate another signature from the same
             * signer, if desired, via new calls to {@code update} and
             * {@code sign}.
             * @return the signature bytes of the signing operation's result.
             * @exception SignatureException if this signature object is not
             *  initialized properly or if this signature algorithm is unable to
             *  process the input data provided.
             */
            // @ts-ignore
            sign(): byte[]
            /**
             * Finishes the signature operation and stores the resulting signature
             * bytes in the provided buffer {@code outbuf}, starting at
             * {@code offset}.
             * The format of the signature depends on the underlying
             * signature scheme.
             * <p>This signature object is reset to its initial state (the state it
             * was in after a call to one of the {@code initSign} methods) and
             * can be reused to generate further signatures with the same private key.
             * @param outbuf buffer for the signature result.
             * @param offset offset into {#code outbuf} where the signature is
             *  stored.
             * @param len number of bytes within {#code outbuf} allotted for the
             *  signature.
             * @return the number of bytes placed into {#code outbuf}.
             * @exception SignatureException if this signature object is not
             *  initialized properly, if this signature algorithm is unable to
             *  process the input data provided, or if {#code len} is less
             *  than the actual signature length.
             * @since 1.2
             */
            // @ts-ignore
            sign(outbuf: number /*byte*/[], offset: number /*int*/, len: number /*int*/): int
            /**
             * Verifies the passed-in signature.
             * <p>A call to this method resets this signature object to the state
             * it was in when previously initialized for verification via a
             * call to {@code initVerify(PublicKey)}. That is, the object is
             * reset and available to verify another signature from the identity
             * whose public key was specified in the call to {@code initVerify}.
             * @param signature the signature bytes to be verified.
             * @return true if the signature was verified, false if not.
             * @exception SignatureException if this signature object is not
             *  initialized properly, the passed-in signature is improperly
             *  encoded or of the wrong type, if this signature algorithm is unable to
             *  process the input data provided, etc.
             */
            // @ts-ignore
            verify(signature: number /*byte*/[]): boolean
            /**
             * Verifies the passed-in signature in the specified array
             * of bytes, starting at the specified offset.
             * <p>A call to this method resets this signature object to the state
             * it was in when previously initialized for verification via a
             * call to {@code initVerify(PublicKey)}. That is, the object is
             * reset and available to verify another signature from the identity
             * whose public key was specified in the call to {@code initVerify}.
             * @param signature the signature bytes to be verified.
             * @param offset the offset to start from in the array of bytes.
             * @param length the number of bytes to use, starting at offset.
             * @return true if the signature was verified, false if not.
             * @exception SignatureException if this signature object is not
             *  initialized properly, the passed-in signature is improperly
             *  encoded or of the wrong type, if this signature algorithm is unable to
             *  process the input data provided, etc.
             * @exception IllegalArgumentException if the {#code signature}
             *  byte array is null, or the {@code offset} or {@code length}
             *  is less than 0, or the sum of the {@code offset} and
             *  {@code length} is greater than the length of the
             *  {@code signature} byte array.
             * @since 1.4
             */
            // @ts-ignore
            verify(signature: number /*byte*/[], offset: number /*int*/, length: number /*int*/): boolean
            /**
             * Updates the data to be signed or verified by a byte.
             * @param b the byte to use for the update.
             * @exception SignatureException if this signature object is not
             *  initialized properly.
             */
            // @ts-ignore
            update(b: number /*byte*/): void
            /**
             * Updates the data to be signed or verified, using the specified
             * array of bytes.
             * @param data the byte array to use for the update.
             * @exception SignatureException if this signature object is not
             *  initialized properly.
             */
            // @ts-ignore
            update(data: number /*byte*/[]): void
            /**
             * Updates the data to be signed or verified, using the specified
             * array of bytes, starting at the specified offset.
             * @param data the array of bytes.
             * @param off the offset to start from in the array of bytes.
             * @param len the number of bytes to use, starting at offset.
             * @exception SignatureException if this signature object is not
             *  initialized properly.
             */
            // @ts-ignore
            update(data: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
            /**
             * Updates the data to be signed or verified using the specified
             * ByteBuffer. Processes the {@code data.remaining()} bytes
             * starting at at {@code data.position()}.
             * Upon return, the buffer's position will be equal to its limit;
             * its limit will not have changed.
             * @param data the ByteBuffer
             * @exception SignatureException if this signature object is not
             *  initialized properly.
             * @since 1.5
             */
            // @ts-ignore
            update(data: java.nio.ByteBuffer): void
            /**
             * Returns the name of the algorithm for this signature object.
             * @return the name of the algorithm for this signature object.
             */
            // @ts-ignore
            getAlgorithm(): java.lang.String
            /**
             * Returns a string representation of this signature object,
             * providing information that includes the state of the object
             * and the name of the algorithm used.
             * @return a string representation of this signature object.
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Sets the specified algorithm parameter to the specified value.
             * This method supplies a general-purpose mechanism through
             * which it is possible to set the various parameters of this object.
             * A parameter may be any settable parameter for the algorithm, such as
             * a parameter size, or a source of random bits for signature generation
             * (if appropriate), or an indication of whether or not to perform
             * a specific but optional computation. A uniform algorithm-specific
             * naming scheme for each parameter is desirable but left unspecified
             * at this time.
             * @param param the string identifier of the parameter.
             * @param value the parameter value.
             * @exception InvalidParameterException if {#code param} is an
             *  invalid parameter for this signature algorithm engine,
             *  the parameter is already set
             *  and cannot be set again, a security exception occurs, and so on.
             * @see #getParameter
             * @deprecated Use
             *  {#link #setParameter(java.security.spec.AlgorithmParameterSpec)
             *  setParameter}.
             */
            // @ts-ignore
            setParameter(param: string, value: any): void
            /**
             * Initializes this signature engine with the specified parameter set.
             * @param params the parameters
             * @exception InvalidAlgorithmParameterException if the given parameters
             *  are inappropriate for this signature engine
             * @see #getParameters
             */
            // @ts-ignore
            setParameter(params: java.security.spec.AlgorithmParameterSpec): void
            /**
             * Returns the parameters used with this signature object.
             * <p>The returned parameters may be the same that were used to initialize
             * this signature, or may contain a combination of default and randomly
             * generated parameter values used by the underlying signature
             * implementation if this signature requires algorithm parameters but
             * was not initialized with any.
             * @return the parameters used with this signature, or null if this
             *  signature does not use any parameters.
             * @see #setParameter(AlgorithmParameterSpec)
             * @since 1.4
             */
            // @ts-ignore
            getParameters(): java.security.AlgorithmParameters
            /**
             * Gets the value of the specified algorithm parameter. This method
             * supplies a general-purpose mechanism through which it is possible to
             * get the various parameters of this object. A parameter may be any
             * settable parameter for the algorithm, such as a parameter size, or
             * a source of random bits for signature generation (if appropriate),
             * or an indication of whether or not to perform a specific but optional
             * computation. A uniform algorithm-specific naming scheme for each
             * parameter is desirable but left unspecified at this time.
             * @param param the string name of the parameter.
             * @return the object that represents the parameter value, or null if
             *  there is none.
             * @exception InvalidParameterException if {#code param} is an invalid
             *  parameter for this engine, or another exception occurs while
             *  trying to get this parameter.
             * @see #setParameter(String, Object)
             * @deprecated 
             */
            // @ts-ignore
            getParameter(param: string): java.lang.Object
            /**
             * Returns a clone if the implementation is cloneable.
             * @return a clone if the implementation is cloneable.
             * @exception CloneNotSupportedException if this is called
             *  on an implementation that does not support {#code Cloneable}.
             */
            // @ts-ignore
            clone(): java.lang.Object
        }
    }
}

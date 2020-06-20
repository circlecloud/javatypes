declare namespace java {
    namespace security {
        /**
         * This class represents a storage facility for cryptographic
         * keys and certificates.
         * <p> A {@code KeyStore} manages different types of entries.
         * Each type of entry implements the {@code KeyStore.Entry} interface.
         * Three basic {@code KeyStore.Entry} implementations are provided:
         * <ul>
         * <li><b>KeyStore.PrivateKeyEntry</b>
         * <p> This type of entry holds a cryptographic {@code PrivateKey},
         * which is optionally stored in a protected format to prevent
         * unauthorized access.  It is also accompanied by a certificate chain
         * for the corresponding public key.
         * <p> Private keys and certificate chains are used by a given entity for
         * self-authentication. Applications for this authentication include software
         * distribution organizations which sign JAR files as part of releasing
         * and/or licensing software.
         * <li><b>KeyStore.SecretKeyEntry</b>
         * <p> This type of entry holds a cryptographic {@code SecretKey},
         * which is optionally stored in a protected format to prevent
         * unauthorized access.
         * <li><b>KeyStore.TrustedCertificateEntry</b>
         * <p> This type of entry contains a single public key {@code Certificate}
         * belonging to another party. It is called a <i>trusted certificate</i>
         * because the keystore owner trusts that the public key in the certificate
         * indeed belongs to the identity identified by the <i>subject</i> (owner)
         * of the certificate.
         * <p>This type of entry can be used to authenticate other parties.
         * </ul>
         * <p> Each entry in a keystore is identified by an "alias" string. In the
         * case of private keys and their associated certificate chains, these strings
         * distinguish among the different ways in which the entity may authenticate
         * itself. For example, the entity may authenticate itself using different
         * certificate authorities, or using different public key algorithms.
         * <p> Whether aliases are case sensitive is implementation dependent. In order
         * to avoid problems, it is recommended not to use aliases in a KeyStore that
         * only differ in case.
         * <p> Whether keystores are persistent, and the mechanisms used by the
         * keystore if it is persistent, are not specified here. This allows
         * use of a variety of techniques for protecting sensitive (e.g., private or
         * secret) keys. Smart cards or other integrated cryptographic engines
         * (SafeKeyper) are one option, and simpler mechanisms such as files may also
         * be used (in a variety of formats).
         * <p> Typical ways to request a KeyStore object include
         * relying on the default type and providing a specific keystore type.
         * <ul>
         * <li>To rely on the default type:
         * <pre>
         * KeyStore ks = KeyStore.getInstance(KeyStore.getDefaultType());
         * </pre>
         * The system will return a keystore implementation for the default type.
         * <li>To provide a specific keystore type:
         * <pre>
         * KeyStore ks = KeyStore.getInstance("JKS");
         * </pre>
         * The system will return the most preferred implementation of the
         * specified keystore type available in the environment. <p>
         * </ul>
         * <p> Before a keystore can be accessed, it must be
         * {@link #load(java.io.InputStream, char[]) loaded}.
         * <pre>
         * KeyStore ks = KeyStore.getInstance(KeyStore.getDefaultType());
         * // get user password and file input stream
         * char[] password = getPassword();
         * try (FileInputStream fis = new FileInputStream("keyStoreName")) {
         * ks.load(fis, password);
         * }
         * </pre>
         * To create an empty keystore using the above {@code load} method,
         * pass {@code null} as the {@code InputStream} argument.
         * <p> Once the keystore has been loaded, it is possible
         * to read existing entries from the keystore, or to write new entries
         * into the keystore:
         * <pre>
         * KeyStore.ProtectionParameter protParam =
         * new KeyStore.PasswordProtection(password);
         * // get my private key
         * KeyStore.PrivateKeyEntry pkEntry = (KeyStore.PrivateKeyEntry)
         * ks.getEntry("privateKeyAlias", protParam);
         * PrivateKey myPrivateKey = pkEntry.getPrivateKey();
         * // save my secret key
         * javax.crypto.SecretKey mySecretKey;
         * KeyStore.SecretKeyEntry skEntry =
         * new KeyStore.SecretKeyEntry(mySecretKey);
         * ks.setEntry("secretKeyAlias", skEntry, protParam);
         * // store away the keystore
         * try (FileOutputStream fos = new FileOutputStream("newKeyStoreName")) {
         * ks.store(fos, password);
         * }
         * </pre>
         * Note that although the same password may be used to
         * load the keystore, to protect the private key entry,
         * to protect the secret key entry, and to store the keystore
         * (as is shown in the sample code above),
         * different passwords or other protection parameters
         * may also be used.
         * <p> Every implementation of the Java platform is required to support
         * the following standard {@code KeyStore} type:
         * <ul>
         * <li>{@code PKCS12}</li>
         * </ul>
         * This type is described in the <a href=
         * "{@docRoot}/../technotes/guides/security/StandardNames.html#KeyStore">
         * KeyStore section</a> of the
         * Java Cryptography Architecture Standard Algorithm Name Documentation.
         * Consult the release documentation for your implementation to see if any
         * other types are supported.
         * @author Jan Luehe
         * @see java.security.PrivateKey
         * @see javax.crypto.SecretKey
         * @see java.security.cert.Certificate
         * @since 1.2
         */
        // @ts-ignore
        class KeyStore extends java.lang.Object {
            /**
             * Creates a KeyStore object of the given type, and encapsulates the given
             * provider implementation (SPI object) in it.
             * @param keyStoreSpi the provider implementation.
             * @param provider the provider.
             * @param type the keystore type.
             */
            // @ts-ignore
            constructor(keyStoreSpi: java.security.KeyStoreSpi, provider: java.security.Provider, type: string)
            /**
             * Returns a keystore object of the specified type.
             * <p> This method traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new KeyStore object encapsulating the
             * KeyStoreSpi implementation from the first
             * Provider that supports the specified type is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * @param type the type of keystore.
             *  See the KeyStore section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#KeyStore">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard keystore types.
             * @return a keystore object of the specified type.
             * @exception KeyStoreException if no Provider supports a
             *           KeyStoreSpi implementation for the
             *           specified type.
             * @see Provider
             */
            // @ts-ignore
            getInstance(type: string): java.security.KeyStore
            /**
             * Returns a keystore object of the specified type.
             * <p> A new KeyStore object encapsulating the
             * KeyStoreSpi implementation from the specified provider
             * is returned.  The specified provider must be registered
             * in the security provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * @param type the type of keystore.
             *  See the KeyStore section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#KeyStore">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard keystore types.
             * @param provider the name of the provider.
             * @return a keystore object of the specified type.
             * @exception KeyStoreException if a KeyStoreSpi
             *           implementation for the specified type is not
             *           available from the specified provider.
             * @exception NoSuchProviderException if the specified provider is not
             *           registered in the security provider list.
             * @exception IllegalArgumentException if the provider name is null
             *           or empty.
             * @see Provider
             */
            // @ts-ignore
            getInstance(type: string, provider: string): java.security.KeyStore
            /**
             * Returns a keystore object of the specified type.
             * <p> A new KeyStore object encapsulating the
             * KeyStoreSpi implementation from the specified Provider
             * object is returned.  Note that the specified Provider object
             * does not have to be registered in the provider list.
             * @param type the type of keystore.
             *  See the KeyStore section in the <a href=
             *  "{#docRoot}/../technotes/guides/security/StandardNames.html#KeyStore">
             *  Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             *  for information about standard keystore types.
             * @param provider the provider.
             * @return a keystore object of the specified type.
             * @exception KeyStoreException if KeyStoreSpi
             *           implementation for the specified type is not available
             *           from the specified Provider object.
             * @exception IllegalArgumentException if the specified provider is null.
             * @see Provider
             * @since 1.4
             */
            // @ts-ignore
            getInstance(type: string, provider: java.security.Provider): java.security.KeyStore
            /**
             * Returns the default keystore type as specified by the
             * {@code keystore.type} security property, or the string
             * {@literal "jks"} (acronym for {@literal "Java keystore"})
             * if no such property exists.
             * <p>The default keystore type can be used by applications that do not
             * want to use a hard-coded keystore type when calling one of the
             * {@code getInstance} methods, and want to provide a default keystore
             * type in case a user does not specify its own.
             * <p>The default keystore type can be changed by setting the value of the
             * {@code keystore.type} security property to the desired keystore type.
             * @return the default keystore type as specified by the
             *  {#code keystore.type} security property, or the string {@literal "jks"}
             *  if no such property exists.
             * @see java.security.Security security properties
             */
            // @ts-ignore
            getDefaultType(): java.lang.String
            /**
             * Returns the provider of this keystore.
             * @return the provider of this keystore.
             */
            // @ts-ignore
            getProvider(): java.security.Provider
            /**
             * Returns the type of this keystore.
             * @return the type of this keystore.
             */
            // @ts-ignore
            getType(): java.lang.String
            /**
             * Returns the key associated with the given alias, using the given
             * password to recover it.  The key must have been associated with
             * the alias by a call to {@code setKeyEntry},
             * or by a call to {@code setEntry} with a
             * {@code PrivateKeyEntry} or {@code SecretKeyEntry}.
             * @param alias the alias name
             * @param password the password for recovering the key
             * @return the requested key, or null if the given alias does not exist
             *  or does not identify a key-related entry.
             * @exception KeyStoreException if the keystore has not been initialized
             *  (loaded).
             * @exception NoSuchAlgorithmException if the algorithm for recovering the
             *  key cannot be found
             * @exception UnrecoverableKeyException if the key cannot be recovered
             *  (e.g., the given password is wrong).
             */
            // @ts-ignore
            getKey(alias: string, password: string[]): java.security.Key
            /**
             * Returns the certificate chain associated with the given alias.
             * The certificate chain must have been associated with the alias
             * by a call to {@code setKeyEntry},
             * or by a call to {@code setEntry} with a
             * {@code PrivateKeyEntry}.
             * @param alias the alias name
             * @return the certificate chain (ordered with the user's certificate first
             *  followed by zero or more certificate authorities), or null if the given alias
             *  does not exist or does not contain a certificate chain
             * @exception KeyStoreException if the keystore has not been initialized
             *  (loaded).
             */
            // @ts-ignore
            getCertificateChain(alias: string): java.security.cert.Certificate[]
            /**
             * Returns the certificate associated with the given alias.
             * <p> If the given alias name identifies an entry
             * created by a call to {@code setCertificateEntry},
             * or created by a call to {@code setEntry} with a
             * {@code TrustedCertificateEntry},
             * then the trusted certificate contained in that entry is returned.
             * <p> If the given alias name identifies an entry
             * created by a call to {@code setKeyEntry},
             * or created by a call to {@code setEntry} with a
             * {@code PrivateKeyEntry},
             * then the first element of the certificate chain in that entry
             * is returned.
             * @param alias the alias name
             * @return the certificate, or null if the given alias does not exist or
             *  does not contain a certificate.
             * @exception KeyStoreException if the keystore has not been initialized
             *  (loaded).
             */
            // @ts-ignore
            getCertificate(alias: string): java.security.cert.Certificate
            /**
             * Returns the creation date of the entry identified by the given alias.
             * @param alias the alias name
             * @return the creation date of this entry, or null if the given alias does
             *  not exist
             * @exception KeyStoreException if the keystore has not been initialized
             *  (loaded).
             */
            // @ts-ignore
            getCreationDate(alias: string): java.util.Date
            /**
             * Assigns the given key to the given alias, protecting it with the given
             * password.
             * <p>If the given key is of type {@code java.security.PrivateKey},
             * it must be accompanied by a certificate chain certifying the
             * corresponding public key.
             * <p>If the given alias already exists, the keystore information
             * associated with it is overridden by the given key (and possibly
             * certificate chain).
             * @param alias the alias name
             * @param key the key to be associated with the alias
             * @param password the password to protect the key
             * @param chain the certificate chain for the corresponding public
             *  key (only required if the given key is of type
             *  {#code java.security.PrivateKey}).
             * @exception KeyStoreException if the keystore has not been initialized
             *  (loaded), the given key cannot be protected, or this operation fails
             *  for some other reason
             */
            // @ts-ignore
            setKeyEntry(alias: string, key: java.security.Key, password: string[], chain: java.security.cert.Certificate[]): void
            /**
             * Assigns the given key (that has already been protected) to the given
             * alias.
             * <p>If the protected key is of type
             * {@code java.security.PrivateKey}, it must be accompanied by a
             * certificate chain certifying the corresponding public key. If the
             * underlying keystore implementation is of type {@code jks},
             * {@code key} must be encoded as an
             * {@code EncryptedPrivateKeyInfo} as defined in the PKCS #8 standard.
             * <p>If the given alias already exists, the keystore information
             * associated with it is overridden by the given key (and possibly
             * certificate chain).
             * @param alias the alias name
             * @param key the key (in protected format) to be associated with the alias
             * @param chain the certificate chain for the corresponding public
             *           key (only useful if the protected key is of type
             *           {#code java.security.PrivateKey}).
             * @exception KeyStoreException if the keystore has not been initialized
             *  (loaded), or if this operation fails for some other reason.
             */
            // @ts-ignore
            setKeyEntry(alias: string, key: number /*byte*/[], chain: java.security.cert.Certificate[]): void
            /**
             * Assigns the given trusted certificate to the given alias.
             * <p> If the given alias identifies an existing entry
             * created by a call to {@code setCertificateEntry},
             * or created by a call to {@code setEntry} with a
             * {@code TrustedCertificateEntry},
             * the trusted certificate in the existing entry
             * is overridden by the given certificate.
             * @param alias the alias name
             * @param cert the certificate
             * @exception KeyStoreException if the keystore has not been initialized,
             *  or the given alias already exists and does not identify an
             *  entry containing a trusted certificate,
             *  or this operation fails for some other reason.
             */
            // @ts-ignore
            setCertificateEntry(alias: string, cert: java.security.cert.Certificate): void
            /**
             * Deletes the entry identified by the given alias from this keystore.
             * @param alias the alias name
             * @exception KeyStoreException if the keystore has not been initialized,
             *  or if the entry cannot be removed.
             */
            // @ts-ignore
            deleteEntry(alias: string): void
            /**
             * Lists all the alias names of this keystore.
             * @return enumeration of the alias names
             * @exception KeyStoreException if the keystore has not been initialized
             *  (loaded).
             */
            // @ts-ignore
            aliases(): java.util.Enumeration<java.lang.String>
            /**
             * Checks if the given alias exists in this keystore.
             * @param alias the alias name
             * @return true if the alias exists, false otherwise
             * @exception KeyStoreException if the keystore has not been initialized
             *  (loaded).
             */
            // @ts-ignore
            containsAlias(alias: string): boolean
            /**
             * Retrieves the number of entries in this keystore.
             * @return the number of entries in this keystore
             * @exception KeyStoreException if the keystore has not been initialized
             *  (loaded).
             */
            // @ts-ignore
            size(): int
            /**
             * Returns true if the entry identified by the given alias
             * was created by a call to {@code setKeyEntry},
             * or created by a call to {@code setEntry} with a
             * {@code PrivateKeyEntry} or a {@code SecretKeyEntry}.
             * @param alias the alias for the keystore entry to be checked
             * @return true if the entry identified by the given alias is a
             *  key-related entry, false otherwise.
             * @exception KeyStoreException if the keystore has not been initialized
             *  (loaded).
             */
            // @ts-ignore
            isKeyEntry(alias: string): boolean
            /**
             * Returns true if the entry identified by the given alias
             * was created by a call to {@code setCertificateEntry},
             * or created by a call to {@code setEntry} with a
             * {@code TrustedCertificateEntry}.
             * @param alias the alias for the keystore entry to be checked
             * @return true if the entry identified by the given alias contains a
             *  trusted certificate, false otherwise.
             * @exception KeyStoreException if the keystore has not been initialized
             *  (loaded).
             */
            // @ts-ignore
            isCertificateEntry(alias: string): boolean
            /**
             * Returns the (alias) name of the first keystore entry whose certificate
             * matches the given certificate.
             * <p> This method attempts to match the given certificate with each
             * keystore entry. If the entry being considered was
             * created by a call to {@code setCertificateEntry},
             * or created by a call to {@code setEntry} with a
             * {@code TrustedCertificateEntry},
             * then the given certificate is compared to that entry's certificate.
             * <p> If the entry being considered was
             * created by a call to {@code setKeyEntry},
             * or created by a call to {@code setEntry} with a
             * {@code PrivateKeyEntry},
             * then the given certificate is compared to the first
             * element of that entry's certificate chain.
             * @param cert the certificate to match with.
             * @return the alias name of the first entry with a matching certificate,
             *  or null if no such entry exists in this keystore.
             * @exception KeyStoreException if the keystore has not been initialized
             *  (loaded).
             */
            // @ts-ignore
            getCertificateAlias(cert: java.security.cert.Certificate): java.lang.String
            /**
             * Stores this keystore to the given output stream, and protects its
             * integrity with the given password.
             * @param stream the output stream to which this keystore is written.
             * @param password the password to generate the keystore integrity check
             * @exception KeyStoreException if the keystore has not been initialized
             *  (loaded).
             * @exception IOException if there was an I/O problem with data
             * @exception NoSuchAlgorithmException if the appropriate data integrity
             *  algorithm could not be found
             * @exception CertificateException if any of the certificates included in
             *  the keystore data could not be stored
             */
            // @ts-ignore
            store(stream: java.io.OutputStream, password: string[]): void
            /**
             * Stores this keystore using the given {@code LoadStoreParameter}.
             * @param param the {#code LoadStoreParameter}
             *           that specifies how to store the keystore,
             *           which may be {@code null}
             * @exception IllegalArgumentException if the given
             *           {#code LoadStoreParameter}
             *           input is not recognized
             * @exception KeyStoreException if the keystore has not been initialized
             *           (loaded)
             * @exception IOException if there was an I/O problem with data
             * @exception NoSuchAlgorithmException if the appropriate data integrity
             *           algorithm could not be found
             * @exception CertificateException if any of the certificates included in
             *           the keystore data could not be stored
             * @since 1.5
             */
            // @ts-ignore
            store(param: java.security.KeyStore.LoadStoreParameter): void
            /**
             * Loads this KeyStore from the given input stream.
             * <p>A password may be given to unlock the keystore
             * (e.g. the keystore resides on a hardware token device),
             * or to check the integrity of the keystore data.
             * If a password is not given for integrity checking,
             * then integrity checking is not performed.
             * <p>In order to create an empty keystore, or if the keystore cannot
             * be initialized from a stream, pass {@code null}
             * as the {@code stream} argument.
             * <p> Note that if this keystore has already been loaded, it is
             * reinitialized and loaded again from the given input stream.
             * @param stream the input stream from which the keystore is loaded,
             *  or {#code null}
             * @param password the password used to check the integrity of
             *  the keystore, the password used to unlock the keystore,
             *  or {#code null}
             * @exception IOException if there is an I/O or format problem with the
             *  keystore data, if a password is required but not given,
             *  or if the given password was incorrect. If the error is due to a
             *  wrong password, the {#link Throwable#getCause cause} of the
             *  {@code IOException} should be an
             *  {@code UnrecoverableKeyException}
             * @exception NoSuchAlgorithmException if the algorithm used to check
             *  the integrity of the keystore cannot be found
             * @exception CertificateException if any of the certificates in the
             *  keystore could not be loaded
             */
            // @ts-ignore
            load(stream: java.io.InputStream, password: string[]): void
            /**
             * Loads this keystore using the given {@code LoadStoreParameter}.
             * <p> Note that if this KeyStore has already been loaded, it is
             * reinitialized and loaded again from the given parameter.
             * @param param the {#code LoadStoreParameter}
             *           that specifies how to load the keystore,
             *           which may be {@code null}
             * @exception IllegalArgumentException if the given
             *           {#code LoadStoreParameter}
             *           input is not recognized
             * @exception IOException if there is an I/O or format problem with the
             *           keystore data. If the error is due to an incorrect
             *          {#code ProtectionParameter} (e.g. wrong password)
             *          the {@link Throwable#getCause cause} of the
             *          {@code IOException} should be an
             *          {@code UnrecoverableKeyException}
             * @exception NoSuchAlgorithmException if the algorithm used to check
             *           the integrity of the keystore cannot be found
             * @exception CertificateException if any of the certificates in the
             *           keystore could not be loaded
             * @since 1.5
             */
            // @ts-ignore
            load(param: java.security.KeyStore.LoadStoreParameter): void
            /**
             * Gets a keystore {@code Entry} for the specified alias
             * with the specified protection parameter.
             * @param alias get the keystore {#code Entry} for this alias
             * @param protParam the {#code ProtectionParameter}
             *           used to protect the {@code Entry},
             *           which may be {@code null}
             * @return the keystore {#code Entry} for the specified alias,
             *           or {@code null} if there is no such entry
             * @exception NullPointerException if
             *           {#code alias} is {@code null}
             * @exception NoSuchAlgorithmException if the algorithm for recovering the
             *           entry cannot be found
             * @exception UnrecoverableEntryException if the specified
             *           {#code protParam} were insufficient or invalid
             * @exception UnrecoverableKeyException if the entry is a
             *           {#code PrivateKeyEntry} or {@code SecretKeyEntry}
             *           and the specified {@code protParam} does not contain
             *           the information needed to recover the key (e.g. wrong password)
             * @exception KeyStoreException if the keystore has not been initialized
             *           (loaded).
             * @see #setEntry(String, KeyStore.Entry, KeyStore.ProtectionParameter)
             * @since 1.5
             */
            // @ts-ignore
            getEntry(alias: string, protParam: java.security.KeyStore.ProtectionParameter): java.security.KeyStore.Entry
            /**
             * Saves a keystore {@code Entry} under the specified alias.
             * The protection parameter is used to protect the
             * {@code Entry}.
             * <p> If an entry already exists for the specified alias,
             * it is overridden.
             * @param alias save the keystore {#code Entry} under this alias
             * @param entry the {#code Entry} to save
             * @param protParam the {#code ProtectionParameter}
             *           used to protect the {@code Entry},
             *           which may be {@code null}
             * @exception NullPointerException if
             *           {#code alias} or {@code entry}
             *           is {@code null}
             * @exception KeyStoreException if the keystore has not been initialized
             *           (loaded), or if this operation fails for some other reason
             * @see #getEntry(String, KeyStore.ProtectionParameter)
             * @since 1.5
             */
            // @ts-ignore
            setEntry(alias: string, entry: java.security.KeyStore.Entry, protParam: java.security.KeyStore.ProtectionParameter): void
            /**
             * Determines if the keystore {@code Entry} for the specified
             * {@code alias} is an instance or subclass of the specified
             * {@code entryClass}.
             * @param alias the alias name
             * @param entryClass the entry class
             * @return true if the keystore {#code Entry} for the specified
             *           {@code alias} is an instance or subclass of the
             *           specified {@code entryClass}, false otherwise
             * @exception NullPointerException if
             *           {#code alias} or {@code entryClass}
             *           is {@code null}
             * @exception KeyStoreException if the keystore has not been
             *           initialized (loaded)
             * @since 1.5
             */
            // @ts-ignore
            entryInstanceOf(alias: string, entryClass: java.lang.Class<java.security.KeyStore.Entry>): boolean
        }
    }
}

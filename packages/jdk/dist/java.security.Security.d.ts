declare namespace java {
    namespace security {
        /**
         * <p>This class centralizes all security properties and common security
         * methods. One of its primary uses is to manage providers.
         * <p>The default values of security properties are read from an
         * implementation-specific location, which is typically the properties file
         * {@code lib/security/java.security} in the Java installation directory.
         * @author Benjamin Renaud
         */
        // @ts-ignore
        class Security extends java.lang.Object {
            /**
             * Gets a specified property for an algorithm. The algorithm name
             * should be a standard name. See the <a href=
             * "{@docRoot}/../technotes/guides/security/StandardNames.html">
             * Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             * for information about standard algorithm names.
             * One possible use is by specialized algorithm parsers, which may map
             * classes to algorithms which they understand (much like Key parsers
             * do).
             * @param algName the algorithm name.
             * @param propName the name of the property to get.
             * @return the value of the specified property.
             * @deprecated This method used to return the value of a proprietary
             *  property in the master file of the "SUN" Cryptographic Service
             *  Provider in order to determine how to parse algorithm-specific
             *  parameters. Use the new provider-based and algorithm-independent
             *  {#code AlgorithmParameters} and {@code KeyFactory} engine
             *  classes (introduced in the J2SE version 1.2 platform) instead.
             */
            // @ts-ignore
            public static getAlgorithmProperty(algName: java.lang.String | string, propName: java.lang.String | string): string
            /**
             * Adds a new provider, at a specified position. The position is
             * the preference order in which providers are searched for
             * requested algorithms.  The position is 1-based, that is,
             * 1 is most preferred, followed by 2, and so on.
             * <p>If the given provider is installed at the requested position,
             * the provider that used to be at that position, and all providers
             * with a position greater than {@code position}, are shifted up
             * one position (towards the end of the list of installed providers).
             * <p>A provider cannot be added if it is already installed.
             * <p>If there is a security manager, the
             * {@link java.lang.SecurityManager#checkSecurityAccess} method is called
             * with the {@code "insertProvider"} permission target name to see if
             * it's ok to add a new provider. If this permission check is denied,
             * {@code checkSecurityAccess} is called again with the
             * {@code "insertProvider."+provider.getName()} permission target name. If
             * both checks are denied, a {@code SecurityException} is thrown.
             * @param provider the provider to be added.
             * @param position the preference position that the caller would
             *  like for this provider.
             * @return the actual preference position in which the provider was
             *  added, or -1 if the provider was not added because it is
             *  already installed.
             * @throws NullPointerException if provider is null
             * @throws SecurityException
             *           if a security manager exists and its {#link
             *           java.lang.SecurityManager#checkSecurityAccess} method
             *           denies access to add a new provider
             * @see #getProvider
             * @see #removeProvider
             * @see java.security.SecurityPermission
             */
            // @ts-ignore
            public static insertProviderAt(provider: java.security.Provider, position: number /*int*/): number /*int*/
            /**
             * Adds a provider to the next position available.
             * <p>If there is a security manager, the
             * {@link java.lang.SecurityManager#checkSecurityAccess} method is called
             * with the {@code "insertProvider"} permission target name to see if
             * it's ok to add a new provider. If this permission check is denied,
             * {@code checkSecurityAccess} is called again with the
             * {@code "insertProvider."+provider.getName()} permission target name. If
             * both checks are denied, a {@code SecurityException} is thrown.
             * @param provider the provider to be added.
             * @return the preference position in which the provider was
             *  added, or -1 if the provider was not added because it is
             *  already installed.
             * @throws NullPointerException if provider is null
             * @throws SecurityException
             *           if a security manager exists and its {#link
             *           java.lang.SecurityManager#checkSecurityAccess} method
             *           denies access to add a new provider
             * @see #getProvider
             * @see #removeProvider
             * @see java.security.SecurityPermission
             */
            // @ts-ignore
            public static addProvider(provider: java.security.Provider): number /*int*/
            /**
             * Removes the provider with the specified name.
             * <p>When the specified provider is removed, all providers located
             * at a position greater than where the specified provider was are shifted
             * down one position (towards the head of the list of installed
             * providers).
             * <p>This method returns silently if the provider is not installed or
             * if name is null.
             * <p>First, if there is a security manager, its
             * {@code checkSecurityAccess}
             * method is called with the string {@code "removeProvider."+name}
             * to see if it's ok to remove the provider.
             * If the default implementation of {@code checkSecurityAccess}
             * is used (i.e., that method is not overriden), then this will result in
             * a call to the security manager's {@code checkPermission} method
             * with a {@code SecurityPermission("removeProvider."+name)}
             * permission.
             * @param name the name of the provider to remove.
             * @throws SecurityException
             *           if a security manager exists and its {#link
             *           java.lang.SecurityManager#checkSecurityAccess} method
             *           denies
             *           access to remove the provider
             * @see #getProvider
             * @see #addProvider
             */
            // @ts-ignore
            public static removeProvider(name: java.lang.String | string): void
            /**
             * Returns an array containing all the installed providers. The order of
             * the providers in the array is their preference order.
             * @return an array of all the installed providers.
             */
            // @ts-ignore
            public static getProviders(): java.security.Provider[]
            /**
             * Returns the provider installed with the specified name, if
             * any. Returns null if no provider with the specified name is
             * installed or if name is null.
             * @param name the name of the provider to get.
             * @return the provider of the specified name.
             * @see #removeProvider
             * @see #addProvider
             */
            // @ts-ignore
            public static getProvider(name: java.lang.String | string): java.security.Provider
            /**
             * Returns an array containing all installed providers that satisfy the
             * specified selection criterion, or null if no such providers have been
             * installed. The returned providers are ordered
             * according to their
             * {@linkplain #insertProviderAt(java.security.Provider, int) preference order}.
             * <p> A cryptographic service is always associated with a particular
             * algorithm or type. For example, a digital signature service is
             * always associated with a particular algorithm (e.g., DSA),
             * and a CertificateFactory service is always associated with
             * a particular certificate type (e.g., X.509).
             * <p>The selection criterion must be specified in one of the following two
             * formats:
             * <ul>
             * <li> <i>{@literal <crypto_service>.<algorithm_or_type>}</i>
             * <p> The cryptographic service name must not contain any dots.
             * <p> A
             * provider satisfies the specified selection criterion iff the provider
             * implements the
             * specified algorithm or type for the specified cryptographic service.
             * <p> For example, "CertificateFactory.X.509"
             * would be satisfied by any provider that supplied
             * a CertificateFactory implementation for X.509 certificates.
             * <li> <i>{@literal <crypto_service>.<algorithm_or_type>
             * <attribute_name>:<attribute_value>}</i>
             * <p> The cryptographic service name must not contain any dots. There
             * must be one or more space characters between the
             * <i>{@literal <algorithm_or_type>}</i> and the
             * <i>{@literal <attribute_name>}</i>.
             * <p> A provider satisfies this selection criterion iff the
             * provider implements the specified algorithm or type for the specified
             * cryptographic service and its implementation meets the
             * constraint expressed by the specified attribute name/value pair.
             * <p> For example, "Signature.SHA1withDSA KeySize:1024" would be
             * satisfied by any provider that implemented
             * the SHA1withDSA signature algorithm with a keysize of 1024 (or larger).
             * </ul>
             * <p> See the <a href=
             * "{@docRoot}/../technotes/guides/security/StandardNames.html">
             * Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             * for information about standard cryptographic service names, standard
             * algorithm names and standard attribute names.
             * @param filter the criterion for selecting
             *  providers. The filter is case-insensitive.
             * @return all the installed providers that satisfy the selection
             *  criterion, or null if no such providers have been installed.
             * @throws InvalidParameterException
             *          if the filter is not in the required format
             * @throws NullPointerException if filter is null
             * @see #getProviders(java.util.Map)
             * @since 1.3
             */
            // @ts-ignore
            public static getProviders(filter: java.lang.String | string): java.security.Provider[]
            /**
             * Returns an array containing all installed providers that satisfy the
             * specified* selection criteria, or null if no such providers have been
             * installed. The returned providers are ordered
             * according to their
             * {@linkplain #insertProviderAt(java.security.Provider, int)
             * preference order}.
             * <p>The selection criteria are represented by a map.
             * Each map entry represents a selection criterion.
             * A provider is selected iff it satisfies all selection
             * criteria. The key for any entry in such a map must be in one of the
             * following two formats:
             * <ul>
             * <li> <i>{@literal <crypto_service>.<algorithm_or_type>}</i>
             * <p> The cryptographic service name must not contain any dots.
             * <p> The value associated with the key must be an empty string.
             * <p> A provider
             * satisfies this selection criterion iff the provider implements the
             * specified algorithm or type for the specified cryptographic service.
             * <li>  <i>{@literal <crypto_service>}.
             * {@literal <algorithm_or_type> <attribute_name>}</i>
             * <p> The cryptographic service name must not contain any dots. There
             * must be one or more space characters between the
             * <i>{@literal <algorithm_or_type>}</i>
             * and the <i>{@literal <attribute_name>}</i>.
             * <p> The value associated with the key must be a non-empty string.
             * A provider satisfies this selection criterion iff the
             * provider implements the specified algorithm or type for the specified
             * cryptographic service and its implementation meets the
             * constraint expressed by the specified attribute name/value pair.
             * </ul>
             * <p> See the <a href=
             * "../../../technotes/guides/security/StandardNames.html">
             * Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             * for information about standard cryptographic service names, standard
             * algorithm names and standard attribute names.
             * @param filter the criteria for selecting
             *  providers. The filter is case-insensitive.
             * @return all the installed providers that satisfy the selection
             *  criteria, or null if no such providers have been installed.
             * @throws InvalidParameterException
             *          if the filter is not in the required format
             * @throws NullPointerException if filter is null
             * @see #getProviders(java.lang.String)
             * @since 1.3
             */
            // @ts-ignore
            public static getProviders(filter: java.util.Map<java.lang.String | string, java.lang.String | string>): java.security.Provider[]
            /**
             * Gets a security property value.
             * <p>First, if there is a security manager, its
             * {@code checkPermission}  method is called with a
             * {@code java.security.SecurityPermission("getProperty."+key)}
             * permission to see if it's ok to retrieve the specified
             * security property value..
             * @param key the key of the property being retrieved.
             * @return the value of the security property corresponding to key.
             * @throws SecurityException
             *           if a security manager exists and its {#link
             *           java.lang.SecurityManager#checkPermission} method
             *           denies
             *           access to retrieve the specified security property value
             * @throws NullPointerException is key is null
             * @see #setProperty
             * @see java.security.SecurityPermission
             */
            // @ts-ignore
            public static getProperty(key: java.lang.String | string): string
            /**
             * Sets a security property value.
             * <p>First, if there is a security manager, its
             * {@code checkPermission} method is called with a
             * {@code java.security.SecurityPermission("setProperty."+key)}
             * permission to see if it's ok to set the specified
             * security property value.
             * @param key the name of the property to be set.
             * @param datum the value of the property to be set.
             * @throws SecurityException
             *           if a security manager exists and its {#link
             *           java.lang.SecurityManager#checkPermission} method
             *           denies access to set the specified security property value
             * @throws NullPointerException if key or datum is null
             * @see #getProperty
             * @see java.security.SecurityPermission
             */
            // @ts-ignore
            public static setProperty(key: java.lang.String | string, datum: java.lang.String | string): void
            /**
             * Returns a Set of Strings containing the names of all available
             * algorithms or types for the specified Java cryptographic service
             * (e.g., Signature, MessageDigest, Cipher, Mac, KeyStore). Returns
             * an empty Set if there is no provider that supports the
             * specified service or if serviceName is null. For a complete list
             * of Java cryptographic services, please see the
             * <a href="../../../technotes/guides/security/crypto/CryptoSpec.html">Java
             * Cryptography Architecture API Specification &amp; Reference</a>.
             * Note: the returned set is immutable.
             * @param serviceName the name of the Java cryptographic
             *  service (e.g., Signature, MessageDigest, Cipher, Mac, KeyStore).
             *  Note: this parameter is case-insensitive.
             * @return a Set of Strings containing the names of all available
             *  algorithms or types for the specified Java cryptographic service
             *  or an empty set if no provider supports the specified service.
             * @since 1.4
             */
            // @ts-ignore
            public static getAlgorithms(serviceName: java.lang.String | string): Array<java.lang.String | string>
        }
    }
}

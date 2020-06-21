declare namespace java {
    namespace security {
        namespace Provider {
            /**
             * The description of a security service. It encapsulates the properties
             * of a service and contains a factory method to obtain new implementation
             * instances of this service.
             * <p>Each service has a provider that offers the service, a type,
             * an algorithm name, and the name of the class that implements the
             * service. Optionally, it also includes a list of alternate algorithm
             * names for this service (aliases) and attributes, which are a map of
             * (name, value) String pairs.
             * <p>This class defines the methods {@link #supportsParameter
             * supportsParameter()} and {@link #newInstance newInstance()}
             * which are used by the Java security framework when it searches for
             * suitable services and instantiates them. The valid arguments to those
             * methods depend on the type of service. For the service types defined
             * within Java SE, see the
             * <a href="../../../technotes/guides/security/crypto/CryptoSpec.html">
             * Java Cryptography Architecture API Specification &amp; Reference </a>
             * for the valid values.
             * Note that components outside of Java SE can define additional types of
             * services and their behavior.
             * <p>Instances of this class are immutable.
             * @since 1.5
             */
            // @ts-ignore
            class Service extends java.lang.Object {
                /**
                 * Construct a new service.
                 * @param provider the provider that offers this service
                 * @param type the type of this service
                 * @param algorithm the algorithm name
                 * @param className the name of the class implementing this service
                 * @param aliases List of aliases or null if algorithm has no aliases
                 * @param attributes Map of attributes or null if this implementation
                 *                    has no attributes
                 * @throws NullPointerException if provider, type, algorithm, or
                 *  className is null
                 */
                // @ts-ignore
                constructor(provider: java.security.Provider, type: java.lang.String | string, algorithm: java.lang.String | string, className: java.lang.String | string, aliases: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, attributes: java.util.Map<java.lang.String | string, java.lang.String | string>)
                /**
                 * Get the type of this service. For example, {@code MessageDigest}.
                 * @return the type of this service
                 */
                // @ts-ignore
                public getType(): string
                /**
                 * Return the name of the algorithm of this service. For example,
                 * {@code SHA-1}.
                 * @return the algorithm of this service
                 */
                // @ts-ignore
                public getAlgorithm(): string
                /**
                 * Return the Provider of this service.
                 * @return the Provider of this service
                 */
                // @ts-ignore
                public getProvider(): java.security.Provider
                /**
                 * Return the name of the class implementing this service.
                 * @return the name of the class implementing this service
                 */
                // @ts-ignore
                public getClassName(): string
                /**
                 * Return the value of the specified attribute or null if this
                 * attribute is not set for this Service.
                 * @param name the name of the requested attribute
                 * @return the value of the specified attribute or null if the
                 *          attribute is not present
                 * @throws NullPointerException if name is null
                 */
                // @ts-ignore
                public getAttribute(name: java.lang.String | string): string
                /**
                 * Return a new instance of the implementation described by this
                 * service. The security provider framework uses this method to
                 * construct implementations. Applications will typically not need
                 * to call it.
                 * <p>The default implementation uses reflection to invoke the
                 * standard constructor for this type of service.
                 * Security providers can override this method to implement
                 * instantiation in a different way.
                 * For details and the values of constructorParameter that are
                 * valid for the various types of services see the
                 * <a href="../../../technotes/guides/security/crypto/CryptoSpec.html">
                 * Java Cryptography Architecture API Specification &amp;
                 * Reference</a>.
                 * @param constructorParameter the value to pass to the constructor,
                 *  or null if this type of service does not use a constructorParameter.
                 * @return a new implementation of this service
                 * @throws InvalidParameterException if the value of
                 *  constructorParameter is invalid for this type of service.
                 * @throws NoSuchAlgorithmException if instantiation failed for
                 *  any other reason.
                 */
                // @ts-ignore
                public newInstance(constructorParameter: java.lang.Object | any): any
                /**
                 * Test whether this Service can use the specified parameter.
                 * Returns false if this service cannot use the parameter. Returns
                 * true if this service can use the parameter, if a fast test is
                 * infeasible, or if the status is unknown.
                 * <p>The security provider framework uses this method with
                 * some types of services to quickly exclude non-matching
                 * implementations for consideration.
                 * Applications will typically not need to call it.
                 * <p>For details and the values of parameter that are valid for the
                 * various types of services see the top of this class and the
                 * <a href="../../../technotes/guides/security/crypto/CryptoSpec.html">
                 * Java Cryptography Architecture API Specification &amp;
                 * Reference</a>.
                 * Security providers can override it to implement their own test.
                 * @param parameter the parameter to test
                 * @return false if this this service cannot use the specified
                 *  parameter; true if it can possibly use the parameter
                 * @throws InvalidParameterException if the value of parameter is
                 *  invalid for this type of service or if this method cannot be
                 *  used with this type of service
                 */
                // @ts-ignore
                public supportsParameter(parameter: java.lang.Object | any): boolean
                /**
                 * Return a String representation of this service.
                 * @return a String representation of this service.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}

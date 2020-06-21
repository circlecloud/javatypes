declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                // @ts-ignore
                abstract class SessionIdGeneratorBase extends org.apache.catalina.util.LifecycleBase implements org.apache.catalina.SessionIdGenerator {
                    // @ts-ignore
                    constructor()
                    /**
                     * Get the class name of the {@link SecureRandom} implementation used to
                     * generate session IDs.
                     * @return The fully qualified class name. {#code null} indicates that the
                     *          JRE provided {@link SecureRandom} implementation will be used
                     */
                    // @ts-ignore
                    public getSecureRandomClass(): string
                    /**
                     * Specify a non-default {@link SecureRandom} implementation to use. The
                     * implementation must be self-seeding and have a zero-argument constructor.
                     * If not specified, an instance of {@link SecureRandom} will be generated.
                     * @param secureRandomClass The fully-qualified class name
                     */
                    // @ts-ignore
                    public setSecureRandomClass(secureRandomClass: java.lang.String | string): void
                    /**
                     * Get the name of the algorithm used to create the {@link SecureRandom}
                     * instances which generate new session IDs.
                     * @return The name of the algorithm. {#code null} or the empty string means
                     *          that platform default will be used
                     */
                    // @ts-ignore
                    public getSecureRandomAlgorithm(): string
                    /**
                     * Specify a non-default algorithm to use to create instances of
                     * {@link SecureRandom} which are used to generate session IDs. If no
                     * algorithm is specified, SHA1PRNG is used. To use the platform default
                     * (which may be SHA1PRNG), specify {@code null} or the empty string. If an
                     * invalid algorithm and/or provider is specified the {@link SecureRandom}
                     * instances will be created using the defaults for this
                     * {@link SessionIdGenerator} implementation. If that fails, the
                     * {@link SecureRandom} instances will be created using platform defaults.
                     * @param secureRandomAlgorithm The name of the algorithm
                     */
                    // @ts-ignore
                    public setSecureRandomAlgorithm(secureRandomAlgorithm: java.lang.String | string): void
                    /**
                     * Get the name of the provider used to create the {@link SecureRandom}
                     * instances which generate new session IDs.
                     * @return The name of the provider. {#code null} or the empty string means
                     *          that platform default will be used
                     */
                    // @ts-ignore
                    public getSecureRandomProvider(): string
                    /**
                     * Specify a non-default provider to use to create instances of
                     * {@link SecureRandom} which are used to generate session IDs.  If no
                     * provider is specified, the platform default is used. To use the platform
                     * default specify {@code null} or the empty string. If an invalid algorithm
                     * and/or provider is specified the {@link SecureRandom} instances will be
                     * created using the defaults for this {@link SessionIdGenerator}
                     * implementation. If that fails, the {@link SecureRandom} instances will be
                     * created using platform defaults.
                     * @param secureRandomProvider  The name of the provider
                     */
                    // @ts-ignore
                    public setSecureRandomProvider(secureRandomProvider: java.lang.String | string): void
                    /**
                     * Return the node identifier associated with this node which will be
                     * included in the generated session ID.
                     */
                    // @ts-ignore
                    public getJvmRoute(): string
                    /**
                     * Specify the node identifier associated with this node which will be
                     * included in the generated session ID.
                     * @param jvmRoute  The node identifier
                     */
                    // @ts-ignore
                    public setJvmRoute(jvmRoute: java.lang.String | string): void
                    /**
                     * Return the number of bytes for a session ID
                     */
                    // @ts-ignore
                    public getSessionIdLength(): number /*int*/
                    /**
                     * Specify the number of bytes for a session ID
                     * @param sessionIdLength   Number of bytes
                     */
                    // @ts-ignore
                    public setSessionIdLength(sessionIdLength: number /*int*/): void
                    /**
                     * Generate and return a new session identifier.
                     */
                    // @ts-ignore
                    public generateSessionId(): string
                    // @ts-ignore
                    getRandomBytes(bytes: number /*byte*/[]): void
                    // @ts-ignore
                    initInternal(): void
                    // @ts-ignore
                    startInternal(): void
                    // @ts-ignore
                    stopInternal(): void
                    // @ts-ignore
                    destroyInternal(): void
                }
            }
        }
    }
}

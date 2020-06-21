declare namespace javax {
    namespace smartcardio {
        /**
         * A factory for CardTerminal objects.
         * It allows an application to
         * <ul>
         * <li>obtain a TerminalFactory by calling
         * one of the static factory methods in this class
         * ({@linkplain #getDefault} or {@linkplain #getInstance getInstance()}).
         * <li>use this TerminalFactory object to access the CardTerminals by
         * calling the {@linkplain #terminals} method.
         * </ul>
         * <p>Each TerminalFactory has a <code>type</code> indicating how it
         * was implemented. It must be specified when the implementation is obtained
         * using a {@linkplain #getInstance getInstance()} method and can be retrieved
         * via the {@linkplain #getType} method.
         * <P>The following standard type names have been defined:
         * <dl>
         * <dt><code>PC/SC</code>
         * <dd>an implementation that calls into the PC/SC Smart Card stack
         * of the host platform.
         * Implementations do not require parameters and accept "null" as argument
         * in the getInstance() calls.
         * <dt><code>None</code>
         * <dd>an implementation that does not supply any CardTerminals. On platforms
         * that do not support other implementations,
         * {@linkplain #getDefaultType} returns <code>None</code> and
         * {@linkplain #getDefault} returns an instance of a <code>None</code>
         * TerminalFactory. Factories of this type cannot be obtained by calling the
         * <code>getInstance()</code> methods.
         * </dl>
         * Additional standard types may be defined in the future.
         * <p><strong>Note:</strong>
         * Provider implementations that accept initialization parameters via the
         * <code>getInstance()</code> methods are strongly
         * encouraged to use a {@linkplain java.util.Properties} object as the
         * representation for String name-value pair based parameters whenever
         * possible. This allows applications to more easily interoperate with
         * multiple providers than if each provider used different provider
         * specific class as parameters.
         * <P>TerminalFactory utilizes an extensible service provider framework.
         * Service providers that wish to add a new implementation should see the
         * {@linkplain TerminalFactorySpi} class for more information.
         * @see CardTerminals
         * @see Provider
         * @since 1.6
         * @author Andreas Sterbenz
         * @author JSR 268 Expert Group
         */
        // @ts-ignore
        class TerminalFactory extends java.lang.Object {
            /**
             * Get the default TerminalFactory type.
             * <p>It is determined as follows:
             * when this class is initialized, the system property
             * <code>javax.smartcardio.TerminalFactory.DefaultType</code>
             * is examined. If it is set, a TerminalFactory of this type is
             * instantiated by calling the {@linkplain #getInstance
             * getInstance(String,Object)} method passing
             * <code>null</code> as the value for <code>params</code>. If the call
             * succeeds, the type becomes the default type and the factory becomes
             * the {@linkplain #getDefault default} factory.
             * <p>If the system property is not set or the getInstance() call fails
             * for any reason, the system defaults to an implementation specific
             * default type and TerminalFactory.
             * @return the default TerminalFactory type
             */
            // @ts-ignore
            public static getDefaultType(): string
            /**
             * Returns the default TerminalFactory instance. See
             * {@linkplain #getDefaultType} for more information.
             * <p>A default TerminalFactory is always available. However, depending
             * on the implementation, it may not offer any terminals.
             * @return the default TerminalFactory
             */
            // @ts-ignore
            public static getDefault(): javax.smartcardio.TerminalFactory
            /**
             * Returns a TerminalFactory of the specified type that is initialized
             * with the specified parameters.
             * <p> This method traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new TerminalFactory object encapsulating the
             * TerminalFactorySpi implementation from the first
             * Provider that supports the specified type is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@linkplain Security#getProviders() Security.getProviders()} method.
             * <p>The <code>TerminalFactory</code> is initialized with the
             * specified parameters Object. The type of parameters
             * needed may vary between different types of <code>TerminalFactory</code>s.
             * @param type the type of the requested TerminalFactory
             * @param params the parameters to pass to the TerminalFactorySpi
             *    implementation, or null if no parameters are needed
             * @return a TerminalFactory of the specified type
             * @throws NullPointerException if type is null
             * @throws NoSuchAlgorithmException if no Provider supports a
             *    TerminalFactorySpi of the specified type
             */
            // @ts-ignore
            public static getInstance(type: java.lang.String | string, params: java.lang.Object | any): javax.smartcardio.TerminalFactory
            /**
             * Returns a TerminalFactory of the specified type that is initialized
             * with the specified parameters.
             * <p> A new TerminalFactory object encapsulating the
             * TerminalFactorySpi implementation from the specified provider
             * is returned.  The specified provider must be registered
             * in the security provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@linkplain Security#getProviders() Security.getProviders()} method.
             * <p>The <code>TerminalFactory</code> is initialized with the
             * specified parameters Object. The type of parameters
             * needed may vary between different types of <code>TerminalFactory</code>s.
             * @param type the type of the requested TerminalFactory
             * @param params the parameters to pass to the TerminalFactorySpi
             *    implementation, or null if no parameters are needed
             * @param provider the name of the provider
             * @return a TerminalFactory of the specified type
             * @throws NullPointerException if type is null
             * @throws IllegalArgumentException if provider is null or the empty String
             * @throws NoSuchAlgorithmException if a TerminalFactorySpi implementation
             *    of the specified type is not available from the specified provider
             * @throws NoSuchAlgorithmException if no TerminalFactory of the
             *    specified type could be found
             * @throws NoSuchProviderException if the specified provider could not
             *    be found
             */
            // @ts-ignore
            public static getInstance(type: java.lang.String | string, params: java.lang.Object | any, provider: java.lang.String | string): javax.smartcardio.TerminalFactory
            /**
             * Returns a TerminalFactory of the specified type that is initialized
             * with the specified parameters.
             * <p> A new TerminalFactory object encapsulating the
             * TerminalFactorySpi implementation from the specified provider object
             * is returned. Note that the specified provider object does not have to be
             * registered in the provider list.
             * <p>The <code>TerminalFactory</code> is initialized with the
             * specified parameters Object. The type of parameters
             * needed may vary between different types of <code>TerminalFactory</code>s.
             * @param type the type of the requested TerminalFactory
             * @param params the parameters to pass to the TerminalFactorySpi
             *    implementation, or null if no parameters are needed
             * @param provider the provider
             * @return a TerminalFactory of the specified type
             * @throws NullPointerException if type is null
             * @throws IllegalArgumentException if provider is null
             * @throws NoSuchAlgorithmException if a TerminalFactorySpi implementation
             *    of the specified type is not available from the specified Provider
             */
            // @ts-ignore
            public static getInstance(type: java.lang.String | string, params: java.lang.Object | any, provider: java.security.Provider): javax.smartcardio.TerminalFactory
            /**
             * Returns the provider of this TerminalFactory.
             * @return the provider of this TerminalFactory.
             */
            // @ts-ignore
            public getProvider(): java.security.Provider
            /**
             * Returns the type of this TerminalFactory. This is the value that was
             * specified in the getInstance() method that returned this object.
             * @return the type of this TerminalFactory
             */
            // @ts-ignore
            public getType(): string
            /**
             * Returns a new CardTerminals object encapsulating the terminals
             * supported by this factory.
             * See the class comment of the {@linkplain CardTerminals} class
             * regarding how the returned objects can be shared and reused.
             * @return a new CardTerminals object encapsulating the terminals
             *  supported by this factory.
             */
            // @ts-ignore
            public terminals(): javax.smartcardio.CardTerminals
            /**
             * Returns a string representation of this TerminalFactory.
             * @return a string representation of this TerminalFactory.
             */
            // @ts-ignore
            public toString(): string
        }
    }
}

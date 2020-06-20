declare namespace java {
    namespace security {
        /**
         * This class defines login and logout methods for a provider.
         * <p> While callers may invoke {@code login} directly,
         * the provider may also invoke {@code login} on behalf of callers
         * if it determines that a login must be performed
         * prior to certain operations.
         * @since 1.5
         */
        // @ts-ignore
        class AuthProvider extends java.security.Provider {
            /**
             * Constructs a provider with the specified name, version number,
             * and information.
             * @param name the provider name.
             * @param version the provider version number.
             * @param info a description of the provider and its services.
             */
            // @ts-ignore
            constructor(name: string, version: number /*double*/, info: string)
            /**
             * Log in to this provider.
             * <p> The provider relies on a {@code CallbackHandler}
             * to obtain authentication information from the caller
             * (a PIN, for example).  If the caller passes a {@code null}
             * handler to this method, the provider uses the handler set in the
             * {@code setCallbackHandler} method.
             * If no handler was set in that method, the provider queries the
             * <i>auth.login.defaultCallbackHandler</i> security property
             * for the fully qualified class name of a default handler implementation.
             * If the security property is not set,
             * the provider is assumed to have alternative means
             * for obtaining authentication information.
             * @param subject the {#code Subject} which may contain
             *           principals/credentials used for authentication,
             *           or may be populated with additional principals/credentials
             *           after successful authentication has completed.
             *           This parameter may be {@code null}.
             * @param handler the {#code CallbackHandler} used by
             *           this provider to obtain authentication information
             *           from the caller, which may be {@code null}
             * @exception LoginException if the login operation fails
             * @exception SecurityException if the caller does not pass a
             *   security check for
             *   {#code SecurityPermission("authProvider.name")},
             *   where {@code name} is the value returned by
             *   this provider's {@code getName} method
             */
            // @ts-ignore
            abstract login(subject: javax.security.auth.Subject, handler: javax.security.auth.callback.CallbackHandler): void
            /**
             * Log out from this provider.
             * @exception LoginException if the logout operation fails
             * @exception SecurityException if the caller does not pass a
             *   security check for
             *   {#code SecurityPermission("authProvider.name")},
             *   where {@code name} is the value returned by
             *   this provider's {@code getName} method
             */
            // @ts-ignore
            abstract logout(): void
            /**
             * Set a {@code CallbackHandler}.
             * <p> The provider uses this handler if one is not passed to the
             * {@code login} method.  The provider also uses this handler
             * if it invokes {@code login} on behalf of callers.
             * In either case if a handler is not set via this method,
             * the provider queries the
             * <i>auth.login.defaultCallbackHandler</i> security property
             * for the fully qualified class name of a default handler implementation.
             * If the security property is not set,
             * the provider is assumed to have alternative means
             * for obtaining authentication information.
             * @param handler a {#code CallbackHandler} for obtaining
             *           authentication information, which may be {@code null}
             * @exception SecurityException if the caller does not pass a
             *   security check for
             *   {#code SecurityPermission("authProvider.name")},
             *   where {@code name} is the value returned by
             *   this provider's {@code getName} method
             */
            // @ts-ignore
            abstract setCallbackHandler(handler: javax.security.auth.callback.CallbackHandler): void
        }
    }
}

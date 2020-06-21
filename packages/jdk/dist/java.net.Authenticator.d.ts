declare namespace java {
    namespace net {
        /**
         * The class Authenticator represents an object that knows how to obtain
         * authentication for a network connection.  Usually, it will do this
         * by prompting the user for information.
         * <p>
         * Applications use this class by overriding {@link
         * #getPasswordAuthentication()} in a sub-class. This method will
         * typically use the various getXXX() accessor methods to get information
         * about the entity requesting authentication. It must then acquire a
         * username and password either by interacting with the user or through
         * some other non-interactive means. The credentials are then returned
         * as a {@link PasswordAuthentication} return value.
         * <p>
         * An instance of this concrete sub-class is then registered
         * with the system by calling {@link #setDefault(Authenticator)}.
         * When authentication is required, the system will invoke one of the
         * requestPasswordAuthentication() methods which in turn will call the
         * getPasswordAuthentication() method of the registered object.
         * <p>
         * All methods that request authentication have a default implementation
         * that fails.
         * @see java.net.Authenticator#setDefault(java.net.Authenticator)
         * @see java.net.Authenticator#getPasswordAuthentication()
         * @author Bill Foote
         * @since 1.2
         */
        // @ts-ignore
        abstract class Authenticator extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Sets the authenticator that will be used by the networking code
             * when a proxy or an HTTP server asks for authentication.
             * <p>
             * First, if there is a security manager, its {@code checkPermission}
             * method is called with a
             * {@code NetPermission("setDefaultAuthenticator")} permission.
             * This may result in a java.lang.SecurityException.
             * @param a       The authenticator to be set. If a is {#code null} then
             *                   any previously set authenticator is removed.
             * @throws SecurityException
             *         if a security manager exists and its
             *         {#code checkPermission} method doesn't allow
             *         setting the default authenticator.
             * @see SecurityManager#checkPermission
             * @see java.net.NetPermission
             */
            // @ts-ignore
            public static setDefault(a: java.net.Authenticator): void
            /**
             * Ask the authenticator that has been registered with the system
             * for a password.
             * <p>
             * First, if there is a security manager, its {@code checkPermission}
             * method is called with a
             * {@code NetPermission("requestPasswordAuthentication")} permission.
             * This may result in a java.lang.SecurityException.
             * @param addr The InetAddress of the site requesting authorization,
             *              or null if not known.
             * @param port the port for the requested connection
             * @param protocol The protocol that's requesting the connection
             *           ({#link java.net.Authenticator#getRequestingProtocol()})
             * @param prompt A prompt string for the user
             * @param scheme The authentication scheme
             * @return The username/password, or null if one can't be gotten.
             * @throws SecurityException
             *         if a security manager exists and its
             *         {#code checkPermission} method doesn't allow
             *         the password authentication request.
             * @see SecurityManager#checkPermission
             * @see java.net.NetPermission
             */
            // @ts-ignore
            public static requestPasswordAuthentication(addr: java.net.InetAddress, port: number /*int*/, protocol: java.lang.String | string, prompt: java.lang.String | string, scheme: java.lang.String | string): java.net.PasswordAuthentication
            /**
             * Ask the authenticator that has been registered with the system
             * for a password. This is the preferred method for requesting a password
             * because the hostname can be provided in cases where the InetAddress
             * is not available.
             * <p>
             * First, if there is a security manager, its {@code checkPermission}
             * method is called with a
             * {@code NetPermission("requestPasswordAuthentication")} permission.
             * This may result in a java.lang.SecurityException.
             * @param host The hostname of the site requesting authentication.
             * @param addr The InetAddress of the site requesting authentication,
             *              or null if not known.
             * @param port the port for the requested connection.
             * @param protocol The protocol that's requesting the connection
             *           ({#link java.net.Authenticator#getRequestingProtocol()})
             * @param prompt A prompt string for the user which identifies the authentication realm.
             * @param scheme The authentication scheme
             * @return The username/password, or null if one can't be gotten.
             * @throws SecurityException
             *         if a security manager exists and its
             *         {#code checkPermission} method doesn't allow
             *         the password authentication request.
             * @see SecurityManager#checkPermission
             * @see java.net.NetPermission
             * @since 1.4
             */
            // @ts-ignore
            public static requestPasswordAuthentication(host: java.lang.String | string, addr: java.net.InetAddress, port: number /*int*/, protocol: java.lang.String | string, prompt: java.lang.String | string, scheme: java.lang.String | string): java.net.PasswordAuthentication
            /**
             * Ask the authenticator that has been registered with the system
             * for a password.
             * <p>
             * First, if there is a security manager, its {@code checkPermission}
             * method is called with a
             * {@code NetPermission("requestPasswordAuthentication")} permission.
             * This may result in a java.lang.SecurityException.
             * @param host The hostname of the site requesting authentication.
             * @param addr The InetAddress of the site requesting authorization,
             *              or null if not known.
             * @param port the port for the requested connection
             * @param protocol The protocol that's requesting the connection
             *           ({#link java.net.Authenticator#getRequestingProtocol()})
             * @param prompt A prompt string for the user
             * @param scheme The authentication scheme
             * @param url The requesting URL that caused the authentication
             * @param reqType The type (server or proxy) of the entity requesting
             *               authentication.
             * @return The username/password, or null if one can't be gotten.
             * @throws SecurityException
             *         if a security manager exists and its
             *         {#code checkPermission} method doesn't allow
             *         the password authentication request.
             * @see SecurityManager#checkPermission
             * @see java.net.NetPermission
             * @since 1.5
             */
            // @ts-ignore
            public static requestPasswordAuthentication(host: java.lang.String | string, addr: java.net.InetAddress, port: number /*int*/, protocol: java.lang.String | string, prompt: java.lang.String | string, scheme: java.lang.String | string, url: java.net.URL, reqType: java.net.Authenticator.RequestorType): java.net.PasswordAuthentication
            /**
             * Gets the {@code hostname} of the
             * site or proxy requesting authentication, or {@code null}
             * if not available.
             * @return the hostname of the connection requiring authentication, or null
             *           if it's not available.
             * @since 1.4
             */
            // @ts-ignore
            getRequestingHost(): string
            /**
             * Gets the {@code InetAddress} of the
             * site requesting authorization, or {@code null}
             * if not available.
             * @return the InetAddress of the site requesting authorization, or null
             *           if it's not available.
             */
            // @ts-ignore
            getRequestingSite(): java.net.InetAddress
            /**
             * Gets the port number for the requested connection.
             * @return an {#code int} indicating the
             *  port for the requested connection.
             */
            // @ts-ignore
            getRequestingPort(): number /*int*/
            /**
             * Give the protocol that's requesting the connection.  Often this
             * will be based on a URL, but in a future JDK it could be, for
             * example, "SOCKS" for a password-protected SOCKS5 firewall.
             * @return the protocol, optionally followed by "/version", where
             *           version is a version number.
             * @see java.net.URL#getProtocol()
             */
            // @ts-ignore
            getRequestingProtocol(): string
            /**
             * Gets the prompt string given by the requestor.
             * @return the prompt string given by the requestor (realm for
             *           http requests)
             */
            // @ts-ignore
            getRequestingPrompt(): string
            /**
             * Gets the scheme of the requestor (the HTTP scheme
             * for an HTTP firewall, for example).
             * @return the scheme of the requestor
             */
            // @ts-ignore
            getRequestingScheme(): string
            /**
             * Called when password authorization is needed.  Subclasses should
             * override the default implementation, which returns null.
             * @return The PasswordAuthentication collected from the
             *           user, or null if none is provided.
             */
            // @ts-ignore
            getPasswordAuthentication(): java.net.PasswordAuthentication
            /**
             * Returns the URL that resulted in this
             * request for authentication.
             * @since 1.5
             * @return the requesting URL
             */
            // @ts-ignore
            getRequestingURL(): java.net.URL
            /**
             * Returns whether the requestor is a Proxy or a Server.
             * @since 1.5
             * @return the authentication type of the requestor
             */
            // @ts-ignore
            getRequestorType(): java.net.Authenticator.RequestorType
        }
    }
}

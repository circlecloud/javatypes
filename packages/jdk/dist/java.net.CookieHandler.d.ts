declare namespace java {
    namespace net {
        /**
         * A CookieHandler object provides a callback mechanism to hook up a
         * HTTP state management policy implementation into the HTTP protocol
         * handler. The HTTP state management mechanism specifies a way to
         * create a stateful session with HTTP requests and responses.
         * <p>A system-wide CookieHandler that to used by the HTTP protocol
         * handler can be registered by doing a
         * CookieHandler.setDefault(CookieHandler). The currently registered
         * CookieHandler can be retrieved by calling
         * CookieHandler.getDefault().
         * For more information on HTTP state management, see <a
         * href="http://www.ietf.org/rfc/rfc2965.txt"><i>RFC&nbsp;2965: HTTP
         * State Management Mechanism</i></a>
         * @author Yingxian Wang
         * @since 1.5
         */
        // @ts-ignore
        abstract class CookieHandler extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Gets the system-wide cookie handler.
             * @return the system-wide cookie handler; A null return means
             *         there is no system-wide cookie handler currently set.
             * @throws SecurityException
             *        If a security manager has been installed and it denies
             *  {#link NetPermission}{@code ("getCookieHandler")}
             * @see #setDefault(CookieHandler)
             */
            // @ts-ignore
            public static getDefault(): java.net.CookieHandler
            /**
             * Sets (or unsets) the system-wide cookie handler.
             * Note: non-standard http protocol handlers may ignore this setting.
             * @param cHandler The HTTP cookie handler, or
             *        {#code null} to unset.
             * @throws SecurityException
             *        If a security manager has been installed and it denies
             *  {#link NetPermission}{@code ("setCookieHandler")}
             * @see #getDefault()
             */
            // @ts-ignore
            public static setDefault(cHandler: java.net.CookieHandler): void
            /**
             * Gets all the applicable cookies from a cookie cache for the
             * specified uri in the request header.
             * <P>The {@code URI} passed as an argument specifies the intended use for
             * the cookies. In particular the scheme should reflect whether the cookies
             * will be sent over http, https or used in another context like javascript.
             * The host part should reflect either the destination of the cookies or
             * their origin in the case of javascript.</P>
             * <P>It is up to the implementation to take into account the {@code URI} and
             * the cookies attributes and security settings to determine which ones
             * should be returned.</P>
             * <P>HTTP protocol implementers should make sure that this method is
             * called after all request headers related to choosing cookies
             * are added, and before the request is sent.</P>
             * @param uri a {#code URI} representing the intended use for the
             *             cookies
             * @param requestHeaders - a Map from request header
             *             field names to lists of field values representing
             *             the current request headers
             * @return an immutable map from state management headers, with
             *             field names "Cookie" or "Cookie2" to a list of
             *             cookies containing state information
             * @throws IOException if an I/O error occurs
             * @throws IllegalArgumentException if either argument is null
             * @see #put(URI, Map)
             */
            // @ts-ignore
            public abstract get(uri: java.net.URI, requestHeaders: java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>): java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
            /**
             * Sets all the applicable cookies, examples are response header
             * fields that are named Set-Cookie2, present in the response
             * headers into a cookie cache.
             * @param uri a {#code URI} where the cookies come from
             * @param responseHeaders an immutable map from field names to
             *             lists of field values representing the response
             *             header fields returned
             * @throws IOException if an I/O error occurs
             * @throws IllegalArgumentException if either argument is null
             * @see #get(URI, Map)
             */
            // @ts-ignore
            public abstract put(uri: java.net.URI, responseHeaders: java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>): void
        }
    }
}

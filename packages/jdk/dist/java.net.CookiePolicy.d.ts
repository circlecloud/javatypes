declare namespace java {
    namespace net {
        /**
         * CookiePolicy implementations decide which cookies should be accepted
         * and which should be rejected. Three pre-defined policy implementations
         * are provided, namely ACCEPT_ALL, ACCEPT_NONE and ACCEPT_ORIGINAL_SERVER.
         * <p>See RFC 2965 sec. 3.3 and 7 for more detail.
         * @author Edward Wang
         * @since 1.6
         */
        // @ts-ignore
        interface CookiePolicy {
            /**
             * One pre-defined policy which accepts all cookies.
             */
            // @ts-ignore
            readonly ACCEPT_ALL: java.net.CookiePolicy
            /**
             * One pre-defined policy which accepts no cookies.
             */
            // @ts-ignore
            readonly ACCEPT_NONE: java.net.CookiePolicy
            /**
             * One pre-defined policy which only accepts cookies from original server.
             */
            // @ts-ignore
            readonly ACCEPT_ORIGINAL_SERVER: java.net.CookiePolicy
            /**
             * Will be called to see whether or not this cookie should be accepted.
             * @param uri       the URI to consult accept policy with
             * @param cookie    the HttpCookie object in question
             * @return {#code true} if this cookie should be accepted;
             *                   otherwise, {@code false}
             */
            // @ts-ignore
            shouldAccept(uri: java.net.URI, cookie: java.net.HttpCookie): boolean
        }
    }
}

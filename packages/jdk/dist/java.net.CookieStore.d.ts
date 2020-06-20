declare namespace java {
    namespace net {
        /**
         * A CookieStore object represents a storage for cookie. Can store and retrieve
         * cookies.
         * <p>{@link CookieManager} will call {@code CookieStore.add} to save cookies
         * for every incoming HTTP response, and call {@code CookieStore.get} to
         * retrieve cookie for every outgoing HTTP request. A CookieStore
         * is responsible for removing HttpCookie instances which have expired.
         * @author Edward Wang
         * @since 1.6
         */
        // @ts-ignore
        interface CookieStore {
            /**
             * Adds one HTTP cookie to the store. This is called for every
             * incoming HTTP response.
             * <p>A cookie to store may or may not be associated with an URI. If it
             * is not associated with an URI, the cookie's domain and path attribute
             * will indicate where it comes from. If it is associated with an URI and
             * its domain and path attribute are not specified, given URI will indicate
             * where this cookie comes from.
             * <p>If a cookie corresponding to the given URI already exists,
             * then it is replaced with the new one.
             * @param uri       the uri this cookie associated with.
             *                   if {#code null}, this cookie will not be associated
             *                   with an URI
             * @param cookie    the cookie to store
             * @throws NullPointerException if {#code cookie} is {@code null}
             * @see #get
             */
            // @ts-ignore
            add(uri: java.net.URI, cookie: java.net.HttpCookie): void
            /**
             * Retrieve cookies associated with given URI, or whose domain matches the
             * given URI. Only cookies that have not expired are returned.
             * This is called for every outgoing HTTP request.
             * @return an immutable list of HttpCookie,
             *                   return empty list if no cookies match the given URI
             * @param uri       the uri associated with the cookies to be returned
             * @throws NullPointerException if {#code uri} is {@code null}
             * @see #add
             */
            // @ts-ignore
            get(uri: java.net.URI): java.util.List<java.net.HttpCookie>
            /**
             * Get all not-expired cookies in cookie store.
             * @return an immutable list of http cookies;
             *                   return empty list if there's no http cookie in store
             */
            // @ts-ignore
            getCookies(): java.util.List<java.net.HttpCookie>
            /**
             * Get all URIs which identify the cookies in this cookie store.
             * @return an immutable list of URIs;
             *                   return empty list if no cookie in this cookie store
             *                   is associated with an URI
             */
            // @ts-ignore
            getURIs(): java.util.List<java.net.URI>
            /**
             * Remove a cookie from store.
             * @param uri       the uri this cookie associated with.
             *                   if {#code null}, the cookie to be removed is not associated
             *                   with an URI when added; if not {@code null}, the cookie
             *                   to be removed is associated with the given URI when added.
             * @param cookie    the cookie to remove
             * @return {#code true} if this store contained the specified cookie
             * @throws NullPointerException if {#code cookie} is {@code null}
             */
            // @ts-ignore
            remove(uri: java.net.URI, cookie: java.net.HttpCookie): boolean
            /**
             * Remove all cookies in this cookie store.
             * @return {#code true} if this store changed as a result of the call
             */
            // @ts-ignore
            removeAll(): boolean
        }
    }
}

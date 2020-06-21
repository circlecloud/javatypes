declare namespace javax {
    namespace servlet {
        /**
         * Configures the session cookies used by the web application associated with
         * the ServletContext from which this SessionCookieConfig was obtained.
         * @since Servlet 3.0
         */
        // @ts-ignore
        interface SessionCookieConfig {
            /**
             * Sets the session cookie name.
             * @param name The name of the session cookie
             * @throws IllegalStateException if the associated ServletContext has
             *          already been initialised
             */
            // @ts-ignore
            setName(name: java.lang.String | string): void
            // @ts-ignore
            getName(): string
            /**
             * Sets the domain for the session cookie
             * @param domain The session cookie domain
             * @throws IllegalStateException if the associated ServletContext has
             *          already been initialised
             */
            // @ts-ignore
            setDomain(domain: java.lang.String | string): void
            // @ts-ignore
            getDomain(): string
            /**
             * Sets the path of the session cookie.
             * @param path The session cookie path
             * @throws IllegalStateException if the associated ServletContext has
             *          already been initialised
             */
            // @ts-ignore
            setPath(path: java.lang.String | string): void
            // @ts-ignore
            getPath(): string
            /**
             * Sets the comment for the session cookie
             * @param comment The session cookie comment
             * @throws IllegalStateException if the associated ServletContext has
             *          already been initialised
             */
            // @ts-ignore
            setComment(comment: java.lang.String | string): void
            // @ts-ignore
            getComment(): string
            /**
             * Sets the httpOnly flag for the session cookie.
             * @param httpOnly The httpOnly setting to use for session cookies
             * @throws IllegalStateException if the associated ServletContext has
             *          already been initialised
             */
            // @ts-ignore
            setHttpOnly(httpOnly: boolean): void
            // @ts-ignore
            isHttpOnly(): boolean
            /**
             * Sets the secure flag for the session cookie.
             * @param secure The secure setting to use for session cookies
             * @throws IllegalStateException if the associated ServletContext has
             *          already been initialised
             */
            // @ts-ignore
            setSecure(secure: boolean): void
            // @ts-ignore
            isSecure(): boolean
            /**
             * Sets the maximum age.
             * @param MaxAge the maximum age to set
             * @throws IllegalStateException if the associated ServletContext has
             *          already been initialised
             */
            // @ts-ignore
            setMaxAge(MaxAge: number /*int*/): void
            // @ts-ignore
            getMaxAge(): number /*int*/
        }
    }
}

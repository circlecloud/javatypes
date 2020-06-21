declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    /**
                     * This class is not thread-safe.
                     */
                    // @ts-ignore
                    class ServerCookies extends java.lang.Object {
                        // @ts-ignore
                        constructor(initialSize: number /*int*/)
                        /**
                         * Register a new, initialized cookie. Cookies are recycled, and most of the
                         * time an existing ServerCookie object is returned. The caller can set the
                         * name/value and attributes for the cookie.
                         * @return the new cookie
                         */
                        // @ts-ignore
                        public addCookie(): org.apache.tomcat.util.http.ServerCookie
                        // @ts-ignore
                        public getCookie(idx: number /*int*/): org.apache.tomcat.util.http.ServerCookie
                        // @ts-ignore
                        public getCookieCount(): number /*int*/
                        // @ts-ignore
                        public setLimit(limit: number /*int*/): void
                        // @ts-ignore
                        public recycle(): void
                    }
                }
            }
        }
    }
}

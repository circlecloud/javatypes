declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    // @ts-ignore
                    interface CookieProcessor {
                        /**
                         * Parse the provided headers into server cookie objects.
                         * @param headers       The HTTP headers to parse
                         * @param serverCookies The server cookies object to populate with the
                         *                       results of the parsing
                         */
                        // @ts-ignore
                        parseCookieHeader(headers: org.apache.tomcat.util.http.MimeHeaders, serverCookies: org.apache.tomcat.util.http.ServerCookies): void
                        /**
                         * Generate the {@code Set-Cookie} HTTP header value for the given Cookie.
                         * @param cookie The cookie for which the header will be generated
                         * @return The header value in a form that can be added directly to the
                         *          response
                         */
                        // @ts-ignore
                        generateHeader(cookie: javax.servlet.http.Cookie): string
                        /**
                         * Obtain the character set that will be used when converting between bytes
                         * and characters when parsing and/or generating HTTP headers for cookies.
                         * @return The character set used for byte&lt;-&gt;character conversions
                         */
                        // @ts-ignore
                        getCharset(): java.nio.charset.Charset
                    }
                }
            }
        }
    }
}

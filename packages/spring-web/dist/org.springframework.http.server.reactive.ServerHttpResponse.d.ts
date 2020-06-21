declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * Represents a reactive server-side HTTP response.
                     * @author Arjen Poutsma
                     * @author Sebastien Deleuze
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    interface ServerHttpResponse extends org.springframework.http.ReactiveHttpOutputMessage {
                        /**
                         * Set the HTTP status code of the response.
                         * @param status the HTTP status as an {#link HttpStatus} enum value
                         * @return {#code false} if the status code change wasn't processed because
                         *  the HTTP response is committed, {@code true} if successfully set.
                         */
                        // @ts-ignore
                        setStatusCode(status: org.springframework.http.HttpStatus): boolean
                        /**
                         * Return the status code that has been set, or otherwise fall back on the
                         * status of the response from the underlying server. The return value may
                         * be {@code null} if the status code value is outside the
                         * {@link HttpStatus} enum range, or if there is no default value from the
                         * underlying server.
                         */
                        // @ts-ignore
                        getStatusCode(): org.springframework.http.HttpStatus
                        /**
                         * Set the HTTP status code to the given value (potentially non-standard and
                         * not resolvable through the {@link HttpStatus} enum) as an integer.
                         * @param value the status code value
                         * @return {#code false} if the status code change wasn't processed because
                         *  the HTTP response is committed, {@code true} if successfully set.
                         * @since 5.2.4
                         */
                        // @ts-ignore
                        setRawStatusCode(value: java.lang.Integer | number): boolean
                        /**
                         * Return the status code that has been set, or otherwise fall back on the
                         * status of the response from the underlying server. The return value may
                         * be {@code null} if there is no default value from the underlying server.
                         * @since 5.2.4
                         */
                        // @ts-ignore
                        getRawStatusCode(): number
                        /**
                         * Return a mutable map with the cookies to send to the server.
                         */
                        // @ts-ignore
                        getCookies(): object
                        /**
                         * Add the given {@code ResponseCookie}.
                         * @param cookie the cookie to add
                         * @throws IllegalStateException if the response has already been committed
                         */
                        // @ts-ignore
                        addCookie(cookie: org.springframework.http.ResponseCookie): void
                    }
                }
            }
        }
    }
}

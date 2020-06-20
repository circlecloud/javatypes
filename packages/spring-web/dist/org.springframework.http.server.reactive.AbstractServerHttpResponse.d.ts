declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * Base class for {@link ServerHttpResponse} implementations.
                     * @author Rossen Stoyanchev
                     * @author Juergen Hoeller
                     * @author Sebastien Deleuze
                     * @author Brian Clozel
                     * @since 5.0
                     */
                    // @ts-ignore
                    class AbstractServerHttpResponse extends java.lang.Object implements org.springframework.http.server.reactive.ServerHttpResponse {
                        // @ts-ignore
                        constructor(dataBufferFactory: DataBufferFactory)
                        // @ts-ignore
                        constructor(dataBufferFactory: DataBufferFactory, headers: org.springframework.http.HttpHeaders)
                        // @ts-ignore
                        readonly logger: Log
                        // @ts-ignore
                        bufferFactory(): DataBufferFactory
                        // @ts-ignore
                        setStatusCode(status: org.springframework.http.HttpStatus): boolean
                        // @ts-ignore
                        getStatusCode(): org.springframework.http.HttpStatus
                        // @ts-ignore
                        setRawStatusCode(statusCode: number): boolean
                        // @ts-ignore
                        getRawStatusCode(): java.lang.Integer
                        /**
                         * Set the HTTP status code of the response.
                         * @param statusCode the HTTP status as an integer value
                         * @since 5.0.1
                         * @deprecated as of 5.2.4 in favor of {#link ServerHttpResponse#setRawStatusCode(Integer)}.
                         */
                        // @ts-ignore
                        setStatusCodeValue(statusCode: number): void
                        /**
                         * Return the HTTP status code of the response.
                         * @return the HTTP status as an integer value
                         * @since 5.0.1
                         * @deprecated as of 5.2.4 in favor of {#link ServerHttpResponse#getRawStatusCode()}.
                         */
                        // @ts-ignore
                        getStatusCodeValue(): java.lang.Integer
                        // @ts-ignore
                        getHeaders(): org.springframework.http.HttpHeaders
                        // @ts-ignore
                        getCookies(): <any>
                        // @ts-ignore
                        addCookie(cookie: org.springframework.http.ResponseCookie): void
                        /**
                         * Return the underlying server response.
                         * <p><strong>Note:</strong> This is exposed mainly for internal framework
                         * use such as WebSocket upgrades in the spring-webflux module.
                         */
                        // @ts-ignore
                        abstract getNativeResponse<T>(): T
                        // @ts-ignore
                        beforeCommit(action: java.util.function.Supplier<<any>> | java.util.function$.Supplier<<any>>): void
                        // @ts-ignore
                        isCommitted(): boolean
                        // @ts-ignore
                        writeWith(body: object): <any>
                        // @ts-ignore
                        writeAndFlushWith(body: object): <any>
                        // @ts-ignore
                        setComplete(): <any>
                        /**
                         * A variant of {@link #doCommit(Supplier)} for a response without no body.
                         * @return a completion publisher
                         */
                        // @ts-ignore
                        doCommit(): <any>
                        /**
                         * Apply {@link #beforeCommit(Supplier) beforeCommit} actions, apply the
                         * response status and headers/cookies, and write the response body.
                         * @param writeAction the action to write the response body (may be {#code null})
                         * @return a completion publisher
                         */
                        // @ts-ignore
                        doCommit(writeAction: java.util.function.Supplier<<any>> | java.util.function$.Supplier<<any>>): <any>
                        /**
                         * Write to the underlying the response.
                         * @param body the publisher to write with
                         */
                        // @ts-ignore
                        abstract writeWithInternal(body: object): <any>
                        /**
                         * Write to the underlying the response, and flush after each {@code Publisher<DataBuffer>}.
                         * @param body the publisher to write and flush with
                         */
                        // @ts-ignore
                        abstract writeAndFlushWithInternal(body: object): <any>
                        /**
                         * Write the status code to the underlying response.
                         * This method is called once only.
                         */
                        // @ts-ignore
                        abstract applyStatusCode(): void
                        /**
                         * Invoked when the response is getting committed allowing sub-classes to
                         * make apply header values to the underlying response.
                         * <p>Note that most sub-classes use an {@link HttpHeaders} instance that
                         * wraps an adapter to the native response headers such that changes are
                         * propagated to the underlying response on the go. That means this callback
                         * is typically not used other than for specialized updates such as setting
                         * the contentType or characterEncoding fields in a Servlet response.
                         */
                        // @ts-ignore
                        abstract applyHeaders(): void
                        /**
                         * Add cookies from {@link #getHeaders()} to the underlying response.
                         * This method is called once only.
                         */
                        // @ts-ignore
                        abstract applyCookies(): void
                    }
                }
            }
        }
    }
}

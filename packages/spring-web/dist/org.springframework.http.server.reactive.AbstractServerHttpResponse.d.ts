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
                    abstract class AbstractServerHttpResponse extends java.lang.Object implements org.springframework.http.server.reactive.ServerHttpResponse {
                        // @ts-ignore
                        constructor(dataBufferFactory: DataBufferFactory)
                        // @ts-ignore
                        constructor(dataBufferFactory: DataBufferFactory, headers: org.springframework.http.HttpHeaders)
                        // @ts-ignore
                        readonly logger: Log
                        // @ts-ignore
                        public bufferFactory(): DataBufferFactory
                        // @ts-ignore
                        public setStatusCode(status: org.springframework.http.HttpStatus): boolean
                        // @ts-ignore
                        public getStatusCode(): org.springframework.http.HttpStatus
                        // @ts-ignore
                        public setRawStatusCode(statusCode: java.lang.Integer | number): boolean
                        // @ts-ignore
                        public getRawStatusCode(): number
                        /**
                         * Set the HTTP status code of the response.
                         * @param statusCode the HTTP status as an integer value
                         * @since 5.0.1
                         * @deprecated as of 5.2.4 in favor of {#link ServerHttpResponse#setRawStatusCode(Integer)}.
                         */
                        // @ts-ignore
                        public setStatusCodeValue(statusCode: java.lang.Integer | number): void
                        /**
                         * Return the HTTP status code of the response.
                         * @return the HTTP status as an integer value
                         * @since 5.0.1
                         * @deprecated as of 5.2.4 in favor of {#link ServerHttpResponse#getRawStatusCode()}.
                         */
                        // @ts-ignore
                        public getStatusCodeValue(): number
                        // @ts-ignore
                        public getHeaders(): org.springframework.http.HttpHeaders
                        // @ts-ignore
                        public getCookies(): object
                        // @ts-ignore
                        public addCookie(cookie: org.springframework.http.ResponseCookie): void
                        /**
                         * Return the underlying server response.
                         * <p><strong>Note:</strong> This is exposed mainly for internal framework
                         * use such as WebSocket upgrades in the spring-webflux module.
                         */
                        // @ts-ignore
                        public abstract getNativeResponse<T>(): T
                        // @ts-ignore
                        public beforeCommit(action: java.util.function$.Supplier<any>): void
                        // @ts-ignore
                        public isCommitted(): boolean
                        // @ts-ignore
                        public writeWith(body: object): object
                        // @ts-ignore
                        public writeAndFlushWith(body: object): object
                        // @ts-ignore
                        public setComplete(): object
                        /**
                         * A variant of {@link #doCommit(Supplier)} for a response without no body.
                         * @return a completion publisher
                         */
                        // @ts-ignore
                        doCommit(): object
                        /**
                         * Apply {@link #beforeCommit(Supplier) beforeCommit} actions, apply the
                         * response status and headers/cookies, and write the response body.
                         * @param writeAction the action to write the response body (may be {#code null})
                         * @return a completion publisher
                         */
                        // @ts-ignore
                        doCommit(writeAction: java.util.function$.Supplier<any>): object
                        /**
                         * Write to the underlying the response.
                         * @param body the publisher to write with
                         */
                        // @ts-ignore
                        abstract writeWithInternal(body: object): object
                        /**
                         * Write to the underlying the response, and flush after each {@code Publisher<DataBuffer>}.
                         * @param body the publisher to write and flush with
                         */
                        // @ts-ignore
                        abstract writeAndFlushWithInternal(body: object): object
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

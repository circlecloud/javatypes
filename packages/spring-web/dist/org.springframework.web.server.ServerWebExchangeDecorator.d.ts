declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                /**
                 * A convenient base class for classes that need to wrap another
                 * {@link ServerWebExchange}. Pre-implements all methods by delegating to the
                 * wrapped instance.
                 * <p><strong>Note:</strong> if the purpose for using a decorator is to override
                 * properties like {@link #getPrincipal()}, consider using
                 * {@link ServerWebExchange#mutate()} instead.
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 * @see ServerWebExchange#mutate()
                 */
                // @ts-ignore
                class ServerWebExchangeDecorator extends java.lang.Object implements org.springframework.web.server.ServerWebExchange {
                    // @ts-ignore
                    constructor(delegate: org.springframework.web.server.ServerWebExchange)
                    // @ts-ignore
                    public getDelegate(): org.springframework.web.server.ServerWebExchange
                    // @ts-ignore
                    public getRequest(): org.springframework.http.server.reactive.ServerHttpRequest
                    // @ts-ignore
                    public getResponse(): org.springframework.http.server.reactive.ServerHttpResponse
                    // @ts-ignore
                    public getAttributes(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public getSession(): object
                    // @ts-ignore
                    public getPrincipal<T extends java.security.Principal>(): object
                    // @ts-ignore
                    public getLocaleContext(): LocaleContext
                    // @ts-ignore
                    public getApplicationContext(): ApplicationContext
                    // @ts-ignore
                    public getFormData(): object
                    // @ts-ignore
                    public getMultipartData(): object
                    // @ts-ignore
                    public isNotModified(): boolean
                    // @ts-ignore
                    public checkNotModified(lastModified: java.time.Instant): boolean
                    // @ts-ignore
                    public checkNotModified(etag: java.lang.String | string): boolean
                    // @ts-ignore
                    public checkNotModified(etag: java.lang.String | string, lastModified: java.time.Instant): boolean
                    // @ts-ignore
                    public transformUrl(url: java.lang.String | string): string
                    // @ts-ignore
                    public addUrlTransformer(transformer: java.util.function$.Function<java.lang.String | string, java.lang.String | string>): void
                    // @ts-ignore
                    public getLogPrefix(): string
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}

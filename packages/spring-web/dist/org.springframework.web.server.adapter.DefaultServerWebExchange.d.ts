declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace adapter {
                    /**
                     * Default implementation of {@link ServerWebExchange}.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class DefaultServerWebExchange extends java.lang.Object implements org.springframework.web.server.ServerWebExchange {
                        // @ts-ignore
                        constructor(request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse, sessionManager: org.springframework.web.server.session.WebSessionManager, codecConfigurer: org.springframework.http.codec.ServerCodecConfigurer, localeContextResolver: org.springframework.web.server.i18n.LocaleContextResolver)
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
                        public getFormData(): object
                        // @ts-ignore
                        public getMultipartData(): object
                        // @ts-ignore
                        public getLocaleContext(): LocaleContext
                        // @ts-ignore
                        public getApplicationContext(): ApplicationContext
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
                    }
                }
            }
        }
    }
}

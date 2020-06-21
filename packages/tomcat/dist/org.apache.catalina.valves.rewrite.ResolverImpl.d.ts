declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                namespace rewrite {
                    // @ts-ignore
                    class ResolverImpl extends org.apache.catalina.valves.rewrite.Resolver {
                        // @ts-ignore
                        constructor(request: org.apache.catalina.connector.Request)
                        // @ts-ignore
                        request: org.apache.catalina.connector.Request
                        /**
                         * The following are not implemented:
                         * - SERVER_ADMIN
                         * - API_VERSION
                         * - IS_SUBREQ
                         */
                        // @ts-ignore
                        public resolve(key: java.lang.String | string): string
                        // @ts-ignore
                        public resolveEnv(key: java.lang.String | string): string
                        // @ts-ignore
                        public resolveSsl(key: java.lang.String | string): string
                        // @ts-ignore
                        public resolveHttp(key: java.lang.String | string): string
                        // @ts-ignore
                        public resolveResource(type: number /*int*/, name: java.lang.String | string): boolean
                        // @ts-ignore
                        public getUriCharset(): java.nio.charset.Charset
                    }
                }
            }
        }
    }
}

declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                namespace rewrite {
                    /**
                     * Resolver abstract class.
                     */
                    // @ts-ignore
                    abstract class Resolver extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public abstract resolve(key: java.lang.String | string): string
                        // @ts-ignore
                        public resolveEnv(key: java.lang.String | string): string
                        // @ts-ignore
                        public abstract resolveSsl(key: java.lang.String | string): string
                        // @ts-ignore
                        public abstract resolveHttp(key: java.lang.String | string): string
                        // @ts-ignore
                        public abstract resolveResource(type: number /*int*/, name: java.lang.String | string): boolean
                        // @ts-ignore
                        public abstract getUriCharset(): java.nio.charset.Charset
                    }
                }
            }
        }
    }
}

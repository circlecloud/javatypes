declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                namespace rewrite {
                    // @ts-ignore
                    interface RewriteMap {
                        // @ts-ignore
                        setParameters(params: java.lang.String | string): string
                        // @ts-ignore
                        lookup(key: java.lang.String | string): string
                    }
                }
            }
        }
    }
}

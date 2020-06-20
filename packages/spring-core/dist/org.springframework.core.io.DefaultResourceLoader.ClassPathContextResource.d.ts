declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace DefaultResourceLoader {
                    /**
                     * ClassPathResource that explicitly expresses a context-relative path
                     * through implementing the ContextResource interface.
                     */
                    // @ts-ignore
                    class ClassPathContextResource extends org.springframework.core.io.ClassPathResource implements org.springframework.core.io.ContextResource {
                        // @ts-ignore
                        constructor(path: string, classLoader: java.lang.ClassLoader)
                        // @ts-ignore
                        getPathWithinContext(): java.lang.String
                        // @ts-ignore
                        createRelative(relativePath: string): org.springframework.core.io.Resource
                    }
                }
            }
        }
    }
}

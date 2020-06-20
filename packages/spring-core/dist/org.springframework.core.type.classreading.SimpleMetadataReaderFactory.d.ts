declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                namespace classreading {
                    /**
                     * Simple implementation of the {@link MetadataReaderFactory} interface,
                     * creating a new ASM {@link org.springframework.asm.ClassReader} for every request.
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    class SimpleMetadataReaderFactory extends java.lang.Object implements org.springframework.core.type.classreading.MetadataReaderFactory {
                        /**
                         * Create a new SimpleMetadataReaderFactory for the default class loader.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new SimpleMetadataReaderFactory for the given resource loader.
                         * @param resourceLoader the Spring ResourceLoader to use
                         *  (also determines the ClassLoader to use)
                         */
                        // @ts-ignore
                        constructor(resourceLoader: org.springframework.core.io.ResourceLoader)
                        /**
                         * Create a new SimpleMetadataReaderFactory for the given class loader.
                         * @param classLoader the ClassLoader to use
                         */
                        // @ts-ignore
                        constructor(classLoader: java.lang.ClassLoader)
                        /**
                         * Return the ResourceLoader that this MetadataReaderFactory has been
                         * constructed with.
                         */
                        // @ts-ignore
                        getResourceLoader(): org.springframework.core.io.ResourceLoader
                        // @ts-ignore
                        getMetadataReader(className: string): org.springframework.core.type.classreading.MetadataReader
                        // @ts-ignore
                        getMetadataReader(resource: org.springframework.core.io.Resource): org.springframework.core.type.classreading.MetadataReader
                    }
                }
            }
        }
    }
}

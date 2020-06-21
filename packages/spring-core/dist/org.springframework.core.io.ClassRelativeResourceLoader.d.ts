declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * {@link ResourceLoader} implementation that interprets plain resource paths
                 * as relative to a given {@code java.lang.Class}.
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see Class#getResource(String)
                 * @see ClassPathResource#ClassPathResource(String, Class)
                 */
                // @ts-ignore
                class ClassRelativeResourceLoader extends org.springframework.core.io.DefaultResourceLoader {
                    /**
                     * Create a new ClassRelativeResourceLoader for the given class.
                     * @param clazz the class to load resources through
                     */
                    // @ts-ignore
                    constructor(clazz: java.lang.Class<any>)
                    // @ts-ignore
                    getResourceByPath(path: java.lang.String | string): org.springframework.core.io.Resource
                }
            }
        }
    }
}

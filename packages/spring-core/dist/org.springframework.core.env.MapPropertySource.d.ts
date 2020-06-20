declare namespace org {
    namespace springframework {
        namespace core {
            namespace env {
                /**
                 * {@link PropertySource} that reads keys and values from a {@code Map} object.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see PropertiesPropertySource
                 */
                // @ts-ignore
                class MapPropertySource extends org.springframework.core.env.EnumerablePropertySource<java.util.Map<java.lang.String, java.lang.Object>> {
                    // @ts-ignore
                    constructor(name: string, source: java.util.Map<java.lang.String, java.lang.Object>)
                    // @ts-ignore
                    getProperty(name: string): java.lang.Object
                    // @ts-ignore
                    containsProperty(name: string): boolean
                    // @ts-ignore
                    getPropertyNames(): java.lang.String[]
                }
            }
        }
    }
}

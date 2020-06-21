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
                class MapPropertySource extends org.springframework.core.env.EnumerablePropertySource<java.util.Map<java.lang.String | string, java.lang.Object | any>> {
                    // @ts-ignore
                    constructor(name: java.lang.String | string, source: java.util.Map<java.lang.String | string, java.lang.Object | any>)
                    // @ts-ignore
                    public getProperty(name: java.lang.String | string): any
                    // @ts-ignore
                    public containsProperty(name: java.lang.String | string): boolean
                    // @ts-ignore
                    public getPropertyNames(): string[]
                }
            }
        }
    }
}

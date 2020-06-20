declare namespace org {
    namespace springframework {
        namespace core {
            namespace env {
                /**
                 * {@link PropertySource} implementation that extracts properties from a
                 * {@link java.util.Properties} object.
                 * <p>Note that because a {@code Properties} object is technically an
                 * {@code <Object, Object>} {@link java.util.Hashtable Hashtable}, one may contain
                 * non-{@code String} keys or values. This implementation, however is restricted to
                 * accessing only {@code String}-based keys and values, in the same fashion as
                 * {@link Properties#getProperty} and {@link Properties#setProperty}.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @since 3.1
                 */
                // @ts-ignore
                class PropertiesPropertySource extends org.springframework.core.env.MapPropertySource {
                    // @ts-ignore
                    constructor(name: string, source: java.util.Properties)
                    // @ts-ignore
                    constructor(name: string, source: java.util.Map<java.lang.String, java.lang.Object>)
                    // @ts-ignore
                    getPropertyNames(): java.lang.String[]
                }
            }
        }
    }
}

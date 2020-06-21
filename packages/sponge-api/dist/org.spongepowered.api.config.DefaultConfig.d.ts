declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace config {
                /**
                 * Provides an convenient injection for {@link ConfigRoot#getConfig()} or
                 * {@link ConfigRoot#getConfigPath()}.
                 * <p>Use this annotation on a {@link File} or {@link Path} if you want the
                 * pathname to the default configuration. Or instead, use this annotation on a
                 * {@link ConfigurationLoader} to get an instance of that. Remember that
                 * {@link Inject} is also necessary.</p>
                 * @see ConfigManager For getting configuration without injection
                 */
                // @ts-ignore
                abstract class DefaultConfig implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}

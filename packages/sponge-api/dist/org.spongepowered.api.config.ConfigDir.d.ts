declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace config {
                /**
                 * Provides an convenient injection for {@link ConfigRoot#getDirectory()}.
                 * <p>Use this annotation on a {@link File} or {@link Path}. Remember that
                 * {@link Inject} is also necessary.</p>
                 * @see ConfigManager For getting configuration without injection
                 */
                // @ts-ignore
                abstract class ConfigDir implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}

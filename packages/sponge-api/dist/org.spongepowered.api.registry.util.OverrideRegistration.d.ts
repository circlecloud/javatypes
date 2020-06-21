declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace registry {
                namespace util {
                    /**
                     * Declares the registry being a direct override of a different
                     * registry. Usually when a registry is planned for "vanilla" environments
                     * but cannot know the underlying implementation and as such requires
                     * additional minor changes. This will prevent the other registry from
                     * being used.
                     */
                    // @ts-ignore
                    abstract class OverrideRegistration implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}

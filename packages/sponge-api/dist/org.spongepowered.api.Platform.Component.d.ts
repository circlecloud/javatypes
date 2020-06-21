declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace Platform {
                /**
                 * Represents a part of the {@link Platform}.
                 */
                // @ts-ignore
                class Component extends java.lang.Enum<org.spongepowered.api.Platform.Component> {
                    /**
                     * The platform the {@link #IMPLEMENTATION} is based on.
                     */
                    // @ts-ignore
                    readonly GAME: org.spongepowered.api.Platform.Component
                    /**
                     * The abstraction layer for plugins.
                     */
                    // @ts-ignore
                    readonly API: org.spongepowered.api.Platform.Component
                    /**
                     * The implementation of the {@link #API} component.
                     */
                    // @ts-ignore
                    readonly IMPLEMENTATION: org.spongepowered.api.Platform.Component
                    // @ts-ignore
                    values(): org.spongepowered.api.Platform.Component[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.spongepowered.api.Platform.Component
                }
            }
        }
    }
}

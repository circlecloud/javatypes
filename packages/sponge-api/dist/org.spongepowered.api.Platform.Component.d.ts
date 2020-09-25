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
                    public static readonly GAME: org.spongepowered.api.Platform.Component
                    /**
                     * The abstraction layer for plugins.
                     */
                    // @ts-ignore
                    public static readonly API: org.spongepowered.api.Platform.Component
                    /**
                     * The implementation of the {@link #API} component.
                     */
                    // @ts-ignore
                    public static readonly IMPLEMENTATION: org.spongepowered.api.Platform.Component
                    // @ts-ignore
                    public static values(): org.spongepowered.api.Platform.Component[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.spongepowered.api.Platform.Component
                }
            }
        }
    }
}

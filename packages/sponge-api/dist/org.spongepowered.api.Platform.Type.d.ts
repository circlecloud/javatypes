declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace Platform {
                /**
                 * The type of the platform, or where the game is currently running.
                 * <p>A side is what part of Minecraft this is being run on. The client, or
                 * the server. The internal server is also treated like a dedicated server.
                 * </p>
                 */
                // @ts-ignore
                class Type extends java.lang.Enum<org.spongepowered.api.Platform.Type> {
                    /**
                     * The platform of a Minecraft CLIENT is expected.
                     */
                    // @ts-ignore
                    readonly CLIENT: org.spongepowered.api.Platform.Type
                    /**
                     * The platform of a Minecraft SERVER is expected.
                     */
                    // @ts-ignore
                    readonly SERVER: org.spongepowered.api.Platform.Type
                    /**
                     * It is unknown what platform the game is running on.
                     */
                    // @ts-ignore
                    readonly UNKNOWN: org.spongepowered.api.Platform.Type
                    // @ts-ignore
                    values(): org.spongepowered.api.Platform.Type[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.spongepowered.api.Platform.Type
                    /**
                     * Checks for whether the platform is {@link #SERVER}.
                     * @return True if the platform is {#link #SERVER}, false otherwise
                     */
                    // @ts-ignore
                    isServer(): boolean
                    /**
                     * Checks for whether the platform is {@link #CLIENT}.
                     * @return True if the platform is {#link #CLIENT}, false otherwise
                     */
                    // @ts-ignore
                    isClient(): boolean
                    /**
                     * Checks for whether the platform is known.
                     * @return False if the platform is {#link #UNKNOWN}, true otherwise
                     */
                    // @ts-ignore
                    isKnown(): boolean
                }
            }
        }
    }
}

declare namespace cn {
    namespace nukkit {
        namespace api {
            namespace API {
                /**
                 * Enum constant for API definition. Indicates which client platform this API element supports.
                 * @see #INTERNAL
                 * @see #PLATFORM_NATIVE
                 * @see #UNIVERSAL
                 */
                // @ts-ignore
                class Definition extends java.lang.Enum<cn.nukkit.api.API.Definition> {
                    /**
                     * Intended for features should only be used by Nukkit itself.
                     * Should not be used in production.
                     */
                    // @ts-ignore
                    public static readonly INTERNAL: cn.nukkit.api.API.Definition
                    /**
                     * Intended for features only available on one or several client platforms.
                     * <p>By using {@code PLATFORM_NATIVE} features, program will lose some cross-platform features provided.
                     * Might not available in some client platforms. Read the documents carefully before using this API element.
                     */
                    // @ts-ignore
                    public static readonly PLATFORM_NATIVE: cn.nukkit.api.API.Definition
                    /**
                     * Intended for features implemented in all client platforms.
                     * <p>Preferred to use for production use, but sometimes be lack of platform-native features.
                     */
                    // @ts-ignore
                    public static readonly UNIVERSAL: cn.nukkit.api.API.Definition
                    // @ts-ignore
                    public static values(): cn.nukkit.api.API.Definition[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): cn.nukkit.api.API.Definition
                }
            }
        }
    }
}

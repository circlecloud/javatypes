declare namespace org {
    namespace bukkit {
        namespace block {
            namespace banner {
                // @ts-ignore
                class Pattern extends java.lang.Object implements org.bukkit.configuration.serialization.ConfigurationSerializable {
                    /**
                     * Creates a new pattern from the specified color and
                     * pattern type
                     * @param color   the pattern color
                     * @param pattern the pattern type
                     */
                    // @ts-ignore
                    constructor(color: org.bukkit.DyeColor, pattern: org.bukkit.block.banner.PatternType)
                    /**
                     * Constructor for deserialization.
                     * @param map the map to deserialize from
                     */
                    // @ts-ignore
                    constructor(map: java.util.Map<java.lang.String, java.lang.Object>)
                    // @ts-ignore
                    serialize(): java.util.Map<java.lang.String, java.lang.Object>
                    /**
                     * Returns the color of the pattern
                     * @return the color of the pattern
                     */
                    // @ts-ignore
                    getColor(): org.bukkit.DyeColor
                    /**
                     * Returns the type of pattern
                     * @return the pattern type
                     */
                    // @ts-ignore
                    getPattern(): org.bukkit.block.banner.PatternType
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    equals(obj: any): boolean
                }
            }
        }
    }
}

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
                    constructor(map: java.util.Map<java.lang.String | string, java.lang.Object | any>)
                    // @ts-ignore
                    public serialize(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Returns the color of the pattern
                     * @return the color of the pattern
                     */
                    // @ts-ignore
                    public getColor(): org.bukkit.DyeColor
                    /**
                     * Returns the type of pattern
                     * @return the pattern type
                     */
                    // @ts-ignore
                    public getPattern(): org.bukkit.block.banner.PatternType
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                }
            }
        }
    }
}

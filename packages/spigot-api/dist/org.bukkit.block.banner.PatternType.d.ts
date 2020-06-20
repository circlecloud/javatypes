declare namespace org {
    namespace bukkit {
        namespace block {
            namespace banner {
                // @ts-ignore
                class PatternType extends java.lang.Enum<org.bukkit.block.banner.PatternType> {
                    // @ts-ignore
                    values(): org.bukkit.block.banner.PatternType[]
                    // @ts-ignore
                    valueOf(name: string): org.bukkit.block.banner.PatternType
                    /**
                     * Returns the identifier used to represent
                     * this pattern type
                     * @return the pattern's identifier
                     */
                    // @ts-ignore
                    getIdentifier(): java.lang.String
                    /**
                     * Returns the pattern type which matches the passed
                     * identifier or null if no matches are found
                     * @param identifier the identifier
                     * @return the matched pattern type or null
                     */
                    // @ts-ignore
                    getByIdentifier(identifier: string): org.bukkit.block.banner.PatternType
                }
            }
        }
    }
}

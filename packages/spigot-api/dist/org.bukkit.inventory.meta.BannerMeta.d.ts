declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface BannerMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Returns the base color for this banner
                     * @return the base color
                     * @deprecated banner color is now stored as the data value, not meta.
                     */
                    // @ts-ignore
                    getBaseColor(): org.bukkit.DyeColor
                    /**
                     * Sets the base color for this banner
                     * @param color the base color
                     * @deprecated banner color is now stored as the data value, not meta.
                     */
                    // @ts-ignore
                    setBaseColor(color: org.bukkit.DyeColor): void
                    /**
                     * Returns a list of patterns on this banner
                     * @return the patterns
                     */
                    // @ts-ignore
                    getPatterns(): Array<org.bukkit.block.banner.Pattern>
                    /**
                     * Sets the patterns used on this banner
                     * @param patterns the new list of patterns
                     */
                    // @ts-ignore
                    setPatterns(patterns: java.util.List<org.bukkit.block.banner.Pattern> | Array<org.bukkit.block.banner.Pattern>): void
                    /**
                     * Adds a new pattern on top of the existing
                     * patterns
                     * @param pattern the new pattern to add
                     */
                    // @ts-ignore
                    addPattern(pattern: org.bukkit.block.banner.Pattern): void
                    /**
                     * Returns the pattern at the specified index
                     * @param i the index
                     * @return the pattern
                     * @throws IndexOutOfBoundsException when index is not in [0, numberOfPatterns()) range
                     */
                    // @ts-ignore
                    getPattern(i: number /*int*/): org.bukkit.block.banner.Pattern
                    /**
                     * Removes the pattern at the specified index
                     * @param i the index
                     * @return the removed pattern
                     * @throws IndexOutOfBoundsException when index is not in [0, numberOfPatterns()) range
                     */
                    // @ts-ignore
                    removePattern(i: number /*int*/): org.bukkit.block.banner.Pattern
                    /**
                     * Sets the pattern at the specified index
                     * @param i       the index
                     * @param pattern the new pattern
                     * @throws IndexOutOfBoundsException when index is not in [0, numberOfPatterns()) range
                     */
                    // @ts-ignore
                    setPattern(i: number /*int*/, pattern: org.bukkit.block.banner.Pattern): void
                    /**
                     * Returns the number of patterns on this
                     * banner
                     * @return the number of patterns
                     */
                    // @ts-ignore
                    numberOfPatterns(): number /*int*/
                }
            }
        }
    }
}

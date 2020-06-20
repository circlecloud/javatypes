declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of a banner.
             */
            // @ts-ignore
            interface Banner extends org.bukkit.block.TileState {
                /**
                 * Returns the base color for this banner
                 * @return the base color
                 */
                // @ts-ignore
                getBaseColor(): org.bukkit.DyeColor
                /**
                 * Sets the base color for this banner.
                 * <b>Only valid for shield pseudo banners, otherwise base depends on block
                 * type</b>
                 * @param color the base color
                 */
                // @ts-ignore
                setBaseColor(color: org.bukkit.DyeColor): void
                /**
                 * Returns a list of patterns on this banner
                 * @return the patterns
                 */
                // @ts-ignore
                getPatterns(): java.util.List<org.bukkit.block.banner.Pattern>
                /**
                 * Sets the patterns used on this banner
                 * @param patterns the new list of patterns
                 */
                // @ts-ignore
                setPatterns(patterns: Array<org.bukkit.block.banner.Pattern>): void
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
                 */
                // @ts-ignore
                getPattern(i: number /*int*/): org.bukkit.block.banner.Pattern
                /**
                 * Removes the pattern at the specified index
                 * @param i the index
                 * @return the removed pattern
                 */
                // @ts-ignore
                removePattern(i: number /*int*/): org.bukkit.block.banner.Pattern
                /**
                 * Sets the pattern at the specified index
                 * @param i       the index
                 * @param pattern the new pattern
                 */
                // @ts-ignore
                setPattern(i: number /*int*/, pattern: org.bukkit.block.banner.Pattern): void
                /**
                 * Returns the number of patterns on this
                 * banner
                 * @return the number of patterns
                 */
                // @ts-ignore
                numberOfPatterns(): int
            }
        }
    }
}

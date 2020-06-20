declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Painting.
             */
            // @ts-ignore
            interface Painting extends org.bukkit.entity.Hanging {
                /**
                 * Get the art on this painting
                 * @return The art
                 */
                // @ts-ignore
                getArt(): org.bukkit.Art
                /**
                 * Set the art on this painting
                 * @param art The new art
                 * @return False if the new art won't fit at the painting's current
                 *      location
                 */
                // @ts-ignore
                setArt(art: org.bukkit.Art): boolean
                /**
                 * Set the art on this painting
                 * @param art The new art
                 * @param force If true, force the new art regardless of whether it fits
                 *      at the current location. Note that forcing it where it can't fit
                 *      normally causes it to drop as an item unless you override this by
                 *      catching the {#link HangingBreakEvent}.
                 * @return False if force was false and the new art won't fit at the
                 *      painting's current location
                 */
                // @ts-ignore
                setArt(art: org.bukkit.Art, force: boolean): boolean
            }
        }
    }
}

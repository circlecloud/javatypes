declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Cake extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                /**
                 * Gets the number of slices eaten from this cake
                 * @return The number of slices eaten
                 */
                // @ts-ignore
                getSlicesEaten(): int
                /**
                 * Gets the number of slices remaining on this cake
                 * @return The number of slices remaining
                 */
                // @ts-ignore
                getSlicesRemaining(): int
                /**
                 * Sets the number of slices eaten from this cake
                 * @param n The number of slices eaten
                 */
                // @ts-ignore
                setSlicesEaten(n: number /*int*/): void
                /**
                 * Sets the number of slices remaining on this cake
                 * @param n The number of slices remaining
                 */
                // @ts-ignore
                setSlicesRemaining(n: number /*int*/): void
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                clone(): org.bukkit.material.Cake
            }
        }
    }
}

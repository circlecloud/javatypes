declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Slime.
             */
            // @ts-ignore
            interface Slime extends org.bukkit.entity.Mob {
                /**
                 * @return The size of the slime
                 */
                // @ts-ignore
                getSize(): number /*int*/
                /**
                 * @param sz The new size of the slime.
                 */
                // @ts-ignore
                setSize(sz: number /*int*/): void
            }
        }
    }
}

declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a chest
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Chest extends org.bukkit.material.DirectionalContainer {
                // @ts-ignore
                constructor()
                /**
                 * Instantiate a chest facing in a particular direction.
                 * @param direction the direction the chest's lit opens towards
                 */
                // @ts-ignore
                constructor(direction: org.bukkit.block.BlockFace)
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                // @ts-ignore
                clone(): org.bukkit.material.Chest
            }
        }
    }
}

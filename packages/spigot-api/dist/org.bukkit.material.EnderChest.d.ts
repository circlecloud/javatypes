declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents an ender chest
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class EnderChest extends org.bukkit.material.DirectionalContainer {
                // @ts-ignore
                constructor()
                /**
                 * Instantiate an ender chest facing in a particular direction.
                 * @param direction the direction the ender chest's lid opens towards
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
                public clone(): org.bukkit.material.EnderChest
            }
        }
    }
}

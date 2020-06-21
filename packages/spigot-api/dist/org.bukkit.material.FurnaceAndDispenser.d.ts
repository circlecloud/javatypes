declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a furnace or dispenser, two types of directional containers
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class FurnaceAndDispenser extends org.bukkit.material.DirectionalContainer {
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
                public clone(): org.bukkit.material.FurnaceAndDispenser
            }
        }
    }
}

declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a redstone torch
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class RedstoneTorch extends org.bukkit.material.Torch implements org.bukkit.material.Redstone {
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
                 * Gets the current state of this Material, indicating if it's powered or
                 * unpowered
                 * @return true if powered, otherwise false
                 */
                // @ts-ignore
                public isPowered(): boolean
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public clone(): org.bukkit.material.RedstoneTorch
            }
        }
    }
}

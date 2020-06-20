declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a powered rail
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class PoweredRail extends org.bukkit.material.ExtendedRails implements org.bukkit.material.Redstone {
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
                // @ts-ignore
                isPowered(): boolean
                /**
                 * Set whether this PoweredRail should be powered or not.
                 * @param isPowered whether or not the rail is powered
                 */
                // @ts-ignore
                setPowered(isPowered: boolean): void
                // @ts-ignore
                clone(): org.bukkit.material.PoweredRail
            }
        }
    }
}

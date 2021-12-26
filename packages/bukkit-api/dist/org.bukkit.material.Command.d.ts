declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a command block
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Command extends org.bukkit.material.MaterialData implements org.bukkit.material.Redstone {
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
                /**
                 * Sets the current state of this Material
                 * @param bool
                 *             whether or not the command block is powered
                 */
                // @ts-ignore
                public setPowered(bool: boolean): void
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public clone(): org.bukkit.material.Command
            }
        }
    }
}

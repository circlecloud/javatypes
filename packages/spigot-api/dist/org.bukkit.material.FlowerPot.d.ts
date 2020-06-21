declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a flower pot.
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class FlowerPot extends org.bukkit.material.MaterialData {
                /**
                 * Default constructor for a flower pot.
                 */
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
                 * Get the material in the flower pot
                 * @return material MaterialData for the block currently in the flower pot
                 *      or null if empty
                 */
                // @ts-ignore
                public getContents(): org.bukkit.material.MaterialData
                /**
                 * Set the contents of the flower pot
                 * @param materialData MaterialData of the block to put in the flower pot.
                 */
                // @ts-ignore
                public setContents(materialData: org.bukkit.material.MaterialData): void
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public clone(): org.bukkit.material.FlowerPot
            }
        }
    }
}

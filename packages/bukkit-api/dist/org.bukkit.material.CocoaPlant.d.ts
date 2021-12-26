declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents the cocoa plant
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class CocoaPlant extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional, org.bukkit.material.Attachable {
                // @ts-ignore
                constructor()
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                // @ts-ignore
                constructor(sz: org.bukkit.material.CocoaPlant.CocoaPlantSize)
                // @ts-ignore
                constructor(sz: org.bukkit.material.CocoaPlant.CocoaPlantSize, dir: org.bukkit.block.BlockFace)
                /**
                 * Get size of plant
                 * @return size
                 */
                // @ts-ignore
                public getSize(): org.bukkit.material.CocoaPlant.CocoaPlantSize
                /**
                 * Set size of plant
                 * @param sz - size of plant
                 */
                // @ts-ignore
                public setSize(sz: org.bukkit.material.CocoaPlant.CocoaPlantSize): void
                // @ts-ignore
                public getAttachedFace(): org.bukkit.block.BlockFace
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void
                // @ts-ignore
                public getFacing(): org.bukkit.block.BlockFace
                // @ts-ignore
                public clone(): org.bukkit.material.CocoaPlant
                // @ts-ignore
                public toString(): string
            }
        }
    }
}

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
                getSize(): org.bukkit.material.CocoaPlant.CocoaPlantSize
                /**
                 * Set size of plant
                 * @param sz - size of plant
                 */
                // @ts-ignore
                setSize(sz: org.bukkit.material.CocoaPlant.CocoaPlantSize): void
                // @ts-ignore
                getAttachedFace(): org.bukkit.block.BlockFace
                // @ts-ignore
                setFacingDirection(face: org.bukkit.block.BlockFace): void
                // @ts-ignore
                getFacing(): org.bukkit.block.BlockFace
                // @ts-ignore
                clone(): org.bukkit.material.CocoaPlant
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}

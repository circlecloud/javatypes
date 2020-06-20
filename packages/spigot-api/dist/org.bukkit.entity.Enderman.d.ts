declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents an Enderman.
             */
            // @ts-ignore
            interface Enderman extends org.bukkit.entity.Monster {
                /**
                 * Gets the id and data of the block that the Enderman is carrying.
                 * @return MaterialData containing the id and data of the block
                 */
                // @ts-ignore
                getCarriedMaterial(): org.bukkit.material.MaterialData
                /**
                 * Sets the id and data of the block that the Enderman is carrying.
                 * @param material data to set the carried block to
                 */
                // @ts-ignore
                setCarriedMaterial(material: org.bukkit.material.MaterialData): void
                /**
                 * Gets the data of the block that the Enderman is carrying.
                 * @return BlockData containing the carried block, or null if none
                 */
                // @ts-ignore
                getCarriedBlock(): org.bukkit.block.data.BlockData
                /**
                 * Sets the data of the block that the Enderman is carrying.
                 * @param blockData data to set the carried block to, or null to remove
                 */
                // @ts-ignore
                setCarriedBlock(blockData: org.bukkit.block.data.BlockData): void
            }
        }
    }
}

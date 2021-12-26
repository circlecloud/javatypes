declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents textured materials like steps and smooth bricks
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            abstract class TexturedMaterial extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor(m: org.bukkit.Material)
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                /**
                 * Retrieve a list of possible textures. The first element of the list
                 * will be used as a default.
                 * @return a list of possible textures for this block
                 */
                // @ts-ignore
                public abstract getTextures(): Array<org.bukkit.Material>
                /**
                 * Gets the current Material this block is made of
                 * @return Material of this block
                 */
                // @ts-ignore
                public getMaterial(): org.bukkit.Material
                /**
                 * Sets the material this block is made of
                 * @param material
                 *             New material of this block
                 */
                // @ts-ignore
                public setMaterial(material: org.bukkit.Material): void
                /**
                 * Get material index from data
                 * @return index of data in textures list
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getTextureIndex(): number /*int*/
                /**
                 * Set material index
                 * @param idx - index of data in textures list
                 * @deprecated Magic value
                 */
                // @ts-ignore
                setTextureIndex(idx: number /*int*/): void
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public clone(): org.bukkit.material.TexturedMaterial
            }
        }
    }
}

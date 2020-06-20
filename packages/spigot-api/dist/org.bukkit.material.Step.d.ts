declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents the different types of steps.
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Step extends org.bukkit.material.TexturedMaterial {
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
                getTextures(): java.util.List<org.bukkit.Material>
                /**
                 * Test if step is inverted
                 * @return true if inverted (top half), false if normal (bottom half)
                 */
                // @ts-ignore
                isInverted(): boolean
                /**
                 * Set step inverted state
                 * @param inv - true if step is inverted (top half), false if step is
                 *      normal (bottom half)
                 */
                // @ts-ignore
                setInverted(inv: boolean): void
                /**
                 * {@inheritDoc}
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getTextureIndex(): int
                /**
                 * {@inheritDoc}
                 * @deprecated Magic value
                 */
                // @ts-ignore
                setTextureIndex(idx: number /*int*/): void
                // @ts-ignore
                clone(): org.bukkit.material.Step
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}

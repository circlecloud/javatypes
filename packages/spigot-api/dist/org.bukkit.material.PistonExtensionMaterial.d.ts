declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Material data for the piston extension block
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class PistonExtensionMaterial extends org.bukkit.material.MaterialData implements org.bukkit.material.Attachable {
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
                setFacingDirection(face: org.bukkit.block.BlockFace): void
                // @ts-ignore
                getFacing(): org.bukkit.block.BlockFace
                /**
                 * Checks if this piston extension is sticky, and returns true if so
                 * @return true if this piston is "sticky", or false
                 */
                // @ts-ignore
                isSticky(): boolean
                /**
                 * Sets whether or not this extension is sticky
                 * @param sticky true if sticky, otherwise false
                 */
                // @ts-ignore
                setSticky(sticky: boolean): void
                // @ts-ignore
                getAttachedFace(): org.bukkit.block.BlockFace
                // @ts-ignore
                clone(): org.bukkit.material.PistonExtensionMaterial
            }
        }
    }
}

declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Material data for the piston base block
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class PistonBaseMaterial extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional, org.bukkit.material.Redstone {
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * Constructs a PistonBaseMaterial.
                 * @param type the material type to use
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                // @ts-ignore
                setFacingDirection(face: org.bukkit.block.BlockFace): void
                // @ts-ignore
                getFacing(): org.bukkit.block.BlockFace
                // @ts-ignore
                isPowered(): boolean
                /**
                 * Sets the current state of this piston
                 * @param powered true if the piston is extended {#literal &} powered, or false
                 */
                // @ts-ignore
                setPowered(powered: boolean): void
                /**
                 * Checks if this piston base is sticky, and returns true if so
                 * @return true if this piston is "sticky", or false
                 */
                // @ts-ignore
                isSticky(): boolean
                // @ts-ignore
                clone(): org.bukkit.material.PistonBaseMaterial
            }
        }
    }
}

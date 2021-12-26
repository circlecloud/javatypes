declare namespace org {
    namespace bukkit {
        namespace block {
            namespace structure {
                /**
                 * Represents how a {@link org.bukkit.block.Structure} can be rotated.
                 */
                // @ts-ignore
                class StructureRotation extends java.lang.Enum<org.bukkit.block.structure.StructureRotation> {
                    /**
                     * No rotation.
                     */
                    // @ts-ignore
                    public static readonly NONE: org.bukkit.block.structure.StructureRotation
                    /**
                     * Rotated clockwise 90 degrees.
                     */
                    // @ts-ignore
                    public static readonly CLOCKWISE_90: org.bukkit.block.structure.StructureRotation
                    /**
                     * Rotated clockwise 180 degrees.
                     */
                    // @ts-ignore
                    public static readonly CLOCKWISE_180: org.bukkit.block.structure.StructureRotation
                    /**
                     * Rotated counter clockwise 90 degrees.
                     * <br>
                     * Equivalent to rotating clockwise 270 degrees.
                     */
                    // @ts-ignore
                    public static readonly COUNTERCLOCKWISE_90: org.bukkit.block.structure.StructureRotation
                    // @ts-ignore
                    public static values(): org.bukkit.block.structure.StructureRotation[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.bukkit.block.structure.StructureRotation
                }
            }
        }
    }
}

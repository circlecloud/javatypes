declare namespace org {
    namespace bukkit {
        namespace block {
            namespace structure {
                /**
                 * Represents how a {@link org.bukkit.block.Structure} can be mirrored upon
                 * being loaded.
                 */
                // @ts-ignore
                class Mirror extends java.lang.Enum<org.bukkit.block.structure.Mirror> {
                    /**
                     * No mirroring.
                     * <br>
                     * Positive X to Positive Z
                     */
                    // @ts-ignore
                    public static readonly NONE: org.bukkit.block.structure.Mirror
                    /**
                     * Structure is mirrored left to right.
                     * <br>
                     * Similar to looking in a mirror. Positive X to Negative Z
                     */
                    // @ts-ignore
                    public static readonly LEFT_RIGHT: org.bukkit.block.structure.Mirror
                    /**
                     * Structure is mirrored front to back.
                     * <br>
                     * Positive Z to Negative X
                     */
                    // @ts-ignore
                    public static readonly FRONT_BACK: org.bukkit.block.structure.Mirror
                    // @ts-ignore
                    public static values(): org.bukkit.block.structure.Mirror[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.bukkit.block.structure.Mirror
                }
            }
        }
    }
}

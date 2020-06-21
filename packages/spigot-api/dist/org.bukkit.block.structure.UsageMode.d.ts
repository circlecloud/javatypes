declare namespace org {
    namespace bukkit {
        namespace block {
            namespace structure {
                /**
                 * Represents how a {@link org.bukkit.block.Structure} can be used.
                 */
                // @ts-ignore
                class UsageMode extends java.lang.Enum<org.bukkit.block.structure.UsageMode> {
                    /**
                     * The mode used when saving a structure.
                     */
                    // @ts-ignore
                    readonly SAVE: org.bukkit.block.structure.UsageMode
                    /**
                     * The mode used when loading a structure.
                     */
                    // @ts-ignore
                    readonly LOAD: org.bukkit.block.structure.UsageMode
                    /**
                     * Used when saving a structure for easy size calculation. When using this
                     * mode, the Structure name MUST match the name in the second Structure
                     * block that is in {@link UsageMode#SAVE}.
                     */
                    // @ts-ignore
                    readonly CORNER: org.bukkit.block.structure.UsageMode
                    /**
                     * Used to run specific custom functions, which can only be used for certain
                     * Structures. The structure block is removed after this function completes.
                     * The data tags (functions) can be found on the
                     * <a href="http://minecraft.gamepedia.com/Structure_Block#Data">wiki</a>.
                     */
                    // @ts-ignore
                    readonly DATA: org.bukkit.block.structure.UsageMode
                    // @ts-ignore
                    values(): org.bukkit.block.structure.UsageMode[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.bukkit.block.structure.UsageMode
                }
            }
        }
    }
}

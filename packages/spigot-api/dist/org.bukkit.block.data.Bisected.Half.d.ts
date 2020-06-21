declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace Bisected {
                    /**
                     * The half of a vertically bisected block.
                     */
                    // @ts-ignore
                    class Half extends java.lang.Enum<org.bukkit.block.data.Bisected.Half> {
                        /**
                         * The top half of the block, normally with the higher y coordinate.
                         */
                        // @ts-ignore
                        readonly TOP: org.bukkit.block.data.Bisected.Half
                        /**
                         * The bottom half of the block, normally with the lower y coordinate.
                         */
                        // @ts-ignore
                        readonly BOTTOM: org.bukkit.block.data.Bisected.Half
                        // @ts-ignore
                        values(): org.bukkit.block.data.Bisected.Half[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.block.data.Bisected.Half
                    }
                }
            }
        }
    }
}

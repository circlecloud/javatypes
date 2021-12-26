declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'drag' indicates whether a force will be applied on entities moving through
                     * this block.
                     */
                    // @ts-ignore
                    interface BubbleColumn extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'drag' property.
                         * @return the 'part' value
                         */
                        // @ts-ignore
                        isDrag(): boolean
                        /**
                         * Sets the value of the 'drag' property.
                         * @param drag the new 'drag' value
                         */
                        // @ts-ignore
                        setDrag(drag: boolean): void
                    }
                }
            }
        }
    }
}

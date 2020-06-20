declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'signal_fire' denotes whether the fire is extra smokey due to having a hay
                     * bale placed beneath it.
                     */
                    // @ts-ignore
                    interface Campfire extends org.bukkit.block.data.Directional, org.bukkit.block.data.Lightable, org.bukkit.block.data.Waterlogged {
                        /**
                         * Gets the value of the 'signal_fire' property.
                         * @return the 'signal_fire' value
                         */
                        // @ts-ignore
                        isSignalFire(): boolean
                        /**
                         * Sets the value of the 'signal_fire' property.
                         * @param signalFire the new 'signal_fire' value
                         */
                        // @ts-ignore
                        setSignalFire(signalFire: boolean): void
                    }
                }
            }
        }
    }
}

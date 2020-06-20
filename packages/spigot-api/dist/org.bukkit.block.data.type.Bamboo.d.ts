declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'leaves' represents the size of the leaves on this bamboo block.
                     */
                    // @ts-ignore
                    interface Bamboo extends org.bukkit.block.data.Ageable, org.bukkit.block.data.type.Sapling {
                        /**
                         * Gets the value of the 'leaves' property.
                         * @return the 'leaves' value
                         */
                        // @ts-ignore
                        getLeaves(): org.bukkit.block.data.type.Bamboo.Leaves
                        /**
                         * Sets the value of the 'leaves' property.
                         * @param leaves the new 'leaves' value
                         */
                        // @ts-ignore
                        setLeaves(leaves: org.bukkit.block.data.type.Bamboo.Leaves): void
                    }
                }
            }
        }
    }
}

declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'hinge' indicates which hinge this door is attached to and will rotate around
                     * when opened.
                     */
                    // @ts-ignore
                    interface Door extends org.bukkit.block.data.Bisected, org.bukkit.block.data.Directional, org.bukkit.block.data.Openable, org.bukkit.block.data.Powerable {
                        /**
                         * Gets the value of the 'hinge' property.
                         * @return the 'hinge' value
                         */
                        // @ts-ignore
                        getHinge(): org.bukkit.block.data.type.Door.Hinge
                        /**
                         * Sets the value of the 'hinge' property.
                         * @param hinge the new 'hinge' value
                         */
                        // @ts-ignore
                        setHinge(hinge: org.bukkit.block.data.type.Door.Hinge): void
                    }
                }
            }
        }
    }
}

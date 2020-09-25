declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'attachment' denotes how the bell is attached to its block.
                     */
                    // @ts-ignore
                    interface Bell extends org.bukkit.block.data.Directional, org.bukkit.block.data.Powerable {
                        /**
                         * Gets the value of the 'attachment' property.
                         * @return the 'attachment' value
                         */
                        // @ts-ignore
                        getAttachment(): org.bukkit.block.data.type.Bell.Attachment
                        /**
                         * Sets the value of the 'attachment' property.
                         * @param attachment the new 'attachment' value
                         */
                        // @ts-ignore
                        setAttachment(attachment: org.bukkit.block.data.type.Bell.Attachment): void
                    }
                }
            }
        }
    }
}

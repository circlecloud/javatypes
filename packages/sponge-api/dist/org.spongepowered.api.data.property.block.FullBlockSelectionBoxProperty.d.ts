declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace block {
                        /**
                         * A property to represent whether a {@link BlockType} has a full selection
                         * box. That is, the block has a selection box and it occupies the exact volume
                         * of a voxel (the size is (1, 1, 1)). The selection box is the one used to
                         * interact with blocks, which shows up as a black outline on a vanilla client.
                         */
                        // @ts-ignore
                        class FullBlockSelectionBoxProperty extends org.spongepowered.api.data.property.BooleanProperty {
                            /**
                             * Creates a new {@link FullBlockSelectionBoxProperty} with the provided
                             * value.
                             * @param value Whether or not this block has a full bounding box
                             */
                            // @ts-ignore
                            constructor(value: boolean)
                            /**
                             * Creates a new {@link FullBlockSelectionBoxProperty} with the provided
                             * value.
                             * @param value Whether or not this block has a full bounding box
                             * @param operator The operator for comparisons
                             */
                            // @ts-ignore
                            constructor(value: boolean, operator: org.spongepowered.api.data.Property.Operator)
                        }
                    }
                }
            }
        }
    }
}

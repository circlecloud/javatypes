declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace block {
                        /**
                         * A property to represent whether a {@link BlockType} is a "solid cube"
                         * and therefor can be considered to place a {@link BlockTypes#TORCH} on
                         * its side.
                         */
                        // @ts-ignore
                        class SolidCubeProperty extends org.spongepowered.api.data.property.BooleanProperty {
                            /**
                             * Creates a new {@link SolidCubeProperty} with the provided value.
                             * @param value The value of whether this is a solid cube or not
                             */
                            // @ts-ignore
                            constructor(value: boolean)
                            /**
                             * Creates a new {@link SolidCubeProperty} with the provided value.
                             * @param value The value of whether this is a solid cube or not
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

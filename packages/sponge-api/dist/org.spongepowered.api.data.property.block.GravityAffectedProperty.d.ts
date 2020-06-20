declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace block {
                        /**
                         * A {@link Property} that defines whether a {@link BlockType} is affected
                         * by "gravity" such that if a block is placed and there is no block supporting
                         * it, the block will fall.
                         */
                        // @ts-ignore
                        class GravityAffectedProperty extends org.spongepowered.api.data.property.BooleanProperty {
                            /**
                             * Creates a new {@link GravityAffectedProperty} with the provided {@code value}.
                             * @param value The value
                             */
                            // @ts-ignore
                            constructor(value: boolean)
                            /**
                             * Creates a new {@link GravityAffectedProperty} with the provided {@code value}
                             * and {@link org.spongepowered.api.data.Property.Operator comparison operator}.
                             * @param value The value
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

declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace block {
                        /**
                         * A property to signify that the block this property originated from is
                         * a surrogate block for a block that was provided in an environment
                         * (almost always modded), that the block type provider no longer exists.
                         * This property serves to indicate that the surrogate block may function
                         * differently than the original intended block.
                         */
                        // @ts-ignore
                        class SurrogateBlockProperty extends org.spongepowered.api.data.property.BooleanProperty {
                            /**
                             * Creates a new {@link SurrogateBlockProperty}.
                             * @param value  The value of whether a block is a surrogate block
                             */
                            // @ts-ignore
                            constructor(value: boolean)
                            /**
                             * Creates a new {@link SurrogateBlockProperty}.
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

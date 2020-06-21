declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace item {
                        /**
                         * Represents a property on an item that has an efficiency qualifier applied
                         * when mining harvestable blocks. For determining whether a block can be
                         * harvested, use {@link HarvestingProperty}.
                         */
                        // @ts-ignore
                        class EfficiencyProperty extends org.spongepowered.api.data.property.DoubleProperty {
                            /**
                             * Creates a new EfficiencyProperty property for the specified value.
                             * @param value value to match
                             */
                            // @ts-ignore
                            constructor(value: number /*double*/)
                            /**
                             * Creates a new EfficiencyProperty property for the specified value
                             * and operator.
                             * @param value value to match
                             * @param operator the operator to use when comparing with other properties
                             */
                            // @ts-ignore
                            constructor(value: number /*double*/, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Creates a new EfficiencyProperty property for the specified value
                             * and operator.
                             * @param value value to match
                             * @param operator the operator to use when comparing with other properties
                             */
                            // @ts-ignore
                            constructor(value: java.lang.Object | any, operator: org.spongepowered.api.data.Property.Operator)
                        }
                    }
                }
            }
        }
    }
}

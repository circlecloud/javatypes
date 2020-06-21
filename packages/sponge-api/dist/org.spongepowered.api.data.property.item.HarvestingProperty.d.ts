declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace item {
                        /**
                         * Represents a property defining the types of blocks the item can harvest.
                         * <p>Harvestable blocks vary, but if an item can not harvest based on
                         * this property, the mined block will not be harvested (dropped as an item).
                         * This behavior may be changed by events.</p>
                         */
                        // @ts-ignore
                        class HarvestingProperty extends org.spongepowered.api.data.property.AbstractProperty<java.lang.String | string, java.util.Set<org.spongepowered.api.block.BlockType> | Array<org.spongepowered.api.block.BlockType>> {
                            /**
                             * Creates a {@link HarvestingProperty} with a specific set of {@link BlockType}s.
                             * @param value The harvestable block types
                             */
                            // @ts-ignore
                            constructor(value: java.util.Set<org.spongepowered.api.block.BlockType> | Array<org.spongepowered.api.block.BlockType>)
                            /**
                             * Creates a {@link HarvestingProperty} with a specific set of {@link BlockType}s.
                             * @param value The harvestable block types
                             * @param op The operator to use when comparing against other properties
                             */
                            // @ts-ignore
                            constructor(value: java.util.Set<org.spongepowered.api.block.BlockType> | Array<org.spongepowered.api.block.BlockType>, op: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(o: org.spongepowered.api.data.Property<any, any>): number /*int*/
                        }
                    }
                }
            }
        }
    }
}

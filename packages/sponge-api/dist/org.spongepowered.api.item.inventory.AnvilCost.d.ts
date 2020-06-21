declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    /**
                     * The level and material costs for an anvil usage.
                     */
                    // @ts-ignore
                    interface AnvilCost extends org.spongepowered.api.data.DataSerializable {
                        /**
                         * Returns the level cost.
                         * @return The level cost
                         */
                        // @ts-ignore
                        getLevelCost(): number /*int*/
                        /**
                         * Returns the material cost.
                         * @return The material cost
                         */
                        // @ts-ignore
                        getMaterialCost(): number /*int*/
                        /**
                         * Returns a modified copy of the Costs
                         * @param levelCost The new level cost
                         * @return A modified copy of the Costs
                         */
                        // @ts-ignore
                        withLevelCost(levelCost: number /*int*/): org.spongepowered.api.item.inventory.AnvilCost
                        /**
                         * Returns a modified copy of the Costs
                         * @param materialCost The new material cost
                         * @return A modified copy of the Costs
                         */
                        // @ts-ignore
                        withMaterialCost(materialCost: number /*int*/): org.spongepowered.api.item.inventory.AnvilCost
                    }
                }
            }
        }
    }
}

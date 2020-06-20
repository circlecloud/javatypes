declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace merchant {
                    namespace TradeOfferGenerator {
                        /**
                         * A simple builder to create a {@link TradeOfferGenerator}.
                         */
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.item.merchant.TradeOfferGenerator, org.spongepowered.api.item.merchant.TradeOfferGenerator.Builder> {
                            /**
                             * Sets the {@link ItemStackGenerator} for creating the primary item
                             * to be bought by the merchant.
                             * @param generator The generator that will create the first purchased
                             *      itemstack
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            setPrimaryItemGenerator(generator: org.spongepowered.api.item.inventory.ItemStackGenerator): org.spongepowered.api.item.merchant.TradeOfferGenerator.Builder
                            /**
                             * Sets the second {@link ItemStackGenerator} for creating the secondary
                             * item to be bought by the merchant.
                             * @param generator The generator that will create (if not null) the
                             *       second purchased itemstack
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            setSecondItemGenerator(generator: org.spongepowered.api.item.inventory.ItemStackGenerator): org.spongepowered.api.item.merchant.TradeOfferGenerator.Builder
                            /**
                             * Sets the buying {@link ItemStackGenerator} for creating the selling
                             * item that players are buying.
                             * @param sellingGenerator The generator that will create the selling
                             *       item
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            setSellingGenerator(sellingGenerator: org.spongepowered.api.item.inventory.ItemStackGenerator): org.spongepowered.api.item.merchant.TradeOfferGenerator.Builder
                            /**
                             * Sets the chance when {@link Random#nextDouble()} is called where
                             * if the double is greater than the desired experience chance, the
                             * generated {@link TradeOffer} will grant experience upon a
                             * successful trade.
                             * @param experienceChance The experience chance
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            experienceChance(experienceChance: number /*double*/): org.spongepowered.api.item.merchant.TradeOfferGenerator.Builder
                            /**
                             * Sets the {@link VariableAmount} of starting uses for the generated
                             * {@link TradeOffer}.
                             * @param amount The variable amount of starting uses
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            startingUses(amount: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.item.merchant.TradeOfferGenerator.Builder
                            /**
                             * Sets the {@link VariableAmount} of maximum uses of the generated
                             * {@link TradeOffer}.
                             * @param amount The variable amount of maximum uses
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            maxUses(amount: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.item.merchant.TradeOfferGenerator.Builder
                            /**
                             * Builds a new {@link TradeOfferGenerator}.
                             * @return The newly created generator
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.item.merchant.TradeOfferGenerator
                        }
                    }
                }
            }
        }
    }
}

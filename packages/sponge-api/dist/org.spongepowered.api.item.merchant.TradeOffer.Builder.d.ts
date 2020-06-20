declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace merchant {
                    namespace TradeOffer {
                        /**
                         * Represents a builder to generate immutable {@link TradeOffer}s.
                         */
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.data.persistence.DataBuilder<org.spongepowered.api.item.merchant.TradeOffer> {
                            /**
                             * <p>Sets the first selling item of the trade offer to be
                             * generated.</p>
                             * <p>Trade offers require at least one item to be generated.</p>
                             * @param item The first item to buy
                             * @return This builder
                             */
                            // @ts-ignore
                            firstBuyingItem(item: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.merchant.TradeOffer.Builder
                            /**
                             * Sets the second selling item of the trade offer to be generated.
                             * @param item The second item to buy
                             * @return This builder
                             */
                            // @ts-ignore
                            secondBuyingItem(item: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.merchant.TradeOffer.Builder
                            /**
                             * Sets the selling item of the trade offer to be generated.
                             * @param item The item to sell
                             * @return This builder
                             */
                            // @ts-ignore
                            sellingItem(item: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.merchant.TradeOffer.Builder
                            /**
                             * Sets the existing uses of the trade offer to be generated. A trade
                             * offer will become unusable when the uses surpasses the max uses.
                             * @param uses The uses
                             * @return This builder
                             */
                            // @ts-ignore
                            uses(uses: number /*int*/): org.spongepowered.api.item.merchant.TradeOffer.Builder
                            /**
                             * Sets the maximum uses the generated trade offer will have. A trade
                             * offer will become unusable when the uses surpasses the max uses.
                             * @param maxUses The maximum uses of the trade offer
                             * @return This builder
                             */
                            // @ts-ignore
                            maxUses(maxUses: number /*int*/): org.spongepowered.api.item.merchant.TradeOffer.Builder
                            /**
                             * Sets the trade offer to be generated to grant experience upon use.
                             * @param experience Whether the offer will grant experience
                             * @return This builder
                             */
                            // @ts-ignore
                            canGrantExperience(experience: boolean): org.spongepowered.api.item.merchant.TradeOffer.Builder
                            /**
                             * Creates a new TradeOffer instance with the current state of the
                             * builder.
                             * @return A new trade offer instance
                             * @throws IllegalStateException If the resulting trade offer would be
                             *       invalid
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.item.merchant.TradeOffer
                            /**
                             * Sets all the settings of this builder with the provided trade offer
                             * as a blueprint.
                             * @param offer The offer to copy
                             * @return This builder
                             */
                            // @ts-ignore
                            from(offer: org.spongepowered.api.item.merchant.TradeOffer): org.spongepowered.api.item.merchant.TradeOffer.Builder
                            /**
                             * Clears all settings of this builder.
                             * @return This builder
                             */
                            // @ts-ignore
                            reset(): org.spongepowered.api.item.merchant.TradeOffer.Builder
                        }
                    }
                }
            }
        }
    }
}

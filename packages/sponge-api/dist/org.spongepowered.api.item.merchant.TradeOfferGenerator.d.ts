declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace merchant {
                    /**
                     * Represents a generator to create {@link TradeOffer}s with a bit of
                     * randomization based on {@link ItemStackGenerator}s for populating
                     * {@link ItemStack}s and finally generating a {@link TradeOffer}.
                     * <p>The primary use of this, and why the {@link Random} must be provided as
                     * part of the {@link Function} signature is that during multiple world
                     * instances, there's different {@link Random} instances instantiated, and more
                     * can be provided without the necessity to change the generator. One advantage
                     * to using a generator is the ability to provide some "randomization" or
                     * "chance" on the various aspects of the generated {@link TradeOffer} versus
                     * creating a static non-changing offer. Normally, the vanilla
                     * {@link TradeOffer}s are using a similar generator with limited scopes of
                     * what the {@link ItemStack} can be customized as.</p>
                     */
                    // @ts-ignore
                    interface TradeOfferGenerator extends java.util.function.Function<java.util.Random, org.spongepowered.api.item.merchant.TradeOffer>, org.spongepowered.api.item.merchant.TradeOfferListMutator {
                        /**
                         * Gets a new {@link Builder} to create a new {@link TradeOfferGenerator}.
                         * @return The new builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.item.merchant.TradeOfferGenerator.Builder
                        // @ts-ignore
                        accept(owner: org.spongepowered.api.item.merchant.Merchant, tradeOffers: java.util.List<org.spongepowered.api.item.merchant.TradeOffer> | Array<org.spongepowered.api.item.merchant.TradeOffer>, random: java.util.Random): void
                    }
                }
            }
        }
    }
}

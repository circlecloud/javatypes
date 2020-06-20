declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace merchant {
                    // @ts-ignore
                    interface TradeOfferListMutator {
                        /**
                         * Mutates the provided {@link List list} of {@link TradeOffer}s
                         * with the provided {@link Merchant} and {@link Random} to provide
                         * possible contextualized information.
                         * @param owner The owner of the list
                         * @param tradeOffers The trade offers currently
                         * @param random The random to use for random number generation
                         */
                        // @ts-ignore
                        accept(owner: org.spongepowered.api.item.merchant.Merchant, tradeOffers: Array<org.spongepowered.api.item.merchant.TradeOffer>, random: java.util.Random): void
                    }
                }
            }
        }
    }
}

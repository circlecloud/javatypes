declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * An {@link DataManipulator} handling the {@link TradeOffer}s that
                             * can be offered to {@link Humanoid}s from {@link Merchant}s such as
                             * {@link Villager}s.
                             */
                            // @ts-ignore
                            interface TradeOfferData extends org.spongepowered.api.data.manipulator.mutable.ListData<org.spongepowered.api.item.merchant.TradeOffer, org.spongepowered.api.data.manipulator.mutable.entity.TradeOfferData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableTradeOfferData> {
                                /**
                                 * Gets the {@link ListValue} of {@link TradeOffer}s that can be
                                 * offered.
                                 * @return The list value of trade offers
                                 * @see Keys#TRADE_OFFERS
                                 */
                                // @ts-ignore
                                tradeOffers(): org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.item.merchant.TradeOffer>
                            }
                        }
                    }
                }
            }
        }
    }
}

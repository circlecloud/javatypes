declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the {@link TradeOffer}s that
                             * can be offered to {@link Humanoid}s from {@link Merchant}s such as
                             * {@link Villager}s.
                             */
                            // @ts-ignore
                            interface ImmutableTradeOfferData extends org.spongepowered.api.data.manipulator.immutable.ImmutableListData<org.spongepowered.api.item.merchant.TradeOffer, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableTradeOfferData, org.spongepowered.api.data.manipulator.mutable.entity.TradeOfferData> {
                                /**
                                 * Gets the {@link ImmutableListValue} of {@link TradeOffer}s that can be
                                 * offered.
                                 * @return The immutable list value of trade offers
                                 */
                                // @ts-ignore
                                tradeOffers(): org.spongepowered.api.data.value.immutable.ImmutableListValue<org.spongepowered.api.item.merchant.TradeOffer>
                            }
                        }
                    }
                }
            }
        }
    }
}

declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace merchant {
                    /**
                     * <p>Represents a trade offer that a {@link Merchant} may offer a
                     * {@link Humanoid}.</p>
                     * <p>TradeOffers usually have a limited amount of times they can be used.</p>
                     * <p>Also, trade offers are not guaranteed to have two buying items.</p>
                     */
                    // @ts-ignore
                    interface TradeOffer extends org.spongepowered.api.data.DataSerializable {
                        /**
                         * Creates a new {@link Builder} to build a {@link TradeOffer}.
                         * @return The new builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.item.merchant.TradeOffer.Builder
                        /**
                         * Gets the first buying item.
                         * <p>The first buying item is an item that the customer is selling to the
                         * merchant in exchange for {@link #getSellingItem()}.</p>
                         * @return The first buying item
                         */
                        // @ts-ignore
                        getFirstBuyingItem(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                        /**
                         * Returns whether this trade offer has a second item the merchant is buying
                         * from the customer.
                         * @return True if there is a second buying item
                         */
                        // @ts-ignore
                        hasSecondItem(): boolean
                        /**
                         * <p>Gets the second buying item.</p>
                         * <p>The second buying item is an item that the customer is selling to the
                         * merchant, along with the {@link #getFirstBuyingItem()}, in exchange for
                         * {@link #getSellingItem()}.</p>
                         * @return The second buying item, if available
                         */
                        // @ts-ignore
                        getSecondBuyingItem(): java.util.Optional<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                        /**
                         * Gets the selling item the {@link Merchant} will give to the customer
                         * often in exchange for a single item or sometimes, two items from the
                         * following methods: {@link #getFirstBuyingItem()} and
                         * {@link #getSecondBuyingItem}.
                         * @return The selling item
                         */
                        // @ts-ignore
                        getSellingItem(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                        /**
                         * <p>Gets the current uses of this offer.</p>
                         * <p>Usually, the uses of an offer are limited by the amount of
                         * {@link #getMaxUses()}. Once the uses reaches the max uses, the offer may
                         * temporarily become disabled.</p>
                         * @return The current uses of this trade offer
                         */
                        // @ts-ignore
                        getUses(): int
                        /**
                         * <p>Gets the current maximum uses of this offer.</p>
                         * <p>Usually, the uses of an offer are limited by the amount of maximum
                         * uses. Once the uses reaches the max uses, the offer may temporarily
                         * become disabled.</p>
                         * @return The maximum uses of this trade offer
                         */
                        // @ts-ignore
                        getMaxUses(): int
                        /**
                         * Checks if this trade offer has indeed passed the time of which the uses
                         * surpassed the maximum uses.
                         * @return True if the uses have surpassed the maximum uses
                         */
                        // @ts-ignore
                        hasExpired(): boolean
                        /**
                         * Gets whether this trade offer will grant experience upon usage or not.
                         * @return True if using this trade offer will grant experience
                         */
                        // @ts-ignore
                        doesGrantExperience(): boolean
                    }
                }
            }
        }
    }
}

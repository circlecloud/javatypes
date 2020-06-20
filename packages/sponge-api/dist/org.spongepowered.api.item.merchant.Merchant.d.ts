declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace merchant {
                    /**
                     * Represents a Merchant which can offer trades to customers.
                     */
                    // @ts-ignore
                    interface Merchant extends org.spongepowered.api.data.DataHolder, org.spongepowered.api.item.inventory.Carrier, org.spongepowered.api.world.Locatable {
                        /**
                         * Gets the currently trading customer with this merchant.
                         * @return The currently trading customer if available
                         */
                        // @ts-ignore
                        getCustomer(): java.util.Optional<org.spongepowered.api.entity.living.Humanoid>
                        /**
                         * Sets the currently trading customer with this merchant.
                         * <p>If the humanoid entity is available, a new trading window may open
                         * with this merchant.</p>
                         * @param humanoid The humanoid to trade with
                         */
                        // @ts-ignore
                        setCustomer(humanoid: org.spongepowered.api.entity.living.Humanoid): void
                        /**
                         * Gets a copy of the used {@link TradeOfferData} containing all available
                         * {@link TradeOffer}s this {@link Merchant} may use.
                         * @return A copy of the trade offer data
                         */
                        // @ts-ignore
                        getTradeOfferData(): org.spongepowered.api.data.manipulator.mutable.entity.TradeOfferData
                    }
                }
            }
        }
    }
}

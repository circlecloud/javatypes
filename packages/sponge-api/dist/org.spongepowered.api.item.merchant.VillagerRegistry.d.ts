declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace merchant {
                    // @ts-ignore
                    interface VillagerRegistry {
                        /**
                         * Gets an immutable {@link Multimap} of the {@link Career}'s registered
                         * {code level} to {@link TradeOfferListMutator}s. Note that the map is
                         * immutable and cannot be modified directly.
                         * @param career The career
                         * @return The immutable multimap
                         */
                        // @ts-ignore
                        getTradeOfferLevelMap(career: org.spongepowered.api.data.type.Career): object
                        /**
                         * Gets the available {@link TradeOfferListMutator}s for the desired
                         * {@link Career} and {@code level}.
                         * @param career The career
                         * @param level The level
                         * @return The collection of trade offer mutators, if available
                         */
                        // @ts-ignore
                        getMutatorsForCareer(career: org.spongepowered.api.data.type.Career, level: number /*int*/): Array<org.spongepowered.api.item.merchant.TradeOfferListMutator>
                        /**
                         * Adds the provided {@link TradeOfferListMutator} for the given
                         * {@link Career} and {@code level}. Note that the level
                         * must be at least 1. There can be multiple {@link TradeOfferListMutator}s
                         * per level.
                         * @param career The career
                         * @param level The level
                         * @param mutator The mutator to register
                         * @return This registry, for chaining
                         */
                        // @ts-ignore
                        addMutator(career: org.spongepowered.api.data.type.Career, level: number /*int*/, mutator: org.spongepowered.api.item.merchant.TradeOfferListMutator): org.spongepowered.api.item.merchant.VillagerRegistry
                        /**
                         * Adds the provided {@link TradeOfferListMutator}s for the given
                         * {@link Career} and {@code level}. Note that the level
                         * must be at least 1. There can be multiple {@link TradeOfferListMutator}s
                         * per level.
                         * @param career The career
                         * @param level The level
                         * @param mutator The mutator to register
                         * @param mutators The additional mutators
                         * @return This registry, for chaining
                         */
                        // @ts-ignore
                        addMutators(career: org.spongepowered.api.data.type.Career, level: number /*int*/, mutator: org.spongepowered.api.item.merchant.TradeOfferListMutator, ...mutators: org.spongepowered.api.item.merchant.TradeOfferListMutator[]): org.spongepowered.api.item.merchant.VillagerRegistry
                        /**
                         * Sets the provided {@link TradeOfferListMutator} for the given
                         * {@link Career} and {@code level}. Note that the level
                         * must be at least 1. There can be multiple {@link TradeOfferListMutator}s
                         * per level. Any previously provided {@link TradeOfferListMutator}s will
                         * be erased.
                         * @param career The career
                         * @param level The level
                         * @param mutators The mutators to register
                         * @return This registry, for chaining
                         */
                        // @ts-ignore
                        setMutators(career: org.spongepowered.api.data.type.Career, level: number /*int*/, mutators: java.util.List<org.spongepowered.api.item.merchant.TradeOfferListMutator> | Array<org.spongepowered.api.item.merchant.TradeOfferListMutator>): org.spongepowered.api.item.merchant.VillagerRegistry
                        /**
                         * Sets the provided {@link TradeOfferListMutator} for the given
                         * {@link Career} and {@code level}. Note that the level
                         * must be at least 1. There can be multiple {@link TradeOfferListMutator}s
                         * per level. Any previously provided {@link TradeOfferListMutator}s will
                         * be erased.
                         * @param career The career
                         * @param mutatorMap The mutator map
                         * @return This registry, for chaining
                         */
                        // @ts-ignore
                        setMutators(career: org.spongepowered.api.data.type.Career, mutatorMap: object): org.spongepowered.api.item.merchant.VillagerRegistry
                        /**
                         * Generates a new {@link List} of {@link TradeOffer}s based on the
                         * provided {@link Career}, {@code level}, and {@link Random}.
                         * @param merchant The merchant
                         * @param career The career
                         * @param level The level
                         * @param random The random
                         * @return The generated list of trade offers
                         */
                        // @ts-ignore
                        generateTradeOffers(merchant: org.spongepowered.api.item.merchant.Merchant, career: org.spongepowered.api.data.type.Career, level: number /*int*/, random: java.util.Random): Array<org.spongepowered.api.item.merchant.TradeOffer>
                        /**
                         * Populates the provided {@link List} of {@link TradeOffer}s with
                         * potentially new {@link TradeOffer}s based on the
                         * {@link TradeOfferListMutator}s and {@code level}. If there are no
                         * {@link TradeOfferListMutator}s registered for the desired level
                         * and {@link Career}, the list remains unmodified.
                         * @param merchant The merchant
                         * @param currentOffers The current offers
                         * @param career The career
                         * @param level The level
                         * @param random The random to use
                         * @return The list of offers modified
                         */
                        // @ts-ignore
                        populateOffers(merchant: org.spongepowered.api.item.merchant.Merchant, currentOffers: java.util.List<org.spongepowered.api.item.merchant.TradeOffer> | Array<org.spongepowered.api.item.merchant.TradeOffer>, career: org.spongepowered.api.data.type.Career, level: number /*int*/, random: java.util.Random): Array<org.spongepowered.api.item.merchant.TradeOffer>
                    }
                }
            }
        }
    }
}

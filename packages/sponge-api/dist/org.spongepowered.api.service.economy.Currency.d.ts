declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace economy {
                    /**
                     * Represents a form of currency. At least one type of currency is always
                     * supported.
                     * <p>Unlike other {@link CatalogType}s, Currency has no predefined
                     * values. Unless a plugin has specific knowledge of a particular currency
                     * provided by an economy plugin, {@link EconomyService#getDefaultCurrency()}
                     * should usually be used.</p>
                     * <p>Depending on the provider of the {@link EconomyService}, more currencies may be available.</p>
                     */
                    // @ts-ignore
                    interface Currency extends org.spongepowered.api.CatalogType {
                        /**
                         * The currency's display name, in singular form. Ex: Dollar.
                         * <p>This should be preferred over {@link CatalogType#getName()}
                         * for display purposes.</p>
                         * @return displayName of the currency singular
                         */
                        // @ts-ignore
                        getDisplayName(): org.spongepowered.api.text.Text
                        /**
                         * The currency's display name in plural form. Ex: Dollars.
                         * <p>Not all currencies will have a plural name that differs from the
                         * display name.</p>
                         * @return displayName of the currency plural
                         */
                        // @ts-ignore
                        getPluralDisplayName(): org.spongepowered.api.text.Text
                        /**
                         * The currency's symbol. Ex. $
                         * @return symbol of the currency
                         */
                        // @ts-ignore
                        getSymbol(): org.spongepowered.api.text.Text
                        /**
                         * Formats the given amount using the default number of fractional digits.
                         * <p>Should include the symbol if it is present</p>
                         * @param amount The amount to format
                         * @return String formatted amount
                         */
                        // @ts-ignore
                        format(amount: java.math.BigDecimal): org.spongepowered.api.text.Text
                        /**
                         * Formats the given amount using the specified number of fractional digits.
                         * <p>Should include the symbol if it is present</p>
                         * @param amount The amount to format
                         * @param numFractionDigits The numer of fractional digits to use
                         * @return String formatted amount.
                         */
                        // @ts-ignore
                        format(amount: java.math.BigDecimal, numFractionDigits: number /*int*/): org.spongepowered.api.text.Text
                        /**
                         * This is the default number of fractional digits that is utilized for
                         * formatting purposes.
                         * @return defaultFractionDigits utilized.
                         */
                        // @ts-ignore
                        getDefaultFractionDigits(): number /*int*/
                        /**
                         * Returns true if this currency is the default currency for the economy,
                         * otherwise false.
                         * @return true if this is the default currency
                         */
                        // @ts-ignore
                        isDefault(): boolean
                    }
                }
            }
        }
    }
}

declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace economy {
                    namespace account {
                        /**
                         * Represents an account, which stores amounts of various {@link Currency currencies}.
                         * <p>Accounts come in two varieties: {@link UniqueAccount user accounts}
                         * and {@link VirtualAccount} virtual accounts.
                         * Unique accounts are bound to a {@link UUID}, usually of a particular
                         * {@link User}'s {@link GameProfile}.
                         * Virtual accounts are identified by a String identifier, which may have any
                         * value. They are not tied to any {@link Entity}, player or otherwise. Virtual
                         * accounts may be used for purposes such as bank accounts, non-player
                         * {@link Entity} accounts, or other things.</p>
                         */
                        // @ts-ignore
                        interface Account extends org.spongepowered.api.service.context.Contextual {
                            /**
                             * Gets the display name for this account.
                             * <p>This should be used by plugins to get a human-readable name for an
                             * account, regardless of the specific type ({@link UniqueAccount} or
                             * {@link VirtualAccount}).</p>
                             * <p>Its contents are dependent on the provider of {@link EconomyService}.
                             * For example, an economy plugin could allow players to configure the
                             * display name of their account</p>.
                             * @return The display name for this account
                             */
                            // @ts-ignore
                            getDisplayName(): org.spongepowered.api.text.Text
                            /**
                             * Gets the default balance of this account for the specified
                             * {@link Currency}.
                             * <p>The default balance is used when the balance is retrieved for the
                             * first time for a given {@link Currency} on this account, or if no
                             * balance is available for the {@link Context}s used when retrieving
                             * a balance.</p>
                             * @param currency the currency to get the default balance for.
                             * @return The default balance for the specified {#link Currency}.
                             */
                            // @ts-ignore
                            getDefaultBalance(currency: org.spongepowered.api.service.economy.Currency): java.math.BigDecimal
                            /**
                             * Returns whether this account has a set balance for the specified
                             * {@link Currency}, with the specified {@link Context}s.
                             * <p>If this method returns <code>false</code>, then
                             * {@link #getDefaultBalance(Currency)} will be used when
                             * retrieving a balance for the specified {@link Currency} with
                             * the specified {@link Context}s.</p>
                             * @param currency The {#link Currency} to determine if a balance is set for
                             * @param contexts The {#link Context}s to use with the {@link Currency}
                             * @return Whether this account has a set balance for the specified
                             *      {#link Currency} and {@link Context}s
                             */
                            // @ts-ignore
                            hasBalance(currency: org.spongepowered.api.service.economy.Currency, contexts: Array<org.spongepowered.api.service.context.Context>): boolean
                            /**
                             * Returns whether this account has a set balance for the specified
                             * {@link Currency}, with the current active contexts.
                             * <p>If this method returns <code>false</code>, then
                             * {@link #getDefaultBalance(Currency)} will be used when retrieving
                             * a balance for the specifid {@link Currency} with
                             * the current active contexts</p>.
                             * @param currency The {#link Currency} to determine if a balance is set for.
                             * @return Whether this account has a set balance for the specified
                             *      {#link Currency} and current active contexts.
                             */
                            // @ts-ignore
                            hasBalance(currency: org.spongepowered.api.service.economy.Currency): boolean
                            /**
                             * Returns a {@link BigDecimal} representative of the balance stored within this
                             * {@link Account} for the {@link Currency} given and the set of {@link Context}s.
                             * <p>The default result when the account does not have a balance of the
                             * given {@link Currency} should be {@link BigDecimal#ZERO}.</p>
                             * <p>The balance may be unavailable depending on the set of
                             * {@link Context}s used.</p>
                             * @param currency a {#link Currency} to check the balance of
                             * @param contexts a set of contexts to check the balance against
                             * @return The value for the specified {#link Currency} with
                             *      the specified {@link Context}s.
                             */
                            // @ts-ignore
                            getBalance(currency: org.spongepowered.api.service.economy.Currency, contexts: Array<org.spongepowered.api.service.context.Context>): java.math.BigDecimal
                            /**
                             * Returns a {@link BigDecimal} representative of the balance stored
                             * within this {@link Account} for the {@link Currency} given, with
                             * the current active contexts.
                             * <p>The default result when the account does not have a balance of the
                             * given {@link Currency} will be {@link #getDefaultBalance(Currency)}.</p>
                             * @param currency a {#link Currency} to check the balance of
                             * @return the value for the specified {#link Currency}.
                             */
                            // @ts-ignore
                            getBalance(currency: org.spongepowered.api.service.economy.Currency): java.math.BigDecimal
                            /**
                             * Returns a {@link Map} of all currently set balances the account holds
                             * within the set of {@link Context}s.
                             * <p>Amounts may differ depending on the {@link Context}s specified and
                             * the implementation. The set of {@link Context}s may be empty.</p>
                             * <p>{@link Currency} amounts which are 0 may or may not be included in
                             * the returned mapping.</p>
                             * <p>Changes to the returned {@link Map} will not be reflected in
                             * the underlying {@link Account}. See
                             * {@link #setBalance(Currency, BigDecimal, Cause, Set)}  to set values.</p>
                             * @param contexts the set of {#link Context}s to use with the
                             *      specified amounts
                             * @return A {#link Map} of {@link Currency} to {@link BigDecimal} amounts
                             *      that this account holds
                             */
                            // @ts-ignore
                            getBalances(contexts: Array<org.spongepowered.api.service.context.Context>): java.util.Map<org.spongepowered.api.service.economy.Currency, java.math.BigDecimal>
                            /**
                             * Returns a {@link Map} of all currently set balances the account holds
                             * within the current active {@link Context}s.2
                             * <p>Amounts may differ depending on the {@link Context}s specified and
                             * the implementation. The set of {@link Context}s may be empty.</p>
                             * <p>{@link Currency} amounts which are 0 may or may not be included in
                             * the returned mapping.</p>
                             * <p>Changes to the returned {@link Map} will not be reflected in
                             * the underlying {@link Account} and may result in runtime exceptions
                             * depending on implementation. See
                             * {@link #setBalance(Currency, BigDecimal, Cause, Set)}  to set values.</p>
                             * @return A {#link Map} of {@link Currency} to {@link BigDecimal} amounts
                             *      that this account holds
                             */
                            // @ts-ignore
                            getBalances(): java.util.Map<org.spongepowered.api.service.economy.Currency, java.math.BigDecimal>
                            /**
                             * Sets the balance for this account to the specified amount for
                             * the specified {@link Currency}, with the specified set of {@link Context}s.
                             * <p>Negative balances may or may not be supported depending on
                             * the {@link Currency} specified and the implementation.</p>
                             * @param currency The {#link Currency} to set the balance for
                             * @param amount The amount to set for the specified {#link Currency}
                             * @param cause The {#link Cause} for the transaction
                             * @param contexts The set of {#link Context}s to use with the
                             *      specified {@link Currency}
                             * @return The result of the transaction
                             */
                            // @ts-ignore
                            setBalance(currency: org.spongepowered.api.service.economy.Currency, amount: java.math.BigDecimal, cause: org.spongepowered.api.event.cause.Cause, contexts: Array<org.spongepowered.api.service.context.Context>): org.spongepowered.api.service.economy.transaction.TransactionResult
                            /**
                             * Sets the balance for this account to the specified amount for the
                             * specified {@link Currency}, with the current active {@link Context}s.
                             * <p>Negative balances may or may not be supported depending on
                             * the {@link Currency} specified and the implementation.</p>
                             * @param currency The {#link Currency} to set the balance for
                             * @param amount The amount to set for the specified {#link Currency}
                             * @param cause The {#link Cause} for the transaction
                             * @return The result of the transaction
                             */
                            // @ts-ignore
                            setBalance(currency: org.spongepowered.api.service.economy.Currency, amount: java.math.BigDecimal, cause: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.service.economy.transaction.TransactionResult
                            /**
                             * Resets the balances for all {@link Currency}s used on this account
                             * to their default values ({@link #getDefaultBalance(Currency)}),
                             * using the specified {@link Context}s.
                             * @param cause The {#link Cause} for the transaction
                             * @param contexts the {#link Context}s to use when resetting the balances.
                             * @return A map of {#link Currency} to {@link TransactionResult}. Each
                             *      entry represents the result of resetting a particular currency.
                             */
                            // @ts-ignore
                            resetBalances(cause: org.spongepowered.api.event.cause.Cause, contexts: Array<org.spongepowered.api.service.context.Context>): java.util.Map<org.spongepowered.api.service.economy.Currency, org.spongepowered.api.service.economy.transaction.TransactionResult>
                            /**
                             * Resets the balances for all {@link Currency}s used on this account to
                             * their default values ({@link #getDefaultBalance(Currency)}), using
                             * the current active {@link Context}.
                             * @param cause The {#link Cause} for the transaction
                             * @return A map of {#link Currency} to {@link TransactionResult}. Each
                             *      entry represents the result of resetting a particular currency
                             */
                            // @ts-ignore
                            resetBalances(cause: org.spongepowered.api.event.cause.Cause): java.util.Map<org.spongepowered.api.service.economy.Currency, org.spongepowered.api.service.economy.transaction.TransactionResult>
                            /**
                             * Resets the balance for the specified {@link Currency} to its default
                             * value ({@link #getDefaultBalance(Currency)}), using
                             * the specified {@link Context}s.
                             * @param currency The {#link Currency} to reset the balance for
                             * @param cause The {#link Cause} for the transaction
                             * @param contexts The {#link Context}s to use when resetting the balance
                             * @return The result of the transaction
                             */
                            // @ts-ignore
                            resetBalance(currency: org.spongepowered.api.service.economy.Currency, cause: org.spongepowered.api.event.cause.Cause, contexts: Array<org.spongepowered.api.service.context.Context>): org.spongepowered.api.service.economy.transaction.TransactionResult
                            /**
                             * Resets the balance for the specified {@link Currency} to its default
                             * value ({@link #getDefaultBalance(Currency)}),
                             * using the current active {@link Context}s.
                             * @param currency The {#link Currency} to reset the balance for
                             * @param cause The {#link Cause} for the transaction
                             * @return The result of the transaction
                             */
                            // @ts-ignore
                            resetBalance(currency: org.spongepowered.api.service.economy.Currency, cause: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.service.economy.transaction.TransactionResult
                            /**
                             * Deposits the specified amount of the specified {@link Currency} to
                             * this account, using the specified {@link Context}s.
                             * @param currency The {#link Currency} to deposit the specified amount for
                             * @param amount The amount to deposit for the specified {#link Currency}
                             * @param cause The {#link Cause} for the transaction
                             * @param contexts the {#link Context}s to use with the
                             *      specified {@link Currency}
                             * @return The result of the transaction
                             */
                            // @ts-ignore
                            deposit(currency: org.spongepowered.api.service.economy.Currency, amount: java.math.BigDecimal, cause: org.spongepowered.api.event.cause.Cause, contexts: Array<org.spongepowered.api.service.context.Context>): org.spongepowered.api.service.economy.transaction.TransactionResult
                            /**
                             * Deposits the given amount of the specified {@link Currency} to
                             * this account, using the current active {@link Context}s.
                             * @param currency The {#link Currency} to deposit the specified amount for
                             * @param amount The amount to deposit for the specified {#link Currency}
                             * @param cause The {#link Cause} for the transaction
                             * @return The result of the transaction
                             */
                            // @ts-ignore
                            deposit(currency: org.spongepowered.api.service.economy.Currency, amount: java.math.BigDecimal, cause: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.service.economy.transaction.TransactionResult
                            /**
                             * Withdraws the specified amount of the specified {@link Currency} from
                             * this account, using the specified {@link Context}s.
                             * @param currency The {#link Currency} to deposit the specified amount for
                             * @param amount The amount to deposit for the specified {#link Currency}
                             * @param cause The {#link Cause} for the transaction
                             * @param contexts The {#link Context}s to use with the
                             *      specified {@link Currency}
                             * @return The result of the transaction
                             */
                            // @ts-ignore
                            withdraw(currency: org.spongepowered.api.service.economy.Currency, amount: java.math.BigDecimal, cause: org.spongepowered.api.event.cause.Cause, contexts: Array<org.spongepowered.api.service.context.Context>): org.spongepowered.api.service.economy.transaction.TransactionResult
                            /**
                             * Withdraws the specified amount of the specified {@link Currency} from
                             * this account, using the current active {@link Context}s.
                             * @param currency The {#link Currency} to deposit the specified amount for
                             * @param amount The amount to deposit for the specified {#link Currency}
                             * @param cause The {#link Cause} for the transaction
                             * @return The result of the transaction
                             */
                            // @ts-ignore
                            withdraw(currency: org.spongepowered.api.service.economy.Currency, amount: java.math.BigDecimal, cause: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.service.economy.transaction.TransactionResult
                            /**
                             * Transfers the specified amount of the specified {@link Currency}
                             * from this account the destination account,
                             * using the specified {@link Context}s.
                             * <p>This operation is a merged {@link #withdraw(Currency, BigDecimal, Cause, Set)}
                             * from this account with a {@link #deposit(Currency, BigDecimal, Cause, Set)}
                             * into the specified account.</p>
                             * @param to the Account to transfer the amounts to.
                             * @param currency The {#link Currency} to transfer the specified amount for
                             * @param amount The amount to transfer for the specified {#link Currency}
                             * @param cause The {#link Cause} for the transaction
                             * @param contexts The {#link Context}s to use with the
                             *      specified {@link Currency} and account
                             * @return A {#link TransferResult} representative of the effects of
                             *      the operation
                             */
                            // @ts-ignore
                            transfer(to: org.spongepowered.api.service.economy.account.Account, currency: org.spongepowered.api.service.economy.Currency, amount: java.math.BigDecimal, cause: org.spongepowered.api.event.cause.Cause, contexts: Array<org.spongepowered.api.service.context.Context>): org.spongepowered.api.service.economy.transaction.TransferResult
                            /**
                             * Transfers the specified amount of the specified {@link Currency}
                             * from this account the destination account,
                             * using the current active {@link Context}s.
                             * <p>This operation is a merged {@link #withdraw(Currency, BigDecimal, Cause, Set)}
                             * from this account with a {@link #deposit(Currency, BigDecimal, Cause, Set)}
                             * into the specified account.</p>
                             * @param to the Account to transfer the amounts to.
                             * @param currency The {#link Currency} to transfer the specified amount for
                             * @param amount The amount to transfer for the specified {#link Currency}
                             * @param cause The {#link Cause} for the transaction
                             * @return A {#link TransferResult} representative of the effects of the
                             *      operation
                             */
                            // @ts-ignore
                            transfer(to: org.spongepowered.api.service.economy.account.Account, currency: org.spongepowered.api.service.economy.Currency, amount: java.math.BigDecimal, cause: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.service.economy.transaction.TransferResult
                        }
                    }
                }
            }
        }
    }
}

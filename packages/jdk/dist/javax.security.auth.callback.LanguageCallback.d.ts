declare namespace javax {
    namespace security {
        namespace auth {
            namespace callback {
                /**
                 * <p> Underlying security services instantiate and pass a
                 * {@code LanguageCallback} to the {@code handle}
                 * method of a {@code CallbackHandler} to retrieve the {@code Locale}
                 * used for localizing text.
                 * @see javax.security.auth.callback.CallbackHandler
                 */
                // @ts-ignore
                class LanguageCallback extends java.lang.Object implements javax.security.auth.callback.Callback, java.io.Serializable {
                    /**
                     * Construct a {@code LanguageCallback}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the retrieved {@code Locale}.
                     * <p>
                     * @param locale the retrieved {#code Locale}.
                     * @see #getLocale
                     */
                    // @ts-ignore
                    public setLocale(locale: java.util.Locale): void
                    /**
                     * Get the retrieved {@code Locale}.
                     * <p>
                     * @return the retrieved {#code Locale}, or null
                     *           if no {@code Locale} could be retrieved.
                     * @see #setLocale
                     */
                    // @ts-ignore
                    public getLocale(): java.util.Locale
                }
            }
        }
    }
}

declare namespace javax {
    namespace xml {
        namespace crypto {
            /**
             * The result returned by the {@link KeySelector#select KeySelector.select}
             * method.
             * <p>
             * At a minimum, a <code>KeySelectorResult</code> contains the <code>Key</code>
             * selected by the <code>KeySelector</code>. Implementations of this interface
             * may add methods to return implementation or algorithm specific information,
             * such as a chain of certificates or debugging information.
             * @author Sean Mullan
             * @author JSR 105 Expert Group
             * @since 1.6
             * @see KeySelector
             */
            // @ts-ignore
            interface KeySelectorResult {
                /**
                 * Returns the selected key.
                 * @return the selected key, or <code>null</code> if none can be found
                 */
                // @ts-ignore
                getKey(): java.security.Key
            }
        }
    }
}

declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                /**
                 * Provider interface to obtain {@link CodecRegistry} from the underlying MongoDB Java driver.
                 * @author Christoph Strobl
                 * @author Mark Paluch
                 * @since 2.1
                 */
                // @ts-ignore
                interface CodecRegistryProvider {
                    /**
                     * Get the underlying {@link CodecRegistry} used by the MongoDB Java driver.
                     * @return never {#literal null}.
                     * @throws IllegalStateException if {#link CodecRegistry} cannot be obtained.
                     */
                    // @ts-ignore
                    getCodecRegistry(): CodecRegistry
                    /**
                     * Checks if a {@link Codec} is registered for a given type.
                     * @param type must not be {#literal null}.
                     * @return true if {#link #getCodecRegistry()} holds a {@link Codec} for given type.
                     * @throws IllegalStateException if {#link CodecRegistry} cannot be obtained.
                     */
                    // @ts-ignore
                    hasCodecFor(type: java.lang.Class<any>): boolean
                    /**
                     * Get the {@link Codec} registered for the given {@literal type} or an {@link Optional#empty() empty Optional}
                     * instead.
                     * @param type must not be {#literal null}.
                     * @param <T>
                     * @return never {#literal null}.
                     * @throws IllegalArgumentException if {#literal type} is {@literal null}.
                     */
                    // @ts-ignore
                    getCodecFor<T>(type: java.lang.Class<T>): java.util.Optional<object>
                }
            }
        }
    }
}

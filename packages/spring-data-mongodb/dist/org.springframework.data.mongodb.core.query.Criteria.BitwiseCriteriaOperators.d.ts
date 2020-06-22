declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        namespace Criteria {
                            /**
                             * MongoDB specific <a href="https://docs.mongodb.com/manual/reference/operator/query-bitwise/">bitwise query
                             * operators</a> like {@code $bitsAllClear, $bitsAllSet,...} for usage with {@link Criteria#bits()} and {@link Query}.
                             * @author Christoph Strobl
                             * @since 2.1
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/reference/operator/query-bitwise/">https://docs.mongodb.com/manual/reference/operator/query-bitwise/</a>
                             * @currentRead Beyond the Shadows - Brent Weeks
                             */
                            // @ts-ignore
                            interface BitwiseCriteriaOperators {
                                /**
                                 * Creates a criterion using {@literal $bitsAllClear} matching documents where all given bit positions are clear
                                 * (i.e. 0).
                                 * @param numericBitmask non-negative numeric bitmask.
                                 * @return target {#link Criteria}.
                                 * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/bitsAllClear/">MongoDB Query operator:
                                 *       $bitsAllClear</a>
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                allClear(numericBitmask: number /*int*/): org.springframework.data.mongodb.core.query.Criteria
                                /**
                                 * Creates a criterion using {@literal $bitsAllClear} matching documents where all given bit positions are clear
                                 * (i.e. 0).
                                 * @param bitmask string representation of a bitmask that will be converted to its base64 encoded {#link Binary}
                                 *           representation. Must not be {@literal null} nor empty.
                                 * @return target {#link Criteria}.
                                 * @throws IllegalArgumentException when bitmask is {#literal null} or empty.
                                 * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/bitsAllClear/">MongoDB Query operator:
                                 *       $bitsAllClear</a>
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                allClear(bitmask: java.lang.String | string): org.springframework.data.mongodb.core.query.Criteria
                                /**
                                 * Creates a criterion using {@literal $bitsAllClear} matching documents where all given bit positions are clear
                                 * (i.e. 0).
                                 * @param positions list of non-negative integer positions. Positions start at 0 from the least significant bit.
                                 *           Must not be {#literal null} nor contain {@literal null} elements.
                                 * @return target {#link Criteria}.
                                 * @throws IllegalArgumentException when positions is {#literal null} or contains {@literal null} elements.
                                 * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/bitsAllClear/">MongoDB Query operator:
                                 *       $bitsAllClear</a>
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                allClear(positions: java.util.List<java.lang.Integer | number> | Array<java.lang.Integer | number>): org.springframework.data.mongodb.core.query.Criteria
                                /**
                                 * Creates a criterion using {@literal $bitsAllSet} matching documents where all given bit positions are set (i.e.
                                 * 1).
                                 * @param numericBitmask non-negative numeric bitmask.
                                 * @return target {#link Criteria}.
                                 * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/bitsAllSet/">MongoDB Query operator:
                                 *       $bitsAllSet</a>
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                allSet(numericBitmask: number /*int*/): org.springframework.data.mongodb.core.query.Criteria
                                /**
                                 * Creates a criterion using {@literal $bitsAllSet} matching documents where all given bit positions are set (i.e.
                                 * 1).
                                 * @param bitmask string representation of a bitmask that will be converted to its base64 encoded {#link Binary}
                                 *           representation. Must not be {@literal null} nor empty.
                                 * @return target {#link Criteria}.
                                 * @throws IllegalArgumentException when bitmask is {#literal null} or empty.
                                 * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/bitsAllSet/">MongoDB Query operator:
                                 *       $bitsAllSet</a>
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                allSet(bitmask: java.lang.String | string): org.springframework.data.mongodb.core.query.Criteria
                                /**
                                 * Creates a criterion using {@literal $bitsAllSet} matching documents where all given bit positions are set (i.e.
                                 * 1).
                                 * @param positions list of non-negative integer positions. Positions start at 0 from the least significant bit.
                                 *           Must not be {#literal null} nor contain {@literal null} elements.
                                 * @return target {#link Criteria}.
                                 * @throws IllegalArgumentException when positions is {#literal null} or contains {@literal null} elements.
                                 * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/bitsAllSet/">MongoDB Query operator:
                                 *       $bitsAllSet</a>
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                allSet(positions: java.util.List<java.lang.Integer | number> | Array<java.lang.Integer | number>): org.springframework.data.mongodb.core.query.Criteria
                                /**
                                 * Creates a criterion using {@literal $bitsAllClear} matching documents where any given bit positions are clear
                                 * (i.e. 0).
                                 * @param numericBitmask non-negative numeric bitmask.
                                 * @return target {#link Criteria}.
                                 * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/bitsAnyClear/">MongoDB Query operator:
                                 *       $bitsAnyClear</a>
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                anyClear(numericBitmask: number /*int*/): org.springframework.data.mongodb.core.query.Criteria
                                /**
                                 * Creates a criterion using {@literal $bitsAllClear} matching documents where any given bit positions are clear
                                 * (i.e. 0).
                                 * @param bitmask string representation of a bitmask that will be converted to its base64 encoded {#link Binary}
                                 *           representation. Must not be {@literal null} nor empty.
                                 * @return target {#link Criteria}.
                                 * @throws IllegalArgumentException when bitmask is {#literal null} or empty.
                                 * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/bitsAnyClear/">MongoDB Query operator:
                                 *       $bitsAnyClear</a>
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                anyClear(bitmask: java.lang.String | string): org.springframework.data.mongodb.core.query.Criteria
                                /**
                                 * Creates a criterion using {@literal $bitsAllClear} matching documents where any given bit positions are clear
                                 * (i.e. 0).
                                 * @param positions list of non-negative integer positions. Positions start at 0 from the least significant bit.
                                 *           Must not be {#literal null} nor contain {@literal null} elements.
                                 * @return target {#link Criteria}.
                                 * @throws IllegalArgumentException when positions is {#literal null} or contains {@literal null} elements.
                                 * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/bitsAnyClear/">MongoDB Query operator:
                                 *       $bitsAnyClear</a>
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                anyClear(positions: java.util.List<java.lang.Integer | number> | Array<java.lang.Integer | number>): org.springframework.data.mongodb.core.query.Criteria
                                /**
                                 * Creates a criterion using {@literal $bitsAllSet} matching documents where any given bit positions are set (i.e.
                                 * 1).
                                 * @param numericBitmask non-negative numeric bitmask.
                                 * @return target {#link Criteria}.
                                 * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/bitsAnySet/">MongoDB Query operator:
                                 *       $bitsAnySet</a>
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                anySet(numericBitmask: number /*int*/): org.springframework.data.mongodb.core.query.Criteria
                                /**
                                 * Creates a criterion using {@literal $bitsAnySet} matching documents where any given bit positions are set (i.e.
                                 * 1).
                                 * @param bitmask string representation of a bitmask that will be converted to its base64 encoded {#link Binary}
                                 *           representation. Must not be {@literal null} nor empty.
                                 * @return target {#link Criteria}.
                                 * @throws IllegalArgumentException when bitmask is {#literal null} or empty.
                                 * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/bitsAnySet/">MongoDB Query operator:
                                 *       $bitsAnySet</a>
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                anySet(bitmask: java.lang.String | string): org.springframework.data.mongodb.core.query.Criteria
                                /**
                                 * Creates a criterion using {@literal $bitsAnySet} matching documents where any given bit positions are set (i.e.
                                 * 1).
                                 * @param positions list of non-negative integer positions. Positions start at 0 from the least significant bit.
                                 *           Must not be {#literal null} nor contain {@literal null} elements.
                                 * @return target {#link Criteria}.
                                 * @throws IllegalArgumentException when positions is {#literal null} or contains {@literal null} elements.
                                 * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/bitsAnySet/">MongoDB Query operator:
                                 *       $bitsAnySet</a>
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                anySet(positions: java.util.List<java.lang.Integer | number> | Array<java.lang.Integer | number>): org.springframework.data.mongodb.core.query.Criteria
                            }
                        }
                    }
                }
            }
        }
    }
}

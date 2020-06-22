declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace hash {
                    /**
                     * {@link ObjectMapper} based {@link HashMapper} implementation that allows flattening. Given an entity {@code Person}
                     * with an {@code Address} like below the flattening will create individual hash entries for all nested properties and
                     * resolve complex types into simple types, as far as possible.
                     * <p/>
                     * Flattening requires all property names to not interfere with JSON paths. Using dots or brackets in map keys or as
                     * property names is not supported using flattening. The resulting hash cannot be mapped back into an Object.
                     * <p/>
                     * <h3>Example</h3>
                     * <pre class="code">
                     * class Person {
                     * String firstname;
                     * String lastname;
                     * Address address;
                     * Date date;
                     * LocalDateTime localDateTime;
                     * }
                     * class Address {
                     * String city;
                     * String country;
                     * }
                     * </pre>
                     * <h3>Normal</h3>
                     * <table>
                     * <tr>
                     * <th>Hash field</th>
                     * <th>Value</th>
                     * </tr>
                     * <tr>
                     * <td>firstname</td>
                     * <td>Jon</td>
                     * </tr>
                     * <tr>
                     * <td>lastname</td>
                     * <td>Snow</td>
                     * </tr>
                     * <tr>
                     * <td>address</td>
                     * <td>{ "city" : "Castle Black", "country" : "The North" }</td>
                     * </tr>
                     * <tr>
                     * <td>date</td>
                     * <td>1561543964015</td>
                     * </tr>
                     * <tr>
                     * <td>localDateTime</td>
                     * <td>2018-01-02T12:13:14</td>
                     * </tr>
                     * </table>
                     * <h3>Flat</h3>
                     * <table>
                     * <tr>
                     * <th>Hash field</th>
                     * <th>Value</th>
                     * </tr>
                     * <tr>
                     * <td>firstname</td>
                     * <td>Jon</td>
                     * </tr>
                     * <tr>
                     * <td>lastname</td>
                     * <td>Snow</td>
                     * </tr>
                     * <tr>
                     * <td>address.city</td>
                     * <td>Castle Black</td>
                     * </tr>
                     * <tr>
                     * <td>address.country</td>
                     * <td>The North</td>
                     * </tr>
                     * <tr>
                     * <td>date</td>
                     * <td>1561543964015</td>
                     * </tr>
                     * <tr>
                     * <td>localDateTime</td>
                     * <td>2018-01-02T12:13:14</td>
                     * </tr>
                     * </table>
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.8
                     */
                    // @ts-ignore
                    class Jackson2HashMapper extends java.lang.Object implements org.springframework.data.redis.hash.HashMapper<java.lang.Object | any, java.lang.String | string, java.lang.Object | any> {
                        /**
                         * Creates new {@link Jackson2HashMapper} with default {@link ObjectMapper}.
                         * @param flatten
                         */
                        // @ts-ignore
                        constructor(flatten: boolean)
                        /**
                         * Creates new {@link Jackson2HashMapper}.
                         * @param mapper must not be {#literal null}.
                         * @param flatten
                         */
                        // @ts-ignore
                        constructor(mapper: ObjectMapper, flatten: boolean)
                        // @ts-ignore
                        public toHash(source: java.lang.Object | any): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        public fromHash(hash: java.util.Map<java.lang.String | string, java.lang.Object | any>): any
                    }
                }
            }
        }
    }
}

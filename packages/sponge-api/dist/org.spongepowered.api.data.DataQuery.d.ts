declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                /**
                 * Represents a query that can be done on views. Queries do not depend on
                 * their separator, it is just a way to construct them.
                 */
                // @ts-ignore
                class DataQuery extends java.lang.Object {
                    /**
                     * Gets an empty {@link DataQuery}. This query is constant and never
                     * changes and therefor can be called multiple times returning the
                     * same instance.
                     * @return An empty data query
                     */
                    // @ts-ignore
                    of(): org.spongepowered.api.data.DataQuery
                    /**
                     * Constructs a query using the given separator character and path.
                     * <p>As an example, {@code new DataQuery('/', "a/b/c")} and
                     * {@code new DataQuery('.', "a.b.c")} represent the same path but are
                     * constructed using different separators.</p>
                     * @param separator The separator
                     * @param path The path
                     * @return The newly constructed {#link DataQuery}
                     */
                    // @ts-ignore
                    of(separator: string, path: string): org.spongepowered.api.data.DataQuery
                    /**
                     * Constructs a query using the given parts.
                     * @param parts The parts
                     * @return The newly constructed {#link DataQuery}
                     */
                    // @ts-ignore
                    of(...parts: string[]): org.spongepowered.api.data.DataQuery
                    /**
                     * Constructs a query using the given parts.
                     * @param parts The parts
                     * @return The newly constructed {#link DataQuery}
                     */
                    // @ts-ignore
                    of(parts: Array<java.lang.String>): org.spongepowered.api.data.DataQuery
                    /**
                     * Gets the parts that make up this query. The returned list is immutable.
                     * @return The parts of this query
                     */
                    // @ts-ignore
                    getParts(): java.util.List<java.lang.String>
                    /**
                     * Returns a new query that is made up of this query's parts followed by the
                     * given query's parts.
                     * @param that The given query to follow this one
                     * @return The constructed query
                     */
                    // @ts-ignore
                    then(that: org.spongepowered.api.data.DataQuery): org.spongepowered.api.data.DataQuery
                    /**
                     * Returns a new query that is made up of this query's parts followed by the
                     * given query.
                     * @param that The given query to follow this one
                     * @return The constructed query
                     */
                    // @ts-ignore
                    then(that: string): org.spongepowered.api.data.DataQuery
                    /**
                     * Returns the parts of this query as individual queries. The returned list
                     * is immutable.
                     * @return The constructed queries
                     */
                    // @ts-ignore
                    getQueryParts(): java.util.List<org.spongepowered.api.data.DataQuery>
                    /**
                     * Returns a {@link DataQuery} where the last node is "popped" off. If this
                     * query is already the top level query, then the {@link DataQuery#of()} is
                     * returned.
                     * @return The next level query
                     */
                    // @ts-ignore
                    pop(): org.spongepowered.api.data.DataQuery
                    /**
                     * Returns a {@link DataQuery} where the first node is "popped" off. If this
                     * query is already the top level query, then the {@link DataQuery#of()} is
                     * returned.
                     * @return The next level query
                     */
                    // @ts-ignore
                    popFirst(): org.spongepowered.api.data.DataQuery
                    /**
                     * Gets the last entry of this {@link DataQuery}. If this query is
                     * a single entry query or an empty query, it returns itself.
                     * @return The last entry as a data query, if not already last
                     */
                    // @ts-ignore
                    last(): org.spongepowered.api.data.DataQuery
                    /**
                     * Gets this query as a string separated by the given separator.
                     * @param separator The separator
                     * @return This query as a string
                     */
                    // @ts-ignore
                    asString(separator: string): java.lang.String
                    /**
                     * Gets this query as a string separated by the given separator character.
                     * @param separator The separator
                     * @return This query as a string
                     */
                    // @ts-ignore
                    asString(separator: string): java.lang.String
                    // @ts-ignore
                    toString(): java.lang.String
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    equals(obj: any): boolean
                }
            }
        }
    }
}

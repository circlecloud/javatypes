declare namespace org {
    namespace bukkit {
        namespace util {
            // @ts-ignore
            class StringUtil extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Copies all elements from the iterable collection of originals to the
                 * collection provided.
                 * @param <T> the collection of strings
                 * @param token String to search for
                 * @param originals An iterable collection of strings to filter.
                 * @param collection The collection to add matches to
                 * @return the collection provided that would have the elements copied
                 *      into
                 * @throws UnsupportedOperationException if the collection is immutable
                 *      and originals contains a string which starts with the specified
                 *      search string.
                 * @throws IllegalArgumentException if any parameter is is null
                 * @throws IllegalArgumentException if originals contains a null element.
                 *      <b>Note: the collection may be modified before this is thrown</b>
                 */
                // @ts-ignore
                public static copyPartialMatches<T extends java.util.Collection>(token: java.lang.String | string, originals: java.lang.Iterable<java.lang.String | string>, collection: T): T
                /**
                 * This method uses a region to check case-insensitive equality. This
                 * means the internal array does not need to be copied like a
                 * toLowerCase() call would.
                 * @param string String to check
                 * @param prefix Prefix of string to compare
                 * @return true if provided string starts with, ignoring case, the prefix
                 *      provided
                 * @throws NullPointerException if prefix is null
                 * @throws IllegalArgumentException if string is null
                 */
                // @ts-ignore
                public static startsWithIgnoreCase(string: java.lang.String | string, prefix: java.lang.String | string): boolean
            }
        }
    }
}

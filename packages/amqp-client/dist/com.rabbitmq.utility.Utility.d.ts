declare namespace com {
    namespace rabbitmq {
        namespace utility {
            /**
             * Catch-all holder class for static helper methods.
             */
            // @ts-ignore
            class Utility extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static fixStackTrace<T extends java.lang.Throwable & com.rabbitmq.utility.SensibleClone<T>>(throwable: T): T
                /**
                 * @param throwable
                 * @return 
                 * @deprecated use logging library instead for logging stack traces somewhere
                 */
                // @ts-ignore
                public static makeStackTrace(throwable: java.lang.Throwable | Error): string
                /**
                 * Synchronizes on the list and then returns a copy of the list that is safe to iterate over. Useful when wanting to do thread-safe iteration over
                 * a List wrapped in {@link Collections#synchronizedList(List)}.
                 * @param list
                 *             The list, which may not be {#code null}
                 * @return ArrayList copy of the list
                 */
                // @ts-ignore
                public static copy<E>(list: java.util.List<E> | Array<E>): Array<E>
                /**
                 * Synchronizes on the map and then returns a copy of the map that is safe to iterate over. Useful when wanting to do thread-safe iteration over a
                 * Map wrapped in {@link Collections#synchronizedMap(Map)}
                 * @param map
                 *             The map, which may not be {#code null}
                 * @return LinkedHashMap copy of the map
                 */
                // @ts-ignore
                public static copy<K, V>(map: java.util.Map<K, V>): java.util.Map<K, V>
            }
        }
    }
}

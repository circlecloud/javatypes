declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Simple {@link List} wrapper class that allows for elements to be
             * automatically populated as they are requested. This is particularly
             * useful for data binding to {@link List Lists}, allowing for elements
             * to be created and added to the {@link List} in a "just in time" fashion.
             * <p>Note: This class is not thread-safe. To create a thread-safe version,
             * use the {@link java.util.Collections#synchronizedList} utility methods.
             * <p>Inspired by {@code LazyList} from Commons Collections.
             * @author Rob Harrop
             * @author Juergen Hoeller
             * @since 2.0
             * @param <E> the element type
             */
            // @ts-ignore
            class AutoPopulatingList<E> extends java.lang.Object implements java.util.List<E>, java.io.Serializable {
                /**
                 * Creates a new {@code AutoPopulatingList} that is backed by a standard
                 * {@link ArrayList} and adds new instances of the supplied {@link Class element Class}
                 * to the backing {@link List} on demand.
                 */
                // @ts-ignore
                constructor(elementClass: java.lang.Class<E>)
                /**
                 * Creates a new {@code AutoPopulatingList} that is backed by the supplied {@link List}
                 * and adds new instances of the supplied {@link Class element Class} to the backing
                 * {@link List} on demand.
                 */
                // @ts-ignore
                constructor(backingList: Array<E>, elementClass: java.lang.Class<E>)
                /**
                 * Creates a new {@code AutoPopulatingList} that is backed by a standard
                 * {@link ArrayList} and creates new elements on demand using the supplied {@link ElementFactory}.
                 */
                // @ts-ignore
                constructor(elementFactory: org.springframework.util.AutoPopulatingList.ElementFactory<E>)
                /**
                 * Creates a new {@code AutoPopulatingList} that is backed by the supplied {@link List}
                 * and creates new elements on demand using the supplied {@link ElementFactory}.
                 */
                // @ts-ignore
                constructor(backingList: Array<E>, elementFactory: org.springframework.util.AutoPopulatingList.ElementFactory<E>)
                // @ts-ignore
                add(index: number /*int*/, element: E): void
                // @ts-ignore
                add(o: E): boolean
                // @ts-ignore
                addAll(c: Array<E>): boolean
                // @ts-ignore
                addAll(index: number /*int*/, c: Array<E>): boolean
                // @ts-ignore
                clear(): void
                // @ts-ignore
                contains(o: any): boolean
                // @ts-ignore
                containsAll(c: Array<any>): boolean
                /**
                 * Get the element at the supplied index, creating it if there is
                 * no element at that index.
                 */
                // @ts-ignore
                get(index: number /*int*/): E
                // @ts-ignore
                indexOf(o: any): int
                // @ts-ignore
                isEmpty(): boolean
                // @ts-ignore
                iterator(): java.util.Iterator<E>
                // @ts-ignore
                lastIndexOf(o: any): int
                // @ts-ignore
                listIterator(): java.util.ListIterator<E>
                // @ts-ignore
                listIterator(index: number /*int*/): java.util.ListIterator<E>
                // @ts-ignore
                remove(index: number /*int*/): E
                // @ts-ignore
                remove(o: any): boolean
                // @ts-ignore
                removeAll(c: Array<any>): boolean
                // @ts-ignore
                retainAll(c: Array<any>): boolean
                // @ts-ignore
                set(index: number /*int*/, element: E): E
                // @ts-ignore
                size(): int
                // @ts-ignore
                subList(fromIndex: number /*int*/, toIndex: number /*int*/): java.util.List<E>
                // @ts-ignore
                toArray(): java.lang.Object[]
                // @ts-ignore
                toArray<T>(a: T[]): T
                // @ts-ignore
                equals(other: any): boolean
                // @ts-ignore
                hashCode(): int
            }
        }
    }
}

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
                constructor(elementClass: java.lang.Class<any>)
                /**
                 * Creates a new {@code AutoPopulatingList} that is backed by the supplied {@link List}
                 * and adds new instances of the supplied {@link Class element Class} to the backing
                 * {@link List} on demand.
                 */
                // @ts-ignore
                constructor(backingList: java.util.List<E> | Array<E>, elementClass: java.lang.Class<any>)
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
                constructor(backingList: java.util.List<E> | Array<E>, elementFactory: org.springframework.util.AutoPopulatingList.ElementFactory<E>)
                // @ts-ignore
                public add(index: number /*int*/, element: E): void
                // @ts-ignore
                public add(o: E): boolean
                // @ts-ignore
                public addAll(c: java.util.Collection<any> | Array<any>): boolean
                // @ts-ignore
                public addAll(index: number /*int*/, c: java.util.Collection<any> | Array<any>): boolean
                // @ts-ignore
                public clear(): void
                // @ts-ignore
                public contains(o: java.lang.Object | any): boolean
                // @ts-ignore
                public containsAll(c: java.util.Collection<any> | Array<any>): boolean
                /**
                 * Get the element at the supplied index, creating it if there is
                 * no element at that index.
                 */
                // @ts-ignore
                public get(index: number /*int*/): E
                // @ts-ignore
                public indexOf(o: java.lang.Object | any): number /*int*/
                // @ts-ignore
                public isEmpty(): boolean
                // @ts-ignore
                public iterator(): java.util.Iterator<E>
                // @ts-ignore
                public lastIndexOf(o: java.lang.Object | any): number /*int*/
                // @ts-ignore
                public listIterator(): java.util.ListIterator<E>
                // @ts-ignore
                public listIterator(index: number /*int*/): java.util.ListIterator<E>
                // @ts-ignore
                public remove(index: number /*int*/): E
                // @ts-ignore
                public remove(o: java.lang.Object | any): boolean
                // @ts-ignore
                public removeAll(c: java.util.Collection<any> | Array<any>): boolean
                // @ts-ignore
                public retainAll(c: java.util.Collection<any> | Array<any>): boolean
                // @ts-ignore
                public set(index: number /*int*/, element: E): E
                // @ts-ignore
                public size(): number /*int*/
                // @ts-ignore
                public subList(fromIndex: number /*int*/, toIndex: number /*int*/): Array<E>
                // @ts-ignore
                public toArray(): any[]
                // @ts-ignore
                public toArray<T>(a: T[]): T
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
            }
        }
    }
}

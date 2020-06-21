declare namespace java {
    namespace util {
        /**
         * Static classes and methods for operating on or creating instances of
         * {@link Spliterator} and its primitive specializations
         * {@link Spliterator.OfInt}, {@link Spliterator.OfLong}, and
         * {@link Spliterator.OfDouble}.
         * @see Spliterator
         * @since 1.8
         */
        // @ts-ignore
        class Spliterators extends java.lang.Object {
            /**
             * Creates an empty {@code Spliterator}
             * <p>The empty spliterator reports {@link Spliterator#SIZED} and
             * {@link Spliterator#SUBSIZED}.  Calls to
             * {@link java.util.Spliterator#trySplit()} always return {@code null}.
             * @param <T> Type of elements
             * @return An empty spliterator
             */
            // @ts-ignore
            public static emptySpliterator<T>(): java.util.Spliterator<T>
            /**
             * Creates an empty {@code Spliterator.OfInt}
             * <p>The empty spliterator reports {@link Spliterator#SIZED} and
             * {@link Spliterator#SUBSIZED}.  Calls to
             * {@link java.util.Spliterator#trySplit()} always return {@code null}.
             * @return An empty spliterator
             */
            // @ts-ignore
            public static emptyIntSpliterator(): java.util.Spliterator.OfInt
            /**
             * Creates an empty {@code Spliterator.OfLong}
             * <p>The empty spliterator reports {@link Spliterator#SIZED} and
             * {@link Spliterator#SUBSIZED}.  Calls to
             * {@link java.util.Spliterator#trySplit()} always return {@code null}.
             * @return An empty spliterator
             */
            // @ts-ignore
            public static emptyLongSpliterator(): java.util.Spliterator.OfLong
            /**
             * Creates an empty {@code Spliterator.OfDouble}
             * <p>The empty spliterator reports {@link Spliterator#SIZED} and
             * {@link Spliterator#SUBSIZED}.  Calls to
             * {@link java.util.Spliterator#trySplit()} always return {@code null}.
             * @return An empty spliterator
             */
            // @ts-ignore
            public static emptyDoubleSpliterator(): java.util.Spliterator.OfDouble
            /**
             * Creates a {@code Spliterator} covering the elements of a given array,
             * using a customized set of spliterator characteristics.
             * <p>This method is provided as an implementation convenience for
             * Spliterators which store portions of their elements in arrays, and need
             * fine control over Spliterator characteristics.  Most other situations in
             * which a Spliterator for an array is needed should use
             * {@link Arrays#spliterator(Object[])}.
             * <p>The returned spliterator always reports the characteristics
             * {@code SIZED} and {@code SUBSIZED}.  The caller may provide additional
             * characteristics for the spliterator to report; it is common to
             * additionally specify {@code IMMUTABLE} and {@code ORDERED}.
             * @param <T> Type of elements
             * @param array The array, assumed to be unmodified during use
             * @param additionalCharacteristics Additional spliterator characteristics
             *         of this spliterator's source or elements beyond {#code SIZED} and
             *         {@code SUBSIZED} which are are always reported
             * @return A spliterator for an array
             * @throws NullPointerException if the given array is {#code null}
             * @see Arrays#spliterator(Object[])
             */
            // @ts-ignore
            public static spliterator<T>(array: java.lang.Object[] | any[], additionalCharacteristics: number /*int*/): java.util.Spliterator<T>
            /**
             * Creates a {@code Spliterator} covering a range of elements of a given
             * array, using a customized set of spliterator characteristics.
             * <p>This method is provided as an implementation convenience for
             * Spliterators which store portions of their elements in arrays, and need
             * fine control over Spliterator characteristics.  Most other situations in
             * which a Spliterator for an array is needed should use
             * {@link Arrays#spliterator(Object[])}.
             * <p>The returned spliterator always reports the characteristics
             * {@code SIZED} and {@code SUBSIZED}.  The caller may provide additional
             * characteristics for the spliterator to report; it is common to
             * additionally specify {@code IMMUTABLE} and {@code ORDERED}.
             * @param <T> Type of elements
             * @param array The array, assumed to be unmodified during use
             * @param fromIndex The least index (inclusive) to cover
             * @param toIndex One past the greatest index to cover
             * @param additionalCharacteristics Additional spliterator characteristics
             *         of this spliterator's source or elements beyond {#code SIZED} and
             *         {@code SUBSIZED} which are are always reported
             * @return A spliterator for an array
             * @throws NullPointerException if the given array is {#code null}
             * @throws ArrayIndexOutOfBoundsException if {#code fromIndex} is negative,
             *          {@code toIndex} is less than {@code fromIndex}, or
             *          {@code toIndex} is greater than the array size
             * @see Arrays#spliterator(Object[], int, int)
             */
            // @ts-ignore
            public static spliterator<T>(array: java.lang.Object[] | any[], fromIndex: number /*int*/, toIndex: number /*int*/, additionalCharacteristics: number /*int*/): java.util.Spliterator<T>
            /**
             * Creates a {@code Spliterator.OfInt} covering the elements of a given array,
             * using a customized set of spliterator characteristics.
             * <p>This method is provided as an implementation convenience for
             * Spliterators which store portions of their elements in arrays, and need
             * fine control over Spliterator characteristics.  Most other situations in
             * which a Spliterator for an array is needed should use
             * {@link Arrays#spliterator(int[])}.
             * <p>The returned spliterator always reports the characteristics
             * {@code SIZED} and {@code SUBSIZED}.  The caller may provide additional
             * characteristics for the spliterator to report; it is common to
             * additionally specify {@code IMMUTABLE} and {@code ORDERED}.
             * @param array The array, assumed to be unmodified during use
             * @param additionalCharacteristics Additional spliterator characteristics
             *         of this spliterator's source or elements beyond {#code SIZED} and
             *         {@code SUBSIZED} which are are always reported
             * @return A spliterator for an array
             * @throws NullPointerException if the given array is {#code null}
             * @see Arrays#spliterator(int[])
             */
            // @ts-ignore
            public static spliterator(array: number /*int*/[], additionalCharacteristics: number /*int*/): java.util.Spliterator.OfInt
            /**
             * Creates a {@code Spliterator.OfInt} covering a range of elements of a
             * given array, using a customized set of spliterator characteristics.
             * <p>This method is provided as an implementation convenience for
             * Spliterators which store portions of their elements in arrays, and need
             * fine control over Spliterator characteristics.  Most other situations in
             * which a Spliterator for an array is needed should use
             * {@link Arrays#spliterator(int[], int, int)}.
             * <p>The returned spliterator always reports the characteristics
             * {@code SIZED} and {@code SUBSIZED}.  The caller may provide additional
             * characteristics for the spliterator to report; it is common to
             * additionally specify {@code IMMUTABLE} and {@code ORDERED}.
             * @param array The array, assumed to be unmodified during use
             * @param fromIndex The least index (inclusive) to cover
             * @param toIndex One past the greatest index to cover
             * @param additionalCharacteristics Additional spliterator characteristics
             *         of this spliterator's source or elements beyond {#code SIZED} and
             *         {@code SUBSIZED} which are are always reported
             * @return A spliterator for an array
             * @throws NullPointerException if the given array is {#code null}
             * @throws ArrayIndexOutOfBoundsException if {#code fromIndex} is negative,
             *          {@code toIndex} is less than {@code fromIndex}, or
             *          {@code toIndex} is greater than the array size
             * @see Arrays#spliterator(int[], int, int)
             */
            // @ts-ignore
            public static spliterator(array: number /*int*/[], fromIndex: number /*int*/, toIndex: number /*int*/, additionalCharacteristics: number /*int*/): java.util.Spliterator.OfInt
            /**
             * Creates a {@code Spliterator.OfLong} covering the elements of a given array,
             * using a customized set of spliterator characteristics.
             * <p>This method is provided as an implementation convenience for
             * Spliterators which store portions of their elements in arrays, and need
             * fine control over Spliterator characteristics.  Most other situations in
             * which a Spliterator for an array is needed should use
             * {@link Arrays#spliterator(long[])}.
             * <p>The returned spliterator always reports the characteristics
             * {@code SIZED} and {@code SUBSIZED}.  The caller may provide additional
             * characteristics for the spliterator to report; it is common to
             * additionally specify {@code IMMUTABLE} and {@code ORDERED}.
             * @param array The array, assumed to be unmodified during use
             * @param additionalCharacteristics Additional spliterator characteristics
             *         of this spliterator's source or elements beyond {#code SIZED} and
             *         {@code SUBSIZED} which are are always reported
             * @return A spliterator for an array
             * @throws NullPointerException if the given array is {#code null}
             * @see Arrays#spliterator(long[])
             */
            // @ts-ignore
            public static spliterator(array: number /*long*/[], additionalCharacteristics: number /*int*/): java.util.Spliterator.OfLong
            /**
             * Creates a {@code Spliterator.OfLong} covering a range of elements of a
             * given array, using a customized set of spliterator characteristics.
             * <p>This method is provided as an implementation convenience for
             * Spliterators which store portions of their elements in arrays, and need
             * fine control over Spliterator characteristics.  Most other situations in
             * which a Spliterator for an array is needed should use
             * {@link Arrays#spliterator(long[], int, int)}.
             * <p>The returned spliterator always reports the characteristics
             * {@code SIZED} and {@code SUBSIZED}.  The caller may provide additional
             * characteristics for the spliterator to report.  (For example, if it is
             * known the array will not be further modified, specify {@code IMMUTABLE};
             * if the array data is considered to have an an encounter order, specify
             * {@code ORDERED}).  The method {@link Arrays#spliterator(long[], int, int)} can
             * often be used instead, which returns a spliterator that reports
             * {@code SIZED}, {@code SUBSIZED}, {@code IMMUTABLE}, and {@code ORDERED}.
             * @param array The array, assumed to be unmodified during use
             * @param fromIndex The least index (inclusive) to cover
             * @param toIndex One past the greatest index to cover
             * @param additionalCharacteristics Additional spliterator characteristics
             *         of this spliterator's source or elements beyond {#code SIZED} and
             *         {@code SUBSIZED} which are are always reported
             * @return A spliterator for an array
             * @throws NullPointerException if the given array is {#code null}
             * @throws ArrayIndexOutOfBoundsException if {#code fromIndex} is negative,
             *          {@code toIndex} is less than {@code fromIndex}, or
             *          {@code toIndex} is greater than the array size
             * @see Arrays#spliterator(long[], int, int)
             */
            // @ts-ignore
            public static spliterator(array: number /*long*/[], fromIndex: number /*int*/, toIndex: number /*int*/, additionalCharacteristics: number /*int*/): java.util.Spliterator.OfLong
            /**
             * Creates a {@code Spliterator.OfDouble} covering the elements of a given array,
             * using a customized set of spliterator characteristics.
             * <p>This method is provided as an implementation convenience for
             * Spliterators which store portions of their elements in arrays, and need
             * fine control over Spliterator characteristics.  Most other situations in
             * which a Spliterator for an array is needed should use
             * {@link Arrays#spliterator(double[])}.
             * <p>The returned spliterator always reports the characteristics
             * {@code SIZED} and {@code SUBSIZED}.  The caller may provide additional
             * characteristics for the spliterator to report; it is common to
             * additionally specify {@code IMMUTABLE} and {@code ORDERED}.
             * @param array The array, assumed to be unmodified during use
             * @param additionalCharacteristics Additional spliterator characteristics
             *         of this spliterator's source or elements beyond {#code SIZED} and
             *         {@code SUBSIZED} which are are always reported
             * @return A spliterator for an array
             * @throws NullPointerException if the given array is {#code null}
             * @see Arrays#spliterator(double[])
             */
            // @ts-ignore
            public static spliterator(array: number /*double*/[], additionalCharacteristics: number /*int*/): java.util.Spliterator.OfDouble
            /**
             * Creates a {@code Spliterator.OfDouble} covering a range of elements of a
             * given array, using a customized set of spliterator characteristics.
             * <p>This method is provided as an implementation convenience for
             * Spliterators which store portions of their elements in arrays, and need
             * fine control over Spliterator characteristics.  Most other situations in
             * which a Spliterator for an array is needed should use
             * {@link Arrays#spliterator(double[], int, int)}.
             * <p>The returned spliterator always reports the characteristics
             * {@code SIZED} and {@code SUBSIZED}.  The caller may provide additional
             * characteristics for the spliterator to report.  (For example, if it is
             * known the array will not be further modified, specify {@code IMMUTABLE};
             * if the array data is considered to have an an encounter order, specify
             * {@code ORDERED}).  The method {@link Arrays#spliterator(long[], int, int)} can
             * often be used instead, which returns a spliterator that reports
             * {@code SIZED}, {@code SUBSIZED}, {@code IMMUTABLE}, and {@code ORDERED}.
             * @param array The array, assumed to be unmodified during use
             * @param fromIndex The least index (inclusive) to cover
             * @param toIndex One past the greatest index to cover
             * @param additionalCharacteristics Additional spliterator characteristics
             *         of this spliterator's source or elements beyond {#code SIZED} and
             *         {@code SUBSIZED} which are are always reported
             * @return A spliterator for an array
             * @throws NullPointerException if the given array is {#code null}
             * @throws ArrayIndexOutOfBoundsException if {#code fromIndex} is negative,
             *          {@code toIndex} is less than {@code fromIndex}, or
             *          {@code toIndex} is greater than the array size
             * @see Arrays#spliterator(double[], int, int)
             */
            // @ts-ignore
            public static spliterator(array: number /*double*/[], fromIndex: number /*int*/, toIndex: number /*int*/, additionalCharacteristics: number /*int*/): java.util.Spliterator.OfDouble
            /**
             * Creates a {@code Spliterator} using the given collection's
             * {@link java.util.Collection#iterator()} as the source of elements, and
             * reporting its {@link java.util.Collection#size()} as its initial size.
             * <p>The spliterator is
             * <em><a href="Spliterator.html#binding">late-binding</a></em>, inherits
             * the <em>fail-fast</em> properties of the collection's iterator, and
             * implements {@code trySplit} to permit limited parallelism.
             * @param <T> Type of elements
             * @param c The collection
             * @param characteristics Characteristics of this spliterator's source or
             *         elements.  The characteristics {#code SIZED} and {@code SUBSIZED}
             *         are additionally reported unless {@code CONCURRENT} is supplied.
             * @return A spliterator from an iterator
             * @throws NullPointerException if the given collection is {#code null}
             */
            // @ts-ignore
            public static spliterator<T>(c: java.util.Collection<any> | Array<any>, characteristics: number /*int*/): java.util.Spliterator<T>
            /**
             * Creates a {@code Spliterator} using a given {@code Iterator}
             * as the source of elements, and with a given initially reported size.
             * <p>The spliterator is not
             * <em><a href="Spliterator.html#binding">late-binding</a></em>, inherits
             * the <em>fail-fast</em> properties of the iterator, and implements
             * {@code trySplit} to permit limited parallelism.
             * <p>Traversal of elements should be accomplished through the spliterator.
             * The behaviour of splitting and traversal is undefined if the iterator is
             * operated on after the spliterator is returned, or the initially reported
             * size is not equal to the actual number of elements in the source.
             * @param <T> Type of elements
             * @param iterator The iterator for the source
             * @param size The number of elements in the source, to be reported as
             *         initial {#code estimateSize}
             * @param characteristics Characteristics of this spliterator's source or
             *         elements.  The characteristics {#code SIZED} and {@code SUBSIZED}
             *         are additionally reported unless {@code CONCURRENT} is supplied.
             * @return A spliterator from an iterator
             * @throws NullPointerException if the given iterator is {#code null}
             */
            // @ts-ignore
            public static spliterator<T>(iterator: java.util.Iterator<any>, size: number /*long*/, characteristics: number /*int*/): java.util.Spliterator<T>
            /**
             * Creates a {@code Spliterator} using a given {@code Iterator}
             * as the source of elements, with no initial size estimate.
             * <p>The spliterator is not
             * <em><a href="Spliterator.html#binding">late-binding</a></em>, inherits
             * the <em>fail-fast</em> properties of the iterator, and implements
             * {@code trySplit} to permit limited parallelism.
             * <p>Traversal of elements should be accomplished through the spliterator.
             * The behaviour of splitting and traversal is undefined if the iterator is
             * operated on after the spliterator is returned.
             * @param <T> Type of elements
             * @param iterator The iterator for the source
             * @param characteristics Characteristics of this spliterator's source
             *         or elements ({#code SIZED} and {@code SUBSIZED}, if supplied, are
             *         ignored and are not reported.)
             * @return A spliterator from an iterator
             * @throws NullPointerException if the given iterator is {#code null}
             */
            // @ts-ignore
            public static spliteratorUnknownSize<T>(iterator: java.util.Iterator<any>, characteristics: number /*int*/): java.util.Spliterator<T>
            /**
             * Creates a {@code Spliterator.OfInt} using a given
             * {@code IntStream.IntIterator} as the source of elements, and with a given
             * initially reported size.
             * <p>The spliterator is not
             * <em><a href="Spliterator.html#binding">late-binding</a></em>, inherits
             * the <em>fail-fast</em> properties of the iterator, and implements
             * {@code trySplit} to permit limited parallelism.
             * <p>Traversal of elements should be accomplished through the spliterator.
             * The behaviour of splitting and traversal is undefined if the iterator is
             * operated on after the spliterator is returned, or the initially reported
             * size is not equal to the actual number of elements in the source.
             * @param iterator The iterator for the source
             * @param size The number of elements in the source, to be reported as
             *         initial {#code estimateSize}.
             * @param characteristics Characteristics of this spliterator's source or
             *         elements.  The characteristics {#code SIZED} and {@code SUBSIZED}
             *         are additionally reported unless {@code CONCURRENT} is supplied.
             * @return A spliterator from an iterator
             * @throws NullPointerException if the given iterator is {#code null}
             */
            // @ts-ignore
            public static spliterator(iterator: java.util.PrimitiveIterator.OfInt, size: number /*long*/, characteristics: number /*int*/): java.util.Spliterator.OfInt
            /**
             * Creates a {@code Spliterator.OfInt} using a given
             * {@code IntStream.IntIterator} as the source of elements, with no initial
             * size estimate.
             * <p>The spliterator is not
             * <em><a href="Spliterator.html#binding">late-binding</a></em>, inherits
             * the <em>fail-fast</em> properties of the iterator, and implements
             * {@code trySplit} to permit limited parallelism.
             * <p>Traversal of elements should be accomplished through the spliterator.
             * The behaviour of splitting and traversal is undefined if the iterator is
             * operated on after the spliterator is returned.
             * @param iterator The iterator for the source
             * @param characteristics Characteristics of this spliterator's source
             *         or elements ({#code SIZED} and {@code SUBSIZED}, if supplied, are
             *         ignored and are not reported.)
             * @return A spliterator from an iterator
             * @throws NullPointerException if the given iterator is {#code null}
             */
            // @ts-ignore
            public static spliteratorUnknownSize(iterator: java.util.PrimitiveIterator.OfInt, characteristics: number /*int*/): java.util.Spliterator.OfInt
            /**
             * Creates a {@code Spliterator.OfLong} using a given
             * {@code LongStream.LongIterator} as the source of elements, and with a
             * given initially reported size.
             * <p>The spliterator is not
             * <em><a href="Spliterator.html#binding">late-binding</a></em>, inherits
             * the <em>fail-fast</em> properties of the iterator, and implements
             * {@code trySplit} to permit limited parallelism.
             * <p>Traversal of elements should be accomplished through the spliterator.
             * The behaviour of splitting and traversal is undefined if the iterator is
             * operated on after the spliterator is returned, or the initially reported
             * size is not equal to the actual number of elements in the source.
             * @param iterator The iterator for the source
             * @param size The number of elements in the source, to be reported as
             *         initial {#code estimateSize}.
             * @param characteristics Characteristics of this spliterator's source or
             *         elements.  The characteristics {#code SIZED} and {@code SUBSIZED}
             *         are additionally reported unless {@code CONCURRENT} is supplied.
             * @return A spliterator from an iterator
             * @throws NullPointerException if the given iterator is {#code null}
             */
            // @ts-ignore
            public static spliterator(iterator: java.util.PrimitiveIterator.OfLong, size: number /*long*/, characteristics: number /*int*/): java.util.Spliterator.OfLong
            /**
             * Creates a {@code Spliterator.OfLong} using a given
             * {@code LongStream.LongIterator} as the source of elements, with no
             * initial size estimate.
             * <p>The spliterator is not
             * <em><a href="Spliterator.html#binding">late-binding</a></em>, inherits
             * the <em>fail-fast</em> properties of the iterator, and implements
             * {@code trySplit} to permit limited parallelism.
             * <p>Traversal of elements should be accomplished through the spliterator.
             * The behaviour of splitting and traversal is undefined if the iterator is
             * operated on after the spliterator is returned.
             * @param iterator The iterator for the source
             * @param characteristics Characteristics of this spliterator's source
             *         or elements ({#code SIZED} and {@code SUBSIZED}, if supplied, are
             *         ignored and are not reported.)
             * @return A spliterator from an iterator
             * @throws NullPointerException if the given iterator is {#code null}
             */
            // @ts-ignore
            public static spliteratorUnknownSize(iterator: java.util.PrimitiveIterator.OfLong, characteristics: number /*int*/): java.util.Spliterator.OfLong
            /**
             * Creates a {@code Spliterator.OfDouble} using a given
             * {@code DoubleStream.DoubleIterator} as the source of elements, and with a
             * given initially reported size.
             * <p>The spliterator is not
             * <em><a href="Spliterator.html#binding">late-binding</a></em>, inherits
             * the <em>fail-fast</em> properties of the iterator, and implements
             * {@code trySplit} to permit limited parallelism.
             * <p>Traversal of elements should be accomplished through the spliterator.
             * The behaviour of splitting and traversal is undefined if the iterator is
             * operated on after the spliterator is returned, or the initially reported
             * size is not equal to the actual number of elements in the source.
             * @param iterator The iterator for the source
             * @param size The number of elements in the source, to be reported as
             *         initial {#code estimateSize}
             * @param characteristics Characteristics of this spliterator's source or
             *         elements.  The characteristics {#code SIZED} and {@code SUBSIZED}
             *         are additionally reported unless {@code CONCURRENT} is supplied.
             * @return A spliterator from an iterator
             * @throws NullPointerException if the given iterator is {#code null}
             */
            // @ts-ignore
            public static spliterator(iterator: java.util.PrimitiveIterator.OfDouble, size: number /*long*/, characteristics: number /*int*/): java.util.Spliterator.OfDouble
            /**
             * Creates a {@code Spliterator.OfDouble} using a given
             * {@code DoubleStream.DoubleIterator} as the source of elements, with no
             * initial size estimate.
             * <p>The spliterator is not
             * <em><a href="Spliterator.html#binding">late-binding</a></em>, inherits
             * the <em>fail-fast</em> properties of the iterator, and implements
             * {@code trySplit} to permit limited parallelism.
             * <p>Traversal of elements should be accomplished through the spliterator.
             * The behaviour of splitting and traversal is undefined if the iterator is
             * operated on after the spliterator is returned.
             * @param iterator The iterator for the source
             * @param characteristics Characteristics of this spliterator's source
             *         or elements ({#code SIZED} and {@code SUBSIZED}, if supplied, are
             *         ignored and are not reported.)
             * @return A spliterator from an iterator
             * @throws NullPointerException if the given iterator is {#code null}
             */
            // @ts-ignore
            public static spliteratorUnknownSize(iterator: java.util.PrimitiveIterator.OfDouble, characteristics: number /*int*/): java.util.Spliterator.OfDouble
            /**
             * Creates an {@code Iterator} from a {@code Spliterator}.
             * <p>Traversal of elements should be accomplished through the iterator.
             * The behaviour of traversal is undefined if the spliterator is operated
             * after the iterator is returned.
             * @param <T> Type of elements
             * @param spliterator The spliterator
             * @return An iterator
             * @throws NullPointerException if the given spliterator is {#code null}
             */
            // @ts-ignore
            public static iterator<T>(spliterator: java.util.Spliterator<any>): java.util.Iterator<T>
            /**
             * Creates an {@code PrimitiveIterator.OfInt} from a
             * {@code Spliterator.OfInt}.
             * <p>Traversal of elements should be accomplished through the iterator.
             * The behaviour of traversal is undefined if the spliterator is operated
             * after the iterator is returned.
             * @param spliterator The spliterator
             * @return An iterator
             * @throws NullPointerException if the given spliterator is {#code null}
             */
            // @ts-ignore
            public static iterator(spliterator: java.util.Spliterator.OfInt): java.util.PrimitiveIterator.OfInt
            /**
             * Creates an {@code PrimitiveIterator.OfLong} from a
             * {@code Spliterator.OfLong}.
             * <p>Traversal of elements should be accomplished through the iterator.
             * The behaviour of traversal is undefined if the spliterator is operated
             * after the iterator is returned.
             * @param spliterator The spliterator
             * @return An iterator
             * @throws NullPointerException if the given spliterator is {#code null}
             */
            // @ts-ignore
            public static iterator(spliterator: java.util.Spliterator.OfLong): java.util.PrimitiveIterator.OfLong
            /**
             * Creates an {@code PrimitiveIterator.OfDouble} from a
             * {@code Spliterator.OfDouble}.
             * <p>Traversal of elements should be accomplished through the iterator.
             * The behaviour of traversal is undefined if the spliterator is operated
             * after the iterator is returned.
             * @param spliterator The spliterator
             * @return An iterator
             * @throws NullPointerException if the given spliterator is {#code null}
             */
            // @ts-ignore
            public static iterator(spliterator: java.util.Spliterator.OfDouble): java.util.PrimitiveIterator.OfDouble
        }
    }
}

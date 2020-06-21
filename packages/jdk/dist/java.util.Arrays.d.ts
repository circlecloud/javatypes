declare namespace java {
    namespace util {
        /**
         * This class contains various methods for manipulating arrays (such as
         * sorting and searching). This class also contains a static factory
         * that allows arrays to be viewed as lists.
         * <p>The methods in this class all throw a {@code NullPointerException},
         * if the specified array reference is null, except where noted.
         * <p>The documentation for the methods contained in this class includes
         * briefs description of the <i>implementations</i>. Such descriptions should
         * be regarded as <i>implementation notes</i>, rather than parts of the
         * <i>specification</i>. Implementors should feel free to substitute other
         * algorithms, so long as the specification itself is adhered to. (For
         * example, the algorithm used by {@code sort(Object[])} does not have to be
         * a MergeSort, but it does have to be <i>stable</i>.)
         * <p>This class is a member of the
         * <a href="{@docRoot}/../technotes/guides/collections/index.html">
         * Java Collections Framework</a>.
         * @author Josh Bloch
         * @author Neal Gafter
         * @author John Rose
         * @since 1.2
         */
        // @ts-ignore
        class Arrays extends java.lang.Object {
            /**
             * Sorts the specified array into ascending numerical order.
             * <p>Implementation note: The sorting algorithm is a Dual-Pivot Quicksort
             * by Vladimir Yaroslavskiy, Jon Bentley, and Joshua Bloch. This algorithm
             * offers O(n log(n)) performance on many data sets that cause other
             * quicksorts to degrade to quadratic performance, and is typically
             * faster than traditional (one-pivot) Quicksort implementations.
             * @param a the array to be sorted
             */
            // @ts-ignore
            public static sort(a: number /*int*/[]): void
            /**
             * Sorts the specified range of the array into ascending order. The range
             * to be sorted extends from the index {@code fromIndex}, inclusive, to
             * the index {@code toIndex}, exclusive. If {@code fromIndex == toIndex},
             * the range to be sorted is empty.
             * <p>Implementation note: The sorting algorithm is a Dual-Pivot Quicksort
             * by Vladimir Yaroslavskiy, Jon Bentley, and Joshua Bloch. This algorithm
             * offers O(n log(n)) performance on many data sets that cause other
             * quicksorts to degrade to quadratic performance, and is typically
             * faster than traditional (one-pivot) Quicksort implementations.
             * @param a the array to be sorted
             * @param fromIndex the index of the first element, inclusive, to be sorted
             * @param toIndex the index of the last element, exclusive, to be sorted
             * @throws IllegalArgumentException if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *      if {#code fromIndex < 0} or {@code toIndex > a.length}
             */
            // @ts-ignore
            public static sort(a: number /*int*/[], fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sorts the specified array into ascending numerical order.
             * <p>Implementation note: The sorting algorithm is a Dual-Pivot Quicksort
             * by Vladimir Yaroslavskiy, Jon Bentley, and Joshua Bloch. This algorithm
             * offers O(n log(n)) performance on many data sets that cause other
             * quicksorts to degrade to quadratic performance, and is typically
             * faster than traditional (one-pivot) Quicksort implementations.
             * @param a the array to be sorted
             */
            // @ts-ignore
            public static sort(a: number /*long*/[]): void
            /**
             * Sorts the specified range of the array into ascending order. The range
             * to be sorted extends from the index {@code fromIndex}, inclusive, to
             * the index {@code toIndex}, exclusive. If {@code fromIndex == toIndex},
             * the range to be sorted is empty.
             * <p>Implementation note: The sorting algorithm is a Dual-Pivot Quicksort
             * by Vladimir Yaroslavskiy, Jon Bentley, and Joshua Bloch. This algorithm
             * offers O(n log(n)) performance on many data sets that cause other
             * quicksorts to degrade to quadratic performance, and is typically
             * faster than traditional (one-pivot) Quicksort implementations.
             * @param a the array to be sorted
             * @param fromIndex the index of the first element, inclusive, to be sorted
             * @param toIndex the index of the last element, exclusive, to be sorted
             * @throws IllegalArgumentException if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *      if {#code fromIndex < 0} or {@code toIndex > a.length}
             */
            // @ts-ignore
            public static sort(a: number /*long*/[], fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sorts the specified array into ascending numerical order.
             * <p>Implementation note: The sorting algorithm is a Dual-Pivot Quicksort
             * by Vladimir Yaroslavskiy, Jon Bentley, and Joshua Bloch. This algorithm
             * offers O(n log(n)) performance on many data sets that cause other
             * quicksorts to degrade to quadratic performance, and is typically
             * faster than traditional (one-pivot) Quicksort implementations.
             * @param a the array to be sorted
             */
            // @ts-ignore
            public static sort(a: number /*short*/[]): void
            /**
             * Sorts the specified range of the array into ascending order. The range
             * to be sorted extends from the index {@code fromIndex}, inclusive, to
             * the index {@code toIndex}, exclusive. If {@code fromIndex == toIndex},
             * the range to be sorted is empty.
             * <p>Implementation note: The sorting algorithm is a Dual-Pivot Quicksort
             * by Vladimir Yaroslavskiy, Jon Bentley, and Joshua Bloch. This algorithm
             * offers O(n log(n)) performance on many data sets that cause other
             * quicksorts to degrade to quadratic performance, and is typically
             * faster than traditional (one-pivot) Quicksort implementations.
             * @param a the array to be sorted
             * @param fromIndex the index of the first element, inclusive, to be sorted
             * @param toIndex the index of the last element, exclusive, to be sorted
             * @throws IllegalArgumentException if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *      if {#code fromIndex < 0} or {@code toIndex > a.length}
             */
            // @ts-ignore
            public static sort(a: number /*short*/[], fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sorts the specified array into ascending numerical order.
             * <p>Implementation note: The sorting algorithm is a Dual-Pivot Quicksort
             * by Vladimir Yaroslavskiy, Jon Bentley, and Joshua Bloch. This algorithm
             * offers O(n log(n)) performance on many data sets that cause other
             * quicksorts to degrade to quadratic performance, and is typically
             * faster than traditional (one-pivot) Quicksort implementations.
             * @param a the array to be sorted
             */
            // @ts-ignore
            public static sort(a: string[]): void
            /**
             * Sorts the specified range of the array into ascending order. The range
             * to be sorted extends from the index {@code fromIndex}, inclusive, to
             * the index {@code toIndex}, exclusive. If {@code fromIndex == toIndex},
             * the range to be sorted is empty.
             * <p>Implementation note: The sorting algorithm is a Dual-Pivot Quicksort
             * by Vladimir Yaroslavskiy, Jon Bentley, and Joshua Bloch. This algorithm
             * offers O(n log(n)) performance on many data sets that cause other
             * quicksorts to degrade to quadratic performance, and is typically
             * faster than traditional (one-pivot) Quicksort implementations.
             * @param a the array to be sorted
             * @param fromIndex the index of the first element, inclusive, to be sorted
             * @param toIndex the index of the last element, exclusive, to be sorted
             * @throws IllegalArgumentException if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *      if {#code fromIndex < 0} or {@code toIndex > a.length}
             */
            // @ts-ignore
            public static sort(a: string[], fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sorts the specified array into ascending numerical order.
             * <p>Implementation note: The sorting algorithm is a Dual-Pivot Quicksort
             * by Vladimir Yaroslavskiy, Jon Bentley, and Joshua Bloch. This algorithm
             * offers O(n log(n)) performance on many data sets that cause other
             * quicksorts to degrade to quadratic performance, and is typically
             * faster than traditional (one-pivot) Quicksort implementations.
             * @param a the array to be sorted
             */
            // @ts-ignore
            public static sort(a: number /*byte*/[]): void
            /**
             * Sorts the specified range of the array into ascending order. The range
             * to be sorted extends from the index {@code fromIndex}, inclusive, to
             * the index {@code toIndex}, exclusive. If {@code fromIndex == toIndex},
             * the range to be sorted is empty.
             * <p>Implementation note: The sorting algorithm is a Dual-Pivot Quicksort
             * by Vladimir Yaroslavskiy, Jon Bentley, and Joshua Bloch. This algorithm
             * offers O(n log(n)) performance on many data sets that cause other
             * quicksorts to degrade to quadratic performance, and is typically
             * faster than traditional (one-pivot) Quicksort implementations.
             * @param a the array to be sorted
             * @param fromIndex the index of the first element, inclusive, to be sorted
             * @param toIndex the index of the last element, exclusive, to be sorted
             * @throws IllegalArgumentException if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *      if {#code fromIndex < 0} or {@code toIndex > a.length}
             */
            // @ts-ignore
            public static sort(a: number /*byte*/[], fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sorts the specified array into ascending numerical order.
             * <p>The {@code <} relation does not provide a total order on all float
             * values: {@code -0.0f == 0.0f} is {@code true} and a {@code Float.NaN}
             * value compares neither less than, greater than, nor equal to any value,
             * even itself. This method uses the total order imposed by the method
             * {@link Float#compareTo}: {@code -0.0f} is treated as less than value
             * {@code 0.0f} and {@code Float.NaN} is considered greater than any
             * other value and all {@code Float.NaN} values are considered equal.
             * <p>Implementation note: The sorting algorithm is a Dual-Pivot Quicksort
             * by Vladimir Yaroslavskiy, Jon Bentley, and Joshua Bloch. This algorithm
             * offers O(n log(n)) performance on many data sets that cause other
             * quicksorts to degrade to quadratic performance, and is typically
             * faster than traditional (one-pivot) Quicksort implementations.
             * @param a the array to be sorted
             */
            // @ts-ignore
            public static sort(a: number /*float*/[]): void
            /**
             * Sorts the specified range of the array into ascending order. The range
             * to be sorted extends from the index {@code fromIndex}, inclusive, to
             * the index {@code toIndex}, exclusive. If {@code fromIndex == toIndex},
             * the range to be sorted is empty.
             * <p>The {@code <} relation does not provide a total order on all float
             * values: {@code -0.0f == 0.0f} is {@code true} and a {@code Float.NaN}
             * value compares neither less than, greater than, nor equal to any value,
             * even itself. This method uses the total order imposed by the method
             * {@link Float#compareTo}: {@code -0.0f} is treated as less than value
             * {@code 0.0f} and {@code Float.NaN} is considered greater than any
             * other value and all {@code Float.NaN} values are considered equal.
             * <p>Implementation note: The sorting algorithm is a Dual-Pivot Quicksort
             * by Vladimir Yaroslavskiy, Jon Bentley, and Joshua Bloch. This algorithm
             * offers O(n log(n)) performance on many data sets that cause other
             * quicksorts to degrade to quadratic performance, and is typically
             * faster than traditional (one-pivot) Quicksort implementations.
             * @param a the array to be sorted
             * @param fromIndex the index of the first element, inclusive, to be sorted
             * @param toIndex the index of the last element, exclusive, to be sorted
             * @throws IllegalArgumentException if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *      if {#code fromIndex < 0} or {@code toIndex > a.length}
             */
            // @ts-ignore
            public static sort(a: number /*float*/[], fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sorts the specified array into ascending numerical order.
             * <p>The {@code <} relation does not provide a total order on all double
             * values: {@code -0.0d == 0.0d} is {@code true} and a {@code Double.NaN}
             * value compares neither less than, greater than, nor equal to any value,
             * even itself. This method uses the total order imposed by the method
             * {@link Double#compareTo}: {@code -0.0d} is treated as less than value
             * {@code 0.0d} and {@code Double.NaN} is considered greater than any
             * other value and all {@code Double.NaN} values are considered equal.
             * <p>Implementation note: The sorting algorithm is a Dual-Pivot Quicksort
             * by Vladimir Yaroslavskiy, Jon Bentley, and Joshua Bloch. This algorithm
             * offers O(n log(n)) performance on many data sets that cause other
             * quicksorts to degrade to quadratic performance, and is typically
             * faster than traditional (one-pivot) Quicksort implementations.
             * @param a the array to be sorted
             */
            // @ts-ignore
            public static sort(a: number /*double*/[]): void
            /**
             * Sorts the specified range of the array into ascending order. The range
             * to be sorted extends from the index {@code fromIndex}, inclusive, to
             * the index {@code toIndex}, exclusive. If {@code fromIndex == toIndex},
             * the range to be sorted is empty.
             * <p>The {@code <} relation does not provide a total order on all double
             * values: {@code -0.0d == 0.0d} is {@code true} and a {@code Double.NaN}
             * value compares neither less than, greater than, nor equal to any value,
             * even itself. This method uses the total order imposed by the method
             * {@link Double#compareTo}: {@code -0.0d} is treated as less than value
             * {@code 0.0d} and {@code Double.NaN} is considered greater than any
             * other value and all {@code Double.NaN} values are considered equal.
             * <p>Implementation note: The sorting algorithm is a Dual-Pivot Quicksort
             * by Vladimir Yaroslavskiy, Jon Bentley, and Joshua Bloch. This algorithm
             * offers O(n log(n)) performance on many data sets that cause other
             * quicksorts to degrade to quadratic performance, and is typically
             * faster than traditional (one-pivot) Quicksort implementations.
             * @param a the array to be sorted
             * @param fromIndex the index of the first element, inclusive, to be sorted
             * @param toIndex the index of the last element, exclusive, to be sorted
             * @throws IllegalArgumentException if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *      if {#code fromIndex < 0} or {@code toIndex > a.length}
             */
            // @ts-ignore
            public static sort(a: number /*double*/[], fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sorts the specified array into ascending numerical order.
             * @implNote The sorting algorithm is a parallel sort-merge that breaks the
             *  array into sub-arrays that are themselves sorted and then merged. When
             *  the sub-array length reaches a minimum granularity, the sub-array is
             *  sorted using the appropriate {#link Arrays#sort(byte[]) Arrays.sort}
             *  method. If the length of the specified array is less than the minimum
             *  granularity, then it is sorted using the appropriate {@link
             *  Arrays#sort(byte[]) Arrays.sort} method. The algorithm requires a
             *  working space no greater than the size of the original array. The
             *  {@link ForkJoinPool#commonPool() ForkJoin common pool} is used to
             *  execute any parallel tasks.
             * @param a the array to be sorted
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSort(a: number /*byte*/[]): void
            /**
             * Sorts the specified range of the array into ascending numerical order.
             * The range to be sorted extends from the index {@code fromIndex},
             * inclusive, to the index {@code toIndex}, exclusive. If
             * {@code fromIndex == toIndex}, the range to be sorted is empty.
             * @implNote The sorting algorithm is a parallel sort-merge that breaks the
             *  array into sub-arrays that are themselves sorted and then merged. When
             *  the sub-array length reaches a minimum granularity, the sub-array is
             *  sorted using the appropriate {#link Arrays#sort(byte[]) Arrays.sort}
             *  method. If the length of the specified array is less than the minimum
             *  granularity, then it is sorted using the appropriate {@link
             *  Arrays#sort(byte[]) Arrays.sort} method. The algorithm requires a working
             *  space no greater than the size of the specified range of the original
             *  array. The {@link ForkJoinPool#commonPool() ForkJoin common pool} is
             *  used to execute any parallel tasks.
             * @param a the array to be sorted
             * @param fromIndex the index of the first element, inclusive, to be sorted
             * @param toIndex the index of the last element, exclusive, to be sorted
             * @throws IllegalArgumentException if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *      if {#code fromIndex < 0} or {@code toIndex > a.length}
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSort(a: number /*byte*/[], fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sorts the specified array into ascending numerical order.
             * @implNote The sorting algorithm is a parallel sort-merge that breaks the
             *  array into sub-arrays that are themselves sorted and then merged. When
             *  the sub-array length reaches a minimum granularity, the sub-array is
             *  sorted using the appropriate {#link Arrays#sort(char[]) Arrays.sort}
             *  method. If the length of the specified array is less than the minimum
             *  granularity, then it is sorted using the appropriate {@link
             *  Arrays#sort(char[]) Arrays.sort} method. The algorithm requires a
             *  working space no greater than the size of the original array. The
             *  {@link ForkJoinPool#commonPool() ForkJoin common pool} is used to
             *  execute any parallel tasks.
             * @param a the array to be sorted
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSort(a: string[]): void
            /**
             * Sorts the specified range of the array into ascending numerical order.
             * The range to be sorted extends from the index {@code fromIndex},
             * inclusive, to the index {@code toIndex}, exclusive. If
             * {@code fromIndex == toIndex}, the range to be sorted is empty.
             * @implNote The sorting algorithm is a parallel sort-merge that breaks the
             *  array into sub-arrays that are themselves sorted and then merged. When
             *  the sub-array length reaches a minimum granularity, the sub-array is
             *  sorted using the appropriate {#link Arrays#sort(char[]) Arrays.sort}
             *  method. If the length of the specified array is less than the minimum
             *  granularity, then it is sorted using the appropriate {@link
             *  Arrays#sort(char[]) Arrays.sort} method. The algorithm requires a working
             *  space no greater than the size of the specified range of the original
             *  array. The {@link ForkJoinPool#commonPool() ForkJoin common pool} is
             *  used to execute any parallel tasks.
             * @param a the array to be sorted
             * @param fromIndex the index of the first element, inclusive, to be sorted
             * @param toIndex the index of the last element, exclusive, to be sorted
             * @throws IllegalArgumentException if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *      if {#code fromIndex < 0} or {@code toIndex > a.length}
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSort(a: string[], fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sorts the specified array into ascending numerical order.
             * @implNote The sorting algorithm is a parallel sort-merge that breaks the
             *  array into sub-arrays that are themselves sorted and then merged. When
             *  the sub-array length reaches a minimum granularity, the sub-array is
             *  sorted using the appropriate {#link Arrays#sort(short[]) Arrays.sort}
             *  method. If the length of the specified array is less than the minimum
             *  granularity, then it is sorted using the appropriate {@link
             *  Arrays#sort(short[]) Arrays.sort} method. The algorithm requires a
             *  working space no greater than the size of the original array. The
             *  {@link ForkJoinPool#commonPool() ForkJoin common pool} is used to
             *  execute any parallel tasks.
             * @param a the array to be sorted
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSort(a: number /*short*/[]): void
            /**
             * Sorts the specified range of the array into ascending numerical order.
             * The range to be sorted extends from the index {@code fromIndex},
             * inclusive, to the index {@code toIndex}, exclusive. If
             * {@code fromIndex == toIndex}, the range to be sorted is empty.
             * @implNote The sorting algorithm is a parallel sort-merge that breaks the
             *  array into sub-arrays that are themselves sorted and then merged. When
             *  the sub-array length reaches a minimum granularity, the sub-array is
             *  sorted using the appropriate {#link Arrays#sort(short[]) Arrays.sort}
             *  method. If the length of the specified array is less than the minimum
             *  granularity, then it is sorted using the appropriate {@link
             *  Arrays#sort(short[]) Arrays.sort} method. The algorithm requires a working
             *  space no greater than the size of the specified range of the original
             *  array. The {@link ForkJoinPool#commonPool() ForkJoin common pool} is
             *  used to execute any parallel tasks.
             * @param a the array to be sorted
             * @param fromIndex the index of the first element, inclusive, to be sorted
             * @param toIndex the index of the last element, exclusive, to be sorted
             * @throws IllegalArgumentException if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *      if {#code fromIndex < 0} or {@code toIndex > a.length}
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSort(a: number /*short*/[], fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sorts the specified array into ascending numerical order.
             * @implNote The sorting algorithm is a parallel sort-merge that breaks the
             *  array into sub-arrays that are themselves sorted and then merged. When
             *  the sub-array length reaches a minimum granularity, the sub-array is
             *  sorted using the appropriate {#link Arrays#sort(int[]) Arrays.sort}
             *  method. If the length of the specified array is less than the minimum
             *  granularity, then it is sorted using the appropriate {@link
             *  Arrays#sort(int[]) Arrays.sort} method. The algorithm requires a
             *  working space no greater than the size of the original array. The
             *  {@link ForkJoinPool#commonPool() ForkJoin common pool} is used to
             *  execute any parallel tasks.
             * @param a the array to be sorted
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSort(a: number /*int*/[]): void
            /**
             * Sorts the specified range of the array into ascending numerical order.
             * The range to be sorted extends from the index {@code fromIndex},
             * inclusive, to the index {@code toIndex}, exclusive. If
             * {@code fromIndex == toIndex}, the range to be sorted is empty.
             * @implNote The sorting algorithm is a parallel sort-merge that breaks the
             *  array into sub-arrays that are themselves sorted and then merged. When
             *  the sub-array length reaches a minimum granularity, the sub-array is
             *  sorted using the appropriate {#link Arrays#sort(int[]) Arrays.sort}
             *  method. If the length of the specified array is less than the minimum
             *  granularity, then it is sorted using the appropriate {@link
             *  Arrays#sort(int[]) Arrays.sort} method. The algorithm requires a working
             *  space no greater than the size of the specified range of the original
             *  array. The {@link ForkJoinPool#commonPool() ForkJoin common pool} is
             *  used to execute any parallel tasks.
             * @param a the array to be sorted
             * @param fromIndex the index of the first element, inclusive, to be sorted
             * @param toIndex the index of the last element, exclusive, to be sorted
             * @throws IllegalArgumentException if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *      if {#code fromIndex < 0} or {@code toIndex > a.length}
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSort(a: number /*int*/[], fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sorts the specified array into ascending numerical order.
             * @implNote The sorting algorithm is a parallel sort-merge that breaks the
             *  array into sub-arrays that are themselves sorted and then merged. When
             *  the sub-array length reaches a minimum granularity, the sub-array is
             *  sorted using the appropriate {#link Arrays#sort(long[]) Arrays.sort}
             *  method. If the length of the specified array is less than the minimum
             *  granularity, then it is sorted using the appropriate {@link
             *  Arrays#sort(long[]) Arrays.sort} method. The algorithm requires a
             *  working space no greater than the size of the original array. The
             *  {@link ForkJoinPool#commonPool() ForkJoin common pool} is used to
             *  execute any parallel tasks.
             * @param a the array to be sorted
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSort(a: number /*long*/[]): void
            /**
             * Sorts the specified range of the array into ascending numerical order.
             * The range to be sorted extends from the index {@code fromIndex},
             * inclusive, to the index {@code toIndex}, exclusive. If
             * {@code fromIndex == toIndex}, the range to be sorted is empty.
             * @implNote The sorting algorithm is a parallel sort-merge that breaks the
             *  array into sub-arrays that are themselves sorted and then merged. When
             *  the sub-array length reaches a minimum granularity, the sub-array is
             *  sorted using the appropriate {#link Arrays#sort(long[]) Arrays.sort}
             *  method. If the length of the specified array is less than the minimum
             *  granularity, then it is sorted using the appropriate {@link
             *  Arrays#sort(long[]) Arrays.sort} method. The algorithm requires a working
             *  space no greater than the size of the specified range of the original
             *  array. The {@link ForkJoinPool#commonPool() ForkJoin common pool} is
             *  used to execute any parallel tasks.
             * @param a the array to be sorted
             * @param fromIndex the index of the first element, inclusive, to be sorted
             * @param toIndex the index of the last element, exclusive, to be sorted
             * @throws IllegalArgumentException if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *      if {#code fromIndex < 0} or {@code toIndex > a.length}
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSort(a: number /*long*/[], fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sorts the specified array into ascending numerical order.
             * <p>The {@code <} relation does not provide a total order on all float
             * values: {@code -0.0f == 0.0f} is {@code true} and a {@code Float.NaN}
             * value compares neither less than, greater than, nor equal to any value,
             * even itself. This method uses the total order imposed by the method
             * {@link Float#compareTo}: {@code -0.0f} is treated as less than value
             * {@code 0.0f} and {@code Float.NaN} is considered greater than any
             * other value and all {@code Float.NaN} values are considered equal.
             * @implNote The sorting algorithm is a parallel sort-merge that breaks the
             *  array into sub-arrays that are themselves sorted and then merged. When
             *  the sub-array length reaches a minimum granularity, the sub-array is
             *  sorted using the appropriate {#link Arrays#sort(float[]) Arrays.sort}
             *  method. If the length of the specified array is less than the minimum
             *  granularity, then it is sorted using the appropriate {@link
             *  Arrays#sort(float[]) Arrays.sort} method. The algorithm requires a
             *  working space no greater than the size of the original array. The
             *  {@link ForkJoinPool#commonPool() ForkJoin common pool} is used to
             *  execute any parallel tasks.
             * @param a the array to be sorted
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSort(a: number /*float*/[]): void
            /**
             * Sorts the specified range of the array into ascending numerical order.
             * The range to be sorted extends from the index {@code fromIndex},
             * inclusive, to the index {@code toIndex}, exclusive. If
             * {@code fromIndex == toIndex}, the range to be sorted is empty.
             * <p>The {@code <} relation does not provide a total order on all float
             * values: {@code -0.0f == 0.0f} is {@code true} and a {@code Float.NaN}
             * value compares neither less than, greater than, nor equal to any value,
             * even itself. This method uses the total order imposed by the method
             * {@link Float#compareTo}: {@code -0.0f} is treated as less than value
             * {@code 0.0f} and {@code Float.NaN} is considered greater than any
             * other value and all {@code Float.NaN} values are considered equal.
             * @implNote The sorting algorithm is a parallel sort-merge that breaks the
             *  array into sub-arrays that are themselves sorted and then merged. When
             *  the sub-array length reaches a minimum granularity, the sub-array is
             *  sorted using the appropriate {#link Arrays#sort(float[]) Arrays.sort}
             *  method. If the length of the specified array is less than the minimum
             *  granularity, then it is sorted using the appropriate {@link
             *  Arrays#sort(float[]) Arrays.sort} method. The algorithm requires a working
             *  space no greater than the size of the specified range of the original
             *  array. The {@link ForkJoinPool#commonPool() ForkJoin common pool} is
             *  used to execute any parallel tasks.
             * @param a the array to be sorted
             * @param fromIndex the index of the first element, inclusive, to be sorted
             * @param toIndex the index of the last element, exclusive, to be sorted
             * @throws IllegalArgumentException if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *      if {#code fromIndex < 0} or {@code toIndex > a.length}
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSort(a: number /*float*/[], fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sorts the specified array into ascending numerical order.
             * <p>The {@code <} relation does not provide a total order on all double
             * values: {@code -0.0d == 0.0d} is {@code true} and a {@code Double.NaN}
             * value compares neither less than, greater than, nor equal to any value,
             * even itself. This method uses the total order imposed by the method
             * {@link Double#compareTo}: {@code -0.0d} is treated as less than value
             * {@code 0.0d} and {@code Double.NaN} is considered greater than any
             * other value and all {@code Double.NaN} values are considered equal.
             * @implNote The sorting algorithm is a parallel sort-merge that breaks the
             *  array into sub-arrays that are themselves sorted and then merged. When
             *  the sub-array length reaches a minimum granularity, the sub-array is
             *  sorted using the appropriate {#link Arrays#sort(double[]) Arrays.sort}
             *  method. If the length of the specified array is less than the minimum
             *  granularity, then it is sorted using the appropriate {@link
             *  Arrays#sort(double[]) Arrays.sort} method. The algorithm requires a
             *  working space no greater than the size of the original array. The
             *  {@link ForkJoinPool#commonPool() ForkJoin common pool} is used to
             *  execute any parallel tasks.
             * @param a the array to be sorted
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSort(a: number /*double*/[]): void
            /**
             * Sorts the specified range of the array into ascending numerical order.
             * The range to be sorted extends from the index {@code fromIndex},
             * inclusive, to the index {@code toIndex}, exclusive. If
             * {@code fromIndex == toIndex}, the range to be sorted is empty.
             * <p>The {@code <} relation does not provide a total order on all double
             * values: {@code -0.0d == 0.0d} is {@code true} and a {@code Double.NaN}
             * value compares neither less than, greater than, nor equal to any value,
             * even itself. This method uses the total order imposed by the method
             * {@link Double#compareTo}: {@code -0.0d} is treated as less than value
             * {@code 0.0d} and {@code Double.NaN} is considered greater than any
             * other value and all {@code Double.NaN} values are considered equal.
             * @implNote The sorting algorithm is a parallel sort-merge that breaks the
             *  array into sub-arrays that are themselves sorted and then merged. When
             *  the sub-array length reaches a minimum granularity, the sub-array is
             *  sorted using the appropriate {#link Arrays#sort(double[]) Arrays.sort}
             *  method. If the length of the specified array is less than the minimum
             *  granularity, then it is sorted using the appropriate {@link
             *  Arrays#sort(double[]) Arrays.sort} method. The algorithm requires a working
             *  space no greater than the size of the specified range of the original
             *  array. The {@link ForkJoinPool#commonPool() ForkJoin common pool} is
             *  used to execute any parallel tasks.
             * @param a the array to be sorted
             * @param fromIndex the index of the first element, inclusive, to be sorted
             * @param toIndex the index of the last element, exclusive, to be sorted
             * @throws IllegalArgumentException if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *      if {#code fromIndex < 0} or {@code toIndex > a.length}
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSort(a: number /*double*/[], fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sorts the specified array of objects into ascending order, according
             * to the {@linkplain Comparable natural ordering} of its elements.
             * All elements in the array must implement the {@link Comparable}
             * interface.  Furthermore, all elements in the array must be
             * <i>mutually comparable</i> (that is, {@code e1.compareTo(e2)} must
             * not throw a {@code ClassCastException} for any elements {@code e1}
             * and {@code e2} in the array).
             * <p>This sort is guaranteed to be <i>stable</i>:  equal elements will
             * not be reordered as a result of the sort.
             * @implNote The sorting algorithm is a parallel sort-merge that breaks the
             *  array into sub-arrays that are themselves sorted and then merged. When
             *  the sub-array length reaches a minimum granularity, the sub-array is
             *  sorted using the appropriate {#link Arrays#sort(Object[]) Arrays.sort}
             *  method. If the length of the specified array is less than the minimum
             *  granularity, then it is sorted using the appropriate {@link
             *  Arrays#sort(Object[]) Arrays.sort} method. The algorithm requires a
             *  working space no greater than the size of the original array. The
             *  {@link ForkJoinPool#commonPool() ForkJoin common pool} is used to
             *  execute any parallel tasks.
             * @param <T> the class of the objects to be sorted
             * @param a the array to be sorted
             * @throws ClassCastException if the array contains elements that are not
             *          <i>mutually comparable</i> (for example, strings and integers)
             * @throws IllegalArgumentException (optional) if the natural
             *          ordering of the array elements is found to violate the
             *          {#link Comparable} contract
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSort<T extends java.lang.Comparable>(a: T[]): void
            /**
             * Sorts the specified range of the specified array of objects into
             * ascending order, according to the
             * {@linkplain Comparable natural ordering} of its
             * elements.  The range to be sorted extends from index
             * {@code fromIndex}, inclusive, to index {@code toIndex}, exclusive.
             * (If {@code fromIndex==toIndex}, the range to be sorted is empty.)  All
             * elements in this range must implement the {@link Comparable}
             * interface.  Furthermore, all elements in this range must be <i>mutually
             * comparable</i> (that is, {@code e1.compareTo(e2)} must not throw a
             * {@code ClassCastException} for any elements {@code e1} and
             * {@code e2} in the array).
             * <p>This sort is guaranteed to be <i>stable</i>:  equal elements will
             * not be reordered as a result of the sort.
             * @implNote The sorting algorithm is a parallel sort-merge that breaks the
             *  array into sub-arrays that are themselves sorted and then merged. When
             *  the sub-array length reaches a minimum granularity, the sub-array is
             *  sorted using the appropriate {#link Arrays#sort(Object[]) Arrays.sort}
             *  method. If the length of the specified array is less than the minimum
             *  granularity, then it is sorted using the appropriate {@link
             *  Arrays#sort(Object[]) Arrays.sort} method. The algorithm requires a working
             *  space no greater than the size of the specified range of the original
             *  array. The {@link ForkJoinPool#commonPool() ForkJoin common pool} is
             *  used to execute any parallel tasks.
             * @param <T> the class of the objects to be sorted
             * @param a the array to be sorted
             * @param fromIndex the index of the first element (inclusive) to be
             *         sorted
             * @param toIndex the index of the last element (exclusive) to be sorted
             * @throws IllegalArgumentException if {#code fromIndex > toIndex} or
             *          (optional) if the natural ordering of the array elements is
             *          found to violate the {@link Comparable} contract
             * @throws ArrayIndexOutOfBoundsException if {#code fromIndex < 0} or
             *          {@code toIndex > a.length}
             * @throws ClassCastException if the array contains elements that are
             *          not <i>mutually comparable</i> (for example, strings and
             *          integers).
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSort<T extends java.lang.Comparable>(a: T[], fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sorts the specified array of objects according to the order induced by
             * the specified comparator.  All elements in the array must be
             * <i>mutually comparable</i> by the specified comparator (that is,
             * {@code c.compare(e1, e2)} must not throw a {@code ClassCastException}
             * for any elements {@code e1} and {@code e2} in the array).
             * <p>This sort is guaranteed to be <i>stable</i>:  equal elements will
             * not be reordered as a result of the sort.
             * @implNote The sorting algorithm is a parallel sort-merge that breaks the
             *  array into sub-arrays that are themselves sorted and then merged. When
             *  the sub-array length reaches a minimum granularity, the sub-array is
             *  sorted using the appropriate {#link Arrays#sort(Object[]) Arrays.sort}
             *  method. If the length of the specified array is less than the minimum
             *  granularity, then it is sorted using the appropriate {@link
             *  Arrays#sort(Object[]) Arrays.sort} method. The algorithm requires a
             *  working space no greater than the size of the original array. The
             *  {@link ForkJoinPool#commonPool() ForkJoin common pool} is used to
             *  execute any parallel tasks.
             * @param <T> the class of the objects to be sorted
             * @param a the array to be sorted
             * @param cmp the comparator to determine the order of the array.  A
             *         {#code null} value indicates that the elements'
             *         {@linkplain Comparable natural ordering} should be used.
             * @throws ClassCastException if the array contains elements that are
             *          not <i>mutually comparable</i> using the specified comparator
             * @throws IllegalArgumentException (optional) if the comparator is
             *          found to violate the {#link java.util.Comparator} contract
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSort<T>(a: T[], cmp: java.util.Comparator<any>): void
            /**
             * Sorts the specified range of the specified array of objects according
             * to the order induced by the specified comparator.  The range to be
             * sorted extends from index {@code fromIndex}, inclusive, to index
             * {@code toIndex}, exclusive.  (If {@code fromIndex==toIndex}, the
             * range to be sorted is empty.)  All elements in the range must be
             * <i>mutually comparable</i> by the specified comparator (that is,
             * {@code c.compare(e1, e2)} must not throw a {@code ClassCastException}
             * for any elements {@code e1} and {@code e2} in the range).
             * <p>This sort is guaranteed to be <i>stable</i>:  equal elements will
             * not be reordered as a result of the sort.
             * @implNote The sorting algorithm is a parallel sort-merge that breaks the
             *  array into sub-arrays that are themselves sorted and then merged. When
             *  the sub-array length reaches a minimum granularity, the sub-array is
             *  sorted using the appropriate {#link Arrays#sort(Object[]) Arrays.sort}
             *  method. If the length of the specified array is less than the minimum
             *  granularity, then it is sorted using the appropriate {@link
             *  Arrays#sort(Object[]) Arrays.sort} method. The algorithm requires a working
             *  space no greater than the size of the specified range of the original
             *  array. The {@link ForkJoinPool#commonPool() ForkJoin common pool} is
             *  used to execute any parallel tasks.
             * @param <T> the class of the objects to be sorted
             * @param a the array to be sorted
             * @param fromIndex the index of the first element (inclusive) to be
             *         sorted
             * @param toIndex the index of the last element (exclusive) to be sorted
             * @param cmp the comparator to determine the order of the array.  A
             *         {#code null} value indicates that the elements'
             *         {@linkplain Comparable natural ordering} should be used.
             * @throws IllegalArgumentException if {#code fromIndex > toIndex} or
             *          (optional) if the natural ordering of the array elements is
             *          found to violate the {@link Comparable} contract
             * @throws ArrayIndexOutOfBoundsException if {#code fromIndex < 0} or
             *          {@code toIndex > a.length}
             * @throws ClassCastException if the array contains elements that are
             *          not <i>mutually comparable</i> (for example, strings and
             *          integers).
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSort<T>(a: T[], fromIndex: number /*int*/, toIndex: number /*int*/, cmp: java.util.Comparator<any>): void
            /**
             * Sorts the specified array of objects into ascending order, according
             * to the {@linkplain Comparable natural ordering} of its elements.
             * All elements in the array must implement the {@link Comparable}
             * interface.  Furthermore, all elements in the array must be
             * <i>mutually comparable</i> (that is, {@code e1.compareTo(e2)} must
             * not throw a {@code ClassCastException} for any elements {@code e1}
             * and {@code e2} in the array).
             * <p>This sort is guaranteed to be <i>stable</i>:  equal elements will
             * not be reordered as a result of the sort.
             * <p>Implementation note: This implementation is a stable, adaptive,
             * iterative mergesort that requires far fewer than n lg(n) comparisons
             * when the input array is partially sorted, while offering the
             * performance of a traditional mergesort when the input array is
             * randomly ordered.  If the input array is nearly sorted, the
             * implementation requires approximately n comparisons.  Temporary
             * storage requirements vary from a small constant for nearly sorted
             * input arrays to n/2 object references for randomly ordered input
             * arrays.
             * <p>The implementation takes equal advantage of ascending and
             * descending order in its input array, and can take advantage of
             * ascending and descending order in different parts of the the same
             * input array.  It is well-suited to merging two or more sorted arrays:
             * simply concatenate the arrays and sort the resulting array.
             * <p>The implementation was adapted from Tim Peters's list sort for Python
             * (<a href="http://svn.python.org/projects/python/trunk/Objects/listsort.txt">
             * TimSort</a>).  It uses techniques from Peter McIlroy's "Optimistic
             * Sorting and Information Theoretic Complexity", in Proceedings of the
             * Fourth Annual ACM-SIAM Symposium on Discrete Algorithms, pp 467-474,
             * January 1993.
             * @param a the array to be sorted
             * @throws ClassCastException if the array contains elements that are not
             *          <i>mutually comparable</i> (for example, strings and integers)
             * @throws IllegalArgumentException (optional) if the natural
             *          ordering of the array elements is found to violate the
             *          {#link Comparable} contract
             */
            // @ts-ignore
            public static sort(a: java.lang.Object[] | any[]): void
            /**
             * Sorts the specified range of the specified array of objects into
             * ascending order, according to the
             * {@linkplain Comparable natural ordering} of its
             * elements.  The range to be sorted extends from index
             * {@code fromIndex}, inclusive, to index {@code toIndex}, exclusive.
             * (If {@code fromIndex==toIndex}, the range to be sorted is empty.)  All
             * elements in this range must implement the {@link Comparable}
             * interface.  Furthermore, all elements in this range must be <i>mutually
             * comparable</i> (that is, {@code e1.compareTo(e2)} must not throw a
             * {@code ClassCastException} for any elements {@code e1} and
             * {@code e2} in the array).
             * <p>This sort is guaranteed to be <i>stable</i>:  equal elements will
             * not be reordered as a result of the sort.
             * <p>Implementation note: This implementation is a stable, adaptive,
             * iterative mergesort that requires far fewer than n lg(n) comparisons
             * when the input array is partially sorted, while offering the
             * performance of a traditional mergesort when the input array is
             * randomly ordered.  If the input array is nearly sorted, the
             * implementation requires approximately n comparisons.  Temporary
             * storage requirements vary from a small constant for nearly sorted
             * input arrays to n/2 object references for randomly ordered input
             * arrays.
             * <p>The implementation takes equal advantage of ascending and
             * descending order in its input array, and can take advantage of
             * ascending and descending order in different parts of the the same
             * input array.  It is well-suited to merging two or more sorted arrays:
             * simply concatenate the arrays and sort the resulting array.
             * <p>The implementation was adapted from Tim Peters's list sort for Python
             * (<a href="http://svn.python.org/projects/python/trunk/Objects/listsort.txt">
             * TimSort</a>).  It uses techniques from Peter McIlroy's "Optimistic
             * Sorting and Information Theoretic Complexity", in Proceedings of the
             * Fourth Annual ACM-SIAM Symposium on Discrete Algorithms, pp 467-474,
             * January 1993.
             * @param a the array to be sorted
             * @param fromIndex the index of the first element (inclusive) to be
             *         sorted
             * @param toIndex the index of the last element (exclusive) to be sorted
             * @throws IllegalArgumentException if {#code fromIndex > toIndex} or
             *          (optional) if the natural ordering of the array elements is
             *          found to violate the {@link Comparable} contract
             * @throws ArrayIndexOutOfBoundsException if {#code fromIndex < 0} or
             *          {@code toIndex > a.length}
             * @throws ClassCastException if the array contains elements that are
             *          not <i>mutually comparable</i> (for example, strings and
             *          integers).
             */
            // @ts-ignore
            public static sort(a: java.lang.Object[] | any[], fromIndex: number /*int*/, toIndex: number /*int*/): void
            /**
             * Sorts the specified array of objects according to the order induced by
             * the specified comparator.  All elements in the array must be
             * <i>mutually comparable</i> by the specified comparator (that is,
             * {@code c.compare(e1, e2)} must not throw a {@code ClassCastException}
             * for any elements {@code e1} and {@code e2} in the array).
             * <p>This sort is guaranteed to be <i>stable</i>:  equal elements will
             * not be reordered as a result of the sort.
             * <p>Implementation note: This implementation is a stable, adaptive,
             * iterative mergesort that requires far fewer than n lg(n) comparisons
             * when the input array is partially sorted, while offering the
             * performance of a traditional mergesort when the input array is
             * randomly ordered.  If the input array is nearly sorted, the
             * implementation requires approximately n comparisons.  Temporary
             * storage requirements vary from a small constant for nearly sorted
             * input arrays to n/2 object references for randomly ordered input
             * arrays.
             * <p>The implementation takes equal advantage of ascending and
             * descending order in its input array, and can take advantage of
             * ascending and descending order in different parts of the the same
             * input array.  It is well-suited to merging two or more sorted arrays:
             * simply concatenate the arrays and sort the resulting array.
             * <p>The implementation was adapted from Tim Peters's list sort for Python
             * (<a href="http://svn.python.org/projects/python/trunk/Objects/listsort.txt">
             * TimSort</a>).  It uses techniques from Peter McIlroy's "Optimistic
             * Sorting and Information Theoretic Complexity", in Proceedings of the
             * Fourth Annual ACM-SIAM Symposium on Discrete Algorithms, pp 467-474,
             * January 1993.
             * @param <T> the class of the objects to be sorted
             * @param a the array to be sorted
             * @param c the comparator to determine the order of the array.  A
             *         {#code null} value indicates that the elements'
             *         {@linkplain Comparable natural ordering} should be used.
             * @throws ClassCastException if the array contains elements that are
             *          not <i>mutually comparable</i> using the specified comparator
             * @throws IllegalArgumentException (optional) if the comparator is
             *          found to violate the {#link Comparator} contract
             */
            // @ts-ignore
            public static sort<T>(a: T[], c: java.util.Comparator<any>): void
            /**
             * Sorts the specified range of the specified array of objects according
             * to the order induced by the specified comparator.  The range to be
             * sorted extends from index {@code fromIndex}, inclusive, to index
             * {@code toIndex}, exclusive.  (If {@code fromIndex==toIndex}, the
             * range to be sorted is empty.)  All elements in the range must be
             * <i>mutually comparable</i> by the specified comparator (that is,
             * {@code c.compare(e1, e2)} must not throw a {@code ClassCastException}
             * for any elements {@code e1} and {@code e2} in the range).
             * <p>This sort is guaranteed to be <i>stable</i>:  equal elements will
             * not be reordered as a result of the sort.
             * <p>Implementation note: This implementation is a stable, adaptive,
             * iterative mergesort that requires far fewer than n lg(n) comparisons
             * when the input array is partially sorted, while offering the
             * performance of a traditional mergesort when the input array is
             * randomly ordered.  If the input array is nearly sorted, the
             * implementation requires approximately n comparisons.  Temporary
             * storage requirements vary from a small constant for nearly sorted
             * input arrays to n/2 object references for randomly ordered input
             * arrays.
             * <p>The implementation takes equal advantage of ascending and
             * descending order in its input array, and can take advantage of
             * ascending and descending order in different parts of the the same
             * input array.  It is well-suited to merging two or more sorted arrays:
             * simply concatenate the arrays and sort the resulting array.
             * <p>The implementation was adapted from Tim Peters's list sort for Python
             * (<a href="http://svn.python.org/projects/python/trunk/Objects/listsort.txt">
             * TimSort</a>).  It uses techniques from Peter McIlroy's "Optimistic
             * Sorting and Information Theoretic Complexity", in Proceedings of the
             * Fourth Annual ACM-SIAM Symposium on Discrete Algorithms, pp 467-474,
             * January 1993.
             * @param <T> the class of the objects to be sorted
             * @param a the array to be sorted
             * @param fromIndex the index of the first element (inclusive) to be
             *         sorted
             * @param toIndex the index of the last element (exclusive) to be sorted
             * @param c the comparator to determine the order of the array.  A
             *         {#code null} value indicates that the elements'
             *         {@linkplain Comparable natural ordering} should be used.
             * @throws ClassCastException if the array contains elements that are not
             *          <i>mutually comparable</i> using the specified comparator.
             * @throws IllegalArgumentException if {#code fromIndex > toIndex} or
             *          (optional) if the comparator is found to violate the
             *          {@link Comparator} contract
             * @throws ArrayIndexOutOfBoundsException if {#code fromIndex < 0} or
             *          {@code toIndex > a.length}
             */
            // @ts-ignore
            public static sort<T>(a: T[], fromIndex: number /*int*/, toIndex: number /*int*/, c: java.util.Comparator<any>): void
            /**
             * Cumulates, in parallel, each element of the given array in place,
             * using the supplied function. For example if the array initially
             * holds {@code [2, 1, 0, 3]} and the operation performs addition,
             * then upon return the array holds {@code [2, 3, 3, 6]}.
             * Parallel prefix computation is usually more efficient than
             * sequential loops for large arrays.
             * @param <T> the class of the objects in the array
             * @param array the array, which is modified in-place by this method
             * @param op a side-effect-free, associative function to perform the
             *  cumulation
             * @throws NullPointerException if the specified array or function is null
             * @since 1.8
             */
            // @ts-ignore
            public static parallelPrefix<T>(array: T[], op: java.util.function$.BinaryOperator<T>): void
            /**
             * Performs {@link #parallelPrefix(Object[], BinaryOperator)}
             * for the given subrange of the array.
             * @param <T> the class of the objects in the array
             * @param array the array
             * @param fromIndex the index of the first element, inclusive
             * @param toIndex the index of the last element, exclusive
             * @param op a side-effect-free, associative function to perform the
             *  cumulation
             * @throws IllegalArgumentException if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *      if {#code fromIndex < 0} or {@code toIndex > array.length}
             * @throws NullPointerException if the specified array or function is null
             * @since 1.8
             */
            // @ts-ignore
            public static parallelPrefix<T>(array: T[], fromIndex: number /*int*/, toIndex: number /*int*/, op: java.util.function$.BinaryOperator<T>): void
            /**
             * Cumulates, in parallel, each element of the given array in place,
             * using the supplied function. For example if the array initially
             * holds {@code [2, 1, 0, 3]} and the operation performs addition,
             * then upon return the array holds {@code [2, 3, 3, 6]}.
             * Parallel prefix computation is usually more efficient than
             * sequential loops for large arrays.
             * @param array the array, which is modified in-place by this method
             * @param op a side-effect-free, associative function to perform the
             *  cumulation
             * @throws NullPointerException if the specified array or function is null
             * @since 1.8
             */
            // @ts-ignore
            public static parallelPrefix(array: number /*long*/[], op: java.util.function$.LongBinaryOperator): void
            /**
             * Performs {@link #parallelPrefix(long[], LongBinaryOperator)}
             * for the given subrange of the array.
             * @param array the array
             * @param fromIndex the index of the first element, inclusive
             * @param toIndex the index of the last element, exclusive
             * @param op a side-effect-free, associative function to perform the
             *  cumulation
             * @throws IllegalArgumentException if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *      if {#code fromIndex < 0} or {@code toIndex > array.length}
             * @throws NullPointerException if the specified array or function is null
             * @since 1.8
             */
            // @ts-ignore
            public static parallelPrefix(array: number /*long*/[], fromIndex: number /*int*/, toIndex: number /*int*/, op: java.util.function$.LongBinaryOperator): void
            /**
             * Cumulates, in parallel, each element of the given array in place,
             * using the supplied function. For example if the array initially
             * holds {@code [2.0, 1.0, 0.0, 3.0]} and the operation performs addition,
             * then upon return the array holds {@code [2.0, 3.0, 3.0, 6.0]}.
             * Parallel prefix computation is usually more efficient than
             * sequential loops for large arrays.
             * <p> Because floating-point operations may not be strictly associative,
             * the returned result may not be identical to the value that would be
             * obtained if the operation was performed sequentially.
             * @param array the array, which is modified in-place by this method
             * @param op a side-effect-free function to perform the cumulation
             * @throws NullPointerException if the specified array or function is null
             * @since 1.8
             */
            // @ts-ignore
            public static parallelPrefix(array: number /*double*/[], op: java.util.function$.DoubleBinaryOperator): void
            /**
             * Performs {@link #parallelPrefix(double[], DoubleBinaryOperator)}
             * for the given subrange of the array.
             * @param array the array
             * @param fromIndex the index of the first element, inclusive
             * @param toIndex the index of the last element, exclusive
             * @param op a side-effect-free, associative function to perform the
             *  cumulation
             * @throws IllegalArgumentException if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *      if {#code fromIndex < 0} or {@code toIndex > array.length}
             * @throws NullPointerException if the specified array or function is null
             * @since 1.8
             */
            // @ts-ignore
            public static parallelPrefix(array: number /*double*/[], fromIndex: number /*int*/, toIndex: number /*int*/, op: java.util.function$.DoubleBinaryOperator): void
            /**
             * Cumulates, in parallel, each element of the given array in place,
             * using the supplied function. For example if the array initially
             * holds {@code [2, 1, 0, 3]} and the operation performs addition,
             * then upon return the array holds {@code [2, 3, 3, 6]}.
             * Parallel prefix computation is usually more efficient than
             * sequential loops for large arrays.
             * @param array the array, which is modified in-place by this method
             * @param op a side-effect-free, associative function to perform the
             *  cumulation
             * @throws NullPointerException if the specified array or function is null
             * @since 1.8
             */
            // @ts-ignore
            public static parallelPrefix(array: number /*int*/[], op: java.util.function$.IntBinaryOperator): void
            /**
             * Performs {@link #parallelPrefix(int[], IntBinaryOperator)}
             * for the given subrange of the array.
             * @param array the array
             * @param fromIndex the index of the first element, inclusive
             * @param toIndex the index of the last element, exclusive
             * @param op a side-effect-free, associative function to perform the
             *  cumulation
             * @throws IllegalArgumentException if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *      if {#code fromIndex < 0} or {@code toIndex > array.length}
             * @throws NullPointerException if the specified array or function is null
             * @since 1.8
             */
            // @ts-ignore
            public static parallelPrefix(array: number /*int*/[], fromIndex: number /*int*/, toIndex: number /*int*/, op: java.util.function$.IntBinaryOperator): void
            /**
             * Searches the specified array of longs for the specified value using the
             * binary search algorithm.  The array must be sorted (as
             * by the {@link #sort(long[])} method) prior to making this call.  If it
             * is not sorted, the results are undefined.  If the array contains
             * multiple elements with the specified value, there is no guarantee which
             * one will be found.
             * @param a the array to be searched
             * @param key the value to be searched for
             * @return index of the search key, if it is contained in the array;
             *          otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>.  The
             *          <i>insertion point</i> is defined as the point at which the
             *          key would be inserted into the array: the index of the first
             *          element greater than the key, or <tt>a.length</tt> if all
             *          elements in the array are less than the specified key.  Note
             *          that this guarantees that the return value will be &gt;= 0 if
             *          and only if the key is found.
             */
            // @ts-ignore
            public static binarySearch(a: number /*long*/[], key: number /*long*/): number /*int*/
            /**
             * Searches a range of
             * the specified array of longs for the specified value using the
             * binary search algorithm.
             * The range must be sorted (as
             * by the {@link #sort(long[], int, int)} method)
             * prior to making this call.  If it
             * is not sorted, the results are undefined.  If the range contains
             * multiple elements with the specified value, there is no guarantee which
             * one will be found.
             * @param a the array to be searched
             * @param fromIndex the index of the first element (inclusive) to be
             *           searched
             * @param toIndex the index of the last element (exclusive) to be searched
             * @param key the value to be searched for
             * @return index of the search key, if it is contained in the array
             *          within the specified range;
             *          otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>.  The
             *          <i>insertion point</i> is defined as the point at which the
             *          key would be inserted into the array: the index of the first
             *          element in the range greater than the key,
             *          or <tt>toIndex</tt> if all
             *          elements in the range are less than the specified key.  Note
             *          that this guarantees that the return value will be &gt;= 0 if
             *          and only if the key is found.
             * @throws IllegalArgumentException
             *          if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *          if {#code fromIndex < 0 or toIndex > a.length}
             * @since 1.6
             */
            // @ts-ignore
            public static binarySearch(a: number /*long*/[], fromIndex: number /*int*/, toIndex: number /*int*/, key: number /*long*/): number /*int*/
            /**
             * Searches the specified array of ints for the specified value using the
             * binary search algorithm.  The array must be sorted (as
             * by the {@link #sort(int[])} method) prior to making this call.  If it
             * is not sorted, the results are undefined.  If the array contains
             * multiple elements with the specified value, there is no guarantee which
             * one will be found.
             * @param a the array to be searched
             * @param key the value to be searched for
             * @return index of the search key, if it is contained in the array;
             *          otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>.  The
             *          <i>insertion point</i> is defined as the point at which the
             *          key would be inserted into the array: the index of the first
             *          element greater than the key, or <tt>a.length</tt> if all
             *          elements in the array are less than the specified key.  Note
             *          that this guarantees that the return value will be &gt;= 0 if
             *          and only if the key is found.
             */
            // @ts-ignore
            public static binarySearch(a: number /*int*/[], key: number /*int*/): number /*int*/
            /**
             * Searches a range of
             * the specified array of ints for the specified value using the
             * binary search algorithm.
             * The range must be sorted (as
             * by the {@link #sort(int[], int, int)} method)
             * prior to making this call.  If it
             * is not sorted, the results are undefined.  If the range contains
             * multiple elements with the specified value, there is no guarantee which
             * one will be found.
             * @param a the array to be searched
             * @param fromIndex the index of the first element (inclusive) to be
             *           searched
             * @param toIndex the index of the last element (exclusive) to be searched
             * @param key the value to be searched for
             * @return index of the search key, if it is contained in the array
             *          within the specified range;
             *          otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>.  The
             *          <i>insertion point</i> is defined as the point at which the
             *          key would be inserted into the array: the index of the first
             *          element in the range greater than the key,
             *          or <tt>toIndex</tt> if all
             *          elements in the range are less than the specified key.  Note
             *          that this guarantees that the return value will be &gt;= 0 if
             *          and only if the key is found.
             * @throws IllegalArgumentException
             *          if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *          if {#code fromIndex < 0 or toIndex > a.length}
             * @since 1.6
             */
            // @ts-ignore
            public static binarySearch(a: number /*int*/[], fromIndex: number /*int*/, toIndex: number /*int*/, key: number /*int*/): number /*int*/
            /**
             * Searches the specified array of shorts for the specified value using
             * the binary search algorithm.  The array must be sorted
             * (as by the {@link #sort(short[])} method) prior to making this call.  If
             * it is not sorted, the results are undefined.  If the array contains
             * multiple elements with the specified value, there is no guarantee which
             * one will be found.
             * @param a the array to be searched
             * @param key the value to be searched for
             * @return index of the search key, if it is contained in the array;
             *          otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>.  The
             *          <i>insertion point</i> is defined as the point at which the
             *          key would be inserted into the array: the index of the first
             *          element greater than the key, or <tt>a.length</tt> if all
             *          elements in the array are less than the specified key.  Note
             *          that this guarantees that the return value will be &gt;= 0 if
             *          and only if the key is found.
             */
            // @ts-ignore
            public static binarySearch(a: number /*short*/[], key: number /*short*/): number /*int*/
            /**
             * Searches a range of
             * the specified array of shorts for the specified value using
             * the binary search algorithm.
             * The range must be sorted
             * (as by the {@link #sort(short[], int, int)} method)
             * prior to making this call.  If
             * it is not sorted, the results are undefined.  If the range contains
             * multiple elements with the specified value, there is no guarantee which
             * one will be found.
             * @param a the array to be searched
             * @param fromIndex the index of the first element (inclusive) to be
             *           searched
             * @param toIndex the index of the last element (exclusive) to be searched
             * @param key the value to be searched for
             * @return index of the search key, if it is contained in the array
             *          within the specified range;
             *          otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>.  The
             *          <i>insertion point</i> is defined as the point at which the
             *          key would be inserted into the array: the index of the first
             *          element in the range greater than the key,
             *          or <tt>toIndex</tt> if all
             *          elements in the range are less than the specified key.  Note
             *          that this guarantees that the return value will be &gt;= 0 if
             *          and only if the key is found.
             * @throws IllegalArgumentException
             *          if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *          if {#code fromIndex < 0 or toIndex > a.length}
             * @since 1.6
             */
            // @ts-ignore
            public static binarySearch(a: number /*short*/[], fromIndex: number /*int*/, toIndex: number /*int*/, key: number /*short*/): number /*int*/
            /**
             * Searches the specified array of chars for the specified value using the
             * binary search algorithm.  The array must be sorted (as
             * by the {@link #sort(char[])} method) prior to making this call.  If it
             * is not sorted, the results are undefined.  If the array contains
             * multiple elements with the specified value, there is no guarantee which
             * one will be found.
             * @param a the array to be searched
             * @param key the value to be searched for
             * @return index of the search key, if it is contained in the array;
             *          otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>.  The
             *          <i>insertion point</i> is defined as the point at which the
             *          key would be inserted into the array: the index of the first
             *          element greater than the key, or <tt>a.length</tt> if all
             *          elements in the array are less than the specified key.  Note
             *          that this guarantees that the return value will be &gt;= 0 if
             *          and only if the key is found.
             */
            // @ts-ignore
            public static binarySearch(a: string[], key: string): number /*int*/
            /**
             * Searches a range of
             * the specified array of chars for the specified value using the
             * binary search algorithm.
             * The range must be sorted (as
             * by the {@link #sort(char[], int, int)} method)
             * prior to making this call.  If it
             * is not sorted, the results are undefined.  If the range contains
             * multiple elements with the specified value, there is no guarantee which
             * one will be found.
             * @param a the array to be searched
             * @param fromIndex the index of the first element (inclusive) to be
             *           searched
             * @param toIndex the index of the last element (exclusive) to be searched
             * @param key the value to be searched for
             * @return index of the search key, if it is contained in the array
             *          within the specified range;
             *          otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>.  The
             *          <i>insertion point</i> is defined as the point at which the
             *          key would be inserted into the array: the index of the first
             *          element in the range greater than the key,
             *          or <tt>toIndex</tt> if all
             *          elements in the range are less than the specified key.  Note
             *          that this guarantees that the return value will be &gt;= 0 if
             *          and only if the key is found.
             * @throws IllegalArgumentException
             *          if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *          if {#code fromIndex < 0 or toIndex > a.length}
             * @since 1.6
             */
            // @ts-ignore
            public static binarySearch(a: string[], fromIndex: number /*int*/, toIndex: number /*int*/, key: string): number /*int*/
            /**
             * Searches the specified array of bytes for the specified value using the
             * binary search algorithm.  The array must be sorted (as
             * by the {@link #sort(byte[])} method) prior to making this call.  If it
             * is not sorted, the results are undefined.  If the array contains
             * multiple elements with the specified value, there is no guarantee which
             * one will be found.
             * @param a the array to be searched
             * @param key the value to be searched for
             * @return index of the search key, if it is contained in the array;
             *          otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>.  The
             *          <i>insertion point</i> is defined as the point at which the
             *          key would be inserted into the array: the index of the first
             *          element greater than the key, or <tt>a.length</tt> if all
             *          elements in the array are less than the specified key.  Note
             *          that this guarantees that the return value will be &gt;= 0 if
             *          and only if the key is found.
             */
            // @ts-ignore
            public static binarySearch(a: number /*byte*/[], key: number /*byte*/): number /*int*/
            /**
             * Searches a range of
             * the specified array of bytes for the specified value using the
             * binary search algorithm.
             * The range must be sorted (as
             * by the {@link #sort(byte[], int, int)} method)
             * prior to making this call.  If it
             * is not sorted, the results are undefined.  If the range contains
             * multiple elements with the specified value, there is no guarantee which
             * one will be found.
             * @param a the array to be searched
             * @param fromIndex the index of the first element (inclusive) to be
             *           searched
             * @param toIndex the index of the last element (exclusive) to be searched
             * @param key the value to be searched for
             * @return index of the search key, if it is contained in the array
             *          within the specified range;
             *          otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>.  The
             *          <i>insertion point</i> is defined as the point at which the
             *          key would be inserted into the array: the index of the first
             *          element in the range greater than the key,
             *          or <tt>toIndex</tt> if all
             *          elements in the range are less than the specified key.  Note
             *          that this guarantees that the return value will be &gt;= 0 if
             *          and only if the key is found.
             * @throws IllegalArgumentException
             *          if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *          if {#code fromIndex < 0 or toIndex > a.length}
             * @since 1.6
             */
            // @ts-ignore
            public static binarySearch(a: number /*byte*/[], fromIndex: number /*int*/, toIndex: number /*int*/, key: number /*byte*/): number /*int*/
            /**
             * Searches the specified array of doubles for the specified value using
             * the binary search algorithm.  The array must be sorted
             * (as by the {@link #sort(double[])} method) prior to making this call.
             * If it is not sorted, the results are undefined.  If the array contains
             * multiple elements with the specified value, there is no guarantee which
             * one will be found.  This method considers all NaN values to be
             * equivalent and equal.
             * @param a the array to be searched
             * @param key the value to be searched for
             * @return index of the search key, if it is contained in the array;
             *          otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>.  The
             *          <i>insertion point</i> is defined as the point at which the
             *          key would be inserted into the array: the index of the first
             *          element greater than the key, or <tt>a.length</tt> if all
             *          elements in the array are less than the specified key.  Note
             *          that this guarantees that the return value will be &gt;= 0 if
             *          and only if the key is found.
             */
            // @ts-ignore
            public static binarySearch(a: number /*double*/[], key: number /*double*/): number /*int*/
            /**
             * Searches a range of
             * the specified array of doubles for the specified value using
             * the binary search algorithm.
             * The range must be sorted
             * (as by the {@link #sort(double[], int, int)} method)
             * prior to making this call.
             * If it is not sorted, the results are undefined.  If the range contains
             * multiple elements with the specified value, there is no guarantee which
             * one will be found.  This method considers all NaN values to be
             * equivalent and equal.
             * @param a the array to be searched
             * @param fromIndex the index of the first element (inclusive) to be
             *           searched
             * @param toIndex the index of the last element (exclusive) to be searched
             * @param key the value to be searched for
             * @return index of the search key, if it is contained in the array
             *          within the specified range;
             *          otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>.  The
             *          <i>insertion point</i> is defined as the point at which the
             *          key would be inserted into the array: the index of the first
             *          element in the range greater than the key,
             *          or <tt>toIndex</tt> if all
             *          elements in the range are less than the specified key.  Note
             *          that this guarantees that the return value will be &gt;= 0 if
             *          and only if the key is found.
             * @throws IllegalArgumentException
             *          if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *          if {#code fromIndex < 0 or toIndex > a.length}
             * @since 1.6
             */
            // @ts-ignore
            public static binarySearch(a: number /*double*/[], fromIndex: number /*int*/, toIndex: number /*int*/, key: number /*double*/): number /*int*/
            /**
             * Searches the specified array of floats for the specified value using
             * the binary search algorithm. The array must be sorted
             * (as by the {@link #sort(float[])} method) prior to making this call. If
             * it is not sorted, the results are undefined. If the array contains
             * multiple elements with the specified value, there is no guarantee which
             * one will be found. This method considers all NaN values to be
             * equivalent and equal.
             * @param a the array to be searched
             * @param key the value to be searched for
             * @return index of the search key, if it is contained in the array;
             *          otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The
             *          <i>insertion point</i> is defined as the point at which the
             *          key would be inserted into the array: the index of the first
             *          element greater than the key, or <tt>a.length</tt> if all
             *          elements in the array are less than the specified key. Note
             *          that this guarantees that the return value will be &gt;= 0 if
             *          and only if the key is found.
             */
            // @ts-ignore
            public static binarySearch(a: number /*float*/[], key: number /*float*/): number /*int*/
            /**
             * Searches a range of
             * the specified array of floats for the specified value using
             * the binary search algorithm.
             * The range must be sorted
             * (as by the {@link #sort(float[], int, int)} method)
             * prior to making this call. If
             * it is not sorted, the results are undefined. If the range contains
             * multiple elements with the specified value, there is no guarantee which
             * one will be found. This method considers all NaN values to be
             * equivalent and equal.
             * @param a the array to be searched
             * @param fromIndex the index of the first element (inclusive) to be
             *           searched
             * @param toIndex the index of the last element (exclusive) to be searched
             * @param key the value to be searched for
             * @return index of the search key, if it is contained in the array
             *          within the specified range;
             *          otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The
             *          <i>insertion point</i> is defined as the point at which the
             *          key would be inserted into the array: the index of the first
             *          element in the range greater than the key,
             *          or <tt>toIndex</tt> if all
             *          elements in the range are less than the specified key. Note
             *          that this guarantees that the return value will be &gt;= 0 if
             *          and only if the key is found.
             * @throws IllegalArgumentException
             *          if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *          if {#code fromIndex < 0 or toIndex > a.length}
             * @since 1.6
             */
            // @ts-ignore
            public static binarySearch(a: number /*float*/[], fromIndex: number /*int*/, toIndex: number /*int*/, key: number /*float*/): number /*int*/
            /**
             * Searches the specified array for the specified object using the binary
             * search algorithm. The array must be sorted into ascending order
             * according to the
             * {@linkplain Comparable natural ordering}
             * of its elements (as by the
             * {@link #sort(Object[])} method) prior to making this call.
             * If it is not sorted, the results are undefined.
             * (If the array contains elements that are not mutually comparable (for
             * example, strings and integers), it <i>cannot</i> be sorted according
             * to the natural ordering of its elements, hence results are undefined.)
             * If the array contains multiple
             * elements equal to the specified object, there is no guarantee which
             * one will be found.
             * @param a the array to be searched
             * @param key the value to be searched for
             * @return index of the search key, if it is contained in the array;
             *          otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>.  The
             *          <i>insertion point</i> is defined as the point at which the
             *          key would be inserted into the array: the index of the first
             *          element greater than the key, or <tt>a.length</tt> if all
             *          elements in the array are less than the specified key.  Note
             *          that this guarantees that the return value will be &gt;= 0 if
             *          and only if the key is found.
             * @throws ClassCastException if the search key is not comparable to the
             *          elements of the array.
             */
            // @ts-ignore
            public static binarySearch(a: java.lang.Object[] | any[], key: java.lang.Object | any): number /*int*/
            /**
             * Searches a range of
             * the specified array for the specified object using the binary
             * search algorithm.
             * The range must be sorted into ascending order
             * according to the
             * {@linkplain Comparable natural ordering}
             * of its elements (as by the
             * {@link #sort(Object[], int, int)} method) prior to making this
             * call.  If it is not sorted, the results are undefined.
             * (If the range contains elements that are not mutually comparable (for
             * example, strings and integers), it <i>cannot</i> be sorted according
             * to the natural ordering of its elements, hence results are undefined.)
             * If the range contains multiple
             * elements equal to the specified object, there is no guarantee which
             * one will be found.
             * @param a the array to be searched
             * @param fromIndex the index of the first element (inclusive) to be
             *           searched
             * @param toIndex the index of the last element (exclusive) to be searched
             * @param key the value to be searched for
             * @return index of the search key, if it is contained in the array
             *          within the specified range;
             *          otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>.  The
             *          <i>insertion point</i> is defined as the point at which the
             *          key would be inserted into the array: the index of the first
             *          element in the range greater than the key,
             *          or <tt>toIndex</tt> if all
             *          elements in the range are less than the specified key.  Note
             *          that this guarantees that the return value will be &gt;= 0 if
             *          and only if the key is found.
             * @throws ClassCastException if the search key is not comparable to the
             *          elements of the array within the specified range.
             * @throws IllegalArgumentException
             *          if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *          if {#code fromIndex < 0 or toIndex > a.length}
             * @since 1.6
             */
            // @ts-ignore
            public static binarySearch(a: java.lang.Object[] | any[], fromIndex: number /*int*/, toIndex: number /*int*/, key: java.lang.Object | any): number /*int*/
            /**
             * Searches the specified array for the specified object using the binary
             * search algorithm.  The array must be sorted into ascending order
             * according to the specified comparator (as by the
             * {@link #sort(Object[], Comparator) sort(T[], Comparator)}
             * method) prior to making this call.  If it is
             * not sorted, the results are undefined.
             * If the array contains multiple
             * elements equal to the specified object, there is no guarantee which one
             * will be found.
             * @param <T> the class of the objects in the array
             * @param a the array to be searched
             * @param key the value to be searched for
             * @param c the comparator by which the array is ordered.  A
             *         <tt>null</tt> value indicates that the elements'
             *         {#linkplain Comparable natural ordering} should be used.
             * @return index of the search key, if it is contained in the array;
             *          otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>.  The
             *          <i>insertion point</i> is defined as the point at which the
             *          key would be inserted into the array: the index of the first
             *          element greater than the key, or <tt>a.length</tt> if all
             *          elements in the array are less than the specified key.  Note
             *          that this guarantees that the return value will be &gt;= 0 if
             *          and only if the key is found.
             * @throws ClassCastException if the array contains elements that are not
             *          <i>mutually comparable</i> using the specified comparator,
             *          or the search key is not comparable to the
             *          elements of the array using this comparator.
             */
            // @ts-ignore
            public static binarySearch<T>(a: T[], key: T, c: java.util.Comparator<any>): number /*int*/
            /**
             * Searches a range of
             * the specified array for the specified object using the binary
             * search algorithm.
             * The range must be sorted into ascending order
             * according to the specified comparator (as by the
             * {@link #sort(Object[], int, int, Comparator)
             * sort(T[], int, int, Comparator)}
             * method) prior to making this call.
             * If it is not sorted, the results are undefined.
             * If the range contains multiple elements equal to the specified object,
             * there is no guarantee which one will be found.
             * @param <T> the class of the objects in the array
             * @param a the array to be searched
             * @param fromIndex the index of the first element (inclusive) to be
             *           searched
             * @param toIndex the index of the last element (exclusive) to be searched
             * @param key the value to be searched for
             * @param c the comparator by which the array is ordered.  A
             *         <tt>null</tt> value indicates that the elements'
             *         {#linkplain Comparable natural ordering} should be used.
             * @return index of the search key, if it is contained in the array
             *          within the specified range;
             *          otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>.  The
             *          <i>insertion point</i> is defined as the point at which the
             *          key would be inserted into the array: the index of the first
             *          element in the range greater than the key,
             *          or <tt>toIndex</tt> if all
             *          elements in the range are less than the specified key.  Note
             *          that this guarantees that the return value will be &gt;= 0 if
             *          and only if the key is found.
             * @throws ClassCastException if the range contains elements that are not
             *          <i>mutually comparable</i> using the specified comparator,
             *          or the search key is not comparable to the
             *          elements in the range using this comparator.
             * @throws IllegalArgumentException
             *          if {#code fromIndex > toIndex}
             * @throws ArrayIndexOutOfBoundsException
             *          if {#code fromIndex < 0 or toIndex > a.length}
             * @since 1.6
             */
            // @ts-ignore
            public static binarySearch<T>(a: T[], fromIndex: number /*int*/, toIndex: number /*int*/, key: T, c: java.util.Comparator<any>): number /*int*/
            /**
             * Returns <tt>true</tt> if the two specified arrays of longs are
             * <i>equal</i> to one another.  Two arrays are considered equal if both
             * arrays contain the same number of elements, and all corresponding pairs
             * of elements in the two arrays are equal.  In other words, two arrays
             * are equal if they contain the same elements in the same order.  Also,
             * two array references are considered equal if both are <tt>null</tt>.<p>
             * @param a one array to be tested for equality
             * @param a2 the other array to be tested for equality
             * @return <tt>true</tt> if the two arrays are equal
             */
            // @ts-ignore
            public static equals(a: number /*long*/[], a2: number /*long*/[]): boolean
            /**
             * Returns <tt>true</tt> if the two specified arrays of ints are
             * <i>equal</i> to one another.  Two arrays are considered equal if both
             * arrays contain the same number of elements, and all corresponding pairs
             * of elements in the two arrays are equal.  In other words, two arrays
             * are equal if they contain the same elements in the same order.  Also,
             * two array references are considered equal if both are <tt>null</tt>.<p>
             * @param a one array to be tested for equality
             * @param a2 the other array to be tested for equality
             * @return <tt>true</tt> if the two arrays are equal
             */
            // @ts-ignore
            public static equals(a: number /*int*/[], a2: number /*int*/[]): boolean
            /**
             * Returns <tt>true</tt> if the two specified arrays of shorts are
             * <i>equal</i> to one another.  Two arrays are considered equal if both
             * arrays contain the same number of elements, and all corresponding pairs
             * of elements in the two arrays are equal.  In other words, two arrays
             * are equal if they contain the same elements in the same order.  Also,
             * two array references are considered equal if both are <tt>null</tt>.<p>
             * @param a one array to be tested for equality
             * @param a2 the other array to be tested for equality
             * @return <tt>true</tt> if the two arrays are equal
             */
            // @ts-ignore
            public static equals(a: number /*short*/[], a2: number /*short*/[]): boolean
            /**
             * Returns <tt>true</tt> if the two specified arrays of chars are
             * <i>equal</i> to one another.  Two arrays are considered equal if both
             * arrays contain the same number of elements, and all corresponding pairs
             * of elements in the two arrays are equal.  In other words, two arrays
             * are equal if they contain the same elements in the same order.  Also,
             * two array references are considered equal if both are <tt>null</tt>.<p>
             * @param a one array to be tested for equality
             * @param a2 the other array to be tested for equality
             * @return <tt>true</tt> if the two arrays are equal
             */
            // @ts-ignore
            public static equals(a: string[], a2: string[]): boolean
            /**
             * Returns <tt>true</tt> if the two specified arrays of bytes are
             * <i>equal</i> to one another.  Two arrays are considered equal if both
             * arrays contain the same number of elements, and all corresponding pairs
             * of elements in the two arrays are equal.  In other words, two arrays
             * are equal if they contain the same elements in the same order.  Also,
             * two array references are considered equal if both are <tt>null</tt>.<p>
             * @param a one array to be tested for equality
             * @param a2 the other array to be tested for equality
             * @return <tt>true</tt> if the two arrays are equal
             */
            // @ts-ignore
            public static equals(a: number /*byte*/[], a2: number /*byte*/[]): boolean
            /**
             * Returns <tt>true</tt> if the two specified arrays of booleans are
             * <i>equal</i> to one another.  Two arrays are considered equal if both
             * arrays contain the same number of elements, and all corresponding pairs
             * of elements in the two arrays are equal.  In other words, two arrays
             * are equal if they contain the same elements in the same order.  Also,
             * two array references are considered equal if both are <tt>null</tt>.<p>
             * @param a one array to be tested for equality
             * @param a2 the other array to be tested for equality
             * @return <tt>true</tt> if the two arrays are equal
             */
            // @ts-ignore
            public static equals(a: boolean[], a2: boolean[]): boolean
            /**
             * Returns <tt>true</tt> if the two specified arrays of doubles are
             * <i>equal</i> to one another.  Two arrays are considered equal if both
             * arrays contain the same number of elements, and all corresponding pairs
             * of elements in the two arrays are equal.  In other words, two arrays
             * are equal if they contain the same elements in the same order.  Also,
             * two array references are considered equal if both are <tt>null</tt>.<p>
             * Two doubles <tt>d1</tt> and <tt>d2</tt> are considered equal if:
             * <pre>    <tt>new Double(d1).equals(new Double(d2))</tt></pre>
             * (Unlike the <tt>==</tt> operator, this method considers
             * <tt>NaN</tt> equals to itself, and 0.0d unequal to -0.0d.)
             * @param a one array to be tested for equality
             * @param a2 the other array to be tested for equality
             * @return <tt>true</tt> if the two arrays are equal
             * @see Double#equals(Object)
             */
            // @ts-ignore
            public static equals(a: number /*double*/[], a2: number /*double*/[]): boolean
            /**
             * Returns <tt>true</tt> if the two specified arrays of floats are
             * <i>equal</i> to one another.  Two arrays are considered equal if both
             * arrays contain the same number of elements, and all corresponding pairs
             * of elements in the two arrays are equal.  In other words, two arrays
             * are equal if they contain the same elements in the same order.  Also,
             * two array references are considered equal if both are <tt>null</tt>.<p>
             * Two floats <tt>f1</tt> and <tt>f2</tt> are considered equal if:
             * <pre>    <tt>new Float(f1).equals(new Float(f2))</tt></pre>
             * (Unlike the <tt>==</tt> operator, this method considers
             * <tt>NaN</tt> equals to itself, and 0.0f unequal to -0.0f.)
             * @param a one array to be tested for equality
             * @param a2 the other array to be tested for equality
             * @return <tt>true</tt> if the two arrays are equal
             * @see Float#equals(Object)
             */
            // @ts-ignore
            public static equals(a: number /*float*/[], a2: number /*float*/[]): boolean
            /**
             * Returns <tt>true</tt> if the two specified arrays of Objects are
             * <i>equal</i> to one another.  The two arrays are considered equal if
             * both arrays contain the same number of elements, and all corresponding
             * pairs of elements in the two arrays are equal.  Two objects <tt>e1</tt>
             * and <tt>e2</tt> are considered <i>equal</i> if <tt>(e1==null ? e2==null
             * : e1.equals(e2))</tt>.  In other words, the two arrays are equal if
             * they contain the same elements in the same order.  Also, two array
             * references are considered equal if both are <tt>null</tt>.<p>
             * @param a one array to be tested for equality
             * @param a2 the other array to be tested for equality
             * @return <tt>true</tt> if the two arrays are equal
             */
            // @ts-ignore
            public static equals(a: java.lang.Object[] | any[], a2: java.lang.Object[] | any[]): boolean
            /**
             * Assigns the specified long value to each element of the specified array
             * of longs.
             * @param a the array to be filled
             * @param val the value to be stored in all elements of the array
             */
            // @ts-ignore
            public static fill(a: number /*long*/[], val: number /*long*/): void
            /**
             * Assigns the specified long value to each element of the specified
             * range of the specified array of longs.  The range to be filled
             * extends from index <tt>fromIndex</tt>, inclusive, to index
             * <tt>toIndex</tt>, exclusive.  (If <tt>fromIndex==toIndex</tt>, the
             * range to be filled is empty.)
             * @param a the array to be filled
             * @param fromIndex the index of the first element (inclusive) to be
             *         filled with the specified value
             * @param toIndex the index of the last element (exclusive) to be
             *         filled with the specified value
             * @param val the value to be stored in all elements of the array
             * @throws IllegalArgumentException if <tt>fromIndex &gt; toIndex</tt>
             * @throws ArrayIndexOutOfBoundsException if <tt>fromIndex &lt; 0</tt> or
             *          <tt>toIndex &gt; a.length</tt>
             */
            // @ts-ignore
            public static fill(a: number /*long*/[], fromIndex: number /*int*/, toIndex: number /*int*/, val: number /*long*/): void
            /**
             * Assigns the specified int value to each element of the specified array
             * of ints.
             * @param a the array to be filled
             * @param val the value to be stored in all elements of the array
             */
            // @ts-ignore
            public static fill(a: number /*int*/[], val: number /*int*/): void
            /**
             * Assigns the specified int value to each element of the specified
             * range of the specified array of ints.  The range to be filled
             * extends from index <tt>fromIndex</tt>, inclusive, to index
             * <tt>toIndex</tt>, exclusive.  (If <tt>fromIndex==toIndex</tt>, the
             * range to be filled is empty.)
             * @param a the array to be filled
             * @param fromIndex the index of the first element (inclusive) to be
             *         filled with the specified value
             * @param toIndex the index of the last element (exclusive) to be
             *         filled with the specified value
             * @param val the value to be stored in all elements of the array
             * @throws IllegalArgumentException if <tt>fromIndex &gt; toIndex</tt>
             * @throws ArrayIndexOutOfBoundsException if <tt>fromIndex &lt; 0</tt> or
             *          <tt>toIndex &gt; a.length</tt>
             */
            // @ts-ignore
            public static fill(a: number /*int*/[], fromIndex: number /*int*/, toIndex: number /*int*/, val: number /*int*/): void
            /**
             * Assigns the specified short value to each element of the specified array
             * of shorts.
             * @param a the array to be filled
             * @param val the value to be stored in all elements of the array
             */
            // @ts-ignore
            public static fill(a: number /*short*/[], val: number /*short*/): void
            /**
             * Assigns the specified short value to each element of the specified
             * range of the specified array of shorts.  The range to be filled
             * extends from index <tt>fromIndex</tt>, inclusive, to index
             * <tt>toIndex</tt>, exclusive.  (If <tt>fromIndex==toIndex</tt>, the
             * range to be filled is empty.)
             * @param a the array to be filled
             * @param fromIndex the index of the first element (inclusive) to be
             *         filled with the specified value
             * @param toIndex the index of the last element (exclusive) to be
             *         filled with the specified value
             * @param val the value to be stored in all elements of the array
             * @throws IllegalArgumentException if <tt>fromIndex &gt; toIndex</tt>
             * @throws ArrayIndexOutOfBoundsException if <tt>fromIndex &lt; 0</tt> or
             *          <tt>toIndex &gt; a.length</tt>
             */
            // @ts-ignore
            public static fill(a: number /*short*/[], fromIndex: number /*int*/, toIndex: number /*int*/, val: number /*short*/): void
            /**
             * Assigns the specified char value to each element of the specified array
             * of chars.
             * @param a the array to be filled
             * @param val the value to be stored in all elements of the array
             */
            // @ts-ignore
            public static fill(a: string[], val: string): void
            /**
             * Assigns the specified char value to each element of the specified
             * range of the specified array of chars.  The range to be filled
             * extends from index <tt>fromIndex</tt>, inclusive, to index
             * <tt>toIndex</tt>, exclusive.  (If <tt>fromIndex==toIndex</tt>, the
             * range to be filled is empty.)
             * @param a the array to be filled
             * @param fromIndex the index of the first element (inclusive) to be
             *         filled with the specified value
             * @param toIndex the index of the last element (exclusive) to be
             *         filled with the specified value
             * @param val the value to be stored in all elements of the array
             * @throws IllegalArgumentException if <tt>fromIndex &gt; toIndex</tt>
             * @throws ArrayIndexOutOfBoundsException if <tt>fromIndex &lt; 0</tt> or
             *          <tt>toIndex &gt; a.length</tt>
             */
            // @ts-ignore
            public static fill(a: string[], fromIndex: number /*int*/, toIndex: number /*int*/, val: string): void
            /**
             * Assigns the specified byte value to each element of the specified array
             * of bytes.
             * @param a the array to be filled
             * @param val the value to be stored in all elements of the array
             */
            // @ts-ignore
            public static fill(a: number /*byte*/[], val: number /*byte*/): void
            /**
             * Assigns the specified byte value to each element of the specified
             * range of the specified array of bytes.  The range to be filled
             * extends from index <tt>fromIndex</tt>, inclusive, to index
             * <tt>toIndex</tt>, exclusive.  (If <tt>fromIndex==toIndex</tt>, the
             * range to be filled is empty.)
             * @param a the array to be filled
             * @param fromIndex the index of the first element (inclusive) to be
             *         filled with the specified value
             * @param toIndex the index of the last element (exclusive) to be
             *         filled with the specified value
             * @param val the value to be stored in all elements of the array
             * @throws IllegalArgumentException if <tt>fromIndex &gt; toIndex</tt>
             * @throws ArrayIndexOutOfBoundsException if <tt>fromIndex &lt; 0</tt> or
             *          <tt>toIndex &gt; a.length</tt>
             */
            // @ts-ignore
            public static fill(a: number /*byte*/[], fromIndex: number /*int*/, toIndex: number /*int*/, val: number /*byte*/): void
            /**
             * Assigns the specified boolean value to each element of the specified
             * array of booleans.
             * @param a the array to be filled
             * @param val the value to be stored in all elements of the array
             */
            // @ts-ignore
            public static fill(a: boolean[], val: boolean): void
            /**
             * Assigns the specified boolean value to each element of the specified
             * range of the specified array of booleans.  The range to be filled
             * extends from index <tt>fromIndex</tt>, inclusive, to index
             * <tt>toIndex</tt>, exclusive.  (If <tt>fromIndex==toIndex</tt>, the
             * range to be filled is empty.)
             * @param a the array to be filled
             * @param fromIndex the index of the first element (inclusive) to be
             *         filled with the specified value
             * @param toIndex the index of the last element (exclusive) to be
             *         filled with the specified value
             * @param val the value to be stored in all elements of the array
             * @throws IllegalArgumentException if <tt>fromIndex &gt; toIndex</tt>
             * @throws ArrayIndexOutOfBoundsException if <tt>fromIndex &lt; 0</tt> or
             *          <tt>toIndex &gt; a.length</tt>
             */
            // @ts-ignore
            public static fill(a: boolean[], fromIndex: number /*int*/, toIndex: number /*int*/, val: boolean): void
            /**
             * Assigns the specified double value to each element of the specified
             * array of doubles.
             * @param a the array to be filled
             * @param val the value to be stored in all elements of the array
             */
            // @ts-ignore
            public static fill(a: number /*double*/[], val: number /*double*/): void
            /**
             * Assigns the specified double value to each element of the specified
             * range of the specified array of doubles.  The range to be filled
             * extends from index <tt>fromIndex</tt>, inclusive, to index
             * <tt>toIndex</tt>, exclusive.  (If <tt>fromIndex==toIndex</tt>, the
             * range to be filled is empty.)
             * @param a the array to be filled
             * @param fromIndex the index of the first element (inclusive) to be
             *         filled with the specified value
             * @param toIndex the index of the last element (exclusive) to be
             *         filled with the specified value
             * @param val the value to be stored in all elements of the array
             * @throws IllegalArgumentException if <tt>fromIndex &gt; toIndex</tt>
             * @throws ArrayIndexOutOfBoundsException if <tt>fromIndex &lt; 0</tt> or
             *          <tt>toIndex &gt; a.length</tt>
             */
            // @ts-ignore
            public static fill(a: number /*double*/[], fromIndex: number /*int*/, toIndex: number /*int*/, val: number /*double*/): void
            /**
             * Assigns the specified float value to each element of the specified array
             * of floats.
             * @param a the array to be filled
             * @param val the value to be stored in all elements of the array
             */
            // @ts-ignore
            public static fill(a: number /*float*/[], val: number /*float*/): void
            /**
             * Assigns the specified float value to each element of the specified
             * range of the specified array of floats.  The range to be filled
             * extends from index <tt>fromIndex</tt>, inclusive, to index
             * <tt>toIndex</tt>, exclusive.  (If <tt>fromIndex==toIndex</tt>, the
             * range to be filled is empty.)
             * @param a the array to be filled
             * @param fromIndex the index of the first element (inclusive) to be
             *         filled with the specified value
             * @param toIndex the index of the last element (exclusive) to be
             *         filled with the specified value
             * @param val the value to be stored in all elements of the array
             * @throws IllegalArgumentException if <tt>fromIndex &gt; toIndex</tt>
             * @throws ArrayIndexOutOfBoundsException if <tt>fromIndex &lt; 0</tt> or
             *          <tt>toIndex &gt; a.length</tt>
             */
            // @ts-ignore
            public static fill(a: number /*float*/[], fromIndex: number /*int*/, toIndex: number /*int*/, val: number /*float*/): void
            /**
             * Assigns the specified Object reference to each element of the specified
             * array of Objects.
             * @param a the array to be filled
             * @param val the value to be stored in all elements of the array
             * @throws ArrayStoreException if the specified value is not of a
             *          runtime type that can be stored in the specified array
             */
            // @ts-ignore
            public static fill(a: java.lang.Object[] | any[], val: java.lang.Object | any): void
            /**
             * Assigns the specified Object reference to each element of the specified
             * range of the specified array of Objects.  The range to be filled
             * extends from index <tt>fromIndex</tt>, inclusive, to index
             * <tt>toIndex</tt>, exclusive.  (If <tt>fromIndex==toIndex</tt>, the
             * range to be filled is empty.)
             * @param a the array to be filled
             * @param fromIndex the index of the first element (inclusive) to be
             *         filled with the specified value
             * @param toIndex the index of the last element (exclusive) to be
             *         filled with the specified value
             * @param val the value to be stored in all elements of the array
             * @throws IllegalArgumentException if <tt>fromIndex &gt; toIndex</tt>
             * @throws ArrayIndexOutOfBoundsException if <tt>fromIndex &lt; 0</tt> or
             *          <tt>toIndex &gt; a.length</tt>
             * @throws ArrayStoreException if the specified value is not of a
             *          runtime type that can be stored in the specified array
             */
            // @ts-ignore
            public static fill(a: java.lang.Object[] | any[], fromIndex: number /*int*/, toIndex: number /*int*/, val: java.lang.Object | any): void
            /**
             * Copies the specified array, truncating or padding with nulls (if necessary)
             * so the copy has the specified length.  For all indices that are
             * valid in both the original array and the copy, the two arrays will
             * contain identical values.  For any indices that are valid in the
             * copy but not the original, the copy will contain <tt>null</tt>.
             * Such indices will exist if and only if the specified length
             * is greater than that of the original array.
             * The resulting array is of exactly the same class as the original array.
             * @param <T> the class of the objects in the array
             * @param original the array to be copied
             * @param newLength the length of the copy to be returned
             * @return a copy of the original array, truncated or padded with nulls
             *      to obtain the specified length
             * @throws NegativeArraySizeException if <tt>newLength</tt> is negative
             * @throws NullPointerException if <tt>original</tt> is null
             * @since 1.6
             */
            // @ts-ignore
            public static copyOf<T>(original: T[], newLength: number /*int*/): T
            /**
             * Copies the specified array, truncating or padding with nulls (if necessary)
             * so the copy has the specified length.  For all indices that are
             * valid in both the original array and the copy, the two arrays will
             * contain identical values.  For any indices that are valid in the
             * copy but not the original, the copy will contain <tt>null</tt>.
             * Such indices will exist if and only if the specified length
             * is greater than that of the original array.
             * The resulting array is of the class <tt>newType</tt>.
             * @param <U> the class of the objects in the original array
             * @param <T> the class of the objects in the returned array
             * @param original the array to be copied
             * @param newLength the length of the copy to be returned
             * @param newType the class of the copy to be returned
             * @return a copy of the original array, truncated or padded with nulls
             *      to obtain the specified length
             * @throws NegativeArraySizeException if <tt>newLength</tt> is negative
             * @throws NullPointerException if <tt>original</tt> is null
             * @throws ArrayStoreException if an element copied from
             *      <tt>original</tt> is not of a runtime type that can be stored in
             *      an array of class <tt>newType</tt>
             * @since 1.6
             */
            // @ts-ignore
            public static copyOf<T, U>(original: U[], newLength: number /*int*/, newType: java.lang.Class<any>): T
            /**
             * Copies the specified array, truncating or padding with zeros (if necessary)
             * so the copy has the specified length.  For all indices that are
             * valid in both the original array and the copy, the two arrays will
             * contain identical values.  For any indices that are valid in the
             * copy but not the original, the copy will contain <tt>(byte)0</tt>.
             * Such indices will exist if and only if the specified length
             * is greater than that of the original array.
             * @param original the array to be copied
             * @param newLength the length of the copy to be returned
             * @return a copy of the original array, truncated or padded with zeros
             *      to obtain the specified length
             * @throws NegativeArraySizeException if <tt>newLength</tt> is negative
             * @throws NullPointerException if <tt>original</tt> is null
             * @since 1.6
             */
            // @ts-ignore
            public static copyOf(original: number /*byte*/[], newLength: number /*int*/): number /*byte*/[]
            /**
             * Copies the specified array, truncating or padding with zeros (if necessary)
             * so the copy has the specified length.  For all indices that are
             * valid in both the original array and the copy, the two arrays will
             * contain identical values.  For any indices that are valid in the
             * copy but not the original, the copy will contain <tt>(short)0</tt>.
             * Such indices will exist if and only if the specified length
             * is greater than that of the original array.
             * @param original the array to be copied
             * @param newLength the length of the copy to be returned
             * @return a copy of the original array, truncated or padded with zeros
             *      to obtain the specified length
             * @throws NegativeArraySizeException if <tt>newLength</tt> is negative
             * @throws NullPointerException if <tt>original</tt> is null
             * @since 1.6
             */
            // @ts-ignore
            public static copyOf(original: number /*short*/[], newLength: number /*int*/): number /*short*/[]
            /**
             * Copies the specified array, truncating or padding with zeros (if necessary)
             * so the copy has the specified length.  For all indices that are
             * valid in both the original array and the copy, the two arrays will
             * contain identical values.  For any indices that are valid in the
             * copy but not the original, the copy will contain <tt>0</tt>.
             * Such indices will exist if and only if the specified length
             * is greater than that of the original array.
             * @param original the array to be copied
             * @param newLength the length of the copy to be returned
             * @return a copy of the original array, truncated or padded with zeros
             *      to obtain the specified length
             * @throws NegativeArraySizeException if <tt>newLength</tt> is negative
             * @throws NullPointerException if <tt>original</tt> is null
             * @since 1.6
             */
            // @ts-ignore
            public static copyOf(original: number /*int*/[], newLength: number /*int*/): number /*int*/[]
            /**
             * Copies the specified array, truncating or padding with zeros (if necessary)
             * so the copy has the specified length.  For all indices that are
             * valid in both the original array and the copy, the two arrays will
             * contain identical values.  For any indices that are valid in the
             * copy but not the original, the copy will contain <tt>0L</tt>.
             * Such indices will exist if and only if the specified length
             * is greater than that of the original array.
             * @param original the array to be copied
             * @param newLength the length of the copy to be returned
             * @return a copy of the original array, truncated or padded with zeros
             *      to obtain the specified length
             * @throws NegativeArraySizeException if <tt>newLength</tt> is negative
             * @throws NullPointerException if <tt>original</tt> is null
             * @since 1.6
             */
            // @ts-ignore
            public static copyOf(original: number /*long*/[], newLength: number /*int*/): number /*long*/[]
            /**
             * Copies the specified array, truncating or padding with null characters (if necessary)
             * so the copy has the specified length.  For all indices that are valid
             * in both the original array and the copy, the two arrays will contain
             * identical values.  For any indices that are valid in the copy but not
             * the original, the copy will contain <tt>'\\u000'</tt>.  Such indices
             * will exist if and only if the specified length is greater than that of
             * the original array.
             * @param original the array to be copied
             * @param newLength the length of the copy to be returned
             * @return a copy of the original array, truncated or padded with null characters
             *      to obtain the specified length
             * @throws NegativeArraySizeException if <tt>newLength</tt> is negative
             * @throws NullPointerException if <tt>original</tt> is null
             * @since 1.6
             */
            // @ts-ignore
            public static copyOf(original: string[], newLength: number /*int*/): string[]
            /**
             * Copies the specified array, truncating or padding with zeros (if necessary)
             * so the copy has the specified length.  For all indices that are
             * valid in both the original array and the copy, the two arrays will
             * contain identical values.  For any indices that are valid in the
             * copy but not the original, the copy will contain <tt>0f</tt>.
             * Such indices will exist if and only if the specified length
             * is greater than that of the original array.
             * @param original the array to be copied
             * @param newLength the length of the copy to be returned
             * @return a copy of the original array, truncated or padded with zeros
             *      to obtain the specified length
             * @throws NegativeArraySizeException if <tt>newLength</tt> is negative
             * @throws NullPointerException if <tt>original</tt> is null
             * @since 1.6
             */
            // @ts-ignore
            public static copyOf(original: number /*float*/[], newLength: number /*int*/): number /*float*/[]
            /**
             * Copies the specified array, truncating or padding with zeros (if necessary)
             * so the copy has the specified length.  For all indices that are
             * valid in both the original array and the copy, the two arrays will
             * contain identical values.  For any indices that are valid in the
             * copy but not the original, the copy will contain <tt>0d</tt>.
             * Such indices will exist if and only if the specified length
             * is greater than that of the original array.
             * @param original the array to be copied
             * @param newLength the length of the copy to be returned
             * @return a copy of the original array, truncated or padded with zeros
             *      to obtain the specified length
             * @throws NegativeArraySizeException if <tt>newLength</tt> is negative
             * @throws NullPointerException if <tt>original</tt> is null
             * @since 1.6
             */
            // @ts-ignore
            public static copyOf(original: number /*double*/[], newLength: number /*int*/): number /*double*/[]
            /**
             * Copies the specified array, truncating or padding with <tt>false</tt> (if necessary)
             * so the copy has the specified length.  For all indices that are
             * valid in both the original array and the copy, the two arrays will
             * contain identical values.  For any indices that are valid in the
             * copy but not the original, the copy will contain <tt>false</tt>.
             * Such indices will exist if and only if the specified length
             * is greater than that of the original array.
             * @param original the array to be copied
             * @param newLength the length of the copy to be returned
             * @return a copy of the original array, truncated or padded with false elements
             *      to obtain the specified length
             * @throws NegativeArraySizeException if <tt>newLength</tt> is negative
             * @throws NullPointerException if <tt>original</tt> is null
             * @since 1.6
             */
            // @ts-ignore
            public static copyOf(original: boolean[], newLength: number /*int*/): boolean[]
            /**
             * Copies the specified range of the specified array into a new array.
             * The initial index of the range (<tt>from</tt>) must lie between zero
             * and <tt>original.length</tt>, inclusive.  The value at
             * <tt>original[from]</tt> is placed into the initial element of the copy
             * (unless <tt>from == original.length</tt> or <tt>from == to</tt>).
             * Values from subsequent elements in the original array are placed into
             * subsequent elements in the copy.  The final index of the range
             * (<tt>to</tt>), which must be greater than or equal to <tt>from</tt>,
             * may be greater than <tt>original.length</tt>, in which case
             * <tt>null</tt> is placed in all elements of the copy whose index is
             * greater than or equal to <tt>original.length - from</tt>.  The length
             * of the returned array will be <tt>to - from</tt>.
             * <p>
             * The resulting array is of exactly the same class as the original array.
             * @param <T> the class of the objects in the array
             * @param original the array from which a range is to be copied
             * @param from the initial index of the range to be copied, inclusive
             * @param to the final index of the range to be copied, exclusive.
             *      (This index may lie outside the array.)
             * @return a new array containing the specified range from the original array,
             *      truncated or padded with nulls to obtain the required length
             * @throws ArrayIndexOutOfBoundsException if {#code from < 0}
             *      or {@code from > original.length}
             * @throws IllegalArgumentException if <tt>from &gt; to</tt>
             * @throws NullPointerException if <tt>original</tt> is null
             * @since 1.6
             */
            // @ts-ignore
            public static copyOfRange<T>(original: T[], from: number /*int*/, to: number /*int*/): T
            /**
             * Copies the specified range of the specified array into a new array.
             * The initial index of the range (<tt>from</tt>) must lie between zero
             * and <tt>original.length</tt>, inclusive.  The value at
             * <tt>original[from]</tt> is placed into the initial element of the copy
             * (unless <tt>from == original.length</tt> or <tt>from == to</tt>).
             * Values from subsequent elements in the original array are placed into
             * subsequent elements in the copy.  The final index of the range
             * (<tt>to</tt>), which must be greater than or equal to <tt>from</tt>,
             * may be greater than <tt>original.length</tt>, in which case
             * <tt>null</tt> is placed in all elements of the copy whose index is
             * greater than or equal to <tt>original.length - from</tt>.  The length
             * of the returned array will be <tt>to - from</tt>.
             * The resulting array is of the class <tt>newType</tt>.
             * @param <U> the class of the objects in the original array
             * @param <T> the class of the objects in the returned array
             * @param original the array from which a range is to be copied
             * @param from the initial index of the range to be copied, inclusive
             * @param to the final index of the range to be copied, exclusive.
             *      (This index may lie outside the array.)
             * @param newType the class of the copy to be returned
             * @return a new array containing the specified range from the original array,
             *      truncated or padded with nulls to obtain the required length
             * @throws ArrayIndexOutOfBoundsException if {#code from < 0}
             *      or {@code from > original.length}
             * @throws IllegalArgumentException if <tt>from &gt; to</tt>
             * @throws NullPointerException if <tt>original</tt> is null
             * @throws ArrayStoreException if an element copied from
             *      <tt>original</tt> is not of a runtime type that can be stored in
             *      an array of class <tt>newType</tt>.
             * @since 1.6
             */
            // @ts-ignore
            public static copyOfRange<T, U>(original: U[], from: number /*int*/, to: number /*int*/, newType: java.lang.Class<any>): T
            /**
             * Copies the specified range of the specified array into a new array.
             * The initial index of the range (<tt>from</tt>) must lie between zero
             * and <tt>original.length</tt>, inclusive.  The value at
             * <tt>original[from]</tt> is placed into the initial element of the copy
             * (unless <tt>from == original.length</tt> or <tt>from == to</tt>).
             * Values from subsequent elements in the original array are placed into
             * subsequent elements in the copy.  The final index of the range
             * (<tt>to</tt>), which must be greater than or equal to <tt>from</tt>,
             * may be greater than <tt>original.length</tt>, in which case
             * <tt>(byte)0</tt> is placed in all elements of the copy whose index is
             * greater than or equal to <tt>original.length - from</tt>.  The length
             * of the returned array will be <tt>to - from</tt>.
             * @param original the array from which a range is to be copied
             * @param from the initial index of the range to be copied, inclusive
             * @param to the final index of the range to be copied, exclusive.
             *      (This index may lie outside the array.)
             * @return a new array containing the specified range from the original array,
             *      truncated or padded with zeros to obtain the required length
             * @throws ArrayIndexOutOfBoundsException if {#code from < 0}
             *      or {@code from > original.length}
             * @throws IllegalArgumentException if <tt>from &gt; to</tt>
             * @throws NullPointerException if <tt>original</tt> is null
             * @since 1.6
             */
            // @ts-ignore
            public static copyOfRange(original: number /*byte*/[], from: number /*int*/, to: number /*int*/): number /*byte*/[]
            /**
             * Copies the specified range of the specified array into a new array.
             * The initial index of the range (<tt>from</tt>) must lie between zero
             * and <tt>original.length</tt>, inclusive.  The value at
             * <tt>original[from]</tt> is placed into the initial element of the copy
             * (unless <tt>from == original.length</tt> or <tt>from == to</tt>).
             * Values from subsequent elements in the original array are placed into
             * subsequent elements in the copy.  The final index of the range
             * (<tt>to</tt>), which must be greater than or equal to <tt>from</tt>,
             * may be greater than <tt>original.length</tt>, in which case
             * <tt>(short)0</tt> is placed in all elements of the copy whose index is
             * greater than or equal to <tt>original.length - from</tt>.  The length
             * of the returned array will be <tt>to - from</tt>.
             * @param original the array from which a range is to be copied
             * @param from the initial index of the range to be copied, inclusive
             * @param to the final index of the range to be copied, exclusive.
             *      (This index may lie outside the array.)
             * @return a new array containing the specified range from the original array,
             *      truncated or padded with zeros to obtain the required length
             * @throws ArrayIndexOutOfBoundsException if {#code from < 0}
             *      or {@code from > original.length}
             * @throws IllegalArgumentException if <tt>from &gt; to</tt>
             * @throws NullPointerException if <tt>original</tt> is null
             * @since 1.6
             */
            // @ts-ignore
            public static copyOfRange(original: number /*short*/[], from: number /*int*/, to: number /*int*/): number /*short*/[]
            /**
             * Copies the specified range of the specified array into a new array.
             * The initial index of the range (<tt>from</tt>) must lie between zero
             * and <tt>original.length</tt>, inclusive.  The value at
             * <tt>original[from]</tt> is placed into the initial element of the copy
             * (unless <tt>from == original.length</tt> or <tt>from == to</tt>).
             * Values from subsequent elements in the original array are placed into
             * subsequent elements in the copy.  The final index of the range
             * (<tt>to</tt>), which must be greater than or equal to <tt>from</tt>,
             * may be greater than <tt>original.length</tt>, in which case
             * <tt>0</tt> is placed in all elements of the copy whose index is
             * greater than or equal to <tt>original.length - from</tt>.  The length
             * of the returned array will be <tt>to - from</tt>.
             * @param original the array from which a range is to be copied
             * @param from the initial index of the range to be copied, inclusive
             * @param to the final index of the range to be copied, exclusive.
             *      (This index may lie outside the array.)
             * @return a new array containing the specified range from the original array,
             *      truncated or padded with zeros to obtain the required length
             * @throws ArrayIndexOutOfBoundsException if {#code from < 0}
             *      or {@code from > original.length}
             * @throws IllegalArgumentException if <tt>from &gt; to</tt>
             * @throws NullPointerException if <tt>original</tt> is null
             * @since 1.6
             */
            // @ts-ignore
            public static copyOfRange(original: number /*int*/[], from: number /*int*/, to: number /*int*/): number /*int*/[]
            /**
             * Copies the specified range of the specified array into a new array.
             * The initial index of the range (<tt>from</tt>) must lie between zero
             * and <tt>original.length</tt>, inclusive.  The value at
             * <tt>original[from]</tt> is placed into the initial element of the copy
             * (unless <tt>from == original.length</tt> or <tt>from == to</tt>).
             * Values from subsequent elements in the original array are placed into
             * subsequent elements in the copy.  The final index of the range
             * (<tt>to</tt>), which must be greater than or equal to <tt>from</tt>,
             * may be greater than <tt>original.length</tt>, in which case
             * <tt>0L</tt> is placed in all elements of the copy whose index is
             * greater than or equal to <tt>original.length - from</tt>.  The length
             * of the returned array will be <tt>to - from</tt>.
             * @param original the array from which a range is to be copied
             * @param from the initial index of the range to be copied, inclusive
             * @param to the final index of the range to be copied, exclusive.
             *      (This index may lie outside the array.)
             * @return a new array containing the specified range from the original array,
             *      truncated or padded with zeros to obtain the required length
             * @throws ArrayIndexOutOfBoundsException if {#code from < 0}
             *      or {@code from > original.length}
             * @throws IllegalArgumentException if <tt>from &gt; to</tt>
             * @throws NullPointerException if <tt>original</tt> is null
             * @since 1.6
             */
            // @ts-ignore
            public static copyOfRange(original: number /*long*/[], from: number /*int*/, to: number /*int*/): number /*long*/[]
            /**
             * Copies the specified range of the specified array into a new array.
             * The initial index of the range (<tt>from</tt>) must lie between zero
             * and <tt>original.length</tt>, inclusive.  The value at
             * <tt>original[from]</tt> is placed into the initial element of the copy
             * (unless <tt>from == original.length</tt> or <tt>from == to</tt>).
             * Values from subsequent elements in the original array are placed into
             * subsequent elements in the copy.  The final index of the range
             * (<tt>to</tt>), which must be greater than or equal to <tt>from</tt>,
             * may be greater than <tt>original.length</tt>, in which case
             * <tt>'\\u000'</tt> is placed in all elements of the copy whose index is
             * greater than or equal to <tt>original.length - from</tt>.  The length
             * of the returned array will be <tt>to - from</tt>.
             * @param original the array from which a range is to be copied
             * @param from the initial index of the range to be copied, inclusive
             * @param to the final index of the range to be copied, exclusive.
             *      (This index may lie outside the array.)
             * @return a new array containing the specified range from the original array,
             *      truncated or padded with null characters to obtain the required length
             * @throws ArrayIndexOutOfBoundsException if {#code from < 0}
             *      or {@code from > original.length}
             * @throws IllegalArgumentException if <tt>from &gt; to</tt>
             * @throws NullPointerException if <tt>original</tt> is null
             * @since 1.6
             */
            // @ts-ignore
            public static copyOfRange(original: string[], from: number /*int*/, to: number /*int*/): string[]
            /**
             * Copies the specified range of the specified array into a new array.
             * The initial index of the range (<tt>from</tt>) must lie between zero
             * and <tt>original.length</tt>, inclusive.  The value at
             * <tt>original[from]</tt> is placed into the initial element of the copy
             * (unless <tt>from == original.length</tt> or <tt>from == to</tt>).
             * Values from subsequent elements in the original array are placed into
             * subsequent elements in the copy.  The final index of the range
             * (<tt>to</tt>), which must be greater than or equal to <tt>from</tt>,
             * may be greater than <tt>original.length</tt>, in which case
             * <tt>0f</tt> is placed in all elements of the copy whose index is
             * greater than or equal to <tt>original.length - from</tt>.  The length
             * of the returned array will be <tt>to - from</tt>.
             * @param original the array from which a range is to be copied
             * @param from the initial index of the range to be copied, inclusive
             * @param to the final index of the range to be copied, exclusive.
             *      (This index may lie outside the array.)
             * @return a new array containing the specified range from the original array,
             *      truncated or padded with zeros to obtain the required length
             * @throws ArrayIndexOutOfBoundsException if {#code from < 0}
             *      or {@code from > original.length}
             * @throws IllegalArgumentException if <tt>from &gt; to</tt>
             * @throws NullPointerException if <tt>original</tt> is null
             * @since 1.6
             */
            // @ts-ignore
            public static copyOfRange(original: number /*float*/[], from: number /*int*/, to: number /*int*/): number /*float*/[]
            /**
             * Copies the specified range of the specified array into a new array.
             * The initial index of the range (<tt>from</tt>) must lie between zero
             * and <tt>original.length</tt>, inclusive.  The value at
             * <tt>original[from]</tt> is placed into the initial element of the copy
             * (unless <tt>from == original.length</tt> or <tt>from == to</tt>).
             * Values from subsequent elements in the original array are placed into
             * subsequent elements in the copy.  The final index of the range
             * (<tt>to</tt>), which must be greater than or equal to <tt>from</tt>,
             * may be greater than <tt>original.length</tt>, in which case
             * <tt>0d</tt> is placed in all elements of the copy whose index is
             * greater than or equal to <tt>original.length - from</tt>.  The length
             * of the returned array will be <tt>to - from</tt>.
             * @param original the array from which a range is to be copied
             * @param from the initial index of the range to be copied, inclusive
             * @param to the final index of the range to be copied, exclusive.
             *      (This index may lie outside the array.)
             * @return a new array containing the specified range from the original array,
             *      truncated or padded with zeros to obtain the required length
             * @throws ArrayIndexOutOfBoundsException if {#code from < 0}
             *      or {@code from > original.length}
             * @throws IllegalArgumentException if <tt>from &gt; to</tt>
             * @throws NullPointerException if <tt>original</tt> is null
             * @since 1.6
             */
            // @ts-ignore
            public static copyOfRange(original: number /*double*/[], from: number /*int*/, to: number /*int*/): number /*double*/[]
            /**
             * Copies the specified range of the specified array into a new array.
             * The initial index of the range (<tt>from</tt>) must lie between zero
             * and <tt>original.length</tt>, inclusive.  The value at
             * <tt>original[from]</tt> is placed into the initial element of the copy
             * (unless <tt>from == original.length</tt> or <tt>from == to</tt>).
             * Values from subsequent elements in the original array are placed into
             * subsequent elements in the copy.  The final index of the range
             * (<tt>to</tt>), which must be greater than or equal to <tt>from</tt>,
             * may be greater than <tt>original.length</tt>, in which case
             * <tt>false</tt> is placed in all elements of the copy whose index is
             * greater than or equal to <tt>original.length - from</tt>.  The length
             * of the returned array will be <tt>to - from</tt>.
             * @param original the array from which a range is to be copied
             * @param from the initial index of the range to be copied, inclusive
             * @param to the final index of the range to be copied, exclusive.
             *      (This index may lie outside the array.)
             * @return a new array containing the specified range from the original array,
             *      truncated or padded with false elements to obtain the required length
             * @throws ArrayIndexOutOfBoundsException if {#code from < 0}
             *      or {@code from > original.length}
             * @throws IllegalArgumentException if <tt>from &gt; to</tt>
             * @throws NullPointerException if <tt>original</tt> is null
             * @since 1.6
             */
            // @ts-ignore
            public static copyOfRange(original: boolean[], from: number /*int*/, to: number /*int*/): boolean[]
            /**
             * Returns a fixed-size list backed by the specified array.  (Changes to
             * the returned list "write through" to the array.)  This method acts
             * as bridge between array-based and collection-based APIs, in
             * combination with {@link Collection#toArray}.  The returned list is
             * serializable and implements {@link RandomAccess}.
             * <p>This method also provides a convenient way to create a fixed-size
             * list initialized to contain several elements:
             * <pre>
             * List&lt;String&gt; stooges = Arrays.asList("Larry", "Moe", "Curly");
             * </pre>
             * @param <T> the class of the objects in the array
             * @param a the array by which the list will be backed
             * @return a list view of the specified array
             */
            // @ts-ignore
            public static asList<T>(...a: T[]): Array<T>
            /**
             * Returns a hash code based on the contents of the specified array.
             * For any two <tt>long</tt> arrays <tt>a</tt> and <tt>b</tt>
             * such that <tt>Arrays.equals(a, b)</tt>, it is also the case that
             * <tt>Arrays.hashCode(a) == Arrays.hashCode(b)</tt>.
             * <p>The value returned by this method is the same value that would be
             * obtained by invoking the {@link List#hashCode() <tt>hashCode</tt>}
             * method on a {@link List} containing a sequence of {@link Long}
             * instances representing the elements of <tt>a</tt> in the same order.
             * If <tt>a</tt> is <tt>null</tt>, this method returns 0.
             * @param a the array whose hash value to compute
             * @return a content-based hash code for <tt>a</tt>
             * @since 1.5
             */
            // @ts-ignore
            public static hashCode(a: number /*long*/[]): number /*int*/
            /**
             * Returns a hash code based on the contents of the specified array.
             * For any two non-null <tt>int</tt> arrays <tt>a</tt> and <tt>b</tt>
             * such that <tt>Arrays.equals(a, b)</tt>, it is also the case that
             * <tt>Arrays.hashCode(a) == Arrays.hashCode(b)</tt>.
             * <p>The value returned by this method is the same value that would be
             * obtained by invoking the {@link List#hashCode() <tt>hashCode</tt>}
             * method on a {@link List} containing a sequence of {@link Integer}
             * instances representing the elements of <tt>a</tt> in the same order.
             * If <tt>a</tt> is <tt>null</tt>, this method returns 0.
             * @param a the array whose hash value to compute
             * @return a content-based hash code for <tt>a</tt>
             * @since 1.5
             */
            // @ts-ignore
            public static hashCode(a: number /*int*/[]): number /*int*/
            /**
             * Returns a hash code based on the contents of the specified array.
             * For any two <tt>short</tt> arrays <tt>a</tt> and <tt>b</tt>
             * such that <tt>Arrays.equals(a, b)</tt>, it is also the case that
             * <tt>Arrays.hashCode(a) == Arrays.hashCode(b)</tt>.
             * <p>The value returned by this method is the same value that would be
             * obtained by invoking the {@link List#hashCode() <tt>hashCode</tt>}
             * method on a {@link List} containing a sequence of {@link Short}
             * instances representing the elements of <tt>a</tt> in the same order.
             * If <tt>a</tt> is <tt>null</tt>, this method returns 0.
             * @param a the array whose hash value to compute
             * @return a content-based hash code for <tt>a</tt>
             * @since 1.5
             */
            // @ts-ignore
            public static hashCode(a: number /*short*/[]): number /*int*/
            /**
             * Returns a hash code based on the contents of the specified array.
             * For any two <tt>char</tt> arrays <tt>a</tt> and <tt>b</tt>
             * such that <tt>Arrays.equals(a, b)</tt>, it is also the case that
             * <tt>Arrays.hashCode(a) == Arrays.hashCode(b)</tt>.
             * <p>The value returned by this method is the same value that would be
             * obtained by invoking the {@link List#hashCode() <tt>hashCode</tt>}
             * method on a {@link List} containing a sequence of {@link Character}
             * instances representing the elements of <tt>a</tt> in the same order.
             * If <tt>a</tt> is <tt>null</tt>, this method returns 0.
             * @param a the array whose hash value to compute
             * @return a content-based hash code for <tt>a</tt>
             * @since 1.5
             */
            // @ts-ignore
            public static hashCode(a: string[]): number /*int*/
            /**
             * Returns a hash code based on the contents of the specified array.
             * For any two <tt>byte</tt> arrays <tt>a</tt> and <tt>b</tt>
             * such that <tt>Arrays.equals(a, b)</tt>, it is also the case that
             * <tt>Arrays.hashCode(a) == Arrays.hashCode(b)</tt>.
             * <p>The value returned by this method is the same value that would be
             * obtained by invoking the {@link List#hashCode() <tt>hashCode</tt>}
             * method on a {@link List} containing a sequence of {@link Byte}
             * instances representing the elements of <tt>a</tt> in the same order.
             * If <tt>a</tt> is <tt>null</tt>, this method returns 0.
             * @param a the array whose hash value to compute
             * @return a content-based hash code for <tt>a</tt>
             * @since 1.5
             */
            // @ts-ignore
            public static hashCode(a: number /*byte*/[]): number /*int*/
            /**
             * Returns a hash code based on the contents of the specified array.
             * For any two <tt>boolean</tt> arrays <tt>a</tt> and <tt>b</tt>
             * such that <tt>Arrays.equals(a, b)</tt>, it is also the case that
             * <tt>Arrays.hashCode(a) == Arrays.hashCode(b)</tt>.
             * <p>The value returned by this method is the same value that would be
             * obtained by invoking the {@link List#hashCode() <tt>hashCode</tt>}
             * method on a {@link List} containing a sequence of {@link Boolean}
             * instances representing the elements of <tt>a</tt> in the same order.
             * If <tt>a</tt> is <tt>null</tt>, this method returns 0.
             * @param a the array whose hash value to compute
             * @return a content-based hash code for <tt>a</tt>
             * @since 1.5
             */
            // @ts-ignore
            public static hashCode(a: boolean[]): number /*int*/
            /**
             * Returns a hash code based on the contents of the specified array.
             * For any two <tt>float</tt> arrays <tt>a</tt> and <tt>b</tt>
             * such that <tt>Arrays.equals(a, b)</tt>, it is also the case that
             * <tt>Arrays.hashCode(a) == Arrays.hashCode(b)</tt>.
             * <p>The value returned by this method is the same value that would be
             * obtained by invoking the {@link List#hashCode() <tt>hashCode</tt>}
             * method on a {@link List} containing a sequence of {@link Float}
             * instances representing the elements of <tt>a</tt> in the same order.
             * If <tt>a</tt> is <tt>null</tt>, this method returns 0.
             * @param a the array whose hash value to compute
             * @return a content-based hash code for <tt>a</tt>
             * @since 1.5
             */
            // @ts-ignore
            public static hashCode(a: number /*float*/[]): number /*int*/
            /**
             * Returns a hash code based on the contents of the specified array.
             * For any two <tt>double</tt> arrays <tt>a</tt> and <tt>b</tt>
             * such that <tt>Arrays.equals(a, b)</tt>, it is also the case that
             * <tt>Arrays.hashCode(a) == Arrays.hashCode(b)</tt>.
             * <p>The value returned by this method is the same value that would be
             * obtained by invoking the {@link List#hashCode() <tt>hashCode</tt>}
             * method on a {@link List} containing a sequence of {@link Double}
             * instances representing the elements of <tt>a</tt> in the same order.
             * If <tt>a</tt> is <tt>null</tt>, this method returns 0.
             * @param a the array whose hash value to compute
             * @return a content-based hash code for <tt>a</tt>
             * @since 1.5
             */
            // @ts-ignore
            public static hashCode(a: number /*double*/[]): number /*int*/
            /**
             * Returns a hash code based on the contents of the specified array.  If
             * the array contains other arrays as elements, the hash code is based on
             * their identities rather than their contents.  It is therefore
             * acceptable to invoke this method on an array that contains itself as an
             * element,  either directly or indirectly through one or more levels of
             * arrays.
             * <p>For any two arrays <tt>a</tt> and <tt>b</tt> such that
             * <tt>Arrays.equals(a, b)</tt>, it is also the case that
             * <tt>Arrays.hashCode(a) == Arrays.hashCode(b)</tt>.
             * <p>The value returned by this method is equal to the value that would
             * be returned by <tt>Arrays.asList(a).hashCode()</tt>, unless <tt>a</tt>
             * is <tt>null</tt>, in which case <tt>0</tt> is returned.
             * @param a the array whose content-based hash code to compute
             * @return a content-based hash code for <tt>a</tt>
             * @see #deepHashCode(Object[])
             * @since 1.5
             */
            // @ts-ignore
            public static hashCode(a: java.lang.Object[] | any[]): number /*int*/
            /**
             * Returns a hash code based on the "deep contents" of the specified
             * array.  If the array contains other arrays as elements, the
             * hash code is based on their contents and so on, ad infinitum.
             * It is therefore unacceptable to invoke this method on an array that
             * contains itself as an element, either directly or indirectly through
             * one or more levels of arrays.  The behavior of such an invocation is
             * undefined.
             * <p>For any two arrays <tt>a</tt> and <tt>b</tt> such that
             * <tt>Arrays.deepEquals(a, b)</tt>, it is also the case that
             * <tt>Arrays.deepHashCode(a) == Arrays.deepHashCode(b)</tt>.
             * <p>The computation of the value returned by this method is similar to
             * that of the value returned by {@link List#hashCode()} on a list
             * containing the same elements as <tt>a</tt> in the same order, with one
             * difference: If an element <tt>e</tt> of <tt>a</tt> is itself an array,
             * its hash code is computed not by calling <tt>e.hashCode()</tt>, but as
             * by calling the appropriate overloading of <tt>Arrays.hashCode(e)</tt>
             * if <tt>e</tt> is an array of a primitive type, or as by calling
             * <tt>Arrays.deepHashCode(e)</tt> recursively if <tt>e</tt> is an array
             * of a reference type.  If <tt>a</tt> is <tt>null</tt>, this method
             * returns 0.
             * @param a the array whose deep-content-based hash code to compute
             * @return a deep-content-based hash code for <tt>a</tt>
             * @see #hashCode(Object[])
             * @since 1.5
             */
            // @ts-ignore
            public static deepHashCode(a: java.lang.Object[] | any[]): number /*int*/
            /**
             * Returns <tt>true</tt> if the two specified arrays are <i>deeply
             * equal</i> to one another.  Unlike the {@link #equals(Object[],Object[])}
             * method, this method is appropriate for use with nested arrays of
             * arbitrary depth.
             * <p>Two array references are considered deeply equal if both
             * are <tt>null</tt>, or if they refer to arrays that contain the same
             * number of elements and all corresponding pairs of elements in the two
             * arrays are deeply equal.
             * <p>Two possibly <tt>null</tt> elements <tt>e1</tt> and <tt>e2</tt> are
             * deeply equal if any of the following conditions hold:
             * <ul>
             * <li> <tt>e1</tt> and <tt>e2</tt> are both arrays of object reference
             * types, and <tt>Arrays.deepEquals(e1, e2) would return true</tt>
             * <li> <tt>e1</tt> and <tt>e2</tt> are arrays of the same primitive
             * type, and the appropriate overloading of
             * <tt>Arrays.equals(e1, e2)</tt> would return true.
             * <li> <tt>e1 == e2</tt>
             * <li> <tt>e1.equals(e2)</tt> would return true.
             * </ul>
             * Note that this definition permits <tt>null</tt> elements at any depth.
             * <p>If either of the specified arrays contain themselves as elements
             * either directly or indirectly through one or more levels of arrays,
             * the behavior of this method is undefined.
             * @param a1 one array to be tested for equality
             * @param a2 the other array to be tested for equality
             * @return <tt>true</tt> if the two arrays are equal
             * @see #equals(Object[],Object[])
             * @see Objects#deepEquals(Object, Object)
             * @since 1.5
             */
            // @ts-ignore
            public static deepEquals(a1: java.lang.Object[] | any[], a2: java.lang.Object[] | any[]): boolean
            /**
             * Returns a string representation of the contents of the specified array.
             * The string representation consists of a list of the array's elements,
             * enclosed in square brackets (<tt>"[]"</tt>).  Adjacent elements are
             * separated by the characters <tt>", "</tt> (a comma followed by a
             * space).  Elements are converted to strings as by
             * <tt>String.valueOf(long)</tt>.  Returns <tt>"null"</tt> if <tt>a</tt>
             * is <tt>null</tt>.
             * @param a the array whose string representation to return
             * @return a string representation of <tt>a</tt>
             * @since 1.5
             */
            // @ts-ignore
            public static toString(a: number /*long*/[]): string
            /**
             * Returns a string representation of the contents of the specified array.
             * The string representation consists of a list of the array's elements,
             * enclosed in square brackets (<tt>"[]"</tt>).  Adjacent elements are
             * separated by the characters <tt>", "</tt> (a comma followed by a
             * space).  Elements are converted to strings as by
             * <tt>String.valueOf(int)</tt>.  Returns <tt>"null"</tt> if <tt>a</tt> is
             * <tt>null</tt>.
             * @param a the array whose string representation to return
             * @return a string representation of <tt>a</tt>
             * @since 1.5
             */
            // @ts-ignore
            public static toString(a: number /*int*/[]): string
            /**
             * Returns a string representation of the contents of the specified array.
             * The string representation consists of a list of the array's elements,
             * enclosed in square brackets (<tt>"[]"</tt>).  Adjacent elements are
             * separated by the characters <tt>", "</tt> (a comma followed by a
             * space).  Elements are converted to strings as by
             * <tt>String.valueOf(short)</tt>.  Returns <tt>"null"</tt> if <tt>a</tt>
             * is <tt>null</tt>.
             * @param a the array whose string representation to return
             * @return a string representation of <tt>a</tt>
             * @since 1.5
             */
            // @ts-ignore
            public static toString(a: number /*short*/[]): string
            /**
             * Returns a string representation of the contents of the specified array.
             * The string representation consists of a list of the array's elements,
             * enclosed in square brackets (<tt>"[]"</tt>).  Adjacent elements are
             * separated by the characters <tt>", "</tt> (a comma followed by a
             * space).  Elements are converted to strings as by
             * <tt>String.valueOf(char)</tt>.  Returns <tt>"null"</tt> if <tt>a</tt>
             * is <tt>null</tt>.
             * @param a the array whose string representation to return
             * @return a string representation of <tt>a</tt>
             * @since 1.5
             */
            // @ts-ignore
            public static toString(a: string[]): string
            /**
             * Returns a string representation of the contents of the specified array.
             * The string representation consists of a list of the array's elements,
             * enclosed in square brackets (<tt>"[]"</tt>).  Adjacent elements
             * are separated by the characters <tt>", "</tt> (a comma followed
             * by a space).  Elements are converted to strings as by
             * <tt>String.valueOf(byte)</tt>.  Returns <tt>"null"</tt> if
             * <tt>a</tt> is <tt>null</tt>.
             * @param a the array whose string representation to return
             * @return a string representation of <tt>a</tt>
             * @since 1.5
             */
            // @ts-ignore
            public static toString(a: number /*byte*/[]): string
            /**
             * Returns a string representation of the contents of the specified array.
             * The string representation consists of a list of the array's elements,
             * enclosed in square brackets (<tt>"[]"</tt>).  Adjacent elements are
             * separated by the characters <tt>", "</tt> (a comma followed by a
             * space).  Elements are converted to strings as by
             * <tt>String.valueOf(boolean)</tt>.  Returns <tt>"null"</tt> if
             * <tt>a</tt> is <tt>null</tt>.
             * @param a the array whose string representation to return
             * @return a string representation of <tt>a</tt>
             * @since 1.5
             */
            // @ts-ignore
            public static toString(a: boolean[]): string
            /**
             * Returns a string representation of the contents of the specified array.
             * The string representation consists of a list of the array's elements,
             * enclosed in square brackets (<tt>"[]"</tt>).  Adjacent elements are
             * separated by the characters <tt>", "</tt> (a comma followed by a
             * space).  Elements are converted to strings as by
             * <tt>String.valueOf(float)</tt>.  Returns <tt>"null"</tt> if <tt>a</tt>
             * is <tt>null</tt>.
             * @param a the array whose string representation to return
             * @return a string representation of <tt>a</tt>
             * @since 1.5
             */
            // @ts-ignore
            public static toString(a: number /*float*/[]): string
            /**
             * Returns a string representation of the contents of the specified array.
             * The string representation consists of a list of the array's elements,
             * enclosed in square brackets (<tt>"[]"</tt>).  Adjacent elements are
             * separated by the characters <tt>", "</tt> (a comma followed by a
             * space).  Elements are converted to strings as by
             * <tt>String.valueOf(double)</tt>.  Returns <tt>"null"</tt> if <tt>a</tt>
             * is <tt>null</tt>.
             * @param a the array whose string representation to return
             * @return a string representation of <tt>a</tt>
             * @since 1.5
             */
            // @ts-ignore
            public static toString(a: number /*double*/[]): string
            /**
             * Returns a string representation of the contents of the specified array.
             * If the array contains other arrays as elements, they are converted to
             * strings by the {@link Object#toString} method inherited from
             * <tt>Object</tt>, which describes their <i>identities</i> rather than
             * their contents.
             * <p>The value returned by this method is equal to the value that would
             * be returned by <tt>Arrays.asList(a).toString()</tt>, unless <tt>a</tt>
             * is <tt>null</tt>, in which case <tt>"null"</tt> is returned.
             * @param a the array whose string representation to return
             * @return a string representation of <tt>a</tt>
             * @see #deepToString(Object[])
             * @since 1.5
             */
            // @ts-ignore
            public static toString(a: java.lang.Object[] | any[]): string
            /**
             * Returns a string representation of the "deep contents" of the specified
             * array.  If the array contains other arrays as elements, the string
             * representation contains their contents and so on.  This method is
             * designed for converting multidimensional arrays to strings.
             * <p>The string representation consists of a list of the array's
             * elements, enclosed in square brackets (<tt>"[]"</tt>).  Adjacent
             * elements are separated by the characters <tt>", "</tt> (a comma
             * followed by a space).  Elements are converted to strings as by
             * <tt>String.valueOf(Object)</tt>, unless they are themselves
             * arrays.
             * <p>If an element <tt>e</tt> is an array of a primitive type, it is
             * converted to a string as by invoking the appropriate overloading of
             * <tt>Arrays.toString(e)</tt>.  If an element <tt>e</tt> is an array of a
             * reference type, it is converted to a string as by invoking
             * this method recursively.
             * <p>To avoid infinite recursion, if the specified array contains itself
             * as an element, or contains an indirect reference to itself through one
             * or more levels of arrays, the self-reference is converted to the string
             * <tt>"[...]"</tt>.  For example, an array containing only a reference
             * to itself would be rendered as <tt>"[[...]]"</tt>.
             * <p>This method returns <tt>"null"</tt> if the specified array
             * is <tt>null</tt>.
             * @param a the array whose string representation to return
             * @return a string representation of <tt>a</tt>
             * @see #toString(Object[])
             * @since 1.5
             */
            // @ts-ignore
            public static deepToString(a: java.lang.Object[] | any[]): string
            /**
             * Set all elements of the specified array, using the provided
             * generator function to compute each element.
             * <p>If the generator function throws an exception, it is relayed to
             * the caller and the array is left in an indeterminate state.
             * @param <T> type of elements of the array
             * @param array array to be initialized
             * @param generator a function accepting an index and producing the desired
             *         value for that position
             * @throws NullPointerException if the generator is null
             * @since 1.8
             */
            // @ts-ignore
            public static setAll<T>(array: T[], generator: java.util.function$.IntFunction<any>): void
            /**
             * Set all elements of the specified array, in parallel, using the
             * provided generator function to compute each element.
             * <p>If the generator function throws an exception, an unchecked exception
             * is thrown from {@code parallelSetAll} and the array is left in an
             * indeterminate state.
             * @param <T> type of elements of the array
             * @param array array to be initialized
             * @param generator a function accepting an index and producing the desired
             *         value for that position
             * @throws NullPointerException if the generator is null
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSetAll<T>(array: T[], generator: java.util.function$.IntFunction<any>): void
            /**
             * Set all elements of the specified array, using the provided
             * generator function to compute each element.
             * <p>If the generator function throws an exception, it is relayed to
             * the caller and the array is left in an indeterminate state.
             * @param array array to be initialized
             * @param generator a function accepting an index and producing the desired
             *         value for that position
             * @throws NullPointerException if the generator is null
             * @since 1.8
             */
            // @ts-ignore
            public static setAll(array: number /*int*/[], generator: java.util.function$.IntUnaryOperator): void
            /**
             * Set all elements of the specified array, in parallel, using the
             * provided generator function to compute each element.
             * <p>If the generator function throws an exception, an unchecked exception
             * is thrown from {@code parallelSetAll} and the array is left in an
             * indeterminate state.
             * @param array array to be initialized
             * @param generator a function accepting an index and producing the desired
             *  value for that position
             * @throws NullPointerException if the generator is null
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSetAll(array: number /*int*/[], generator: java.util.function$.IntUnaryOperator): void
            /**
             * Set all elements of the specified array, using the provided
             * generator function to compute each element.
             * <p>If the generator function throws an exception, it is relayed to
             * the caller and the array is left in an indeterminate state.
             * @param array array to be initialized
             * @param generator a function accepting an index and producing the desired
             *         value for that position
             * @throws NullPointerException if the generator is null
             * @since 1.8
             */
            // @ts-ignore
            public static setAll(array: number /*long*/[], generator: java.util.function$.IntToLongFunction): void
            /**
             * Set all elements of the specified array, in parallel, using the
             * provided generator function to compute each element.
             * <p>If the generator function throws an exception, an unchecked exception
             * is thrown from {@code parallelSetAll} and the array is left in an
             * indeterminate state.
             * @param array array to be initialized
             * @param generator a function accepting an index and producing the desired
             *         value for that position
             * @throws NullPointerException if the generator is null
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSetAll(array: number /*long*/[], generator: java.util.function$.IntToLongFunction): void
            /**
             * Set all elements of the specified array, using the provided
             * generator function to compute each element.
             * <p>If the generator function throws an exception, it is relayed to
             * the caller and the array is left in an indeterminate state.
             * @param array array to be initialized
             * @param generator a function accepting an index and producing the desired
             *         value for that position
             * @throws NullPointerException if the generator is null
             * @since 1.8
             */
            // @ts-ignore
            public static setAll(array: number /*double*/[], generator: java.util.function$.IntToDoubleFunction): void
            /**
             * Set all elements of the specified array, in parallel, using the
             * provided generator function to compute each element.
             * <p>If the generator function throws an exception, an unchecked exception
             * is thrown from {@code parallelSetAll} and the array is left in an
             * indeterminate state.
             * @param array array to be initialized
             * @param generator a function accepting an index and producing the desired
             *         value for that position
             * @throws NullPointerException if the generator is null
             * @since 1.8
             */
            // @ts-ignore
            public static parallelSetAll(array: number /*double*/[], generator: java.util.function$.IntToDoubleFunction): void
            /**
             * Returns a {@link Spliterator} covering all of the specified array.
             * <p>The spliterator reports {@link Spliterator#SIZED},
             * {@link Spliterator#SUBSIZED}, {@link Spliterator#ORDERED}, and
             * {@link Spliterator#IMMUTABLE}.
             * @param <T> type of elements
             * @param array the array, assumed to be unmodified during use
             * @return a spliterator for the array elements
             * @since 1.8
             */
            // @ts-ignore
            public static spliterator<T>(array: T[]): java.util.Spliterator<T>
            /**
             * Returns a {@link Spliterator} covering the specified range of the
             * specified array.
             * <p>The spliterator reports {@link Spliterator#SIZED},
             * {@link Spliterator#SUBSIZED}, {@link Spliterator#ORDERED}, and
             * {@link Spliterator#IMMUTABLE}.
             * @param <T> type of elements
             * @param array the array, assumed to be unmodified during use
             * @param startInclusive the first index to cover, inclusive
             * @param endExclusive index immediately past the last index to cover
             * @return a spliterator for the array elements
             * @throws ArrayIndexOutOfBoundsException if {#code startInclusive} is
             *          negative, {@code endExclusive} is less than
             *          {@code startInclusive}, or {@code endExclusive} is greater than
             *          the array size
             * @since 1.8
             */
            // @ts-ignore
            public static spliterator<T>(array: T[], startInclusive: number /*int*/, endExclusive: number /*int*/): java.util.Spliterator<T>
            /**
             * Returns a {@link Spliterator.OfInt} covering all of the specified array.
             * <p>The spliterator reports {@link Spliterator#SIZED},
             * {@link Spliterator#SUBSIZED}, {@link Spliterator#ORDERED}, and
             * {@link Spliterator#IMMUTABLE}.
             * @param array the array, assumed to be unmodified during use
             * @return a spliterator for the array elements
             * @since 1.8
             */
            // @ts-ignore
            public static spliterator(array: number /*int*/[]): java.util.Spliterator.OfInt
            /**
             * Returns a {@link Spliterator.OfInt} covering the specified range of the
             * specified array.
             * <p>The spliterator reports {@link Spliterator#SIZED},
             * {@link Spliterator#SUBSIZED}, {@link Spliterator#ORDERED}, and
             * {@link Spliterator#IMMUTABLE}.
             * @param array the array, assumed to be unmodified during use
             * @param startInclusive the first index to cover, inclusive
             * @param endExclusive index immediately past the last index to cover
             * @return a spliterator for the array elements
             * @throws ArrayIndexOutOfBoundsException if {#code startInclusive} is
             *          negative, {@code endExclusive} is less than
             *          {@code startInclusive}, or {@code endExclusive} is greater than
             *          the array size
             * @since 1.8
             */
            // @ts-ignore
            public static spliterator(array: number /*int*/[], startInclusive: number /*int*/, endExclusive: number /*int*/): java.util.Spliterator.OfInt
            /**
             * Returns a {@link Spliterator.OfLong} covering all of the specified array.
             * <p>The spliterator reports {@link Spliterator#SIZED},
             * {@link Spliterator#SUBSIZED}, {@link Spliterator#ORDERED}, and
             * {@link Spliterator#IMMUTABLE}.
             * @param array the array, assumed to be unmodified during use
             * @return the spliterator for the array elements
             * @since 1.8
             */
            // @ts-ignore
            public static spliterator(array: number /*long*/[]): java.util.Spliterator.OfLong
            /**
             * Returns a {@link Spliterator.OfLong} covering the specified range of the
             * specified array.
             * <p>The spliterator reports {@link Spliterator#SIZED},
             * {@link Spliterator#SUBSIZED}, {@link Spliterator#ORDERED}, and
             * {@link Spliterator#IMMUTABLE}.
             * @param array the array, assumed to be unmodified during use
             * @param startInclusive the first index to cover, inclusive
             * @param endExclusive index immediately past the last index to cover
             * @return a spliterator for the array elements
             * @throws ArrayIndexOutOfBoundsException if {#code startInclusive} is
             *          negative, {@code endExclusive} is less than
             *          {@code startInclusive}, or {@code endExclusive} is greater than
             *          the array size
             * @since 1.8
             */
            // @ts-ignore
            public static spliterator(array: number /*long*/[], startInclusive: number /*int*/, endExclusive: number /*int*/): java.util.Spliterator.OfLong
            /**
             * Returns a {@link Spliterator.OfDouble} covering all of the specified
             * array.
             * <p>The spliterator reports {@link Spliterator#SIZED},
             * {@link Spliterator#SUBSIZED}, {@link Spliterator#ORDERED}, and
             * {@link Spliterator#IMMUTABLE}.
             * @param array the array, assumed to be unmodified during use
             * @return a spliterator for the array elements
             * @since 1.8
             */
            // @ts-ignore
            public static spliterator(array: number /*double*/[]): java.util.Spliterator.OfDouble
            /**
             * Returns a {@link Spliterator.OfDouble} covering the specified range of
             * the specified array.
             * <p>The spliterator reports {@link Spliterator#SIZED},
             * {@link Spliterator#SUBSIZED}, {@link Spliterator#ORDERED}, and
             * {@link Spliterator#IMMUTABLE}.
             * @param array the array, assumed to be unmodified during use
             * @param startInclusive the first index to cover, inclusive
             * @param endExclusive index immediately past the last index to cover
             * @return a spliterator for the array elements
             * @throws ArrayIndexOutOfBoundsException if {#code startInclusive} is
             *          negative, {@code endExclusive} is less than
             *          {@code startInclusive}, or {@code endExclusive} is greater than
             *          the array size
             * @since 1.8
             */
            // @ts-ignore
            public static spliterator(array: number /*double*/[], startInclusive: number /*int*/, endExclusive: number /*int*/): java.util.Spliterator.OfDouble
            /**
             * Returns a sequential {@link Stream} with the specified array as its
             * source.
             * @param <T> The type of the array elements
             * @param array The array, assumed to be unmodified during use
             * @return a {#code Stream} for the array
             * @since 1.8
             */
            // @ts-ignore
            public static stream<T>(array: T[]): java.util.stream.Stream<T>
            /**
             * Returns a sequential {@link Stream} with the specified range of the
             * specified array as its source.
             * @param <T> the type of the array elements
             * @param array the array, assumed to be unmodified during use
             * @param startInclusive the first index to cover, inclusive
             * @param endExclusive index immediately past the last index to cover
             * @return a {#code Stream} for the array range
             * @throws ArrayIndexOutOfBoundsException if {#code startInclusive} is
             *          negative, {@code endExclusive} is less than
             *          {@code startInclusive}, or {@code endExclusive} is greater than
             *          the array size
             * @since 1.8
             */
            // @ts-ignore
            public static stream<T>(array: T[], startInclusive: number /*int*/, endExclusive: number /*int*/): java.util.stream.Stream<T>
            /**
             * Returns a sequential {@link IntStream} with the specified array as its
             * source.
             * @param array the array, assumed to be unmodified during use
             * @return an {#code IntStream} for the array
             * @since 1.8
             */
            // @ts-ignore
            public static stream(array: number /*int*/[]): java.util.stream.IntStream
            /**
             * Returns a sequential {@link IntStream} with the specified range of the
             * specified array as its source.
             * @param array the array, assumed to be unmodified during use
             * @param startInclusive the first index to cover, inclusive
             * @param endExclusive index immediately past the last index to cover
             * @return an {#code IntStream} for the array range
             * @throws ArrayIndexOutOfBoundsException if {#code startInclusive} is
             *          negative, {@code endExclusive} is less than
             *          {@code startInclusive}, or {@code endExclusive} is greater than
             *          the array size
             * @since 1.8
             */
            // @ts-ignore
            public static stream(array: number /*int*/[], startInclusive: number /*int*/, endExclusive: number /*int*/): java.util.stream.IntStream
            /**
             * Returns a sequential {@link LongStream} with the specified array as its
             * source.
             * @param array the array, assumed to be unmodified during use
             * @return a {#code LongStream} for the array
             * @since 1.8
             */
            // @ts-ignore
            public static stream(array: number /*long*/[]): java.util.stream.LongStream
            /**
             * Returns a sequential {@link LongStream} with the specified range of the
             * specified array as its source.
             * @param array the array, assumed to be unmodified during use
             * @param startInclusive the first index to cover, inclusive
             * @param endExclusive index immediately past the last index to cover
             * @return a {#code LongStream} for the array range
             * @throws ArrayIndexOutOfBoundsException if {#code startInclusive} is
             *          negative, {@code endExclusive} is less than
             *          {@code startInclusive}, or {@code endExclusive} is greater than
             *          the array size
             * @since 1.8
             */
            // @ts-ignore
            public static stream(array: number /*long*/[], startInclusive: number /*int*/, endExclusive: number /*int*/): java.util.stream.LongStream
            /**
             * Returns a sequential {@link DoubleStream} with the specified array as its
             * source.
             * @param array the array, assumed to be unmodified during use
             * @return a {#code DoubleStream} for the array
             * @since 1.8
             */
            // @ts-ignore
            public static stream(array: number /*double*/[]): java.util.stream.DoubleStream
            /**
             * Returns a sequential {@link DoubleStream} with the specified range of the
             * specified array as its source.
             * @param array the array, assumed to be unmodified during use
             * @param startInclusive the first index to cover, inclusive
             * @param endExclusive index immediately past the last index to cover
             * @return a {#code DoubleStream} for the array range
             * @throws ArrayIndexOutOfBoundsException if {#code startInclusive} is
             *          negative, {@code endExclusive} is less than
             *          {@code startInclusive}, or {@code endExclusive} is greater than
             *          the array size
             * @since 1.8
             */
            // @ts-ignore
            public static stream(array: number /*double*/[], startInclusive: number /*int*/, endExclusive: number /*int*/): java.util.stream.DoubleStream
        }
    }
}

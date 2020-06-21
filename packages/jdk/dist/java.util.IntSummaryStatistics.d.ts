declare namespace java {
    namespace util {
        /**
         * A state object for collecting statistics such as count, min, max, sum, and
         * average.
         * <p>This class is designed to work with (though does not require)
         * {@linkplain java.util.stream streams}. For example, you can compute
         * summary statistics on a stream of ints with:
         * <pre> {@code
         * IntSummaryStatistics stats = intStream.collect(IntSummaryStatistics::new,
         * IntSummaryStatistics::accept,
         * IntSummaryStatistics::combine);
         * }</pre>
         * <p>{@code IntSummaryStatistics} can be used as a
         * {@linkplain java.util.stream.Stream#collect(Collector) reduction}
         * target for a {@linkplain java.util.stream.Stream stream}. For example:
         * <pre> {@code
         * IntSummaryStatistics stats = people.stream()
         * .collect(Collectors.summarizingInt(Person::getDependents));
         * }</pre>
         * This computes, in a single pass, the count of people, as well as the minimum,
         * maximum, sum, and average of their number of dependents.
         * @implNote This implementation is not thread safe. However, it is safe to use
         *  {#link java.util.stream.Collectors#summarizingInt(java.util.function.ToIntFunction)
         *  Collectors.toIntStatistics()} on a parallel stream, because the parallel
         *  implementation of {@link java.util.stream.Stream#collect Stream.collect()}
         *  provides the necessary partitioning, isolation, and merging of results for
         *  safe and efficient parallel execution.
         * 
         *  <p>This implementation does not check for overflow of the sum.
         * @since 1.8
         */
        // @ts-ignore
        class IntSummaryStatistics extends java.lang.Object implements java.util.function.IntConsumer {
            /**
             * Construct an empty instance with zero count, zero sum,
             * {@code Integer.MAX_VALUE} min, {@code Integer.MIN_VALUE} max and zero
             * average.
             */
            // @ts-ignore
            constructor()
            /**
             * Records a new value into the summary information
             * @param value the input value
             */
            // @ts-ignore
            public accept(value: number /*int*/): void
            /**
             * Combines the state of another {@code IntSummaryStatistics} into this one.
             * @param other another {#code IntSummaryStatistics}
             * @throws NullPointerException if {#code other} is null
             */
            // @ts-ignore
            public combine(other: java.util.IntSummaryStatistics): void
            /**
             * Returns the count of values recorded.
             * @return the count of values
             */
            // @ts-ignore
            public getCount(): number /*long*/
            /**
             * Returns the sum of values recorded, or zero if no values have been
             * recorded.
             * @return the sum of values, or zero if none
             */
            // @ts-ignore
            public getSum(): number /*long*/
            /**
             * Returns the minimum value recorded, or {@code Integer.MAX_VALUE} if no
             * values have been recorded.
             * @return the minimum value, or {#code Integer.MAX_VALUE} if none
             */
            // @ts-ignore
            public getMin(): number /*int*/
            /**
             * Returns the maximum value recorded, or {@code Integer.MIN_VALUE} if no
             * values have been recorded.
             * @return the maximum value, or {#code Integer.MIN_VALUE} if none
             */
            // @ts-ignore
            public getMax(): number /*int*/
            /**
             * Returns the arithmetic mean of values recorded, or zero if no values have been
             * recorded.
             * @return the arithmetic mean of values, or zero if none
             */
            // @ts-ignore
            public getAverage(): number /*double*/
            // @ts-ignore
            public toString(): string
        }
    }
}

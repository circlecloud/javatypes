declare namespace java {
    namespace util {
        /**
         * A state object for collecting statistics such as count, min, max, sum, and
         * average.
         * <p>This class is designed to work with (though does not require)
         * {@linkplain java.util.stream streams}. For example, you can compute
         * summary statistics on a stream of longs with:
         * <pre> {@code
         * LongSummaryStatistics stats = longStream.collect(LongSummaryStatistics::new,
         * LongSummaryStatistics::accept,
         * LongSummaryStatistics::combine);
         * }</pre>
         * <p>{@code LongSummaryStatistics} can be used as a
         * {@linkplain java.util.stream.Stream#collect(Collector)} reduction}
         * target for a {@linkplain java.util.stream.Stream stream}. For example:
         * <pre> {@code
         * LongSummaryStatistics stats = people.stream()
         * .collect(Collectors.summarizingLong(Person::getAge));
         * }</pre>
         * This computes, in a single pass, the count of people, as well as the minimum,
         * maximum, sum, and average of their ages.
         * @implNote This implementation is not thread safe. However, it is safe to use
         *  {#link java.util.stream.Collectors#summarizingLong(java.util.function.ToLongFunction)
         *  Collectors.toLongStatistics()} on a parallel stream, because the parallel
         *  implementation of {@link java.util.stream.Stream#collect Stream.collect()}
         *  provides the necessary partitioning, isolation, and merging of results for
         *  safe and efficient parallel execution.
         * 
         *  <p>This implementation does not check for overflow of the sum.
         * @since 1.8
         */
        // @ts-ignore
        class LongSummaryStatistics extends java.lang.Object implements java.util.function.LongConsumer, java.util.function.IntConsumer {
            /**
             * Construct an empty instance with zero count, zero sum,
             * {@code Long.MAX_VALUE} min, {@code Long.MIN_VALUE} max and zero
             * average.
             */
            // @ts-ignore
            constructor()
            /**
             * Records a new {@code int} value into the summary information.
             * @param value the input value
             */
            // @ts-ignore
            public accept(value: number /*int*/): void
            /**
             * Records a new {@code long} value into the summary information.
             * @param value the input value
             */
            // @ts-ignore
            public accept(value: number /*long*/): void
            /**
             * Combines the state of another {@code LongSummaryStatistics} into this
             * one.
             * @param other another {#code LongSummaryStatistics}
             * @throws NullPointerException if {#code other} is null
             */
            // @ts-ignore
            public combine(other: java.util.LongSummaryStatistics): void
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
             * Returns the minimum value recorded, or {@code Long.MAX_VALUE} if no
             * values have been recorded.
             * @return the minimum value, or {#code Long.MAX_VALUE} if none
             */
            // @ts-ignore
            public getMin(): number /*long*/
            /**
             * Returns the maximum value recorded, or {@code Long.MIN_VALUE} if no
             * values have been recorded
             * @return the maximum value, or {#code Long.MIN_VALUE} if none
             */
            // @ts-ignore
            public getMax(): number /*long*/
            /**
             * Returns the arithmetic mean of values recorded, or zero if no values have been
             * recorded.
             * @return The arithmetic mean of values, or zero if none
             */
            // @ts-ignore
            public getAverage(): number /*double*/
            // @ts-ignore
            public toString(): string
        }
    }
}

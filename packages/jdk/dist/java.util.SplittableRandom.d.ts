declare namespace java {
    namespace util {
        /**
         * A generator of uniform pseudorandom values applicable for use in
         * (among other contexts) isolated parallel computations that may
         * generate subtasks. Class {@code SplittableRandom} supports methods for
         * producing pseudorandom numbers of type {@code int}, {@code long},
         * and {@code double} with similar usages as for class
         * {@link java.util.Random} but differs in the following ways:
         * <ul>
         * <li>Series of generated values pass the DieHarder suite testing
         * independence and uniformity properties of random number generators.
         * (Most recently validated with <a
         * href="http://www.phy.duke.edu/~rgb/General/dieharder.php"> version
         * 3.31.1</a>.) These tests validate only the methods for certain
         * types and ranges, but similar properties are expected to hold, at
         * least approximately, for others as well. The <em>period</em>
         * (length of any series of generated values before it repeats) is at
         * least 2<sup>64</sup>. </li>
         * <li> Method {@link #split} constructs and returns a new
         * SplittableRandom instance that shares no mutable state with the
         * current instance. However, with very high probability, the
         * values collectively generated by the two objects have the same
         * statistical properties as if the same quantity of values were
         * generated by a single thread using a single {@code
         * SplittableRandom} object.  </li>
         * <li>Instances of SplittableRandom are <em>not</em> thread-safe.
         * They are designed to be split, not shared, across threads. For
         * example, a {@link java.util.concurrent.ForkJoinTask
         * fork/join-style} computation using random numbers might include a
         * construction of the form {@code new
         * Subtask(aSplittableRandom.split()).fork()}.
         * <li>This class provides additional methods for generating random
         * streams, that employ the above techniques when used in {@code
         * stream.parallel()} mode.</li>
         * </ul>
         * <p>Instances of {@code SplittableRandom} are not cryptographically
         * secure.  Consider instead using {@link java.security.SecureRandom}
         * in security-sensitive applications. Additionally,
         * default-constructed instances do not use a cryptographically random
         * seed unless the {@linkplain System#getProperty system property}
         * {@code java.util.secureRandomSeed} is set to {@code true}.
         * @author Guy Steele
         * @author Doug Lea
         * @since 1.8
         */
        // @ts-ignore
        class SplittableRandom extends java.lang.Object {
            /**
             * Creates a new SplittableRandom instance using the specified
             * initial seed. SplittableRandom instances created with the same
             * seed in the same program generate identical sequences of values.
             * @param seed the initial seed
             */
            // @ts-ignore
            constructor(seed: number /*long*/)
            /**
             * Creates a new SplittableRandom instance that is likely to
             * generate sequences of values that are statistically independent
             * of those of any other instances in the current program; and
             * may, and typically does, vary across program invocations.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs and returns a new SplittableRandom instance that
             * shares no mutable state with this instance. However, with very
             * high probability, the set of values collectively generated by
             * the two objects has the same statistical properties as if the
             * same quantity of values were generated by a single thread using
             * a single SplittableRandom object.  Either or both of the two
             * objects may be further split using the {@code split()} method,
             * and the same expected statistical properties apply to the
             * entire set of generators constructed by such recursive
             * splitting.
             * @return the new SplittableRandom instance
             */
            // @ts-ignore
            split(): java.util.SplittableRandom
            /**
             * Returns a pseudorandom {@code int} value.
             * @return a pseudorandom {#code int} value
             */
            // @ts-ignore
            nextInt(): int
            /**
             * Returns a pseudorandom {@code int} value between zero (inclusive)
             * and the specified bound (exclusive).
             * @param bound the upper bound (exclusive).  Must be positive.
             * @return a pseudorandom {#code int} value between zero
             *          (inclusive) and the bound (exclusive)
             * @throws IllegalArgumentException if {#code bound} is not positive
             */
            // @ts-ignore
            nextInt(bound: number /*int*/): int
            /**
             * Returns a pseudorandom {@code int} value between the specified
             * origin (inclusive) and the specified bound (exclusive).
             * @param origin the least value returned
             * @param bound the upper bound (exclusive)
             * @return a pseudorandom {#code int} value between the origin
             *          (inclusive) and the bound (exclusive)
             * @throws IllegalArgumentException if {#code origin} is greater than
             *          or equal to {@code bound}
             */
            // @ts-ignore
            nextInt(origin: number /*int*/, bound: number /*int*/): int
            /**
             * Returns a pseudorandom {@code long} value.
             * @return a pseudorandom {#code long} value
             */
            // @ts-ignore
            nextLong(): long
            /**
             * Returns a pseudorandom {@code long} value between zero (inclusive)
             * and the specified bound (exclusive).
             * @param bound the upper bound (exclusive).  Must be positive.
             * @return a pseudorandom {#code long} value between zero
             *          (inclusive) and the bound (exclusive)
             * @throws IllegalArgumentException if {#code bound} is not positive
             */
            // @ts-ignore
            nextLong(bound: number /*long*/): long
            /**
             * Returns a pseudorandom {@code long} value between the specified
             * origin (inclusive) and the specified bound (exclusive).
             * @param origin the least value returned
             * @param bound the upper bound (exclusive)
             * @return a pseudorandom {#code long} value between the origin
             *          (inclusive) and the bound (exclusive)
             * @throws IllegalArgumentException if {#code origin} is greater than
             *          or equal to {@code bound}
             */
            // @ts-ignore
            nextLong(origin: number /*long*/, bound: number /*long*/): long
            /**
             * Returns a pseudorandom {@code double} value between zero
             * (inclusive) and one (exclusive).
             * @return a pseudorandom {#code double} value between zero
             *          (inclusive) and one (exclusive)
             */
            // @ts-ignore
            nextDouble(): double
            /**
             * Returns a pseudorandom {@code double} value between 0.0
             * (inclusive) and the specified bound (exclusive).
             * @param bound the upper bound (exclusive).  Must be positive.
             * @return a pseudorandom {#code double} value between zero
             *          (inclusive) and the bound (exclusive)
             * @throws IllegalArgumentException if {#code bound} is not positive
             */
            // @ts-ignore
            nextDouble(bound: number /*double*/): double
            /**
             * Returns a pseudorandom {@code double} value between the specified
             * origin (inclusive) and bound (exclusive).
             * @param origin the least value returned
             * @param bound the upper bound (exclusive)
             * @return a pseudorandom {#code double} value between the origin
             *          (inclusive) and the bound (exclusive)
             * @throws IllegalArgumentException if {#code origin} is greater than
             *          or equal to {@code bound}
             */
            // @ts-ignore
            nextDouble(origin: number /*double*/, bound: number /*double*/): double
            /**
             * Returns a pseudorandom {@code boolean} value.
             * @return a pseudorandom {#code boolean} value
             */
            // @ts-ignore
            nextBoolean(): boolean
            /**
             * Returns a stream producing the given {@code streamSize} number
             * of pseudorandom {@code int} values from this generator and/or
             * one split from it.
             * @param streamSize the number of values to generate
             * @return a stream of pseudorandom {#code int} values
             * @throws IllegalArgumentException if {#code streamSize} is
             *          less than zero
             */
            // @ts-ignore
            ints(streamSize: number /*long*/): java.util.stream.IntStream
            /**
             * Returns an effectively unlimited stream of pseudorandom {@code int}
             * values from this generator and/or one split from it.
             * @implNote This method is implemented to be equivalent to {#code
             *  ints(Long.MAX_VALUE)}.
             * @return a stream of pseudorandom {#code int} values
             */
            // @ts-ignore
            ints(): java.util.stream.IntStream
            /**
             * Returns a stream producing the given {@code streamSize} number
             * of pseudorandom {@code int} values from this generator and/or one split
             * from it; each value conforms to the given origin (inclusive) and bound
             * (exclusive).
             * @param streamSize the number of values to generate
             * @param randomNumberOrigin the origin (inclusive) of each random value
             * @param randomNumberBound the bound (exclusive) of each random value
             * @return a stream of pseudorandom {#code int} values,
             *          each with the given origin (inclusive) and bound (exclusive)
             * @throws IllegalArgumentException if {#code streamSize} is
             *          less than zero, or {@code randomNumberOrigin}
             *          is greater than or equal to {@code randomNumberBound}
             */
            // @ts-ignore
            ints(streamSize: number /*long*/, randomNumberOrigin: number /*int*/, randomNumberBound: number /*int*/): java.util.stream.IntStream
            /**
             * Returns an effectively unlimited stream of pseudorandom {@code
             * int} values from this generator and/or one split from it; each value
             * conforms to the given origin (inclusive) and bound (exclusive).
             * @implNote This method is implemented to be equivalent to {#code
             *  ints(Long.MAX_VALUE, randomNumberOrigin, randomNumberBound)}.
             * @param randomNumberOrigin the origin (inclusive) of each random value
             * @param randomNumberBound the bound (exclusive) of each random value
             * @return a stream of pseudorandom {#code int} values,
             *          each with the given origin (inclusive) and bound (exclusive)
             * @throws IllegalArgumentException if {#code randomNumberOrigin}
             *          is greater than or equal to {@code randomNumberBound}
             */
            // @ts-ignore
            ints(randomNumberOrigin: number /*int*/, randomNumberBound: number /*int*/): java.util.stream.IntStream
            /**
             * Returns a stream producing the given {@code streamSize} number
             * of pseudorandom {@code long} values from this generator and/or
             * one split from it.
             * @param streamSize the number of values to generate
             * @return a stream of pseudorandom {#code long} values
             * @throws IllegalArgumentException if {#code streamSize} is
             *          less than zero
             */
            // @ts-ignore
            longs(streamSize: number /*long*/): java.util.stream.LongStream
            /**
             * Returns an effectively unlimited stream of pseudorandom {@code
             * long} values from this generator and/or one split from it.
             * @implNote This method is implemented to be equivalent to {#code
             *  longs(Long.MAX_VALUE)}.
             * @return a stream of pseudorandom {#code long} values
             */
            // @ts-ignore
            longs(): java.util.stream.LongStream
            /**
             * Returns a stream producing the given {@code streamSize} number of
             * pseudorandom {@code long} values from this generator and/or one split
             * from it; each value conforms to the given origin (inclusive) and bound
             * (exclusive).
             * @param streamSize the number of values to generate
             * @param randomNumberOrigin the origin (inclusive) of each random value
             * @param randomNumberBound the bound (exclusive) of each random value
             * @return a stream of pseudorandom {#code long} values,
             *          each with the given origin (inclusive) and bound (exclusive)
             * @throws IllegalArgumentException if {#code streamSize} is
             *          less than zero, or {@code randomNumberOrigin}
             *          is greater than or equal to {@code randomNumberBound}
             */
            // @ts-ignore
            longs(streamSize: number /*long*/, randomNumberOrigin: number /*long*/, randomNumberBound: number /*long*/): java.util.stream.LongStream
            /**
             * Returns an effectively unlimited stream of pseudorandom {@code
             * long} values from this generator and/or one split from it; each value
             * conforms to the given origin (inclusive) and bound (exclusive).
             * @implNote This method is implemented to be equivalent to {#code
             *  longs(Long.MAX_VALUE, randomNumberOrigin, randomNumberBound)}.
             * @param randomNumberOrigin the origin (inclusive) of each random value
             * @param randomNumberBound the bound (exclusive) of each random value
             * @return a stream of pseudorandom {#code long} values,
             *          each with the given origin (inclusive) and bound (exclusive)
             * @throws IllegalArgumentException if {#code randomNumberOrigin}
             *          is greater than or equal to {@code randomNumberBound}
             */
            // @ts-ignore
            longs(randomNumberOrigin: number /*long*/, randomNumberBound: number /*long*/): java.util.stream.LongStream
            /**
             * Returns a stream producing the given {@code streamSize} number of
             * pseudorandom {@code double} values from this generator and/or one split
             * from it; each value is between zero (inclusive) and one (exclusive).
             * @param streamSize the number of values to generate
             * @return a stream of {#code double} values
             * @throws IllegalArgumentException if {#code streamSize} is
             *          less than zero
             */
            // @ts-ignore
            doubles(streamSize: number /*long*/): java.util.stream.DoubleStream
            /**
             * Returns an effectively unlimited stream of pseudorandom {@code
             * double} values from this generator and/or one split from it; each value
             * is between zero (inclusive) and one (exclusive).
             * @implNote This method is implemented to be equivalent to {#code
             *  doubles(Long.MAX_VALUE)}.
             * @return a stream of pseudorandom {#code double} values
             */
            // @ts-ignore
            doubles(): java.util.stream.DoubleStream
            /**
             * Returns a stream producing the given {@code streamSize} number of
             * pseudorandom {@code double} values from this generator and/or one split
             * from it; each value conforms to the given origin (inclusive) and bound
             * (exclusive).
             * @param streamSize the number of values to generate
             * @param randomNumberOrigin the origin (inclusive) of each random value
             * @param randomNumberBound the bound (exclusive) of each random value
             * @return a stream of pseudorandom {#code double} values,
             *          each with the given origin (inclusive) and bound (exclusive)
             * @throws IllegalArgumentException if {#code streamSize} is
             *          less than zero
             * @throws IllegalArgumentException if {#code randomNumberOrigin}
             *          is greater than or equal to {@code randomNumberBound}
             */
            // @ts-ignore
            doubles(streamSize: number /*long*/, randomNumberOrigin: number /*double*/, randomNumberBound: number /*double*/): java.util.stream.DoubleStream
            /**
             * Returns an effectively unlimited stream of pseudorandom {@code
             * double} values from this generator and/or one split from it; each value
             * conforms to the given origin (inclusive) and bound (exclusive).
             * @implNote This method is implemented to be equivalent to {#code
             *  doubles(Long.MAX_VALUE, randomNumberOrigin, randomNumberBound)}.
             * @param randomNumberOrigin the origin (inclusive) of each random value
             * @param randomNumberBound the bound (exclusive) of each random value
             * @return a stream of pseudorandom {#code double} values,
             *          each with the given origin (inclusive) and bound (exclusive)
             * @throws IllegalArgumentException if {#code randomNumberOrigin}
             *          is greater than or equal to {@code randomNumberBound}
             */
            // @ts-ignore
            doubles(randomNumberOrigin: number /*double*/, randomNumberBound: number /*double*/): java.util.stream.DoubleStream
        }
    }
}
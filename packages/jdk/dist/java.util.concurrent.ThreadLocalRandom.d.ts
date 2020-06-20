declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A random number generator isolated to the current thread.  Like the
             * global {@link java.util.Random} generator used by the {@link
             * java.lang.Math} class, a {@code ThreadLocalRandom} is initialized
             * with an internally generated seed that may not otherwise be
             * modified. When applicable, use of {@code ThreadLocalRandom} rather
             * than shared {@code Random} objects in concurrent programs will
             * typically encounter much less overhead and contention.  Use of
             * {@code ThreadLocalRandom} is particularly appropriate when multiple
             * tasks (for example, each a {@link ForkJoinTask}) use random numbers
             * in parallel in thread pools.
             * <p>Usages of this class should typically be of the form:
             * {@code ThreadLocalRandom.current().nextX(...)} (where
             * {@code X} is {@code Int}, {@code Long}, etc).
             * When all usages are of this form, it is never possible to
             * accidently share a {@code ThreadLocalRandom} across multiple threads.
             * <p>This class also provides additional commonly used bounded random
             * generation methods.
             * <p>Instances of {@code ThreadLocalRandom} are not cryptographically
             * secure.  Consider instead using {@link java.security.SecureRandom}
             * in security-sensitive applications. Additionally,
             * default-constructed instances do not use a cryptographically random
             * seed unless the {@linkplain System#getProperty system property}
             * {@code java.util.secureRandomSeed} is set to {@code true}.
             * @since 1.7
             * @author Doug Lea
             */
            // @ts-ignore
            class ThreadLocalRandom extends java.util.Random {
                /**
                 * Returns the current thread's {@code ThreadLocalRandom}.
                 * @return the current thread's {#code ThreadLocalRandom}
                 */
                // @ts-ignore
                current(): java.util.concurrent.ThreadLocalRandom
                /**
                 * Throws {@code UnsupportedOperationException}.  Setting seeds in
                 * this generator is not supported.
                 * @throws UnsupportedOperationException always
                 */
                // @ts-ignore
                setSeed(seed: number /*long*/): void
                // @ts-ignore
                next(bits: number /*int*/): int
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
                 * Returns a pseudorandom {@code float} value between zero
                 * (inclusive) and one (exclusive).
                 * @return a pseudorandom {#code float} value between zero
                 *          (inclusive) and one (exclusive)
                 */
                // @ts-ignore
                nextFloat(): float
                // @ts-ignore
                nextGaussian(): double
                /**
                 * Returns a stream producing the given {@code streamSize} number of
                 * pseudorandom {@code int} values.
                 * @param streamSize the number of values to generate
                 * @return a stream of pseudorandom {#code int} values
                 * @throws IllegalArgumentException if {#code streamSize} is
                 *          less than zero
                 * @since 1.8
                 */
                // @ts-ignore
                ints(streamSize: number /*long*/): java.util.stream.IntStream
                /**
                 * Returns an effectively unlimited stream of pseudorandom {@code int}
                 * values.
                 * @implNote This method is implemented to be equivalent to {#code
                 *  ints(Long.MAX_VALUE)}.
                 * @return a stream of pseudorandom {#code int} values
                 * @since 1.8
                 */
                // @ts-ignore
                ints(): java.util.stream.IntStream
                /**
                 * Returns a stream producing the given {@code streamSize} number
                 * of pseudorandom {@code int} values, each conforming to the given
                 * origin (inclusive) and bound (exclusive).
                 * @param streamSize the number of values to generate
                 * @param randomNumberOrigin the origin (inclusive) of each random value
                 * @param randomNumberBound the bound (exclusive) of each random value
                 * @return a stream of pseudorandom {#code int} values,
                 *          each with the given origin (inclusive) and bound (exclusive)
                 * @throws IllegalArgumentException if {#code streamSize} is
                 *          less than zero, or {@code randomNumberOrigin}
                 *          is greater than or equal to {@code randomNumberBound}
                 * @since 1.8
                 */
                // @ts-ignore
                ints(streamSize: number /*long*/, randomNumberOrigin: number /*int*/, randomNumberBound: number /*int*/): java.util.stream.IntStream
                /**
                 * Returns an effectively unlimited stream of pseudorandom {@code
                 * int} values, each conforming to the given origin (inclusive) and bound
                 * (exclusive).
                 * @implNote This method is implemented to be equivalent to {#code
                 *  ints(Long.MAX_VALUE, randomNumberOrigin, randomNumberBound)}.
                 * @param randomNumberOrigin the origin (inclusive) of each random value
                 * @param randomNumberBound the bound (exclusive) of each random value
                 * @return a stream of pseudorandom {#code int} values,
                 *          each with the given origin (inclusive) and bound (exclusive)
                 * @throws IllegalArgumentException if {#code randomNumberOrigin}
                 *          is greater than or equal to {@code randomNumberBound}
                 * @since 1.8
                 */
                // @ts-ignore
                ints(randomNumberOrigin: number /*int*/, randomNumberBound: number /*int*/): java.util.stream.IntStream
                /**
                 * Returns a stream producing the given {@code streamSize} number of
                 * pseudorandom {@code long} values.
                 * @param streamSize the number of values to generate
                 * @return a stream of pseudorandom {#code long} values
                 * @throws IllegalArgumentException if {#code streamSize} is
                 *          less than zero
                 * @since 1.8
                 */
                // @ts-ignore
                longs(streamSize: number /*long*/): java.util.stream.LongStream
                /**
                 * Returns an effectively unlimited stream of pseudorandom {@code long}
                 * values.
                 * @implNote This method is implemented to be equivalent to {#code
                 *  longs(Long.MAX_VALUE)}.
                 * @return a stream of pseudorandom {#code long} values
                 * @since 1.8
                 */
                // @ts-ignore
                longs(): java.util.stream.LongStream
                /**
                 * Returns a stream producing the given {@code streamSize} number of
                 * pseudorandom {@code long}, each conforming to the given origin
                 * (inclusive) and bound (exclusive).
                 * @param streamSize the number of values to generate
                 * @param randomNumberOrigin the origin (inclusive) of each random value
                 * @param randomNumberBound the bound (exclusive) of each random value
                 * @return a stream of pseudorandom {#code long} values,
                 *          each with the given origin (inclusive) and bound (exclusive)
                 * @throws IllegalArgumentException if {#code streamSize} is
                 *          less than zero, or {@code randomNumberOrigin}
                 *          is greater than or equal to {@code randomNumberBound}
                 * @since 1.8
                 */
                // @ts-ignore
                longs(streamSize: number /*long*/, randomNumberOrigin: number /*long*/, randomNumberBound: number /*long*/): java.util.stream.LongStream
                /**
                 * Returns an effectively unlimited stream of pseudorandom {@code
                 * long} values, each conforming to the given origin (inclusive) and bound
                 * (exclusive).
                 * @implNote This method is implemented to be equivalent to {#code
                 *  longs(Long.MAX_VALUE, randomNumberOrigin, randomNumberBound)}.
                 * @param randomNumberOrigin the origin (inclusive) of each random value
                 * @param randomNumberBound the bound (exclusive) of each random value
                 * @return a stream of pseudorandom {#code long} values,
                 *          each with the given origin (inclusive) and bound (exclusive)
                 * @throws IllegalArgumentException if {#code randomNumberOrigin}
                 *          is greater than or equal to {@code randomNumberBound}
                 * @since 1.8
                 */
                // @ts-ignore
                longs(randomNumberOrigin: number /*long*/, randomNumberBound: number /*long*/): java.util.stream.LongStream
                /**
                 * Returns a stream producing the given {@code streamSize} number of
                 * pseudorandom {@code double} values, each between zero
                 * (inclusive) and one (exclusive).
                 * @param streamSize the number of values to generate
                 * @return a stream of {#code double} values
                 * @throws IllegalArgumentException if {#code streamSize} is
                 *          less than zero
                 * @since 1.8
                 */
                // @ts-ignore
                doubles(streamSize: number /*long*/): java.util.stream.DoubleStream
                /**
                 * Returns an effectively unlimited stream of pseudorandom {@code
                 * double} values, each between zero (inclusive) and one
                 * (exclusive).
                 * @implNote This method is implemented to be equivalent to {#code
                 *  doubles(Long.MAX_VALUE)}.
                 * @return a stream of pseudorandom {#code double} values
                 * @since 1.8
                 */
                // @ts-ignore
                doubles(): java.util.stream.DoubleStream
                /**
                 * Returns a stream producing the given {@code streamSize} number of
                 * pseudorandom {@code double} values, each conforming to the given origin
                 * (inclusive) and bound (exclusive).
                 * @param streamSize the number of values to generate
                 * @param randomNumberOrigin the origin (inclusive) of each random value
                 * @param randomNumberBound the bound (exclusive) of each random value
                 * @return a stream of pseudorandom {#code double} values,
                 *          each with the given origin (inclusive) and bound (exclusive)
                 * @throws IllegalArgumentException if {#code streamSize} is
                 *          less than zero
                 * @throws IllegalArgumentException if {#code randomNumberOrigin}
                 *          is greater than or equal to {@code randomNumberBound}
                 * @since 1.8
                 */
                // @ts-ignore
                doubles(streamSize: number /*long*/, randomNumberOrigin: number /*double*/, randomNumberBound: number /*double*/): java.util.stream.DoubleStream
                /**
                 * Returns an effectively unlimited stream of pseudorandom {@code
                 * double} values, each conforming to the given origin (inclusive) and bound
                 * (exclusive).
                 * @implNote This method is implemented to be equivalent to {#code
                 *  doubles(Long.MAX_VALUE, randomNumberOrigin, randomNumberBound)}.
                 * @param randomNumberOrigin the origin (inclusive) of each random value
                 * @param randomNumberBound the bound (exclusive) of each random value
                 * @return a stream of pseudorandom {#code double} values,
                 *          each with the given origin (inclusive) and bound (exclusive)
                 * @throws IllegalArgumentException if {#code randomNumberOrigin}
                 *          is greater than or equal to {@code randomNumberBound}
                 * @since 1.8
                 */
                // @ts-ignore
                doubles(randomNumberOrigin: number /*double*/, randomNumberBound: number /*double*/): java.util.stream.DoubleStream
            }
        }
    }
}

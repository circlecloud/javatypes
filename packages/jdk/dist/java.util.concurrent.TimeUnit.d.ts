declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A {@code TimeUnit} represents time durations at a given unit of
             * granularity and provides utility methods to convert across units,
             * and to perform timing and delay operations in these units.  A
             * {@code TimeUnit} does not maintain time information, but only
             * helps organize and use time representations that may be maintained
             * separately across various contexts.  A nanosecond is defined as one
             * thousandth of a microsecond, a microsecond as one thousandth of a
             * millisecond, a millisecond as one thousandth of a second, a minute
             * as sixty seconds, an hour as sixty minutes, and a day as twenty four
             * hours.
             * <p>A {@code TimeUnit} is mainly used to inform time-based methods
             * how a given timing parameter should be interpreted. For example,
             * the following code will timeout in 50 milliseconds if the {@link
             * java.util.concurrent.locks.Lock lock} is not available:
             * <pre> {@code
             * Lock lock = ...;
             * if (lock.tryLock(50L, TimeUnit.MILLISECONDS)) ...}</pre>
             * while this code will timeout in 50 seconds:
             * <pre> {@code
             * Lock lock = ...;
             * if (lock.tryLock(50L, TimeUnit.SECONDS)) ...}</pre>
             * Note however, that there is no guarantee that a particular timeout
             * implementation will be able to notice the passage of time at the
             * same granularity as the given {@code TimeUnit}.
             * @since 1.5
             * @author Doug Lea
             */
            // @ts-ignore
            class TimeUnit extends java.lang.Enum<java.util.concurrent.TimeUnit> {
                // @ts-ignore
                values(): java.util.concurrent.TimeUnit[]
                // @ts-ignore
                valueOf(name: string): java.util.concurrent.TimeUnit
                /**
                 * Converts the given time duration in the given unit to this unit.
                 * Conversions from finer to coarser granularities truncate, so
                 * lose precision. For example, converting {@code 999} milliseconds
                 * to seconds results in {@code 0}. Conversions from coarser to
                 * finer granularities with arguments that would numerically
                 * overflow saturate to {@code Long.MIN_VALUE} if negative or
                 * {@code Long.MAX_VALUE} if positive.
                 * <p>For example, to convert 10 minutes to milliseconds, use:
                 * {@code TimeUnit.MILLISECONDS.convert(10L, TimeUnit.MINUTES)}
                 * @param sourceDuration the time duration in the given {#code sourceUnit}
                 * @param sourceUnit the unit of the {#code sourceDuration} argument
                 * @return the converted duration in this unit,
                 *  or {#code Long.MIN_VALUE} if conversion would negatively
                 *  overflow, or {@code Long.MAX_VALUE} if it would positively overflow.
                 */
                // @ts-ignore
                convert(sourceDuration: number /*long*/, sourceUnit: java.util.concurrent.TimeUnit): long
                /**
                 * Equivalent to
                 * {@link #convert(long, TimeUnit) NANOSECONDS.convert(duration, this)}.
                 * @param duration the duration
                 * @return the converted duration,
                 *  or {#code Long.MIN_VALUE} if conversion would negatively
                 *  overflow, or {@code Long.MAX_VALUE} if it would positively overflow.
                 */
                // @ts-ignore
                toNanos(duration: number /*long*/): long
                /**
                 * Equivalent to
                 * {@link #convert(long, TimeUnit) MICROSECONDS.convert(duration, this)}.
                 * @param duration the duration
                 * @return the converted duration,
                 *  or {#code Long.MIN_VALUE} if conversion would negatively
                 *  overflow, or {@code Long.MAX_VALUE} if it would positively overflow.
                 */
                // @ts-ignore
                toMicros(duration: number /*long*/): long
                /**
                 * Equivalent to
                 * {@link #convert(long, TimeUnit) MILLISECONDS.convert(duration, this)}.
                 * @param duration the duration
                 * @return the converted duration,
                 *  or {#code Long.MIN_VALUE} if conversion would negatively
                 *  overflow, or {@code Long.MAX_VALUE} if it would positively overflow.
                 */
                // @ts-ignore
                toMillis(duration: number /*long*/): long
                /**
                 * Equivalent to
                 * {@link #convert(long, TimeUnit) SECONDS.convert(duration, this)}.
                 * @param duration the duration
                 * @return the converted duration,
                 *  or {#code Long.MIN_VALUE} if conversion would negatively
                 *  overflow, or {@code Long.MAX_VALUE} if it would positively overflow.
                 */
                // @ts-ignore
                toSeconds(duration: number /*long*/): long
                /**
                 * Equivalent to
                 * {@link #convert(long, TimeUnit) MINUTES.convert(duration, this)}.
                 * @param duration the duration
                 * @return the converted duration,
                 *  or {#code Long.MIN_VALUE} if conversion would negatively
                 *  overflow, or {@code Long.MAX_VALUE} if it would positively overflow.
                 * @since 1.6
                 */
                // @ts-ignore
                toMinutes(duration: number /*long*/): long
                /**
                 * Equivalent to
                 * {@link #convert(long, TimeUnit) HOURS.convert(duration, this)}.
                 * @param duration the duration
                 * @return the converted duration,
                 *  or {#code Long.MIN_VALUE} if conversion would negatively
                 *  overflow, or {@code Long.MAX_VALUE} if it would positively overflow.
                 * @since 1.6
                 */
                // @ts-ignore
                toHours(duration: number /*long*/): long
                /**
                 * Equivalent to
                 * {@link #convert(long, TimeUnit) DAYS.convert(duration, this)}.
                 * @param duration the duration
                 * @return the converted duration
                 * @since 1.6
                 */
                // @ts-ignore
                toDays(duration: number /*long*/): long
                /**
                 * Performs a timed {@link Object#wait(long, int) Object.wait}
                 * using this time unit.
                 * This is a convenience method that converts timeout arguments
                 * into the form required by the {@code Object.wait} method.
                 * <p>For example, you could implement a blocking {@code poll}
                 * method (see {@link BlockingQueue#poll BlockingQueue.poll})
                 * using:
                 * <pre> {@code
                 * public synchronized Object poll(long timeout, TimeUnit unit)
                 * throws InterruptedException {
                 * while (empty) {
                 * unit.timedWait(this, timeout);
                 * ...
                 * }
                 * }}</pre>
                 * @param obj the object to wait on
                 * @param timeout the maximum time to wait. If less than
                 *  or equal to zero, do not wait at all.
                 * @throws InterruptedException if interrupted while waiting
                 */
                // @ts-ignore
                timedWait(obj: any, timeout: number /*long*/): void
                /**
                 * Performs a timed {@link Thread#join(long, int) Thread.join}
                 * using this time unit.
                 * This is a convenience method that converts time arguments into the
                 * form required by the {@code Thread.join} method.
                 * @param thread the thread to wait for
                 * @param timeout the maximum time to wait. If less than
                 *  or equal to zero, do not wait at all.
                 * @throws InterruptedException if interrupted while waiting
                 */
                // @ts-ignore
                timedJoin(thread: java.lang.Thread, timeout: number /*long*/): void
                /**
                 * Performs a {@link Thread#sleep(long, int) Thread.sleep} using
                 * this time unit.
                 * This is a convenience method that converts time arguments into the
                 * form required by the {@code Thread.sleep} method.
                 * @param timeout the minimum time to sleep. If less than
                 *  or equal to zero, do not sleep at all.
                 * @throws InterruptedException if interrupted while sleeping
                 */
                // @ts-ignore
                sleep(timeout: number /*long*/): void
            }
        }
    }
}

declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                /**
                 * A reflection-based utility that enables atomic updates to
                 * designated {@code volatile int} fields of designated classes.
                 * This class is designed for use in atomic data structures in which
                 * several fields of the same node are independently subject to atomic
                 * updates.
                 * <p>Note that the guarantees of the {@code compareAndSet}
                 * method in this class are weaker than in other atomic classes.
                 * Because this class cannot ensure that all uses of the field
                 * are appropriate for purposes of atomic access, it can
                 * guarantee atomicity only with respect to other invocations of
                 * {@code compareAndSet} and {@code set} on the same updater.
                 * @since 1.5
                 * @author Doug Lea
                 * @param <T> The type of the object holding the updatable field
                 */
                // @ts-ignore
                class AtomicIntegerFieldUpdater<T> extends java.lang.Object {
                    /**
                     * Protected do-nothing constructor for use by subclasses.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates and returns an updater for objects with the given field.
                     * The Class argument is needed to check that reflective types and
                     * generic types match.
                     * @param tclass the class of the objects holding the field
                     * @param fieldName the name of the field to be updated
                     * @param <U> the type of instances of tclass
                     * @return the updater
                     * @throws IllegalArgumentException if the field is not a
                     *  volatile integer type
                     * @throws RuntimeException with a nested reflection-based
                     *  exception if the class does not hold field or is the wrong type,
                     *  or the field is inaccessible to the caller according to Java language
                     *  access control
                     */
                    // @ts-ignore
                    newUpdater<U>(tclass: java.lang.Class<U>, fieldName: string): java.util.concurrent.atomic.AtomicIntegerFieldUpdater<U>
                    /**
                     * Atomically sets the field of the given object managed by this updater
                     * to the given updated value if the current value {@code ==} the
                     * expected value. This method is guaranteed to be atomic with respect to
                     * other calls to {@code compareAndSet} and {@code set}, but not
                     * necessarily with respect to other changes in the field.
                     * @param obj An object whose field to conditionally set
                     * @param expect the expected value
                     * @param update the new value
                     * @return {#code true} if successful
                     * @throws ClassCastException if {#code obj} is not an instance
                     *  of the class possessing the field established in the constructor
                     */
                    // @ts-ignore
                    abstract compareAndSet(obj: T, expect: number /*int*/, update: number /*int*/): boolean
                    /**
                     * Atomically sets the field of the given object managed by this updater
                     * to the given updated value if the current value {@code ==} the
                     * expected value. This method is guaranteed to be atomic with respect to
                     * other calls to {@code compareAndSet} and {@code set}, but not
                     * necessarily with respect to other changes in the field.
                     * <p><a href="package-summary.html#weakCompareAndSet">May fail
                     * spuriously and does not provide ordering guarantees</a>, so is
                     * only rarely an appropriate alternative to {@code compareAndSet}.
                     * @param obj An object whose field to conditionally set
                     * @param expect the expected value
                     * @param update the new value
                     * @return {#code true} if successful
                     * @throws ClassCastException if {#code obj} is not an instance
                     *  of the class possessing the field established in the constructor
                     */
                    // @ts-ignore
                    abstract weakCompareAndSet(obj: T, expect: number /*int*/, update: number /*int*/): boolean
                    /**
                     * Sets the field of the given object managed by this updater to the
                     * given updated value. This operation is guaranteed to act as a volatile
                     * store with respect to subsequent invocations of {@code compareAndSet}.
                     * @param obj An object whose field to set
                     * @param newValue the new value
                     */
                    // @ts-ignore
                    abstract set(obj: T, newValue: number /*int*/): void
                    /**
                     * Eventually sets the field of the given object managed by this
                     * updater to the given updated value.
                     * @param obj An object whose field to set
                     * @param newValue the new value
                     * @since 1.6
                     */
                    // @ts-ignore
                    abstract lazySet(obj: T, newValue: number /*int*/): void
                    /**
                     * Gets the current value held in the field of the given object managed
                     * by this updater.
                     * @param obj An object whose field to get
                     * @return the current value
                     */
                    // @ts-ignore
                    abstract get(obj: T): int
                    /**
                     * Atomically sets the field of the given object managed by this updater
                     * to the given value and returns the old value.
                     * @param obj An object whose field to get and set
                     * @param newValue the new value
                     * @return the previous value
                     */
                    // @ts-ignore
                    getAndSet(obj: T, newValue: number /*int*/): int
                    /**
                     * Atomically increments by one the current value of the field of the
                     * given object managed by this updater.
                     * @param obj An object whose field to get and set
                     * @return the previous value
                     */
                    // @ts-ignore
                    getAndIncrement(obj: T): int
                    /**
                     * Atomically decrements by one the current value of the field of the
                     * given object managed by this updater.
                     * @param obj An object whose field to get and set
                     * @return the previous value
                     */
                    // @ts-ignore
                    getAndDecrement(obj: T): int
                    /**
                     * Atomically adds the given value to the current value of the field of
                     * the given object managed by this updater.
                     * @param obj An object whose field to get and set
                     * @param delta the value to add
                     * @return the previous value
                     */
                    // @ts-ignore
                    getAndAdd(obj: T, delta: number /*int*/): int
                    /**
                     * Atomically increments by one the current value of the field of the
                     * given object managed by this updater.
                     * @param obj An object whose field to get and set
                     * @return the updated value
                     */
                    // @ts-ignore
                    incrementAndGet(obj: T): int
                    /**
                     * Atomically decrements by one the current value of the field of the
                     * given object managed by this updater.
                     * @param obj An object whose field to get and set
                     * @return the updated value
                     */
                    // @ts-ignore
                    decrementAndGet(obj: T): int
                    /**
                     * Atomically adds the given value to the current value of the field of
                     * the given object managed by this updater.
                     * @param obj An object whose field to get and set
                     * @param delta the value to add
                     * @return the updated value
                     */
                    // @ts-ignore
                    addAndGet(obj: T, delta: number /*int*/): int
                    /**
                     * Atomically updates the field of the given object managed by this updater
                     * with the results of applying the given function, returning the previous
                     * value. The function should be side-effect-free, since it may be
                     * re-applied when attempted updates fail due to contention among threads.
                     * @param obj An object whose field to get and set
                     * @param updateFunction a side-effect-free function
                     * @return the previous value
                     * @since 1.8
                     */
                    // @ts-ignore
                    getAndUpdate(obj: T, updateFunction: java.util.function.IntUnaryOperator | java.util.function$.IntUnaryOperator): int
                    /**
                     * Atomically updates the field of the given object managed by this updater
                     * with the results of applying the given function, returning the updated
                     * value. The function should be side-effect-free, since it may be
                     * re-applied when attempted updates fail due to contention among threads.
                     * @param obj An object whose field to get and set
                     * @param updateFunction a side-effect-free function
                     * @return the updated value
                     * @since 1.8
                     */
                    // @ts-ignore
                    updateAndGet(obj: T, updateFunction: java.util.function.IntUnaryOperator | java.util.function$.IntUnaryOperator): int
                    /**
                     * Atomically updates the field of the given object managed by this
                     * updater with the results of applying the given function to the
                     * current and given values, returning the previous value. The
                     * function should be side-effect-free, since it may be re-applied
                     * when attempted updates fail due to contention among threads.  The
                     * function is applied with the current value as its first argument,
                     * and the given update as the second argument.
                     * @param obj An object whose field to get and set
                     * @param x the update value
                     * @param accumulatorFunction a side-effect-free function of two arguments
                     * @return the previous value
                     * @since 1.8
                     */
                    // @ts-ignore
                    getAndAccumulate(obj: T, x: number /*int*/, accumulatorFunction: java.util.function.IntBinaryOperator | java.util.function$.IntBinaryOperator): int
                    /**
                     * Atomically updates the field of the given object managed by this
                     * updater with the results of applying the given function to the
                     * current and given values, returning the updated value. The
                     * function should be side-effect-free, since it may be re-applied
                     * when attempted updates fail due to contention among threads.  The
                     * function is applied with the current value as its first argument,
                     * and the given update as the second argument.
                     * @param obj An object whose field to get and set
                     * @param x the update value
                     * @param accumulatorFunction a side-effect-free function of two arguments
                     * @return the updated value
                     * @since 1.8
                     */
                    // @ts-ignore
                    accumulateAndGet(obj: T, x: number /*int*/, accumulatorFunction: java.util.function.IntBinaryOperator | java.util.function$.IntBinaryOperator): int
                }
            }
        }
    }
}

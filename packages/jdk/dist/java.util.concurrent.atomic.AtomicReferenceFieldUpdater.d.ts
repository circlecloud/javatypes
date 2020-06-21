declare namespace java {
    namespace util {
        namespace concurrent {
            namespace atomic {
                /**
                 * A reflection-based utility that enables atomic updates to
                 * designated {@code volatile} reference fields of designated
                 * classes.  This class is designed for use in atomic data structures
                 * in which several reference fields of the same node are
                 * independently subject to atomic updates. For example, a tree node
                 * might be declared as
                 * <pre> {@code
                 * class Node {
                 * private volatile Node left, right;
                 * private static final AtomicReferenceFieldUpdater<Node, Node> leftUpdater =
                 * AtomicReferenceFieldUpdater.newUpdater(Node.class, Node.class, "left");
                 * private static AtomicReferenceFieldUpdater<Node, Node> rightUpdater =
                 * AtomicReferenceFieldUpdater.newUpdater(Node.class, Node.class, "right");
                 * Node getLeft() { return left; }
                 * boolean compareAndSetLeft(Node expect, Node update) {
                 * return leftUpdater.compareAndSet(this, expect, update);
                 * }
                 * // ... and so on
                 * }}</pre>
                 * <p>Note that the guarantees of the {@code compareAndSet}
                 * method in this class are weaker than in other atomic classes.
                 * Because this class cannot ensure that all uses of the field
                 * are appropriate for purposes of atomic access, it can
                 * guarantee atomicity only with respect to other invocations of
                 * {@code compareAndSet} and {@code set} on the same updater.
                 * @since 1.5
                 * @author Doug Lea
                 * @param <T> The type of the object holding the updatable field
                 * @param <V> The type of the field
                 */
                // @ts-ignore
                abstract class AtomicReferenceFieldUpdater<T, V> extends java.lang.Object {
                    /**
                     * Protected do-nothing constructor for use by subclasses.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates and returns an updater for objects with the given field.
                     * The Class arguments are needed to check that reflective types and
                     * generic types match.
                     * @param tclass the class of the objects holding the field
                     * @param vclass the class of the field
                     * @param fieldName the name of the field to be updated
                     * @param <U> the type of instances of tclass
                     * @param <W> the type of instances of vclass
                     * @return the updater
                     * @throws ClassCastException if the field is of the wrong type
                     * @throws IllegalArgumentException if the field is not volatile
                     * @throws RuntimeException with a nested reflection-based
                     *  exception if the class does not hold field or is the wrong type,
                     *  or the field is inaccessible to the caller according to Java language
                     *  access control
                     */
                    // @ts-ignore
                    public static newUpdater<U, W>(tclass: java.lang.Class<U>, vclass: java.lang.Class<W>, fieldName: java.lang.String | string): java.util.concurrent.atomic.AtomicReferenceFieldUpdater<U, W>
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
                     */
                    // @ts-ignore
                    public abstract compareAndSet(obj: T, expect: V, update: V): boolean
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
                     */
                    // @ts-ignore
                    public abstract weakCompareAndSet(obj: T, expect: V, update: V): boolean
                    /**
                     * Sets the field of the given object managed by this updater to the
                     * given updated value. This operation is guaranteed to act as a volatile
                     * store with respect to subsequent invocations of {@code compareAndSet}.
                     * @param obj An object whose field to set
                     * @param newValue the new value
                     */
                    // @ts-ignore
                    public abstract set(obj: T, newValue: V): void
                    /**
                     * Eventually sets the field of the given object managed by this
                     * updater to the given updated value.
                     * @param obj An object whose field to set
                     * @param newValue the new value
                     * @since 1.6
                     */
                    // @ts-ignore
                    public abstract lazySet(obj: T, newValue: V): void
                    /**
                     * Gets the current value held in the field of the given object managed
                     * by this updater.
                     * @param obj An object whose field to get
                     * @return the current value
                     */
                    // @ts-ignore
                    public abstract get(obj: T): V
                    /**
                     * Atomically sets the field of the given object managed by this updater
                     * to the given value and returns the old value.
                     * @param obj An object whose field to get and set
                     * @param newValue the new value
                     * @return the previous value
                     */
                    // @ts-ignore
                    public getAndSet(obj: T, newValue: V): V
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
                    public getAndUpdate(obj: T, updateFunction: java.util.function$.UnaryOperator<V>): V
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
                    public updateAndGet(obj: T, updateFunction: java.util.function$.UnaryOperator<V>): V
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
                    public getAndAccumulate(obj: T, x: V, accumulatorFunction: java.util.function$.BinaryOperator<V>): V
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
                    public accumulateAndGet(obj: T, x: V, accumulatorFunction: java.util.function$.BinaryOperator<V>): V
                }
            }
        }
    }
}

declare namespace org {
    namespace springframework {
        namespace util {
            namespace concurrent {
                /**
                 * Abstract class that adapts a {@link Future} parameterized over S into a {@code Future}
                 * parameterized over T. All methods are delegated to the adaptee, where {@link #get()}
                 * and {@link #get(long, TimeUnit)} call {@link #adapt(Object)} on the adaptee's result.
                 * @author Arjen Poutsma
                 * @since 4.0
                 * @param <T> the type of this {#code Future}
                 * @param <S> the type of the adaptee's {#code Future}
                 */
                // @ts-ignore
                abstract class FutureAdapter<T, S> extends java.lang.Object implements java.util.concurrent.Future<T> {
                    /**
                     * Constructs a new {@code FutureAdapter} with the given adaptee.
                     * @param adaptee the future to delegate to
                     */
                    // @ts-ignore
                    constructor(adaptee: java.util.concurrent.Future<S>)
                    /**
                     * Returns the adaptee.
                     */
                    // @ts-ignore
                    getAdaptee(): java.util.concurrent.Future<S>
                    // @ts-ignore
                    public cancel(mayInterruptIfRunning: boolean): boolean
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public isDone(): boolean
                    // @ts-ignore
                    public get(): T
                    // @ts-ignore
                    public get(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): T
                    /**
                     * Adapts the given adaptee's result into T.
                     * @return the adapted result
                     */
                    // @ts-ignore
                    abstract adapt(adapteeResult: S): T
                }
            }
        }
    }
}

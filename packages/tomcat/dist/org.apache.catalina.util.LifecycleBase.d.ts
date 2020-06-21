declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * Base implementation of the {@link Lifecycle} interface that implements the
                 * state transition rules for {@link Lifecycle#start()} and
                 * {@link Lifecycle#stop()}
                 */
                // @ts-ignore
                abstract class LifecycleBase extends java.lang.Object implements org.apache.catalina.Lifecycle {
                    // @ts-ignore
                    constructor()
                    /**
                     * Will a {@link LifecycleException} thrown by a sub-class during
                     * {@link #initInternal()}, {@link #startInternal()},
                     * {@link #stopInternal()} or {@link #destroyInternal()} be re-thrown for
                     * the caller to handle or will it be logged instead?
                     * @return {#code true} if the exception will be re-thrown, otherwise
                     *          {@code false}
                     */
                    // @ts-ignore
                    public getThrowOnFailure(): boolean
                    /**
                     * Configure if a {@link LifecycleException} thrown by a sub-class during
                     * {@link #initInternal()}, {@link #startInternal()},
                     * {@link #stopInternal()} or {@link #destroyInternal()} will be re-thrown
                     * for the caller to handle or if it will be logged instead.
                     * @param throwOnFailure {#code true} if the exception should be re-thrown,
                     *                        otherwise {@code false}
                     */
                    // @ts-ignore
                    public setThrowOnFailure(throwOnFailure: boolean): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public addLifecycleListener(listener: org.apache.catalina.LifecycleListener): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public findLifecycleListeners(): org.apache.catalina.LifecycleListener[]
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public removeLifecycleListener(listener: org.apache.catalina.LifecycleListener): void
                    /**
                     * Allow sub classes to fire {@link Lifecycle} events.
                     * @param type  Event type
                     * @param data  Data associated with event.
                     */
                    // @ts-ignore
                    fireLifecycleEvent(type: java.lang.String | string, data: java.lang.Object | any): void
                    // @ts-ignore
                    public init(): void
                    /**
                     * Sub-classes implement this method to perform any instance initialisation
                     * required.
                     * @throws LifecycleException If the initialisation fails
                     */
                    // @ts-ignore
                    abstract initInternal(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public start(): void
                    /**
                     * Sub-classes must ensure that the state is changed to
                     * {@link LifecycleState#STARTING} during the execution of this method.
                     * Changing state will trigger the {@link Lifecycle#START_EVENT} event.
                     * If a component fails to start it may either throw a
                     * {@link LifecycleException} which will cause it's parent to fail to start
                     * or it can place itself in the error state in which case {@link #stop()}
                     * will be called on the failed component but the parent component will
                     * continue to start normally.
                     * @throws LifecycleException Start error occurred
                     */
                    // @ts-ignore
                    abstract startInternal(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public stop(): void
                    /**
                     * Sub-classes must ensure that the state is changed to
                     * {@link LifecycleState#STOPPING} during the execution of this method.
                     * Changing state will trigger the {@link Lifecycle#STOP_EVENT} event.
                     * @throws LifecycleException Stop error occurred
                     */
                    // @ts-ignore
                    abstract stopInternal(): void
                    // @ts-ignore
                    public destroy(): void
                    /**
                     * Sub-classes implement this method to perform any instance destruction
                     * required.
                     * @throws LifecycleException If the destruction fails
                     */
                    // @ts-ignore
                    abstract destroyInternal(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getState(): org.apache.catalina.LifecycleState
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getStateName(): string
                    /**
                     * Provides a mechanism for sub-classes to update the component state.
                     * Calling this method will automatically fire any associated
                     * {@link Lifecycle} event. It will also check that any attempted state
                     * transition is valid for a sub-class.
                     * @param state The new state for this component
                     * @throws LifecycleException when attempting to set an invalid state
                     */
                    // @ts-ignore
                    setState(state: org.apache.catalina.LifecycleState): void
                    /**
                     * Provides a mechanism for sub-classes to update the component state.
                     * Calling this method will automatically fire any associated
                     * {@link Lifecycle} event. It will also check that any attempted state
                     * transition is valid for a sub-class.
                     * @param state The new state for this component
                     * @param data  The data to pass to the associated {#link Lifecycle} event
                     * @throws LifecycleException when attempting to set an invalid state
                     */
                    // @ts-ignore
                    setState(state: org.apache.catalina.LifecycleState, data: java.lang.Object | any): void
                }
            }
        }
    }
}

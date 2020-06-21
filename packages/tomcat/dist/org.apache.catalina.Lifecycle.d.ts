declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * Common interface for component life cycle methods.  Catalina components
             * may implement this interface (as well as the appropriate interface(s) for
             * the functionality they support) in order to provide a consistent mechanism
             * to start and stop the component.
             * <br>
             * The valid state transitions for components that support {@link Lifecycle}
             * are:
             * <pre>
             * start()
             * -----------------------------
             * |                           |
             * | init()                    |
             * NEW -»-- INITIALIZING        |
             * | |           |              |     ------------------«-----------------------
             * | |           |auto          |     |                                        |
             * | |          \|/    start() \|/   \|/     auto          auto         stop() |
             * | |      INITIALIZED --»-- STARTING_PREP --»- STARTING --»- STARTED --»---  |
             * | |         |                                                            |  |
             * | |destroy()|                                                            |  |
             * | --»-----«--    ------------------------«--------------------------------  ^
             * |     |          |                                                          |
             * |     |         \|/          auto                 auto              start() |
             * |     |     STOPPING_PREP ----»---- STOPPING ------»----- STOPPED -----»-----
             * |    \|/                               ^                     |  ^
             * |     |               stop()           |                     |  |
             * |     |       --------------------------                     |  |
             * |     |       |                                              |  |
             * |     |       |    destroy()                       destroy() |  |
             * |     |    FAILED ----»------ DESTROYING ---«-----------------  |
             * |     |                        ^     |                          |
             * |     |     destroy()          |     |auto                      |
             * |     --------»-----------------    \|/                         |
             * |                                 DESTROYED                     |
             * |                                                               |
             * |                            stop()                             |
             * ----»-----------------------------»------------------------------
             * Any state can transition to FAILED.
             * Calling start() while a component is in states STARTING_PREP, STARTING or
             * STARTED has no effect.
             * Calling start() while a component is in state NEW will cause init() to be
             * called immediately after the start() method is entered.
             * Calling stop() while a component is in states STOPPING_PREP, STOPPING or
             * STOPPED has no effect.
             * Calling stop() while a component is in state NEW transitions the component
             * to STOPPED. This is typically encountered when a component fails to start and
             * does not start all its sub-components. When the component is stopped, it will
             * try to stop all sub-components - even those it didn't start.
             * Attempting any other transition will throw {@link LifecycleException}.
             * </pre>
             * The {@link LifecycleEvent}s fired during state changes are defined in the
             * methods that trigger the changed. No {@link LifecycleEvent}s are fired if the
             * attempted transition is not valid.
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            interface Lifecycle {
                /**
                 * The LifecycleEvent type for the "component before init" event.
                 */
                // @ts-ignore
                readonly BEFORE_INIT_EVENT: java.lang.String | string
                /**
                 * The LifecycleEvent type for the "component after init" event.
                 */
                // @ts-ignore
                readonly AFTER_INIT_EVENT: java.lang.String | string
                /**
                 * The LifecycleEvent type for the "component start" event.
                 */
                // @ts-ignore
                readonly START_EVENT: java.lang.String | string
                /**
                 * The LifecycleEvent type for the "component before start" event.
                 */
                // @ts-ignore
                readonly BEFORE_START_EVENT: java.lang.String | string
                /**
                 * The LifecycleEvent type for the "component after start" event.
                 */
                // @ts-ignore
                readonly AFTER_START_EVENT: java.lang.String | string
                /**
                 * The LifecycleEvent type for the "component stop" event.
                 */
                // @ts-ignore
                readonly STOP_EVENT: java.lang.String | string
                /**
                 * The LifecycleEvent type for the "component before stop" event.
                 */
                // @ts-ignore
                readonly BEFORE_STOP_EVENT: java.lang.String | string
                /**
                 * The LifecycleEvent type for the "component after stop" event.
                 */
                // @ts-ignore
                readonly AFTER_STOP_EVENT: java.lang.String | string
                /**
                 * The LifecycleEvent type for the "component after destroy" event.
                 */
                // @ts-ignore
                readonly AFTER_DESTROY_EVENT: java.lang.String | string
                /**
                 * The LifecycleEvent type for the "component before destroy" event.
                 */
                // @ts-ignore
                readonly BEFORE_DESTROY_EVENT: java.lang.String | string
                /**
                 * The LifecycleEvent type for the "periodic" event.
                 */
                // @ts-ignore
                readonly PERIODIC_EVENT: java.lang.String | string
                /**
                 * The LifecycleEvent type for the "configure_start" event. Used by those
                 * components that use a separate component to perform configuration and
                 * need to signal when configuration should be performed - usually after
                 * {@link #BEFORE_START_EVENT} and before {@link #START_EVENT}.
                 */
                // @ts-ignore
                readonly CONFIGURE_START_EVENT: java.lang.String | string
                /**
                 * The LifecycleEvent type for the "configure_stop" event. Used by those
                 * components that use a separate component to perform configuration and
                 * need to signal when de-configuration should be performed - usually after
                 * {@link #STOP_EVENT} and before {@link #AFTER_STOP_EVENT}.
                 */
                // @ts-ignore
                readonly CONFIGURE_STOP_EVENT: java.lang.String | string
                /**
                 * Add a LifecycleEvent listener to this component.
                 * @param listener The listener to add
                 */
                // @ts-ignore
                addLifecycleListener(listener: org.apache.catalina.LifecycleListener): void
                /**
                 * Get the life cycle listeners associated with this life cycle.
                 * @return An array containing the life cycle listeners associated with this
                 *          life cycle. If this component has no listeners registered, a
                 *          zero-length array is returned.
                 */
                // @ts-ignore
                findLifecycleListeners(): org.apache.catalina.LifecycleListener[]
                /**
                 * Remove a LifecycleEvent listener from this component.
                 * @param listener The listener to remove
                 */
                // @ts-ignore
                removeLifecycleListener(listener: org.apache.catalina.LifecycleListener): void
                /**
                 * Prepare the component for starting. This method should perform any
                 * initialization required post object creation. The following
                 * {@link LifecycleEvent}s will be fired in the following order:
                 * <ol>
                 * <li>INIT_EVENT: On the successful completion of component
                 * initialization.</li>
                 * </ol>
                 * @exception LifecycleException if this component detects a fatal error
                 *   that prevents this component from being used
                 */
                // @ts-ignore
                init(): void
                /**
                 * Prepare for the beginning of active use of the public methods other than
                 * property getters/setters and life cycle methods of this component. This
                 * method should be called before any of the public methods other than
                 * property getters/setters and life cycle methods of this component are
                 * utilized. The following {@link LifecycleEvent}s will be fired in the
                 * following order:
                 * <ol>
                 * <li>BEFORE_START_EVENT: At the beginning of the method. It is as this
                 * point the state transitions to
                 * {@link LifecycleState#STARTING_PREP}.</li>
                 * <li>START_EVENT: During the method once it is safe to call start() for
                 * any child components. It is at this point that the
                 * state transitions to {@link LifecycleState#STARTING}
                 * and that the public methods other than property
                 * getters/setters and life cycle methods may be
                 * used.</li>
                 * <li>AFTER_START_EVENT: At the end of the method, immediately before it
                 * returns. It is at this point that the state
                 * transitions to {@link LifecycleState#STARTED}.
                 * </li>
                 * </ol>
                 * @exception LifecycleException if this component detects a fatal error
                 *   that prevents this component from being used
                 */
                // @ts-ignore
                start(): void
                /**
                 * Gracefully terminate the active use of the public methods other than
                 * property getters/setters and life cycle methods of this component. Once
                 * the STOP_EVENT is fired, the public methods other than property
                 * getters/setters and life cycle methods should not be used. The following
                 * {@link LifecycleEvent}s will be fired in the following order:
                 * <ol>
                 * <li>BEFORE_STOP_EVENT: At the beginning of the method. It is at this
                 * point that the state transitions to
                 * {@link LifecycleState#STOPPING_PREP}.</li>
                 * <li>STOP_EVENT: During the method once it is safe to call stop() for
                 * any child components. It is at this point that the
                 * state transitions to {@link LifecycleState#STOPPING}
                 * and that the public methods other than property
                 * getters/setters and life cycle methods may no longer be
                 * used.</li>
                 * <li>AFTER_STOP_EVENT: At the end of the method, immediately before it
                 * returns. It is at this point that the state
                 * transitions to {@link LifecycleState#STOPPED}.
                 * </li>
                 * </ol>
                 * Note that if transitioning from {@link LifecycleState#FAILED} then the
                 * three events above will be fired but the component will transition
                 * directly from {@link LifecycleState#FAILED} to
                 * {@link LifecycleState#STOPPING}, bypassing
                 * {@link LifecycleState#STOPPING_PREP}
                 * @exception LifecycleException if this component detects a fatal error
                 *   that needs to be reported
                 */
                // @ts-ignore
                stop(): void
                /**
                 * Prepare to discard the object. The following {@link LifecycleEvent}s will
                 * be fired in the following order:
                 * <ol>
                 * <li>DESTROY_EVENT: On the successful completion of component
                 * destruction.</li>
                 * </ol>
                 * @exception LifecycleException if this component detects a fatal error
                 *   that prevents this component from being used
                 */
                // @ts-ignore
                destroy(): void
                /**
                 * Obtain the current state of the source component.
                 * @return The current state of the source component.
                 */
                // @ts-ignore
                getState(): org.apache.catalina.LifecycleState
                /**
                 * Obtain a textual representation of the current component state. Useful
                 * for JMX. The format of this string may vary between point releases and
                 * should not be relied upon to determine component state. To determine
                 * component state, use {@link #getState()}.
                 * @return The name of the current component state.
                 */
                // @ts-ignore
                getStateName(): string
            }
        }
    }
}

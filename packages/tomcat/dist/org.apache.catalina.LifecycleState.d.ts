declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * The list of valid states for components that implement {@link Lifecycle}.
             * See {@link Lifecycle} for the state transition diagram.
             */
            // @ts-ignore
            class LifecycleState extends java.lang.Enum<org.apache.catalina.LifecycleState> {
                // @ts-ignore
                public static readonly NEW: org.apache.catalina.LifecycleState
                // @ts-ignore
                public static readonly INITIALIZING: org.apache.catalina.LifecycleState
                // @ts-ignore
                public static readonly INITIALIZED: org.apache.catalina.LifecycleState
                // @ts-ignore
                public static readonly STARTING_PREP: org.apache.catalina.LifecycleState
                // @ts-ignore
                public static readonly STARTING: org.apache.catalina.LifecycleState
                // @ts-ignore
                public static readonly STARTED: org.apache.catalina.LifecycleState
                // @ts-ignore
                public static readonly STOPPING_PREP: org.apache.catalina.LifecycleState
                // @ts-ignore
                public static readonly STOPPING: org.apache.catalina.LifecycleState
                // @ts-ignore
                public static readonly STOPPED: org.apache.catalina.LifecycleState
                // @ts-ignore
                public static readonly DESTROYING: org.apache.catalina.LifecycleState
                // @ts-ignore
                public static readonly DESTROYED: org.apache.catalina.LifecycleState
                // @ts-ignore
                public static readonly FAILED: org.apache.catalina.LifecycleState
                // @ts-ignore
                public static values(): org.apache.catalina.LifecycleState[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): org.apache.catalina.LifecycleState
                /**
                 * May the public methods other than property getters/setters and lifecycle
                 * methods be called for a component in this state? It returns
                 * <code>true</code> for any component in any of the following states:
                 * <ul>
                 * <li>{@link #STARTING}</li>
                 * <li>{@link #STARTED}</li>
                 * <li>{@link #STOPPING_PREP}</li>
                 * </ul>
                 * @return <code>true</code> if the component is available for use,
                 *          otherwise <code>false</code>
                 */
                // @ts-ignore
                public isAvailable(): boolean
                // @ts-ignore
                public getLifecycleEvent(): string
            }
        }
    }
}

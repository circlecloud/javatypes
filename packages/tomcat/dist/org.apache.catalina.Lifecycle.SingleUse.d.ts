declare namespace org {
    namespace apache {
        namespace catalina {
            namespace Lifecycle {
                /**
                 * Marker interface used to indicate that the instance should only be used
                 * once. Calling {@link #stop()} on an instance that supports this interface
                 * will automatically call {@link #destroy()} after {@link #stop()}
                 * completes.
                 */
                // @ts-ignore
                interface SingleUse {
                }
            }
        }
    }
}

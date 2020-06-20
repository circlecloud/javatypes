declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace support {
                /**
                 * Default implementation of the {@link RemoteInvocationExecutor} interface.
                 * Simply delegates to {@link RemoteInvocation}'s invoke method.
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see RemoteInvocation#invoke
                 */
                // @ts-ignore
                class DefaultRemoteInvocationExecutor extends java.lang.Object implements org.springframework.remoting.support.RemoteInvocationExecutor {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    invoke(invocation: org.springframework.remoting.support.RemoteInvocation, targetObject: any): java.lang.Object
                }
            }
        }
    }
}

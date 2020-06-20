declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace support {
                /**
                 * Default implementation of the {@link RemoteInvocationFactory} interface.
                 * Simply creates a new standard {@link RemoteInvocation} object.
                 * @author Juergen Hoeller
                 * @since 1.1
                 */
                // @ts-ignore
                class DefaultRemoteInvocationFactory extends java.lang.Object implements org.springframework.remoting.support.RemoteInvocationFactory {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    createRemoteInvocation(methodInvocation: MethodInvocation): org.springframework.remoting.support.RemoteInvocation
                }
            }
        }
    }
}

declare namespace java {
    namespace rmi {
        namespace server {
            /**
             * The {@code RemoteStub} class is the common superclass of
             * statically generated client
             * stubs and provides the framework to support a wide range of remote
             * reference semantics.  Stub objects are surrogates that support
             * exactly the same set of remote interfaces defined by the actual
             * implementation of the remote object.
             * @author Ann Wollrath
             * @since JDK1.1
             * @deprecated Statically generated stubs are deprecated, since
             *  stubs are generated dynamically. See {#link UnicastRemoteObject}
             *  for information about dynamic stub generation.
             */
            // @ts-ignore
            class RemoteStub extends java.rmi.server.RemoteObject {
                /**
                 * Constructs a {@code RemoteStub}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a {@code RemoteStub} with the specified remote
                 * reference.
                 * @param ref the remote reference
                 * @since JDK1.1
                 */
                // @ts-ignore
                constructor(ref: java.rmi.server.RemoteRef)
                /**
                 * Throws {@link UnsupportedOperationException}.
                 * @param stub the remote stub
                 * @param ref the remote reference
                 * @throws UnsupportedOperationException always
                 * @since JDK1.1
                 * @deprecated No replacement.  The {#code setRef} method
                 *  was intended for setting the remote reference of a remote
                 *  stub. This is unnecessary, since {@code RemoteStub}s can be created
                 *  and initialized with a remote reference through use of
                 *  the {@link #RemoteStub(RemoteRef)} constructor.
                 */
                // @ts-ignore
                setRef(stub: java.rmi.server.RemoteStub, ref: java.rmi.server.RemoteRef): void
            }
        }
    }
}

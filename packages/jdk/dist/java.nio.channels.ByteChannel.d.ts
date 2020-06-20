declare namespace java {
    namespace nio {
        namespace channels {
            /**
             * A channel that can read and write bytes.  This interface simply unifies
             * {@link ReadableByteChannel} and {@link WritableByteChannel}; it does not
             * specify any new operations.
             * @author Mark Reinhold
             * @author JSR-51 Expert Group
             * @since 1.4
             */
            // @ts-ignore
            interface ByteChannel extends java.nio.channels.ReadableByteChannel, java.nio.channels.WritableByteChannel {
            }
        }
    }
}

declare namespace javax {
    namespace rmi {
        namespace CORBA {
            /**
             * Java to IDL ptc 02-01-12 1.5.1.5
             * @since 1.5
             */
            // @ts-ignore
            interface ValueHandlerMultiFormat extends javax.rmi.CORBA.ValueHandler {
                /**
                 * Returns the maximum stream format version for
                 * RMI/IDL custom value types that is supported
                 * by this ValueHandler object. The ValueHandler
                 * object must support the returned stream format version and
                 * all lower versions.
                 * An ORB may use this value to include in a standard
                 * IOR tagged component or service context to indicate to other
                 * ORBs the maximum RMI-IIOP stream format that it
                 * supports.  If not included, the default for GIOP 1.2
                 * is stream format version 1, and stream format version
                 * 2 for GIOP 1.3 and higher.
                 */
                // @ts-ignore
                getMaximumStreamFormatVersion(): byte
                /**
                 * Allows the ORB to pass the stream format
                 * version for RMI/IDL custom value types. If the ORB
                 * calls this method, it must pass a stream format version
                 * between 1 and the value returned by the
                 * getMaximumStreamFormatVersion method inclusive,
                 * or else a BAD_PARAM exception with standard minor code
                 * will be thrown.
                 * If the ORB calls the older ValueHandler.writeValue(OutputStream,
                 * Serializable) method, stream format version 1 is implied.
                 * The ORB output stream passed to the ValueHandlerMultiFormat.writeValue
                 * method must implement the ValueOutputStream interface, and the
                 * ORB input stream passed to the ValueHandler.readValue method must
                 * implement the ValueInputStream interface.
                 */
                // @ts-ignore
                writeValue(out: org.omg.CORBA.portable.OutputStream, value: java.io.Serializable, streamFormatVersion: number /*byte*/): void
            }
        }
    }
}

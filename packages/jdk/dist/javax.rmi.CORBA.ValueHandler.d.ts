declare namespace javax {
    namespace rmi {
        namespace CORBA {
            /**
             * Defines methods which allow serialization of Java objects
             * to and from GIOP streams.
             */
            // @ts-ignore
            interface ValueHandler {
                /**
                 * Writes a value to the stream using Java semantics.
                 * @param out the stream to write the value to.
                 * @param value the value to be written to the stream.
                 */
                // @ts-ignore
                writeValue(out: org.omg.CORBA.portable.OutputStream, value: java.io.Serializable): void
                /**
                 * Reads a value from the stream using Java semantics.
                 * @param in the stream to read the value from.
                 * @param offset the current position in the input stream.
                 * @param clz the type of the value to be read in.
                 * @param repositoryID the RepositoryId of the value to be read in.
                 * @param sender the sending context runtime codebase.
                 * @return the value read from the stream.
                 */
                // @ts-ignore
                readValue(input: org.omg.CORBA.portable.InputStream, offset: number /*int*/, clz: java.lang.Class<any>, repositoryID: java.lang.String | string, sender: org.omg.SendingContext.RunTime): java.io.Serializable
                /**
                 * Returns the CORBA RepositoryId for the given Java class.
                 * @param clz a Java class.
                 * @return the CORBA RepositoryId for the class.
                 */
                // @ts-ignore
                getRMIRepositoryID(clz: java.lang.Class<any>): string
                /**
                 * Indicates whether the given class performs custom or
                 * default marshaling.
                 * @param clz the class to test for custom marshaling.
                 * @return <code>true</code> if the class performs custom marshaling, <code>false</code>
                 *  if it does not.
                 */
                // @ts-ignore
                isCustomMarshaled(clz: java.lang.Class<any>): boolean
                /**
                 * Returns the CodeBase for this ValueHandler.  This is used by
                 * the ORB runtime.  The server sends the service context containing
                 * the IOR for this CodeBase on the first GIOP reply.  The client
                 * does the same on the first GIOP request.
                 * @return the SendingContext.CodeBase of this ValueHandler.
                 */
                // @ts-ignore
                getRunTimeCodeBase(): org.omg.SendingContext.RunTime
                /**
                 * If the value contains a <code>writeReplace</code> method then the result
                 * is returned.  Otherwise, the value itself is returned.
                 * @param value the value to be marshaled.
                 * @return the true value to marshal on the wire.
                 */
                // @ts-ignore
                writeReplace(value: java.io.Serializable): java.io.Serializable
            }
        }
    }
}

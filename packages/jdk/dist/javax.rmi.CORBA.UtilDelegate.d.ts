declare namespace javax {
    namespace rmi {
        namespace CORBA {
            /**
             * Supports delegation for method implementations in {@link Util}.  The
             * delegate is a singleton instance of a class that implements this
             * interface and provides a replacement implementation for all the
             * methods of <code>javax.rmi.CORBA.Util</code>.
             * Delegation is enabled by providing the delegate's class name as the
             * value of the
             * <code>javax.rmi.CORBA.UtilClass</code>
             * system property.
             * @see Util
             */
            // @ts-ignore
            interface UtilDelegate {
                /**
                 * Delegation call for {@link Util#mapSystemException}.
                 */
                // @ts-ignore
                mapSystemException(ex: org.omg.CORBA.SystemException): java.rmi.RemoteException
                /**
                 * Delegation call for {@link Util#writeAny}.
                 */
                // @ts-ignore
                writeAny(out: org.omg.CORBA.portable.OutputStream, obj: java.lang.Object | any): void
                /**
                 * Delegation call for {@link Util#readAny}.
                 */
                // @ts-ignore
                readAny(input: org.omg.CORBA.portable.InputStream): any
                /**
                 * Delegation call for {@link Util#writeRemoteObject}.
                 */
                // @ts-ignore
                writeRemoteObject(out: org.omg.CORBA.portable.OutputStream, obj: java.lang.Object | any): void
                /**
                 * Delegation call for {@link Util#writeAbstractObject}.
                 */
                // @ts-ignore
                writeAbstractObject(out: org.omg.CORBA.portable.OutputStream, obj: java.lang.Object | any): void
                /**
                 * Delegation call for {@link Util#registerTarget}.
                 */
                // @ts-ignore
                registerTarget(tie: javax.rmi.CORBA.Tie, target: java.rmi.Remote): void
                /**
                 * Delegation call for {@link Util#unexportObject}.
                 */
                // @ts-ignore
                unexportObject(target: java.rmi.Remote): void
                /**
                 * Delegation call for {@link Util#getTie}.
                 */
                // @ts-ignore
                getTie(target: java.rmi.Remote): javax.rmi.CORBA.Tie
                /**
                 * Delegation call for {@link Util#createValueHandler}.
                 */
                // @ts-ignore
                createValueHandler(): javax.rmi.CORBA.ValueHandler
                /**
                 * Delegation call for {@link Util#getCodebase}.
                 */
                // @ts-ignore
                getCodebase(clz: java.lang.Class<any>): string
                /**
                 * Delegation call for {@link Util#loadClass}.
                 */
                // @ts-ignore
                loadClass(className: java.lang.String | string, remoteCodebase: java.lang.String | string, loader: java.lang.ClassLoader): java.lang.Class<any>
                /**
                 * Delegation call for {@link Util#isLocal}.
                 */
                // @ts-ignore
                isLocal(stub: javax.rmi.CORBA.Stub): boolean
                /**
                 * Delegation call for {@link Util#wrapException}.
                 */
                // @ts-ignore
                wrapException(obj: java.lang.Throwable | Error): java.rmi.RemoteException
                /**
                 * Delegation call for {@link Util#copyObject}.
                 */
                // @ts-ignore
                copyObject(obj: java.lang.Object | any, orb: org.omg.CORBA.ORB): any
                /**
                 * Delegation call for {@link Util#copyObjects}.
                 */
                // @ts-ignore
                copyObjects(obj: java.lang.Object[] | any[], orb: org.omg.CORBA.ORB): any[]
            }
        }
    }
}

declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * Utility for detecting and accessing JBoss VFS in the classpath.
                 * <p>As of Spring 4.0, this class supports VFS 3.x on JBoss AS 6+
                 * (package {@code org.jboss.vfs}) and is in particular compatible with
                 * JBoss AS 7 and WildFly 8+.
                 * <p>Thanks go to Marius Bogoevici for the initial patch.
                 * <b>Note:</b> This is an internal class and should not be used outside the framework.
                 * @author Costin Leau
                 * @author Juergen Hoeller
                 * @since 3.0.3
                 */
                // @ts-ignore
                abstract class VfsUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly VIRTUAL_FILE_VISITOR_INTERFACE: java.lang.Class<any>
                    // @ts-ignore
                    static readonly VIRTUAL_FILE_METHOD_VISIT: java.lang.reflect.Method
                    // @ts-ignore
                    static invokeVfsMethod(method: java.lang.reflect.Method, target: java.lang.Object | any, ...args: java.lang.Object[] | any[]): any
                    // @ts-ignore
                    static getRoot(url: java.net.URL): any
                    // @ts-ignore
                    static doGetVisitorAttributes(): any
                    // @ts-ignore
                    static doGetPath(resource: java.lang.Object | any): string
                }
            }
        }
    }
}

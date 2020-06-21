declare namespace org {
    namespace apache {
        namespace catalina {
            namespace security {
                /**
                 * This utility class associates a <code>Subject</code> to the current
                 * <code>AccessControlContext</code>. When a <code>SecurityManager</code> is
                 * used, the container will always associate the called thread with an
                 * AccessControlContext containing only the principal of the requested
                 * Servlet/Filter.
                 * This class uses reflection to invoke the methods.
                 */
                // @ts-ignore
                class SecurityUtil extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Perform work as a particular <code>Subject</code>. Here the work
                     * will be granted to a <code>null</code> subject.
                     * @param methodName the method to apply the security restriction
                     * @param targetObject the <code>Servlet</code> on which the method will
                     *  be called.
                     * @throws Exception an execution error occurred
                     */
                    // @ts-ignore
                    public static doAsPrivilege(methodName: java.lang.String | string, targetObject: javax.servlet.Servlet): void
                    /**
                     * Perform work as a particular <code>Subject</code>. Here the work
                     * will be granted to a <code>null</code> subject.
                     * @param methodName the method to apply the security restriction
                     * @param targetObject the <code>Servlet</code> on which the method will
                     *  be called.
                     * @param targetType <code>Class</code> array used to instantiate a
                     *  <code>Method</code> object.
                     * @param targetArguments <code>Object</code> array contains the runtime
                     *  parameters instance.
                     * @throws Exception an execution error occurred
                     */
                    // @ts-ignore
                    public static doAsPrivilege(methodName: java.lang.String | string, targetObject: javax.servlet.Servlet, targetType: java.lang.Class<any>[], targetArguments: java.lang.Object[] | any[]): void
                    /**
                     * Perform work as a particular <code>Subject</code>. Here the work
                     * will be granted to a <code>null</code> subject.
                     * @param methodName the method to apply the security restriction
                     * @param targetObject the <code>Servlet</code> on which the method will
                     *   be called.
                     * @param targetParameterTypes <code>Class</code> array used to instantiate a
                     *   <code>Method</code> object.
                     * @param targetArguments <code>Object</code> array contains the
                     *   runtime parameters instance.
                     * @param principal the <code>Principal</code> to which the security
                     *   privilege applies
                     * @throws Exception an execution error occurred
                     */
                    // @ts-ignore
                    public static doAsPrivilege(methodName: java.lang.String | string, targetObject: javax.servlet.Servlet, targetParameterTypes: java.lang.Class<any>[], targetArguments: java.lang.Object[] | any[], principal: java.security.Principal): void
                    /**
                     * Perform work as a particular <code>Subject</code>. Here the work
                     * will be granted to a <code>null</code> subject.
                     * @param methodName the method to apply the security restriction
                     * @param targetObject the <code>Filter</code> on which the method will
                     *   be called.
                     * @throws Exception an execution error occurred
                     */
                    // @ts-ignore
                    public static doAsPrivilege(methodName: java.lang.String | string, targetObject: javax.servlet.Filter): void
                    /**
                     * Perform work as a particular <code>Subject</code>. Here the work
                     * will be granted to a <code>null</code> subject.
                     * @param methodName the method to apply the security restriction
                     * @param targetObject the <code>Filter</code> on which the method will
                     *   be called.
                     * @param targetType <code>Class</code> array used to instantiate a
                     *   <code>Method</code> object.
                     * @param targetArguments <code>Object</code> array contains the
                     *   runtime parameters instance.
                     * @throws Exception an execution error occurred
                     */
                    // @ts-ignore
                    public static doAsPrivilege(methodName: java.lang.String | string, targetObject: javax.servlet.Filter, targetType: java.lang.Class<any>[], targetArguments: java.lang.Object[] | any[]): void
                    /**
                     * Perform work as a particular <code>Subject</code>. Here the work
                     * will be granted to a <code>null</code> subject.
                     * @param methodName the method to apply the security restriction
                     * @param targetObject the <code>Filter</code> on which the method will
                     *   be called.
                     * @param targetParameterTypes <code>Class</code> array used to instantiate a
                     *   <code>Method</code> object.
                     * @param targetParameterValues <code>Object</code> array contains the
                     *   runtime parameters instance.
                     * @param principal the <code>Principal</code> to which the security
                     *   privilege applies
                     * @throws Exception an execution error occurred
                     */
                    // @ts-ignore
                    public static doAsPrivilege(methodName: java.lang.String | string, targetObject: javax.servlet.Filter, targetParameterTypes: java.lang.Class<any>[], targetParameterValues: java.lang.Object[] | any[], principal: java.security.Principal): void
                    /**
                     * Remove the object from the cache.
                     * @param cachedObject The object to remove
                     */
                    // @ts-ignore
                    public static remove(cachedObject: java.lang.Object | any): void
                    /**
                     * Return the <code>SecurityManager</code> only if Security is enabled AND
                     * package protection mechanism is enabled.
                     * @return <code>true</code> if package level protection is enabled
                     */
                    // @ts-ignore
                    public static isPackageProtectionEnabled(): boolean
                }
            }
        }
    }
}

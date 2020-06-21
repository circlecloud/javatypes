declare namespace org {
    namespace apache {
        namespace catalina {
            namespace session {
                /**
                 * Facade for the StandardSession object.
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class StandardSessionFacade extends java.lang.Object implements javax.servlet.http.HttpSession {
                    /**
                     * Construct a new session facade.
                     * @param session The session instance to wrap
                     */
                    // @ts-ignore
                    constructor(session: javax.servlet.http.HttpSession)
                    // @ts-ignore
                    public getCreationTime(): number /*long*/
                    // @ts-ignore
                    public getId(): string
                    // @ts-ignore
                    public getLastAccessedTime(): number /*long*/
                    // @ts-ignore
                    public getServletContext(): javax.servlet.ServletContext
                    // @ts-ignore
                    public setMaxInactiveInterval(interval: number /*int*/): void
                    // @ts-ignore
                    public getMaxInactiveInterval(): number /*int*/
                    /**
                     * @deprecated As of Version 2.1, this method is deprecated and has no
                     *              replacement.
                     */
                    // @ts-ignore
                    public getSessionContext(): javax.servlet.http.HttpSessionContext
                    // @ts-ignore
                    public getAttribute(name: java.lang.String | string): any
                    /**
                     * @deprecated As of Version 2.2, this method is replaced by
                     *              {#link #getAttribute}.
                     */
                    // @ts-ignore
                    public getValue(name: java.lang.String | string): any
                    // @ts-ignore
                    public getAttributeNames(): java.util.Enumeration<java.lang.String | string>
                    /**
                     * @deprecated As of Version 2.2, this method is replaced by
                     *              {#link #getAttributeNames}
                     */
                    // @ts-ignore
                    public getValueNames(): string[]
                    // @ts-ignore
                    public setAttribute(name: java.lang.String | string, value: java.lang.Object | any): void
                    /**
                     * @deprecated As of Version 2.2, this method is replaced by
                     *              {#link #setAttribute}
                     */
                    // @ts-ignore
                    public putValue(name: java.lang.String | string, value: java.lang.Object | any): void
                    // @ts-ignore
                    public removeAttribute(name: java.lang.String | string): void
                    /**
                     * @deprecated As of Version 2.2, this method is replaced by
                     *              {#link #removeAttribute}
                     */
                    // @ts-ignore
                    public removeValue(name: java.lang.String | string): void
                    // @ts-ignore
                    public invalidate(): void
                    // @ts-ignore
                    public isNew(): boolean
                }
            }
        }
    }
}

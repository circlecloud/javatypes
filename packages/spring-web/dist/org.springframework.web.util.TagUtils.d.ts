declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Utility class for tag library related code, exposing functionality
                 * such as translating {@link String Strings} to web scopes.
                 * <p>
                 * <ul>
                 * <li>{@code page} will be transformed to
                 * {@link javax.servlet.jsp.PageContext#PAGE_SCOPE PageContext.PAGE_SCOPE}
                 * <li>{@code request} will be transformed to
                 * {@link javax.servlet.jsp.PageContext#REQUEST_SCOPE PageContext.REQUEST_SCOPE}
                 * <li>{@code session} will be transformed to
                 * {@link javax.servlet.jsp.PageContext#SESSION_SCOPE PageContext.SESSION_SCOPE}
                 * <li>{@code application} will be transformed to
                 * {@link javax.servlet.jsp.PageContext#APPLICATION_SCOPE PageContext.APPLICATION_SCOPE}
                 * </ul>
                 * @author Alef Arendsen
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @author Rick Evans
                 */
                // @ts-ignore
                class TagUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Constant identifying the page scope.
                     */
                    // @ts-ignore
                    readonly SCOPE_PAGE: string
                    /**
                     * Constant identifying the request scope.
                     */
                    // @ts-ignore
                    readonly SCOPE_REQUEST: string
                    /**
                     * Constant identifying the session scope.
                     */
                    // @ts-ignore
                    readonly SCOPE_SESSION: string
                    /**
                     * Constant identifying the application scope.
                     */
                    // @ts-ignore
                    readonly SCOPE_APPLICATION: string
                    /**
                     * Determines the scope for a given input {@code String}.
                     * <p>If the {@code String} does not match 'request', 'session',
                     * 'page' or 'application', the method will return {@link PageContext#PAGE_SCOPE}.
                     * @param scope the {#code String} to inspect
                     * @return the scope found, or {#link PageContext#PAGE_SCOPE} if no scope matched
                     * @throws IllegalArgumentException if the supplied {#code scope} is {@code null}
                     */
                    // @ts-ignore
                    getScope(scope: string): int
                    /**
                     * Determine whether the supplied {@link Tag} has any ancestor tag
                     * of the supplied type.
                     * @param tag the tag whose ancestors are to be checked
                     * @param ancestorTagClass the ancestor {#link Class} being searched for
                     * @return {#code true} if the supplied {@link Tag} has any ancestor tag
                     *  of the supplied type
                     * @throws IllegalArgumentException if either of the supplied arguments is {#code null};
                     *  or if the supplied {@code ancestorTagClass} is not type-assignable to
                     *  the {@link Tag} class
                     */
                    // @ts-ignore
                    hasAncestorOfType(tag: Tag, ancestorTagClass: java.lang.Class<any>): boolean
                    /**
                     * Determine whether the supplied {@link Tag} has any ancestor tag
                     * of the supplied type, throwing an {@link IllegalStateException}
                     * if not.
                     * @param tag the tag whose ancestors are to be checked
                     * @param ancestorTagClass the ancestor {#link Class} being searched for
                     * @param tagName the name of the {#code tag}; for example '{@code option}'
                     * @param ancestorTagName the name of the ancestor {#code tag}; for example '{@code select}'
                     * @throws IllegalStateException if the supplied {#code tag} does not
                     *  have a tag of the supplied {@code parentTagClass} as an ancestor
                     * @throws IllegalArgumentException if any of the supplied arguments is {#code null},
                     *  or in the case of the {@link String}-typed arguments, is composed wholly
                     *  of whitespace; or if the supplied {@code ancestorTagClass} is not
                     *  type-assignable to the {@link Tag} class
                     * @see #hasAncestorOfType(javax.servlet.jsp.tagext.Tag, Class)
                     */
                    // @ts-ignore
                    assertHasAncestorOfType(tag: Tag, ancestorTagClass: java.lang.Class<any>, tagName: string, ancestorTagName: string): void
                }
            }
        }
    }
}

declare namespace javax {
    namespace naming {
        namespace spi {
            /**
             * This class represents the result of resolution of a name.
             * It contains the object to which name was resolved, and the portion
             * of the name that has not been resolved.
             * <p>
             * A ResolveResult instance is not synchronized against concurrent
             * multithreaded access. Multiple threads trying to access and modify
             * a single ResolveResult instance should lock the object.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @since 1.3
             */
            // @ts-ignore
            class ResolveResult extends java.lang.Object implements java.io.Serializable {
                /**
                 * Constructs an instance of ResolveResult with the
                 * resolved object and remaining name both initialized to null.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new instance of ResolveResult consisting of
                 * the resolved object and the remaining unresolved component.
                 * @param robj The non-null object resolved to.
                 * @param rcomp The single remaining name component that has yet to be
                 *                  resolved. Cannot be null (but can be empty).
                 */
                // @ts-ignore
                constructor(robj: java.lang.Object | any, rcomp: java.lang.String | string)
                /**
                 * Constructs a new instance of ResolveResult consisting of
                 * the resolved Object and the remaining name.
                 * @param robj The non-null Object resolved to.
                 * @param rname The non-null remaining name that has yet to be resolved.
                 */
                // @ts-ignore
                constructor(robj: java.lang.Object | any, rname: javax.naming.Name)
                /**
                 * Field containing the Object that was resolved to successfully.
                 * It can be null only when constructed using a subclass.
                 * Constructors should always initialize this.
                 * @serial 
                 */
                // @ts-ignore
                resolvedObj: java.lang.Object | any
                /**
                 * Field containing the remaining name yet to be resolved.
                 * It can be null only when constructed using a subclass.
                 * Constructors should always initialize this.
                 * @serial 
                 */
                // @ts-ignore
                remainingName: javax.naming.Name
                /**
                 * Retrieves the remaining unresolved portion of the name.
                 * @return The remaining unresolved portion of the name.
                 *           Cannot be null but empty OK.
                 * @see #appendRemainingName
                 * @see #appendRemainingComponent
                 * @see #setRemainingName
                 */
                // @ts-ignore
                public getRemainingName(): javax.naming.Name
                /**
                 * Retrieves the Object to which resolution was successful.
                 * @return The Object to which resolution was successful. Cannot be null.
                 * @see #setResolvedObj
                 */
                // @ts-ignore
                public getResolvedObj(): any
                /**
                 * Sets the remaining name field of this result to name.
                 * A copy of name is made so that modifying the copy within
                 * this ResolveResult does not affect <code>name</code> and
                 * vice versa.
                 * @param name The name to set remaining name to. Cannot be null.
                 * @see #getRemainingName
                 * @see #appendRemainingName
                 * @see #appendRemainingComponent
                 */
                // @ts-ignore
                public setRemainingName(name: javax.naming.Name): void
                /**
                 * Adds components to the end of remaining name.
                 * @param name The components to add. Can be null.
                 * @see #getRemainingName
                 * @see #setRemainingName
                 * @see #appendRemainingComponent
                 */
                // @ts-ignore
                public appendRemainingName(name: javax.naming.Name): void
                /**
                 * Adds a single component to the end of remaining name.
                 * @param name The component to add. Can be null.
                 * @see #getRemainingName
                 * @see #appendRemainingName
                 */
                // @ts-ignore
                public appendRemainingComponent(name: java.lang.String | string): void
                /**
                 * Sets the resolved Object field of this result to obj.
                 * @param obj The object to use for setting the resolved obj field.
                 *             Cannot be null.
                 * @see #getResolvedObj
                 */
                // @ts-ignore
                public setResolvedObj(obj: java.lang.Object | any): void
            }
        }
    }
}

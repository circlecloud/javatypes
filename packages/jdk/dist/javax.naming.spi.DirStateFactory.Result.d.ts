declare namespace javax {
    namespace naming {
        namespace spi {
            namespace DirStateFactory {
                /**
                 * An object/attributes pair for returning the result of
                 * DirStateFactory.getStateToBind().
                 */
                // @ts-ignore
                class Result extends java.lang.Object {
                    /**
                     * Constructs an instance of Result.
                     * @param obj The possibly null object to be bound.
                     * @param outAttrs The possibly null attributes to be bound.
                     */
                    // @ts-ignore
                    constructor(obj: java.lang.Object | any, outAttrs: javax.naming.directory.Attributes)
                    /**
                     * Retrieves the object to be bound.
                     * @return The possibly null object to be bound.
                     */
                    // @ts-ignore
                    public getObject(): any
                    /**
                     * Retrieves the attributes to be bound.
                     * @return The possibly null attributes to be bound.
                     */
                    // @ts-ignore
                    public getAttributes(): javax.naming.directory.Attributes
                }
            }
        }
    }
}

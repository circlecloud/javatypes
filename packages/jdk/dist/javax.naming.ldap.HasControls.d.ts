declare namespace javax {
    namespace naming {
        namespace ldap {
            /**
             * This interface is for returning controls with objects returned
             * in NamingEnumerations.
             * For example, suppose a server sends back controls with the results
             * of a search operation, the service provider would return a NamingEnumeration of
             * objects that are both SearchResult and implement HasControls.
             * <blockquote><pre>
             * NamingEnumeration elts = ectx.search((Name)name, filter, sctls);
             * while (elts.hasMore()) {
             * Object entry = elts.next();
             * // Get search result
             * SearchResult res = (SearchResult)entry;
             * // do something with it
             * // Get entry controls
             * if (entry instanceof HasControls) {
             * Control[] entryCtls = ((HasControls)entry).getControls();
             * // do something with controls
             * }
             * }
             * </pre></blockquote>
             * @author Rosanna Lee
             * @author Scott Seligman
             * @author Vincent Ryan
             * @since 1.3
             */
            // @ts-ignore
            interface HasControls {
                /**
                 * Retrieves an array of <tt>Control</tt>s from the object that
                 * implements this interface. It is null if there are no controls.
                 * @return A possibly null array of <tt>Control</tt> objects.
                 * @throws NamingException If cannot return controls due to an error.
                 */
                // @ts-ignore
                getControls(): javax.naming.ldap.Control[]
            }
        }
    }
}

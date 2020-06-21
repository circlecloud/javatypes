declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace modeler {
                    /**
                     * <p>Implementation of <code>NotificationFilter</code> for attribute change
                     * notifications.  This class is used by <code>BaseModelMBean</code> to
                     * construct attribute change notification event filters when a filter is not
                     * supplied by the application.</p>
                     * @author Craig R. McClanahan
                     */
                    // @ts-ignore
                    class BaseAttributeFilter extends java.lang.Object implements javax.management.NotificationFilter {
                        /**
                         * Construct a new filter that accepts only the specified attribute
                         * name.
                         * @param name Name of the attribute to be accepted by this filter, or
                         *   <code>null</code> to accept all attribute names
                         */
                        // @ts-ignore
                        constructor(name: java.lang.String | string)
                        /**
                         * Add a new attribute name to the set of names accepted by this filter.
                         * @param name Name of the attribute to be accepted
                         */
                        // @ts-ignore
                        public addAttribute(name: java.lang.String | string): void
                        /**
                         * Clear all accepted names from this filter, so that it will accept
                         * all attribute names.
                         */
                        // @ts-ignore
                        public clear(): void
                        /**
                         * Return the set of names that are accepted by this filter.  If this
                         * filter accepts all attribute names, a zero length array will be
                         * returned.
                         * @return the array of names
                         */
                        // @ts-ignore
                        public getNames(): string[]
                        /**
                         * <p>Test whether notification enabled for this event.
                         * Return true if:</p>
                         * <ul>
                         * <li>This is an attribute change notification</li>
                         * <li>Either the set of accepted names is empty (implying that all
                         * attribute names are of interest) or the set of accepted names
                         * includes the name of the attribute in this notification</li>
                         * </ul>
                         */
                        // @ts-ignore
                        public isNotificationEnabled(notification: javax.management.Notification): boolean
                        /**
                         * Remove an attribute name from the set of names accepted by this
                         * filter.
                         * @param name Name of the attribute to be removed
                         */
                        // @ts-ignore
                        public removeAttribute(name: java.lang.String | string): void
                    }
                }
            }
        }
    }
}

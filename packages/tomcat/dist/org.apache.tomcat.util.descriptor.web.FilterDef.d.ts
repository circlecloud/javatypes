declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Representation of a filter definition for a web application, as represented
                         * in a <code>&lt;filter&gt;</code> element in the deployment descriptor.
                         * @author Craig R. McClanahan
                         */
                        // @ts-ignore
                        class FilterDef extends java.lang.Object implements java.io.Serializable {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getDescription(): string
                            // @ts-ignore
                            public setDescription(description: java.lang.String | string): void
                            // @ts-ignore
                            public getDisplayName(): string
                            // @ts-ignore
                            public setDisplayName(displayName: java.lang.String | string): void
                            // @ts-ignore
                            public getFilter(): javax.servlet.Filter
                            // @ts-ignore
                            public setFilter(filter: javax.servlet.Filter): void
                            // @ts-ignore
                            public getFilterClass(): string
                            // @ts-ignore
                            public setFilterClass(filterClass: java.lang.String | string): void
                            // @ts-ignore
                            public getFilterName(): string
                            // @ts-ignore
                            public setFilterName(filterName: java.lang.String | string): void
                            // @ts-ignore
                            public getLargeIcon(): string
                            // @ts-ignore
                            public setLargeIcon(largeIcon: java.lang.String | string): void
                            // @ts-ignore
                            public getParameterMap(): java.util.Map<java.lang.String | string, java.lang.String | string>
                            // @ts-ignore
                            public getSmallIcon(): string
                            // @ts-ignore
                            public setSmallIcon(smallIcon: java.lang.String | string): void
                            // @ts-ignore
                            public getAsyncSupported(): string
                            // @ts-ignore
                            public setAsyncSupported(asyncSupported: java.lang.String | string): void
                            /**
                             * Add an initialization parameter to the set of parameters associated
                             * with this filter.
                             * @param name The initialization parameter name
                             * @param value The initialization parameter value
                             */
                            // @ts-ignore
                            public addInitParameter(name: java.lang.String | string, value: java.lang.String | string): void
                            /**
                             * Render a String representation of this object.
                             */
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}

declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Representation of a filter mapping for a web application, as represented
                         * in a <code>&lt;filter-mapping&gt;</code> element in the deployment
                         * descriptor.  Each filter mapping must contain a filter name plus either
                         * a URL pattern or a servlet name.
                         * @author Craig R. McClanahan
                         */
                        // @ts-ignore
                        class FilterMap extends org.apache.tomcat.util.descriptor.web.XmlEncodingBase implements java.io.Serializable {
                            // @ts-ignore
                            constructor()
                            /**
                             * The name of this filter to be executed when this mapping matches
                             * a particular request.
                             */
                            // @ts-ignore
                            public static readonly ERROR: number /*int*/
                            // @ts-ignore
                            public static readonly FORWARD: number /*int*/
                            // @ts-ignore
                            public static readonly INCLUDE: number /*int*/
                            // @ts-ignore
                            public static readonly REQUEST: number /*int*/
                            // @ts-ignore
                            public static readonly ASYNC: number /*int*/
                            // @ts-ignore
                            public getFilterName(): string
                            // @ts-ignore
                            public setFilterName(filterName: java.lang.String | string): void
                            // @ts-ignore
                            public getServletNames(): string[]
                            // @ts-ignore
                            public addServletName(servletName: java.lang.String | string): void
                            // @ts-ignore
                            public getMatchAllUrlPatterns(): boolean
                            // @ts-ignore
                            public getMatchAllServletNames(): boolean
                            // @ts-ignore
                            public getURLPatterns(): string[]
                            // @ts-ignore
                            public addURLPattern(urlPattern: java.lang.String | string): void
                            // @ts-ignore
                            public addURLPatternDecoded(urlPattern: java.lang.String | string): void
                            /**
                             * This method will be used to set the current state of the FilterMap
                             * representing the state of when filters should be applied.
                             * @param dispatcherString the dispatcher type which should
                             *   match this filter
                             */
                            // @ts-ignore
                            public setDispatcher(dispatcherString: java.lang.String | string): void
                            // @ts-ignore
                            public getDispatcherMapping(): number /*int*/
                            // @ts-ignore
                            public getDispatcherNames(): string[]
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

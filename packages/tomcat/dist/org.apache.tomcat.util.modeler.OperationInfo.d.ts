declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace modeler {
                    /**
                     * <p>Internal configuration information for an <code>Operation</code>
                     * descriptor.</p>
                     * @author Craig R. McClanahan
                     */
                    // @ts-ignore
                    class OperationInfo extends org.apache.tomcat.util.modeler.FeatureInfo {
                        /**
                         * Standard zero-arguments constructor.
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        impact: java.lang.String | string
                        // @ts-ignore
                        role: java.lang.String | string
                        // @ts-ignore
                        readonly parametersLock: java.util.concurrent.locks.ReadWriteLock
                        // @ts-ignore
                        parameters: org.apache.tomcat.util.modeler.ParameterInfo[]
                        /**
                         * @return the "impact" of this operation, which should be
                         *   a (case-insensitive) string value "ACTION", "ACTION_INFO",
                         *   "INFO", or "UNKNOWN".
                         */
                        // @ts-ignore
                        public getImpact(): string
                        // @ts-ignore
                        public setImpact(impact: java.lang.String | string): void
                        /**
                         * @return the role of this operation ("getter", "setter", "operation", or
                         *  "constructor").
                         */
                        // @ts-ignore
                        public getRole(): string
                        // @ts-ignore
                        public setRole(role: java.lang.String | string): void
                        /**
                         * @return the fully qualified Java class name of the return type for this
                         *  operation.
                         */
                        // @ts-ignore
                        public getReturnType(): string
                        // @ts-ignore
                        public setReturnType(returnType: java.lang.String | string): void
                        /**
                         * @return the set of parameters for this operation.
                         */
                        // @ts-ignore
                        public getSignature(): org.apache.tomcat.util.modeler.ParameterInfo[]
                        /**
                         * Add a new parameter to the set of arguments for this operation.
                         * @param parameter The new parameter descriptor
                         */
                        // @ts-ignore
                        public addParameter(parameter: org.apache.tomcat.util.modeler.ParameterInfo): void
                        // @ts-ignore
                        getMBeanParameterInfo(): javax.management.MBeanParameterInfo[]
                    }
                }
            }
        }
    }
}

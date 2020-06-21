declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace log {
                    /**
                     * This helper class assists with the logging associated with invalid input
                     * data. A developer may want all instances of invalid input data logged to
                     * assist with debugging whereas in production it is likely to be desirable not
                     * to log anything for invalid data. The following settings may be used:
                     * <ul>
                     * <li>NOTHING: Log nothing.</li>
                     * <li>DEBUG_ALL: Log all problems at DEBUG log level.</li>
                     * <li>INFO_THEN_DEBUG: Log first problem at INFO log level and any further
                     * issues in the following TBD (configurable) seconds at DEBUG level</li>
                     * <li>INFO_ALL: Log all problems at INFO log level.</li>
                     * </ul>
                     * By default, INFO_THEN_DEBUG is used with a suppression time of 24 hours.
                     * NOTE: This class is not completely thread-safe. When using INFO_THEN_DEBUG it
                     * is possible that several INFO messages will be logged before dropping to
                     * DEBUG.
                     */
                    // @ts-ignore
                    class UserDataHelper extends java.lang.Object {
                        // @ts-ignore
                        constructor(log: org.apache.juli.logging.Log)
                        /**
                         * Returns log mode for the next log message, or <code>null</code> if the
                         * message should not be logged.
                         * <p>
                         * If <code>INFO_THEN_DEBUG</code> configuration option is enabled, this
                         * method might change internal state of this object.
                         * @return Log mode, or <code>null</code>
                         */
                        // @ts-ignore
                        public getNextMode(): org.apache.tomcat.util.log.UserDataHelper.Mode
                    }
                }
            }
        }
    }
}

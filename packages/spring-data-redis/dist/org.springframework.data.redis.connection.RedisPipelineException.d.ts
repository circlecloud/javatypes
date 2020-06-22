declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Exception thrown when executing/closing a pipeline that contains one or multiple invalid/incorrect statements. The
                     * exception might also contain the pipeline result (if the driver returns it), allowing for analysis and tracing.
                     * <p>
                     * Typically, the first exception returned by the pipeline is used as the <i>cause</i> of this exception for easier
                     * debugging.
                     * @author Costin Leau
                     */
                    // @ts-ignore
                    class RedisPipelineException extends InvalidDataAccessResourceUsageException {
                        /**
                         * Constructs a new <code>RedisPipelineException</code> instance.
                         * @param msg the message
                         * @param cause the cause
                         * @param pipelineResult the pipeline result
                         */
                        // @ts-ignore
                        constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error, pipelineResult: java.util.List<java.lang.Object | any> | Array<java.lang.Object | any>)
                        /**
                         * Constructs a new <code>RedisPipelineException</code> instance using a default message.
                         * @param cause the cause
                         * @param pipelineResult the pipeline result
                         */
                        // @ts-ignore
                        constructor(cause: java.lang.Exception, pipelineResult: java.util.List<java.lang.Object | any> | Array<java.lang.Object | any>)
                        /**
                         * Constructs a new <code>RedisPipelineException</code> instance using a default message and an empty pipeline result
                         * list.
                         * @param cause the cause
                         */
                        // @ts-ignore
                        constructor(cause: java.lang.Exception)
                        /**
                         * Constructs a new <code>RedisPipelineException</code> instance.
                         * @param msg message
                         * @param pipelineResult pipeline partial results
                         */
                        // @ts-ignore
                        constructor(msg: java.lang.String | string, pipelineResult: java.util.List<java.lang.Object | any> | Array<java.lang.Object | any>)
                        /**
                         * Optionally returns the result of the pipeline that caused the exception. Typically contains both the results of the
                         * successful statements but also the exceptions of the incorrect ones.
                         * @return result of the pipeline
                         */
                        // @ts-ignore
                        public getPipelineResult(): Array<java.lang.Object | any>
                    }
                }
            }
        }
    }
}

declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    namespace async {
                        namespace DeferredResult {
                            /**
                             * Handles a DeferredResult value when set.
                             */
                            // @ts-ignore
                            interface DeferredResultHandler {
                                // @ts-ignore
                                handleResult(result: java.lang.Object | any): void
                            }
                        }
                    }
                }
            }
        }
    }
}

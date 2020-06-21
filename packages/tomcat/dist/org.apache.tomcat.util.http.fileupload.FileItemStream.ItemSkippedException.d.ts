declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        namespace FileItemStream {
                            /**
                             * This exception is thrown, if an attempt is made to read
                             * data from the {@link InputStream}, which has been returned
                             * by {@link FileItemStream#openStream()}, after
                             * {@link java.util.Iterator#hasNext()} has been invoked on the
                             * iterator, which created the {@link FileItemStream}.
                             */
                            // @ts-ignore
                            class ItemSkippedException extends java.io.IOException {
                                // @ts-ignore
                                constructor()
                            }
                        }
                    }
                }
            }
        }
    }
}

declare namespace java {
    namespace nio {
        namespace file {
            /**
             * Defines the <em>standard</em> event kinds.
             * @since 1.7
             */
            // @ts-ignore
            class StandardWatchEventKinds extends java.lang.Object {
                /**
                 * A special event to indicate that events may have been lost or
                 * discarded.
                 * <p> The {@link WatchEvent#context context} for this event is
                 * implementation specific and may be {@code null}. The event {@link
                 * WatchEvent#count count} may be greater than {@code 1}.
                 * @see WatchService
                 */
                // @ts-ignore
                public static readonly OVERFLOW: java.nio.file.WatchEvent.Kind<java.lang.Object | any>
                /**
                 * Directory entry created.
                 * <p> When a directory is registered for this event then the {@link WatchKey}
                 * is queued when it is observed that an entry is created in the directory
                 * or renamed into the directory. The event {@link WatchEvent#count count}
                 * for this event is always {@code 1}.
                 */
                // @ts-ignore
                public static readonly ENTRY_CREATE: java.nio.file.WatchEvent.Kind<java.nio.file.Path>
                /**
                 * Directory entry deleted.
                 * <p> When a directory is registered for this event then the {@link WatchKey}
                 * is queued when it is observed that an entry is deleted or renamed out of
                 * the directory. The event {@link WatchEvent#count count} for this event
                 * is always {@code 1}.
                 */
                // @ts-ignore
                public static readonly ENTRY_DELETE: java.nio.file.WatchEvent.Kind<java.nio.file.Path>
                /**
                 * Directory entry modified.
                 * <p> When a directory is registered for this event then the {@link WatchKey}
                 * is queued when it is observed that an entry in the directory has been
                 * modified. The event {@link WatchEvent#count count} for this event is
                 * {@code 1} or greater.
                 */
                // @ts-ignore
                public static readonly ENTRY_MODIFY: java.nio.file.WatchEvent.Kind<java.nio.file.Path>
            }
        }
    }
}

declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace annotation {
                /**
                 * Annotation that marks a method to be scheduled. Exactly one of the
                 * {@link #cron}, {@link #fixedDelay}, or {@link #fixedRate} attributes must be
                 * specified.
                 * <p>The annotated method must expect no arguments. It will typically have
                 * a {@code void} return type; if not, the returned value will be ignored
                 * when called through the scheduler.
                 * <p>Processing of {@code @Scheduled} annotations is performed by
                 * registering a {@link ScheduledAnnotationBeanPostProcessor}. This can be
                 * done manually or, more conveniently, through the {@code <task:annotation-driven/>}
                 * element or @{@link EnableScheduling} annotation.
                 * <p>This annotation may be used as a <em>meta-annotation</em> to create custom
                 * <em>composed annotations</em> with attribute overrides.
                 * @author Mark Fisher
                 * @author Juergen Hoeller
                 * @author Dave Syer
                 * @author Chris Beams
                 * @since 3.0
                 * @see EnableScheduling
                 * @see ScheduledAnnotationBeanPostProcessor
                 * @see Schedules
                 */
                // @ts-ignore
                class Scheduled implements java.lang.annotation.Annotation {
                    /**
                     * A special cron expression value that indicates a disabled trigger: {@value}.
                     * <p>This is primarily meant for use with <code>${...}</code> placeholders,
                     * allowing for external disabling of corresponding scheduled methods.
                     * @since 5.1
                     * @see ScheduledTaskRegistrar#CRON_DISABLED
                     */
                    // @ts-ignore
                    readonly CRON_DISABLED: string
                }
            }
        }
    }
}

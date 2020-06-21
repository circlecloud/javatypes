declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace TristateResult {
                    // @ts-ignore
                    class Result extends java.lang.Enum<org.spongepowered.api.event.TristateResult.Result> {
                        /**
                         * Disallow the event from resolving.
                         * <p>Note: Normally, this means cancelling or reverting the default
                         * behavior, but in some cases, especially when {@link #hasAllowResult}
                         * is true, this could be default behavior.</p>
                         */
                        // @ts-ignore
                        readonly DENY: org.spongepowered.api.event.TristateResult.Result
                        /**
                         * Let the event resolve with its normal behavior, as if the event was
                         * not handled at all.
                         * <p>Note: This will fall back to the "vanilla" behavior for this
                         * event, or the plugin-defined behavior if it was originally created
                         * by a plugin.</p>
                         */
                        // @ts-ignore
                        readonly DEFAULT: org.spongepowered.api.event.TristateResult.Result
                        /**
                         * Forcibly execute the action of this event when it resolves, even if
                         * another condition would normally prevent this event from finishing
                         * normally.
                         * <p>Note that not all events have an overridable behavior,
                         * so {@link #hasAllowResult} should be checked before setting the
                         * result to ALLOW.</p>
                         */
                        // @ts-ignore
                        readonly ALLOW: org.spongepowered.api.event.TristateResult.Result
                        // @ts-ignore
                        values(): org.spongepowered.api.event.TristateResult.Result[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.spongepowered.api.event.TristateResult.Result
                    }
                }
            }
        }
    }
}
